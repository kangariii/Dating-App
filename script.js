// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Animal avatars system
const ANIMAL_AVATARS = [
    { emoji: '🐵', name: 'Monkey' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🦊', name: 'Fox' },
    { emoji: '🐻', name: 'Bear' },
    { emoji: '🐼', name: 'Panda' },
    { emoji: '🐨', name: 'Koala' },
    { emoji: '🐯', name: 'Tiger' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐸', name: 'Frog' },
    { emoji: '🐷', name: 'Pig' },
    { emoji: '🐮', name: 'Cow' },
    { emoji: '🐔', name: 'Chicken' },
    { emoji: '🦆', name: 'Duck' },
    { emoji: '🐧', name: 'Penguin' },
    { emoji: '🦉', name: 'Owl' },
    { emoji: '🦅', name: 'Eagle' },
    { emoji: '🐺', name: 'Wolf' },
    { emoji: '🦝', name: 'Raccoon' },
    { emoji: '🦦', name: 'Otter' },
    { emoji: '🦘', name: 'Kangaroo' },
    { emoji: '🐘', name: 'Elephant' },
    { emoji: '🦏', name: 'Rhino' },
    { emoji: '🦒', name: 'Giraffe' },
    { emoji: '🐪', name: 'Camel' },
    { emoji: '🐙', name: 'Octopus' },
    { emoji: '🦈', name: 'Shark' },
    { emoji: '🐬', name: 'Dolphin' },
    { emoji: '🐳', name: 'Whale' },
    { emoji: '🦀', name: 'Crab' }
];

function getRandomAvatar() {
    return ANIMAL_AVATARS[Math.floor(Math.random() * ANIMAL_AVATARS.length)];
}

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
let playerAvatar = null;
let isHost = false;
let gameRef = null;
let currentGame = null;

// Updated game structure - 3 competitive rounds only
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

// This or That game state
let currentThisOrThatQuestion = null;
let thisOrThatRole = null; // 'chooser' or 'guesser'
let thisOrThatQuestionsAsked = 0; // Track how many this-or-that questions have been asked this round
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
let lastScoredThisOrThatQuestion = null;
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

// UPDATED: Enhanced updateScoreboard function to update all scoreboards with avatars
function updateScoreboard() {
    // Update player names and scores in ALL scoreboards
    if (currentGame && currentGame.players) {
        const playerIds = Object.keys(currentGame.players);
        if (playerIds.length >= 1) {
            const p1Name = currentGame.players[playerIds[0]].name;
            const p1Avatar = currentGame.players[playerIds[0]].avatar || { emoji: '🐵', name: 'Player' };
            const p1Score = overallScores.player1 || 0;
            const p1Display = `${p1Avatar.emoji} ${p1Name}`;
            
            // Main game screen
            const gameP1 = document.getElementById('game-player1');
            const gameS1 = document.getElementById('score-player1');
            if (gameP1) gameP1.textContent = p1Display;
            if (gameS1) gameS1.textContent = `(${p1Score})`;
            
            // This or That screens
            const answerP1 = document.getElementById('guessing-answer-player1');
            const answerS1 = document.getElementById('guessing-answer-score1');
            if (answerP1) answerP1.textContent = p1Display;
            if (answerS1) answerS1.textContent = `(${p1Score})`;
            
            const guessP1 = document.getElementById('guessing-guess-player1');
            const guessS1 = document.getElementById('guessing-guess-score1');
            if (guessP1) guessP1.textContent = p1Display;
            if (guessS1) guessS1.textContent = `(${p1Score})`;
            
            const resultP1 = document.getElementById('guessing-result-player1');
            const resultS1 = document.getElementById('guessing-result-score1');
            if (resultP1) resultP1.textContent = p1Display;
            if (resultS1) resultS1.textContent = `(${p1Score})`;
            
            // Category selection screen
            const categoryP1 = document.getElementById('category-player1');
            const categoryS1 = document.getElementById('category-score1');
            if (categoryP1) categoryP1.textContent = p1Display;
            if (categoryS1) categoryS1.textContent = `(${p1Score})`;
        }
        
        if (playerIds.length >= 2) {
            const p2Name = currentGame.players[playerIds[1]].name;
            const p2Avatar = currentGame.players[playerIds[1]].avatar || { emoji: '🐶', name: 'Player' };
            const p2Score = overallScores.player2 || 0;
            const p2Display = `${p2Avatar.emoji} ${p2Name}`;
            
            // Main game screen
            const gameP2 = document.getElementById('game-player2');
            const gameS2 = document.getElementById('score-player2');
            if (gameP2) gameP2.textContent = p2Display;
            if (gameS2) gameS2.textContent = `(${p2Score})`;
            
            // This or That screens
            const answerP2 = document.getElementById('guessing-answer-player2');
            const answerS2 = document.getElementById('guessing-answer-score2');
            if (answerP2) answerP2.textContent = p2Display;
            if (answerS2) answerS2.textContent = `(${p2Score})`;
            
            const guessP2 = document.getElementById('guessing-guess-player2');
            const guessS2 = document.getElementById('guessing-guess-score2');
            if (guessP2) guessP2.textContent = p2Display;
            if (guessS2) guessS2.textContent = `(${p2Score})`;
            
            const resultP2 = document.getElementById('guessing-result-player2');
            const resultS2 = document.getElementById('guessing-result-score2');
            if (resultP2) resultP2.textContent = p2Display;
            if (resultS2) resultS2.textContent = `(${p2Score})`;
            
            // Category selection screen
            const categoryP2 = document.getElementById('category-player2');
            const categoryS2 = document.getElementById('category-score2');
            if (categoryP2) categoryP2.textContent = p2Display;
            if (categoryS2) categoryS2.textContent = `(${p2Score})`;
        }
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
    playerAvatar = getRandomAvatar();
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
            avatar: playerAvatar,
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
                avatar: playerAvatar,
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
            const previousPhase = currentGame?.thisOrThatPhase;
            const previousAnswer = currentGame?.playerChoice;
            
            currentGame = data;
            
            console.log('Firebase update received:', {
                round: data.currentRound,
                phase: data.thisOrThatPhase,
                hasChoice: !!data.playerChoice,
                roundType: GAME_STRUCTURE[data.currentRound]?.type,
                phaseChanged: previousPhase !== data.thisOrThatPhase,
                choiceChanged: previousAnswer !== data.playerChoice,
                gamePhase: data.gamePhase
            });
            
            // Always handle update, don't skip based on previous state
            handleGameUpdate(data);
        }
    });
    
    gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
}

