// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Sound System
class SoundSystem {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.initialized = false;
    }

    // Initialize audio context (must be called after user interaction)
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

    // Generate and play a tone
    playTone(frequency, duration, type = 'sine', volume = 0.1) {
        if (!this.enabled || !this.initialized || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;
        
        // Envelope for smooth sound
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Specific sound effects
    playCorrect() {
        // Pleasant ascending chime
        this.playTone(523, 0.15); // C5
        setTimeout(() => this.playTone(659, 0.15), 100); // E5
        setTimeout(() => this.playTone(784, 0.2), 200); // G5
    }

    playIncorrect() {
        // Descending buzz
        this.playTone(200, 0.3, 'sawtooth', 0.15);
        setTimeout(() => this.playTone(150, 0.3, 'sawtooth', 0.15), 100);
    }

    playClick() {
        // Subtle click
        this.playTone(800, 0.1, 'square', 0.05);
    }

    playRoundComplete() {
        // Celebration sequence
        const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
        notes.forEach((note, i) => {
            setTimeout(() => this.playTone(note, 0.2), i * 150);
        });
    }

    playGameComplete() {
        // Victory fanfare
        const melody = [523, 523, 523, 415, 523, 659, 784];
        const durations = [0.15, 0.15, 0.15, 0.4, 0.15, 0.15, 0.4];
        
        melody.forEach((note, i) => {
            setTimeout(() => this.playTone(note, durations[i]), i * 200);
        });
    }

    playNewRound() {
        // Gentle ascending tone
        this.playTone(392, 0.2); // G4
        setTimeout(() => this.playTone(523, 0.3), 150); // C5
    }

    playJoin() {
        // Two-note welcome
        this.playTone(523, 0.2);
        setTimeout(() => this.playTone(659, 0.2), 200);
    }

    playSpeedTimer() {
        // Urgent countdown tick
        this.playTone(440, 0.1, 'square', 0.08);
    }

    playSpeedComplete() {
        // Time's up sound
        this.playTone(220, 0.5, 'sawtooth', 0.12);
    }

    toggle() {
        this.enabled = !this.enabled;
        console.log('Sound:', this.enabled ? 'ON' : 'OFF');
        return this.enabled;
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
    "beetle", "cricket", "grasshopper", "dragonfly", "ladybug", "caterpillar", "worm", "snail",
    "bat", "hedgehog", "raccoon", "skunk", "beaver", "otter", "seal", "walrus", "polar bear",
    "camel", "llama", "alpaca", "donkey", "mule", "buffalo", "bison", "moose", "elk"
  ],

  "Fruits": [
    "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry", "blackberry",
    "cherry", "peach", "plum", "pear", "pineapple", "mango", "papaya", "kiwi", "watermelon",
    "cantaloupe", "honeydew", "lemon", "lime", "grapefruit", "coconut", "avocado", "tomato",
    "apricot", "fig", "date", "pomegranate", "cranberry", "gooseberry", "elderberry", "mulberry",
    "tangerine", "mandarin", "clementine", "nectarine", "persimmon", "guava", "passion fruit",
    "dragon fruit", "star fruit", "lychee", "rambutan", "durian", "jackfruit", "plantain"
  ],

  "Vegetables": [
    "carrot", "broccoli", "spinach", "lettuce", "cabbage", "cauliflower", "celery", "onion",
    "garlic", "potato", "sweet potato", "tomato", "cucumber", "bell pepper", "jalapeño", "corn",
    "peas", "green beans", "asparagus", "artichoke", "brussels sprouts", "kale", "arugula",
    "radish", "turnip", "beet", "parsnip", "leek", "chives", "scallion", "mushroom", "zucchini",
    "squash", "pumpkin", "eggplant", "okra", "swiss chard", "collard greens", "bok choy",
    "watercress", "endive", "fennel", "ginger", "horseradish", "rhubarb", "bamboo shoots"
  ],

  "Car Brands": [
    "toyota", "honda", "ford", "chevrolet", "nissan", "bmw", "mercedes", "audi", "volkswagen",
    "hyundai", "kia", "mazda", "subaru", "lexus", "acura", "infiniti", "cadillac", "lincoln",
    "buick", "gmc", "jeep", "dodge", "chrysler", "ram", "tesla", "volvo", "jaguar", "land rover",
    "porsche", "ferrari", "lamborghini", "maserati", "bentley", "rolls royce", "aston martin",
    "mclaren", "bugatti", "lotus", "mini", "fiat", "alfa romeo", "peugeot", "renault", "citroën",
    "saab", "mitsubishi", "isuzu", "suzuki", "daihatsu", "genesis"
  ],

  "Disney Movies": [
    "snow white", "pinocchio", "fantasia", "dumbo", "bambi", "cinderella", "alice in wonderland",
    "peter pan", "lady and the tramp", "sleeping beauty", "101 dalmatians", "the jungle book",
    "the aristocats", "robin hood", "the rescuers", "the fox and the hound", "the black cauldron",
    "the great mouse detective", "oliver and company", "the little mermaid", "beauty and the beast",
    "aladdin", "the lion king", "pocahontas", "the hunchback of notre dame", "hercules", "mulan",
    "tarzan", "fantasia 2000", "dinosaur", "the emperor's new groove", "atlantis", "lilo and stitch",
    "treasure planet", "brother bear", "home on the range", "chicken little", "meet the robinsons",
    "bolt", "the princess and the frog", "tangled", "winnie the pooh", "wreck it ralph", "frozen",
    "big hero 6", "zootopia", "moana", "coco", "incredibles", "finding nemo", "monsters inc",
    "cars", "ratatouille", "wall-e", "up", "toy story", "bugs life", "monsters university",
    "inside out", "the good dinosaur", "finding dory", "cars 3", "incredibles 2", "ralph breaks the internet",
    "toy story 4", "onward", "soul", "luca", "encanto", "turning red", "lightyear", "strange world"
  ],

  "Colors": [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
    "gray", "grey", "silver", "gold", "beige", "tan", "navy", "turquoise", "teal", "cyan",
    "magenta", "maroon", "crimson", "scarlet", "coral", "salmon", "peach", "khaki", "olive",
    "lime", "mint", "emerald", "forest", "jade", "sage", "lavender", "violet", "indigo", "royal",
    "sky", "powder", "baby", "hot", "rose", "burgundy", "wine", "plum", "mauve", "fuchsia"
  ],

  "Fast Food Chains": [
    "mcdonalds", "burger king", "wendys", "taco bell", "kfc", "pizza hut", "dominos", "subway",
    "starbucks", "dunkin", "chipotle", "panera", "chick fil a", "in n out", "five guys",
    "sonic", "dairy queen", "arbys", "popeyes", "papa johns", "little caesars", "white castle",
    "jack in the box", "del taco", "qdoba", "panda express", "pei wei", "noodles and company",
    "jimmy johns", "papa murphys", "blaze pizza", "mod pizza", "shake shack", "whataburger",
    "culvers", "bojangles", "zaxbys", "raising canes", "el pollo loco", "boston market",
    "long john silvers", "auntie annes", "orange julius", "sbarro", "pretzelmaker", "hot dog on a stick"
  ],

  "Sports": [
    "football", "basketball", "baseball", "soccer", "tennis", "golf", "hockey", "volleyball",
    "swimming", "track", "boxing", "wrestling", "gymnastics", "skiing", "snowboarding", "surfing",
    "skateboarding", "cycling", "running", "marathon", "triathlon", "badminton", "ping pong",
    "table tennis", "bowling", "pool", "billiards", "darts", "archery", "fencing", "martial arts",
    "karate", "judo", "taekwondo", "rugby", "cricket", "lacrosse", "field hockey", "water polo",
    "diving", "figure skating", "speed skating", "curling", "bobsled", "luge", "skeleton",
    "biathlon", "cross country", "downhill", "slalom", "pole vault", "high jump", "long jump",
    "shot put", "discus", "hammer throw", "javelin", "decathlon", "heptathlon", "hurdles"
  ],

  "Body Parts": [
    "head", "hair", "forehead", "eyebrow", "eye", "eyelid", "eyelash", "nose", "nostril", "cheek",
    "mouth", "lip", "tooth", "teeth", "tongue", "chin", "jaw", "ear", "neck", "throat", "shoulder",
    "arm", "elbow", "forearm", "wrist", "hand", "finger", "thumb", "nail", "chest", "breast",
    "back", "spine", "waist", "hip", "stomach", "belly", "abdomen", "leg", "thigh", "knee",
    "shin", "calf", "ankle", "foot", "heel", "toe", "brain", "heart", "lung", "liver", "kidney",
    "muscle", "bone", "skin", "blood", "nerve", "tendon", "ligament", "joint", "skull", "rib"
  ],

  "Ice Cream Flavors": [
    "vanilla", "chocolate", "strawberry", "neapolitan", "mint chocolate chip", "cookies and cream",
    "cookie dough", "rocky road", "butter pecan", "pistachio", "rum raisin", "coffee", "caramel",
    "banana", "cherry", "peach", "coconut", "peanut butter", "fudge", "marshmallow", "sherbet",
    "sorbet", "gelato", "frozen yogurt", "soft serve", "birthday cake", "cotton candy",
    "bubblegum", "superman", "tiger tail", "blue moon", "green tea", "red bean", "taro",
    "black sesame", "lavender", "rose", "honey", "maple", "cinnamon", "cardamom"
  ],

  "Pizza Toppings": [
    "pepperoni", "sausage", "mushrooms", "peppers", "onions", "olives", "cheese", "ham",
    "bacon", "pineapple", "tomatoes", "spinach", "broccoli", "chicken", "beef", "anchovies",
    "jalapeños", "garlic", "basil", "oregano", "arugula", "sun dried tomatoes", "artichokes",
    "eggplant", "zucchini", "corn", "feta", "goat cheese", "ricotta", "mozzarella", "parmesan",
    "cheddar", "provolone", "blue cheese", "ranch", "bbq sauce", "pesto", "white sauce",
    "olive oil", "balsamic", "hot sauce", "red pepper flakes", "capers", "prosciutto", "salami"
  ],

  "Breakfast Foods": [
    "eggs", "bacon", "sausage", "ham", "toast", "bagel", "muffin", "pancakes", "waffles",
    "french toast", "cereal", "oatmeal", "yogurt", "fruit", "juice", "coffee", "tea", "milk",
    "butter", "jam", "jelly", "honey", "syrup", "cream cheese", "peanut butter", "granola",
    "smoothie", "hash browns", "home fries", "grits", "biscuits", "croissant", "danish",
    "donut", "scone", "english muffin", "avocado toast", "omelet", "quiche", "breakfast burrito",
    "breakfast sandwich", "protein bar", "breakfast shake", "cottage cheese", "greek yogurt"
  ],

  "Things in Your Kitchen": [
    "refrigerator", "stove", "oven", "microwave", "dishwasher", "sink", "faucet", "counter",
    "cabinet", "drawer", "pantry", "table", "chair", "plate", "bowl", "cup", "glass", "mug",
    "fork", "knife", "spoon", "spatula", "whisk", "tongs", "ladle", "cutting board", "pot",
    "pan", "skillet", "baking sheet", "mixing bowl", "measuring cup", "blender", "toaster",
    "coffee maker", "can opener", "corkscrew", "peeler", "grater", "colander", "strainer",
    "timer", "scale", "apron", "oven mitt", "dish towel", "sponge", "soap", "trash can",
    "paper towel", "aluminum foil", "plastic wrap", "tupperware", "jar", "bottle"
  ],

  "TV Shows": [
    "friends", "seinfeld", "the office", "game of thrones", "breaking bad", "stranger things",
    "the simpsons", "south park", "family guy", "big bang theory", "how i met your mother",
    "greys anatomy", "the walking dead", "lost", "house", "er", "cheers", "frasier", "jeopardy",
    "wheel of fortune", "saturday night live", "the tonight show", "good morning america",
    "the view", "ellen", "oprah", "dr phil", "judge judy", "cops", "america's got talent",
    "the voice", "american idol", "dancing with the stars", "survivor", "big brother",
    "the bachelor", "the bachelorette", "jersey shore", "keeping up with the kardashians",
    "real housewives", "top chef", "chopped", "jeopardy", "family feud", "price is right"
  ],

  "Jobs/Careers": [
    "doctor", "nurse", "teacher", "lawyer", "engineer", "accountant", "manager", "salesperson",
    "chef", "waiter", "cashier", "mechanic", "electrician", "plumber", "carpenter", "painter",
    "police officer", "firefighter", "paramedic", "pilot", "flight attendant", "driver",
    "construction worker", "farmer", "veterinarian", "dentist", "pharmacist", "therapist",
    "counselor", "social worker", "librarian", "secretary", "receptionist", "janitor",
    "security guard", "barber", "hairdresser", "photographer", "artist", "musician", "actor",
    "writer", "journalist", "editor", "programmer", "designer", "architect", "scientist",
    "researcher", "professor", "principal", "coach", "trainer", "real estate agent"
  ],

  "Movie Genres": [
    "action", "adventure", "comedy", "drama", "horror", "thriller", "romance", "sci-fi",
    "fantasy", "mystery", "crime", "documentary", "animation", "musical", "western",
    "war", "biography", "history", "family", "kids", "teen", "adult", "foreign",
    "independent", "art house", "black and white", "silent", "short", "feature",
    "blockbuster", "cult", "classic", "modern", "contemporary", "period", "futuristic",
    "dystopian", "utopian", "post-apocalyptic", "superhero", "martial arts", "sports",
    "dance", "cooking", "travel", "nature", "wildlife", "true crime", "mockumentary"
  ],

  "Things That Are Round": [
    "ball", "circle", "wheel", "coin", "plate", "clock", "globe", "orange", "apple", "pizza",
    "donut", "bagel", "tire", "button", "marble", "pearl", "bubble", "balloon", "moon",
    "sun", "earth", "planet", "ring", "bracelet", "hoop", "frisbee", "record", "cd",
    "dvd", "lens", "magnifying glass", "mirror", "pot", "pan", "bowl", "cup", "mug",
    "cookie", "cake", "pie", "wreath", "steering wheel", "life preserver", "dartboard",
    "compass", "manhole cover", "drum", "tambourine", "cymbal", "gong", "eye", "pupil"
  ],

  "Dog Breeds": [
    "labrador", "golden retriever", "german shepherd", "bulldog", "poodle", "beagle", "rottweiler",
    "yorkshire terrier", "dachshund", "siberian husky", "boxer", "great dane", "chihuahua",
    "shih tzu", "boston terrier", "pomeranian", "australian shepherd", "cocker spaniel",
    "border collie", "mastiff", "basset hound", "saint bernard", "bloodhound", "greyhound",
    "whippet", "dalmatian", "weimaraner", "doberman", "pit bull", "bull terrier", "collie",
    "afghan hound", "irish setter", "english setter", "pointer", "springer spaniel", "brittany",
    "vizsla", "rhodesian ridgeback", "akita", "chow chow", "shar pei", "shiba inu", "corgi",
    "jack russell", "fox terrier", "scottish terrier", "west highland terrier", "cairn terrier"
  ]
};

// Game state
let roomCode = '';
let playerId = '';
let playerName = '';
let isHost = false;
let gameRef = null;
let currentGame = null;

// Updated game structure - 4 rounds with progressive depth
const GAME_STRUCTURE = {
    1: { type: 'guessing', name: 'Guessing Game' },
    2: { type: 'trivia', name: 'Trivia Challenge' },
    3: { type: 'speed', name: 'Speed Categories' }, // NEW ROUND
    4: { type: 'questions', category: 'progressive', name: 'Connection Questions' }
};

// Confetti animation functions
function triggerConfetti(type = 'default') {
    switch(type) {
        case 'round-complete':
            // Burst from center
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            break;
            
        case 'game-complete':
            // Epic finale with multiple bursts
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
            // Small burst for correct answers
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
            // Standard confetti
            confetti();
    }
}

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

// Speed Categories game state
let speedTimer = null;
let speedTimeLeft = 45;
let speedMyAnswers = [];
let speedGameActive = false;

// Overall game scores
let overallScores = { player1: 0, player2: 0 };

// Scoring tracking to prevent duplicates
let lastScoredGuessQuestion = null;
let lastScoredTriviaQuestion = null;
let scoringInProgress = false;

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

// Speed Categories Helper Functions
function getRandomSpeedCategory() {
  const categories = Object.keys(speedCategoriesWithAnswers);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

function validateSpeedAnswer(userAnswer, category) {
  const validAnswers = speedCategoriesWithAnswers[category];
  const cleanAnswer = userAnswer.toLowerCase().trim();
  
  // Exact match first
  if (validAnswers.includes(cleanAnswer)) {
    return true;
  }
  
  // Handle common variations
  const variations = {
    'us': 'united states',
    'uk': 'united kingdom',
    'usa': 'united states',
    'ny': 'new york',
    'ca': 'california',
    'tx': 'texas',
    'fl': 'florida',
    'mcdonald\'s': 'mcdonalds',
    'dunkin\'': 'dunkin',
    'chick-fil-a': 'chick fil a'
  };
  
  if (variations[cleanAnswer] && validAnswers.includes(variations[cleanAnswer])) {
    return true;
  }
  
  return false;
}

function getCategoryMaxScore(category) {
  return speedCategoriesWithAnswers[category].length;
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
    
    // Initialize sound system on user interaction
    soundSystem.init();
    
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
        questionsAskedThisRound: 0,
        overallScores: { player1: 0, player2: 0 }
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
                soundSystem.init(); // Initialize sound
                soundSystem.playJoin(); // Play join sound
                
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
    
    // Initialize scores if they don't exist
    if (!gameData.overallScores) {
        overallScores = { player1: 0, player2: 0 };
        if (isHost) {
            gameRef.child('overallScores').set(overallScores);
        }
    } else {
        overallScores = gameData.overallScores;
    }
    
    // Update score display
    document.getElementById('score-player1').textContent = `(${overallScores.player1 || 0})`;
    document.getElementById('score-player2').textContent = `(${overallScores.player2 || 0})`;
    
    // Sync guessing questions counter
    if (gameData.guessingQuestionsAsked !== undefined) {
        guessingQuestionsAsked = gameData.guessingQuestionsAsked;
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
        // Check game type and handle accordingly
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
        } else if (gameData.currentRound && GAME_STRUCTURE[gameData.currentRound]?.type === 'speed') {
            // Handle speed categories round
            if (gameData.showingRoundIntro && !gameData.speedStarted) {
                showRoundIntro(gameData.roundName);
                setTimeout(() => {
                    if (isHost && gameRef) {
                        const category = getRandomSpeedCategory();
                        gameRef.update({
                            showingRoundIntro: false,
                            speedCategory: category,
                            speedPhase: 'playing',
                            speedStarted: true,
                            speedStartTime: Date.now(),
                            player1Answers: [],
                            player2Answers: []
                        });
                    }
                }, 3000);
            } else {
                handleSpeedCategoriesUpdate(gameData);
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
    
    if (roundNumber > 4) { // Updated to 4 rounds
        soundSystem.playGameComplete();
        endGame();
        return;
    }
    
    // Play new round sound
    soundSystem.playNewRound();
    
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
    } else if (roundInfo.type === 'speed') {
        // Start speed categories round
        startSpeedCategoriesGame(roundNumber);
    } else {
        // Question round with progressive depth
        gameRef.update({
            mode: 'progressive',
            gameStarted: true,
            currentQuestion: 0,
            currentTurn: Math.floor(Math.random() * 2),
            currentRound: roundNumber,
            roundName: `Round ${roundNumber} - ${roundInfo.name}`,
            questionsAskedThisRound: 0,
            showingRoundIntro: true,
            guessingPhase: null,
            guessingQuestionsAsked: 0,
            triviaPhase: null,
            triviaQuestionsAsked: 0,
            speedPhase: null,
            speedStarted: false
        });
    }
}

// Speed Categories Game Functions
function startSpeedCategoriesGame(roundNumber) {
    console.log('Starting speed categories game for round:', roundNumber);
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        speedPhase: 'intro',
        speedStarted: false,
        showingRoundIntro: true,
        player1Answers: [],
        player2Answers: [],
        speedCategory: null,
        speedStartTime: null,
        speedTimerStarted: false,  
        speedEndTime: null         
    });
}


function handleSpeedCategoriesUpdate(gameData) {
    if (!gameData.speedCategory) return;
    
    console.log('Speed categories update:', {
        phase: gameData.speedPhase,
        category: gameData.speedCategory,
        startTime: gameData.speedStartTime
    });
    
    switch(gameData.speedPhase) {
        case 'intro':
            // Handled by showRoundIntro
            break;
            
        case 'playing':
            showSpeedCategoriesScreen(gameData);
            break;
            
        case 'complete':
            showSpeedCategoriesResults(gameData);
            break;
    }
}

function showSpeedCategoriesScreen(gameData) {
    showScreen('speed-categories-screen');
    
    document.getElementById('speed-category').textContent = gameData.speedCategory;
    document.getElementById('speed-input').value = '';
    document.getElementById('speed-answers-list').innerHTML = '';
    document.getElementById('speed-input').disabled = false;
    
    // Clear any existing timer to prevent duplicates
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    // Reset local state
    speedMyAnswers = [];
    speedGameActive = true;

    // Reset score display
document.getElementById('speed-current-score').textContent = '0';
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('speed-input').focus();
    }, 100);
    
    // Only the host manages the timer through Firebase
    if (isHost && !gameData.speedTimerStarted) {
        // Start the centralized timer
        gameRef.update({
            speedTimerStarted: true,
            speedEndTime: Date.now() + 45000
        });
        
        startSpeedTimer(gameData);
    } else if (gameData.speedTimerStarted) {
        // Non-host or rejoining host - sync with existing timer
        startSpeedTimer(gameData);
    }
}

