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

// New game structure - 9 rounds alternating between guessing, trivia, and questions
// Each round now has 6 questions total
const GAME_STRUCTURE = {
    1: { type: 'guessing', name: 'Guessing Game #1' },          // 6 guessing questions
    2: { type: 'trivia', name: 'Trivia Challenge #1' },         // 6 trivia questions
    3: { type: 'questions', category: 'first-date', name: 'Getting to Know You' }, // 6 regular questions
    4: { type: 'guessing', name: 'Guessing Game #2' },          // 6 guessing questions
    5: { type: 'trivia', name: 'Trivia Challenge #2' },         // 6 trivia questions
    6: { type: 'questions', category: 'getting-closer', name: 'Going Deeper' },     // 6 regular questions
    7: { type: 'guessing', name: 'Guessing Game #3' },          // 6 guessing questions
    8: { type: 'trivia', name: 'Trivia Challenge #3' },         // 6 trivia questions
    9: { type: 'questions', category: null, name: 'Final Round' } // 6 regular questions (randomly chosen)
};

// Guessing game state
let currentGuessingQuestion = null;
let guessingRole = null; // 'answerer' or 'guesser'
let guessingQuestionsAsked = 0; // Track how many guessing questions have been asked this round
let processingContinue = false; // Prevent double-clicking continue button

// Trivia game state
let currentTriviaQuestion = null;
let triviaQuestionsAsked = 0;
let triviaScores = { player1: 0, player2: 0 };
let myTriviaAnswer = null;
let partnerTriviaAnswer = null;
let triviaRoundScores = { player1: 0, player2: 0 };

// Overall game scores
let overallScores = { player1: 0, player2: 0 };

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
    // Keep this function for backward compatibility but don't use it
}

function submitCreatorName() {
    const name = document.getElementById('creator-name').value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    // Update name in Firebase
    if (gameRef && playerId) {
        gameRef.child(`players/${playerId}`).update({
            name: name,
            ready: true
        });
        
        // Hide setup, show waiting
        document.getElementById('creator-setup').style.display = 'none';
        document.getElementById('creator-waiting').style.display = 'block';
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
                connected: true,
                ready: false
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
            // Force update even if data appears same
            const previousPhase = currentGame?.guessingPhase;
            const previousAnswer = currentGame?.playerAnswer;
            
            currentGame = data;
            
            console.log('Firebase update received:', {
                round: data.currentRound,
                phase: data.guessingPhase,
                hasAnswer: !!data.playerAnswer,
                roundType: GAME_STRUCTURE[data.currentRound]?.type,
                phaseChanged: previousPhase !== data.guessingPhase,
                answerChanged: previousAnswer !== data.playerAnswer
            });
            
            // Always handle update, don't skip based on previous state
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
                connected: true,
                ready: true
            })
            .then(() => {
                console.log('Successfully joined room!');
                
                gameRef.on('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        // Force update even if data appears same
                        const previousPhase = currentGame?.guessingPhase;
                        const previousAnswer = currentGame?.playerAnswer;
                        
                        currentGame = data;
                        
                        console.log('Firebase update received (joiner):', {
                            round: data.currentRound,
                            phase: data.guessingPhase,
                            hasAnswer: !!data.playerAnswer,
                            roundType: GAME_STRUCTURE[data.currentRound]?.type,
                            phaseChanged: previousPhase !== data.guessingPhase,
                            answerChanged: previousAnswer !== data.playerAnswer
                        });
                        
                        // Always handle update, don't skip based on previous state
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
    // Always update currentGame first
    currentGame = gameData;
    
    // Sync guessing questions counter
    if (gameData.guessingQuestionsAsked !== undefined) {
        guessingQuestionsAsked = gameData.guessingQuestionsAsked;
    }
    
    // Sync overall scores
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
        document.getElementById('score-player1').textContent = `(${overallScores.player1})`;
        document.getElementById('score-player2').textContent = `(${overallScores.player2})`;
    }
    
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
        // Check if both players are ready
        const allReady = Object.values(gameData.players).every(player => player.ready);
        if (allReady && isHost) {
            startNewRound(1);
        }
    } else if (gameData.gameStarted) {
        // Check if we're in a guessing round
        if (gameData.currentRound && GAME_STRUCTURE[gameData.currentRound]?.type === 'guessing') {
            // Handle round intro for guessing games
            if (gameData.showingRoundIntro && gameData.guessingQuestionsAsked === 0) {
                showRoundIntro(gameData.roundName);
                setTimeout(() => {
                    if (isHost && gameRef) {
                        gameRef.update({
                            showingRoundIntro: false,
                            guessingPhase: 'answering'
                        });
                    }
                }, 3000);
            } else {
                // After intro or between questions, handle the guessing game
                handleGuessingGameUpdate(gameData);
            }
        } else if (gameData.currentRound && GAME_STRUCTURE[gameData.currentRound]?.type === 'trivia') {
            // Handle trivia rounds
            if (gameData.showingRoundIntro && gameData.triviaQuestionsAsked === 0) {
                showRoundIntro(gameData.roundName);
                setTimeout(() => {
                    if (isHost && gameRef) {
                        gameRef.update({
                            showingRoundIntro: false,
                            triviaPhase: 'questioning'
                        });
                    }
                }, 3000);
            } else {
                handleTriviaGameUpdate(gameData);
            }
        } else {
            // Handle question rounds
            showScreen('game-screen');
            updateGameScreen(gameData);
        }
    }
}

