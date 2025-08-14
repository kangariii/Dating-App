// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Sound System - Simple version
class SoundSystem {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.initialized = false;
    }

    async init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            console.log('Sound system initialized');
        } catch (error) {
            console.log('Sound system not available:', error);
            this.enabled = false;
        }
    }

    playTone(frequency, duration, type = 'sine', volume = 0.1) {
        if (!this.enabled || !this.initialized || !this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playCorrect() {
        this.playTone(523, 0.15);
        setTimeout(() => this.playTone(659, 0.15), 100);
        setTimeout(() => this.playTone(784, 0.2), 200);
    }

    playIncorrect() {
        this.playTone(200, 0.3, 'sawtooth', 0.15);
        setTimeout(() => this.playTone(150, 0.3, 'sawtooth', 0.15), 100);
    }

    playClick() {
        this.playTone(800, 0.1, 'square', 0.05);
    }

    playRoundComplete() {
        const notes = [523, 659, 784, 1047];
        notes.forEach((note, i) => {
            setTimeout(() => this.playTone(note, 0.2), i * 150);
        });
    }

    playGameComplete() {
        const melody = [523, 523, 523, 415, 523, 659, 784];
        const durations = [0.15, 0.15, 0.15, 0.4, 0.15, 0.15, 0.4];
        melody.forEach((note, i) => {
            setTimeout(() => this.playTone(note, durations[i]), i * 200);
        });
    }

    playNewRound() {
        this.playTone(392, 0.2);
        setTimeout(() => this.playTone(523, 0.3), 150);
    }

    playJoin() {
        this.playTone(523, 0.2);
        setTimeout(() => this.playTone(659, 0.2), 200);
    }

    playSpeedTimer() {
        this.playTone(440, 0.1, 'square', 0.08);
    }

    playSpeedComplete() {
        this.playTone(220, 0.5, 'sawtooth', 0.12);
    }
}

// Create global sound instance
const soundSystem = new SoundSystem();

// Game state variables
let roomCode = '';
let playerId = '';
let playerName = '';
let isHost = false;
let gameRef = null;
let currentGame = null;

// Game structure - 3 competitive rounds only
const GAME_STRUCTURE = {
    1: { type: 'this-or-that', name: 'This or That' },
    2: { type: 'trivia', name: 'Trivia Challenge' },
    3: { type: 'speed', name: 'Speed Categories' }
};

// Question category mappings for each round
const QUESTION_CATEGORIES = {
    1: ['personal-preferences', 'fun-personality', 'background-stories'],
    2: ['values-beliefs', 'relationships-love', 'dreams-goals'], 
    3: ['soul-connection', 'intimacy-passion', 'lifes-big-questions']
};

// Category display names for UI
const CATEGORY_DISPLAY_NAMES = {
    'personal-preferences': 'Personal Preferences',
    'fun-personality': 'Fun & Personality',
    'background-stories': 'Background Stories',
    'values-beliefs': 'Values & Beliefs',
    'relationships-love': 'Relationships & Love',
    'dreams-goals': 'Dreams & Goals',
    'soul-connection': 'Soul Connection',
    'intimacy-passion': 'Intimacy & Passion',
    'lifes-big-questions': "Life's Big Questions"
};

// Game state variables for different game types
let thisOrThatQuestionsAsked = 0;
let thisOrThatRole = null;
let triviaQuestionsAsked = 0;
let triviaRoundScores = { player1: 0, player2: 0 };
let overallScores = { player1: 0, player2: 0 };
let speedTimer = null;
let speedTimeLeft = 45;
let speedMyAnswers = [];
let speedGameActive = false;
let speedAnswersSubmitted = false; // FIXED: Add new flag to prevent double submission

// FIXED: Add tracking for question results to prevent duplicate scoring
let processedResults = new Set();

// Confetti animation functions
function triggerConfetti(type = 'default') {
    switch(type) {
        case 'round-complete':
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            break;
        case 'game-complete':
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }
                const particleCount = 50 * (timeLeft / duration);
                confetti(Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                }));
                confetti(Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                }));
            }, 250);
            break;
        case 'correct':
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
            break;
        default:
            confetti();
    }
}

// Helper Functions
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
}

function generatePlayerId() {
    return Math.random().toString(36).substring(2, 15);
}