function startSpeedTimer(gameData) {
    if (!gameData.speedEndTime) return;
    
    // Calculate remaining time based on server timestamp
    const updateTimer = () => {
        const now = Date.now();
        const timeLeft = Math.max(0, Math.ceil((gameData.speedEndTime - now) / 1000));
        
        // Update display
        document.getElementById('speed-timer').textContent = timeLeft;
        
        // Play tick sound for last 10 seconds (only once per second)
        if (timeLeft <= 10 && timeLeft > 0) {
            soundSystem.playSpeedTimer();
        }
        
        // End game when time is up
        if (timeLeft <= 0) {
            endSpeedGame();
            return;
        }
    };
    
    // Update immediately
    updateTimer();
    
    // Start interval for updates (clear any existing first)
    if (speedTimer) {
        clearInterval(speedTimer);
    }
    
    speedTimer = setInterval(() => {
        updateTimer();
    }, 1000);
}

function handleSpeedAnswer() {
    if (!speedGameActive) return;
    
    const input = document.getElementById('speed-input');
    const answer = input.value.trim();
    
    if (answer && !speedMyAnswers.some(a => a.toLowerCase() === answer.toLowerCase())) {
        const isValid = validateSpeedAnswer(answer, currentGame.speedCategory);
        
        if (isValid) {
            speedMyAnswers.push(answer);
            
            // Update score display immediately
            document.getElementById('speed-current-score').textContent = speedMyAnswers.length;
            
            // Add to display list
            const listItem = document.createElement('div');
            listItem.className = 'speed-answer-item valid';
            listItem.textContent = answer;
            document.getElementById('speed-answers-list').appendChild(listItem);
            
            // Play success sound
            soundSystem.playClick();
        } else {
            // Show invalid answer briefly
            const listItem = document.createElement('div');
            listItem.className = 'speed-answer-item invalid';
            listItem.textContent = answer + ' (invalid)';
            document.getElementById('speed-answers-list').appendChild(listItem);
            
            // Remove invalid item after 1 second
            setTimeout(() => {
                listItem.remove();
            }, 1000);
        }
        
        // Clear input
        input.value = '';
    }
}

