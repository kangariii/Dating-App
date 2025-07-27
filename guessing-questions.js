// Guessing Game Questions with fake options - Enhanced with 100+ questions per round
const guessingQuestions = {
  // Round 1: Light & Fun - Getting to know preferences and habits
  round1: [
    // Food & Drinks (20 questions)
    {
      question: "What's my favorite pizza topping?",
      fakeOptions: ["Pepperoni", "Mushrooms", "Pineapple", "Olives", "Sausage", "Bell Peppers", "Extra Cheese", "Bacon", "Anchovies", "BBQ Chicken"]
    },
    {
      question: "What's my go-to coffee order?",
      fakeOptions: ["Black Coffee", "Latte", "Cappuccino", "Americano", "Macchiato", "Flat White", "Mocha", "Cold Brew", "Espresso", "Frappuccino"]
    },
    {
      question: "What's my favorite ice cream flavor?",
      fakeOptions: ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip", "Cookie Dough", "Rocky Road", "Caramel", "Pistachio", "Coffee", "Cookies & Cream"]
    },
    {
      question: "What's my favorite type of cuisine?",
      fakeOptions: ["Italian", "Mexican", "Chinese", "Japanese", "Thai", "Indian", "Greek", "French", "Korean", "Mediterranean"]
    },
    {
      question: "How do I like my eggs?",
      fakeOptions: ["Scrambled", "Fried", "Poached", "Boiled", "Over Easy", "Sunny Side Up", "Omelet", "Benedict", "I don't eat eggs"]
    },
    {
      question: "What's my favorite midnight snack?",
      fakeOptions: ["Cereal", "Chips", "Cookies", "Fruit", "Cheese", "Leftover Pizza", "Ice Cream", "Popcorn", "Candy", "Nothing"]
    },
    {
      question: "What's my favorite alcoholic drink?",
      fakeOptions: ["Wine", "Beer", "Whiskey", "Vodka", "Rum", "Tequila", "Gin", "Cocktails", "I don't drink"]
    },
    {
      question: "How spicy do I like my food?",
      fakeOptions: ["Not at all", "Mild", "Medium", "Hot", "Extra Hot", "The spicier the better"]
    },
    {
      question: "What's my favorite breakfast?",
      fakeOptions: ["Pancakes", "Waffles", "French Toast", "Eggs & Bacon", "Cereal", "Oatmeal", "Smoothie", "Toast", "I skip breakfast"]
    },
    {
      question: "What's my favorite dessert?",
      fakeOptions: ["Chocolate Cake", "Cheesecake", "Ice Cream", "Pie", "Cookies", "Brownies", "Tiramisu", "Fruit", "Crème Brûlée"]
    },
    {
      question: "What's my favorite fast food place?",
      fakeOptions: ["McDonald's", "Burger King", "Wendy's", "Taco Bell", "Subway", "Chipotle", "KFC", "In-N-Out", "I don't eat fast food"]
    },
    {
      question: "How do I take my tea?",
      fakeOptions: ["Black", "With milk", "With sugar", "With honey", "With lemon", "I don't drink tea"]
    },
    {
      question: "What's my favorite soda?",
      fakeOptions: ["Coke", "Pepsi", "Sprite", "Dr Pepper", "Mountain Dew", "Root Beer", "Ginger Ale", "Orange", "I don't drink soda"]
    },
    {
      question: "What's my favorite sandwich?",
      fakeOptions: ["BLT", "Grilled Cheese", "Club", "PB&J", "Ham & Cheese", "Turkey", "Tuna", "Veggie", "Reuben"]
    },
    {
      question: "What's my favorite fruit?",
      fakeOptions: ["Apple", "Banana", "Orange", "Strawberry", "Mango", "Pineapple", "Grapes", "Watermelon", "Peach", "Berries"]
    },
    {
      question: "What's my favorite vegetable?",
      fakeOptions: ["Broccoli", "Carrots", "Spinach", "Corn", "Green Beans", "Asparagus", "Brussels Sprouts", "Potatoes", "I don't like vegetables"]
    },
    {
      question: "What's my favorite cheese?",
      fakeOptions: ["Cheddar", "Mozzarella", "Swiss", "Brie", "Gouda", "Parmesan", "Blue Cheese", "Feta", "I don't like cheese"]
    },
    {
      question: "What's my favorite pasta shape?",
      fakeOptions: ["Spaghetti", "Penne", "Fettuccine", "Rigatoni", "Bow Tie", "Angel Hair", "Ravioli", "Lasagna", "Macaroni"]
    },
    {
      question: "What's my favorite candy?",
      fakeOptions: ["Chocolate", "Gummy Bears", "Sour Patch", "Skittles", "M&Ms", "Reese's", "Snickers", "Twizzlers", "Starburst"]
    },
    {
      question: "What's my favorite chip flavor?",
      fakeOptions: ["Original", "BBQ", "Sour Cream & Onion", "Salt & Vinegar", "Cheddar", "Jalapeño", "Ranch", "Sea Salt"]
    },

    // Daily Life & Habits (20 questions)
    {
      question: "What time do I prefer to wake up?",
      fakeOptions: ["Before 6 AM", "6-7 AM", "7-8 AM", "8-9 AM", "After 9 AM", "Whenever I want", "It varies"]
    },
    {
      question: "What's my favorite season?",
      fakeOptions: ["Spring", "Summer", "Fall", "Winter"]
    },
    {
      question: "How long does it take me to get ready in the morning?",
      fakeOptions: ["Less than 15 min", "15-30 min", "30-45 min", "45-60 min", "Over an hour", "It depends"]
    },
    {
      question: "What's my favorite day of the week?",
      fakeOptions: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
      question: "How often do I check social media?",
      fakeOptions: ["Constantly", "Every hour", "Few times a day", "Once a day", "Rarely", "I don't use it"]
    },
    {
      question: "What's my preferred shower time?",
      fakeOptions: ["Morning", "Night", "Both", "Afternoon", "Whenever I need to"]
    },
    {
      question: "How do I prefer to sleep?",
      fakeOptions: ["On my back", "On my stomach", "On my side", "Fetal position", "Starfish", "It varies"]
    },
    {
      question: "What side of the bed do I prefer?",
      fakeOptions: ["Left", "Right", "Middle", "Closest to door", "Closest to window", "I don't care"]
    },
    {
      question: "How many pillows do I sleep with?",
      fakeOptions: ["None", "One", "Two", "Three", "Four or more", "As many as possible"]
    },
    {
      question: "What temperature do I like the room when sleeping?",
      fakeOptions: ["Very cold", "Cool", "Room temperature", "Warm", "Hot", "I don't care"]
    },
    {
      question: "How often do I make my bed?",
      fakeOptions: ["Every day", "Most days", "Sometimes", "Rarely", "Never", "Only when guests come"]
    },
    {
      question: "What's my biggest procrastination habit?",
      fakeOptions: ["Social media", "YouTube", "Gaming", "Netflix", "Cleaning", "Online shopping", "Texting", "Daydreaming"]
    },
    {
      question: "How do I prefer to exercise?",
      fakeOptions: ["Gym", "Running", "Yoga", "Sports", "Home workouts", "Walking", "Swimming", "I don't exercise"]
    },
    {
      question: "What's my favorite room in the house?",
      fakeOptions: ["Bedroom", "Living room", "Kitchen", "Bathroom", "Office", "Balcony/Patio", "Garage"]
    },
    {
      question: "How organized is my closet?",
      fakeOptions: ["Perfectly organized", "Pretty organized", "Somewhat messy", "Very messy", "Disaster zone"]
    },
    {
      question: "How often do I do laundry?",
      fakeOptions: ["Daily", "Twice a week", "Weekly", "Every two weeks", "When I run out of clothes"]
    },
    {
      question: "What's my morning beverage of choice?",
      fakeOptions: ["Coffee", "Tea", "Juice", "Water", "Energy drink", "Smoothie", "Nothing"]
    },
    {
      question: "How long is my ideal nap?",
      fakeOptions: ["15 minutes", "30 minutes", "1 hour", "2 hours", "As long as possible", "I don't nap"]
    },
    {
      question: "What's my preferred study/work time?",
      fakeOptions: ["Early morning", "Late morning", "Afternoon", "Evening", "Late night", "Whenever"]
    },
    {
      question: "How do I like to spend Sunday mornings?",
      fakeOptions: ["Sleeping in", "Brunch", "Church", "Exercise", "Cleaning", "Reading", "TV/Movies", "Outdoors"]
    },

    // Entertainment & Hobbies (20 questions)
    {
      question: "What's my favorite movie genre?",
      fakeOptions: ["Comedy", "Horror", "Romance", "Action", "Sci-Fi", "Drama", "Documentary", "Thriller", "Fantasy", "Animation"]
    },
    {
      question: "What's my favorite music genre?",
      fakeOptions: ["Pop", "Rock", "Hip Hop", "Country", "EDM", "Classical", "Jazz", "R&B", "Indie", "Metal"]
    },
    {
      question: "What's my favorite TV show genre?",
      fakeOptions: ["Reality TV", "Drama", "Comedy", "Documentary", "Crime", "Sci-Fi", "Romance", "Anime", "News"]
    },
    {
      question: "What's my favorite social media platform?",
      fakeOptions: ["Instagram", "TikTok", "Facebook", "Twitter", "Snapchat", "LinkedIn", "Reddit", "Pinterest", "I don't use social media"]
    },
    {
      question: "What's my favorite video game genre?",
      fakeOptions: ["FPS", "RPG", "Sports", "Puzzle", "Racing", "Strategy", "Fighting", "Simulation", "I don't game"]
    },
    {
      question: "What's my favorite book genre?",
      fakeOptions: ["Fiction", "Non-fiction", "Romance", "Mystery", "Fantasy", "Biography", "Self-help", "Horror", "I don't read"]
    },
    {
      question: "What's my favorite sport to watch?",
      fakeOptions: ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Tennis", "Golf", "UFC", "I don't watch sports"]
    },
    {
      question: "What's my favorite board game?",
      fakeOptions: ["Monopoly", "Scrabble", "Chess", "Risk", "Clue", "Trivial Pursuit", "Cards Against Humanity", "Settlers of Catan"]
    },
    {
      question: "What's my karaoke go-to song genre?",
      fakeOptions: ["Pop hits", "Rock classics", "R&B", "Country", "Rap", "Disney", "80s/90s", "I don't do karaoke"]
    },
    {
      question: "What's my favorite podcast genre?",
      fakeOptions: ["True crime", "Comedy", "News", "Self-help", "History", "Science", "Sports", "I don't listen to podcasts"]
    },
    {
      question: "What's my preferred concert venue?",
      fakeOptions: ["Stadium", "Arena", "Small venue", "Outdoor festival", "Club", "Bar", "I don't go to concerts"]
    },
    {
      question: "What's my favorite YouTube content?",
      fakeOptions: ["Gaming", "Beauty", "Comedy", "Educational", "Music", "Vlogs", "Cooking", "I don't watch YouTube"]
    },
    {
      question: "What's my favorite streaming service?",
      fakeOptions: ["Netflix", "Hulu", "Disney+", "HBO Max", "Amazon Prime", "Apple TV", "Paramount+", "I don't stream"]
    },
    {
      question: "How many hours of TV do I watch daily?",
      fakeOptions: ["None", "Less than 1", "1-2 hours", "2-3 hours", "3-4 hours", "More than 4"]
    },
    {
      question: "What's my favorite type of puzzle?",
      fakeOptions: ["Crossword", "Sudoku", "Jigsaw", "Word search", "Logic puzzles", "Riddles", "I don't like puzzles"]
    },
    {
      question: "What's my favorite mobile game type?",
      fakeOptions: ["Puzzle", "Word games", "Strategy", "Casual", "Action", "Card games", "I don't play mobile games"]
    },
    {
      question: "What's my binge-watching style?",
      fakeOptions: ["Entire season in one day", "Few episodes daily", "One episode daily", "Weekly as released", "I don't binge"]
    },
    {
      question: "What's my favorite type of meme?",
      fakeOptions: ["Animal memes", "Relatable memes", "Dark humor", "Dad jokes", "Video memes", "I don't like memes"]
    },
    {
      question: "What's my preferred movie watching location?",
      fakeOptions: ["Theater", "Home couch", "Bed", "Drive-in", "Anywhere"]
    },
    {
      question: "What's my favorite decade for music?",
      fakeOptions: ["60s", "70s", "80s", "90s", "2000s", "2010s", "Current", "Classical era"]
    },

    // Travel & Experiences (20 questions)
    {
      question: "What's my dream vacation destination?",
      fakeOptions: ["Paris", "Tokyo", "Bali", "New York", "Iceland", "Greece", "Hawaii", "Dubai", "New Zealand", "Italy"]
    },
    {
      question: "What's my preferred vacation type?",
      fakeOptions: ["Beach resort", "City exploration", "Mountain hiking", "Road trip", "Cruise", "Camping", "Staycation", "Adventure"]
    },
    {
      question: "Window or aisle seat?",
      fakeOptions: ["Window", "Aisle", "Middle", "I don't care", "I don't fly"]
    },
    {
      question: "What's my ideal vacation length?",
      fakeOptions: ["Weekend", "3-4 days", "One week", "Two weeks", "One month", "As long as possible"]
    },
    {
      question: "Beach or mountains?",
      fakeOptions: ["Beach", "Mountains", "Both", "Neither", "Desert", "City"]
    },
    {
      question: "What's my travel packing style?",
      fakeOptions: ["Minimalist", "Overpacker", "Last minute", "Organized lists", "Throw it all in"]
    },
    {
      question: "What's my favorite theme park?",
      fakeOptions: ["Disney World", "Disneyland", "Universal", "Six Flags", "Cedar Point", "Local park", "I don't like theme parks"]
    },
    {
      question: "How early do I arrive at the airport?",
      fakeOptions: ["3+ hours", "2 hours", "1.5 hours", "1 hour", "I cut it close", "Depends on flight"]
    },
    {
      question: "What's my road trip snack of choice?",
      fakeOptions: ["Chips", "Candy", "Fruit", "Nuts", "Beef jerky", "Cookies", "Trail mix", "Fast food"]
    },
    {
      question: "What's my camping style?",
      fakeOptions: ["Tent", "RV", "Cabin", "Glamping", "Backpacking", "I don't camp"]
    },
    {
      question: "What's my favorite souvenir type?",
      fakeOptions: ["T-shirts", "Magnets", "Postcards", "Local food", "Art", "Photos only", "I don't buy souvenirs"]
    },
    {
      question: "Hotel or Airbnb?",
      fakeOptions: ["Hotel", "Airbnb", "Hostel", "Resort", "Friend's place", "Depends"]
    },
    {
      question: "What's my ideal beach activity?",
      fakeOptions: ["Swimming", "Sunbathing", "Reading", "Volleyball", "Surfing", "Building sandcastles", "Walking", "Sleeping"]
    },
    {
      question: "How many countries have I visited?",
      fakeOptions: ["None", "1-2", "3-5", "6-10", "11-20", "More than 20"]
    },
    {
      question: "What's my preferred travel companion number?",
      fakeOptions: ["Solo", "Just us two", "Small group", "Large group", "Family", "Depends"]
    },
    {
      question: "What's my bucket list adventure?",
      fakeOptions: ["Skydiving", "Bungee jumping", "Scuba diving", "Safari", "Northern Lights", "Hot air balloon", "Climbing Everest"]
    },
    {
      question: "What's my travel planning style?",
      fakeOptions: ["Every detail planned", "Rough itinerary", "Book flights only", "Completely spontaneous"]
    },
    {
      question: "What's my favorite road trip music?",
      fakeOptions: ["Pop hits", "Classic rock", "Podcasts", "Country", "Whatever's on", "Silence", "Audiobooks"]
    },
    {
      question: "What's my must-have travel item?",
      fakeOptions: ["Phone charger", "Headphones", "Book", "Snacks", "Pillow", "Camera", "Hand sanitizer"]
    },
    {
      question: "What's my jet lag recovery method?",
      fakeOptions: ["Power through", "Nap immediately", "Melatonin", "Exercise", "Caffeine", "I don't get jet lag"]
    },

    // Personal Style & Preferences (20 questions)
    {
      question: "What's my favorite color?",
      fakeOptions: ["Blue", "Red", "Green", "Purple", "Black", "White", "Pink", "Yellow", "Orange", "Gray"]
    },
    {
      question: "What's my clothing style?",
      fakeOptions: ["Casual", "Preppy", "Bohemian", "Athletic", "Classic", "Trendy", "Grunge", "Minimalist", "Eclectic"]
    },
    {
      question: "What's my shoe collection size?",
      fakeOptions: ["Less than 5", "5-10", "10-20", "20-30", "More than 30", "I'm not sure"]
    },
    {
      question: "What's my favorite type of shoe?",
      fakeOptions: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Loafers", "Athletic shoes", "Barefoot"]
    },
    {
      question: "How long does it take me to pick an outfit?",
      fakeOptions: ["Seconds", "Few minutes", "10-15 minutes", "20-30 minutes", "Forever", "I plan ahead"]
    },
    {
      question: "What's my jewelry preference?",
      fakeOptions: ["None", "Minimal", "Statement pieces", "Lots", "Only watches", "Only rings", "Changes daily"]
    },
    {
      question: "What's my hair styling time?",
      fakeOptions: ["None", "Less than 5 min", "5-10 min", "10-20 min", "20-30 min", "More than 30 min"]
    },
    {
      question: "What's my shopping style?",
      fakeOptions: ["Online only", "In-store only", "Both", "Window shopping", "Impulse buyer", "List maker", "I hate shopping"]
    },
    {
      question: "What's my favorite store type?",
      fakeOptions: ["Department store", "Boutique", "Thrift store", "Online", "Outlet", "Target", "I don't have one"]
    },
    {
      question: "Black or brown?",
      fakeOptions: ["Black", "Brown", "Both", "Neither", "Depends on outfit"]
    },
    {
      question: "Gold or silver?",
      fakeOptions: ["Gold", "Silver", "Rose gold", "Both", "Neither", "White gold"]
    },
    {
      question: "What's my perfume/cologne wearing frequency?",
      fakeOptions: ["Daily", "Special occasions", "Sometimes", "Rarely", "Never", "Multiple times daily"]
    },
    {
      question: "What's my sunglasses style?",
      fakeOptions: ["Aviators", "Wayfarers", "Cat eye", "Round", "Sport", "I don't wear them", "Whatever's cheap"]
    },
    {
      question: "What's my bag preference?",
      fakeOptions: ["Backpack", "Tote", "Crossbody", "Clutch", "Fanny pack", "No bag", "Changes daily"]
    },
    {
      question: "What's my fashion era?",
      fakeOptions: ["Current trends", "90s", "80s", "70s", "60s", "Timeless", "Future", "Vintage mix"]
    },
    {
      question: "Pattern or solid colors?",
      fakeOptions: ["Patterns", "Solids", "Both equally", "Depends on mood", "Minimal patterns"]
    },
    {
      question: "What's my favorite accessory?",
      fakeOptions: ["Watch", "Hat", "Scarf", "Belt", "Sunglasses", "Jewelry", "Bag", "None"]
    },
    {
      question: "What's my nail preference?",
      fakeOptions: ["Natural", "Painted", "Gel/Acrylic", "French", "Designs", "Changes often", "I don't care"]
    },
    {
      question: "Comfort or style?",
      fakeOptions: ["Comfort always", "Style always", "Perfect balance", "Depends on occasion", "Comfort with style"]
    },
    {
      question: "What's my favorite clothing brand?",
      fakeOptions: ["Nike", "Adidas", "Zara", "H&M", "Lululemon", "Target brands", "Luxury brands", "No preference"]
    }
  ],

  // Round 3: Deeper Connection - Values, dreams, and personality
  round3: [
    // Personality & Character (25 questions)
    {
      question: "What's my biggest pet peeve?",
      fakeOptions: ["Being late", "Loud chewing", "Interrupting", "Not listening", "Leaving dishes", "Being on phone too much", "Lying", "Bad drivers", "Slow walkers", "Grammar mistakes"]
    },
    {
      question: "What's my love language?",
      fakeOptions: ["Words of Affirmation", "Physical Touch", "Quality Time", "Acts of Service", "Receiving Gifts"]
    },
    {
      question: "What's my conflict resolution style?",
      fakeOptions: ["Talk it out immediately", "Need time to cool off", "Avoid conflict", "Compromise quickly", "Stand my ground", "Apologize first"]
    },
    {
      question: "What's my biggest fear?",
      fakeOptions: ["Heights", "Spiders", "Public speaking", "Failure", "Being alone", "Death", "The ocean", "Flying", "Small spaces", "The dark"]
    },
    {
      question: "How do I handle stress?",
      fakeOptions: ["Exercise", "Talk it out", "Alone time", "Music", "Sleep", "Cleaning", "Shopping", "Eating", "Meditation", "Ignore it"]
    },
    {
      question: "What's my communication style?",
      fakeOptions: ["Direct", "Indirect", "Emotional", "Logical", "Humorous", "Quiet", "Verbose", "Depends on situation"]
    },
    {
      question: "Am I an optimist or pessimist?",
      fakeOptions: ["Eternal optimist", "Mostly optimistic", "Realist", "Mostly pessimistic", "Total pessimist", "Depends on the day"]
    },
    {
      question: "What's my decision-making style?",
      fakeOptions: ["Quick and decisive", "Research everything", "Ask others", "Go with gut", "Procrastinate", "Pro/con lists"]
    },
    {
      question: "What motivates me most?",
      fakeOptions: ["Money", "Recognition", "Helping others", "Personal growth", "Competition", "Creativity", "Security", "Freedom"]
    },
    {
      question: "What's my biggest strength?",
      fakeOptions: ["Empathy", "Intelligence", "Humor", "Loyalty", "Creativity", "Leadership", "Patience", "Determination"]
    },
    {
      question: "What's my biggest weakness?",
      fakeOptions: ["Perfectionism", "Procrastination", "Impatience", "Overthinking", "People pleasing", "Stubbornness", "Disorganization"]
    },
    {
      question: "How do I show affection?",
      fakeOptions: ["Verbal", "Physical", "Gifts", "Acts of service", "Quality time", "All of the above", "Depends on person"]
    },
    {
      question: "What's my energy source?",
      fakeOptions: ["Being with people", "Alone time", "Nature", "Exercise", "Creative activities", "Sleep", "Food", "Music"]
    },
    {
      question: "What's my learning style?",
      fakeOptions: ["Visual", "Auditory", "Hands-on", "Reading/Writing", "Discussion", "Trial and error"]
    },
    {
      question: "How organized am I?",
      fakeOptions: ["Extremely organized", "Pretty organized", "Organized chaos", "Somewhat messy", "Very messy", "Depends on area"]
    },
    {
      question: "What's my leadership style?",
      fakeOptions: ["Lead by example", "Collaborative", "Directive", "Delegator", "Supportive", "I prefer to follow"]
    },
    {
      question: "How do I handle criticism?",
      fakeOptions: ["Take it well", "Get defensive", "Overthink it", "Ignore it", "Learn from it", "Depends who it's from"]
    },
    {
      question: "What's my trust level with new people?",
      fakeOptions: ["Trust immediately", "Trust but verify", "Cautiously optimistic", "Takes time", "Very guarded", "Never fully trust"]
    },
    {
      question: "What's my anger style?",
      fakeOptions: ["Explosive", "Silent treatment", "Passive aggressive", "Talk it out", "Need space", "Rarely get angry"]
    },
    {
      question: "How competitive am I?",
      fakeOptions: ["Extremely", "Pretty competitive", "Only in certain things", "Not very", "Not at all", "Unhealthily competitive"]
    },
    {
      question: "What's my risk tolerance?",
      fakeOptions: ["Love risks", "Calculated risks", "Small risks only", "Risk averse", "Depends on the situation"]
    },
    {
      question: "How do I handle change?",
      fakeOptions: ["Embrace it", "Adapt quickly", "Need time to adjust", "Resist it", "Stress about it", "Go with the flow"]
    },
    {
      question: "What's my patience level?",
      fakeOptions: ["Infinite patience", "Very patient", "Average", "Somewhat impatient", "Very impatient", "Depends on situation"]
    },
    {
      question: "How do I deal with disappointment?",
      fakeOptions: ["Bounce back quickly", "Need time to process", "Get angry", "Get sad", "Blame myself", "Learn and move on"]
    },
    {
      question: "What's my happiness source?",
      fakeOptions: ["Small daily joys", "Big achievements", "Relationships", "Personal growth", "Helping others", "Simple pleasures"]
    },

    // Life & Relationships (25 questions)
    {
      question: "What's my ideal Friday night?",
      fakeOptions: ["Movie night at home", "Dinner out", "Dancing/Club", "Game night", "Cooking together", "Wine and conversation", "Live music", "Early sleep", "Sports event", "Book and bath"]
    },
    {
      question: "What's my ideal date night?",
      fakeOptions: ["Fancy dinner", "Movie", "Concert", "Cooking at home", "Outdoor adventure", "Game night", "Wine tasting", "Dancing", "Surprise me"]
    },
    {
      question: "How many kids do I want?",
      fakeOptions: ["None", "One", "Two", "Three", "Four or more", "Not sure yet", "Whatever happens", "Adopt"]
    },
    {
      question: "What's my ideal living situation?",
      fakeOptions: ["Big city", "Suburbs", "Small town", "Rural", "Beach town", "Mountains", "Different country", "Nomadic"]
    },
    {
      question: "What's my relationship deal breaker?",
      fakeOptions: ["Dishonesty", "No ambition", "Bad hygiene", "Jealousy", "Different values", "No humor", "Controlling", "Poor communication"]
    },
    {
      question: "What's my ideal work-life balance?",
      fakeOptions: ["Work to live", "Live to work", "Perfect balance", "Mostly work", "Mostly life", "Changes with seasons"]
    },
    {
      question: "What's my retirement dream?",
      fakeOptions: ["Travel the world", "Beach house", "Mountain cabin", "Stay active", "Volunteer", "Start a business", "Never retire"]
    },
    {
      question: "What's my family relationship like?",
      fakeOptions: ["Very close", "Close", "Good", "Complicated", "Distant", "Working on it", "Chosen family"]
    },
    {
      question: "How often should we have date nights?",
      fakeOptions: ["Daily", "Weekly", "Bi-weekly", "Monthly", "Spontaneously", "Special occasions only"]
    },
    {
      question: "What's my friend group size preference?",
      fakeOptions: ["1-2 close friends", "Small circle", "Medium group", "Large network", "Always meeting new people", "Quality over quantity"]
    },
    {
      question: "What's my ideal pet?",
      fakeOptions: ["Dog", "Cat", "Both", "Fish", "Bird", "Reptile", "No pets", "All the pets", "Exotic animal"]
    },
    {
      question: "What's my wedding vision?",
      fakeOptions: ["Big traditional", "Small intimate", "Destination", "Courthouse", "Elopement", "Unique theme", "No wedding", "Already planned it"]
    },
    {
      question: "What's my money mindset?",
      fakeOptions: ["Saver", "Spender", "Investor", "Balanced", "YOLO", "Anxious about it", "Don't think about it"]
    },
    {
      question: "What's my hosting style?",
      fakeOptions: ["Love hosting", "Small groups only", "Prefer being a guest", "Potluck style", "Elaborate planning", "Never host"]
    },
    {
      question: "What's my gift-giving style?",
      fakeOptions: ["Thoughtful and personal", "Expensive", "Handmade", "Experiences", "Practical", "Last minute", "Gift cards"]
    },
    {
      question: "What's my ideal anniversary celebration?",
      fakeOptions: ["Recreate first date", "Fancy dinner", "Weekend getaway", "Stay in", "Adventure", "Surprise me", "Low key"]
    },
    {
      question: "How do I show I'm upset?",
      fakeOptions: ["Say it directly", "Get quiet", "Body language", "Sarcasm", "Leave the room", "Cry", "You'll know"]
    },
    {
      question: "What's my apology style?",
      fakeOptions: ["Immediate and verbal", "Written note", "Actions", "Gifts", "Physical affection", "Takes time", "Rarely apologize"]
    },
    {
      question: "What's my PDA comfort level?",
      fakeOptions: ["Love it", "Hand holding only", "Quick kisses ok", "Depends on setting", "Not comfortable", "All the PDA"]
    },
    {
      question: "What's my alone time need?",
      fakeOptions: ["Daily", "Few times a week", "Weekly", "Rarely", "Never", "Depends on stress level"]
    },
    {
      question: "What's my holiday preference?",
      fakeOptions: ["All out decorating", "Minimal effort", "Travel instead", "Family traditions", "Create new traditions", "Skip them"]
    },
    {
      question: "What's my social battery?",
      fakeOptions: ["Never runs out", "Good for hours", "2-3 hours max", "One hour max", "Already drained", "Depends on people"]
    },
    {
      question: "What's my ideal Sunday?",
      fakeOptions: ["Productive", "Lazy", "Adventurous", "Social", "Spiritual", "Meal prep", "Sports", "Family time"]
    },
    {
      question: "What's my love philosophy?",
      fakeOptions: ["Soulmates exist", "Love is a choice", "Multiple loves possible", "Love conquers all", "Practical partnership", "Still figuring it out"]
    },
    {
      question: "What's my ex policy?",
      fakeOptions: ["No contact", "Friends is fine", "Depends on the ex", "Social media only", "Complicated", "What ex?"]
    },

    // Dreams & Aspirations (25 questions)
    {
      question: "What's my dream job?",
      fakeOptions: ["CEO", "Artist", "Teacher", "Doctor", "Entrepreneur", "Writer", "Chef", "Athlete", "Influencer", "Philanthropist", "Already have it"]
    },
    {
      question: "What's my biggest life goal?",
      fakeOptions: ["Financial freedom", "Happy family", "Travel the world", "Make a difference", "Fame", "Inner peace", "Leave a legacy", "Have fun"]
    },
    {
      question: "What skill do I want to master?",
      fakeOptions: ["New language", "Instrument", "Cooking", "Public speaking", "Writing", "Art", "Sport", "Technology", "Dance"]
    },
    {
      question: "What's my dream home feature?",
      fakeOptions: ["Pool", "Home theater", "Big kitchen", "Library", "Gym", "Garden", "View", "Smart home", "Game room"]
    },
    {
      question: "What cause am I passionate about?",
      fakeOptions: ["Environment", "Education", "Animals", "Human rights", "Healthcare", "Poverty", "Arts", "Technology", "Mental health"]
    },
    {
      question: "What's my legacy goal?",
      fakeOptions: ["Raise good kids", "Write a book", "Start a charity", "Build a business", "Be remembered fondly", "Change the world", "Don't care about legacy"]
    },
    {
      question: "What age do I want to retire?",
      fakeOptions: ["ASAP", "50", "55", "60", "65", "70", "Never", "Already retired in spirit"]
    },
    {
      question: "What's my biggest regret?",
      fakeOptions: ["Not traveling more", "Not taking risks", "Lost relationships", "Career choices", "Not studying harder", "No regrets", "Too many to pick"]
    },
    {
      question: "What would I do with lottery winnings?",
      fakeOptions: ["Invest it all", "Buy a house", "Travel", "Help family", "Start a business", "Charity", "Quit my job", "Mix of everything"]
    },
    {
      question: "What's my dream car?",
      fakeOptions: ["Tesla", "Sports car", "Luxury SUV", "Classic car", "Truck", "Motorcycle", "Van life", "Don't care about cars"]
    },
    {
      question: "What language do I want to learn?",
      fakeOptions: ["Spanish", "French", "Italian", "Japanese", "Mandarin", "Sign language", "Multiple", "Happy with what I know"]
    },
    {
      question: "What's my fitness goal?",
      fakeOptions: ["Run a marathon", "Six pack", "Be healthy", "Gain muscle", "Lose weight", "Do a pull-up", "Flexibility", "No goals"]
    },
    {
      question: "What's on my bucket list?",
      fakeOptions: ["Skydiving", "See Northern Lights", "Write a book", "Learn an instrument", "Visit all continents", "Meet a celebrity", "Start a business"]
    },
    {
      question: "What's my ideal impact on the world?",
      fakeOptions: ["Inspire others", "Solve a problem", "Create beauty", "Educate", "Entertain", "Heal", "Build community", "Small acts of kindness"]
    },
    {
      question: "What hobby do I want to start?",
      fakeOptions: ["Photography", "Gardening", "Painting", "Woodworking", "Pottery", "Dancing", "Hiking", "Collecting something"]
    },
    {
      question: "What's my education goal?",
      fakeOptions: ["Master's degree", "PhD", "Trade certification", "Online courses", "Self-taught", "Done with school", "Life-long learner"]
    },
    {
      question: "Where do I see myself in 10 years?",
      fakeOptions: ["Same place but better", "Completely different life", "Running a business", "Different country", "With kids", "Retired early", "No idea"]
    },
    {
      question: "What's my creative outlet dream?",
      fakeOptions: ["Write a novel", "Record an album", "Paint masterpiece", "Stand-up comedy", "YouTube channel", "Podcast", "Photography exhibition"]
    },
    {
      question: "What adventure do I dream of?",
      fakeOptions: ["Climb a mountain", "Sail across ocean", "Road trip country", "Live abroad", "Backpack Europe", "Safari", "Space travel"]
    },
    {
      question: "What's my financial dream?",
      fakeOptions: ["Millionaire", "Debt free", "Passive income", "Own a home", "Financial security", "Help others", "Money doesn't matter"]
    },
    {
      question: "What tradition do I want to start?",
      fakeOptions: ["Annual trips", "Weekly dinners", "Holiday customs", "Monthly adventures", "Daily rituals", "Seasonal celebrations", "Random surprises"]
    },
    {
      question: "What fear do I want to conquer?",
      fakeOptions: ["Public speaking", "Heights", "Failure", "Rejection", "Being vulnerable", "Flying", "Water", "Being alone"]
    },
    {
      question: "What's my dream for us?",
      fakeOptions: ["Travel partners", "Business together", "Big family", "Grow old together", "Adventure buddies", "Power couple", "Simple happiness"]
    },
    {
      question: "What age was my favorite so far?",
      fakeOptions: ["Childhood", "Teens", "Early 20s", "Late 20s", "30s", "Current age", "Gets better each year", "Haven't hit it yet"]
    },
    {
      question: "What's my definition of success?",
      fakeOptions: ["Happiness", "Money", "Love", "Impact", "Freedom", "Balance", "Recognition", "Inner peace", "All of the above"]
    },

    // Memories & Experiences (25 questions)
    {
      question: "What's my favorite childhood memory?",
      fakeOptions: ["Family vacations", "Holidays", "Summer days", "School events", "Birthday parties", "Playing with friends", "Family dinners", "Special gift"]
    },
    {
      question: "What's my most embarrassing moment?",
      fakeOptions: ["Public speaking fail", "Fell in public", "Wrong person wave", "Wardrobe malfunction", "Said wrong thing", "School incident", "Work mistake"]
    },
    {
      question: "What's my proudest achievement?",
      fakeOptions: ["Graduation", "Job promotion", "Personal growth", "Helping someone", "Athletic achievement", "Creative project", "Overcoming fear", "Relationship"]
    },
    {
      question: "What's my favorite family tradition?",
      fakeOptions: ["Holiday dinners", "Game nights", "Vacations", "Birthday customs", "Sunday dinners", "Movie nights", "No traditions", "Creating new ones"]
    },
    {
      question: "What teacher impacted me most?",
      fakeOptions: ["Elementary", "Middle school", "High school", "College", "Coach", "Mentor", "Parent", "Life"]
    },
    {
      question: "What's my first job?",
      fakeOptions: ["Retail", "Food service", "Babysitting", "Office", "Camp counselor", "Family business", "Lawn care", "Haven't worked yet"]
    },
    {
      question: "What's my worst date story?",
      fakeOptions: ["Ghosted", "Awkward silence", "Wrong person showed", "Food poisoning", "Ex showed up", "Nothing in common", "Haven't had one"]
    },
    {
      question: "What's my best concert experience?",
      fakeOptions: ["Front row", "Met the artist", "Surprise guest", "First concert", "Festival", "Small venue", "With friends", "Haven't been"]
    },
    {
      question: "What's my favorite age?",
      fakeOptions: ["5", "10", "16", "18", "21", "25", "30", "Right now", "Changes daily"]
    },
    {
      question: "What's my biggest life lesson?",
      fakeOptions: ["Trust yourself", "People change", "Money isn't everything", "Family first", "Take risks", "Be kind", "Time heals", "Still learning"]
    },
    {
      question: "What's my favorite photo of us?",
      fakeOptions: ["First date", "Vacation", "Candid moment", "Formal event", "Silly one", "Most recent", "Haven't taken it yet"]
    },
    {
      question: "What's my comfort movie?",
      fakeOptions: ["Rom-com", "Disney", "Action", "Comedy", "Drama", "Horror", "Documentary", "Changes with mood"]
    },
    {
      question: "What's my karaoke song?",
      fakeOptions: ["Don't Stop Believin'", "Bohemian Rhapsody", "I Want It That Way", "Current hit", "Disney song", "Rap", "Ballad", "I don't karaoke"]
    },
    {
      question: "What's my go-to comfort food?",
      fakeOptions: ["Mac and cheese", "Pizza", "Ice cream", "Chocolate", "Soup", "Pasta", "Cookies", "Mom's cooking"]
    },
    {
      question: "What's my hidden talent?",
      fakeOptions: ["Singing", "Dancing", "Cooking", "Drawing", "Impressions", "Memory", "Sports", "Making people laugh", "Still hidden"]
    },
    {
      question: "What's my guilty pleasure TV show?",
      fakeOptions: ["Reality TV", "Dating shows", "True crime", "Cartoons", "Soap opera", "Competition shows", "Teen drama", "Don't have one"]
    },
    {
      question: "What's my drunk personality?",
      fakeOptions: ["Happy/giggly", "Affectionate", "Philosophical", "Sleepy", "Dancing machine", "Emotional", "Same as sober", "I don't drink"]
    },
    {
      question: "What's my favorite inside joke?",
      fakeOptions: ["Movie quote", "Shared experience", "Mispronunciation", "Nickname", "Funny incident", "Running gag", "Too many to pick"]
    },
    {
      question: "What's my worst habit?",
      fakeOptions: ["Nail biting", "Phone addiction", "Procrastination", "Messy", "Always late", "Interrupting", "Overthinking", "Snoring"]
    },
    {
      question: "What's my morning mood?",
      fakeOptions: ["Cheerful", "Grumpy", "Quiet", "Energetic", "Need coffee first", "Depends on sleep", "Not a morning person"]
    },
    {
      question: "What's my sick day activity?",
      fakeOptions: ["Sleep all day", "Movie marathon", "Complain", "Work anyway", "Video games", "Read", "Call mom", "Dramatic"]
    },
    {
      question: "What's my road rage level?",
      fakeOptions: ["Calm driver", "Mild frustration", "Yell in car", "Horn honker", "Gesture maker", "Speed demon", "Passenger only"]
    },
    {
      question: "What's my shower routine length?",
      fakeOptions: ["5 minutes", "10 minutes", "15 minutes", "20 minutes", "30+ minutes", "Depends on hurry", "Until hot water runs out"]
    },
    {
      question: "What's my texting style?",
      fakeOptions: ["Paragraphs", "Short responses", "Emoji heavy", "Voice messages", "Proper grammar", "All lowercase", "Takes forever to reply"]
    },
    {
      question: "What's my dream superpower?",
      fakeOptions: ["Flying", "Mind reading", "Time travel", "Invisibility", "Super strength", "Teleportation", "Healing", "Money generation"]
    }
  ],

  // Round 5: Intimate Knowledge - Deep personal understanding
  round5: [
    // Intimate Preferences (25 questions)
    {
      question: "What makes me feel most loved?",
      fakeOptions: ["Surprise gestures", "Deep conversations", "Physical affection", "Being listened to", "Shared experiences", "Little daily texts", "Being prioritized", "Genuine compliments", "Acts of service", "Quality time"]
    },
    {
      question: "What's my biggest insecurity?",
      fakeOptions: ["My appearance", "Intelligence", "Career success", "Social skills", "Past mistakes", "Future uncertainty", "Relationships", "Money", "Being enough"]
    },
    {
      question: "What's my dream job if money wasn't a factor?",
      fakeOptions: ["Travel blogger", "Chef", "Artist", "Teacher", "Musician", "Writer", "Photographer", "Animal rescuer", "Professional athlete", "Therapist", "Park ranger"]
    },
    {
      question: "What's one thing I can't live without?",
      fakeOptions: ["My phone", "Coffee", "Music", "Books", "Exercise", "Chocolate", "You", "My pet", "Social media", "Netflix", "Alone time"]
    },
    {
      question: "Where do I see us in 5 years?",
      fakeOptions: ["Married with kids", "Traveling the world", "Living abroad", "Building careers", "Starting a business", "House with a yard", "Same but stronger", "Adventure partners", "Growing family"]
    },
    {
      question: "What's my most attractive quality?",
      fakeOptions: ["My smile", "My humor", "My kindness", "My intelligence", "My confidence", "My loyalty", "My creativity", "My passion", "My eyes", "My ambition"]
    },
    {
      question: "What's my biggest relationship fear?",
      fakeOptions: ["Being cheated on", "Growing apart", "Losing myself", "Not being enough", "Repeating patterns", "Getting bored", "Being vulnerable", "Commitment", "Being left"]
    },
    {
      question: "What's my ideal morning routine?",
      fakeOptions: ["Early workout", "Slow coffee", "Meditation", "Quick and efficient", "Cuddles first", "Check phone immediately", "Big breakfast", "Straight to shower", "Different each day"]
    },
    {
      question: "What turns me on most?",
      fakeOptions: ["Intelligence", "Humor", "Confidence", "Kindness", "Adventure", "Mystery", "Talent", "Vulnerability", "Ambition", "Spontaneity"]
    },
    {
      question: "What's my deepest desire?",
      fakeOptions: ["True connection", "Freedom", "Success", "Peace", "Adventure", "Family", "Recognition", "Security", "Purpose", "To be understood"]
    },
    {
      question: "How do I want to be remembered?",
      fakeOptions: ["Kind", "Funny", "Successful", "Loving", "Brave", "Creative", "Helpful", "Authentic", "Inspiring", "Good parent/partner"]
    },
    {
      question: "What's my spiritual belief?",
      fakeOptions: ["Religious", "Spiritual not religious", "Agnostic", "Atheist", "Universe/energy", "Still figuring out", "Buddhist philosophy", "Mix of beliefs"]
    },
    {
      question: "What's my biggest life change wish?",
      fakeOptions: ["Career change", "Move somewhere new", "Get healthier", "More confidence", "Better habits", "More money", "Different past", "Nothing major"]
    },
    {
      question: "What's my ideal work environment?",
      fakeOptions: ["Remote", "Office", "Outdoors", "Home", "Coffee shops", "Coworking", "Varies", "Anywhere but here", "My own business"]
    },
    {
      question: "What's my mental health priority?",
      fakeOptions: ["Therapy", "Meditation", "Exercise", "Boundaries", "Self-care", "Medication", "Support system", "Still working on it"]
    },
    {
      question: "What's my parenting philosophy?",
      fakeOptions: ["Gentle parenting", "Structure and rules", "Friend first", "Lead by example", "Figure it out", "Like my parents", "Opposite of my parents", "No kids"]
    },
    {
      question: "What's my money priority?",
      fakeOptions: ["Experiences", "Security", "Things", "Helping others", "Investment", "Freedom", "Status", "Don't care much"]
    },
    {
      question: "What's my communication need?",
      fakeOptions: ["Daily check-ins", "Deep talks", "Space when upset", "Physical presence", "Written words", "Actions over words", "Constant contact", "Quality over quantity"]
    },
    {
      question: "What's my ideal vacation length?",
      fakeOptions: ["Long weekend", "One week", "Two weeks", "Month or more", "Forever", "Day trips only", "Varies", "Staycations"]
    },
    {
      question: "What's my dealbreaker habit?",
      fakeOptions: ["Smoking", "Excessive drinking", "Drugs", "Lying", "Laziness", "No ambition", "Poor hygiene", "Rudeness to others"]
    },
    {
      question: "What's my therapy topic?",
      fakeOptions: ["Family issues", "Self-worth", "Anxiety", "Past trauma", "Relationships", "Work stress", "Everything", "Don't do therapy"]
    },
    {
      question: "What's my boundary struggle?",
      fakeOptions: ["Saying no", "Work-life balance", "Family", "Friends", "Time", "Emotional", "Physical", "Getting better"]
    },
    {
      question: "What's my self-care essential?",
      fakeOptions: ["Alone time", "Exercise", "Sleep", "Good food", "Nature", "Creative time", "Social time", "Spa day"]
    },
    {
      question: "What's my childhood wound?",
      fakeOptions: ["Not feeling heard", "Perfectionism", "Abandonment", "Not good enough", "Too much pressure", "Comparison", "Mostly healed", "Still processing"]
    },
    {
      question: "What's my growth edge?",
      fakeOptions: ["Vulnerability", "Patience", "Self-love", "Boundaries", "Communication", "Trust", "Letting go", "Being present"]
    },

    // Future & Commitment (25 questions)
    {
      question: "When do I want to get married?",
      fakeOptions: ["ASAP", "Within a year", "2-3 years", "5 years", "When it feels right", "Never", "Already planning", "Not sure"]
    },
    {
      question: "Where should we live?",
      fakeOptions: ["City", "Suburbs", "Beach", "Mountains", "Abroad", "Anywhere together", "Multiple places", "Where jobs take us"]
    },
    {
      question: "What's my ideal proposal?",
      fakeOptions: ["Public spectacle", "Private intimate", "During travel", "With family", "Surprise", "I want to propose", "Discuss together", "Don't care"]
    },
    {
      question: "What pet should we get?",
      fakeOptions: ["Dog", "Cat", "Both", "Fish", "None", "All of them", "Exotic", "Plant parent only"]
    },
    {
      question: "What's our couple goal?",
      fakeOptions: ["Travel everywhere", "Build empire", "Raise family", "Stay in love", "Adventure partners", "Grow together", "Support dreams", "Have fun"]
    },
    {
      question: "What tradition should we start?",
      fakeOptions: ["Weekly dates", "Annual trips", "Sunday dinners", "Game nights", "Monthly adventures", "Daily gratitude", "Seasonal celebrations"]
    },
    {
      question: "What's my wedding size preference?",
      fakeOptions: ["Just us", "Small (under 50)", "Medium (50-150)", "Large (150+)", "Destination", "Multiple celebrations", "City hall"]
    },
    {
      question: "How should we handle finances?",
      fakeOptions: ["Combine everything", "Keep separate", "Joint for bills", "One manages", "Financial advisor", "Figure it out", "Prenup"]
    },
    {
      question: "What's my in-law boundary?",
      fakeOptions: ["Weekly visits", "Monthly", "Holidays only", "Open door", "Clear boundaries", "Live with us", "Different country please"]
    },
    {
      question: "What's our first big purchase?",
      fakeOptions: ["House", "Car", "Vacation", "Investment", "Business", "Renovation", "Land", "Boat"]
    },
    {
      question: "Kids timeline?",
      fakeOptions: ["Already trying", "Within 2 years", "3-5 years", "5+ years", "Never", "Adopt", "Foster", "Not decided"]
    },
    {
      question: "What's my career vs family priority?",
      fakeOptions: ["Career first", "Family first", "Equal balance", "Depends on phase", "Family is career", "Neither", "Still figuring out"]
    },
    {
      question: "How many homes should we have?",
      fakeOptions: ["One perfect home", "Main plus vacation", "Multiple properties", "Tiny home", "RV life", "International homes", "Rent forever"]
    },
    {
      question: "What's our retirement plan?",
      fakeOptions: ["Beach life", "Mountain cabin", "RV travel", "Near grandkids", "Abroad", "Never retire", "Commune", "Separate retirements"]
    },
    {
      question: "Anniversary celebration style?",
      fakeOptions: ["Big trips", "Intimate dinners", "Recreate memories", "New adventures", "Quiet together", "Big parties", "Different each year"]
    },
    {
      question: "What's our couple superpower?",
      fakeOptions: ["Communication", "Humor", "Adventure", "Support", "Passion", "Stability", "Growth", "Fun"]
    },
    {
      question: "How do we handle hard times?",
      fakeOptions: ["Talk through", "Give space", "Physical comfort", "Distraction", "Problem solve", "Therapy", "Family support", "Faith"]
    },
    {
      question: "What's our deal breaker?",
      fakeOptions: ["Infidelity", "Dishonesty", "Different life goals", "No growth", "Addiction", "Abuse", "Different values", "Nothing"]
    },
    {
      question: "How should we grow together?",
      fakeOptions: ["Travel", "Learn together", "Separate hobbies", "Shared goals", "Challenge each other", "Stay same", "Therapy", "Adventures"]
    },
    {
      question: "What's our love story theme?",
      fakeOptions: ["Best friends", "Soulmates", "Adventure partners", "Opposites attract", "Slow burn", "Instant connection", "Second chance", "Meant to be"]
    },
    {
      question: "How do we stay connected?",
      fakeOptions: ["Daily rituals", "Weekly dates", "Deep talks", "Physical touch", "Shared hobbies", "Little notes", "Quality time", "All of above"]
    },
    {
      question: "What's our biggest strength?",
      fakeOptions: ["Trust", "Communication", "Fun", "Support", "Chemistry", "Friendship", "Growth", "Acceptance"]
    },
    {
      question: "What should we experience together?",
      fakeOptions: ["Every continent", "Build something", "Learn language", "Start business", "Volunteer", "Create art", "Have kids", "Everything"]
    },
    {
      question: "What's our old age vision?",
      fakeOptions: ["Porch rocking", "Still adventuring", "Surrounded by family", "Beach walks", "Garden together", "Travel RV", "Young at heart"]
    },
    {
      question: "What legacy should we leave?",
      fakeOptions: ["Love story", "Family", "Business", "Charity", "Art", "Adventures", "Values", "Memories"]
    },

    // Deep Personal (25 questions)
    {
      question: "What's my inner child need?",
      fakeOptions: ["Play more", "Feel safe", "Be heard", "Have fun", "Be accepted", "Feel special", "Adventure", "Healing"]
    },
    {
      question: "What's my shadow side?",
      fakeOptions: ["Jealousy", "Anger", "Insecurity", "Control", "Fear", "Perfectionism", "People pleasing", "Avoidance"]
    },
    {
      question: "What's my attachment style?",
      fakeOptions: ["Secure", "Anxious", "Avoidant", "Disorganized", "Working on it", "Depends on partner", "Don't know"]
    },
    {
      question: "What's my trauma response?",
      fakeOptions: ["Fight", "Flight", "Freeze", "Fawn", "All of them", "Working through it", "Don't have trauma"]
    },
    {
      question: "What's my core wound?",
      fakeOptions: ["Abandonment", "Rejection", "Not enough", "Too much", "Unseen", "Unheard", "Unloved", "Healing"]
    },
    {
      question: "What's my ego defense?",
      fakeOptions: ["Humor", "Intellectualizing", "Denial", "Projection", "Perfectionism", "People pleasing", "Withdrawal", "Aggression"]
    },
    {
      question: "What's my soul's purpose?",
      fakeOptions: ["Help others", "Create beauty", "Teach", "Heal", "Connect", "Lead", "Inspire", "Still discovering"]
    },
    {
      question: "What's my biggest transformation?",
      fakeOptions: ["Self-love", "Confidence", "Boundaries", "Authenticity", "Forgiveness", "Trust", "Vulnerability", "In progress"]
    },
    {
      question: "What's my intuition telling me?",
      fakeOptions: ["Trust more", "Slow down", "Take action", "Be patient", "Let go", "Speak up", "Follow heart", "Listen more"]
    },
    {
      question: "What's my sacred practice?",
      fakeOptions: ["Meditation", "Prayer", "Nature", "Movement", "Art", "Music", "Writing", "Connection"]
    },
    {
      question: "What's my healing journey?",
      fakeOptions: ["Self-acceptance", "Forgiveness", "Trust", "Boundaries", "Inner child", "Relationships", "Body image", "All of it"]
    },
    {
      question: "What's my biggest breakthrough?",
      fakeOptions: ["Self-worth", "Letting go", "Speaking truth", "Setting boundaries", "Accepting love", "Being vulnerable", "Haven't had it yet"]
    },
    {
      question: "What's my recurring dream theme?",
      fakeOptions: ["Flying", "Being chased", "Falling", "Lost", "Naked in public", "Back in school", "Death", "Don't remember dreams"]
    },
    {
      question: "What's my energy type?",
      fakeOptions: ["Giver", "Receiver", "Balanced", "Depends", "Projector", "Generator", "Manifestor", "Don't know"]
    },
    {
      question: "What's my creative block?",
      fakeOptions: ["Perfectionism", "Fear", "Time", "Energy", "Comparison", "Self-doubt", "No blocks", "Everything"]
    },
    {
      question: "What's my body wisdom?",
      fakeOptions: ["Rest more", "Move more", "Eat better", "Less stress", "More pleasure", "Trust it", "Listen closer", "Healing"]
    },
    {
      question: "What's my emotional pattern?",
      fakeOptions: ["Suppress", "Express", "Process alone", "Need support", "Intellectualize", "Feel deeply", "Avoid", "Working on it"]
    },
    {
      question: "What's my masculine/feminine balance?",
      fakeOptions: ["Balanced", "More masculine", "More feminine", "Depends on day", "Integrating both", "Fluid", "Don't believe in it"]
    },
    {
      question: "What's my biggest release needed?",
      fakeOptions: ["Control", "Past hurt", "Expectations", "Fear", "Anger", "Shame", "Guilt", "Old identity"]
    },
    {
      question: "What's my soul age?",
      fakeOptions: ["Old soul", "Young soul", "Ancient", "New", "Timeless", "Depends", "Don't know", "Mix"]
    },
    {
      question: "What's my karmic lesson?",
      fakeOptions: ["Self-love", "Boundaries", "Trust", "Patience", "Compassion", "Forgiveness", "Authenticity", "Don't believe in karma"]
    },
    {
      question: "What's my heart's deepest wish?",
      fakeOptions: ["To be seen", "To be loved", "To be free", "To be safe", "To belong", "To matter", "To create", "To heal"]
    },
    {
      question: "What's my soul calling?",
      fakeOptions: ["Service", "Art", "Leadership", "Healing", "Teaching", "Connection", "Innovation", "Still listening"]
    },
    {
      question: "What's my biggest integration?",
      fakeOptions: ["Mind and heart", "Masculine feminine", "Light and shadow", "Human and soul", "Past and present", "Work in progress"]
    },
    {
      question: "What am I ready to receive?",
      fakeOptions: ["Love", "Abundance", "Peace", "Joy", "Success", "Support", "All good things", "Working on receiving"]
    },

    // Ultimate Understanding (25 questions)
    {
      question: "What's my unspoken need?",
      fakeOptions: ["Reassurance", "Space", "Adventure", "Stability", "Excitement", "Understanding", "Acceptance", "Growth"]
    },
    {
      question: "What's my secret dream?",
      fakeOptions: ["Fame", "Write a book", "Change careers", "Move away", "Have a farm", "Be an artist", "Start over", "Tell everyone off"]
    },
    {
      question: "What's my relationship superpower?",
      fakeOptions: ["Empathy", "Loyalty", "Communication", "Humor", "Passion", "Support", "Growth mindset", "Acceptance"]
    },
    {
      question: "What's my biggest sacrifice for us?",
      fakeOptions: ["Career", "Location", "Independence", "Other options", "Time", "Money", "Dreams", "Nothing yet"]
    },
    {
      question: "What memory defines us?",
      fakeOptions: ["First meeting", "First kiss", "Big trip", "Hard time", "Laughing fit", "Deep talk", "Recent moment", "All of them"]
    },
    {
      question: "What's my love language ranking?",
      fakeOptions: ["Touch first", "Words first", "Time first", "Acts first", "Gifts last", "All equal", "Depends on day"]
    },
    {
      question: "What habit should I change?",
      fakeOptions: ["Phone use", "Procrastination", "Negativity", "Messiness", "Communication", "Work balance", "Self-care", "Nothing"]
    },
    {
      question: "What's my trust level?",
      fakeOptions: ["100%", "90%", "80%", "Building", "Depends", "Issues to work on", "Complete trust"]
    },
    {
      question: "What's my jealousy trigger?",
      fakeOptions: ["Exes", "Attention to others", "Work relationships", "Social media", "Nothing", "Everything", "Working on it"]
    },
    {
      question: "What's my intimacy need?",
      fakeOptions: ["Daily", "Often", "Quality over quantity", "Emotional first", "Physical first", "Both equal", "Varies"]
    },
    {
      question: "What's my conflict style?",
      fakeOptions: ["Address immediately", "Need space first", "Avoid", "Get emotional", "Stay logical", "Compromise", "Win at all costs"]
    },
    {
      question: "What's my forgiveness speed?",
      fakeOptions: ["Instantly", "Quick", "Takes time", "Hold grudges", "Depends on issue", "Forgive not forget", "Working on it"]
    },
    {
      question: "What's my emotional trigger?",
      fakeOptions: ["Being ignored", "Criticism", "Dishonesty", "Disrespect", "Comparison", "Feeling controlled", "Not being heard"]
    },
    {
      question: "What's my support need?",
      fakeOptions: ["Listen only", "Give advice", "Physical comfort", "Space", "Distraction", "Problem solve", "Just be there"]
    },
    {
      question: "What's my celebration style?",
      fakeOptions: ["Big party", "Intimate dinner", "Adventure", "Quiet acknowledgment", "Social media", "Surprise me", "No fuss"]
    },
    {
      question: "What's my comfort need when sick?",
      fakeOptions: ["Constant care", "Leave me alone", "Check on me", "Medicine and soup", "Cuddles", "Entertainment", "Drama queen mode"]
    },
    {
      question: "What's my money anxiety?",
      fakeOptions: ["Not enough", "Spending guilt", "Future security", "Comparison", "No anxiety", "Partner's spending", "Everything"]
    },
    {
      question: "What's my family integration wish?",
      fakeOptions: ["Fully blended", "Separate but friendly", "Holidays only", "Chosen family", "Work in progress", "Keep distance"]
    },
    {
      question: "What's my aging fear?",
      fakeOptions: ["Looking old", "Being alone", "Health issues", "Irrelevance", "Death", "No fears", "Missing out", "Dependence"]
    },
    {
      question: "What's my legacy wish?",
      fakeOptions: ["Our love story", "Children", "Impact", "Memories", "Wisdom", "Laughter", "Changed lives", "Don't care"]
    },
    {
      question: "What's my daily need from you?",
      fakeOptions: ["Good morning kiss", "Check in text", "Quality time", "Help with tasks", "Compliment", "Laughter", "All of above"]
    },
    {
      question: "What's my breakup recovery time?",
      fakeOptions: ["Never fully recover", "Years", "Months", "Weeks", "Days", "Not applicable to us", "Depends"]
    },
    {
      question: "What's my ultimate relationship goal?",
      fakeOptions: ["Grow old together", "Never stop laughing", "Deep understanding", "Adventure partners", "Best friends", "Passionate forever", "Peace together"]
    },
    {
      question: "What would I never tell you?",
      fakeOptions: ["Past secret", "True feelings", "Fear", "Dream", "Doubt", "Nothing - I tell all", "Fantasy", "Insecurity"]
    },
    {
      question: "What's my final answer?",
      fakeOptions: ["You", "Us", "Forever", "Yes", "Always", "Never letting go", "Till death", "And beyond"]
    }
  ]
};

// Function to get random fake options (returns 3 options)
function getRandomFakeOptions(fakeOptions, count = 3) {
  const shuffled = [...fakeOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to shuffle array (for mixing real answer with fakes)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}