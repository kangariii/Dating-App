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
        showScreen('game-screen');
        updateGameScreen(gameData);
    }
}

function startNewRound(roundNumber) {
    let mode, roundName;
    
    if (roundNumber === 1) {
        mode = 'first-date';
        roundName = 'Round 1 - Getting to Know You';
    } else if (roundNumber === 2) {
        mode = 'getting-closer';
        roundName = 'Round 2 - Going Deeper';
    } else if (roundNumber === 3) {
        mode = Math.random() > 0.5 ? 'long-term' : 'spicy';
        roundName = mode === 'spicy' ? 'Round 3 - Heating Up 🔥' : 'Round 3 - Soul Connection';
    }
    
    gameRef.update({
        mode: mode,
        gameStarted: true,
        currentQuestion: 0,
        currentTurn: Math.floor(Math.random() * 2),
        currentRound: roundNumber,
        roundName: roundName,
        questionsAskedThisRound: 0,
        showingRoundIntro: true
    });
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
    
    document.getElementById('round-indicator').style.display = 'none';
    updateQuestionGame(gameData);
}

function showRoundIntro(roundName) {
    const roundIndicator = document.getElementById('round-indicator');
    roundIndicator.textContent = roundName;
    roundIndicator.style.display = 'block';
    
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
    document.getElementById('question-number').textContent = 
        `Round ${gameData.currentRound}/3 • Question ${questionsAsked + 1} of 6`;
    document.getElementById('question-text').textContent = currentQuestion;
    
    const totalQuestionsInGame = 18;
    const totalQuestionsAsked = ((gameData.currentRound - 1) * 6) + questionsAsked;
    const progress = (totalQuestionsAsked / totalQuestionsInGame) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    const skipBtn = document.getElementById('skip-btn');
    skipBtn.textContent = `Skip (${gameData.skipsLeft} left)`;
}

function nextQuestion() {
    const questionsAsked = (currentGame.questionsAskedThisRound || 0) + 1;
    
    if (questionsAsked >= 6) {
        if (currentGame.currentRound < 3) {
            startNewRound(currentGame.currentRound + 1);
        } else {
            alert(`Amazing connection! You've completed all 3 rounds and shared 18 meaningful moments together! 💕`);
            leaveGame();
        }
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

// Auto-format room code input
document.getElementById('join-code').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});