function endSpeedGame() {
    if (!speedGameActive) return;
    
    console.log('Ending speed game for player:', playerId);
    
    speedGameActive = false;
    
    // Clear the timer
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    // Play time's up sound
    soundSystem.playSpeedComplete();
    
    // Disable input
    document.getElementById('speed-input').disabled = true;
    
    // Update timer display to show 0
    document.getElementById('speed-timer').textContent = '0';
    
    // Submit final answers to Firebase
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    console.log('Submitting answers:', speedMyAnswers, 'for player index:', myIndex);
    
    if (myIndex === 0) {
        gameRef.update({
            player1Answers: speedMyAnswers || []
        }).then(() => {
            console.log('Player 1 answers submitted successfully');
            checkSpeedGameComplete();
        });
    } else {
        gameRef.update({
            player2Answers: speedMyAnswers || []
        }).then(() => {
            console.log('Player 2 answers submitted successfully');
            checkSpeedGameComplete();
        });
    }
}

function checkSpeedGameComplete() {
    // Wait a moment for Firebase to update, then check completion
    setTimeout(() => {
        console.log('Checking speed game completion:', {
            player1Answers: currentGame.player1Answers,
            player2Answers: currentGame.player2Answers,
            isHost: isHost
        });
        
        // Check if both players have submitted answers (even if empty arrays)
        if (currentGame.player1Answers !== undefined && 
            currentGame.player2Answers !== undefined && 
            isHost) {
            
            console.log('Both players have submitted, transitioning to results...');
            
            // Calculate scores and move to results
            const player1Score = currentGame.player1Answers.length;
            const player2Score = currentGame.player2Answers.length;
            
            // Update overall scores
            const updatedScores = {
                player1: (overallScores.player1 || 0) + player1Score,
                player2: (overallScores.player2 || 0) + player2Score
            };
            
            gameRef.update({
                speedPhase: 'complete',
                overallScores: updatedScores
            }).then(() => {
                console.log('Successfully moved to results phase');
            }).catch((error) => {
                console.error('Error moving to results:', error);
            });
        }
    }, 1000);
}