function showScreen(screenId) {
    console.log('Showing screen:', screenId); // Debug log
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
        targetScreen.classList.add('active');
        targetScreen.style.opacity = '1';
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Simple create room function
function createRoom() {
    console.log('Creating room...'); // Debug log
    roomCode = generateRoomCode();
    playerId = generatePlayerId();
    isHost = true;
    
    document.getElementById('room-code').textContent = roomCode;
    showScreen('create-screen');
    
    // Initialize sound system
    soundSystem.init();
}

// Simple join room function with better error handling
function showJoinScreen() {
    console.log('Showing join screen...'); // Debug log
    playerId = generatePlayerId();
    isHost = false;
    showScreen('join-screen');
    
    // Clear any previous input values
    document.getElementById('join-code').value = '';
    document.getElementById('joiner-name').value = '';
    
    // Initialize sound system
    soundSystem.init();
}

// Setup room for creator - FIXED to set host as ready
function setupRoom() {
    const name = document.getElementById('creator-name').value || 'Player 1';
    playerName = name;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    const gameData = {
        host: playerId,
        players: {
            [playerId]: {
                name: name,
                connected: true,
                ready: false  // Initially false, will be set to true in submitCreatorName
            }
        },
        currentRound: 0,
        gameStarted: false,
        overallScores: { player1: 0, player2: 0 }
    };
    
    gameRef.set(gameData)
        .then(() => {
            console.log('Room created successfully!');
            gameRef.on('value', handleGameUpdate);
            gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
            
            // CRITICAL FIX: Set host as ready after room is created
            return gameRef.child(`players/${playerId}/ready`).set(true);
        })
        .then(() => {
            console.log('Host set to ready!');
        })
        .catch((error) => {
            console.error('Error creating room:', error);
            alert('Error creating room: ' + error.message);
        });
}

// Submit creator name - FIXED to properly handle host ready state
function submitCreatorName() {
    const name = document.getElementById('creator-name').value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    console.log('Host submitting name and setting up room:', name);
    setupRoom();
    
    // Update UI to show waiting state
    document.getElementById('creator-setup').style.display = 'none';
    document.getElementById('creator-waiting').style.display = 'block';
}

// Join existing room - ENHANCED with better error handling and logging
function joinRoom() {
    console.log('Attempting to join room...'); // Debug log
    
    const code = document.getElementById('join-code').value.trim().toUpperCase();
    const name = document.getElementById('joiner-name').value.trim() || 'Player 2';
    
    console.log('Join code:', code, 'Player name:', name); // Debug log
    
    // Validation
    if (code.length !== 4) {
        alert('Please enter a valid 4-character room code');
        return;
    }
    
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    // Show loading state
    const joinBtn = document.getElementById('join-game-btn');
    const originalText = joinBtn.textContent;
    joinBtn.textContent = 'Joining...';
    joinBtn.disabled = true;
    
    // Show waiting message
    const waitingElement = document.getElementById('join-waiting');
    waitingElement.style.display = 'block';
    waitingElement.textContent = 'Connecting to room...';
    
    roomCode = code;
    playerName = name;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    console.log('Checking if room exists...'); // Debug log
    
    gameRef.once('value')
        .then((snapshot) => {
            console.log('Room check result:', snapshot.exists()); // Debug log
            
            if (snapshot.exists()) {
                console.log('Room found, joining...'); // Debug log
                
                // Initialize sound system
                soundSystem.init();
                soundSystem.playJoin();
                
                // Set joiner as ready immediately
                return gameRef.child(`players/${playerId}`).set({
                    name: name,
                    connected: true,
                    ready: true  // Joiner is ready immediately
                });
            } else {
                throw new Error('Room not found');
            }
        })
        .then(() => {
            console.log('Successfully joined room and set as ready!');
            
            // Set up listeners
            gameRef.on('value', handleGameUpdate);
            gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
            
            // Show success message
            waitingElement.textContent = 'Joined successfully! Waiting for host to start...';
            
        })
        .catch((error) => {
            console.error('Error joining room:', error);
            
            // Reset UI
            joinBtn.textContent = originalText;
            joinBtn.disabled = false;
            waitingElement.style.display = 'none';
            
            // Show appropriate error message
            if (error.message === 'Room not found') {
                alert('Room not found. Please check the code and try again.');
            } else {
                alert('Error joining room: ' + error.message);
            }
        });
}

// Main game update handler - ENHANCED with instruction screen handling
function handleGameUpdate(snapshot) {
    const gameData = snapshot.val();
    if (!gameData) {
        console.log('No game data received');
        return;
    }
    
    console.log('Game update received:', gameData); // Debug log
    
    currentGame = gameData;
    
    // Initialize scores if they don't exist
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
    }
    
    // Update scoreboard
    updateScoreboard();
    
    const playerCount = Object.keys(gameData.players).length;
    console.log('Player count:', playerCount); // Debug log
    
    // ENHANCED: Start game when both players ready
    if (playerCount === 2 && !gameData.gameStarted) {
        const allReady = Object.values(gameData.players).every(player => player.ready);
        console.log('All players ready status:', Object.values(gameData.players).map(p => ({name: p.name, ready: p.ready})));
        console.log('All players ready:', allReady); // Debug log
        
        if (allReady) {
            console.log('Both players ready, starting game...');
            
            // Show game is starting for non-host
            if (!isHost) {
                showScreen('game-screen');
                document.getElementById('turn-indicator').textContent = 'Game starting soon...';
                document.getElementById('question-content').style.display = 'none';
                document.getElementById('waiting-content').style.display = 'block';
            }
            
            // Host starts the game with instruction screen
            if (isHost) {
                console.log('Host starting game...');
                setTimeout(() => {
                    console.log('Calling startNewRound(1)...');
                    startNewRound(1);
                }, 1000); // Small delay for better UX
            }
        } else {
            console.log('Not all players ready yet');
        }
    } else if (gameData.gameStarted) {
        // Check for game completion first
        if (gameData.gamePhase === 'complete' || gameData.gameComplete) {
            showGameCompleteScreen();
            return;
        }
        
        // FIXED: Handle special game phases FIRST before checking round types
        if (gameData.gamePhase === 'instructions') {
            handleInstructionPhase(gameData);
        } else if (gameData.gamePhase === 'question-instructions') {
            handleQuestionInstructionPhase(gameData);
        } else if (gameData.gamePhase === 'category-selection') {
            handleCategorySelectionPhase(gameData);
        } else if (gameData.gamePhase === 'question-answering') {
            handleQuestionAnsweringPhase(gameData);
        } else {
            // Handle different game phases based on current round ONLY if no special phase
            const roundType = GAME_STRUCTURE[gameData.currentRound]?.type;
            console.log('Handling round type:', roundType); // Debug log
            
            if (roundType === 'this-or-that') {
                handleThisOrThatGameUpdate(gameData);
            } else if (roundType === 'trivia') {
                handleTriviaGameUpdate(gameData);
            } else if (roundType === 'speed') {
                handleSpeedCategoriesUpdate(gameData);
            }
        }
        
        // FIXED: Auto-progression logic for completed questions (host only)
        if (isHost && gameData.questionAnswered && gameData.gamePhase === 'question-answering') {
            console.log('Question answered, auto-progressing...');
            
            const nextRound = (gameData.currentRound || 0) + 1;
            
            if (nextRound > 3) {
                console.log('All rounds complete, showing final screen');
                // FIXED: Add a small delay and proper game completion
                setTimeout(() => {
                    gameRef.update({
                        gamePhase: 'complete',
                        gameComplete: true
                    });
                    showGameCompleteScreen();
                }, 1000);
            } else {
                console.log('Starting next round:', nextRound);
                startNewRound(nextRound);
            }
            
            // Clear the flag to prevent repeated progression
            gameRef.update({ questionAnswered: false });
        }
    } else if (playerCount === 1 && !isHost) {
        // Joiner waiting for host to be ready
        showScreen('join-screen');
        document.getElementById('join-waiting').textContent = 'Waiting for host to get ready...';
    }
}

// NEW: Handle instruction screen phase
function handleInstructionPhase(gameData) {
    const roundType = GAME_STRUCTURE[gameData.currentRound]?.type;
    
    if (roundType === 'this-or-that') {
        showScreen('this-or-that-instructions');
    } else if (roundType === 'trivia') {
        showScreen('trivia-instructions');
    } else if (roundType === 'speed') {
        showScreen('speed-instructions');
    }
    
    // Update scoreboards on instruction screens
    updateScoreboard();
    
    // FIXED: Update button states based on host status
    setTimeout(() => {
        updateInstructionButtons(roundType);
    }, 100);
}