function startNewRound(roundNumber = null) {
    if (!roundNumber) {
        roundNumber = (currentGame.currentRound || 0) + 1;
    }
    
    if (roundNumber > 9) {
        endGame();
        return;
    }
    
    const roundInfo = GAME_STRUCTURE[roundNumber];
    
    if (roundInfo.type === 'guessing') {
        // Reset guessing questions counter for new round
        guessingQuestionsAsked = 0;
        startGuessingGame(roundNumber);
    } else if (roundInfo.type === 'trivia') {
        // Reset trivia counters for new round
        triviaQuestionsAsked = 0;
        triviaRoundScores = { player1: 0, player2: 0 };
        startTriviaGame(roundNumber);
    } else {
        // Question round
        let mode = roundInfo.category;
        
        // For round 9, randomly choose between soul-connection and heating-up
        if (roundNumber === 9) {
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
            guessingPhase: null,
            guessingQuestionsAsked: 0, // Reset for clean state
            triviaPhase: null,
            triviaQuestionsAsked: 0
        });
    }
}

function startGuessingGame(roundNumber) {
    console.log('Starting guessing game for round:', roundNumber);
    
    // Get appropriate questions for this round
    const questionBank = roundNumber === 1 ? guessingQuestions.round1 :
                        roundNumber === 3 ? guessingQuestions.round3 :
                        guessingQuestions.round5;
    
    // If starting a new guessing round, reset counter
    if (!currentGame.guessingQuestionsAsked || currentGame.guessingQuestionsAsked === 0) {
        guessingQuestionsAsked = 0;
    } else {
        guessingQuestionsAsked = currentGame.guessingQuestionsAsked;
    }
    
    // Select a random question (making sure we have enough questions)
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    const guessingQuestion = questionBank[randomIndex];
    
    // Determine who answers based on question number
    // Questions 1,2,3: host answers if odd question number
    // Questions 4,5,6: host answers if even question number
    const questionNumber = guessingQuestionsAsked + 1;
    let hostIsAnswerer;
    
    if (questionNumber <= 3) {
        hostIsAnswerer = (questionNumber % 2 === 1); // Host answers questions 1 and 3
    } else {
        hostIsAnswerer = (questionNumber % 2 === 0); // Host answers questions 4 and 6
    }
    
    console.log('Guessing game setup:', {
        questionNumber,
        hostIsAnswerer,
        guessingQuestionsAsked,
        showIntro: guessingQuestionsAsked === 0
    });
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        guessingQuestion: guessingQuestion,
        hostIsAnswerer: hostIsAnswerer,
        guessingPhase: guessingQuestionsAsked === 0 ? 'intro' : 'answering', // Go directly to answering for questions 2-6
        playerAnswer: null,
        playerGuess: null,
        showingRoundIntro: guessingQuestionsAsked === 0, // Only show intro for first question
        guessingQuestionsAsked: guessingQuestionsAsked
    });
}

