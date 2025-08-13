// Trivia Questions - Jeopardy $200 Level (Moderately Challenging)
// Each question has the question text, 4 options, and the correct answer index (0-3)
const triviaQuestions = {
  // Round 2: Jeopardy-Style Trivia (200 questions)
  round2: [
    // ===== WORLD GEOGRAPHY (25 questions) =====
    {
      question: "This river forms part of the border between the United States and Mexico",
      options: ["Colorado River", "Rio Grande", "Mississippi River", "Brazos River"],
      correct: 1
    },
    {
      question: "The Strait of Gibraltar separates Spain from this African country",
      options: ["Algeria", "Tunisia", "Morocco", "Libya"],
      correct: 2
    },
    {
      question: "This Asian capital city was formerly known as Batavia under Dutch colonial rule",
      options: ["Bangkok", "Jakarta", "Manila", "Kuala Lumpur"],
      correct: 1
    },
    {
      question: "The Atacama Desert, one of the driest places on Earth, is primarily located in this country",
      options: ["Peru", "Argentina", "Chile", "Bolivia"],
      correct: 2
    },
    {
      question: "This European capital city is built on 14 islands connected by 57 bridges",
      options: ["Amsterdam", "Venice", "Copenhagen", "Stockholm"],
      correct: 3
    },
    {
      question: "Lake Baikal, the world's deepest lake, is located in this country",
      options: ["Canada", "Russia", "Kazakhstan", "Mongolia"],
      correct: 1
    },
    {
      question: "The ancient city of Petra is located in this modern-day country",
      options: ["Egypt", "Israel", "Jordan", "Saudi Arabia"],
      correct: 2
    },
    {
      question: "This African country is completely surrounded by South Africa",
      options: ["Swaziland", "Botswana", "Lesotho", "Zimbabwe"],
      correct: 2
    },
    {
      question: "The Danube River flows into this body of water",
      options: ["Mediterranean Sea", "Black Sea", "Baltic Sea", "North Sea"],
      correct: 1
    },
    {
      question: "Mount Kilimanjaro, Africa's highest peak, is located in this country",
      options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"],
      correct: 2
    },
    {
      question: "The Suez Canal connects the Mediterranean Sea to this body of water",
      options: ["Persian Gulf", "Arabian Sea", "Red Sea", "Indian Ocean"],
      correct: 2
    },
    {
      question: "This island nation is the world's largest archipelago by area",
      options: ["Philippines", "Indonesia", "Japan", "Malaysia"],
      correct: 1
    },
    {
      question: "The Pyrenees mountain range forms a natural border between France and this country",
      options: ["Italy", "Germany", "Spain", "Switzerland"],
      correct: 2
    },
    {
      question: "This Canadian province is the only one that is officially bilingual",
      options: ["Quebec", "Ontario", "New Brunswick", "Manitoba"],
      correct: 2
    },
    {
      question: "The ancient Incan city of Machu Picchu is located in this modern country",
      options: ["Colombia", "Ecuador", "Bolivia", "Peru"],
      correct: 3
    },
    {
      question: "This European country has coastlines on both the Atlantic Ocean and the Mediterranean Sea",
      options: ["Portugal", "France", "Spain", "Italy"],
      correct: 2
    },
    {
      question: "The Gobi Desert spans parts of China and this other country",
      options: ["Kazakhstan", "Mongolia", "Russia", "India"],
      correct: 1
    },
    {
      question: "Vatican City is entirely surrounded by this European capital",
      options: ["Milan", "Naples", "Rome", "Florence"],
      correct: 2
    },
    {
      question: "The Great Barrier Reef is located off the coast of this Australian state",
      options: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
      correct: 2
    },
    {
      question: "This South American capital city is the highest in the world",
      options: ["Quito", "Bogotá", "La Paz", "Lima"],
      correct: 2
    },
    {
      question: "The Rhine River flows through all of these countries EXCEPT",
      options: ["Germany", "Belgium", "Switzerland", "Netherlands"],
      correct: 1
    },
    {
      question: "This U.S. state is the only one made up entirely of islands",
      options: ["Florida", "Hawaii", "Alaska", "Rhode Island"],
      correct: 1
    },
    {
      question: "The Bosphorus Strait divides this city between two continents",
      options: ["Cairo", "Istanbul", "Athens", "Moscow"],
      correct: 1
    },
    {
      question: "Angel Falls, the world's highest waterfall, is located in this country",
      options: ["Brazil", "Argentina", "Venezuela", "Colombia"],
      correct: 2
    },
    {
      question: "This Asian country is known as the 'Land of the Thunder Dragon'",
      options: ["Nepal", "Tibet", "Myanmar", "Bhutan"],
      correct: 3
    },

    // ===== SCIENCE & NATURE (25 questions) =====
    {
      question: "This element, atomic number 79, has been valued by humans for thousands of years",
      options: ["Silver", "Platinum", "Gold", "Copper"],
      correct: 2
    },
    {
      question: "The process by which plants convert sunlight into chemical energy is called",
      options: ["Respiration", "Photosynthesis", "Fermentation", "Oxidation"],
      correct: 1
    },
    {
      question: "This scientist developed the theory of evolution by natural selection",
      options: ["Gregor Mendel", "Charles Darwin", "Alfred Wallace", "Thomas Huxley"],
      correct: 1
    },
    {
      question: "The pH scale measures the concentration of these ions in a solution",
      options: ["Sodium", "Chloride", "Hydrogen", "Oxygen"],
      correct: 2
    },
    {
      question: "This organ produces insulin in the human body",
      options: ["Liver", "Kidney", "Pancreas", "Spleen"],
      correct: 2
    },
    {
      question: "The study of earthquakes and seismic waves is called",
      options: ["Geology", "Seismology", "Volcanology", "Meteorology"],
      correct: 1
    },
    {
      question: "This gas makes up approximately 78% of Earth's atmosphere",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correct: 2
    },
    {
      question: "The asteroid belt is located between these two planets",
      options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
      correct: 1
    },
    {
      question: "This vitamin is produced when skin is exposed to sunlight",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correct: 2
    },
    {
      question: "The speed of sound in air at room temperature is approximately",
      options: ["143 m/s", "343 m/s", "543 m/s", "743 m/s"],
      correct: 1
    },
    {
      question: "This scientist is credited with discovering penicillin",
      options: ["Louis Pasteur", "Alexander Fleming", "Jonas Salk", "Marie Curie"],
      correct: 1
    },
    {
      question: "The process of a liquid changing directly to a gas is called",
      options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
      correct: 1
    },
    {
      question: "This is the largest bone in the human body",
      options: ["Tibia", "Humerus", "Femur", "Fibula"],
      correct: 2
    },
    {
      question: "The Richter scale measures the magnitude of",
      options: ["Hurricanes", "Tornadoes", "Earthquakes", "Tsunamis"],
      correct: 2
    },
    {
      question: "This element is the most abundant in the universe",
      options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
      correct: 3
    },
    {
      question: "The Great Red Spot is a storm on this planet",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correct: 1
    },
    {
      question: "DNA stands for",
      options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Dioxynucleic Acid", "Deoxynucleic Acid"],
      correct: 0
    },
    {
      question: "This organ is responsible for filtering blood and producing urine",
      options: ["Liver", "Spleen", "Kidney", "Bladder"],
      correct: 2
    },
    {
      question: "The aurora borealis is caused by interaction between solar wind and Earth's",
      options: ["Atmosphere", "Magnetic field", "Ozone layer", "Gravitational field"],
      correct: 1
    },
    {
      question: "This is the study of fungi",
      options: ["Mycology", "Biology", "Botany", "Zoology"],
      correct: 0
    },
    {
      question: "The boiling point of water decreases as you go higher in altitude because of",
      options: ["Temperature change", "Lower air pressure", "Less oxygen", "More humidity"],
      correct: 1
    },
    {
      question: "This particle in an atom has no electric charge",
      options: ["Proton", "Electron", "Neutron", "Positron"],
      correct: 2
    },
    {
      question: "The longest and strongest bone in the human face is the",
      options: ["Maxilla", "Mandible", "Nasal bone", "Zygomatic"],
      correct: 1
    },
    {
      question: "This phenomenon occurs when light bends as it passes through water",
      options: ["Reflection", "Refraction", "Diffraction", "Absorption"],
      correct: 1
    },
    {
      question: "The half-life of Carbon-14, used in radiocarbon dating, is approximately",
      options: ["1,730 years", "3,730 years", "5,730 years", "7,730 years"],
      correct: 2
    },

    // ===== HISTORY (25 questions) =====
    {
      question: "The Magna Carta was signed in this year",
      options: ["1066", "1215", "1492", "1588"],
      correct: 1
    },
    {
      question: "This empire was ruled by Genghis Khan",
      options: ["Ottoman Empire", "Byzantine Empire", "Mongol Empire", "Persian Empire"],
      correct: 2
    },
    {
      question: "The Battle of Waterloo ended the rule of this French leader",
      options: ["Louis XIV", "Napoleon Bonaparte", "Robespierre", "Charles de Gaulle"],
      correct: 1
    },
    {
      question: "The ancient Library of Alexandria was located in this modern-day country",
      options: ["Greece", "Turkey", "Egypt", "Italy"],
      correct: 2
    },
    {
      question: "This U.S. President was in office during the Cuban Missile Crisis",
      options: ["Dwight Eisenhower", "John F. Kennedy", "Lyndon Johnson", "Richard Nixon"],
      correct: 1
    },
    {
      question: "The Hundred Years' War was primarily fought between England and this country",
      options: ["Spain", "Germany", "France", "Scotland"],
      correct: 2
    },
    {
      question: "This Chinese dynasty built most of the Great Wall of China",
      options: ["Han", "Tang", "Ming", "Qing"],
      correct: 2
    },
    {
      question: "The Renaissance began in this Italian city",
      options: ["Rome", "Venice", "Milan", "Florence"],
      correct: 3
    },
    {
      question: "This explorer led the first expedition to circumnavigate the globe",
      options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Francis Drake"],
      correct: 1
    },
    {
      question: "The Treaty of Versailles ended this war",
      options: ["Franco-Prussian War", "World War I", "World War II", "Crimean War"],
      correct: 1
    },
    {
      question: "This ancient wonder of the world still stands today",
      options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
      correct: 1
    },
    {
      question: "The Aztec Empire was centered in what is now this modern country",
      options: ["Guatemala", "Peru", "Mexico", "Colombia"],
      correct: 2
    },
    {
      question: "This Roman Emperor made Christianity the official religion of the Roman Empire",
      options: ["Augustus", "Marcus Aurelius", "Constantine", "Diocletian"],
      correct: 2
    },
    {
      question: "The Berlin Wall fell in this year",
      options: ["1987", "1989", "1991", "1993"],
      correct: 1
    },
    {
      question: "This was the first permanent English settlement in North America",
      options: ["Plymouth", "Jamestown", "Roanoke", "Boston"],
      correct: 1
    },
    {
      question: "The Black Death pandemic occurred primarily in this century",
      options: ["12th century", "13th century", "14th century", "15th century"],
      correct: 2
    },
    {
      question: "This Egyptian queen allied with Julius Caesar and Mark Antony",
      options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
      correct: 2
    },
    {
      question: "The Protestant Reformation was initiated by this German monk",
      options: ["John Calvin", "Martin Luther", "Jan Hus", "John Wycliffe"],
      correct: 1
    },
    {
      question: "The first successful powered airplane flight occurred in this year",
      options: ["1899", "1903", "1907", "1911"],
      correct: 1
    },
    {
      question: "This empire was known as the 'Sick Man of Europe' in the 19th century",
      options: ["Austrian Empire", "Ottoman Empire", "Russian Empire", "Spanish Empire"],
      correct: 1
    },
    {
      question: "The Rosetta Stone was crucial in deciphering this ancient writing system",
      options: ["Cuneiform", "Sanskrit", "Hieroglyphics", "Linear B"],
      correct: 2
    },
    {
      question: "This revolution began with the storming of the Bastille",
      options: ["American Revolution", "French Revolution", "Russian Revolution", "Glorious Revolution"],
      correct: 1
    },
    {
      question: "The Silk Road connected China with this empire",
      options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
      correct: 1
    },
    {
      question: "This Viking explorer is believed to have reached North America around 1000 AD",
      options: ["Erik the Red", "Leif Erikson", "Ragnar Lothbrok", "Harald Hardrada"],
      correct: 1
    },
    {
      question: "The Spanish Armada was defeated by England in this year",
      options: ["1488", "1588", "1688", "1788"],
      correct: 1
    },

    // ===== LITERATURE & LANGUAGE (25 questions) =====
    {
      question: "This Shakespeare play features the line 'To be or not to be'",
      options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
      correct: 2
    },
    {
      question: "The novel '1984' was written by this author",
      options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Arthur C. Clarke"],
      correct: 1
    },
    {
      question: "This epic poem by Homer tells of the journey home from the Trojan War",
      options: ["The Iliad", "The Aeneid", "The Odyssey", "Metamorphoses"],
      correct: 2
    },
    {
      question: "The term for a word that is spelled the same forwards and backwards",
      options: ["Anagram", "Palindrome", "Homonym", "Antonym"],
      correct: 1
    },
    {
      question: "This American author wrote 'The Great Gatsby'",
      options: ["Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald", "William Faulkner"],
      correct: 2
    },
    {
      question: "The Canterbury Tales was written in this form of English",
      options: ["Old English", "Middle English", "Early Modern English", "Celtic English"],
      correct: 1
    },
    {
      question: "This Russian author wrote 'Crime and Punishment'",
      options: ["Leo Tolstoy", "Anton Chekhov", "Fyodor Dostoevsky", "Vladimir Nabokov"],
      correct: 2
    },
    {
      question: "A haiku traditionally has this many syllables in total",
      options: ["14", "17", "20", "21"],
      correct: 1
    },
    {
      question: "This novel begins with 'Call me Ishmael'",
      options: ["The Old Man and the Sea", "Moby-Dick", "Robinson Crusoe", "Treasure Island"],
      correct: 1
    },
    {
      question: "The Pulitzer Prize for Fiction was first awarded in this year",
      options: ["1898", "1918", "1938", "1948"],
      correct: 1
    },
    {
      question: "This Greek poet is credited with writing 'The Iliad'",
      options: ["Sophocles", "Homer", "Virgil", "Aristotle"],
      correct: 1
    },
    {
      question: "The novel 'One Hundred Years of Solitude' was written by",
      options: ["Isabel Allende", "Paulo Coelho", "Gabriel García Márquez", "Jorge Luis Borges"],
      correct: 2
    },
    {
      question: "This punctuation mark is also known as an 'Oxford comma'",
      options: ["Semicolon", "Serial comma", "Em dash", "Ellipsis"],
      correct: 1
    },
    {
      question: "The play 'A Streetcar Named Desire' was written by",
      options: ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Edward Albee"],
      correct: 1
    },
    {
      question: "This literary device involves giving human characteristics to non-human things",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      correct: 2
    },
    {
      question: "The novel 'Pride and Prejudice' opens with this famous line about a truth",
      options: ["Universally acknowledged", "Self-evident", "Widely known", "Generally accepted"],
      correct: 0
    },
    {
      question: "This is the pen name of Samuel Clemens",
      options: ["O. Henry", "Mark Twain", "Lewis Carroll", "George Eliot"],
      correct: 1
    },
    {
      question: "The Brontë sisters wrote under these male pseudonyms",
      options: ["Smith Brothers", "Jones Brothers", "Bell Brothers", "Brown Brothers"],
      correct: 2
    },
    {
      question: "This French author wrote 'Les Misérables'",
      options: ["Alexandre Dumas", "Victor Hugo", "Émile Zola", "Gustave Flaubert"],
      correct: 1
    },
    {
      question: "The term 'stream of consciousness' is most associated with this author",
      options: ["Charles Dickens", "James Joyce", "Jane Austen", "Thomas Hardy"],
      correct: 1
    },
    {
      question: "This ancient Greek wrote fables featuring animals with moral lessons",
      options: ["Plato", "Aesop", "Socrates", "Herodotus"],
      correct: 1
    },
    {
      question: "The longest word in English without a true vowel (A, E, I, O, U) is",
      options: ["Fly", "Gym", "Rhythm", "Crypt"],
      correct: 2
    },
    {
      question: "This African-American poet wrote 'I Know Why the Caged Bird Sings'",
      options: ["Langston Hughes", "Maya Angelou", "Toni Morrison", "Alice Walker"],
      correct: 1
    },
    {
      question: "The detective Sherlock Holmes was created by this author",
      options: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Edgar Allan Poe"],
      correct: 1
    },
    {
      question: "This type of poem has 14 lines and a specific rhyme scheme",
      options: ["Haiku", "Limerick", "Sonnet", "Ballad"],
      correct: 2
    },

    // ===== ARTS & ENTERTAINMENT (25 questions) =====
    {
      question: "This artist painted 'The Starry Night' while in an asylum",
      options: ["Claude Monet", "Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec"],
      correct: 1
    },
    {
      question: "The film that won Best Picture at the first Academy Awards ceremony in 1929",
      options: ["Sunrise", "The Jazz Singer", "Wings", "The Broadway Melody"],
      correct: 2
    },
    {
      question: "This composer wrote 'The Four Seasons'",
      options: ["Bach", "Mozart", "Vivaldi", "Handel"],
      correct: 2
    },
    {
      question: "The Louvre Museum is home to this famous painting",
      options: ["The Starry Night", "The Scream", "Mona Lisa", "Girl with a Pearl Earring"],
      correct: 2
    },
    {
      question: "This film director is known for suspense films and cameo appearances",
      options: ["Orson Welles", "Alfred Hitchcock", "Stanley Kubrick", "Billy Wilder"],
      correct: 1
    },
    {
      question: "The ballet 'Swan Lake' was composed by",
      options: ["Stravinsky", "Prokofiev", "Tchaikovsky", "Rachmaninoff"],
      correct: 2
    },
    {
      question: "This artist cut off part of his ear during a mental breakdown",
      options: ["Pablo Picasso", "Vincent van Gogh", "Paul Cézanne", "Salvador Dalí"],
      correct: 1
    },
    {
      question: "The Beatles' first single to reach #1 in the United States was",
      options: ["Love Me Do", "I Want to Hold Your Hand", "She Loves You", "Please Please Me"],
      correct: 1
    },
    {
      question: "This architect designed the Guggenheim Museum in New York",
      options: ["I.M. Pei", "Frank Gehry", "Frank Lloyd Wright", "Le Corbusier"],
      correct: 2
    },
    {
      question: "The musical 'West Side Story' is based on this Shakespeare play",
      options: ["Much Ado About Nothing", "Romeo and Juliet", "A Midsummer Night's Dream", "The Taming of the Shrew"],
      correct: 1
    },
    {
      question: "This artist painted the ceiling of the Sistine Chapel",
      options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      correct: 2
    },
    {
      question: "The first feature-length animated film was",
      options: ["Pinocchio", "Snow White and the Seven Dwarfs", "Fantasia", "Bambi"],
      correct: 1
    },
    {
      question: "This jazz musician was known as 'Satchmo'",
      options: ["Duke Ellington", "Louis Armstrong", "Charlie Parker", "Miles Davis"],
      correct: 1
    },
    {
      question: "The art movement that included Salvador Dalí and René Magritte",
      options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
      correct: 2
    },
    {
      question: "This film won 11 Academy Awards, tying the all-time record",
      options: ["Gone with the Wind", "Ben-Hur", "Titanic", "All of the above"],
      correct: 3
    },
    {
      question: "The opera 'The Magic Flute' was composed by",
      options: ["Verdi", "Wagner", "Mozart", "Puccini"],
      correct: 2
    },
    {
      question: "This artist is famous for his Campbell's Soup Can paintings",
      options: ["Roy Lichtenstein", "Andy Warhol", "Jackson Pollock", "Keith Haring"],
      correct: 1
    },
    {
      question: "The film technique where the camera appears to zoom while moving backward",
      options: ["Dutch angle", "Dolly zoom", "Tracking shot", "Crane shot"],
      correct: 1
    },
    {
      question: "This sculptor created 'The Thinker'",
      options: ["Michelangelo", "Auguste Rodin", "Alberto Giacometti", "Henry Moore"],
      correct: 1
    },
    {
      question: "The Broadway musical with the longest run in history is",
      options: ["Cats", "The Lion King", "The Phantom of the Opera", "Chicago"],
      correct: 2
    },
    {
      question: "This painting technique uses small dots of pure color",
      options: ["Impressionism", "Pointillism", "Fauvism", "Minimalism"],
      correct: 1
    },
    {
      question: "The filmmaker who directed 'Citizen Kane' at age 25",
      options: ["John Ford", "Howard Hawks", "Orson Welles", "Frank Capra"],
      correct: 2
    },
    {
      question: "This dance originated in Argentina",
      options: ["Salsa", "Flamenco", "Tango", "Samba"],
      correct: 2
    },
    {
      question: "The artist who painted 'American Gothic'",
      options: ["Edward Hopper", "Grant Wood", "Norman Rockwell", "Andrew Wyeth"],
      correct: 1
    },
    {
      question: "This instrument has 47 strings and 7 pedals",
      options: ["Piano", "Harpsichord", "Harp", "Lyre"],
      correct: 2
    },

    // ===== FOOD & CUISINE (25 questions) =====
    {
      question: "Saffron, the world's most expensive spice by weight, comes from this flower",
      options: ["Rose", "Orchid", "Crocus", "Jasmine"],
      correct: 2
    },
    {
      question: "This French cooking term means 'everything in its place'",
      options: ["Mise en place", "Sous vide", "En papillote", "À la carte"],
      correct: 0
    },
    {
      question: "The Italian dessert tiramisu literally translates to",
      options: ["Sweet dream", "Pick me up", "Little sweet", "Coffee cake"],
      correct: 1
    },
    {
      question: "This type of Japanese cuisine consists of bite-sized portions served with drinks",
      options: ["Kaiseki", "Izakaya", "Omakase", "Bento"],
      correct: 1
    },
    {
      question: "Pecorino cheese is made from the milk of this animal",
      options: ["Cow", "Goat", "Sheep", "Buffalo"],
      correct: 2
    },
    {
      question: "The mother sauces of French cuisine number",
      options: ["3", "5", "7", "9"],
      correct: 1
    },
    {
      question: "This spice is derived from the dried stigmas of flowers",
      options: ["Vanilla", "Cinnamon", "Saffron", "Cardamom"],
      correct: 2
    },
    {
      question: "The Korean dish kimchi is primarily made from fermented",
      options: ["Rice", "Soybeans", "Cabbage", "Seaweed"],
      correct: 2
    },
    {
      question: "This cooking method involves vacuum-sealing food and cooking it in water",
      options: ["Braising", "Sous vide", "Poaching", "Blanching"],
      correct: 1
    },
    {
      question: "The Scoville scale measures the heat of",
      options: ["Ovens", "Oil temperature", "Peppers", "Spices in general"],
      correct: 2
    },
    {
      question: "Foie gras is made from the liver of",
      options: ["Chicken", "Duck or goose", "Pig", "Cow"],
      correct: 1
    },
    {
      question: "This Mexican sauce contains chocolate as a key ingredient",
      options: ["Salsa verde", "Pico de gallo", "Mole", "Chimichurri"],
      correct: 2
    },
    {
      question: "The process of cooking sugar until it browns is called",
      options: ["Crystallization", "Caramelization", "Maillard reaction", "Reduction"],
      correct: 1
    },
    {
      question: "This Middle Eastern spice blend typically includes sumac and sesame seeds",
      options: ["Ras el hanout", "Harissa", "Za'atar", "Baharat"],
      correct: 2
    },
    {
      question: "The pasta shape 'farfalle' is commonly known as",
      options: ["Shells", "Bow ties", "Corkscrews", "Little ears"],
      correct: 1
    },
    {
      question: "This French term describes vegetables cut into thin matchsticks",
      options: ["Brunoise", "Julienne", "Chiffonade", "Batonnet"],
      correct: 1
    },
    {
      question: "The most consumed beverage in the world after water is",
      options: ["Coffee", "Tea", "Beer", "Milk"],
      correct: 1
    },
    {
      question: "This type of sushi contains no raw fish",
      options: ["Nigiri", "Sashimi", "California roll", "Chirashi"],
      correct: 2
    },
    {
      question: "The French dessert crème brûlée is topped with caramelized",
      options: ["Chocolate", "Sugar", "Honey", "Maple syrup"],
      correct: 1
    },
    {
      question: "This grain is the staple food for more than half the world's population",
      options: ["Wheat", "Corn", "Rice", "Barley"],
      correct: 2
    },
    {
      question: "The term 'umami' refers to which taste",
      options: ["Sweet", "Sour", "Bitter", "Savory"],
      correct: 3
    },
    {
      question: "Cognac must be produced in this region of France",
      options: ["Bordeaux", "Champagne", "Cognac", "Burgundy"],
      correct: 2
    },
    {
      question: "This cheese is traditionally used in Greek salad",
      options: ["Halloumi", "Feta", "Kasseri", "Mizithra"],
      correct: 1
    },
    {
      question: "The cocktail made with vodka, coffee liqueur, and cream is called",
      options: ["Black Russian", "White Russian", "Moscow Mule", "Mudslide"],
      correct: 1
    },
    {
      question: "This cooking fat has the highest smoke point",
      options: ["Butter", "Olive oil", "Coconut oil", "Avocado oil"],
      correct: 3
    },

    // ===== TECHNOLOGY & INNOVATION (25 questions) =====
    {
      question: "The first computer virus was created in",
      options: ["1971", "1981", "1991", "2001"],
      correct: 0
    },
    {
      question: "This programming language was developed by Sun Microsystems in 1995",
      options: ["Python", "Java", "C++", "Ruby"],
      correct: 1
    },
    {
      question: "The term 'bluetooth' is named after a king from this country",
      options: ["England", "France", "Denmark", "Sweden"],
      correct: 2
    },
    {
      question: "The first iPhone was released in this year",
      options: ["2005", "2006", "2007", "2008"],
      correct: 2
    },
    {
      question: "This company created the first commercially successful GUI-based computer",
      options: ["IBM", "Apple", "Microsoft", "Xerox"],
      correct: 1
    },
    {
      question: "The '@' symbol is called this in Italian",
      options: ["Chiocciola (snail)", "Farfalla (butterfly)", "Stella (star)", "Cerchio (circle)"],
      correct: 0
    },
    {
      question: "The first message sent over ARPANET (precursor to internet) was",
      options: ["HELLO", "TEST", "LO", "HI"],
      correct: 2
    },
    {
      question: "This social media platform was originally called 'The Facebook'",
      options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
      correct: 2
    },
    {
      question: "The computer term 'bug' originated from an actual insect found in",
      options: ["ENIAC", "Harvard Mark II", "UNIVAC", "IBM 701"],
      correct: 1
    },
    {
      question: "The first YouTube video was uploaded in",
      options: ["2003", "2004", "2005", "2006"],
      correct: 2
    },
    {
      question: "This video game is the best-selling of all time",
      options: ["Minecraft", "Tetris", "Grand Theft Auto V", "Wii Sports"],
      correct: 1
    },
    {
      question: "The QWERTY keyboard layout was designed to",
      options: ["Speed up typing", "Slow down typing", "Alphabetize keys", "Minimize errors"],
      correct: 1
    },
    {
      question: "The first domain name ever registered was",
      options: ["computer.com", "internet.com", "symbolics.com", "network.com"],
      correct: 2
    },
    {
      question: "This company's slogan was 'Don't be evil'",
      options: ["Apple", "Microsoft", "Google", "Facebook"],
      correct: 2
    },
    {
      question: "The first text message (SMS) was sent in",
      options: ["1982", "1987", "1992", "1997"],
      correct: 2
    },
    {
      question: "Moore's Law states that computer processing power doubles every",
      options: ["6 months", "1 year", "2 years", "5 years"],
      correct: 2
    },
    {
      question: "The first computer mouse was made of",
      options: ["Plastic", "Metal", "Wood", "Rubber"],
      correct: 2
    },
    {
      question: "This search engine was the most popular before Google",
      options: ["AltaVista", "Yahoo", "Ask Jeeves", "Lycos"],
      correct: 1
    },
    {
      question: "The term 'spam' for junk email comes from",
      options: ["An acronym", "A Monty Python sketch", "A programmer's name", "Random letters"],
      correct: 1
    },
    {
      question: "The first commercial 3D printer was sold in",
      options: ["1978", "1988", "1998", "2008"],
      correct: 1
    },
    {
      question: "This person is credited with inventing the World Wide Web",
      options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
      correct: 2
    },
    {
      question: "The first computer to defeat a world chess champion was",
      options: ["Watson", "Deep Blue", "AlphaGo", "Kasparov"],
      correct: 1
    },
    {
      question: "Bitcoin was created by a person or group using this pseudonym",
      options: ["Crypto King", "Digital Dave", "Satoshi Nakamoto", "Blockchain Bob"],
      correct: 2
    },
    {
      question: "The first emoji was created in this country",
      options: ["United States", "South Korea", "Japan", "Finland"],
      correct: 2
    },
    {
      question: "The programming language Python is named after",
      options: ["The snake", "Monty Python", "A Greek myth", "Its creator's pet"],
      correct: 1
    },

    // ===== SPORTS & GAMES (25 questions) =====
    {
      question: "The Olympic Games were revived in the modern era in this year",
      options: ["1886", "1896", "1906", "1916"],
      correct: 1
    },
    {
      question: "A perfect game in bowling consists of how many consecutive strikes",
      options: ["9", "10", "11", "12"],
      correct: 3
    },
    {
      question: "The Triple Crown in horse racing consists of these three races",
      options: ["Kentucky Derby, Preakness, Belmont", "Grand National, Derby, Oaks", "Melbourne Cup, Cox Plate, Caulfield Cup", "Arc, Derby, Oaks"],
      correct: 0
    },
    {
      question: "This chess piece can only move diagonally",
      options: ["Knight", "Rook", "Bishop", "Queen"],
      correct: 2
    },
    {
      question: "The marathon distance of 26.2 miles was standardized at the Olympics in",
      options: ["1896", "1908", "1924", "1936"],
      correct: 1
    },
    {
      question: "In tennis, winning all four Grand Slam tournaments in one year is called",
      options: ["Perfect Year", "Golden Slam", "Grand Slam", "Calendar Slam"],
      correct: 3
    },
    {
      question: "The America's Cup is awarded in this sport",
      options: ["Golf", "Tennis", "Sailing", "Horse Racing"],
      correct: 2
    },
    {
      question: "A cricket match where each team bats for a maximum of 50 overs is called",
      options: ["Test Match", "T20", "One Day International", "First Class"],
      correct: 2
    },
    {
      question: "The Stanley Cup is the oldest trophy in North American professional sports, first awarded in",
      options: ["1873", "1883", "1893", "1903"],
      correct: 2
    },
    {
      question: "In golf, an albatross is how many strokes under par",
      options: ["One", "Two", "Three", "Four"],
      correct: 2
    },
    {
      question: "The modern pentathlon consists of five events including all EXCEPT",
      options: ["Fencing", "Swimming", "Archery", "Running"],
      correct: 2
    },
    {
      question: "The FIFA World Cup trophy is made primarily of",
      options: ["Silver", "Gold", "Platinum", "Bronze"],
      correct: 1
    },
    {
      question: "In poker, a 'full house' consists of",
      options: ["Five cards of same suit", "Three of a kind and a pair", "Five consecutive cards", "Four of a kind"],
      correct: 1
    },
    {
      question: "The Tour de France traditionally ends on this famous avenue",
      options: ["Avenue Montaigne", "Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli"],
      correct: 1
    },
    {
      question: "The maximum break in snooker is",
      options: ["127", "137", "147", "157"],
      correct: 2
    },
    {
      question: "In baseball, the 'Mendoza Line' refers to a batting average of",
      options: [".100", ".200", ".250", ".300"],
      correct: 1
    },
    {
      question: "The ancient Olympic Games were held in honor of this Greek god",
      options: ["Apollo", "Ares", "Zeus", "Hermes"],
      correct: 2
    },
    {
      question: "A biathlon combines cross-country skiing with",
      options: ["Ski jumping", "Rifle shooting", "Ice skating", "Archery"],
      correct: 1
    },
    {
      question: "The Heisman Trophy is awarded in this sport",
      options: ["Baseball", "Basketball", "College Football", "Ice Hockey"],
      correct: 2
    },
    {
      question: "In Formula 1, the black and white checkered flag signifies",
      options: ["Start of race", "End of race", "Caution", "Disqualification"],
      correct: 1
    },
    {
      question: "The oldest tennis tournament in the world is",
      options: ["US Open", "French Open", "Wimbledon", "Australian Open"],
      correct: 2
    },
    {
      question: "In basketball, a 'double-double' refers to",
      options: ["Two 3-pointers", "Double digits in two categories", "Two technical fouls", "Scoring 20+ points"],
      correct: 1
    },
    {
      question: "The Ryder Cup is contested between teams from",
      options: ["USA and Europe", "USA and UK", "Europe and Asia", "North and South America"],
      correct: 0
    },
    {
      question: "The soccer player with the most Ballon d'Or awards is",
      options: ["Pelé", "Diego Maradona", "Cristiano Ronaldo", "Lionel Messi"],
      correct: 3
    },
    {
      question: "In boxing, the maximum weight for a heavyweight fighter is",
      options: ["200 pounds", "220 pounds", "No limit", "250 pounds"],
      correct: 2
    }
  ],

  // Keep the other rounds for potential future use
  round5: [],
  round8: []
};

// Function to get a random trivia question
function getRandomTriviaQuestion(round) {
    // Always use round2 questions since that's our main trivia round
    const questions = triviaQuestions.round2;
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