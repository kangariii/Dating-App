// This or That Questions - Enhanced for couples with engaging, revealing choices
const thisOrThatQuestions = {
    round1: [
        // Personality & Dating Style (25 questions)
        {
            question: "Love letters or surprise dates?",
            optionA: "Love letters",
            optionB: "Surprise dates"
        },
        {
            question: "Netflix and chill or going out dancing?",
            optionA: "Netflix and chill",
            optionB: "Going out dancing"
        },
        {
            question: "Deep conversations or playful banter?",
            optionA: "Deep conversations",
            optionB: "Playful banter"
        },
        {
            question: "Roses or funny memes?",
            optionA: "Roses",
            optionB: "Funny memes"
        },
        {
            question: "Fancy dinner or food truck adventure?",
            optionA: "Fancy dinner",
            optionB: "Food truck adventure"
        },
        {
            question: "Cuddling on the couch or exploring a new city?",
            optionA: "Cuddling on the couch",
            optionB: "Exploring a new city"
        },
        {
            question: "Good morning texts or goodnight calls?",
            optionA: "Good morning texts",
            optionB: "Goodnight calls"
        },
        {
            question: "Spontaneous getaway or planned vacation?",
            optionA: "Spontaneous getaway",
            optionB: "Planned vacation"
        },
        {
            question: "Matching outfits or completely different styles?",
            optionA: "Matching outfits",
            optionB: "Completely different styles"
        },
        {
            question: "Public displays of affection or private moments?",
            optionA: "Public displays of affection",
            optionB: "Private moments"
        },
        {
            question: "Breakfast in bed or midnight snacks?",
            optionA: "Breakfast in bed",
            optionB: "Midnight snacks"
        },
        {
            question: "Dancing in the rain or stargazing?",
            optionA: "Dancing in the rain",
            optionB: "Stargazing"
        },
        {
            question: "Handwritten notes or voice messages?",
            optionA: "Handwritten notes",
            optionB: "Voice messages"
        },
        {
            question: "Couple's massage or adrenaline rush activity?",
            optionA: "Couple's massage",
            optionB: "Adrenaline rush activity"
        },
        {
            question: "Sharing dessert or getting your own?",
            optionA: "Sharing dessert",
            optionB: "Getting your own"
        },
        {
            question: "Long walks or bike rides?",
            optionA: "Long walks",
            optionB: "Bike rides"
        },
        {
            question: "Surprise parties or intimate celebrations?",
            optionA: "Surprise parties",
            optionB: "Intimate celebrations"
        },
        {
            question: "Road trip playlist or comfortable silence?",
            optionA: "Road trip playlist",
            optionB: "Comfortable silence"
        },
        {
            question: "Cooking together or being cooked for?",
            optionA: "Cooking together",
            optionB: "Being cooked for"
        },
        {
            question: "Movie theater or drive-in?",
            optionA: "Movie theater",
            optionB: "Drive-in"
        },
        {
            question: "Flowers delivered or picked from a garden?",
            optionA: "Flowers delivered",
            optionB: "Picked from a garden"
        },
        {
            question: "Karaoke duet or slow dance?",
            optionA: "Karaoke duet",
            optionB: "Slow dance"
        },
        {
            question: "Adventure park or art museum?",
            optionA: "Adventure park",
            optionB: "Art museum"
        },
        {
            question: "Couple's workout or solo gym time?",
            optionA: "Couple's workout",
            optionB: "Solo gym time"
        },
        {
            question: "Photo booth or professional photoshoot?",
            optionA: "Photo booth",
            optionB: "Professional photoshoot"
        },

        // Life Choices & Values (25 questions)
        {
            question: "City penthouse or countryside cottage?",
            optionA: "City penthouse",
            optionB: "Countryside cottage"
        },
        {
            question: "Work hard, play hard or work-life balance?",
            optionA: "Work hard, play hard",
            optionB: "Work-life balance"
        },
        {
            question: "Save money or live in the moment?",
            optionA: "Save money",
            optionB: "Live in the moment"
        },
        {
            question: "Big friend group or close-knit circle?",
            optionA: "Big friend group",
            optionB: "Close-knit circle"
        },
        {
            question: "Early bird or night owl?",
            optionA: "Early bird",
            optionB: "Night owl"
        },
        {
            question: "Minimalist lifestyle or collector of memories?",
            optionA: "Minimalist lifestyle",
            optionB: "Collector of memories"
        },
        {
            question: "Technology enthusiast or digital detox?",
            optionA: "Technology enthusiast",
            optionB: "Digital detox"
        },
        {
            question: "Trendsetter or timeless classic?",
            optionA: "Trendsetter",
            optionB: "Timeless classic"
        },
        {
            question: "Risk taker or playing it safe?",
            optionA: "Risk taker",
            optionB: "Playing it safe"
        },
        {
            question: "Leader or supporter?",
            optionA: "Leader",
            optionB: "Supporter"
        },
        {
            question: "Optimist or realist?",
            optionA: "Optimist",
            optionB: "Realist"
        },
        {
            question: "Routine lover or chaos embracer?",
            optionA: "Routine lover",
            optionB: "Chaos embracer"
        },
        {
            question: "Quality over quantity or variety is key?",
            optionA: "Quality over quantity",
            optionB: "Variety is key"
        },
        {
            question: "Express feelings openly or show through actions?",
            optionA: "Express feelings openly",
            optionB: "Show through actions"
        },
        {
            question: "Forgive easily or need time to process?",
            optionA: "Forgive easily",
            optionB: "Need time to process"
        },
        {
            question: "Competitive spirit or just for fun?",
            optionA: "Competitive spirit",
            optionB: "Just for fun"
        },
        {
            question: "Debate ideas or avoid conflict?",
            optionA: "Debate ideas",
            optionB: "Avoid conflict"
        },
        {
            question: "Make decisions quickly or sleep on it?",
            optionA: "Make decisions quickly",
            optionB: "Sleep on it"
        },
        {
            question: "Glass half full or glass half empty?",
            optionA: "Glass half full",
            optionB: "Glass half empty"
        },
        {
            question: "Follow your heart or trust your head?",
            optionA: "Follow your heart",
            optionB: "Trust your head"
        },
        {
            question: "Social butterfly or introvert recharge?",
            optionA: "Social butterfly",
            optionB: "Introvert recharge"
        },
        {
            question: "Admit when wrong or stand your ground?",
            optionA: "Admit when wrong",
            optionB: "Stand your ground"
        },
        {
            question: "Live like there's no tomorrow or plan for the future?",
            optionA: "Live like there's no tomorrow",
            optionB: "Plan for the future"
        },
        {
            question: "Ask for help or figure it out yourself?",
            optionA: "Ask for help",
            optionB: "Figure it out yourself"
        },
        {
            question: "Celebrate small wins or wait for big victories?",
            optionA: "Celebrate small wins",
            optionB: "Wait for big victories"
        },

        // Fun & Quirky (25 questions)
        {
            question: "Superhero or villain powers?",
            optionA: "Superhero powers",
            optionB: "Villain powers"
        },
        {
            question: "Time travel to the past or future?",
            optionA: "Past",
            optionB: "Future"
        },
        {
            question: "Mind reading or invisibility?",
            optionA: "Mind reading",
            optionB: "Invisibility"
        },
        {
            question: "Zombie apocalypse or alien invasion?",
            optionA: "Zombie apocalypse",
            optionB: "Alien invasion"
        },
        {
            question: "Magic wand or crystal ball?",
            optionA: "Magic wand",
            optionB: "Crystal ball"
        },
        {
            question: "Immortality or ability to fly?",
            optionA: "Immortality",
            optionB: "Ability to fly"
        },
        {
            question: "Win the lottery or find true love?",
            optionA: "Win the lottery",
            optionB: "Find true love"
        },
        {
            question: "Be famous or be wealthy but unknown?",
            optionA: "Be famous",
            optionB: "Be wealthy but unknown"
        },
        {
            question: "Live in a castle or on a beach?",
            optionA: "Live in a castle",
            optionB: "Live on a beach"
        },
        {
            question: "Have a personal chef or personal trainer?",
            optionA: "Personal chef",
            optionB: "Personal trainer"
        },
        {
            question: "Always tell the truth or read minds?",
            optionA: "Always tell the truth",
            optionB: "Read minds"
        },
        {
            question: "Teleportation or time manipulation?",
            optionA: "Teleportation",
            optionB: "Time manipulation"
        },
        {
            question: "Speak all languages or play all instruments?",
            optionA: "Speak all languages",
            optionB: "Play all instruments"
        },
        {
            question: "Never age or never get sick?",
            optionA: "Never age",
            optionB: "Never get sick"
        },
        {
            question: "Control the weather or control gravity?",
            optionA: "Control the weather",
            optionB: "Control gravity"
        },
        {
            question: "Have dinner with your hero or your worst enemy?",
            optionA: "Your hero",
            optionB: "Your worst enemy"
        },
        {
            question: "Know when you'll die or how you'll die?",
            optionA: "When you'll die",
            optionB: "How you'll die"
        },
        {
            question: "Relive your best day or skip your worst day?",
            optionA: "Relive your best day",
            optionB: "Skip your worst day"
        },
        {
            question: "Have unlimited money or unlimited time?",
            optionA: "Unlimited money",
            optionB: "Unlimited time"
        },
        {
            question: "Be able to rewind or fast forward your life?",
            optionA: "Rewind your life",
            optionB: "Fast forward your life"
        },
        {
            question: "Always know if someone is lying or always be believed?",
            optionA: "Know if someone is lying",
            optionB: "Always be believed"
        },
        {
            question: "Have a rewind button or a pause button for life?",
            optionA: "Rewind button",
            optionB: "Pause button"
        },
        {
            question: "Live without music or live without movies?",
            optionA: "Live without music",
            optionB: "Live without movies"
        },
        {
            question: "Always be 10 minutes late or 20 minutes early?",
            optionA: "10 minutes late",
            optionB: "20 minutes early"
        },
        {
            question: "Have the ability to heal others or never feel pain?",
            optionA: "Heal others",
            optionB: "Never feel pain"
        },

        // Relationship Scenarios (25 questions)
        {
            question: "Separate bedrooms or share everything?",
            optionA: "Separate bedrooms",
            optionB: "Share everything"
        },
        {
            question: "Partner's best friend or partner's ex?",
            optionA: "Partner's best friend",
            optionB: "Partner's ex"
        },
        {
            question: "Always compromise or take turns winning?",
            optionA: "Always compromise",
            optionB: "Take turns winning"
        },
        {
            question: "Matching couple tattoos or separate individual ones?",
            optionA: "Matching couple tattoos",
            optionB: "Separate individual ones"
        },
        {
            question: "Share all passwords or maintain privacy?",
            optionA: "Share all passwords",
            optionB: "Maintain privacy"
        },
        {
            question: "Joint bank account or keep finances separate?",
            optionA: "Joint bank account",
            optionB: "Keep finances separate"
        },
        {
            question: "Live near family or far from family?",
            optionA: "Near family",
            optionB: "Far from family"
        },
        {
            question: "Traditional roles or completely equal everything?",
            optionA: "Traditional roles",
            optionB: "Completely equal everything"
        },
        {
            question: "Big wedding or elope?",
            optionA: "Big wedding",
            optionB: "Elope"
        },
        {
            question: "Have kids right away or wait several years?",
            optionA: "Have kids right away",
            optionB: "Wait several years"
        },
        {
            question: "Date nights weekly or monthly adventures?",
            optionA: "Date nights weekly",
            optionB: "Monthly adventures"
        },
        {
            question: "Share hobbies or have separate interests?",
            optionA: "Share hobbies",
            optionB: "Have separate interests"
        },
        {
            question: "Work together or never mix work and love?",
            optionA: "Work together",
            optionB: "Never mix work and love"
        },
        {
            question: "Move for love or love where you are?",
            optionA: "Move for love",
            optionB: "Love where you are"
        },
        {
            question: "Always be honest or sometimes spare feelings?",
            optionA: "Always be honest",
            optionB: "Sometimes spare feelings"
        },
        {
            question: "Joint social media or individual accounts?",
            optionA: "Joint social media",
            optionB: "Individual accounts"
        },
        {
            question: "Surprise each other or plan together?",
            optionA: "Surprise each other",
            optionB: "Plan together"
        },
        {
            question: "One pet or multiple pets?",
            optionA: "One pet",
            optionB: "Multiple pets"
        },
        {
            question: "Travel the world or buy a house?",
            optionA: "Travel the world",
            optionB: "Buy a house"
        },
        {
            question: "Argue it out or cool off separately?",
            optionA: "Argue it out",
            optionB: "Cool off separately"
        },
        {
            question: "Anniversary tradition or different each year?",
            optionA: "Anniversary tradition",
            optionB: "Different each year"
        },
        {
            question: "Know everything about each other or keep some mystery?",
            optionA: "Know everything",
            optionB: "Keep some mystery"
        },
        {
            question: "Retire early together or work longer separately?",
            optionA: "Retire early together",
            optionB: "Work longer separately"
        },
        {
            question: "Always be together or occasional time apart?",
            optionA: "Always be together",
            optionB: "Occasional time apart"
        },
        {
            question: "Grow old gracefully or fight aging together?",
            optionA: "Grow old gracefully",
            optionB: "Fight aging together"
        }
    ]
};

// Function to get a random this-or-that question
function getRandomThisOrThatQuestion(round) {
    const questions = thisOrThatQuestions.round1;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}