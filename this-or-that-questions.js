// This or That Questions - Enhanced for couples with 200 engaging, revealing choices
const thisOrThatQuestions = {
    round1: [
        // ===== PERSONALITY & DATING STYLE (50 questions) =====
        
        // Original 25 questions
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
        
        // NEW: 25 additional personality & dating questions
        {
            question: "Sunrise watching or sunset viewing?",
            optionA: "Sunrise watching",
            optionB: "Sunset viewing"
        },
        {
            question: "Love songs or inside jokes?",
            optionA: "Love songs",
            optionB: "Inside jokes"
        },
        {
            question: "Candlelit dinner or picnic under stars?",
            optionA: "Candlelit dinner",
            optionB: "Picnic under stars"
        },
        {
            question: "Holding hands or arm around shoulder?",
            optionA: "Holding hands",
            optionB: "Arm around shoulder"
        },
        {
            question: "Wine tasting or brewery tour?",
            optionA: "Wine tasting",
            optionB: "Brewery tour"
        },
        {
            question: "Love at first sight or growing attraction?",
            optionA: "Love at first sight",
            optionB: "Growing attraction"
        },
        {
            question: "Pet names or real names only?",
            optionA: "Pet names",
            optionB: "Real names only"
        },
        {
            question: "Forehead kisses or cheek kisses?",
            optionA: "Forehead kisses",
            optionB: "Cheek kisses"
        },
        {
            question: "Share a playlist or make one for them?",
            optionA: "Share a playlist",
            optionB: "Make one for them"
        },
        {
            question: "Couple's tattoo or promise rings?",
            optionA: "Couple's tattoo",
            optionB: "Promise rings"
        },
        {
            question: "Love poems or love songs?",
            optionA: "Love poems",
            optionB: "Love songs"
        },
        {
            question: "Surprise flowers or planned date night?",
            optionA: "Surprise flowers",
            optionB: "Planned date night"
        },
        {
            question: "Dancing at home or dancing at club?",
            optionA: "Dancing at home",
            optionB: "Dancing at club"
        },
        {
            question: "Share clothes or keep wardrobes separate?",
            optionA: "Share clothes",
            optionB: "Keep wardrobes separate"
        },
        {
            question: "Love notes in lunch or texts throughout day?",
            optionA: "Love notes in lunch",
            optionB: "Texts throughout day"
        },
        {
            question: "Recreate first date or try something new?",
            optionA: "Recreate first date",
            optionB: "Try something new"
        },
        {
            question: "Couple's journal or individual diaries?",
            optionA: "Couple's journal",
            optionB: "Individual diaries"
        },
        {
            question: "Share a toothbrush or never ever?",
            optionA: "Share a toothbrush",
            optionB: "Never ever"
        },
        {
            question: "Fall asleep together or different bedtimes?",
            optionA: "Fall asleep together",
            optionB: "Different bedtimes"
        },
        {
            question: "Share location always or trust without tracking?",
            optionA: "Share location always",
            optionB: "Trust without tracking"
        },
        {
            question: "Couple goals posts or keep it private?",
            optionA: "Couple goals posts",
            optionB: "Keep it private"
        },
        {
            question: "Learn their hobby or teach them yours?",
            optionA: "Learn their hobby",
            optionB: "Teach them yours"
        },
        {
            question: "Surprise visits or always plan ahead?",
            optionA: "Surprise visits",
            optionB: "Always plan ahead"
        },
        {
            question: "Share streaming accounts or keep separate?",
            optionA: "Share streaming accounts",
            optionB: "Keep separate"
        },
        {
            question: "Kiss hello/goodbye always or when you feel it?",
            optionA: "Kiss hello/goodbye always",
            optionB: "When you feel it"
        },

        // ===== LIFE CHOICES & VALUES (50 questions) =====
        
        // Original 25 questions
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
        
        // NEW: 25 additional life choices & values questions
        {
            question: "Change the world or find your peace?",
            optionA: "Change the world",
            optionB: "Find your peace"
        },
        {
            question: "Deep roots or wings to fly?",
            optionA: "Deep roots",
            optionB: "Wings to fly"
        },
        {
            question: "Stand out or blend in?",
            optionA: "Stand out",
            optionB: "Blend in"
        },
        {
            question: "Work from home or office environment?",
            optionA: "Work from home",
            optionB: "Office environment"
        },
        {
            question: "Handmade gifts or store-bought luxury?",
            optionA: "Handmade gifts",
            optionB: "Store-bought luxury"
        },
        {
            question: "Learn from books or learn by doing?",
            optionA: "Learn from books",
            optionB: "Learn by doing"
        },
        {
            question: "Trust everyone initially or trust is earned?",
            optionA: "Trust everyone initially",
            optionB: "Trust is earned"
        },
        {
            question: "Donate time or donate money?",
            optionA: "Donate time",
            optionB: "Donate money"
        },
        {
            question: "Popular opinion or unpopular truth?",
            optionA: "Popular opinion",
            optionB: "Unpopular truth"
        },
        {
            question: "Work to retire early or work doing what you love forever?",
            optionA: "Work to retire early",
            optionB: "Work doing what you love forever"
        },
        {
            question: "Fix things yourself or hire professionals?",
            optionA: "Fix things yourself",
            optionB: "Hire professionals"
        },
        {
            question: "Invest in experiences or invest in things?",
            optionA: "Invest in experiences",
            optionB: "Invest in things"
        },
        {
            question: "Know a little about everything or everything about one thing?",
            optionA: "Little about everything",
            optionB: "Everything about one thing"
        },
        {
            question: "Create traditions or break traditions?",
            optionA: "Create traditions",
            optionB: "Break traditions"
        },
        {
            question: "Speak your mind or keep the peace?",
            optionA: "Speak your mind",
            optionB: "Keep the peace"
        },
        {
            question: "Control your destiny or go with the flow?",
            optionA: "Control your destiny",
            optionB: "Go with the flow"
        },
        {
            question: "Practice makes perfect or natural talent wins?",
            optionA: "Practice makes perfect",
            optionB: "Natural talent wins"
        },
        {
            question: "Team player or solo performer?",
            optionA: "Team player",
            optionB: "Solo performer"
        },
        {
            question: "Judge by intentions or judge by actions?",
            optionA: "Judge by intentions",
            optionB: "Judge by actions"
        },
        {
            question: "Start your day with news or meditation?",
            optionA: "Start with news",
            optionB: "Start with meditation"
        },
        {
            question: "Focus on strengths or improve weaknesses?",
            optionA: "Focus on strengths",
            optionB: "Improve weaknesses"
        },
        {
            question: "Listen to understand or listen to respond?",
            optionA: "Listen to understand",
            optionB: "Listen to respond"
        },
        {
            question: "Build a legacy or live for today?",
            optionA: "Build a legacy",
            optionB: "Live for today"
        },
        {
            question: "Tough love or gentle encouragement?",
            optionA: "Tough love",
            optionB: "Gentle encouragement"
        },
        {
            question: "Rule follower or rule bender?",
            optionA: "Rule follower",
            optionB: "Rule bender"
        },

        // ===== FUN & QUIRKY (50 questions) =====
        
        // Original 25 questions
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
        
        // NEW: 25 additional fun & quirky questions
        {
            question: "Be a dragon or have a dragon?",
            optionA: "Be a dragon",
            optionB: "Have a dragon"
        },
        {
            question: "Live in the Harry Potter world or Marvel universe?",
            optionA: "Harry Potter world",
            optionB: "Marvel universe"
        },
        {
            question: "Have a photographic memory or forget bad memories?",
            optionA: "Photographic memory",
            optionB: "Forget bad memories"
        },
        {
            question: "Be able to talk to animals or speak all human languages?",
            optionA: "Talk to animals",
            optionB: "Speak all human languages"
        },
        {
            question: "Have x-ray vision or super hearing?",
            optionA: "X-ray vision",
            optionB: "Super hearing"
        },
        {
            question: "Live underwater or in space?",
            optionA: "Live underwater",
            optionB: "Live in space"
        },
        {
            question: "Be a famous detective or famous spy?",
            optionA: "Famous detective",
            optionB: "Famous spy"
        },
        {
            question: "Have a robot butler or flying car?",
            optionA: "Robot butler",
            optionB: "Flying car"
        },
        {
            question: "Always win at board games or always win at sports?",
            optionA: "Win at board games",
            optionB: "Win at sports"
        },
        {
            question: "Be able to breathe underwater or survive in space?",
            optionA: "Breathe underwater",
            optionB: "Survive in space"
        },
        {
            question: "Have super strength or super speed?",
            optionA: "Super strength",
            optionB: "Super speed"
        },
        {
            question: "Live in a treehouse or underground bunker?",
            optionA: "Treehouse",
            optionB: "Underground bunker"
        },
        {
            question: "Be a vampire or werewolf?",
            optionA: "Vampire",
            optionB: "Werewolf"
        },
        {
            question: "Have a third eye or third arm?",
            optionA: "Third eye",
            optionB: "Third arm"
        },
        {
            question: "Control fire or control ice?",
            optionA: "Control fire",
            optionB: "Control ice"
        },
        {
            question: "Be best friends with Batman or Iron Man?",
            optionA: "Batman",
            optionB: "Iron Man"
        },
        {
            question: "Have a talking dog or talking cat?",
            optionA: "Talking dog",
            optionB: "Talking cat"
        },
        {
            question: "Be able to freeze time or clone yourself?",
            optionA: "Freeze time",
            optionB: "Clone yourself"
        },
        {
            question: "Have perfect pitch or perfect rhythm?",
            optionA: "Perfect pitch",
            optionB: "Perfect rhythm"
        },
        {
            question: "Be a genius inventor or master artist?",
            optionA: "Genius inventor",
            optionB: "Master artist"
        },
        {
            question: "Have a pocket dimension or time loop day?",
            optionA: "Pocket dimension",
            optionB: "Time loop day"
        },
        {
            question: "Be able to grow anything instantly or fix anything instantly?",
            optionA: "Grow anything instantly",
            optionB: "Fix anything instantly"
        },
        {
            question: "Have perfect luck for a day or perfect skills for a year?",
            optionA: "Perfect luck for a day",
            optionB: "Perfect skills for a year"
        },
        {
            question: "Be able to see 10 minutes into the future or 10 years?",
            optionA: "10 minutes into future",
            optionB: "10 years into future"
        },
        {
            question: "Have a magic carpet or magic mirror?",
            optionA: "Magic carpet",
            optionB: "Magic mirror"
        },

        // ===== RELATIONSHIP SCENARIOS (50 questions) =====
        
        // Original 25 questions
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
        },
        
        // NEW: 25 additional relationship scenario questions
        {
            question: "Same friend group or separate friend groups?",
            optionA: "Same friend group",
            optionB: "Separate friend groups"
        },
        {
            question: "Tell each other everything or some things stay private?",
            optionA: "Tell each other everything",
            optionB: "Some things stay private"
        },
        {
            question: "Solve problems together or give space to figure it out?",
            optionA: "Solve problems together",
            optionB: "Give space to figure it out"
        },
        {
            question: "Share a car or have your own vehicles?",
            optionA: "Share a car",
            optionB: "Have your own vehicles"
        },
        {
            question: "Same sleep schedule or different rhythms?",
            optionA: "Same sleep schedule",
            optionB: "Different rhythms"
        },
        {
            question: "Celebrate all holidays or create your own?",
            optionA: "Celebrate all holidays",
            optionB: "Create your own"
        },
        {
            question: "Meet each other's exes or never interact?",
            optionA: "Meet each other's exes",
            optionB: "Never interact"
        },
        {
            question: "Share chores equally or divide by preference?",
            optionA: "Share chores equally",
            optionB: "Divide by preference"
        },
        {
            question: "Live in one place forever or move every few years?",
            optionA: "One place forever",
            optionB: "Move every few years"
        },
        {
            question: "Adopt kids or biological only?",
            optionA: "Adopt kids",
            optionB: "Biological only"
        },
        {
            question: "Share a workspace or separate offices?",
            optionA: "Share a workspace",
            optionB: "Separate offices"
        },
        {
            question: "Exercise together or workout separately?",
            optionA: "Exercise together",
            optionB: "Workout separately"
        },
        {
            question: "Share all meals or eat on your own schedules?",
            optionA: "Share all meals",
            optionB: "Eat on own schedules"
        },
        {
            question: "Combine families for holidays or alternate?",
            optionA: "Combine families",
            optionB: "Alternate"
        },
        {
            question: "Share a bathroom or have your own?",
            optionA: "Share a bathroom",
            optionB: "Have your own"
        },
        {
            question: "Watch shows together only or watch ahead allowed?",
            optionA: "Together only",
            optionB: "Watch ahead allowed"
        },
        {
            question: "Share books or keep libraries separate?",
            optionA: "Share books",
            optionB: "Keep libraries separate"
        },
        {
            question: "Go to bed angry or stay up until resolved?",
            optionA: "Go to bed angry",
            optionB: "Stay up until resolved"
        },
        {
            question: "Share groceries or buy your own food?",
            optionA: "Share groceries",
            optionB: "Buy your own food"
        },
        {
            question: "Take each other's last name or keep your own?",
            optionA: "Take last name",
            optionB: "Keep your own"
        },
        {
            question: "Spend every weekend together or have solo time?",
            optionA: "Every weekend together",
            optionB: "Have solo time"
        },
        {
            question: "Share everything on social media or keep it offline?",
            optionA: "Share everything",
            optionB: "Keep it offline"
        },
        {
            question: "Fight in private only or doesn't matter where?",
            optionA: "Private only",
            optionB: "Doesn't matter where"
        },
        {
            question: "Support each other's dreams or be realistic?",
            optionA: "Support dreams",
            optionB: "Be realistic"
        },
        {
            question: "Renew vows regularly or once is enough?",
            optionA: "Renew vows regularly",
            optionB: "Once is enough"
        }
    ]
};

// Function to get a random this-or-that question
function getRandomThisOrThatQuestion(round) {
    const questions = thisOrThatQuestions.round1;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}