// UPDATED: Enhanced joinRoom function with avatar assignment
function joinRoom() {
    const code = document.getElementById('join-code').value.toUpperCase();
    const name = document.getElementById('joiner-name').value || 'Player 2';
    
    if (code.length !== 4) {
        alert('Please enter a valid 4-character room code');
        return;
    }
    
    // Show waiting feedback immediately
    const joinBtn = document.getElementById('join-game-btn');
    const waitingText = document.getElementById('join-waiting');
    
    joinBtn.disabled = true;
    joinBtn.textContent = 'Joining...';
    waitingText.style.display = 'block';
    
    roomCode = code;
    playerId = generatePlayerId();
    playerName = name;
    playerAvatar = getRandomAvatar();
    isHost = false;
    
    gameRef = database.ref(`games/${roomCode}`);
    
    gameRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
            gameRef.child(`players/${playerId}`).set({
                name: name,
                avatar: playerAvatar,
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
                        const previousPhase = currentGame?.thisOrThatPhase;
                        const previousAnswer = currentGame?.playerChoice;
                        
                        currentGame = data;
                        
                        console.log('Firebase update received (joiner):', {
                            round: data.currentRound,
                            phase: data.thisOrThatPhase,
                            hasChoice: !!data.playerChoice,
                            roundType: GAME_STRUCTURE[data.currentRound]?.type,
                            phaseChanged: previousPhase !== data.thisOrThatPhase,
                            choiceChanged: previousAnswer !== data.playerChoice,
                            gamePhase: data.gamePhase
                        });
                        
                        // Always handle update, don't skip based on previous state
                        handleGameUpdate(data);
                    }
                });
                
                gameRef.child(`players/${playerId}/connected`).onDisconnect().set(false);
            })
            .catch((error) => {
                console.error('Error joining room:', error);
                // Reset UI on error
                joinBtn.disabled = false;
                joinBtn.textContent = 'Join Game';
                waitingText.style.display = 'none';
                alert('Error joining room: ' + error.message);
            });
        } else {
            // Reset UI on room not found
            joinBtn.disabled = false;
            joinBtn.textContent = 'Join Game';
            waitingText.style.display = 'none';
            alert('Room not found. Please check the code and try again.');
        }
    }).catch((error) => {
        console.error('Error checking room:', error);
        // Reset UI on error
        joinBtn.disabled = false;
        joinBtn.textContent = 'Join Game';
        waitingText.style.display = 'none';
        alert('Error: ' + error.message);
    });
}

// NEW: Winner determination and question flow functions
function determineThisOrThatWinner() {
    console.log('Determining this or that game winner...');
    
    // Calculate scores for the this-or-that round
    const playerIds = Object.keys(currentGame.players);
    let player1Score = 0;
    let player2Score = 0;
    
    // We need to track scores from the this-or-that game somehow
    // For now, let's use the overall scores difference
    if (overallScores.player1 > overallScores.player2) {
        startQuestionPhase(playerIds[0], 'this-or-that');
    } else if (overallScores.player2 > overallScores.player1) {
        startQuestionPhase(playerIds[1], 'this-or-that');
    } else {
        // Tie - show spin wheel
        showSpinWheel('this-or-that');
    }
}

function determineTriviaWinner() {
    console.log('Determining trivia winner...');
    
    const playerIds = Object.keys(currentGame.players);
    const scores = currentGame.triviaRoundScores || { player1: 0, player2: 0 };
    
    if (scores.player1 > scores.player2) {
        startQuestionPhase(playerIds[0], 'trivia');
    } else if (scores.player2 > scores.player1) {
        startQuestionPhase(playerIds[1], 'trivia');
    } else {
        // Tie - show spin wheel
        showSpinWheel('trivia');
    }
}

function determineSpeedWinner() {
    console.log('Determining speed categories winner...');
    
    const playerIds = Object.keys(currentGame.players);
    const player1Answers = currentGame.player1Answers || [];
    const player2Answers = currentGame.player2Answers || [];
    
    if (player1Answers.length > player2Answers.length) {
        startQuestionPhase(playerIds[0], 'speed');
    } else if (player2Answers.length > player1Answers.length) {
        startQuestionPhase(playerIds[1], 'speed');
    } else {
        // Tie - show spin wheel
        showSpinWheel('speed');
    }
}