function showSpeedCategoriesResults(gameData) {
    showScreen('speed-categories-results');
    
    const playerIds = Object.keys(gameData.players);
    const player1Answers = gameData.player1Answers || [];
    const player2Answers = gameData.player2Answers || [];
    
    // Show category
    document.getElementById('speed-result-category').textContent = gameData.speedCategory;
    
    // Show scores
    document.getElementById('speed-result-player1-name').textContent = gameData.players[playerIds[0]].name;
    document.getElementById('speed-result-player1-score').textContent = player1Answers.length;
    
    document.getElementById('speed-result-player2-name').textContent = gameData.players[playerIds[1]].name;
    document.getElementById('speed-result-player2-score').textContent = player2Answers.length;
    
    // Show winner
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
    
    // Show answers
    document.getElementById('speed-result-player1-answers').textContent = player1Answers.join(', ');
    document.getElementById('speed-result-player2-answers').textContent = player2Answers.join(', ');
    
    // Continue button (only host can click)
    const continueBtn = document.getElementById('continue-from-speed-btn');
    if (isHost) {
        continueBtn.textContent = 'Continue to Final Round';
        continueBtn.disabled = false;
    } else {
        continueBtn.textContent = 'Waiting for host...';
        continueBtn.disabled = true;
    }
}