function handleGuessingGameUpdate(gameData) {
    if (!gameData.guessingQuestion || !playerId) {
        console.log('Missing data:', { hasQuestion: !!gameData.guessingQuestion, hasPlayerId: !!playerId });
        return;
    }
    
    // Reset processing flag when we get a new state
    processingContinue = false;
    
    // Sync the questions asked counter
    guessingQuestionsAsked = gameData.guessingQuestionsAsked || 0;
    
    // Get all player IDs to determine order
    const playerIds = Object.keys(gameData.players);
    const myPlayerIndex = playerIds.indexOf(playerId);
    
    if (myPlayerIndex === -1) {
        console.error('Player not found in game!', { playerId, playerIds });
        return;
    }
    
    // Determine if current player is the answerer based on their position
    const hostIndex = playerIds.indexOf(gameData.host);
    const isAnswerer = (gameData.hostIsAnswerer && myPlayerIndex === hostIndex) || 
                      (!gameData.hostIsAnswerer && myPlayerIndex !== hostIndex);
    guessingRole = isAnswerer ? 'answerer' : 'guesser';
    
    console.log('Guessing update:', { 
        phase: gameData.guessingPhase, 
        role: guessingRole, 
        hasAnswer: !!gameData.playerAnswer,
        hasGuess: !!gameData.playerGuess,
        playerId: playerId,
        playerIndex: myPlayerIndex,
        hostIndex: hostIndex,
        hostIsAnswerer: gameData.hostIsAnswerer,
        questionsAsked: guessingQuestionsAsked
    });
    
    switch(gameData.guessingPhase) {
        case 'intro':
            // This is handled by showRoundIntro, just wait
            break;
            
        case 'answering':
            if (guessingRole === 'answerer') {
                showAnswerScreen(gameData.guessingQuestion);
            } else {
                showWaitingForAnswer();
            }
            break;
            
        case 'guessing':
            if (gameData.playerAnswer) {
                // Add a small delay to ensure UI is ready
                setTimeout(() => {
                    if (guessingRole === 'guesser') {
                        console.log('Attempting to show guess screen...');
                        showGuessScreen(gameData.guessingQuestion, gameData.playerAnswer);
                    } else {
                        // Answerer waits while guesser is choosing
                        showScreen('guessing-answer-screen');
                        document.getElementById('submit-answer-btn').style.display = 'none';
                        document.getElementById('answer-waiting').style.display = 'block';
                        document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
                    }
                }, 100);
            }
            break;
            
        case 'complete':
            if (gameData.playerGuess !== null && gameData.playerAnswer !== null) {
                showGuessingResult(gameData.playerGuess === gameData.playerAnswer, gameData.playerAnswer, gameData.playerGuess);
            }
            break;
    }
}