// NEW: Update instruction buttons based on host status
function updateInstructionButtons(gameType) {
    let buttonSelector = '';
    let buttonText = '';
    
    if (gameType === 'this-or-that') {
        buttonSelector = '.screen#this-or-that-instructions .play-btn';
        buttonText = isHost ? 'Start This or That!' : 'Waiting for host to start...';
    } else if (gameType === 'trivia') {
        buttonSelector = '.screen#trivia-instructions .play-btn';
        buttonText = isHost ? 'Start Trivia Challenge!' : 'Waiting for host to start...';
    } else if (gameType === 'speed') {
        buttonSelector = '.screen#speed-instructions .play-btn';
        buttonText = isHost ? 'Start Speed Challenge!' : 'Waiting for host to start...';
    }
    
    const button = document.querySelector(buttonSelector);
    if (button) {
        button.textContent = buttonText;
        button.disabled = !isHost;
        
        if (!isHost) {
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
        } else {
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    }
}

// NEW: Function called when user clicks "Start Game" on instruction screens
function startGameModeFromInstructions(gameType) {
    console.log('startGameModeFromInstructions called with:', gameType);
    console.log('isHost:', isHost);
    console.log('currentGame:', currentGame);
    
    if (!isHost) {
        console.log('Only host can start game mode');
        alert('Only the host can start the game!');
        return;
    }
    
    if (!currentGame) {
        console.log('No current game data available');
        alert('Game data not ready. Please wait a moment and try again.');
        return;
    }
    
    console.log('Starting game mode from instructions:', gameType);
    soundSystem.playClick();
    
    // Add visual feedback - disable button temporarily
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Starting...';
    button.disabled = true;
    
    // Set both players as ready for this round and start the actual game
    const roundNumber = currentGame.currentRound;
    
    setTimeout(() => {
        if (gameType === 'this-or-that') {
            startThisOrThatGame(roundNumber);
        } else if (gameType === 'trivia') {
            startTriviaGame(roundNumber);
        } else if (gameType === 'speed') {
            startSpeedCategoriesGame(roundNumber);
        }
    }, 500); // Small delay to show feedback
}

// NEW: Handle question instruction phase (after competitive rounds)
function handleQuestionInstructionPhase(gameData) {
    console.log('Handling question instruction phase');
    showScreen('question-instructions');
    
    // Update scoreboards
    updateScoreboard();
    
    // Only host can continue from question instructions
    const button = document.querySelector('#question-instructions .play-btn');
    if (button) {
        button.disabled = !isHost;
        button.textContent = isHost ? 'Ready to Connect!' : 'Waiting for host...';
        
        if (!isHost) {
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
        } else {
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    }
}

// NEW: Function called when user clicks "Ready to Connect" on question instructions
function continueFromQuestionInstructions() {
    if (!isHost) {
        console.log('Only host can continue from question instructions');
        return;
    }
    
    console.log('Continuing from question instructions');
    soundSystem.playClick();
    
    // FIXED: Get fresh game data and determine winner based on game type
    gameRef.once('value').then((snapshot) => {
        const gameData = snapshot.val();
        const playerIds = Object.keys(gameData.players);
        const gameType = gameData.questionGameType;
        let winnerId;
        
        console.log('Determining winner for game type:', gameType);
        console.log('Current scores:', overallScores);
        
        if (gameType === 'this-or-that') {
            // Winner based on overall scores from this or that round
            if (overallScores.player1 > overallScores.player2) {
                winnerId = playerIds[0];
            } else if (overallScores.player2 > overallScores.player1) {
                winnerId = playerIds[1];
            } else {
                // Tie - randomly pick winner
                winnerId = playerIds[Math.floor(Math.random() * playerIds.length)];
            }
        } else if (gameType === 'trivia') {
            // Winner based on trivia round scores
            const scores = gameData.triviaRoundScores || { player1: 0, player2: 0 };
            if (scores.player1 > scores.player2) {
                winnerId = playerIds[0];
            } else if (scores.player2 > scores.player1) {
                winnerId = playerIds[1];
            } else {
                winnerId = playerIds[Math.floor(Math.random() * playerIds.length)];
            }
        } else if (gameType === 'speed') {
            // Winner based on speed game results
            const player1Answers = gameData.player1Answers || [];
            const player2Answers = gameData.player2Answers || [];
            if (player1Answers.length > player2Answers.length) {
                winnerId = playerIds[0];
            } else if (player2Answers.length > player1Answers.length) {
                winnerId = playerIds[1];
            } else {
                winnerId = playerIds[Math.floor(Math.random() * playerIds.length)];
            }
        }
        
        console.log('Winner determined:', winnerId);
        
        // Now go to category selection with the winner
        gameRef.update({
            gamePhase: 'category-selection',
            questionWinner: winnerId,
            questionGameType: gameType,
            selectedCategory: null,
            questionToAnswer: null,
            questionAnswered: false  // Initialize the flag
        });
    });
}

// NEW: Handle category selection phase (winner chooses question category)
function handleCategorySelectionPhase(gameData) {
    const isWinner = gameData.questionWinner === playerId;
    
    if (isWinner) {
        showCategorySelection(gameData.currentRound);
    } else {
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Waiting for your partner to choose a question category...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
    }
}

// NEW: Show category selection screen for winner
function showCategorySelection(roundNumber) {
    showScreen('category-selection-screen');
    
    // Update scoreboards
    updateScoreboard();
    
    const categories = QUESTION_CATEGORIES[roundNumber];
    const optionsContainer = document.getElementById('category-options');
    optionsContainer.innerHTML = '';
    
    categories.forEach((categoryKey) => {
        const button = document.createElement('button');
        button.className = 'guess-option';
        button.textContent = CATEGORY_DISPLAY_NAMES[categoryKey];
        button.addEventListener('click', () => selectCategory(categoryKey));
        optionsContainer.appendChild(button);
    });
}

// NEW: Handle category selection
function selectCategory(category) {
    soundSystem.playClick();
    
    const buttons = document.querySelectorAll('#category-options .guess-option');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === CATEGORY_DISPLAY_NAMES[category]) {
            btn.classList.add('selected');
        }
    });
    
    const categoryQuestions = questions[category];
    if (categoryQuestions && categoryQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
        const selectedQuestion = categoryQuestions[randomIndex];
        
        gameRef.update({
            selectedCategory: category,
            questionToAnswer: selectedQuestion,
            questionRead: false,
            questionAnswered: false,  // Initialize the flag
            gamePhase: 'question-answering'
        });
    }
}

// NEW: Handle question answering phase (discussion phase)
function handleQuestionAnsweringPhase(gameData) {
    const isWinner = gameData.questionWinner === playerId;
    
    if (isWinner && gameData.questionToAnswer && !gameData.questionRead) {
        // Winner sees question to read out loud
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Read this question out loud to your partner!';
        document.getElementById('question-text').textContent = gameData.questionToAnswer;
        document.getElementById('question-content').style.display = 'block';
        document.getElementById('waiting-content').style.display = 'none';
        
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = 'Question Read - Continue';
        nextBtn.disabled = false;
        nextBtn.onclick = () => markQuestionAsRead();
        
    } else if (!isWinner && !gameData.questionRead) {
        // Loser waits for question to be read
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Listen carefully to the question...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
        
    } else if (!isWinner && gameData.questionRead) {
        // Loser now sees the question and can answer
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Your turn to answer and discuss!';
        document.getElementById('question-text').textContent = gameData.questionToAnswer;
        document.getElementById('question-content').style.display = 'block';
        document.getElementById('waiting-content').style.display = 'none';
        
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = 'Discussion Complete';
        nextBtn.disabled = false;
        nextBtn.onclick = () => completeQuestionAnswer();
        
    } else if (isWinner && gameData.questionRead) {
        // Winner waits for partner to finish discussing
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Waiting for your partner to finish their answer...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
    }
}

// NEW: Mark question as read (any player can do this - the winner who reads it)
function markQuestionAsRead() {
    console.log('Marking question as read');
    gameRef.update({ questionRead: true });
}

// NEW: Complete question answer (sets flag for host to auto-progress)
function completeQuestionAnswer() {
    console.log('Completing question answer - setting flag for host to progress');
    
    // Set flag for host to detect and auto-progress
    gameRef.update({ questionAnswered: true });
}

