// Trivia Questions - 9th grade level general knowledge
// Each question has the question text, 4 options, and the correct answer index (0-3)
const triviaQuestions = {
  // Round 2: Fun & Light Trivia
  round2: [
    // Pop Culture & Entertainment (20 questions)
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correct: 1
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correct: 1
    },
    {
      question: "In what year did the Titanic sink?",
      options: ["1910", "1912", "1914", "1916"],
      correct: 1
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correct: 3
    },
    {
      question: "Which Disney movie features the song 'Let It Go'?",
      options: ["Moana", "Tangled", "Frozen", "Brave"],
      correct: 2
    },
    {
      question: "What is the most spoken language in the world?",
      options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
      correct: 2
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1
    },
    {
      question: "Which social media platform has a bird as its logo?",
      options: ["Facebook", "Instagram", "Twitter/X", "TikTok"],
      correct: 2
    },
    {
      question: "What does 'www' stand for?",
      options: ["World Wide Web", "World Wild Web", "Wide World Web", "Web World Wide"],
      correct: 0
    },
    {
      question: "Which superhero is known as the 'Man of Steel'?",
      options: ["Iron Man", "Captain America", "Superman", "Thor"],
      correct: 2
    },
    {
      question: "What is the most popular sport in the world?",
      options: ["Basketball", "Soccer/Football", "Tennis", "Baseball"],
      correct: 1
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    },
    {
      question: "What year was the iPhone first released?",
      options: ["2005", "2007", "2009", "2011"],
      correct: 1
    },
    {
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correct: 1
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
      correct: 1
    },
    {
      question: "Which country invented pizza?",
      options: ["Greece", "United States", "Italy", "France"],
      correct: 2
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Granite"],
      correct: 2
    },
    {
      question: "How many strings does a standard guitar have?",
      options: ["4", "5", "6", "7"],
      correct: 2
    },
    {
      question: "What does NASA stand for?",
      options: ["National Aeronautics and Space Administration", "North American Space Agency", "National Air and Space Association", "New Aeronautics and Space Administration"],
      correct: 0
    },

    // Science & Nature (20 questions)
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "H2"],
      correct: 0
    },
    {
      question: "How many bones are in the human body?",
      options: ["186", "206", "226", "246"],
      correct: 1
    },
    {
      question: "What is the speed of light?",
      options: ["186,000 miles per second", "286,000 miles per second", "386,000 miles per second", "486,000 miles per second"],
      correct: 0
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 2
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Liver", "Skin"],
      correct: 3
    },
    {
      question: "How long does Earth take to orbit the Sun?",
      options: ["30 days", "180 days", "365 days", "400 days"],
      correct: 2
    },
    {
      question: "What type of animal is a Komodo dragon?",
      options: ["Snake", "Lizard", "Crocodile", "Dragon"],
      correct: 1
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correct: 1
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      correct: 2
    },
    {
      question: "What do you call a baby kangaroo?",
      options: ["Pup", "Cub", "Joey", "Kit"],
      correct: 2
    },
    {
      question: "How many chambers does a human heart have?",
      options: ["2", "3", "4", "5"],
      correct: 2
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Geology", "Seismology", "Meteorology", "Archaeology"],
      correct: 1
    },
    {
      question: "Which vitamin is produced when skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correct: 3
    },
    {
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      correct: 2
    },
    {
      question: "How many teeth does an adult human have?",
      options: ["28", "30", "32", "34"],
      correct: 2
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Organ"],
      correct: 2
    },
    {
      question: "Which animal can change its color to match its surroundings?",
      options: ["Chameleon", "Zebra", "Peacock", "Flamingo"],
      correct: 0
    },
    {
      question: "What percentage of the Earth's surface is water?",
      options: ["51%", "61%", "71%", "81%"],
      correct: 2
    },
    {
      question: "What do you call animals that eat both plants and meat?",
      options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
      correct: 2
    },
    {
      question: "How many minutes are in a full week?",
      options: ["10,080", "11,080", "12,080", "13,080"],
      correct: 0
    },

    // History & Geography (20 questions)
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      correct: 1
    },
    {
      question: "In which country would you find the Eiffel Tower?",
      options: ["Italy", "Spain", "France", "Germany"],
      correct: 2
    },
    {
      question: "What year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correct: 2
    },
    {
      question: "Which ancient wonder of the world still stands today?",
      options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
      correct: 1
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correct: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correct: 1
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Korea", "Thailand"],
      correct: 1
    },
    {
      question: "How many states are in the United States?",
      options: ["48", "49", "50", "51"],
      correct: 2
    },
    {
      question: "What is the longest wall in the world?",
      options: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
      correct: 1
    },
    {
      question: "Which explorer discovered America in 1492?",
      options: ["Marco Polo", "Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama"],
      correct: 2
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correct: 2
    },
    {
      question: "Which country gave the Statue of Liberty to the USA?",
      options: ["England", "France", "Italy", "Spain"],
      correct: 1
    },
    {
      question: "What is the smallest continent?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      correct: 1
    },
    {
      question: "Who was known as the 'King of Rock and Roll'?",
      options: ["Michael Jackson", "Elvis Presley", "John Lennon", "Bob Dylan"],
      correct: 1
    },
    {
      question: "Which river flows through London?",
      options: ["Seine", "Danube", "Thames", "Rhine"],
      correct: 2
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Dollar", "Pound", "Franc"],
      correct: 2
    },
    {
      question: "In which city would you find the Colosseum?",
      options: ["Athens", "Rome", "Paris", "London"],
      correct: 1
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
      correct: 3
    },
    {
      question: "Which country has the most people?",
      options: ["India", "United States", "China", "Indonesia"],
      correct: 2
    },

    // Food & Culture (20 questions)
    {
      question: "What spice is derived from the Crocus flower?",
      options: ["Vanilla", "Saffron", "Cinnamon", "Paprika"],
      correct: 1
    },
    {
      question: "Which country is famous for inventing chocolate?",
      options: ["Switzerland", "Belgium", "Mexico", "France"],
      correct: 2
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Onion", "Avocado", "Pepper"],
      correct: 2
    },
    {
      question: "Which fruit is known as the 'king of fruits'?",
      options: ["Apple", "Mango", "Orange", "Durian"],
      correct: 3
    },
    {
      question: "What type of pastry is used to make profiteroles?",
      options: ["Puff pastry", "Choux pastry", "Filo pastry", "Shortcrust"],
      correct: 1
    },
    {
      question: "Which country drinks the most coffee per capita?",
      options: ["USA", "Italy", "Finland", "Brazil"],
      correct: 2
    },
    {
      question: "What is bubble tea also known as?",
      options: ["Chai tea", "Green tea", "Boba tea", "Oolong tea"],
      correct: 2
    },
    {
      question: "Which vegetable is used to make traditional kimchi?",
      options: ["Cucumber", "Cabbage", "Carrot", "Radish"],
      correct: 1
    },
    {
      question: "What grain is risotto made from?",
      options: ["Wheat", "Barley", "Rice", "Quinoa"],
      correct: 2
    },
    {
      question: "Which country invented French fries?",
      options: ["France", "Belgium", "Netherlands", "Germany"],
      correct: 1
    },
    {
      question: "What is the most consumed beverage in the world after water?",
      options: ["Coffee", "Tea", "Milk", "Juice"],
      correct: 1
    },
    {
      question: "What nut is used to make marzipan?",
      options: ["Walnut", "Cashew", "Almond", "Peanut"],
      correct: 2
    },
    {
      question: "Which cheese is traditionally used on pizza?",
      options: ["Cheddar", "Mozzarella", "Swiss", "Gouda"],
      correct: 1
    },
    {
      question: "What is the hottest chili pepper in the world?",
      options: ["Ghost Pepper", "Habanero", "Carolina Reaper", "Jalapeño"],
      correct: 2
    },
    {
      question: "Which herb is known as cilantro in the US?",
      options: ["Basil", "Parsley", "Coriander", "Mint"],
      correct: 2
    },
    {
      question: "What food is traditionally eaten on Thanksgiving?",
      options: ["Ham", "Chicken", "Turkey", "Duck"],
      correct: 2
    },
    {
      question: "Which fruit has its seeds on the outside?",
      options: ["Kiwi", "Strawberry", "Raspberry", "Blueberry"],
      correct: 1
    },
    {
      question: "What is the most popular ice cream flavor?",
      options: ["Chocolate", "Vanilla", "Strawberry", "Mint"],
      correct: 1
    },
    {
      question: "Which country produces the most wine?",
      options: ["France", "Italy", "Spain", "USA"],
      correct: 1
    },
    {
      question: "What vitamin is orange juice high in?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correct: 2
    },

    // Sports & Games (20 questions)
    {
      question: "How many players are on a basketball team?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
      correct: 2
    },
    {
      question: "How often are the Summer Olympics held?",
      options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
      correct: 2
    },
    {
      question: "What is the maximum score in ten-pin bowling?",
      options: ["200", "250", "300", "350"],
      correct: 2
    },
    {
      question: "In which sport is the Stanley Cup awarded?",
      options: ["Baseball", "Basketball", "Football", "Hockey"],
      correct: 3
    },
    {
      question: "How many holes are on a standard golf course?",
      options: ["9", "12", "18", "24"],
      correct: 2
    },
    {
      question: "What color belt is the highest in karate?",
      options: ["Red", "Black", "White", "Brown"],
      correct: 1
    },
    {
      question: "Which country invented volleyball?",
      options: ["Brazil", "USA", "Russia", "Japan"],
      correct: 1
    },
    {
      question: "How long is a marathon?",
      options: ["26.2 miles", "24.2 miles", "28.2 miles", "30.2 miles"],
      correct: 0
    },
    {
      question: "In chess, which piece can only move diagonally?",
      options: ["Rook", "Bishop", "Knight", "Queen"],
      correct: 1
    },
    {
      question: "What sport is known as 'the beautiful game'?",
      options: ["Tennis", "Golf", "Soccer/Football", "Cricket"],
      correct: 2
    },
    {
      question: "How many rings are on the Olympic flag?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "In baseball, how many strikes make an out?",
      options: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Tennis", "Badminton", "Squash", "Ping Pong"],
      correct: 1
    },
    {
      question: "What is the most watched sporting event in the world?",
      options: ["Super Bowl", "Olympics", "FIFA World Cup", "NBA Finals"],
      correct: 2
    },
    {
      question: "How many minutes is a soccer game?",
      options: ["60", "80", "90", "100"],
      correct: 2
    },
    {
      question: "In tennis, what is a score of zero called?",
      options: ["Nil", "Zero", "Love", "Nought"],
      correct: 2
    },
    {
      question: "Which sport is played at Wimbledon?",
      options: ["Cricket", "Tennis", "Golf", "Rugby"],
      correct: 1
    },
    {
      question: "How many players are on a volleyball team?",
      options: ["4", "5", "6", "7"],
      correct: 2
    },
    {
      question: "What is the national sport of Canada?",
      options: ["Hockey", "Lacrosse", "Curling", "Basketball"],
      correct: 1
    }
  ],

  // Round 5: Moderate Trivia
  round5: [
    // Literature & Language (25 questions)
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      correct: 1
    },
    {
      question: "What does the acronym 'ASAP' stand for?",
      options: ["As Soon As Possible", "As Simple As Possible", "As Sure As Possible", "As Safe As Possible"],
      correct: 0
    },
    {
      question: "In which book series would you find Hogwarts?",
      options: ["Lord of the Rings", "Harry Potter", "Chronicles of Narnia", "Percy Jackson"],
      correct: 1
    },
    {
      question: "What is the most common letter in the English language?",
      options: ["A", "E", "I", "O"],
      correct: 1
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
      correct: 1
    },
    {
      question: "What language has the most native speakers?",
      options: ["English", "Spanish", "Mandarin", "Hindi"],
      correct: 2
    },
    {
      question: "What is a haiku?",
      options: ["A Japanese poem", "A Chinese dance", "A Korean dish", "An Indian song"],
      correct: 0
    },
    {
      question: "Which Shakespeare play features the character Hamlet?",
      options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
      correct: 2
    },
    {
      question: "What does 'www' stand for in a website address?",
      options: ["World Wide Web", "World Web Wide", "Web Wide World", "Wide World Web"],
      correct: 0
    },
    {
      question: "In Greek mythology, who is the king of the gods?",
      options: ["Apollo", "Zeus", "Poseidon", "Hades"],
      correct: 1
    },
    {
      question: "What is the study of words and their meanings called?",
      options: ["Etymology", "Entomology", "Lexicology", "Phonology"],
      correct: 2
    },
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
      correct: 0
    },
    {
      question: "What punctuation mark is also called a 'full stop'?",
      options: ["Comma", "Period", "Semicolon", "Colon"],
      correct: 1
    },
    {
      question: "In which country did the Renaissance begin?",
      options: ["France", "Spain", "Italy", "England"],
      correct: 2
    },
    {
      question: "What is the longest word in English without a vowel?",
      options: ["Cry", "Fly", "Rhythm", "Myth"],
      correct: 2
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "Mary Shelley"],
      correct: 1
    },
    {
      question: "What is alliteration?",
      options: ["Rhyming words", "Opposite meanings", "Repeating sounds", "Silent letters"],
      correct: 2
    },
    {
      question: "Which language is written from right to left?",
      options: ["Spanish", "French", "Arabic", "Russian"],
      correct: 2
    },
    {
      question: "What does 'LOL' stand for?",
      options: ["Lots of Love", "Laugh Out Loud", "Little Old Lady", "Length of Line"],
      correct: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Truman Capote", "John Grisham", "Stephen King"],
      correct: 0
    },
    {
      question: "What is a synonym?",
      options: ["Opposite word", "Similar word", "Rhyming word", "Made-up word"],
      correct: 1
    },
    {
      question: "In poetry, how many lines are in a sonnet?",
      options: ["12", "14", "16", "18"],
      correct: 1
    },
    {
      question: "What does 'FAQ' stand for?",
      options: ["Fast And Quick", "Frequently Asked Questions", "First Aid Questions", "Find All Queries"],
      correct: 1
    },
    {
      question: "Which famous detective was created by Arthur Conan Doyle?",
      options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Sam Spade"],
      correct: 1
    },
    {
      question: "What is the fear of long words called?",
      options: ["Logophobia", "Verbophobia", "Hippopotomonstrosesquippedaliophobia", "Lexicophobia"],
      correct: 2
    },

    // Math & Logic (25 questions)
    {
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      correct: 2
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      question: "What is the Roman numeral for 50?",
      options: ["L", "C", "D", "M"],
      correct: 0
    },
    {
      question: "What comes next: 2, 4, 8, 16, __?",
      options: ["20", "24", "28", "32"],
      correct: 3
    },
    {
      question: "How many degrees are in a circle?",
      options: ["180", "270", "360", "450"],
      correct: 2
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correct: 2
    },
    {
      question: "If you flip a coin, what are the odds of getting heads?",
      options: ["25%", "33%", "50%", "75%"],
      correct: 2
    },
    {
      question: "What is 7 x 8?",
      options: ["54", "56", "58", "60"],
      correct: 1
    },
    {
      question: "How many seconds are in an hour?",
      options: ["3,000", "3,300", "3,600", "3,900"],
      correct: 2
    },
    {
      question: "What is the value of Pi to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      correct: 1
    },
    {
      question: "What type of angle is exactly 90 degrees?",
      options: ["Acute", "Right", "Obtuse", "Straight"],
      correct: 1
    },
    {
      question: "How many millimeters are in a centimeter?",
      options: ["10", "100", "1,000", "10,000"],
      correct: 0
    },
    {
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correct: 1
    },
    {
      question: "What is the next prime number after 7?",
      options: ["9", "10", "11", "13"],
      correct: 2
    },
    {
      question: "How many faces does a cube have?",
      options: ["4", "5", "6", "8"],
      correct: 2
    },
    {
      question: "What is 1,000,000 written in scientific notation?",
      options: ["10^5", "10^6", "10^7", "10^8"],
      correct: 1
    },
    {
      question: "If a triangle has sides of 3, 4, and 5, what type is it?",
      options: ["Equilateral", "Isosceles", "Right", "Obtuse"],
      correct: 2
    },
    {
      question: "What is the median of: 2, 5, 7, 9, 12?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "How many zeros are in one billion?",
      options: ["6", "7", "8", "9"],
      correct: 3
    },
    {
      question: "What is the perimeter of a square with sides of 5cm?",
      options: ["15cm", "20cm", "25cm", "30cm"],
      correct: 1
    },
    {
      question: "What is 3/4 as a percentage?",
      options: ["60%", "70%", "75%", "80%"],
      correct: 2
    },
    {
      question: "How many minutes are in 2.5 hours?",
      options: ["120", "130", "140", "150"],
      correct: 3
    },
    {
      question: "What is the area of a rectangle 10m long and 5m wide?",
      options: ["15m²", "30m²", "50m²", "100m²"],
      correct: 2
    },
    {
      question: "What number is neither positive nor negative?",
      options: ["1", "0", "-1", "∞"],
      correct: 1
    },
    {
      question: "If you roll two dice, what's the most likely sum?",
      options: ["6", "7", "8", "9"],
      correct: 1
    },

    // Technology & Modern Life (25 questions)
    {
      question: "What does 'USB' stand for?",
      options: ["Universal Serial Bus", "United System Board", "Universal System Bus", "United Serial Board"],
      correct: 0
    },
    {
      question: "Which company created the PlayStation?",
      options: ["Nintendo", "Microsoft", "Sony", "Sega"],
      correct: 2
    },
    {
      question: "What does 'AI' stand for?",
      options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Analytical Intelligence"],
      correct: 1
    },
    {
      question: "In what year was Facebook founded?",
      options: ["2002", "2004", "2006", "2008"],
      correct: 1
    },
    {
      question: "What does 'PDF' stand for?",
      options: ["Portable Document Format", "Personal Data File", "Print Document Format", "Public Document File"],
      correct: 0
    },
    {
      question: "Which planet is Elon Musk trying to colonize?",
      options: ["Moon", "Venus", "Mars", "Jupiter"],
      correct: 2
    },
    {
      question: "What does the 'CC' in email stand for?",
      options: ["Carbon Copy", "Courtesy Copy", "Copy Cat", "Create Copy"],
      correct: 0
    },
    {
      question: "Which company owns YouTube?",
      options: ["Facebook", "Amazon", "Google", "Microsoft"],
      correct: 2
    },
    {
      question: "What is the character limit for a tweet on Twitter/X?",
      options: ["140", "280", "500", "1000"],
      correct: 1
    },
    {
      question: "What does 'WiFi' stand for?",
      options: ["Wireless Fidelity", "Wireless Fiction", "Wide Fidelity", "It doesn't stand for anything"],
      correct: 3
    },
    {
      question: "Which programming language is named after a type of coffee?",
      options: ["Python", "Java", "Ruby", "C++"],
      correct: 1
    },
    {
      question: "What year was the first iPhone released?",
      options: ["2005", "2007", "2009", "2011"],
      correct: 1
    },
    {
      question: "What does 'URL' stand for?",
      options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Link", "Universal Reference Link"],
      correct: 1
    },
    {
      question: "Which social media platform is known for disappearing messages?",
      options: ["Instagram", "TikTok", "Snapchat", "WhatsApp"],
      correct: 2
    },
    {
      question: "What does 'GPS' stand for?",
      options: ["Global Positioning System", "General Position Satellite", "Global Position Service", "General Positioning System"],
      correct: 0
    },
    {
      question: "Which company created Android?",
      options: ["Apple", "Microsoft", "Google", "Samsung"],
      correct: 2
    },
    {
      question: "What is the most used search engine?",
      options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
      correct: 2
    },
    {
      question: "What does 'RAM' stand for in computers?",
      options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Remote Access Memory"],
      correct: 0
    },
    {
      question: "Which video game console came first?",
      options: ["PlayStation", "Xbox", "Nintendo 64", "Atari"],
      correct: 3
    },
    {
      question: "What does 'HTTP' stand for?",
      options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Technical Protocol", "High Technical Transfer Protocol"],
      correct: 0
    },
    {
      question: "Which company owns Instagram?",
      options: ["Twitter", "Google", "Meta/Facebook", "Amazon"],
      correct: 2
    },
    {
      question: "What is cryptocurrency?",
      options: ["Digital money", "Video game currency", "Stock market", "Banking app"],
      correct: 0
    },
    {
      question: "What does 'VR' stand for?",
      options: ["Video Recording", "Virtual Reality", "Visual Response", "Voice Recognition"],
      correct: 1
    },
    {
      question: "Which key on a keyboard is used to capitalize letters?",
      options: ["Alt", "Ctrl", "Shift", "Tab"],
      correct: 2
    },
    {
      question: "What is the name of Amazon's virtual assistant?",
      options: ["Siri", "Alexa", "Cortana", "Assistant"],
      correct: 1
    },

    // Movies & Music (25 questions)
    {
      question: "Which movie won the Oscar for Best Picture in 2020?",
      options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
      correct: 2
    },
    {
      question: "Who sang 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
      correct: 1
    },
    {
      question: "What is the highest-grossing film of all time?",
      options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"],
      correct: 1
    },
    {
      question: "Which instrument does Yo-Yo Ma famously play?",
      options: ["Violin", "Piano", "Cello", "Flute"],
      correct: 2
    },
    {
      question: "Who directed 'Jurassic Park'?",
      options: ["George Lucas", "Steven Spielberg", "James Cameron", "Christopher Nolan"],
      correct: 1
    },
    {
      question: "Which band released the album 'Dark Side of the Moon'?",
      options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
      correct: 2
    },
    {
      question: "What movie features the line 'May the Force be with you'?",
      options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"],
      correct: 1
    },
    {
      question: "Who is known as the 'Queen of Pop'?",
      options: ["Beyoncé", "Madonna", "Lady Gaga", "Britney Spears"],
      correct: 1
    },
    {
      question: "Which movie features a character named Jack Sparrow?",
      options: ["Titanic", "Pirates of the Caribbean", "The Departed", "Cast Away"],
      correct: 1
    },
    {
      question: "What instrument has 88 keys?",
      options: ["Organ", "Piano", "Accordion", "Keyboard"],
      correct: 1
    },
    {
      question: "Who played Iron Man in the Marvel movies?",
      options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      correct: 1
    },
    {
      question: "Which singer's real name is Stefani Germanotta?",
      options: ["Pink", "Sia", "Lady Gaga", "Katy Perry"],
      correct: 2
    },
    {
      question: "What movie won Best Picture at the 2023 Oscars?",
      options: ["Top Gun: Maverick", "Everything Everywhere All at Once", "The Banshees of Inisherin", "Elvis"],
      correct: 1
    },
    {
      question: "Which band sang 'Hotel California'?",
      options: ["The Eagles", "Fleetwood Mac", "Chicago", "Boston"],
      correct: 0
    },
    {
      question: "In 'The Lion King', what is Simba's father's name?",
      options: ["Scar", "Mufasa", "Rafiki", "Timon"],
      correct: 1
    },
    {
      question: "Who composed 'The Four Seasons'?",
      options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
      correct: 2
    },
    {
      question: "Which movie franchise features Katniss Everdeen?",
      options: ["Divergent", "The Hunger Games", "Maze Runner", "Twilight"],
      correct: 1
    },
    {
      question: "What does MTV stand for?",
      options: ["Music Television", "Modern Television", "Movie Television", "Media Television"],
      correct: 0
    },
    {
      question: "Who directed 'Titanic'?",
      options: ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Ridley Scott"],
      correct: 2
    },
    {
      question: "Which Beatles member was assassinated in 1980?",
      options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
      correct: 1
    },
    {
      question: "What is the longest-running Broadway show?",
      options: ["Cats", "The Lion King", "The Phantom of the Opera", "Chicago"],
      correct: 2
    },
    {
      question: "Which movie features the song 'My Heart Will Go On'?",
      options: ["Titanic", "The Bodyguard", "Ghost", "Pretty Woman"],
      correct: 0
    },
    {
      question: "Who is the best-selling music artist of all time?",
      options: ["Elvis Presley", "The Beatles", "Michael Jackson", "Madonna"],
      correct: 1
    },
    {
      question: "What year did MTV first air?",
      options: ["1979", "1981", "1983", "1985"],
      correct: 1
    },
    {
      question: "Which film series features a wizard named Gandalf?",
      options: ["Harry Potter", "Lord of the Rings", "Chronicles of Narnia", "The Hobbit"],
      correct: 1
    }
  ],

  // Round 8: Challenging Trivia
  round8: [
    // World Knowledge (30 questions)
    {
      question: "Which country has the most time zones?",
      options: ["Russia", "USA", "China", "France"],
      correct: 3
    },
    {
      question: "What is the deepest point in the ocean?",
      options: ["Java Trench", "Puerto Rico Trench", "Mariana Trench", "Japan Trench"],
      correct: 2
    },
    {
      question: "Which element has the chemical symbol 'Au'?",
      options: ["Silver", "Gold", "Aluminum", "Argon"],
      correct: 1
    },
    {
      question: "How many countries are in Africa?",
      options: ["48", "52", "54", "56"],
      correct: 2
    },
    {
      question: "What is the smallest bone in the human body?",
      options: ["Stapes", "Malleus", "Incus", "Hyoid"],
      correct: 0
    },
    {
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correct: 1
    },
    {
      question: "What percentage of the human brain is water?",
      options: ["65%", "73%", "80%", "87%"],
      correct: 1
    },
    {
      question: "Which country consumes the most chocolate per capita?",
      options: ["Belgium", "Germany", "Switzerland", "USA"],
      correct: 2
    },
    {
      question: "What is the rarest blood type?",
      options: ["AB-negative", "O-negative", "Rh-null", "B-negative"],
      correct: 2
    },
    {
      question: "How many hearts does an octopus have?",
      options: ["1", "2", "3", "4"],
      correct: 2
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      options: ["Gobi", "Sahara", "Arabian", "Kalahari"],
      correct: 1
    },
    {
      question: "What is the most abundant metal in Earth's crust?",
      options: ["Iron", "Aluminum", "Copper", "Silicon"],
      correct: 1
    },
    {
      question: "Which language has the most words?",
      options: ["English", "Mandarin", "Spanish", "Arabic"],
      correct: 0
    },
    {
      question: "What is the world's smallest country by area?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1
    },
    {
      question: "How many taste buds does the average human have?",
      options: ["5,000", "10,000", "15,000", "20,000"],
      correct: 1
    },
    {
      question: "Which planet spins backwards?",
      options: ["Mars", "Venus", "Mercury", "Uranus"],
      correct: 1
    },
    {
      question: "What is the loudest animal on Earth?",
      options: ["Blue Whale", "Sperm Whale", "Howler Monkey", "African Elephant"],
      correct: 1
    },
    {
      question: "How fast can a sneeze travel?",
      options: ["50 mph", "100 mph", "150 mph", "200 mph"],
      correct: 1
    },
    {
      question: "Which country has the most islands?",
      options: ["Canada", "Finland", "Sweden", "Norway"],
      correct: 2
    },
    {
      question: "What is the most common phobia?",
      options: ["Heights", "Spiders", "Public Speaking", "Death"],
      correct: 2
    },
    {
      question: "How many breaths does the average person take per day?",
      options: ["12,000", "17,000", "22,000", "27,000"],
      correct: 2
    },
    {
      question: "Which mammal has the most powerful bite?",
      options: ["Hippopotamus", "Crocodile", "Great White Shark", "Orca"],
      correct: 3
    },
    {
      question: "What percentage of Earth's water is freshwater?",
      options: ["3%", "10%", "15%", "20%"],
      correct: 0
    },
    {
      question: "Which country has won the most Nobel Prizes?",
      options: ["UK", "Germany", "USA", "France"],
      correct: 2
    },
    {
      question: "How many neurons are in the human brain?",
      options: ["10 billion", "50 billion", "86 billion", "100 billion"],
      correct: 2
    },
    {
      question: "What is the world's most poisonous spider?",
      options: ["Black Widow", "Brown Recluse", "Sydney Funnel-Web", "Brazilian Wandering Spider"],
      correct: 3
    },
    {
      question: "Which ocean is shrinking?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correct: 1
    },
    {
      question: "How many muscles does it take to smile?",
      options: ["17", "26", "43", "62"],
      correct: 0
    },
    {
      question: "What is the world's oldest known city?",
      options: ["Athens", "Rome", "Damascus", "Jerusalem"],
      correct: 2
    },
    {
      question: "Which planet has the shortest day?",
      options: ["Mercury", "Jupiter", "Saturn", "Neptune"],
      correct: 1
    },

    // Advanced Science (20 questions)
    {
      question: "What is the speed of sound in air at sea level?",
      options: ["343 m/s", "443 m/s", "543 m/s", "643 m/s"],
      correct: 0
    },
    {
      question: "What is the half-life of Carbon-14?",
      options: ["3,730 years", "4,730 years", "5,730 years", "6,730 years"],
      correct: 2
    },
    {
      question: "Which scientist developed the theory of evolution?",
      options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
      correct: 1
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correct: 1
    },
    {
      question: "How many elements are on the periodic table?",
      options: ["108", "118", "128", "138"],
      correct: 1
    },
    {
      question: "What is the pH of pure water?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "Which gas makes up about 78% of Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correct: 2
    },
    {
      question: "What is the largest internal organ?",
      options: ["Heart", "Brain", "Liver", "Lungs"],
      correct: 2
    },
    {
      question: "At what temperature are Celsius and Fahrenheit equal?",
      options: ["-40°", "-30°", "-20°", "-10°"],
      correct: 0
    },
    {
      question: "What is the most common element in the universe?",
      options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
      correct: 2
    },
    {
      question: "How many chromosomes do humans have?",
      options: ["23", "46", "48", "52"],
      correct: 1
    },
    {
      question: "What is the smallest particle of an element?",
      options: ["Molecule", "Atom", "Neutron", "Quark"],
      correct: 1
    },
    {
      question: "Which planet has the Great Red Spot?",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correct: 1
    },
    {
      question: "What type of electromagnetic radiation has the shortest wavelength?",
      options: ["Radio waves", "X-rays", "Gamma rays", "Ultraviolet"],
      correct: 2
    },
    {
      question: "What is the universal donor blood type?",
      options: ["A+", "B+", "AB+", "O-"],
      correct: 3
    },
    {
      question: "How long does it take for sunlight to reach Earth?",
      options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
      correct: 1
    },
    {
      question: "What is the densest naturally occurring element?",
      options: ["Gold", "Lead", "Osmium", "Uranium"],
      correct: 2
    },
    {
      question: "Which organ produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Spleen"],
      correct: 1
    },
    {
      question: "What is the Fibonacci sequence?",
      options: ["Prime numbers", "Each number is sum of two preceding", "Perfect squares", "Exponential growth"],
      correct: 1
    },
    {
      question: "What causes tides?",
      options: ["Wind", "Earth's rotation", "Moon's gravity", "Temperature"],
      correct: 2
    },

    // History & Politics (20 questions)
    {
      question: "In which year did the American Civil War begin?",
      options: ["1859", "1861", "1863", "1865"],
      correct: 1
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Mother Teresa", "Pearl Buck", "Jane Addams"],
      correct: 0
    },
    {
      question: "Which empire was the largest in history?",
      options: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
      correct: 1
    },
    {
      question: "What year did the Soviet Union collapse?",
      options: ["1989", "1990", "1991", "1992"],
      correct: 2
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      correct: 1
    },
    {
      question: "Which country was formerly known as Persia?",
      options: ["Iraq", "Iran", "Syria", "Jordan"],
      correct: 1
    },
    {
      question: "What was the first country to give women the right to vote?",
      options: ["USA", "UK", "New Zealand", "Australia"],
      correct: 2
    },
    {
      question: "Who invented the printing press?",
      options: ["Benjamin Franklin", "Johannes Gutenberg", "William Caxton", "Bi Sheng"],
      correct: 1
    },
    {
      question: "Which war was fought between the North and South regions of America?",
      options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
      correct: 1
    },
    {
      question: "What ancient wonder of the world was located in Alexandria?",
      options: ["Colossus", "Lighthouse", "Library", "Hanging Gardens"],
      correct: 1
    },
    {
      question: "Who was the first person to reach the South Pole?",
      options: ["Robert Scott", "Ernest Shackleton", "Roald Amundsen", "Richard Byrd"],
      correct: 2
    },
    {
      question: "Which civilization built Machu Picchu?",
      options: ["Aztec", "Maya", "Inca", "Olmec"],
      correct: 2
    },
    {
      question: "What year was the United Nations founded?",
      options: ["1942", "1945", "1948", "1950"],
      correct: 1
    },
    {
      question: "Who wrote 'The Communist Manifesto'?",
      options: ["Vladimir Lenin", "Karl Marx", "Joseph Stalin", "Leon Trotsky"],
      correct: 1
    },
    {
      question: "Which country was never colonized by Europe?",
      options: ["Thailand", "Ethiopia", "Japan", "All of the above"],
      correct: 3
    },
    {
      question: "What was the first satellite launched into space?",
      options: ["Explorer 1", "Sputnik 1", "Luna 1", "Vostok 1"],
      correct: 1
    },
    {
      question: "Who was the longest-reigning British monarch?",
      options: ["Queen Victoria", "Queen Elizabeth II", "King George III", "King Henry VIII"],
      correct: 1
    },
    {
      question: "Which amendment to the US Constitution abolished slavery?",
      options: ["12th", "13th", "14th", "15th"],
      correct: 1
    },
    {
      question: "What year did India gain independence?",
      options: ["1945", "1947", "1949", "1950"],
      correct: 1
    },
    {
      question: "Who was the first Emperor of Rome?",
      options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
      correct: 1
    },

    // Arts & Culture (30 questions)
    {
      question: "Which artist cut off his own ear?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
      correct: 1
    },
    {
      question: "What is the art movement of Andy Warhol?",
      options: ["Impressionism", "Surrealism", "Pop Art", "Cubism"],
      correct: 2
    },
    {
      question: "Which Shakespeare play is the longest?",
      options: ["Hamlet", "Romeo and Juliet", "Macbeth", "King Lear"],
      correct: 0
    },
    {
      question: "Who sculpted 'The Thinker'?",
      options: ["Michelangelo", "Auguste Rodin", "Donatello", "Bernini"],
      correct: 1
    },
    {
      question: "Which museum houses the Mona Lisa?",
      options: ["Uffizi", "Prado", "Louvre", "Metropolitan"],
      correct: 2
    },
    {
      question: "What nationality was Frida Kahlo?",
      options: ["Spanish", "Mexican", "Colombian", "Argentine"],
      correct: 1
    },
    {
      question: "Which composer wrote 'The Magic Flute'?",
      options: ["Beethoven", "Mozart", "Bach", "Chopin"],
      correct: 1
    },
    {
      question: "What is the world's most visited museum?",
      options: ["British Museum", "Louvre", "Metropolitan Museum", "Vatican Museums"],
      correct: 1
    },
    {
      question: "Which artist painted 'The Starry Night'?",
      options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Henri Matisse"],
      correct: 1
    },
    {
      question: "What is the oldest known musical instrument?",
      options: ["Drum", "Flute", "Harp", "Lyre"],
      correct: 1
    },
    {
      question: "Which ballet features the Sugar Plum Fairy?",
      options: ["Swan Lake", "The Nutcracker", "Sleeping Beauty", "Giselle"],
      correct: 1
    },
    {
      question: "Who wrote 'Don Quixote'?",
      options: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda"],
      correct: 0
    },
    {
      question: "Which art movement did Pablo Picasso co-found?",
      options: ["Impressionism", "Surrealism", "Cubism", "Expressionism"],
      correct: 2
    },
    {
      question: "What is the world's best-selling book series?",
      options: ["Lord of the Rings", "Harry Potter", "Goosebumps", "Perry Mason"],
      correct: 1
    },
    {
      question: "Which philosopher wrote 'The Republic'?",
      options: ["Aristotle", "Plato", "Socrates", "Descartes"],
      correct: 1
    },
    {
      question: "What is the largest library in the world?",
      options: ["British Library", "Library of Congress", "New York Public Library", "National Library of China"],
      correct: 1
    },
    {
      question: "Which artist painted 'The Birth of Venus'?",
      options: ["Leonardo da Vinci", "Sandro Botticelli", "Raphael", "Titian"],
      correct: 1
    },
    {
      question: "What is the oldest surviving film festival?",
      options: ["Cannes", "Venice", "Berlin", "Sundance"],
      correct: 1
    },
    {
      question: "Who composed 'The Rite of Spring'?",
      options: ["Debussy", "Ravel", "Stravinsky", "Prokofiev"],
      correct: 2
    },
    {
      question: "Which museum has the largest art collection?",
      options: ["Louvre", "Hermitage", "Metropolitan", "National Gallery"],
      correct: 1
    },
    {
      question: "What is the most expensive painting ever sold?",
      options: ["Mona Lisa", "Salvator Mundi", "The Card Players", "Nafea Faa Ipoipo"],
      correct: 1
    },
    {
      question: "Which architect designed the Guggenheim Museum?",
      options: ["Frank Lloyd Wright", "I.M. Pei", "Frank Gehry", "Zaha Hadid"],
      correct: 0
    },
    {
      question: "What is the oldest known written story?",
      options: ["The Odyssey", "The Epic of Gilgamesh", "Beowulf", "The Iliad"],
      correct: 1
    },
    {
      question: "Which dance originated in Argentina?",
      options: ["Salsa", "Flamenco", "Tango", "Samba"],
      correct: 2
    },
    {
      question: "Who wrote the play 'A Streetcar Named Desire'?",
      options: ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Edward Albee"],
      correct: 1
    },
    {
      question: "What is the most performed opera in the world?",
      options: ["Carmen", "La Bohème", "The Magic Flute", "La Traviata"],
      correct: 1
    },
    {
      question: "Which artist is known for his 'Blue Period'?",
      options: ["Monet", "Van Gogh", "Picasso", "Matisse"],
      correct: 2
    },
    {
      question: "What is the world's oldest orchestra?",
      options: ["Vienna Philharmonic", "Royal Danish Orchestra", "Leipzig Gewandhaus", "Berlin Philharmonic"],
      correct: 1
    },
    {
      question: "Which writer created Sherlock Holmes?",
      options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Raymond Chandler"],
      correct: 1
    },
    {
      question: "What is the most produced play in the world?",
      options: ["Hamlet", "Romeo and Juliet", "A Midsummer Night's Dream", "Our Town"],
      correct: 3
    }
  ]
};

// Function to get a random trivia question
function getRandomTriviaQuestion(round) {
  const questions = triviaQuestions[`round${round}`];
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to shuffle options while keeping track of correct answer
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