function showSpinWheel(gameType) {
    console.log('Showing spin wheel for tie in:', gameType);
    
    if (isHost) {
        gameRef.update({
            gamePhase: 'spin-wheel',
            spinWheelType: gameType,
            spinResult: null
        });
    }
}

function startQuestionPhase(winnerId, gameType) {
    console.log('Starting question phase, winner:', winnerId, 'game type:', gameType);
    
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

// UPDATED: Fixed game logic to properly handle completion signals
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
    
    // Update scoreboard
    updateScoreboard();
    
    // Sync this-or-that questions counter
    if (gameData.thisOrThatQuestionsAsked !== undefined) {
        thisOrThatQuestionsAsked = gameData.thisOrThatQuestionsAsked;
    }
    
    // FIXED: Handle question completion signals
    if (gameData.questionAnswerComplete && isHost && !gameData.questionCompletionProcessed) {
        handleQuestionCompletionSignal(gameData);
        return; // Exit early to prevent double processing
    }
    
    const playerCount = Object.keys(gameData.players).length;
    
    if (playerCount === 2 && !gameData.gameStarted) {
        // Check if both players are ready
        const allReady = Object.values(gameData.players).every(player => player.ready);
        if (allReady && isHost) {
            startNewRound(1);
        }
    } else if (gameData.gameStarted) {
        // Handle different game phases
        if (gameData.gamePhase === 'spin-wheel') {
            handleSpinWheelPhase(gameData);
        } else if (gameData.gamePhase === 'category-selection') {
            handleCategorySelectionPhase(gameData);
        } else if (gameData.gamePhase === 'question-answering') {
            handleQuestionAnsweringPhase(gameData);
        } else {
            // Regular competitive game phases
            if (gameData.currentRound && GAME_STRUCTURE[gameData.currentRound]?.type === 'this-or-that') {
                // Handle round intro for this-or-that games
                if (gameData.showingRoundIntro && gameData.thisOrThatQuestionsAsked === 0) {
                    showRoundIntro(gameData.roundName);
                    setTimeout(() => {
                        if (isHost && gameRef) {
                            gameRef.update({
                                showingRoundIntro: false,
                                thisOrThatPhase: 'choosing'
                            });
                        }
                    }, 3000);
                } else {
                    // After intro or between questions, handle the this-or-that game
                    handleThisOrThatGameUpdate(gameData);
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
                // Handle question rounds (this shouldn't happen in new flow)
                showScreen('game-screen');
                updateGameScreen(gameData);
            }
        }
    }
}

// FIXED: Proper handling of question completion signals
function handleQuestionCompletionSignal(gameData) {
    console.log('Processing question completion signal from non-host');
    
    // Move to next round or end game
    const nextRound = (currentGame.currentRound || 0) + 1;
    
    if (nextRound > 3) {
        // Game complete
        endGame();
    } else {
        // Start next competitive round and mark signal as processed
        gameRef.update({
            questionAnswerComplete: false,
            questionCompletionProcessed: true,
            completedBy: null
        });
        startNewRound(nextRound);
    }
}

// NEW: Handle different question flow phases
function handleSpinWheelPhase(gameData) {
    // TODO: Show spin wheel screen
    console.log('Spin wheel phase - not implemented yet');
    
    // For now, just randomly pick someone
    if (isHost && !gameData.spinResult) {
        const playerIds = Object.keys(gameData.players);
        const randomWinner = playerIds[Math.floor(Math.random() * playerIds.length)];
        
        gameRef.update({
            spinResult: randomWinner,
            gamePhase: 'category-selection',
            questionWinner: randomWinner
        });
    }
}

// UPDATED: Implement category selection phase
function handleCategorySelectionPhase(gameData) {
    console.log('Category selection phase');
    
    // Show category selection for winner
    const isWinner = gameData.questionWinner === playerId;
    
    if (isWinner) {
        // Show category selection screen
        showCategorySelection(gameData.currentRound);
    } else {
        // Show waiting screen
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Waiting for your partner to choose a question category...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
    }
}

function handleQuestionAnsweringPhase(gameData) {
    // Show the winner reading the question to their partner
    const isWinner = gameData.questionWinner === playerId;
    const isLoser = gameData.questionWinner !== playerId;
    
    if (isWinner && gameData.questionToAnswer && !gameData.questionRead) {
        // Winner sees question to read out loud
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Read this question out loud to your partner!';
        document.getElementById('question-text').textContent = gameData.questionToAnswer;
        document.getElementById('question-content').style.display = 'block';
        document.getElementById('waiting-content').style.display = 'none';
        
        // Change button to "Question Read - Continue"
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = 'Question Read - Continue';
        nextBtn.disabled = false;
        nextBtn.onclick = () => markQuestionAsRead();
        
        // Hide skip button during question reading
        document.getElementById('skip-btn').style.display = 'none';
        
    } else if (isLoser && !gameData.questionRead) {
        // Loser waits for question to be read
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Listen carefully to the question...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
        
    } else if (isLoser && gameData.questionRead) {
        // Loser now sees the question and can answer
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Your turn to answer and discuss!';
        document.getElementById('question-text').textContent = gameData.questionToAnswer;
        document.getElementById('question-content').style.display = 'block';
        document.getElementById('waiting-content').style.display = 'none';
        
        // Change button to "Discussion Complete"
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = 'Discussion Complete';
        nextBtn.disabled = false;
        nextBtn.onclick = () => completeQuestionAnswer();
        
        // Hide skip button during answer discussion
        document.getElementById('skip-btn').style.display = 'none';
        
    } else if (isWinner && gameData.questionRead) {
        // Winner waits for partner to finish discussing
        showScreen('game-screen');
        document.getElementById('turn-indicator').textContent = 'Waiting for your partner to finish their answer...';
        document.getElementById('question-content').style.display = 'none';
        document.getElementById('waiting-content').style.display = 'block';
    }
}

function markQuestionAsRead() {
    console.log('Marking question as read');
    
    gameRef.update({
        questionRead: true
    });
}

// UPDATED: Implement category selection screen
function showCategorySelection(roundNumber) {
    console.log('Showing category selection for round:', roundNumber);
    
    showScreen('category-selection-screen');
    
    // Get categories for this round
    const categories = QUESTION_CATEGORIES[roundNumber];
    const optionsContainer = document.getElementById('category-options');
    optionsContainer.innerHTML = '';
    
    // Create buttons for each category
    categories.forEach((categoryKey, index) => {
        const button = document.createElement('button');
        button.className = 'guess-option';
        button.textContent = CATEGORY_DISPLAY_NAMES[categoryKey];
        button.addEventListener('click', () => selectCategory(categoryKey));
        optionsContainer.appendChild(button);
    });
}

function selectCategory(category) {
    console.log('Selected category:', category);
    
    // Play click sound
    soundSystem.playClick();
    
    // Disable all category buttons
    const buttons = document.querySelectorAll('#category-options .guess-option');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === CATEGORY_DISPLAY_NAMES[category]) {
            btn.classList.add('selected');
        }
    });
    
    // Get random question from category
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