function showAnswerScreen(question) {
    console.log('Showing answer screen for question:', question.question);
    showScreen('guessing-answer-screen');
    
    // Show question number
    const questionNum = (currentGame.guessingQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-answer-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Quick! Answer this:`;
    
    document.getElementById('guessing-question').textContent = question.question;
    document.getElementById('guessing-answer-input').value = '';
    document.getElementById('answer-waiting').style.display = 'none';
    document.getElementById('submit-answer-btn').style.display = 'block';
    
    // Focus on input for better UX
    setTimeout(() => {
        document.getElementById('guessing-answer-input').focus();
    }, 100);
}

function showWaitingForAnswer() {
    showScreen('guessing-guess-screen');
    const question = currentGame?.guessingQuestion?.question || 'Waiting for your partner to answer...';
    const questionNum = (currentGame?.guessingQuestionsAsked || 0) + 1;
    
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Waiting...`;
    document.getElementById('guess-question').textContent = question;
    document.getElementById('guess-options').innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center;">Waiting for your partner to answer...</p>';
    document.getElementById('guess-waiting').style.display = 'none'; // Hide the other waiting text
}

function showGuessScreen(question, realAnswer) {
    console.log('Showing guess screen with answer:', realAnswer);
    showScreen('guessing-guess-screen');
    
    // Show question number
    const questionNum = (currentGame.guessingQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Can you guess their answer?`;
    
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
    
    // Award point for correct guess
    if (isCorrect && isHost) {
        // Figure out who was guessing
        const playerIds = Object.keys(currentGame.players);
        const guesserIndex = currentGame.hostIsAnswerer ? 1 : 0;
        
        if (guesserIndex === 0) {
            overallScores.player1++;
        } else {
            overallScores.player2++;
        }
        
        // Save to Firebase
        gameRef.child('overallScores').set(overallScores);
    }
    
    document.querySelector('.result-question').textContent = currentGame.guessingQuestion.question;
    document.getElementById('actual-answer').textContent = correctAnswer;
    document.getElementById('player-guess').textContent = playerGuess;
    
    // Update continue button text to show progress
    const continueBtn = document.getElementById('continue-from-guess-btn');
    continueBtn.disabled = false; // Re-enable button
    const questionsLeft = 6 - (currentGame.guessingQuestionsAsked + 1);
    if (questionsLeft > 0) {
        continueBtn.textContent = `Continue (${questionsLeft} questions left)`;
    } else {
        continueBtn.textContent = 'Continue to Next Round';
    }
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
        `Round ${gameData.currentRound}/9 • Question ${questionsAsked + 1} of 6`;
    document.getElementById('question-text').textContent = currentQuestion;
    
    // Update progress bar to reflect total questions (6 per round, 54 total)
    const totalQuestionsInGame = 54; // 9 rounds × 6 questions each
    let totalQuestionsCompleted = 0;
    
    // Calculate questions completed based on rounds
    if (gameData.currentRound > 1) {
        totalQuestionsCompleted = (gameData.currentRound - 1) * 6;
    }
    
    // Add current round progress
    if (GAME_STRUCTURE[gameData.currentRound]?.type === 'questions') {
        totalQuestionsCompleted += gameData.questionsAskedThisRound || 0;
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'guessing') {
        totalQuestionsCompleted += gameData.guessingQuestionsAsked || 0;
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'trivia') {
        totalQuestionsCompleted += gameData.triviaQuestionsAsked || 0;
    }
    
    const progress = (totalQuestionsCompleted / totalQuestionsInGame) * 100;
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
    alert(`Amazing connection! You've completed all 9 rounds - sharing 54 meaningful moments together (18 guessing games, 18 trivia questions, and 18 deep questions)! 💕`);
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
    // Force a complete update to ensure all clients get notified
    const updates = {
        playerAnswer: answer,
        guessingPhase: 'guessing',
        lastUpdate: Date.now() // Add timestamp to force update
    };
    
    gameRef.update(updates).then(() => {
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
    console.log('Continue button clicked', { isHost, guessingQuestionsAsked, processingContinue });
    
    // Prevent multiple simultaneous continues
    if (processingContinue) return;
    
    // Disable button to prevent double clicks
    const continueBtn = document.getElementById('continue-from-guess-btn');
    if (continueBtn.disabled) return; // Already processing
    
    continueBtn.disabled = true;
    processingContinue = true;
    continueBtn.textContent = 'Loading next question...';
    
    // Use Firebase value for questions asked to ensure sync
    const nextQuestionNumber = (currentGame.guessingQuestionsAsked || 0) + 1;
    
    console.log('Processing continue...', { 
        currentQuestionsAsked: currentGame.guessingQuestionsAsked,
        nextQuestionNumber 
    });
    
    // Check if we've completed 6 questions
    if (nextQuestionNumber >= 6) {
        // Reset counter and move to next round
        guessingQuestionsAsked = 0;
        processingContinue = false;
        startNewRound();
    } else {
        // Get appropriate questions for this round
        const questionBank = currentGame.currentRound === 1 ? guessingQuestions.round1 :
                            currentGame.currentRound === 3 ? guessingQuestions.round3 :
                            guessingQuestions.round5;
        
        // Select a new random question
        const randomIndex = Math.floor(Math.random() * questionBank.length);
        const newQuestion = questionBank[randomIndex];
        
        // Determine who answers next based on question number
        const questionNumber = nextQuestionNumber + 1; // +1 because it's the next question
        let hostIsAnswerer;
        
        if (questionNumber <= 3) {
            hostIsAnswerer = (questionNumber % 2 === 1); // Host answers questions 1 and 3
        } else {
            hostIsAnswerer = (questionNumber % 2 === 0); // Host answers questions 4 and 6
        }
        
        console.log('Updating Firebase for next question...', {
            questionNumber,
            hostIsAnswerer,
            question: newQuestion.question
        });
        
        // Update Firebase to start next question - either player can do this
        gameRef.update({
            guessingQuestion: newQuestion,
            hostIsAnswerer: hostIsAnswerer,
            guessingPhase: 'answering',
            playerAnswer: null,
            playerGuess: null,
            guessingQuestionsAsked: nextQuestionNumber,
            showingRoundIntro: false,
            lastUpdate: Date.now() // Force update
        }).then(() => {
            console.log('Firebase updated successfully');
            processingContinue = false;
        }).catch(error => {
            console.error('Error updating Firebase:', error);
            continueBtn.disabled = false;
            continueBtn.textContent = 'Try Again';
            processingContinue = false;
        });
    }
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

// Allow Enter key to submit creator name
document.getElementById('creator-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitCreatorName();
    }
});

// Allow Enter key to join room from code input
document.getElementById('join-code').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        joinRoom();
    }
});