// Update scoreboard with player names and scores
function updateScoreboard() {
    if (currentGame && currentGame.players) {
        const playerIds = Object.keys(currentGame.players);
        
        if (playerIds.length >= 1) {
            const p1Name = currentGame.players[playerIds[0]].name;
            const p1Score = overallScores.player1 || 0;
            
            // Update all scoreboards
            const gameP1Elements = document.querySelectorAll('[id*="player1"]');
            const gameS1Elements = document.querySelectorAll('[id*="score1"], [id*="score-player1"]');
            
            gameP1Elements.forEach(el => {
                if (el && el.textContent !== undefined) {
                    el.textContent = p1Name;
                }
            });
            
            gameS1Elements.forEach(el => {
                if (el && el.textContent !== undefined) {
                    el.textContent = `(${p1Score})`;
                }
            });
        }
        
        if (playerIds.length >= 2) {
            const p2Name = currentGame.players[playerIds[1]].name;
            const p2Score = overallScores.player2 || 0;
            
            // Update all scoreboards
            const gameP2Elements = document.querySelectorAll('[id*="player2"]');
            const gameS2Elements = document.querySelectorAll('[id*="score2"], [id*="score-player2"]');
            
            gameP2Elements.forEach(el => {
                if (el && el.textContent !== undefined) {
                    el.textContent = p2Name;
                }
            });
            
            gameS2Elements.forEach(el => {
                if (el && el.textContent !== undefined) {
                    el.textContent = `(${p2Score})`;
                }
            });
        }
    }
}

// MODIFIED: Start new round - now shows instruction screen first
function startNewRound(roundNumber = null) {
    if (!isHost) {
        console.log('Only host can start new round');
        return;
    }
    
    if (!roundNumber) {
        roundNumber = (currentGame.currentRound || 0) + 1;
    }
    
    console.log('Starting round:', roundNumber); // Debug log
    
    if (roundNumber > 3) {
        // Game complete - show final screen
        console.log('Game complete, showing final screen');
        showGameCompleteScreen();
        return;
    }
    
    soundSystem.playNewRound();
    
    const roundInfo = GAME_STRUCTURE[roundNumber];
    console.log('Round info:', roundInfo);
    
    // ENHANCED: Add safety check
    if (!roundInfo) {
        console.error('Invalid round number:', roundNumber);
        return;
    }
    
    // Show instruction screen first
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${roundInfo.name}`,
        gamePhase: 'instructions'
    });
}

// THIS OR THAT GAME FUNCTIONS
function startThisOrThatGame(roundNumber) {
    console.log('Starting this or that game for round:', roundNumber);
    
    const thisOrThatQuestion = getRandomThisOrThatQuestion(roundNumber);
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        gamePhase: 'playing', // Changed from 'instructions'
        thisOrThatQuestion: thisOrThatQuestion,
        thisOrThatPhase: 'choosing',
        playerChoice: null,
        playerGuess: null,
        thisOrThatQuestionsAsked: 0,
        hostIsChooser: true // Host goes first
    });
}

function handleThisOrThatGameUpdate(gameData) {
    if (!gameData.thisOrThatQuestion) return;
    
    // Determine my role
    const playerIds = Object.keys(gameData.players);
    const myPlayerIndex = playerIds.indexOf(playerId);
    const hostIndex = playerIds.indexOf(gameData.host);
    const isChooser = (gameData.hostIsChooser && myPlayerIndex === hostIndex) || 
                     (!gameData.hostIsChooser && myPlayerIndex !== hostIndex);
    
    thisOrThatRole = isChooser ? 'chooser' : 'guesser';
    
    switch(gameData.thisOrThatPhase) {
        case 'choosing':
            if (thisOrThatRole === 'chooser') {
                showChoiceScreen(gameData.thisOrThatQuestion);
            } else {
                showWaitingForChoice();
            }
            break;
        case 'guessing':
            if (thisOrThatRole === 'guesser') {
                showGuessScreen(gameData.thisOrThatQuestion);
            } else {
                showWaitingForGuess();
            }
            break;
        case 'complete':
            if (gameData.playerGuess !== null && gameData.playerChoice !== null) {
                showThisOrThatResult(gameData);
            }
            break;
    }
}

function showChoiceScreen(question) {
    showScreen('guessing-answer-screen');
    
    const questionNum = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-answer-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Pick your preference:`;
    
    document.getElementById('guessing-question').textContent = question.question;
    
    // Replace input with two choice buttons
    const inputGroup = document.querySelector('#guessing-answer-screen .input-group');
    inputGroup.innerHTML = `
        <div class="guess-options" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
            <button class="guess-option" onclick="handleThisOrThatChoice(0)">
                ${question.optionA}
            </button>
            <button class="guess-option" onclick="handleThisOrThatChoice(1)">
                ${question.optionB}
            </button>
        </div>
    `;
    
    document.getElementById('submit-answer-btn').style.display = 'none';
    document.getElementById('answer-waiting').style.display = 'none';
}

function handleThisOrThatChoice(choiceIndex) {
    soundSystem.playClick();
    
    // Disable all choice buttons
    const buttons = document.querySelectorAll('.guess-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === choiceIndex) {
            btn.classList.add('selected');
        }
    });
    
    gameRef.update({
        playerChoice: choiceIndex,
        thisOrThatPhase: 'guessing'
    });
    
    document.getElementById('answer-waiting').style.display = 'block';
    document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
}

function showWaitingForChoice() {
    showScreen('guessing-guess-screen');
    const questionNum = (currentGame?.thisOrThatQuestionsAsked || 0) + 1;
    
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Waiting...`;
    document.getElementById('guess-question').textContent = 'Waiting for your partner to choose...';
    document.getElementById('guess-options').innerHTML = 
        '<p style="color: rgba(255,255,255,0.7); text-align: center;">Waiting for your partner to choose...</p>';
}

function showGuessScreen(question) {
    showScreen('guessing-guess-screen');
    
    const questionNum = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - What did they choose?`;
    
    document.getElementById('guess-question').textContent = question.question;
    
    // Create option buttons
    const optionsContainer = document.getElementById('guess-options');
    optionsContainer.innerHTML = '';
    
    const optionA = document.createElement('button');
    optionA.className = 'guess-option';
    optionA.textContent = question.optionA;
    optionA.addEventListener('click', () => handleThisOrThatGuess(0));
    optionsContainer.appendChild(optionA);
    
    const optionB = document.createElement('button');
    optionB.className = 'guess-option';
    optionB.textContent = question.optionB;
    optionB.addEventListener('click', () => handleThisOrThatGuess(1));
    optionsContainer.appendChild(optionB);
}

function handleThisOrThatGuess(guessIndex) {
    soundSystem.playClick();
    
    // Disable all buttons
    const buttons = document.querySelectorAll('.guess-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === guessIndex) {
            btn.classList.add('selected');
        }
    });
    
    gameRef.update({
        playerGuess: guessIndex,
        thisOrThatPhase: 'complete'
    });
}

function showWaitingForGuess() {
    showScreen('guessing-answer-screen');
    document.getElementById('submit-answer-btn').style.display = 'none';
    document.getElementById('answer-waiting').style.display = 'block';
    document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
}

