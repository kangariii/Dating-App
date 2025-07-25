// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Game state
let roomCode = '';
let playerId = '';
let playerName = '';
let isHost = false;
let gameRef = null;
let currentGame = null;

// New game structure - 6 rounds alternating between guessing and questions
const GAME_STRUCTURE = {
    1: { type: 'guessing', name: 'Guessing Game #1' },
    2: { type: 'questions', category: 'first-date', name: 'Getting to Know You' },
    3: { type: 'guessing', name: 'Guessing Game #2' },
    4: { type: 'questions', category: 'getting-closer', name: 'Going Deeper' },
    5: { type: 'guessing', name: 'Guessing Game #3' },
    6: { type: 'questions', category: null, name: 'Final Round' } // Will be randomly chosen
};

// Guessing game state
let currentGuessingQuestion = null;
let guessingRole = null; // 'answerer' or 'guesser'

// Helper Functions
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
}

function generatePlayerId() {
    return Math.random().toString(36).substring(2, 15);
}

function showScreen(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    const nextScreen = document.getElementById(screenId);
    
    if (currentScreen && currentScreen !== nextScreen) {
        currentScreen.style.opacity = '0';
        setTimeout(() => {
            currentScreen.classList.remove('active');
            currentScreen.style.display = 'none';
            
            nextScreen.style.display = 'block';
            nextScreen.style.opacity = '0';
            nextScreen.classList.add('active');
            
            setTimeout(() => {
                nextScreen.style.opacity = '1';
            }, 50);
        }, 300);
    } else {
        nextScreen.style.display = 'block';
        nextScreen.classList.add('active');
        nextScreen.style.opacity = '1';
    }
}

// Room Management
function createRoom() {
    roomCode = generateRoomCode();
    playerId = generatePlayerId();
    isHost = true;
    
    document.getElementById('room-code').textContent = roomCode;
    showScreen('create-screen');
    
    setupRoom();
}

function showJoinScreen() {
    showScreen('join-screen');
}

function updateCreatorName() {
    const name = document.getElementById('creator-name').value || 'Player 1';
    if (gameRef && playerId) {
        gameRef.child(`players/${playerId}/name`).set(name);
    }
}

function setupRoom() {
    const name = document.getElementById('creator-name').value || 'Player 1';
    playerName = name;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    const gameData = {
        host: playerId,
        players: {
            [playerId]: {
                name: name,
                connected: true
            }
        },
        mode: null,
        currentQuestion: 0,
        currentTurn: 0,
        gameStarted: false,
        skipsLeft: 3,
        currentRound: 0,
        questionsAskedThisRound: 0
    };
    
    gameRef.set(gameData)
        .then(() => console.log('Room created successfully!'))
        .catch((error) => {
            console.error('Error creating room:', error);
            alert('Error creating room: ' + error.message);
        });
    
    gameRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            currentGame = data;
            handleGameUpdate(data);
        }
    });
    
    gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
}

function joinRoom() {
    const code = document.getElementById('join-code').value.toUpperCase();
    const name = document.getElementById('joiner-name').value || 'Player 2';
    
    if (code.length !== 4) {
        alert('Please enter a valid 4-character room code');
        return;
    }
    
    roomCode = code;
    playerId = generatePlayerId();
    playerName = name;
    isHost = false;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    gameRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
            gameRef.child(`players/${playerId}`).set({
                name: name,
                connected: true
            })
            .then(() => {
                console.log('Successfully joined room!');
                
                gameRef.on('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        currentGame = data;
                        handleGameUpdate(data);
                    }
                });
                
                gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
            })
            .catch((error) => {
                console.error('Error joining room:', error);
                alert('Error joining room: ' + error.message);
            });
        } else {
            alert('Room not found. Please check the code and try again.');
        }
    }).catch((error) => {
        console.error('Error checking room:', error);
        alert('Error: ' + error.message);
    });
}

