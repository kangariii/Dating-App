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

// Speed Categories with Complete Answer Banks
const speedCategoriesWithAnswers = {
    "US States": [
        "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", 
        "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", 
        "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", 
        "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", 
        "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", 
        "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", 
        "virginia", "washington", "west virginia", "wisconsin", "wyoming"
    ],
    "Countries": [
        "afghanistan", "albania", "algeria", "argentina", "armenia", "australia", "austria", "azerbaijan",
        "bahrain", "bangladesh", "belarus", "belgium", "bolivia", "brazil", "bulgaria", "cambodia",
        "cameroon", "canada", "chile", "china", "colombia", "croatia", "cuba", "cyprus", "denmark",
        "ecuador", "egypt", "estonia", "ethiopia", "finland", "france", "georgia", "germany", "ghana",
        "greece", "guatemala", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland",
        "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kuwait", "latvia",
        "lebanon", "libya", "lithuania", "luxembourg", "malaysia", "mexico", "morocco", "netherlands",
        "new zealand", "nigeria", "norway", "pakistan", "panama", "peru", "philippines", "poland",
        "portugal", "qatar", "romania", "russia", "saudi arabia", "singapore", "slovakia", "slovenia",
        "south africa", "south korea", "spain", "sri lanka", "sweden", "switzerland", "thailand",
        "turkey", "ukraine", "united kingdom", "united states", "uruguay", "venezuela", "vietnam"
    ],
    "Animals": [
        "lion", "tiger", "elephant", "giraffe", "zebra", "hippo", "rhinoceros", "cheetah", "leopard",
        "bear", "wolf", "fox", "deer", "rabbit", "squirrel", "mouse", "rat", "cat", "dog", "horse",
        "cow", "pig", "sheep", "goat", "chicken", "duck", "goose", "turkey", "eagle", "hawk", "owl",
        "parrot", "penguin", "flamingo", "ostrich", "kangaroo", "koala", "panda", "monkey", "gorilla",
        "chimpanzee", "orangutan", "whale", "dolphin", "shark", "octopus", "jellyfish", "starfish",
        "crab", "lobster", "shrimp", "fish", "salmon", "tuna", "goldfish", "frog", "turtle", "snake",
        "lizard", "crocodile", "alligator", "spider", "butterfly", "bee", "ant", "fly", "mosquito",
        "beetle", "cricket", "grasshopper", "dragonfly", "ladybug", "caterpillar", "worm", "snail"
    ],
    "Fruits": [
        "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry", "blackberry",
        "cherry", "peach", "plum", "pear", "pineapple", "mango", "papaya", "kiwi", "watermelon",
        "cantaloupe", "honeydew", "lemon", "lime", "grapefruit", "coconut", "avocado", "tomato",
        "apricot", "fig", "date", "pomegranate", "cranberry", "gooseberry", "elderberry", "mulberry"
    ],
    "Colors": [
        "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
        "gray", "grey", "silver", "gold", "beige", "tan", "navy", "turquoise", "teal", "cyan",
        "magenta", "maroon", "crimson", "scarlet", "coral", "salmon", "peach", "khaki", "olive"
    ]
};

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
    }
}

// Simple create room function
function createRoom() {
    roomCode = generateRoomCode();
    playerId = generatePlayerId();
    isHost = true;
    
    document.getElementById('room-code').textContent = roomCode;
    showScreen('create-screen');
    
    // Initialize sound system
    soundSystem.init();
}

// Simple join room function
function showJoinScreen() {
    playerId = generatePlayerId();
    isHost = false;
    showScreen('join-screen');
}

// Setup room for creator
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
                ready: false
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
        })
        .catch((error) => {
            console.error('Error creating room:', error);
            alert('Error creating room: ' + error.message);
        });
}

// Submit creator name
function submitCreatorName() {
    const name = document.getElementById('creator-name').value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    setupRoom();
    
    // Update UI
    document.getElementById('creator-setup').style.display = 'none';
    document.getElementById('creator-waiting').style.display = 'block';
}

// Join existing room
function joinRoom() {
    const code = document.getElementById('join-code').value.toUpperCase();
    const name = document.getElementById('joiner-name').value || 'Player 2';
    
    if (code.length !== 4) {
        alert('Please enter a valid 4-character room code');
        return;
    }
    
    roomCode = code;
    playerName = name;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    gameRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
            // Initialize sound system
            soundSystem.init();
            soundSystem.playJoin();
            
            gameRef.child(`players/${playerId}`).set({
                name: name,
                connected: true,
                ready: true
            }).then(() => {
                console.log('Successfully joined room!');
                gameRef.on('value', handleGameUpdate);
                gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
            });
        } else {
            alert('Room not found. Please check the code and try again.');
        }
    });
}