// FIXED: Prevent duplicate scoring in This or That results
function showThisOrThatResult(gameData) {
    showScreen('guessing-result-screen');
    
    const isCorrect = gameData.playerGuess === gameData.playerChoice;
    const question = gameData.thisOrThatQuestion;
    
    // FIXED: Create unique result ID and only process once
    const resultId = `${gameData.currentRound}-${gameData.thisOrThatQuestionsAsked}-${gameData.playerChoice}-${gameData.playerGuess}`;
    
    if (isCorrect && !processedResults.has(resultId)) {
        processedResults.add(resultId);
        triggerConfetti('correct');
        soundSystem.playCorrect();
        
        // Award point for correct guess - only host updates scores
        if (isHost) {
            const playerIds = Object.keys(gameData.players);
            const guesserIndex = gameData.hostIsChooser ? 1 : 0;
            
            const updatedScores = {
                player1: overallScores.player1 || 0,
                player2: overallScores.player2 || 0
            };
            
            if (guesserIndex === 0) {
                updatedScores.player1 += 1;
            } else {
                updatedScores.player2 += 1;
            }
            
            overallScores = updatedScores;
            gameRef.child('overallScores').set(updatedScores);
        }
    } else if (!isCorrect) {
        soundSystem.playIncorrect();
    }

    const resultTitle = document.getElementById('guess-result-title');
    resultTitle.textContent = isCorrect ? '🎉 Correct! 🎉' : '❌ Not quite!';
    resultTitle.style.color = isCorrect ? '#4CAF50' : '#f44336';
    
    document.querySelector('.result-question').textContent = question.question;
    document.getElementById('actual-answer').textContent = 
        gameData.playerChoice === 0 ? question.optionA : question.optionB;
    document.getElementById('player-guess').textContent = 
        gameData.playerGuess === 0 ? question.optionA : question.optionB;
    
    // Update continue button
    const continueBtn = document.getElementById('continue-from-guess-btn');
    const currentQuestionsAsked = gameData.thisOrThatQuestionsAsked || 0;
    const questionsCompleted = currentQuestionsAsked + 1;
    const questionsLeft = 6 - questionsCompleted;
    
    if (questionsLeft > 0) {
        continueBtn.textContent = `Continue (${questionsLeft} questions left)`;
    } else {
        continueBtn.textContent = 'Continue to Next Round';
    }
    
    // Simple button state - no disabled state to avoid getting stuck
    continueBtn.disabled = false;
    
    // Update scoreboard
    updateScoreboard();
}

// FIXED: Add missing determineThisOrThatWinner function
function determineThisOrThatWinner() {
    if (!isHost) return;
    
    console.log('Determining This or That winner...');
    
    // Only show instructions, let continueFromQuestionInstructions handle winner logic
    gameRef.update({
        gamePhase: 'question-instructions',
        questionGameType: 'this-or-that'
    });
}

// TRIVIA GAME FUNCTIONS
function startTriviaGame(roundNumber) {
    console.log('Starting trivia game for round:', roundNumber);
    const triviaQuestion = getRandomTriviaQuestion(roundNumber);
    const shuffledQuestion = shuffleTriviaOptions(triviaQuestion);
    
    gameRef.update({
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        gamePhase: 'playing', // Changed from 'instructions'
        triviaQuestion: shuffledQuestion,
        triviaPhase: 'questioning',
        player1Answer: null,
        player2Answer: null,
        triviaQuestionsAsked: 0,
        triviaRoundScores: { player1: 0, player2: 0 }
    });
}

function handleTriviaGameUpdate(gameData) {
    if (!gameData.triviaQuestion) return;
    
    triviaQuestionsAsked = gameData.triviaQuestionsAsked || 0;
    triviaRoundScores = gameData.triviaRoundScores || { player1: 0, player2: 0 };
    
    switch(gameData.triviaPhase) {
        case 'questioning':
            showTriviaQuestion(gameData);
            
            // FIXED: Check if both players have answered and auto-progress (host only)
            if (isHost && 
                typeof gameData.player1Answer === 'number' && 
                typeof gameData.player2Answer === 'number' && 
                gameData.triviaPhase === 'questioning') {
                
                console.log('Both players answered, calculating results...');
                setTimeout(() => calculateAndShowTriviaResults(), 500);
            }
            break;
        case 'results':
            showTriviaResults(gameData);
            break;
        case 'complete':
            showTriviaRoundComplete(gameData);
            break;
    }
}

function showTriviaQuestion(gameData) {
    showScreen('trivia-question-screen');
    
    const questionNum = triviaQuestionsAsked + 1;
    document.getElementById('trivia-question-number').textContent = `Question ${questionNum} of 7`;
    
    // Update scores
    const playerIds = Object.keys(gameData.players);
    document.getElementById('player1-score').textContent = 
        `${gameData.players[playerIds[0]].name}: ${triviaRoundScores.player1}`;
    document.getElementById('player2-score').textContent = 
        `${gameData.players[playerIds[1]].name}: ${triviaRoundScores.player2}`;
    
    document.getElementById('trivia-question').textContent = gameData.triviaQuestion.question;
    
    // Create option buttons
    const optionsContainer = document.getElementById('trivia-options');
    optionsContainer.innerHTML = '';
    
    gameData.triviaQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'trivia-option';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.addEventListener('click', () => handleTriviaAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function handleTriviaAnswer(answerIndex) {
    soundSystem.playClick();
    
    // Disable all buttons
    const buttons = document.querySelectorAll('.trivia-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        if (index === answerIndex) {
            btn.classList.add('selected');
        }
    });
    
    document.getElementById('trivia-waiting').style.display = 'block';
    
    // Update Firebase with my answer
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    if (myIndex === 0) {
        gameRef.update({ player1Answer: answerIndex });
    } else {
        gameRef.update({ player2Answer: answerIndex });
    }
    
    // Note: Removed the manual check - let the Firebase listener handle it
}

function calculateAndShowTriviaResults() {
    if (!isHost) return;
    
    const correctAnswer = currentGame.triviaQuestion.correct;
    const player1Correct = currentGame.player1Answer === correctAnswer;
    const player2Correct = currentGame.player2Answer === correctAnswer;
    
    // Update round scores
    const newRoundScores = {
        player1: triviaRoundScores.player1 + (player1Correct ? 1 : 0),
        player2: triviaRoundScores.player2 + (player2Correct ? 1 : 0)
    };
    
    // Update overall scores
    const newOverallScores = {
        player1: overallScores.player1 + (player1Correct ? 1 : 0),
        player2: overallScores.player2 + (player2Correct ? 1 : 0)
    };
    
    gameRef.update({
        triviaRoundScores: newRoundScores,
        overallScores: newOverallScores,
        triviaPhase: 'results'
    });
}