// Game Logic
function handleGameUpdate(gameData) {
    const playerCount = Object.keys(gameData.players).length;
    
    const playerIds = Object.keys(gameData.players);
    if (playerIds.length >= 1) {
        const p1Name = gameData.players[playerIds[0]].name;
        document.getElementById('game-player1').textContent = p1Name;
    }
    if (playerIds.length >= 2) {
        const p2Name = gameData.players[playerIds[1]].name;
        document.getElementById('game-player2').textContent = p2Name;
    }
    
    if (playerCount === 2 && !gameData.gameStarted) {
        if (isHost) {
            startNewRound(1);
        }
    } else if (gameData.gameStarted) {
        // Handle guessing game updates first if in a guessing round
        if (gameData.currentRound && GAME_STRUCTURE[gameData.currentRound]?.type === 'guessing') {
            handleGuessingGameUpdate(gameData);
        } else {
            // Only show game screen and update for question rounds
            showScreen('game-screen');
            updateGameScreen(gameData);
        }
    }
}

function startNewRound(roundNumber = null) {
    if (!roundNumber) {
        roundNumber = (currentGame.currentRound || 0) + 1;
    }
    
    if (roundNumber > 6) {
        endGame();
        return;
    }
    
    const roundInfo = GAME_STRUCTURE[roundNumber];
    
    if (roundInfo.type === 'guessing') {
        startGuessingGame(roundNumber);
    } else {
        // Question round
        let mode = roundInfo.category;
        
        // For round 6, randomly choose between soul-connection and heating-up
        if (roundNumber === 6) {
            mode = Math.random() > 0.5 ? 'long-term' : 'spicy';
            roundInfo.name = mode === 'spicy' ? 'Heating Up 🔥' : 'Soul Connection';
        }
        
        gameRef.update({
            mode: mode,
            gameStarted: true,
            currentQuestion: 0,
            currentTurn: Math.floor(Math.random() * 2),
            currentRound: roundNumber,
            roundName: `Round ${roundNumber} - ${roundInfo.name}`,
            questionsAskedThisRound: 0,
            showingRoundIntro: true,
            guessingPhase: null
        });
    }
}

function startGuessingGame(roundNumber) {
    // Get appropriate questions for this round
    const questionBank = roundNumber === 1 ? guessingQuestions.round1 :
                        roundNumber === 3 ? guessingQuestions.round3 :
                        guessingQuestions.round5;
    
    // Select a random question
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    const guessingQuestion = questionBank[randomIndex];
    
    // Determine who answers first based on player order
    const playerIds = Object.keys(currentGame.players);
    const hostIndex = playerIds.indexOf(currentGame.host);
    
    // Alternate who goes first, or random for round 5
    let hostIsAnswerer;
    if (roundNumber === 1) {
        hostIsAnswerer = true; // Host answers first in round 1
    } else if (roundNumber === 3) {
        hostIsAnswerer = false; // Non-host answers first in round 3
    } else {
        hostIsAnswerer = Math.random() < 0.5; // Random for round 5
    }
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        guessingQuestion: guessingQuestion,
        hostIsAnswerer: hostIsAnswerer,
        guessingPhase: 'intro',
        playerAnswer: null,
        playerGuess: null,
        showingRoundIntro: true
    });
}

function handleGuessingGameUpdate(gameData) {
    if (!gameData.guessingQuestion) return; // Safety check
    
    // Determine if current player is the answerer
    const isAnswerer = (gameData.hostIsAnswerer && playerId === gameData.host) || 
                      (!gameData.hostIsAnswerer && playerId !== gameData.host);
    guessingRole = isAnswerer ? 'answerer' : 'guesser';
    
    console.log('Guessing update:', { 
        phase: gameData.guessingPhase, 
        role: guessingRole, 
        hasAnswer: !!gameData.playerAnswer,
        hasGuess: !!gameData.playerGuess 
    });
    
    if (gameData.guessingPhase === 'intro' && !gameData.showingRoundIntro) {
        if (guessingRole === 'answerer') {
            showAnswerScreen(gameData.guessingQuestion);
        } else {
            showWaitingForAnswer();
        }
        
        // Update phase to answering
        if (isHost) {
            setTimeout(() => {
                gameRef.update({ guessingPhase: 'answering' });
            }, 100);
        }
    } else if (gameData.guessingPhase === 'guessing' && gameData.playerAnswer) {
        // When in guessing phase with an answer
        if (guessingRole === 'guesser') {
            showGuessScreen(gameData.guessingQuestion, gameData.playerAnswer);
        } else {
            // Answerer waits while guesser is choosing
            showScreen('guessing-answer-screen');
            document.getElementById('submit-answer-btn').style.display = 'none';
            document.getElementById('answer-waiting').style.display = 'block';
            document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
        }
    } else if (gameData.guessingPhase === 'complete' && gameData.playerGuess !== null) {
        // Both players see the result
        showGuessingResult(gameData.playerGuess === gameData.playerAnswer, gameData.playerAnswer, gameData.playerGuess);
    }
}