// Allow Enter key to join room
document.getElementById('joiner-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        joinRoom();
    }
});

// Trivia game functions
function startTriviaGame(roundNumber) {
    console.log('Starting trivia game for round:', roundNumber);
    
    // Get a random trivia question
    const triviaQuestion = getRandomTriviaQuestion(roundNumber);
    // Shuffle the options
    const shuffledQuestion = shuffleTriviaOptions(triviaQuestion);
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        triviaQuestion: shuffledQuestion,
        triviaPhase: 'intro',
        player1Answer: null,
        player2Answer: null,
        showingRoundIntro: triviaQuestionsAsked === 0,
        triviaQuestionsAsked: triviaQuestionsAsked,
        triviaRoundScores: triviaRoundScores || { player1: 0, player2: 0 }
    });
}

function handleTriviaGameUpdate(gameData) {
    if (!gameData.triviaQuestion) return;
    
    // Sync the questions asked counter
    triviaQuestionsAsked = gameData.triviaQuestionsAsked || 0;
    triviaRoundScores = gameData.triviaRoundScores || { player1: 0, player2: 0 };
    
    console.log('Trivia update:', {
        phase: gameData.triviaPhase,
        questionsAsked: triviaQuestionsAsked,
        scores: triviaRoundScores
    });
    
    switch(gameData.triviaPhase) {
        case 'intro':
            // Handled by showRoundIntro
            break;
            
        case 'questioning':
            showTriviaQuestion(gameData);
            break;
            
        case 'waiting':
            showTriviaWaiting(gameData);
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
    document.getElementById('trivia-question-number').textContent = 
        `Question ${questionNum} of 6`;
    
    // Update scores
    const playerIds = Object.keys(gameData.players);
    document.getElementById('player1-score').textContent = 
        `${gameData.players[playerIds[0]].name}: ${triviaRoundScores.player1}`;
    document.getElementById('player2-score').textContent = 
        `${gameData.players[playerIds[1]].name}: ${triviaRoundScores.player2}`;
    
    // Show question
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
    
    document.getElementById('trivia-waiting').style.display = 'none';
}

function handleTriviaAnswer(answerIndex) {
    // Disable all buttons
    const buttons = document.querySelectorAll('.trivia-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        if (index === answerIndex) {
            btn.classList.add('selected');
        }
    });
    
    // Show waiting message
    document.getElementById('trivia-waiting').style.display = 'block';
    
    // Update Firebase with my answer
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    if (myIndex === 0) {
        gameRef.update({
            player1Answer: answerIndex,
            triviaPhase: currentGame.player2Answer !== null ? 'results' : 'waiting'
        });
    } else {
        gameRef.update({
            player2Answer: answerIndex,
            triviaPhase: currentGame.player1Answer !== null ? 'results' : 'waiting'
        });
    }
}