function showTriviaResults(gameData) {
    showScreen('trivia-result-screen');
    
    const playerIds = Object.keys(gameData.players);
    const correctAnswer = gameData.triviaQuestion.correct;
    
    const player1Correct = gameData.player1Answer === correctAnswer;
    const player2Correct = gameData.player2Answer === correctAnswer;
    
    if (player1Correct || player2Correct) {
        triggerConfetti('correct');
        soundSystem.playCorrect();
    } else {
        soundSystem.playIncorrect();
    }
    
    // Update title
    let title = '';
    if (player1Correct && player2Correct) {
        title = '🎉 Both Correct! 🎉';
    } else if (player1Correct || player2Correct) {
        const winner = player1Correct ? gameData.players[playerIds[0]].name : gameData.players[playerIds[1]].name;
        title = `🎉 ${winner} Got It! 🎉`;
    } else {
        title = '❌ Nobody Got It! ❌';
    }
    document.getElementById('trivia-result-title').textContent = title;
    
    document.getElementById('trivia-result-question').textContent = gameData.triviaQuestion.question;
    document.getElementById('correct-answer').textContent = gameData.triviaQuestion.options[correctAnswer];
    
    document.getElementById('player1-name-result').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('player1-answer').textContent = 
        gameData.player1Answer !== null ? gameData.triviaQuestion.options[gameData.player1Answer] : 'No answer';
    document.getElementById('player1-answer').style.color = player1Correct ? '#4CAF50' : '#f44336';
    
    document.getElementById('player2-name-result').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('player2-answer').textContent = 
        gameData.player2Answer !== null ? gameData.triviaQuestion.options[gameData.player2Answer] : 'No answer';
    document.getElementById('player2-answer').style.color = player2Correct ? '#4CAF50' : '#f44336';
    
    // Sync local scores
    if (gameData.triviaRoundScores) {
        triviaRoundScores = gameData.triviaRoundScores;
    }
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
    }
    
    const continueBtn = document.getElementById('continue-from-trivia-btn');
    continueBtn.disabled = !isHost;
    continueBtn.textContent = isHost ? 'Continue' : 'Waiting for host...';
}

function showTriviaRoundComplete(gameData) {
    showScreen('trivia-complete-screen');
    triggerConfetti('round-complete');
    soundSystem.playRoundComplete();
    
    const playerIds = Object.keys(gameData.players);
    const scores = gameData.triviaRoundScores;
    
    document.getElementById('player1-final').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('player1-final-score').textContent = scores.player1;
    
    document.getElementById('player2-final').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('player2-final-score').textContent = scores.player2;
    
    let winnerText = '';
    if (scores.player1 > scores.player2) {
        winnerText = `${gameData.players[playerIds[0]].name} wins the trivia round!`;
    } else if (scores.player2 > scores.player1) {
        winnerText = `${gameData.players[playerIds[1]].name} wins the trivia round!`;
    } else {
        winnerText = "It's a tie! Great minds think alike!";
    }
    document.getElementById('trivia-winner').textContent = winnerText;
    
    const continueBtn = document.getElementById('continue-from-trivia-complete-btn');
    continueBtn.disabled = !isHost;
    continueBtn.textContent = isHost ? 'Continue' : 'Waiting for host...';
}

// SPEED CATEGORIES FUNCTIONS
function startSpeedCategoriesGame(roundNumber) {
    console.log('Starting speed categories for round:', roundNumber);
    
    // FIXED: Reset all speed game flags when starting new game
    speedGameActive = false; // Will be set to true in showSpeedCategoriesScreen
    speedAnswersSubmitted = false;
    speedMyAnswers = [];
    
    const category = getRandomSpeedCategory();
    
    gameRef.update({
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        gamePhase: 'playing', // Changed from 'instructions'
        speedCategory: category,
        speedPhase: 'playing',
        speedStartTime: Date.now(),
        speedEndTime: Date.now() + 45000, // 45 seconds
        player1Answers: [],
        player2Answers: [],
        player1Done: false,
        player2Done: false
    });
}

function handleSpeedCategoriesUpdate(gameData) {
    if (!gameData.speedCategory) return;
    
    console.log('Speed categories update received:', {
        phase: gameData.speedPhase,
        player1Done: gameData.player1Done,
        player2Done: gameData.player2Done,
        player1Answers: gameData.player1Answers?.length || 0,
        player2Answers: gameData.player2Answers?.length || 0,
        isHost: isHost
    });
    
    switch(gameData.speedPhase) {
        case 'playing':
            showSpeedCategoriesScreen(gameData);
            break;
        case 'complete':
            showSpeedCategoriesResults(gameData);
            break;
    }
    
    // FIXED: More reliable check for when both players are done
    if (gameData.speedPhase === 'playing' && isHost) {
        const player1Done = gameData.player1Done || false;
        const player2Done = gameData.player2Done || false;
        const player1Answers = gameData.player1Answers || [];
        const player2Answers = gameData.player2Answers || [];
        
        console.log('Host checking if both done:', { player1Done, player2Done });
        
        if (player1Done && player2Done) {
            console.log('Both players finished! Calculating scores...', {
                player1Score: player1Answers.length,
                player2Score: player2Answers.length,
                currentOverallScores: overallScores
            });
            
            const player1Score = player1Answers.length;
            const player2Score = player2Answers.length;
            
            // Make sure we have the latest overall scores
            const currentScores = gameData.overallScores || overallScores || { player1: 0, player2: 0 };
            
            const updatedScores = {
                player1: currentScores.player1 + player1Score,
                player2: currentScores.player2 + player2Score
            };
            
            console.log('Updating to final scores:', updatedScores);
            
            gameRef.update({
                speedPhase: 'complete',
                overallScores: updatedScores,
                player1SpeedScore: player1Score,
                player2SpeedScore: player2Score
            });
        }
    }
}

// FIXED: Improved showSpeedCategoriesScreen function with better state management
function showSpeedCategoriesScreen(gameData) {
    showScreen('speed-categories-screen');
    
    // FIXED: Only initialize if we haven't started the game yet or haven't submitted answers
    if (!speedGameActive && !speedAnswersSubmitted) {
        console.log('Initializing speed game for the first time');
        speedMyAnswers = [];
        speedGameActive = true;
        speedAnswersSubmitted = false;
        
        document.getElementById('speed-category').textContent = gameData.speedCategory;
        document.getElementById('speed-current-score').textContent = '0';
        document.getElementById('speed-answers-list').innerHTML = '';
        
        const input = document.getElementById('speed-input');
        input.disabled = false;
        input.value = '';
        
        // FIXED: Remove ALL existing event listeners properly
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        // FIXED: Add single, fresh event listener
        newInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSpeedAnswer();
            }
        });
        
        newInput.focus();
        
        // Start timer
        if (gameData.speedEndTime) {
            startSpeedTimer(gameData.speedEndTime);
        }
    } else {
        console.log('Speed game already in progress or completed - not reinitializing');
        // Just update the display without resetting game state
        document.getElementById('speed-category').textContent = gameData.speedCategory;
        
        // Update score display if we have answers
        if (speedMyAnswers && speedMyAnswers.length > 0) {
            document.getElementById('speed-current-score').textContent = speedMyAnswers.length;
        }
    }
}