function showAnswerScreen(question) {
    showScreen('guessing-answer-screen');
    document.getElementById('guessing-question').textContent = question.question;
    document.getElementById('guessing-answer-input').value = '';
    document.getElementById('answer-waiting').style.display = 'none';
    document.getElementById('submit-answer-btn').style.display = 'block';
}

function showWaitingForAnswer() {
    showScreen('guessing-guess-screen');
    document.getElementById('guess-question').textContent = currentGame.guessingQuestion.question;
    document.getElementById('guess-options').innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center;">Waiting for your partner to answer...</p>';
    document.getElementById('guess-waiting').style.display = 'none'; // Hide the other waiting text
}

function showGuessScreen(question, realAnswer) {
    showScreen('guessing-guess-screen');
    document.getElementById('guess-question').textContent = question.question;
    document.getElementById('guess-waiting').style.display = 'none';
    
    // Get 3 fake options and mix with real answer
    const fakeOptions = getRandomFakeOptions(question.fakeOptions, 3);
    const allOptions = shuffleArray([...fakeOptions, realAnswer]);
    
    // Create option buttons
    const optionsContainer = document.getElementById('guess-options');
    optionsContainer.innerHTML = '';
    
    allOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'guess-option';
        button.textContent = option;
        button.addEventListener('click', () => handleGuessSelection(option, realAnswer));
        optionsContainer.appendChild(button);
    });
}

function handleGuessSelection(guess, correctAnswer) {
    // Disable all buttons
    const buttons = document.querySelectorAll('.guess-option');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === guess && guess !== correctAnswer) {
            btn.classList.add('incorrect');
        }
    });
    
    gameRef.update({
        playerGuess: guess,
        guessingPhase: 'complete'
    });
}

function showGuessingResult(isCorrect, correctAnswer, playerGuess) {
    showScreen('guessing-result-screen');
    
    const resultTitle = document.getElementById('guess-result-title');
    resultTitle.textContent = isCorrect ? '🎉 Correct! 🎉' : '❌ Not quite!';
    resultTitle.style.color = isCorrect ? '#4CAF50' : '#f44336';
    
    document.querySelector('.result-question').textContent = currentGame.guessingQuestion.question;
    document.getElementById('actual-answer').textContent = correctAnswer;
    document.getElementById('player-guess').textContent = playerGuess;
}

function updateGameScreen(gameData) {
    if (gameData.showingRoundIntro) {
        showRoundIntro(gameData.roundName);
        setTimeout(() => {
            if (isHost && gameRef) {
                gameRef.child('showingRoundIntro').set(false);
            }
        }, 3000);
        return;
    }
    
    // Hide round indicator after intro
    document.getElementById('round-indicator').style.display = 'none';
    
    // Only update question game UI if it's a question round
    if (GAME_STRUCTURE[gameData.currentRound]?.type === 'questions') {
        updateQuestionGame(gameData);
    }
}

function showRoundIntro(roundName) {
    // Always show game screen first
    showScreen('game-screen');
    
    const roundIndicator = document.getElementById('round-indicator');
    roundIndicator.textContent = roundName;
    roundIndicator.style.display = 'block';
    
    // Hide both question and waiting content during intro
    document.getElementById('question-content').style.display = 'none';
    document.getElementById('waiting-content').style.display = 'none';
}