function startGuessingGame(roundNumber) {
    console.log('Starting guessing game for round:', roundNumber);
    
    // Always use round1 questions since we only have one guessing round
    const questionBank = guessingQuestions.round1;
    
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
    
    // Get 3 fake options and format them to match real answer's style
    const originalFakeOptions = getRandomFakeOptions(question.fakeOptions, 3, realAnswer);
    const formattedFakeOptions = formatFakeOptionsToMatchAnswer(realAnswer, originalFakeOptions);
    
    // Format the real answer to match the same style (for consistent comparison)
    const formattedRealAnswer = formatFakeOptionsToMatchAnswer(realAnswer, [realAnswer])[0];
    
    const allOptions = shuffleArray([...formattedFakeOptions, formattedRealAnswer]);
    
    // Create option buttons
    const optionsContainer = document.getElementById('guess-options');
    optionsContainer.innerHTML = '';
    
    allOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'guess-option';
        button.textContent = option;
        // Use the formatted real answer for comparison so capitalization matches
        button.addEventListener('click', () => handleGuessSelection(option, formattedRealAnswer));
        optionsContainer.appendChild(button);
    });
}

// Function to format fake options to match the real answer's style
function formatFakeOptionsToMatchAnswer(realAnswer, fakeOptions) {
    if (!realAnswer || !fakeOptions || fakeOptions.length === 0) {
        return fakeOptions;
    }
    
    // Analyze the real answer's formatting
    const isAllCaps = realAnswer === realAnswer.toUpperCase() && realAnswer !== realAnswer.toLowerCase();
    const isAllLowercase = realAnswer === realAnswer.toLowerCase() && realAnswer !== realAnswer.toUpperCase();
    const isFirstCapOnly = realAnswer.charAt(0) === realAnswer.charAt(0).toUpperCase() && 
                           realAnswer.slice(1) === realAnswer.slice(1).toLowerCase();
    const isTitleCase = realAnswer.split(' ').every(word => 
        word.charAt(0) === word.charAt(0).toUpperCase() && 
        word.slice(1) === word.slice(1).toLowerCase()
    );
    
    // Check for abbreviations/acronyms (mix of caps and periods)
    const hasAbbreviation = /[A-Z]{2,}/.test(realAnswer) || /\./.test(realAnswer);
    
    // Format fake options to match the real answer's style
    return fakeOptions.map(option => {
        if (isAllCaps) {
            return option.toUpperCase();
        } else if (isAllLowercase) {
            return option.toLowerCase();
        } else if (isTitleCase && realAnswer.includes(' ')) {
            // Title case for multi-word answers
            return option.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        } else if (isFirstCapOnly) {
            // First letter only capitalized
            return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
        } else if (hasAbbreviation) {
            // Keep abbreviations as they are, but match general case
            return option; // Keep original formatting for complex cases
        } else {
            // Default to matching first character case
            if (realAnswer.charAt(0) === realAnswer.charAt(0).toLowerCase()) {
                return option.toLowerCase();
            } else {
                return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
            }
        }
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
    
    // Play sound effect
    if (guess === correctAnswer) {
        soundSystem.playCorrect();
    } else {
        soundSystem.playIncorrect();
    }
    
    gameRef.update({
        playerGuess: guess,
        guessingPhase: 'complete'
    });
}

function showGuessingResult(isCorrect, correctAnswer, playerGuess) {
    showScreen('guessing-result-screen');
    
    // Add confetti for correct guesses
    if (isCorrect) {
        triggerConfetti('correct');
    }

    const resultTitle = document.getElementById('guess-result-title');
    resultTitle.textContent = isCorrect ? '🎉 Correct! 🎉' : '❌ Not quite!';
    resultTitle.style.color = isCorrect ? '#4CAF50' : '#f44336';
    
    // Award point for correct guess - with duplicate prevention
    const currentQuestionId = `${currentGame.currentRound}-${currentGame.guessingQuestionsAsked}`;
    
    if (isCorrect && isHost && !scoringInProgress && lastScoredGuessQuestion !== currentQuestionId) {
        scoringInProgress = true;
        lastScoredGuessQuestion = currentQuestionId;
        
        // Figure out who was guessing
        const playerIds = Object.keys(currentGame.players);
        const guesserIndex = currentGame.hostIsAnswerer ? 1 : 0;
        
        // Create a copy of scores to ensure we're working with current values
        const updatedScores = {
            player1: overallScores.player1 || 0,
            player2: overallScores.player2 || 0
        };
        
        if (guesserIndex === 0) {
            updatedScores.player1 += 1;
        } else {
            updatedScores.player2 += 1;
        }
        
        // Update local copy first
        overallScores = updatedScores;
        
        // Save to Firebase
        gameRef.child('overallScores').set(updatedScores).then(() => {
            scoringInProgress = false;
        }).catch((error) => {
            console.error('Error updating scores:', error);
            scoringInProgress = false;
        });
    }
    
    document.querySelector('.result-question').textContent = currentGame.guessingQuestion.question;
    document.getElementById('actual-answer').textContent = correctAnswer;
    document.getElementById('player-guess').textContent = playerGuess;
    
    // Update continue button text to show progress
    const continueBtn = document.getElementById('continue-from-guess-btn');
    continueBtn.disabled = false;
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

function getProgressiveQuestion(questionNumber) {
    // Questions 1-2: Getting to Know You
    if (questionNumber <= 2) {
        const firstDateQuestions = questions['first-date'];
        const index = Math.floor(Math.random() * firstDateQuestions.length);
        return firstDateQuestions[index];
    }
    // Questions 3-4: Going Deeper
    else if (questionNumber <= 4) {
        const deeperQuestions = questions['getting-closer'];
        const index = Math.floor(Math.random() * deeperQuestions.length);
        return deeperQuestions[index];
    }
    // Questions 5-6: Soul Connection (randomly choose between long-term and spicy)
    else {
        const category = Math.random() > 0.5 ? 'long-term' : 'spicy';
        const soulQuestions = questions[category];
        const index = Math.floor(Math.random() * soulQuestions.length);
        return soulQuestions[index];
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
    
    // Handle progressive questions for round 4 (was round 3)
    let currentQuestion;
    if (gameData.mode === 'progressive') {
        const questionNumber = (gameData.questionsAskedThisRound || 0) + 1;
        currentQuestion = getProgressiveQuestion(questionNumber);
    } else {
        const questionList = questions[gameData.mode];
        currentQuestion = questionList[gameData.currentQuestion];
    }
    
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
    
    // Show question depth indicator for round 4 (was round 3)
    let depthIndicator = '';
    if (gameData.mode === 'progressive') {
        const questionNum = questionsAsked + 1;
        if (questionNum <= 2) depthIndicator = ' (Getting to Know You)';
        else if (questionNum <= 4) depthIndicator = ' (Going Deeper)';
        else depthIndicator = ' (Soul Connection)';
    }
    
    document.getElementById('question-number').textContent = 
        `Round ${gameData.currentRound}/4 • Question ${questionsAsked + 1} of 6${depthIndicator}`;
    document.getElementById('question-text').textContent = currentQuestion;
    
    // Update progress bar to reflect total questions (19 total: 6+6+1+6 questions)
    const totalQuestionsInGame = 19;
    let totalQuestionsCompleted = 0;
    
    // Calculate questions completed based on rounds
    if (gameData.currentRound > 1) {
        if (gameData.currentRound === 2) {
            totalQuestionsCompleted = 6; // Round 1 complete
        } else if (gameData.currentRound === 3) {
            totalQuestionsCompleted = 12; // Rounds 1&2 complete
        } else if (gameData.currentRound === 4) {
            totalQuestionsCompleted = 13; // Rounds 1,2,3 complete (3 was speed with 1 interaction)
        }
    }
    
    // Add current round progress
    if (GAME_STRUCTURE[gameData.currentRound]?.type === 'questions') {
        totalQuestionsCompleted += gameData.questionsAskedThisRound || 0;
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'guessing') {
        totalQuestionsCompleted += gameData.guessingQuestionsAsked || 0;
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'trivia') {
        totalQuestionsCompleted += gameData.triviaQuestionsAsked || 0;
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'speed') {
        totalQuestionsCompleted += gameData.speedStarted ? 1 : 0;
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
    alert(`Amazing connection! You've completed all 4 rounds - sharing 19 meaningful moments together! 💕`);
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
                            currentGame.currentRound === 4 ? guessingQuestions.round3 :
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
function getRandomFakeOptions(fakeOptions, count = 3, realAnswer = null) {
    // Filter out the real answer from fake options to prevent duplicates
    let availableFakes = fakeOptions;
    if (realAnswer) {
        availableFakes = fakeOptions.filter(option => 
            option.toLowerCase().trim() !== realAnswer.toLowerCase().trim()
        );
    }
    
    // If we don't have enough unique fake options after filtering, 
    // use what we have
    const shuffled = [...availableFakes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

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
        scores: triviaRoundScores,
        player1Answer: gameData.player1Answer,
        player2Answer: gameData.player2Answer
    });
    
    switch(gameData.triviaPhase) {
        case 'intro':
            // Handled by showRoundIntro
            break;
            
        case 'questioning':
            showTriviaQuestion(gameData);
            break;
            
        case 'waiting':
            // Check if both players have answered
            if (gameData.player1Answer !== null && 
                gameData.player2Answer !== null && 
                gameData.player1Answer !== undefined && 
                gameData.player2Answer !== undefined) {
                // Both have answered, host calculates scores and moves to results
                if (isHost && !gameData.scoringComplete) {
                    calculateAndSaveTriviaScores(gameData);
                }
            } else {
                // Still waiting for other player
                showTriviaWaiting(gameData);
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
    
    // Check if current player already answered
    const myIndex = playerIds.indexOf(playerId);
    const myAnswer = myIndex === 0 ? gameData.player1Answer : gameData.player2Answer;
    
    if (myAnswer !== null && myAnswer !== undefined) {
        // Player already answered, show disabled state
        gameData.triviaQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'trivia-option disabled';
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            button.disabled = true;
            if (index === myAnswer) {
                button.classList.add('selected');
            }
            optionsContainer.appendChild(button);
        });
        document.getElementById('trivia-waiting').style.display = 'block';
        document.getElementById('trivia-waiting').textContent = 'Waiting for your partner to answer...';
    } else {
        // Player hasn't answered yet
        gameData.triviaQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'trivia-option';
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            button.addEventListener('click', () => handleTriviaAnswer(index));
            optionsContainer.appendChild(button);
        });
        document.getElementById('trivia-waiting').style.display = 'none';
    }
}

function handleTriviaAnswer(answerIndex) {
    // Play click sound for selection
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
    
    // Show waiting message
    document.getElementById('trivia-waiting').style.display = 'block';
    
    // Update Firebase with my answer
    const playerIds = Object.keys(currentGame.players);
    const myIndex = playerIds.indexOf(playerId);
    
    if (myIndex === 0) {
        // Always go to waiting phase first
        gameRef.update({
            player1Answer: answerIndex,
            triviaPhase: 'waiting'
        });
    } else {
        // Always go to waiting phase first
        gameRef.update({
            player2Answer: answerIndex,
            triviaPhase: 'waiting'
        });
    }
}

function calculateAndSaveTriviaScores(gameData) {
    const correctAnswer = gameData.triviaQuestion.correct;
    const player1Correct = gameData.player1Answer === correctAnswer;
    const player2Correct = gameData.player2Answer === correctAnswer;
    
    // Get current scores from Firebase to ensure accuracy
    const currentRoundScores = gameData.triviaRoundScores || { player1: 0, player2: 0 };
    const currentOverallScores = gameData.overallScores || { player1: 0, player2: 0 };
    
    // Calculate new scores (adding only 1 point)
    const newRoundScores = {
        player1: currentRoundScores.player1 + (player1Correct ? 1 : 0),
        player2: currentRoundScores.player2 + (player2Correct ? 1 : 0)
    };
    
    const newOverallScores = {
        player1: currentOverallScores.player1 + (player1Correct ? 1 : 0),
        player2: currentOverallScores.player2 + (player2Correct ? 1 : 0)
    };
    
    // Update Firebase once with scores and phase change
    gameRef.update({
        triviaRoundScores: newRoundScores,
        overallScores: newOverallScores,
        triviaPhase: 'results',
        scoringComplete: true
    });
}

function showTriviaWaiting(gameData) {
    // Just show the current question screen with waiting message
    // Don't call showTriviaQuestion again if already on that screen
    if (!document.getElementById('trivia-question-screen').classList.contains('active')) {
        showTriviaQuestion(gameData);
    }
}

function showTriviaResults(gameData) {
    showScreen('trivia-result-screen');
    
    const playerIds = Object.keys(gameData.players);
    const correctAnswer = gameData.triviaQuestion.correct;
    
    // Check who got it right
    const player1Correct = gameData.player1Answer === correctAnswer;
    const player2Correct = gameData.player2Answer === correctAnswer;
    
    // Add confetti if anyone got it right
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
    
    // Just sync local scores from Firebase
    if (gameData.triviaRoundScores) {
        triviaRoundScores = gameData.triviaRoundScores;
    }
    if (gameData.overallScores) {
        overallScores = gameData.overallScores;
    }

    // Update continue button text to indicate who should click
    const continueBtn = document.getElementById('continue-from-trivia-btn');
    if (isHost) {
        continueBtn.textContent = 'Continue';
        continueBtn.disabled = false;
    } else {
        continueBtn.textContent = 'Waiting for host...';
        continueBtn.disabled = true;
    }
}

function showTriviaRoundComplete(gameData) {
    showScreen('trivia-complete-screen');
    triggerConfetti('round-complete');
    soundSystem.playRoundComplete();
    
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
    
    // Make sure button is visible and only host can click
    const continueBtn = document.getElementById('continue-from-trivia-complete-btn');
    if (continueBtn) {
        continueBtn.style.display = 'block';
        continueBtn.disabled = !isHost;
        if (!isHost) {
            continueBtn.textContent = 'Waiting for host...';
        } else {
            continueBtn.textContent = 'Continue to Next Round';
        }
    }
}

// Add event listeners for trivia buttons
document.getElementById('continue-from-trivia-btn').addEventListener('click', () => {
    // Only let the host control progression to avoid conflicts
    if (!isHost) return;
    
    // Use the Firebase value, not local variable
    const nextQuestionNumber = (currentGame.triviaQuestionsAsked || 0) + 1;
    
    if (nextQuestionNumber >= 6) {
        // Show round complete screen
        gameRef.update({
            triviaPhase: 'complete',
            triviaQuestionsAsked: nextQuestionNumber,
            scoringComplete: false  // Reset for next question
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
            triviaQuestionsAsked: nextQuestionNumber,
            scoringComplete: false  // Reset for next question
        });
    }
});

document.getElementById('continue-from-trivia-complete-btn').addEventListener('click', () => {
    if (!isHost) return; // Only host can continue
    
    console.log('Trivia complete button clicked, starting new round...');
    
    // Reset trivia counters for next time
    triviaQuestionsAsked = 0;
    triviaRoundScores = { player1: 0, player2: 0 };
    
    // Start the next round
    startNewRound();
});

// Event listeners for Speed Categories
document.getElementById('speed-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSpeedAnswer();
    }
});

document.getElementById('continue-from-speed-btn').addEventListener('click', () => {
    if (!isHost) return; // Only host can continue
    
    console.log('Speed categories complete, starting next round...');
    startNewRound();
});

// Allow Enter key to submit guessing answer
document.getElementById('guessing-answer-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.getElementById('submit-answer-btn').style.display !== 'none') {
        document.getElementById('submit-answer-btn').click();
    }
});

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

// Test confetti with Ctrl+C (remove this later if you want)
document.addEventListener('keydown', (e) => {
    if (e.key === 'c' && e.ctrlKey) {
        triggerConfetti('game-complete');
    }
});