function showQuestionToAnswer(question) {
    // This is now handled by handleQuestionAnsweringPhase
    console.log('Question to answer flow handled by handleQuestionAnsweringPhase:', question);
}

// FIXED: Simplified completeQuestionAnswer to always work
function completeQuestionAnswer() {
    console.log('Question answer completed by:', playerId, 'isHost:', isHost);
    
    // Always allow anyone to signal completion
    // Non-hosts signal to host, hosts handle directly
    if (!isHost) {
        console.log('Non-host signaling completion to host');
        gameRef.update({
            questionAnswerComplete: true,
            completedBy: playerId
        });
        return;
    }
    
    // Host handles the actual game progression
    console.log('Host processing completion');
    const nextRound = (currentGame.currentRound || 0) + 1;
    
    if (nextRound > 3) {
        // Game complete
        endGame();
    } else {
        // Start next competitive round
        startNewRound(nextRound);
    }
}

function startNewRound(roundNumber = null) {
    if (!roundNumber) {
        roundNumber = (currentGame.currentRound || 0) + 1;
    }
    
    if (roundNumber > 3) { // Updated to 3 rounds
        soundSystem.playGameComplete();
        endGame();
        return;
    }
    
    // Play new round sound
    soundSystem.playNewRound();
    
    const roundInfo = GAME_STRUCTURE[roundNumber];
    
    if (roundInfo.type === 'this-or-that') {
        // Reset this-or-that questions counter for new round
        thisOrThatQuestionsAsked = 0;
        startThisOrThatGame(roundNumber);
    } else if (roundInfo.type === 'trivia') {
        // Reset trivia counters for new round
        triviaQuestionsAsked = 0;
        triviaRoundScores = { player1: 0, player2: 0 };
        startTriviaGame(roundNumber);
    } else if (roundInfo.type === 'speed') {
        // Start speed categories round
        startSpeedCategoriesGame(roundNumber);
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
        speedEndTime: null,
        player1Done: false,
        player2Done: false,
        gamePhase: null // Reset to competitive phase
    });
}