function showTriviaWaiting(gameData) {
    // Keep showing the question screen with waiting message
    if (document.getElementById('trivia-question-screen').classList.contains('active')) {
        return; // Already showing waiting
    }
    showTriviaQuestion(gameData);
}

function showTriviaResults(gameData) {
    showScreen('trivia-result-screen');
    
    const playerIds = Object.keys(gameData.players);
    const correctAnswer = gameData.triviaQuestion.correct;
    
    // Check who got it right
    const player1Correct = gameData.player1Answer === correctAnswer;
    const player2Correct = gameData.player2Answer === correctAnswer;
    
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
    
    // Show question and correct answer
    document.getElementById('trivia-result-question').textContent = gameData.triviaQuestion.question;
    document.getElementById('correct-answer').textContent = gameData.triviaQuestion.options[correctAnswer];
    
    // Show player answers
    document.getElementById('player1-name-result').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('player1-answer').textContent = 
        gameData.player1Answer !== null ? gameData.triviaQuestion.options[gameData.player1Answer] : 'No answer';
    document.getElementById('player1-answer').style.color = player1Correct ? '#4CAF50' : '#f44336';
    
    document.getElementById('player2-name-result').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('player2-answer').textContent = 
        gameData.player2Answer !== null ? gameData.triviaQuestion.options[gameData.player2Answer] : 'No answer';
    document.getElementById('player2-answer').style.color = player2Correct ? '#4CAF50' : '#f44336';
    
    // Update scores if host
    if (isHost) {
        const newScores = {
            player1: triviaRoundScores.player1 + (player1Correct ? 1 : 0),
            player2: triviaRoundScores.player2 + (player2Correct ? 1 : 0)
        };
        
        gameRef.update({
            triviaRoundScores: newScores
        });
    }
}

function showTriviaRoundComplete(gameData) {
    showScreen('trivia-complete-screen');
    
    const playerIds = Object.keys(gameData.players);
    const scores = gameData.triviaRoundScores;
    
    // Show final scores
    document.getElementById('player1-final').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('player1-final-score').textContent = scores.player1;
    
    document.getElementById('player2-final').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('player2-final-score').textContent = scores.player2;
    
    // Determine winner
    let winnerText = '';
    if (scores.player1 > scores.player2) {
        winnerText = `${gameData.players[playerIds[0]].name} wins the trivia round!`;
    } else if (scores.player2 > scores.player1) {
        winnerText = `${gameData.players[playerIds[1]].name} wins the trivia round!`;
    } else {
        winnerText = "It's a tie! Great minds think alike!";
    }
    document.getElementById('trivia-winner').textContent = winnerText;
}

// Add event listeners for trivia buttons
document.getElementById('continue-from-trivia-btn').addEventListener('click', () => {
    triviaQuestionsAsked++;
    
    if (triviaQuestionsAsked >= 6) {
        // Show round complete screen
        gameRef.update({
            triviaPhase: 'complete'
        });
    } else {
        // Next question
        const triviaQuestion = getRandomTriviaQuestion(currentGame.currentRound);
        const shuffledQuestion = shuffleTriviaOptions(triviaQuestion);
        
        gameRef.update({
            triviaQuestion: shuffledQuestion,
            triviaPhase: 'questioning',
            player1Answer: null,
            player2Answer: null,
            triviaQuestionsAsked: triviaQuestionsAsked
        });
    }
});

document.getElementById('continue-from-trivia-complete-btn').addEventListener('click', () => {
    startNewRound();
});

// Allow Enter key to submit guessing answer
document.getElementById('guessing-answer-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.getElementById('submit-answer-btn').style.display !== 'none') {
        document.getElementById('submit-answer-btn').click();
    }
});