// Main game update handler
function handleGameUpdate(snapshot) {
    const gameData = snapshot.val();
    if (!gameData) return;
    
    currentGame = gameData;
    
    // Initialize scores if they don't exist
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
    }
    
    // Update scoreboard
    updateScoreboard();
    
    const playerCount = Object.keys(gameData.players).length;
    
    // Start game when both players ready
    if (playerCount === 2 && !gameData.gameStarted) {
        const allReady = Object.values(gameData.players).every(player => player.ready);
        if (allReady && isHost) {
            startNewRound(1);
        }
    } else if (gameData.gameStarted) {
        // Handle different game phases based on current round
        const roundType = GAME_STRUCTURE[gameData.currentRound]?.type;
        
        if (roundType === 'this-or-that') {
            handleThisOrThatGameUpdate(gameData);
        } else if (roundType === 'trivia') {
            handleTriviaGameUpdate(gameData);
        } else if (roundType === 'speed') {
            handleSpeedCategoriesUpdate(gameData);
        } else if (gameData.gamePhase === 'category-selection') {
            handleCategorySelectionPhase(gameData);
        } else if (gameData.gamePhase === 'question-answering') {
            handleQuestionAnsweringPhase(gameData);
        }
    }
}

// Update scoreboard with player names and scores
function updateScoreboard() {
    if (currentGame && currentGame.players) {
        const playerIds = Object.keys(currentGame.players);
        
        if (playerIds.length >= 1) {
            const p1Name = currentGame.players[playerIds[0]].name;
            const p1Score = overallScores.player1 || 0;
            
            // Update all scoreboards
            const gameP1 = document.getElementById('game-player1');
            const gameS1 = document.getElementById('score-player1');
            if (gameP1) gameP1.textContent = p1Name;
            if (gameS1) gameS1.textContent = `(${p1Score})`;
        }
        
        if (playerIds.length >= 2) {
            const p2Name = currentGame.players[playerIds[1]].name;
            const p2Score = overallScores.player2 || 0;
            
            // Update all scoreboards
            const gameP2 = document.getElementById('game-player2');
            const gameS2 = document.getElementById('score-player2');
            if (gameP2) gameP2.textContent = p2Name;
            if (gameS2) gameS2.textContent = `(${p2Score})`;
        }
    }
}

// Start new round
function startNewRound(roundNumber = null) {
    if (!roundNumber) {
        roundNumber = (currentGame.currentRound || 0) + 1;
    }
    
    if (roundNumber > 3) {
        // Game complete - show final screen
        showGameCompleteScreen();
        return;
    }
    
    soundSystem.playNewRound();
    
    const roundInfo = GAME_STRUCTURE[roundNumber];
    
    if (roundInfo.type === 'this-or-that') {
        startThisOrThatGame(roundNumber);
    } else if (roundInfo.type === 'trivia') {
        startTriviaGame(roundNumber);
    } else if (roundInfo.type === 'speed') {
        startSpeedCategoriesGame(roundNumber);
    }
}