function handleSpeedCategoriesUpdate(gameData) {
    if (!gameData.speedCategory) return;
    
    console.log('Speed categories update:', {
        phase: gameData.speedPhase,
        category: gameData.speedCategory,
        player1Done: gameData.player1Done,
        player2Done: gameData.player2Done,
        player1Answers: gameData.player1Answers ? gameData.player1Answers.length : 'undefined',
        player2Answers: gameData.player2Answers ? gameData.player2Answers.length : 'undefined'
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
    
    // Check if both players are done and transition to winner determination (host only)
    if (gameData.speedPhase === 'playing' && 
        gameData.player1Done && 
        gameData.player2Done && 
        isHost) {
        
        console.log('Both players done, transitioning to results...');
        
        // Calculate scores
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
    
    // Clear any existing timer to prevent duplicates
    if (speedTimer) {
        clearInterval(speedTimer);
        speedTimer = null;
    }
    
    document.getElementById('speed-category').textContent = gameData.speedCategory;
    document.getElementById('speed-timer').textContent = '45';
    document.getElementById('speed-input').value = '';
    document.getElementById('speed-answers-list').innerHTML = '';
    document.getElementById('speed-input').disabled = false;
    document.getElementById('speed-current-score').textContent = '0'; // Reset score display
    
    // Reset local state
    speedMyAnswers = [];
    speedGameActive = true;
    speedTimeLeft = 45;
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('speed-input').focus();
    }, 100);
    
    // Only host manages the centralized timer through Firebase
    if (isHost && !gameData.speedTimerStarted) {
        const endTime = Date.now() + 45000; // 45 seconds from now
        gameRef.update({
            speedTimerStarted: true,
            speedEndTime: endTime
        });
    }
    
    // Start synchronized timer display for all players
    if (gameData.speedTimerStarted && gameData.speedEndTime) {
        startSpeedTimer(gameData.speedEndTime);
    }
}

function startSpeedTimer(endTime) {
    // Clear any existing timer first
    if (speedTimer) {
        clearInterval(speedTimer);
    }
    
    speedTimer = setInterval(() => {
        const timeLeft = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        document.getElementById('speed-timer').textContent = timeLeft;
        
        // Play tick sound for last 10 seconds
        if (timeLeft <= 10 && timeLeft > 0) {
            soundSystem.playSpeedTimer();
        }
        
        // Time's up - end the game
        if (timeLeft <= 0) {
            clearInterval(speedTimer);
            speedTimer = null;
            endSpeedGame();
        }
    }, 100); // Update every 100ms for smooth countdown
    
    console.log('Started synchronized timer, ending at:', new Date(endTime));
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
    console.log('endSpeedGame called, gameActive:', speedGameActive);
    
    if (!speedGameActive) return;
    
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
    document.getElementById('speed-timer').textContent = '0';
    
    console.log('Submitting final answers:', speedMyAnswers);
    
    // Submit answers immediately without waiting
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
    
    gameRef.update(updateData).then(() => {
        console.log('Answers submitted successfully');
    }).catch((error) => {
        console.error('Error submitting answers:', error);
    });
}

function showSpeedCategoriesResults(gameData) {
    showScreen('speed-categories-results');
    
    const playerIds = Object.keys(gameData.players);
    const player1Answers = gameData.player1Answers || [];
    const player2Answers = gameData.player2Answers || [];
    
    // Show category
    document.getElementById('speed-result-category').textContent = gameData.speedCategory;
    
    // Show scores with avatars
    const player1Name = gameData.players[playerIds[0]].name;
    const player1Avatar = gameData.players[playerIds[0]].avatar || { emoji: '🐵', name: 'Player' };
    document.getElementById('speed-result-player1-name').textContent = `${player1Avatar.emoji} ${player1Name}`;
    document.getElementById('speed-result-player1-score').textContent = player1Answers.length;
    
    const player2Name = gameData.players[playerIds[1]].name;
    const player2Avatar = gameData.players[playerIds[1]].avatar || { emoji: '🐶', name: 'Player' };
    document.getElementById('speed-result-player2-name').textContent = `${player2Avatar.emoji} ${player2Name}`;
    document.getElementById('speed-result-player2-score').textContent = player2Answers.length;
    
    // Show winner
    let winnerText = '';
    if (player1Answers.length > player2Answers.length) {
        winnerText = `${player1Avatar.emoji} ${player1Name} wins!`;
        triggerConfetti('correct');
    } else if (player2Answers.length > player1Answers.length) {
        winnerText = `${player2Avatar.emoji} ${player2Name} wins!`;
        triggerConfetti('correct');
    } else {
        winnerText = "It's a tie!";
    }
    document.getElementById('speed-winner').textContent = winnerText;
    
    // Show answers
    document.getElementById('speed-result-player1-answers').textContent = player1Answers.join(', ');
    document.getElementById('speed-result-player2-answers').textContent = player2Answers.join(', ');
    
    // Update continue button names with avatars
    document.getElementById('speed-result-player1-name-2').textContent = `${player1Avatar.emoji} ${player1Name} Answers:`;
    document.getElementById('speed-result-player2-name-2').textContent = `${player2Avatar.emoji} ${player2Name} Answers:`;
    
    // Continue button leads to winner determination
    const continueBtn = document.getElementById('continue-from-speed-btn');
    if (isHost) {
        continueBtn.textContent = 'Continue';
        continueBtn.disabled = false;
    } else {
        continueBtn.textContent = 'Waiting for host...';
        continueBtn.disabled = true;
    }
}

// FIXED: Simplified This or That game logic
function startThisOrThatGame(roundNumber) {
    console.log('Starting this or that game for round:', roundNumber);
    
    // Get a random question from the this-or-that database
    const thisOrThatQuestion = getRandomThisOrThatQuestion(roundNumber);
    
    // If starting a new this-or-that round, reset counter
    if (!currentGame.thisOrThatQuestionsAsked || currentGame.thisOrThatQuestionsAsked === 0) {
        thisOrThatQuestionsAsked = 0;
    } else {
        thisOrThatQuestionsAsked = currentGame.thisOrThatQuestionsAsked;
    }
    
    // FIXED: Simplified turn alternation - just alternate every question
    const questionNumber = thisOrThatQuestionsAsked + 1;
    const hostIsChooser = (questionNumber % 2 === 1); // Host chooses on odd questions (1, 3, 5)
    
    console.log('This or that game setup:', {
        questionNumber,
        hostIsChooser,
        thisOrThatQuestionsAsked,
        showIntro: thisOrThatQuestionsAsked === 0
    });
    
    gameRef.update({
        gameStarted: true,
        currentRound: roundNumber,
        roundName: `Round ${roundNumber} - ${GAME_STRUCTURE[roundNumber].name}`,
        thisOrThatQuestion: thisOrThatQuestion,
        hostIsChooser: hostIsChooser,
        thisOrThatPhase: thisOrThatQuestionsAsked === 0 ? 'intro' : 'choosing', // Go directly to choosing for questions 2-6
        playerChoice: null,
        playerGuess: null,
        showingRoundIntro: thisOrThatQuestionsAsked === 0, // Only show intro for first question
        thisOrThatQuestionsAsked: thisOrThatQuestionsAsked,
        gamePhase: null // Reset to competitive phase
    });
}

function handleThisOrThatGameUpdate(gameData) {
    if (!gameData.thisOrThatQuestion || !playerId) {
        console.log('Missing data:', { hasQuestion: !!gameData.thisOrThatQuestion, hasPlayerId: !!playerId });
        return;
    }
    
    // Reset processing flag when we get a new state
    processingContinue = false;
    
    // Sync the questions asked counter
    thisOrThatQuestionsAsked = gameData.thisOrThatQuestionsAsked || 0;
    
    // Get all player IDs to determine order
    const playerIds = Object.keys(gameData.players);
    const myPlayerIndex = playerIds.indexOf(playerId);
    
    if (myPlayerIndex === -1) {
        console.error('Player not found in game!', { playerId, playerIds });
        return;
    }
    
    // FIXED: Simplified role determination - host alternates being chooser
    const hostIndex = playerIds.indexOf(gameData.host);
    const isChooser = (gameData.hostIsChooser && myPlayerIndex === hostIndex) || 
                     (!gameData.hostIsChooser && myPlayerIndex !== hostIndex);
    thisOrThatRole = isChooser ? 'chooser' : 'guesser';
    
    console.log('This or That update:', { 
        phase: gameData.thisOrThatPhase, 
        role: thisOrThatRole, 
        hasChoice: !!gameData.playerChoice,
        hasGuess: !!gameData.playerGuess,
        playerId: playerId,
        playerIndex: myPlayerIndex,
        hostIndex: hostIndex,
        hostIsChooser: gameData.hostIsChooser,
        questionsAsked: thisOrThatQuestionsAsked
    });
    
    switch(gameData.thisOrThatPhase) {
        case 'intro':
            // This is handled by showRoundIntro, just wait
            break;
            
        case 'choosing':
            if (thisOrThatRole === 'chooser') {
                showChoiceScreen(gameData.thisOrThatQuestion);
            } else {
                showWaitingForChoice();
            }
            break;
            
        case 'guessing':
            if (gameData.playerChoice !== null && gameData.playerChoice !== undefined) {
                // Add a small delay to ensure UI is ready
                setTimeout(() => {
                    if (thisOrThatRole === 'guesser') {
                        console.log('Attempting to show guess screen...');
                        showGuessScreen(gameData.thisOrThatQuestion);
                    } else {
                        // Chooser waits while guesser is choosing
                        showScreen('guessing-answer-screen');
                        document.getElementById('submit-answer-btn').style.display = 'none';
                        document.getElementById('answer-waiting').style.display = 'block';
                        document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
                    }
                }, 100);
            }
            break;
            
        case 'complete':
            if (gameData.playerGuess !== null && gameData.playerChoice !== null) {
                showThisOrThatResult(gameData.playerGuess === gameData.playerChoice, gameData.playerChoice, gameData.playerGuess, gameData.thisOrThatQuestion);
            }
            break;
    }
}

function showChoiceScreen(question) {
    console.log('Showing choice screen for question:', question.question);
    showScreen('guessing-answer-screen');
    
    // Show question number
    const questionNum = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-answer-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Pick your preference:`;
    
    document.getElementById('guessing-question').textContent = question.question;
    document.getElementById('answer-waiting').style.display = 'none';
    
    // Replace the input with two choice buttons
    const inputGroup = document.querySelector('.input-group');
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
    
    // Hide the submit button since we're using choice buttons
    document.getElementById('submit-answer-btn').style.display = 'none';
}

function handleThisOrThatChoice(choiceIndex) {
    console.log('Player chose option:', choiceIndex);
    
    // Play click sound
    soundSystem.playClick();
    
    // Disable all choice buttons
    const buttons = document.querySelectorAll('.guess-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === choiceIndex) {
            btn.classList.add('selected');
        }
    });
    
    // Update Firebase with the choice and change phase
    const updates = {
        playerChoice: choiceIndex,
        thisOrThatPhase: 'guessing',
        lastUpdate: Date.now() // Add timestamp to force update
    };
    
    gameRef.update(updates).then(() => {
        console.log('Choice submitted successfully');
        // Show waiting message
        document.getElementById('answer-waiting').style.display = 'block';
        document.getElementById('answer-waiting').textContent = 'Waiting for your partner to guess...';
    }).catch((error) => {
        console.error('Error submitting choice:', error);
        alert('Error submitting choice. Please try again.');
        // Reset UI on error
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('selected');
        });
    });
}

function showWaitingForChoice() {
    showScreen('guessing-guess-screen');
    const question = currentGame?.thisOrThatQuestion?.question || 'Waiting for your partner to choose...';
    const questionNum = (currentGame?.thisOrThatQuestionsAsked || 0) + 1;
    
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - Waiting...`;
    document.getElementById('guess-question').textContent = question;
    document.getElementById('guess-options').innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center;">Waiting for your partner to choose...</p>';
    document.getElementById('guess-waiting').style.display = 'none'; // Hide the other waiting text
}

function showGuessScreen(question) {
    console.log('Showing guess screen for this or that question');
    showScreen('guessing-guess-screen');
    
    // Show question number
    const questionNum = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    document.querySelector('#guessing-guess-screen .round-title').textContent = 
        `Question ${questionNum} of 6 - What did they choose?`;
    
    document.getElementById('guess-question').textContent = question.question;
    document.getElementById('guess-waiting').style.display = 'none';
    
    // Create option buttons for the two choices
    const optionsContainer = document.getElementById('guess-options');
    optionsContainer.innerHTML = '';
    
    // Create buttons for both options
    const optionA = document.createElement('button');
    optionA.className = 'guess-option';
    optionA.textContent = question.optionA;
    optionA.addEventListener('click', () => handleThisOrThatGuess(0, question));
    optionsContainer.appendChild(optionA);
    
    const optionB = document.createElement('button');
    optionB.className = 'guess-option';
    optionB.textContent = question.optionB;
    optionB.addEventListener('click', () => handleThisOrThatGuess(1, question));
    optionsContainer.appendChild(optionB);
}

function handleThisOrThatGuess(guessIndex, question) {
    // Play sound effect
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

function showThisOrThatResult(isCorrect, correctChoice, playerGuess, question) {
    showScreen('guessing-result-screen');
    
    // Add confetti for correct guesses
    if (isCorrect) {
        triggerConfetti('correct');
        soundSystem.playCorrect();
    } else {
        soundSystem.playIncorrect();
    }

    const resultTitle = document.getElementById('guess-result-title');
    resultTitle.textContent = isCorrect ? '🎉 Correct! 🎉' : '❌ Not quite!';
    resultTitle.style.color = isCorrect ? '#4CAF50' : '#f44336';
    
    // Award point for correct guess - with duplicate prevention
    const currentQuestionId = `${currentGame.currentRound}-${currentGame.thisOrThatQuestionsAsked}`;
    
    if (isCorrect && isHost && !scoringInProgress && lastScoredThisOrThatQuestion !== currentQuestionId) {
        scoringInProgress = true;
        lastScoredThisOrThatQuestion = currentQuestionId;
        
        // Figure out who was guessing
        const playerIds = Object.keys(currentGame.players);
        const guesserIndex = currentGame.hostIsChooser ? 1 : 0;
        
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
    
    document.querySelector('.result-question').textContent = question.question;
    document.getElementById('actual-answer').textContent = correctChoice === 0 ? question.optionA : question.optionB;
    document.getElementById('player-guess').textContent = playerGuess === 0 ? question.optionA : question.optionB;
    
    // Update continue button text to show progress
    const continueBtn = document.getElementById('continue-from-guess-btn');
    continueBtn.disabled = false;
    const questionsLeft = 6 - (currentGame.thisOrThatQuestionsAsked + 1);
    if (questionsLeft > 0) {
        continueBtn.textContent = `Continue (${questionsLeft} questions left)`;
    } else {
        continueBtn.textContent = 'Continue';
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
        `Round ${gameData.currentRound}/3 • Question ${questionsAsked + 1} of 6${depthIndicator}`;
    document.getElementById('question-text').textContent = currentQuestion;
    
    // Update progress bar to reflect new structure (3 competitive rounds + 3 question sessions = 6 total segments)
    // Each competitive round is followed by a question, so we have segments: G1, Q1, T2, Q2, S3, Q3
    const totalSegments = 6;
    let segmentsCompleted = 0;
    
    // Calculate completed segments
    if (gameData.currentRound > 1) {
        segmentsCompleted = (gameData.currentRound - 1) * 2; // Each previous round = competitive + question
    }
    
    // Add current round progress
    if (GAME_STRUCTURE[gameData.currentRound]?.type === 'this-or-that') {
        segmentsCompleted += Math.min(1, (gameData.thisOrThatQuestionsAsked || 0) / 6);
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'trivia') {
        segmentsCompleted += Math.min(1, (gameData.triviaQuestionsAsked || 0) / 6);
    } else if (GAME_STRUCTURE[gameData.currentRound]?.type === 'speed') {
        segmentsCompleted += gameData.speedStarted ? 1 : 0;
    }
    
    // Add question phase progress if in question phase
    if (gameData.gamePhase === 'question-answering') {
        segmentsCompleted += 1; // Question phase complete
    }
    
    const progress = (segmentsCompleted / totalSegments) * 100;
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
    triggerConfetti('game-complete');
    alert(`Amazing connection! You've completed all 3 rounds with deep questions between each! 💕`);
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
    playerAvatar = null;
    isHost = false;
    gameRef = null;
    currentGame = null;
    
    showScreen('start-screen');
}

// UPDATED: Modified to handle winner determination instead of direct round progression
document.getElementById('continue-from-guess-btn').addEventListener('click', () => {
    console.log('Continue button clicked', { isHost, thisOrThatQuestionsAsked, processingContinue });
    
    // Prevent multiple simultaneous continues
    if (processingContinue) return;
    
    // Disable button to prevent double clicks
    const continueBtn = document.getElementById('continue-from-guess-btn');
    if (continueBtn.disabled) return;
    
    continueBtn.disabled = true;
    processingContinue = true;
    continueBtn.textContent = 'Loading next question...';
    
    const nextQuestionNumber = (currentGame.thisOrThatQuestionsAsked || 0) + 1;
    
    // Check if we've completed 6 questions
    if (nextQuestionNumber >= 6) {
        // This or That round complete - determine winner and start question phase
        thisOrThatQuestionsAsked = 0;
        processingContinue = false;
        
        if (isHost) {
            determineThisOrThatWinner();
        }
    } else {
        // Continue with next this-or-that question (existing logic)
        const newQuestion = getRandomThisOrThatQuestion(currentGame.currentRound);
        
        // FIXED: Simplified alternation logic
        const questionNumber = nextQuestionNumber + 1;
        const hostIsChooser = (questionNumber % 2 === 1); // Simple alternation
        
        gameRef.update({
            thisOrThatQuestion: newQuestion,
            hostIsChooser: hostIsChooser,
            thisOrThatPhase: 'choosing',
            playerChoice: null,
            playerGuess: null,
            thisOrThatQuestionsAsked: nextQuestionNumber,
            showingRoundIntro: false,
            lastUpdate: Date.now()
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
        triviaRoundScores: triviaRoundScores || { player1: 0, player2: 0 },
        gamePhase: null // Reset to competitive phase
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
    
    // Update scores with avatars
    const playerIds = Object.keys(gameData.players);
    const player1Name = gameData.players[playerIds[0]].name;
    const player1Avatar = gameData.players[playerIds[0]].avatar || { emoji: '🐵', name: 'Player' };
    const player2Name = gameData.players[playerIds[1]].name;
    const player2Avatar = gameData.players[playerIds[1]].avatar || { emoji: '🐶', name: 'Player' };
    
    document.getElementById('player1-score').textContent = 
        `${player1Avatar.emoji} ${player1Name}: ${triviaRoundScores.player1}`;
    document.getElementById('player2-score').textContent = 
        `${player2Avatar.emoji} ${player2Name}: ${triviaRoundScores.player2}`;
    
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
    const player1Name = gameData.players[playerIds[0]].name;
    const player1Avatar = gameData.players[playerIds[0]].avatar || { emoji: '🐵', name: 'Player' };
    const player2Name = gameData.players[playerIds[1]].name;
    const player2Avatar = gameData.players[playerIds[1]].avatar || { emoji: '🐶', name: 'Player' };
    
    if (player1Correct && player2Correct) {
        title = '🎉 Both Correct! 🎉';
    } else if (player1Correct || player2Correct) {
        const winner = player1Correct ? `${player1Avatar.emoji} ${player1Name}` : `${player2Avatar.emoji} ${player2Name}`;
        title = `🎉 ${winner} Got It! 🎉`;
    } else {
        title = '❌ Nobody Got It! ❌';
    }
    document.getElementById('trivia-result-title').textContent = title;
    
    // Show question and correct answer
    document.getElementById('trivia-result-question').textContent = gameData.triviaQuestion.question;
    document.getElementById('correct-answer').textContent = gameData.triviaQuestion.options[correctAnswer];
    
    // Show player answers with avatars
    document.getElementById('player1-name-result').textContent = `${player1Avatar.emoji} ${player1Name}`;
    document.getElementById('player1-answer').textContent = 
        gameData.player1Answer !== null ? gameData.triviaQuestion.options[gameData.player1Answer] : 'No answer';
    document.getElementById('player1-answer').style.color = player1Correct ? '#4CAF50' : '#f44336';
    
    document.getElementById('player2-name-result').textContent = `${player2Avatar.emoji} ${player2Name}`;
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
    
    // Show final scores with avatars
    const player1Name = gameData.players[playerIds[0]].name;
    const player1Avatar = gameData.players[playerIds[0]].avatar || { emoji: '🐵', name: 'Player' };
    const player2Name = gameData.players[playerIds[1]].name;
    const player2Avatar = gameData.players[playerIds[1]].avatar || { emoji: '🐶', name: 'Player' };
    
    document.getElementById('player1-final').textContent = `${player1Avatar.emoji} ${player1Name}`;
    document.getElementById('player1-final-score').textContent = scores.player1;
    
    document.getElementById('player2-final').textContent = `${player2Avatar.emoji} ${player2Name}`;
    document.getElementById('player2-final-score').textContent = scores.player2;
    
    // Determine winner
    let winnerText = '';
    if (scores.player1 > scores.player2) {
        winnerText = `${player1Avatar.emoji} ${player1Name} wins the trivia round!`;
    } else if (scores.player2 > scores.player1) {
        winnerText = `${player2Avatar.emoji} ${player2Name} wins the trivia round!`;
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
            continueBtn.textContent = 'Continue';
        }
    }
}

// UPDATED: Modified trivia event listeners to handle winner determination
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
    
    console.log('Trivia complete button clicked, determining winner...');
    
    // Reset trivia counters for next time
    triviaQuestionsAsked = 0;
    
    // Determine winner and start question phase
    determineTriviaWinner();
});

// Event listeners for Speed Categories
document.getElementById('speed-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSpeedAnswer();
    }
});

// UPDATED: Modified speed categories event listener to handle winner determination
document.getElementById('continue-from-speed-btn').addEventListener('click', () => {
    if (!isHost) return; // Only host can continue
    
    console.log('Speed categories complete, determining winner...');
    determineSpeedWinner();
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