function showSpeedCategoriesResults(gameData) {
    showScreen('speed-categories-results');
    
    const playerIds = Object.keys(gameData.players);
    const player1Answers = gameData.player1Answers || [];
    const player2Answers = gameData.player2Answers || [];
    
    // FIXED: Sync the updated scores locally
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
    }
    
    // Update scoreboard with new scores
    updateScoreboard();
    
    document.getElementById('speed-result-category').textContent = gameData.speedCategory;
    
    document.getElementById('speed-result-player1-name').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('speed-result-player1-score').textContent = player1Answers.length;
    
    document.getElementById('speed-result-player2-name').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('speed-result-player2-score').textContent = player2Answers.length;
    
    let winnerText = '';
    if (player1Answers.length > player2Answers.length) {
        winnerText = `${gameData.players[playerIds[0]].name} wins!`;
        triggerConfetti('correct');
    } else if (player2Answers.length > player1Answers.length) {
        winnerText = `${gameData.players[playerIds[1]].name} wins!`;
        triggerConfetti('correct');
    } else {
        winnerText = "It's a tie!";
    }
    document.getElementById('speed-winner').textContent = winnerText;
    
    document.getElementById('speed-result-player1-answers').textContent = player1Answers.join(', ');
    document.getElementById('speed-result-player2-answers').textContent = player2Answers.join(', ');
    
    document.getElementById('speed-result-player1-name-2').textContent = `${gameData.players[playerIds[0]].name} Answers:`;
    document.getElementById('speed-result-player2-name-2').textContent = `${gameData.players[playerIds[1]].name} Answers:`;
    
    const continueBtn = document.getElementById('continue-from-speed-btn');
    continueBtn.disabled = !isHost;
    continueBtn.textContent = isHost ? 'Continue' : 'Waiting for host...';
}

function startSpeedTimer(endTime) {
    if (speedTimer) {
        clearInterval(speedTimer);
    }
    
    speedTimer = setInterval(() => {
        const timeLeft = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        document.getElementById('speed-timer').textContent = timeLeft;
        
        if (timeLeft <= 10 && timeLeft > 0) {
            soundSystem.playSpeedTimer();
        }
        
        if (timeLeft <= 0) {
            clearInterval(speedTimer);
            speedTimer = null;
            endSpeedGame();
        }
    }, 100);
}

function handleSpeedAnswer() {
    if (!speedGameActive || speedAnswersSubmitted) return;
    
    const input = document.getElementById('speed-input');
    const answer = input.value.trim();
    
    if (answer && !speedMyAnswers.some(a => a.toLowerCase() === answer.toLowerCase())) {
        const isValid = validateSpeedAnswer(answer, currentGame.speedCategory);
        
        if (isValid) {
            speedMyAnswers.push(answer);
            document.getElementById('speed-current-score').textContent = speedMyAnswers.length;
            
            const listItem = document.createElement('div');
            listItem.className = 'speed-answer-item valid';
            listItem.textContent = answer;
            document.getElementById('speed-answers-list').appendChild(listItem);
            
            soundSystem.playClick();
        }
        
        input.value = '';
    }
}

// FIXED: Enhanced endSpeedGame function with better debugging and protection
function endSpeedGame() {
    console.log('endSpeedGame called - current state:', {
        speedGameActive: speedGameActive,
        speedAnswersSubmitted: speedAnswersSubmitted,
        speedMyAnswers: speedMyAnswers ? speedMyAnswers.slice() : null,
        answersLength: speedMyAnswers ? speedMyAnswers.length : 'null'
    });
    
    // FIXED: Use both flags to prevent any possibility of double submission
    if (!speedGameActive || speedAnswersSubmitted) {
        console.log('Speed game already ended or answers already submitted - BLOCKING duplicate submission');
        return;
    }
    
    // FIXED: Immediately set both flags to prevent any race conditions
    speedGameActive = false;
    speedAnswersSubmitted = true;
    
    // FIXED: Preserve answers immediately before any async operations
    const finalAnswers = speedMyAnswers ? [...speedMyAnswers] : [];
    
    console.log('Speed game ending - submitting final answers:', finalAnswers);
    
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    soundSystem.playSpeedComplete();
    
    // Disable input immediately
    const input = document.getElementById('speed-input');
    if (input) {
        input.disabled = true;
    }
    
    document.getElementById('speed-timer').textContent = '0';
    
    // Submit answers to Firebase
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    const updateData = {};
    if (myIndex === 0) {
        updateData.player1Answers = finalAnswers;
        updateData.player1Done = true;
    } else {
        updateData.player2Answers = finalAnswers;
        updateData.player2Done = true;
    }
    
    console.log('Submitting speed game data to Firebase:', updateData);
    gameRef.update(updateData);
}

function determineTriviaWinner() {
    if (!isHost) return;
    
    console.log('Determining Trivia winner...');
    
    // Only show instructions, let continueFromQuestionInstructions handle winner logic
    gameRef.update({
        gamePhase: 'question-instructions',
        questionGameType: 'trivia'
    });
}

function determineSpeedWinner() {
    if (!isHost) return;
    
    console.log('Determining Speed winner...');
    
    // Only show instructions, let continueFromQuestionInstructions handle winner logic
    gameRef.update({
        gamePhase: 'question-instructions',
        questionGameType: 'speed'
    });
}

// GAME COMPLETE SCREEN - ENHANCED with safety checks
function showGameCompleteScreen() {
    console.log('Showing game complete screen with scores:', overallScores);
    showScreen('game-complete-screen');
    
    triggerConfetti('game-complete');
    soundSystem.playGameComplete();
    
    if (currentGame && currentGame.players) {
        const playerIds = Object.keys(currentGame.players);
        
        // Player 1 final score display
        if (playerIds.length >= 1) {
            const p1Name = currentGame.players[playerIds[0]].name;
            document.getElementById('final-player1-name').textContent = p1Name;
            document.getElementById('final-player1-score').textContent = overallScores.player1 || 0;
        }
        
        // Player 2 final score display
        if (playerIds.length >= 2) {
            const p2Name = currentGame.players[playerIds[1]].name;
            document.getElementById('final-player2-name').textContent = p2Name;
            document.getElementById('final-player2-score').textContent = overallScores.player2 || 0;
        }
        
        // Determine final winner
        let finalWinnerText = '';
        if (overallScores.player1 > overallScores.player2) {
            finalWinnerText = `🎉 ${currentGame.players[playerIds[0]].name} wins overall! 🎉`;
        } else if (overallScores.player2 > overallScores.player1) {
            finalWinnerText = `🎉 ${currentGame.players[playerIds[1]].name} wins overall! 🎉`;
        } else {
            finalWinnerText = "It's a tie! You both win! 💕";
        }
        
        document.getElementById('final-winner').textContent = finalWinnerText;
        
        // ENHANCED: Add game summary
        const totalScore = (overallScores.player1 || 0) + (overallScores.player2 || 0);
        let summaryText = `🎯 Total points earned together: ${totalScore}\n`;
        summaryText += `🎮 You completed 3 competitive challenges\n`;
        summaryText += `💝 You shared 3 meaningful conversations\n`;
        summaryText += `✨ Hope you learned something new about each other! ✨`;
        
        document.getElementById('game-summary-text').textContent = summaryText;
    } else {
        // Fallback in case of missing data
        document.getElementById('final-winner').textContent = "Thanks for playing! 🎉";
        document.getElementById('game-summary-text').textContent = "Hope you enjoyed connecting with each other!";
    }
}