// THIS OR THAT GAME FUNCTIONS
function startThisOrThatGame(roundNumber) {
    console.log('Starting this or that game for round:', roundNumber);
    
    const thisOrThatQuestion = getRandomThisOrThatQuestion(roundNumber);
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
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

function showThisOrThatResult(gameData) {
    showScreen('guessing-result-screen');
    
    const isCorrect = gameData.playerGuess === gameData.playerChoice;
    const question = gameData.thisOrThatQuestion;
    
    if (isCorrect) {
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
    } else {
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
    const questionsLeft = 6 - (currentGame.thisOrThatQuestionsAsked + 1);
    if (questionsLeft > 0) {
        continueBtn.textContent = `Continue (${questionsLeft} questions left)`;
    } else {
        continueBtn.textContent = 'Continue to Next Round';
    }
}

// TRIVIA GAME FUNCTIONS
function startTriviaGame(roundNumber) {
    const triviaQuestion = getRandomTriviaQuestion(roundNumber);
    const shuffledQuestion = shuffleTriviaOptions(triviaQuestion);
    
    gameRef.update({
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
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
    document.getElementById('trivia-question-number').textContent = `Question ${questionNum} of 6`;
    
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
    
    // Check if both players have answered (host only)
    if (isHost) {
        setTimeout(() => {
            const currentData = currentGame;
            if (currentData.player1Answer !== null && currentData.player2Answer !== null) {
                calculateAndShowTriviaResults();
            }
        }, 500);
    }
}

function calculateAndShowTriviaResults() {
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
    const category = getRandomSpeedCategory();
    
    gameRef.update({
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
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
    
    switch(gameData.speedPhase) {
        case 'playing':
            showSpeedCategoriesScreen(gameData);
            break;
        case 'complete':
            showSpeedCategoriesResults(gameData);
            break;
    }
    
    // Check if both players are done and transition to results (host only)
    if (gameData.speedPhase === 'playing' && 
        gameData.player1Done && 
        gameData.player2Done && 
        isHost) {
        
        const player1Score = (gameData.player1Answers || []).length;
        const player2Score = (gameData.player2Answers || []).length;
        
        const updatedScores = {
            player1: (overallScores.player1 || 0) + player1Score,
            player2: (overallScores.player2 || 0) + player2Score
        };
        
        gameRef.update({
            speedPhase: 'complete',
            overallScores: updatedScores
        });
    }
}

function showSpeedCategoriesScreen(gameData) {
    showScreen('speed-categories-screen');
    
    document.getElementById('speed-category').textContent = gameData.speedCategory;
    document.getElementById('speed-timer').textContent = '45';
    document.getElementById('speed-input').value = '';
    document.getElementById('speed-answers-list').innerHTML = '';
    document.getElementById('speed-input').disabled = false;
    document.getElementById('speed-current-score').textContent = '0';
    
    speedMyAnswers = [];
    speedGameActive = true;
    
    // Start timer
    if (gameData.speedEndTime) {
        startSpeedTimer(gameData.speedEndTime);
    }
    
    setTimeout(() => {
        document.getElementById('speed-input').focus();
    }, 100);
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
    if (!speedGameActive) return;
    
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

function endSpeedGame() {
    if (!speedGameActive) return;
    
    speedGameActive = false;
    
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    soundSystem.playSpeedComplete();
    document.getElementById('speed-input').disabled = true;
    document.getElementById('speed-timer').textContent = '0';
    
    // Submit answers
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    const updateData = {};
    if (myIndex === 0) {
        updateData.player1Answers = speedMyAnswers || [];
        updateData.player1Done = true;
    } else {
        updateData.player2Answers = speedMyAnswers || [];
        updateData.player2Done = true;
    }
    
    gameRef.update(updateData);
}

function showSpeedCategoriesResults(gameData) {
    showScreen('speed-categories-results');
    
    const playerIds = Object.keys(gameData.players);
    const player1Answers = gameData.player1Answers || [];
    const player2Answers = gameData.player2Answers || [];
    
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

// QUESTION PHASE FUNCTIONS (Winner determination and question flow)
function determineThisOrThatWinner() {
    const playerIds = Object.keys(currentGame.players);
    // Simple winner determination based on overall scores
    if (overallScores.player1 > overallScores.player2) {
        startQuestionPhase(playerIds[0], 'this-or-that');
    } else if (overallScores.player2 > overallScores.player1) {
        startQuestionPhase(playerIds[1], 'this-or-that');
    } else {
        // Tie - randomly pick winner
        const randomWinner = playerIds[Math.floor(Math.random() * playerIds.length)];
        startQuestionPhase(randomWinner, 'this-or-that');
    }
}

function determineTriviaWinner() {
    const playerIds = Object.keys(currentGame.players);
    const scores = currentGame.triviaRoundScores || { player1: 0, player2: 0 };
    
    if (scores.player1 > scores.player2) {
        startQuestionPhase(playerIds[0], 'trivia');
    } else if (scores.player2 > scores.player1) {
        startQuestionPhase(playerIds[1], 'trivia');
    } else {
        const randomWinner = playerIds[Math.floor(Math.random() * playerIds.length)];
        startQuestionPhase(randomWinner, 'trivia');
    }
}

function determineSpeedWinner() {
    const playerIds = Object.keys(currentGame.players);
    const player1Answers = currentGame.player1Answers || [];
    const player2Answers = currentGame.player2Answers || [];
    
    if (player1Answers.length > player2Answers.length) {
        startQuestionPhase(playerIds[0], 'speed');
    } else if (player2Answers.length > player1Answers.length) {
        startQuestionPhase(playerIds[1], 'speed');
    } else {
        const randomWinner = playerIds[Math.floor(Math.random() * playerIds.length)];
        startQuestionPhase(randomWinner, 'speed');
    }
}

function startQuestionPhase(winnerId, gameType) {
    if (isHost) {
        gameRef.update({
            gamePhase: 'category-selection',
            questionWinner: winnerId,
            questionGameType: gameType,
            selectedCategory: null,
            questionToAnswer: null
        });
    }
}

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

function showCategorySelection(roundNumber) {
    showScreen('category-selection-screen');
    
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
            gamePhase: 'question-answering'
        });
    }
}

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

function markQuestionAsRead() {
    gameRef.update({ questionRead: true });
}

function completeQuestionAnswer() {
    const nextRound = (currentGame.currentRound || 0) + 1;
    
    if (nextRound > 3) {
        showGameCompleteScreen();
    } else {
        startNewRound(nextRound);
    }
}

// GAME COMPLETE SCREEN - FIXED to show actual scores
function showGameCompleteScreen() {
    console.log('Showing game complete screen with scores:', overallScores);
    showScreen('game-complete-screen');
    
    triggerConfetti('game-complete');
    soundSystem.playGameComplete();
    
    if (currentGame && currentGame.players) {
        const playerIds = Object.keys(currentGame.players);
        
        // Player 1 final score display
        const p1Name = currentGame.players[playerIds[0]].name;
        document.getElementById('final-player1-name').textContent = p1Name;
        document.getElementById('final-player1-score').textContent = overallScores.player1 || 0;
        
        // Player 2 final score display
        if (playerIds.length >= 2) {
            const p2Name = currentGame.players[playerIds[1]].name;
            document.getElementById('final-player2-name').textContent = p2Name;
            document.getElementById('final-player2-score').textContent = overallScores.player2 || 0;
        }
        
        // Determine final winner
        let finalWinnerText = '';
        if (overallScores.player1 > overallScores.player2) {
            finalWinnerText = `🎉 ${p1Name} wins overall! 🎉`;
        } else if (overallScores.player2 > overallScores.player1) {
            const p2Name = currentGame.players[playerIds[1]].name;
            finalWinnerText = `🎉 ${p2Name} wins overall! 🎉`;
        } else {
            finalWinnerText = "It's a tie! You both win! 💕";
        }
        
        document.getElementById('final-winner').textContent = finalWinnerText;
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

function validateSpeedAnswer(userAnswer, category) {
    const validAnswers = speedCategoriesWithAnswers[category];
    const cleanAnswer = userAnswer.toLowerCase().trim();
    
    if (validAnswers.includes(cleanAnswer)) {
        return true;
    }
    
    const variations = {
        'us': 'united states',
        'uk': 'united kingdom',
        'usa': 'united states'
    };
    
    if (variations[cleanAnswer] && validAnswers.includes(variations[cleanAnswer])) {
        return true;
    }
    
    return false;
}

// Leave game function
function leaveGame() {
    if (gameRef) {
        gameRef.off();
        gameRef.child(`players/${playerId}`).remove();
        
        if (isHost) {
            gameRef.remove();
        }
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
    
    showScreen('start-screen');
}

// EVENT LISTENERS
document.getElementById('continue-from-guess-btn').addEventListener('click', () => {
    if (!isHost) return;
    
    const nextQuestionNumber = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    
    if (nextQuestionNumber >= 6) {
        // This or That round complete - determine winner
        determineThisOrThatWinner();
    } else {
        // Continue with next this-or-that question
        const newQuestion = getRandomThisOrThatQuestion(currentGame.currentRound);
        const questionNumber = nextQuestionNumber + 1;
        const hostIsChooser = (questionNumber % 2 === 1);
        
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
    if (!isHost) return;
    
    const nextQuestionNumber = (currentGame.triviaQuestionsAsked || 0) + 1;
    
    if (nextQuestionNumber >= 6) {
        gameRef.update({
            triviaPhase: 'complete',
            triviaQuestionsAsked: nextQuestionNumber
        });
    } else {
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
    if (!isHost) return;
    determineTriviaWinner();
});

document.getElementById('continue-from-speed-btn').addEventListener('click', () => {
    if (!isHost) return;
    determineSpeedWinner();
});

// Speed Categories input handler
document.getElementById('speed-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSpeedAnswer();
    }
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
        joinRoom();
    }
});

document.getElementById('joiner-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        joinRoom();
    }
});