function updateQuestionGame(gameData) {
    const playerIds = Object.keys(gameData.players);
    const myTurnIndex = playerIds.indexOf(playerId);
    const isMyTurn = gameData.currentTurn === myTurnIndex;
    
    const questionList = questions[gameData.mode];
    const currentQuestion = questionList[gameData.currentQuestion];
    
    const turnIndicator = document.getElementById('turn-indicator');
    const currentPlayerName = gameData.players[playerIds[gameData.currentTurn]].name;
    
    if (isMyTurn) {
        turnIndicator.textContent = "Your turn to ask!";
        turnIndicator.className = "turn-indicator my-turn";
        document.getElementById('question-content').style.display = 'block';
        document.getElementById('waiting-content').style.display = 'none';
        document.getElementById('next-btn').disabled = false;
        document.getElementById('skip-btn').disabled = gameData.skipsLeft === 0;
    } else {
        turnIndicator.textContent = `${currentPlayerName}'s turn to ask`;
        turnIndicator.className = "turn-indicator waiting";
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
    }
    
    const questionsAsked = gameData.questionsAskedThisRound || 0;
    const roundsCompleted = Math.floor((gameData.currentRound - 1) / 2);
    const questionRoundNumber = roundsCompleted + 1;
    
    document.getElementById('question-number').textContent = 
        `Round ${gameData.currentRound}/6 • Question ${questionsAsked + 1} of 6`;
    document.getElementById('question-text').textContent = currentQuestion;
    
    // Update progress bar (now out of 6 rounds)
    const progress = ((gameData.currentRound - 1) / 6) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    const skipBtn = document.getElementById('skip-btn');
    skipBtn.textContent = `Skip (${gameData.skipsLeft} left)`;
}

function nextQuestion() {
    const questionsAsked = (currentGame.questionsAskedThisRound || 0) + 1;
    
    if (questionsAsked >= 6) {
        // Move to next round
        startNewRound();
    } else {
        gameRef.update({
            currentQuestion: currentGame.currentQuestion + 1,
            currentTurn: 1 - currentGame.currentTurn,
            questionsAskedThisRound: questionsAsked
        });
    }
}

function skipQuestion() {
    if (currentGame.skipsLeft > 0) {
        gameRef.update({
            skipsLeft: currentGame.skipsLeft - 1
        });
        nextQuestion();
    }
}

function endGame() {
    alert(`Amazing connection! You've completed all 6 rounds - 3 guessing games and 18 meaningful questions together! 💕`);
    leaveGame();
}

function leaveGame() {
    if (gameRef) {
        gameRef.off();
        gameRef.child(`players/${playerId}`).remove();
        
        if (isHost) {
            gameRef.remove();
        }
    }
    
    roomCode = '';
    playerId = '';
    playerName = '';
    isHost = false;
    gameRef = null;
    currentGame = null;
    
    showScreen('start-screen');
}

// Event Listeners for Guessing Game
document.getElementById('submit-answer-btn').addEventListener('click', () => {
    const answer = document.getElementById('guessing-answer-input').value.trim();
    
    if (answer.length === 0) {
        alert('Please enter an answer!');
        return;
    }
    
    console.log('Submitting answer:', answer);
    
    // Hide submit button and show waiting text
    document.getElementById('submit-answer-btn').style.display = 'none';
    document.getElementById('answer-waiting').style.display = 'block';
    
    // Update Firebase with the answer and change phase
    gameRef.update({
        playerAnswer: answer,
        guessingPhase: 'guessing'
    }).then(() => {
        console.log('Answer submitted successfully');
    }).catch((error) => {
        console.error('Error submitting answer:', error);
        alert('Error submitting answer. Please try again.');
        // Reset UI on error
        document.getElementById('submit-answer-btn').style.display = 'block';
        document.getElementById('answer-waiting').style.display = 'none';
    });
});

document.getElementById('continue-from-guess-btn').addEventListener('click', () => {
    startNewRound();
});

// Helper functions for guessing game
function getRandomFakeOptions(fakeOptions, count = 3) {
    const shuffled = [...fakeOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Auto-format room code input
document.getElementById('join-code').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});