// UTILITY FUNCTIONS
function getRandomThisOrThatQuestion(round) {
    const questions = thisOrThatQuestions.round1;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomTriviaQuestion(round) {
    const questions = triviaQuestions.round2;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function shuffleTriviaOptions(question) {
    const correctAnswer = question.options[question.correct];
    const shuffled = [...question.options].sort(() => 0.5 - Math.random());
    const newCorrectIndex = shuffled.indexOf(correctAnswer);
    
    return {
        ...question,
        options: shuffled,
        correct: newCorrectIndex
    };
}

function getRandomSpeedCategory() {
    const categories = Object.keys(speedCategoriesWithAnswers);
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// FIXED: Enhanced validateSpeedAnswer function with more flexible matching
function validateSpeedAnswer(userAnswer, category) {
    const validAnswers = speedCategoriesWithAnswers[category];
    if (!validAnswers) {
        console.log('No valid answers found for category:', category);
        return false;
    }
    
    const cleanAnswer = userAnswer.toLowerCase().trim();
    
    // Direct match first
    if (validAnswers.includes(cleanAnswer)) {
        return true;
    }
    
    // FIXED: Enhanced abbreviation and variation mapping
    const variations = {
        // US States
        'us': 'united states',
        'usa': 'united states',
        'ny': 'new york',
        'ca': 'california',
        'tx': 'texas',
        'fl': 'florida',
        'pa': 'pennsylvania',
        'il': 'illinois',
        'oh': 'ohio',
        'mi': 'michigan',
        'nc': 'north carolina',
        'sc': 'south carolina',
        'nd': 'north dakota',
        'sd': 'south dakota',
        'wv': 'west virginia',
        'nh': 'new hampshire',
        'nj': 'new jersey',
        'nm': 'new mexico',
        'ri': 'rhode island',
        // Countries
        'uk': 'united kingdom',
        'uae': 'united arab emirates',
        'drc': 'democratic republic of congo',
        'car': 'central african republic',
        // Common alternate names
        'america': 'united states',
        'england': 'united kingdom',
        'britain': 'united kingdom',
        'holland': 'netherlands',
        'burma': 'myanmar',
        'persia': 'iran',
        'siam': 'thailand'
    };
    
    // Check variations
    if (variations[cleanAnswer] && validAnswers.includes(variations[cleanAnswer])) {
        return true;
    }
    
    // FIXED: More flexible partial matching for longer names
    for (const validAnswer of validAnswers) {
        // Allow partial matches for names 5+ characters if user typed 4+ characters
        if (validAnswer.length >= 5 && cleanAnswer.length >= 4) {
            if (validAnswer.startsWith(cleanAnswer)) {
                return true;
            }
        }
        
        // Allow matching any word in multi-word answers
        const validWords = validAnswer.split(' ');
        if (validWords.length > 1 && validWords.some(word => word === cleanAnswer)) {
            return true;
        }
        
        // Allow close matches with one character difference for longer answers
        if (validAnswer.length >= 6 && cleanAnswer.length >= 5) {
            let differences = 0;
            const maxLen = Math.max(validAnswer.length, cleanAnswer.length);
            for (let i = 0; i < maxLen; i++) {
                if (validAnswer[i] !== cleanAnswer[i]) {
                    differences++;
                }
            }
            if (differences <= 1) {
                return true;
            }
        }
    }
    
    return false;
}

// Leave game function - ENHANCED with better cleanup
function leaveGame() {
    console.log('Leaving game...');
    
    if (gameRef) {
        gameRef.off();
        if (playerId && currentGame && currentGame.players && currentGame.players[playerId]) {
            gameRef.child(`players/${playerId}`).remove();
        }
        
        if (isHost && roomCode) {
            gameRef.remove();
        }
    }
    
    // Clear timers
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    // Reset all state
    roomCode = '';
    playerId = '';
    playerName = '';
    isHost = false;
    gameRef = null;
    currentGame = null;
    overallScores = { player1: 0, player2: 0 };
    thisOrThatQuestionsAsked = 0;
    triviaQuestionsAsked = 0;
    triviaRoundScores = { player1: 0, player2: 0 };
    speedMyAnswers = [];
    speedGameActive = false;
    speedAnswersSubmitted = false; // FIXED: Reset submission flag
    processedResults.clear(); // FIXED: Clear processed results
    
    showScreen('start-screen');
}

// EVENT LISTENERS AND BUTTON HANDLERS

document.getElementById('continue-from-guess-btn').addEventListener('click', () => {
    console.log('Continue from guess button clicked');
    
    if (!isHost) {
        console.log('Only host can continue');
        return;
    }
    
    const currentQuestionsAsked = currentGame.thisOrThatQuestionsAsked || 0;
    const nextQuestionNumber = currentQuestionsAsked + 1;
    
    console.log('Current questions asked:', currentQuestionsAsked);
    console.log('Next question number will be:', nextQuestionNumber);
    
    if (nextQuestionNumber >= 6) {
        // This or That round complete - determine winner
        console.log('This or That round complete (6 questions finished), determining winner');
        determineThisOrThatWinner();
    } else {
        // Continue with next this-or-that question
        console.log('Continuing with This or That question #' + (nextQuestionNumber + 1));
        const newQuestion = getRandomThisOrThatQuestion(currentGame.currentRound);
        
        // Alternate who is the chooser: odd questions (1,3,5) = host chooses, even questions (2,4,6) = guest chooses
        const hostIsChooser = ((nextQuestionNumber + 1) % 2 === 1);
        
        console.log('Host is chooser for next question:', hostIsChooser);
        
        gameRef.update({
            thisOrThatQuestion: newQuestion,
            hostIsChooser: hostIsChooser,
            thisOrThatPhase: 'choosing',
            playerChoice: null,
            playerGuess: null,
            thisOrThatQuestionsAsked: nextQuestionNumber
        });
    }
});

document.getElementById('continue-from-trivia-btn').addEventListener('click', () => {
    console.log('Continue from trivia button clicked');
    if (!isHost) return;
    
    const nextQuestionNumber = (currentGame.triviaQuestionsAsked || 0) + 1;
    console.log('Next trivia question number:', nextQuestionNumber);
    
    if (nextQuestionNumber >= 7) {
        console.log('Trivia round complete');
        gameRef.update({
            triviaPhase: 'complete',
            triviaQuestionsAsked: nextQuestionNumber
        });
    } else {
        console.log('Continuing with next trivia question');
        const triviaQuestion = getRandomTriviaQuestion(currentGame.currentRound);
        const shuffledQuestion = shuffleTriviaOptions(triviaQuestion);
        
        gameRef.update({
            triviaQuestion: shuffledQuestion,
            triviaPhase: 'questioning',
            player1Answer: null,
            player2Answer: null,
            triviaQuestionsAsked: nextQuestionNumber
        });
    }
});

document.getElementById('continue-from-trivia-complete-btn').addEventListener('click', () => {
    console.log('Continue from trivia complete button clicked');
    if (!isHost) return;
    determineTriviaWinner();
});

document.getElementById('continue-from-speed-btn').addEventListener('click', () => {
    console.log('Continue from speed button clicked');
    if (!isHost) return;
    determineSpeedWinner();
});

// Auto-format room code input
document.getElementById('join-code').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});

// Enter key handlers
document.getElementById('creator-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitCreatorName();
    }
});

document.getElementById('join-code').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const nameField = document.getElementById('joiner-name');
        if (nameField.value.trim()) {
            joinRoom();
        } else {
            nameField.focus();
        }
    }
});

document.getElementById('joiner-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        joinRoom();
    }
});