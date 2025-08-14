// Speed Categories with Complete Answer Banks - 100 Categories!
const speedCategoriesWithAnswers = {
    // GEOGRAPHY & PLACES (10 categories)
    "US States": [
        "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", 
        "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", 
        "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", 
        "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", 
        "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", 
        "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", 
        "virginia", "washington", "west virginia", "wisconsin", "wyoming"
    ],
    
    "Countries in Europe": [
        "albania", "andorra", "armenia", "austria", "azerbaijan", "belarus", "belgium", "bosnia",
        "bulgaria", "croatia", "cyprus", "czech republic", "denmark", "estonia", "finland", "france",
        "georgia", "germany", "greece", "hungary", "iceland", "ireland", "italy", "kosovo", "latvia",
        "liechtenstein", "lithuania", "luxembourg", "macedonia", "malta", "moldova", "monaco",
        "montenegro", "netherlands", "norway", "poland", "portugal", "romania", "russia", "san marino",
        "serbia", "slovakia", "slovenia", "spain", "sweden", "switzerland", "turkey", "ukraine",
        "united kingdom", "vatican city", "england", "scotland", "wales"
    ],
    
    "Countries in Asia": [
        "china", "japan", "india", "indonesia", "pakistan", "bangladesh", "philippines", "vietnam",
        "thailand", "turkey", "iran", "iraq", "saudi arabia", "uzbekistan", "malaysia", "afghanistan",
        "nepal", "yemen", "north korea", "south korea", "sri lanka", "myanmar", "cambodia", "jordan",
        "azerbaijan", "uae", "united arab emirates", "tajikistan", "israel", "hong kong", "laos",
        "lebanon", "singapore", "oman", "kuwait", "georgia", "mongolia", "armenia", "qatar", "bahrain",
        "timor-leste", "cyprus", "bhutan", "maldives", "brunei", "palestine", "taiwan", "kazakhstan",
        "kyrgyzstan", "turkmenistan", "syria"
    ],
    
    "Capital Cities": [
        "london", "paris", "berlin", "rome", "madrid", "lisbon", "amsterdam", "brussels", "vienna",
        "athens", "dublin", "stockholm", "oslo", "copenhagen", "helsinki", "moscow", "warsaw",
        "budapest", "prague", "bratislava", "ljubljana", "zagreb", "belgrade", "sofia", "bucharest",
        "ankara", "cairo", "tokyo", "beijing", "seoul", "bangkok", "jakarta", "manila", "hanoi",
        "new delhi", "delhi", "islamabad", "dhaka", "kathmandu", "colombo", "kabul", "tehran",
        "baghdad", "damascus", "amman", "beirut", "jerusalem", "riyadh", "doha", "abu dhabi",
        "muscat", "kuwait city", "washington", "ottawa", "mexico city", "havana", "brasilia",
        "buenos aires", "santiago", "lima", "bogota", "caracas", "quito", "la paz", "montevideo",
        "asuncion", "georgetown", "paramaribo", "canberra", "wellington"
    ],
    
    "Famous Landmarks": [
        "eiffel tower", "statue of liberty", "great wall", "taj mahal", "colosseum", "big ben",
        "pyramids", "sphinx", "machu picchu", "christ the redeemer", "sydney opera house",
        "golden gate bridge", "empire state building", "stonehenge", "mount rushmore",
        "niagara falls", "grand canyon", "louvre", "buckingham palace", "white house",
        "capitol building", "space needle", "cn tower", "burj khalifa", "petra", "angkor wat",
        "forbidden city", "sagrada familia", "notre dame", "tower bridge", "brooklyn bridge",
        "hollywood sign", "times square", "red square", "brandenburg gate", "arc de triomphe",
        "tower of pisa", "vatican", "acropolis", "alhambra", "neuschwanstein", "mont saint michel",
        "chichen itza", "easter island", "galapagos", "yellowstone", "versailles"
    ],
    
    "US Presidents": [
        "washington", "adams", "jefferson", "madison", "monroe", "jackson", "van buren", "harrison",
        "tyler", "polk", "taylor", "fillmore", "pierce", "buchanan", "lincoln", "johnson", "grant",
        "hayes", "garfield", "arthur", "cleveland", "mckinley", "roosevelt", "taft", "wilson",
        "harding", "coolidge", "hoover", "truman", "eisenhower", "kennedy", "nixon", "ford",
        "carter", "reagan", "bush", "clinton", "obama", "trump", "biden", "fdr", "teddy roosevelt",
        "jfk", "lbj", "george w bush", "george hw bush"
    ],
    
    "Top 25 Most Populated US Cities": [
        "new york", "los angeles", "chicago", "houston", "phoenix", "philadelphia", "san antonio",
        "san diego", "dallas", "austin", "san jose", "fort worth", "jacksonville", "columbus",
        "charlotte", "san francisco", "indianapolis", "seattle", "denver", "boston", "washington dc",
        "nashville", "el paso", "detroit", "portland", "memphis", "oklahoma city", "las vegas",
        "baltimore", "milwaukee"
    ],
    
    "Beach Vacation Destinations": [
        "hawaii", "maldives", "bali", "fiji", "tahiti", "caribbean", "bahamas", "jamaica", "aruba",
        "barbados", "turks and caicos", "cancun", "cabo", "puerto vallarta", "miami", "san diego",
        "myrtle beach", "outer banks", "hamptons", "martha's vineyard", "nantucket", "key west",
        "santorini", "mykonos", "ibiza", "mallorca", "french riviera", "nice", "cannes", "monaco",
        "amalfi coast", "cinque terre", "croatia", "montenegro", "turkey", "egypt", "dubai",
        "seychelles", "mauritius", "zanzibar", "phuket", "koh samui", "langkawi", "boracay",
        "gold coast", "byron bay", "whitsundays", "great barrier reef", "bora bora", "cook islands"
    ],
    
    "National Parks": [
        "yellowstone", "yosemite", "grand canyon", "zion", "rocky mountain", "glacier", "acadia",
        "olympic", "grand teton", "bryce canyon", "arches", "mount rainier", "crater lake",
        "joshua tree", "death valley", "everglades", "denali", "badlands", "sequoia", "kings canyon",
        "capitol reef", "canyonlands", "mesa verde", "petrified forest", "saguaro", "big bend",
        "guadalupe mountains", "carlsbad caverns", "hot springs", "mammoth cave", "shenandoah",
        "great smoky mountains", "congaree", "biscayne", "dry tortugas", "virgin islands",
        "hawaii volcanoes", "haleakala", "american samoa", "channel islands", "redwood",
        "lassen volcanic", "north cascades", "theodore roosevelt", "wind cave", "voyageurs",
        "isle royale", "gateway arch", "indiana dunes"
    ],
    
    "Rivers of the World": [
        "amazon", "nile", "mississippi", "yangtze", "yellow river", "congo", "mekong", "ganges",
        "danube", "volga", "rhine", "seine", "thames", "colorado", "columbia", "missouri",
        "ohio", "rio grande", "hudson", "potomac", "yukon", "mackenzie", "st lawrence", "murray",
        "darling", "zambezi", "niger", "orange", "limpopo", "tigris", "euphrates", "jordan",
        "indus", "brahmaputra", "irrawaddy", "salween", "ob", "yenisei", "lena", "amur",
        "dnieper", "don", "elbe", "oder", "vistula", "tagus", "ebro", "po", "tiber"
    ],
    
    // FOOD & DRINK (15 categories)
    "Pizza Toppings": [
        "pepperoni", "sausage", "mushrooms", "onions", "green peppers", "black olives", "bacon",
        "ham", "pineapple", "chicken", "beef", "anchovies", "spinach", "tomatoes", "garlic",
        "jalapenos", "banana peppers", "red peppers", "artichokes", "basil", "oregano", "feta cheese",
        "goat cheese", "ricotta", "mozzarella", "cheddar", "parmesan", "bbq sauce", "ranch",
        "buffalo chicken", "meatballs", "salami", "prosciutto", "arugula", "sun dried tomatoes",
        "broccoli", "cauliflower", "corn", "shrimp", "tuna", "eggs", "potatoes"
    ],
    
    "Ice Cream Flavors": [
        "vanilla", "chocolate", "strawberry", "mint chocolate chip", "cookie dough", "cookies and cream",
        "rocky road", "butter pecan", "coffee", "caramel", "pistachio", "neapolitan", "cherry garcia",
        "chocolate chip", "pralines and cream", "fudge", "moose tracks", "birthday cake", "cotton candy",
        "bubblegum", "rum raisin", "mango", "lemon", "raspberry", "coconut", "peanut butter",
        "banana", "peach", "green tea", "matcha", "lavender", "honey", "cinnamon", "maple",
        "brownie", "cheesecake", "tiramisu", "red velvet", "salted caramel", "dulce de leche"
    ],
    
    "Breakfast Foods": [
        "eggs", "bacon", "sausage", "pancakes", "waffles", "french toast", "toast", "bagel",
        "cereal", "oatmeal", "yogurt", "granola", "muffin", "croissant", "danish", "donut",
        "coffee", "orange juice", "milk", "tea", "smoothie", "fruit", "banana", "berries",
        "hash browns", "home fries", "grits", "biscuits", "gravy", "quiche", "frittata",
        "omelet", "scrambled eggs", "fried eggs", "poached eggs", "english muffin", "jam",
        "butter", "syrup", "honey", "avocado toast", "breakfast burrito", "crepes"
    ],
    
    "Types of Cheese": [
        "cheddar", "mozzarella", "swiss", "american", "provolone", "gouda", "brie", "camembert",
        "parmesan", "romano", "asiago", "blue cheese", "gorgonzola", "roquefort", "stilton",
        "feta", "goat cheese", "ricotta", "cottage cheese", "cream cheese", "mascarpone",
        "gruyere", "emmental", "jarlsberg", "havarti", "muenster", "monterey jack", "pepper jack",
        "colby", "manchego", "pecorino", "halloumi", "paneer", "queso fresco", "oaxaca",
        "raclette", "fontina", "taleggio", "limburger", "port salut", "boursin", "chevre"
    ],
    
    "Pasta Shapes": [
        "spaghetti", "penne", "rigatoni", "fettuccine", "linguine", "angel hair", "lasagna",
        "ravioli", "tortellini", "macaroni", "shells", "bowtie", "farfalle", "fusilli",
        "rotini", "cavatappi", "orzo", "ditalini", "ziti", "cannelloni", "manicotti",
        "orecchiette", "radiatori", "gemelli", "bucatini", "pappardelle", "tagliatelle",
        "capellini", "vermicelli", "conchiglie", "mezze maniche", "paccheri", "strozzapreti",
        "trofie", "casarecce", "calamarata", "anelli", "stelline", "alfabeto", "gnocchi"
    ],
    
    "Coffee Drinks": [
        "espresso", "americano", "latte", "cappuccino", "macchiato", "mocha", "flat white",
        "cortado", "gibralter", "ristretto", "lungo", "doppio", "affogato", "irish coffee",
        "turkish coffee", "french press", "cold brew", "iced coffee", "frappe", "frappuccino",
        "nitro", "pour over", "chemex", "v60", "aeropress", "drip", "instant", "bulletproof",
        "red eye", "black eye", "dirty chai", "chai latte", "matcha latte", "golden latte",
        "turmeric latte", "oat milk latte", "almond milk latte", "soy latte", "coconut latte",
        "vanilla latte", "caramel macchiato", "pumpkin spice latte", "vietnamese coffee"
    ],
    
    "Cocktails": [
        "margarita", "martini", "mojito", "manhattan", "old fashioned", "negroni", "daiquiri",
        "cosmopolitan", "bloody mary", "mai tai", "pina colada", "long island", "whiskey sour",
        "gin and tonic", "vodka tonic", "rum and coke", "screwdriver", "tequila sunrise",
        "moscow mule", "dark and stormy", "bellini", "mimosa", "aperol spritz", "paloma",
        "caipirinha", "sidecar", "french 75", "tom collins", "gimlet", "aviation", "sazerac",
        "mint julep", "white russian", "black russian", "mudslide", "blue hawaii", "hurricane",
        "zombie", "painkiller", "singapore sling", "ramos gin fizz", "brandy alexander"
    ],
    
    "Spices and Herbs": [
        "salt", "pepper", "garlic", "onion", "paprika", "cumin", "coriander", "turmeric",
        "ginger", "cinnamon", "nutmeg", "cloves", "cardamom", "bay leaves", "oregano", "basil",
        "thyme", "rosemary", "sage", "parsley", "cilantro", "dill", "mint", "tarragon",
        "chives", "fennel", "anise", "star anise", "saffron", "vanilla", "cayenne", "chili",
        "mustard", "curry", "garam masala", "five spice", "allspice", "juniper", "sumac",
        "fenugreek", "asafoetida", "nigella", "celery seed", "caraway", "poppy seed", "sesame"
    ],
    
    "Fruits": [
        "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry", "blackberry",
        "cherry", "peach", "plum", "pear", "pineapple", "mango", "papaya", "kiwi", "watermelon",
        "cantaloupe", "honeydew", "lemon", "lime", "grapefruit", "coconut", "avocado", "tomato",
        "apricot", "fig", "date", "pomegranate", "cranberry", "gooseberry", "elderberry", "mulberry",
        "guava", "passion fruit", "dragon fruit", "star fruit", "lychee", "persimmon", "quince",
        "jackfruit", "durian", "rambutan", "mangosteen", "breadfruit", "plantain", "tangerine",
        "clementine", "nectarine", "boysenberry", "currant", "lingonberry"
    ],
    
    "Vegetables": [
        "carrot", "broccoli", "cauliflower", "spinach", "lettuce", "tomato", "cucumber", "pepper",
        "onion", "garlic", "potato", "sweet potato", "corn", "peas", "green beans", "asparagus",
        "celery", "mushroom", "zucchini", "squash", "pumpkin", "eggplant", "cabbage", "brussels sprouts",
        "kale", "chard", "beet", "turnip", "radish", "artichoke", "leek", "fennel", "okra",
        "parsnip", "rutabaga", "bok choy", "watercress", "arugula", "endive", "radicchio",
        "collard greens", "mustard greens", "snap peas", "bean sprouts", "bamboo shoots"
    ],
    
    "Types of Bread": [
        "white", "wheat", "whole wheat", "rye", "sourdough", "pumpernickel", "multigrain",
        "baguette", "ciabatta", "focaccia", "brioche", "challah", "naan", "pita", "tortilla",
        "bagel", "english muffin", "croissant", "pretzel", "dinner roll", "kaiser roll",
        "hoagie roll", "hamburger bun", "hot dog bun", "breadstick", "garlic bread", "cornbread",
        "biscuit", "scone", "muffin", "banana bread", "zucchini bread", "irish soda bread",
        "french bread", "italian bread", "portuguese roll", "bolillo", "telera", "pan dulce",
        "flatbread", "lavash", "matzo", "cracker", "melba toast", "crostini", "bruschetta"
    ],
    
    "Candy Types": [
        "chocolate", "gummy bears", "lollipop", "caramel", "taffy", "licorice", "jelly beans",
        "hard candy", "peppermint", "butterscotch", "toffee", "fudge", "nougat", "marshmallow",
        "cotton candy", "rock candy", "candy corn", "gum", "mints", "sour patch", "skittles",
        "m&ms", "reeses", "snickers", "twix", "kit kat", "butterfinger", "milky way", "twizzlers",
        "starburst", "jolly rancher", "nerds", "laffy taffy", "airheads", "warheads", "ring pop",
        "pop rocks", "pixie sticks", "smarties", "sweet tarts", "dum dums", "tootsie roll"
    ],
    
    "Fast Food Chains": [
        "mcdonalds", "burger king", "wendys", "subway", "taco bell", "kfc", "pizza hut",
        "dominos", "papa johns", "little caesars", "arbys", "jack in the box", "carls jr",
        "hardees", "sonic", "dairy queen", "popeyes", "chick fil a", "chipotle", "panera",
        "five guys", "in n out", "whataburger", "white castle", "shake shack", "jimmy johns",
        "jersey mikes", "firehouse subs", "qdoba", "moes", "del taco", "el pollo loco",
        "boston market", "panda express", "raising canes", "zaxbys", "bojangles", "culvers",
        "steak n shake", "checkers", "rallys", "church's chicken", "long john silvers"
    ],
    
    "Types of Cookies": [
        "chocolate chip", "oatmeal raisin", "sugar", "snickerdoodle", "peanut butter", "gingerbread",
        "shortbread", "butter", "molasses", "gingersnap", "macadamia nut", "double chocolate",
        "white chocolate", "m&m", "oreo", "thin mint", "samoa", "tagalong", "trefoil",
        "lemon", "linzer", "thumbprint", "biscotti", "madeline", "macaroon", "macaron",
        "fortune", "wafer", "pizzelle", "stroopwafel", "anzac", "digestive", "jammie dodger",
        "tim tam", "milano", "nutter butter", "fig newton", "animal crackers", "graham crackers",
        "teddy grahams", "vanilla wafers", "ladyfingers", "pfeffernusse", "lebkuchen"
    ],
    
    "Sushi Types": [
        "california roll", "spicy tuna", "salmon", "tuna", "yellowtail", "eel", "shrimp tempura",
        "spider roll", "rainbow roll", "dragon roll", "philadelphia roll", "alaska roll",
        "caterpillar roll", "volcano roll", "tiger roll", "nigiri", "sashimi", "maki", "temaki",
        "chirashi", "inari", "gunkan", "futomaki", "hosomaki", "uramaki", "oshizushi",
        "narezushi", "sasazushi", "kakinoha", "mackerel", "octopus", "squid", "sea urchin",
        "ikura", "tobiko", "masago", "tamago", "cucumber roll", "avocado roll", "veggie roll",
        "scallop", "crab", "lobster roll", "surf and turf", "baked salmon", "dynamite roll"
    ],
    
    // ENTERTAINMENT & MEDIA (15 categories)
    "Disney Movies": [
        "snow white", "pinocchio", "fantasia", "dumbo", "bambi", "cinderella", "alice in wonderland",
        "peter pan", "lady and the tramp", "sleeping beauty", "101 dalmatians", "the jungle book",
        "the little mermaid", "beauty and the beast", "aladdin", "the lion king", "pocahontas",
        "toy story", "mulan", "tarzan", "monsters inc", "finding nemo", "the incredibles", "cars",
        "ratatouille", "wall-e", "up", "brave", "frozen", "moana", "coco", "encanto", "tangled",
        "princess and the frog", "bolt", "wreck it ralph", "big hero 6", "zootopia", "inside out",
        "the good dinosaur", "finding dory", "cars 2", "cars 3", "incredibles 2", "toy story 2",
        "toy story 3", "toy story 4", "frozen 2", "raya", "luca", "turning red", "lightyear"
    ],
    
    "Marvel Superheroes": [
        "iron man", "captain america", "thor", "hulk", "black widow", "hawkeye", "spider-man",
        "black panther", "doctor strange", "ant-man", "wasp", "captain marvel", "scarlet witch",
        "vision", "falcon", "winter soldier", "war machine", "star-lord", "gamora", "drax",
        "rocket", "groot", "mantis", "nebula", "yondu", "loki", "valkyrie", "okoye", "shuri",
        "wong", "nick fury", "maria hill", "phil coulson", "daredevil", "jessica jones",
        "luke cage", "iron fist", "punisher", "elektra", "blade", "ghost rider", "fantastic four",
        "wolverine", "cyclops", "storm", "jean grey", "professor x", "magneto", "mystique",
        "beast", "iceman", "rogue", "gambit", "deadpool", "cable", "x-23", "quicksilver"
    ],
    
    "Netflix Original Shows": [
        "stranger things", "the crown", "ozark", "narcos", "house of cards", "orange is the new black",
        "the witcher", "bridgerton", "squid game", "wednesday", "dahmer", "you", "lucifer",
        "the umbrella academy", "money heist", "dark", "the queens gambit", "tiger king",
        "making a murderer", "mindhunter", "black mirror", "sex education", "elite", "lupin",
        "shadow and bone", "sweet tooth", "the haunting", "midnight mass", "love is blind",
        "the circle", "too hot to handle", "selling sunset", "queer eye", "nailed it",
        "the great british baking show", "cobra kai", "never have i ever", "emily in paris",
        "virgin river", "outer banks", "ginny and georgia", "sweet magnolias", "firefly lane",
        "grace and frankie", "dead to me", "russian doll", "glow", "bojack horseman", "big mouth"
    ],
    
    "Top 20 Best-Selling Music Artists": [
        "beatles", "elvis", "elvis presley", "michael jackson", "madonna", "queen", "elton john",
        "pink floyd", "led zeppelin", "rihanna", "eminem", "taylor swift", "mariah carey",
        "beyonce", "eagles", "celine dion", "drake", "garth brooks", "kanye west", "justin bieber",
        "ed sheeran", "bruno mars", "billy joel", "phil collins", "ac dc", "whitney houston",
        "adele", "rolling stones", "barbra streisand", "frank sinatra", "rod stewart"
    ],
    
    "Oscar Best Picture Winners": [
        "wings", "broadway melody", "all quiet on the western front", "cimarron", "grand hotel",
        "cavalcade", "it happened one night", "mutiny on the bounty", "the great ziegfeld",
        "life of emile zola", "you cant take it with you", "gone with the wind", "rebecca",
        "how green was my valley", "mrs miniver", "casablanca", "going my way", "the lost weekend",
        "the best years of our lives", "gentlemans agreement", "hamlet", "all the kings men",
        "all about eve", "an american in paris", "the greatest show on earth", "from here to eternity",
        "on the waterfront", "marty", "around the world in 80 days", "the bridge on the river kwai",
        "gigi", "ben-hur", "the apartment", "west side story", "lawrence of arabia", "tom jones",
        "my fair lady", "the sound of music", "a man for all seasons", "in the heat of the night",
        "oliver", "midnight cowboy", "patton", "the french connection", "the godfather", "the sting",
        "the godfather part ii", "one flew over the cuckoos nest", "rocky", "annie hall",
        "the deer hunter", "kramer vs kramer", "ordinary people", "chariots of fire", "gandhi",
        "terms of endearment", "amadeus", "out of africa", "platoon", "the last emperor",
        "rain man", "driving miss daisy", "dances with wolves", "the silence of the lambs",
        "unforgiven", "schindlers list", "forrest gump", "braveheart", "the english patient",
        "titanic", "shakespeare in love", "american beauty", "gladiator", "a beautiful mind",
        "chicago", "the lord of the rings", "million dollar baby", "crash", "the departed",
        "no country for old men", "slumdog millionaire", "the hurt locker", "the kings speech",
        "the artist", "argo", "12 years a slave", "birdman", "spotlight", "moonlight",
        "the shape of water", "green book", "parasite", "nomadland", "coda", "everything everywhere"
    ],
    
    "TV Game Shows": [
        "jeopardy", "wheel of fortune", "the price is right", "family feud", "who wants to be a millionaire",
        "deal or no deal", "lets make a deal", "the weakest link", "cash cab", "are you smarter than a 5th grader",
        "pyramid", "match game", "hollywood squares", "press your luck", "card sharks", "the dating game",
        "the newlywed game", "to tell the truth", "whats my line", "password", "concentration",
        "tic tac dough", "the jokers wild", "name that tune", "beat the clock", "truth or consequences",
        "twenty one", "the gong show", "double dare", "legends of the hidden temple", "guts",
        "american gladiators", "fear factor", "the amazing race", "survivor", "big brother",
        "the bachelor", "the bachelorette", "love island", "the masked singer", "the voice",
        "american idol", "americas got talent", "dancing with the stars", "so you think you can dance",
        "project runway", "top chef", "hells kitchen", "masterchef", "the great british bake off"
    ],
    
    "Beatles Songs": [
        "love me do", "please please me", "from me to you", "she loves you", "i want to hold your hand",
        "cant buy me love", "a hard days night", "i feel fine", "eight days a week", "ticket to ride",
        "help", "yesterday", "day tripper", "we can work it out", "paperback writer", "yellow submarine",
        "eleanor rigby", "penny lane", "strawberry fields forever", "all you need is love",
        "hello goodbye", "lady madonna", "hey jude", "revolution", "get back", "the ballad of john and yoko",
        "something", "come together", "let it be", "the long and winding road", "i saw her standing there",
        "twist and shout", "all my loving", "and i love her", "if i fell", "things we said today",
        "ill follow the sun", "no reply", "im a loser", "baby's in black", "rock and roll music",
        "ill cry instead", "ill be back", "you've got to hide your love away", "norwegian wood",
        "nowhere man", "michelle", "in my life", "girl", "here there and everywhere", "good day sunshine",
        "got to get you into my life", "with a little help from my friends", "lucy in the sky with diamonds",
        "when im sixty-four", "lovely rita", "a day in the life", "all you need is love", "i am the walrus",
        "magical mystery tour", "the fool on the hill", "ob-la-di ob-la-da", "while my guitar gently weeps",
        "blackbird", "here comes the sun", "octopus's garden", "i want you", "because", "golden slumbers",
        "carry that weight", "the end", "her majesty"
    ],
    
    "Musical Instruments": [
        "piano", "guitar", "violin", "drums", "bass", "trumpet", "saxophone", "flute", "clarinet",
        "trombone", "cello", "viola", "harp", "oboe", "bassoon", "french horn", "tuba", "piccolo",
        "mandolin", "banjo", "ukulele", "accordion", "harmonica", "keyboard", "synthesizer",
        "organ", "harpsichord", "xylophone", "marimba", "vibraphone", "timpani", "tambourine",
        "triangle", "cymbals", "gong", "cowbell", "bongos", "congas", "djembe", "tabla", "sitar",
        "didgeridoo", "bagpipes", "kazoo", "recorder", "ocarina", "pan flute", "steel drums",
        "castanets", "maracas", "guiro", "cabasa", "rain stick", "kalimba", "theremin", "hurdy gurdy"
    ],
    
    "Broadway Musicals": [
        "hamilton", "the lion king", "wicked", "the phantom of the opera", "chicago", "the book of mormon",
        "dear evan hansen", "les miserables", "cats", "rent", "a chorus line", "west side story",
        "the sound of music", "oklahoma", "annie", "hairspray", "mamma mia", "jersey boys",
        "the producers", "avenue q", "in the heights", "come from away", "waitress", "mean girls",
        "frozen", "aladdin", "beauty and the beast", "mary poppins", "matilda", "school of rock",
        "kinky boots", "spring awakening", "next to normal", "fun home", "falsettos", "company",
        "sweeney todd", "into the woods", "sunday in the park with george", "a little night music",
        "follies", "cabaret", "kiss me kate", "guys and dolls", "hello dolly", "fiddler on the roof",
        "my fair lady", "carousel", "south pacific", "the king and i", "singin in the rain",
        "42nd street", "anything goes", "how to succeed in business", "bye bye birdie", "grease",
        "little shop of horrors", "the rocky horror show", "hedwig and the angry inch", "once"
    ],
    
    "Cartoon Characters": [
        "mickey mouse", "bugs bunny", "spongebob", "bart simpson", "homer simpson", "scooby doo",
        "tom", "jerry", "popeye", "donald duck", "goofy", "daffy duck", "porky pig", "tweety",
        "sylvester", "road runner", "wile e coyote", "fred flintstone", "george jetson",
        "yogi bear", "pink panther", "garfield", "snoopy", "charlie brown", "calvin", "hobbes",
        "stewie griffin", "peter griffin", "eric cartman", "kenny", "stan marsh", "kyle",
        "beavis", "butthead", "daria", "johnny bravo", "dexter", "powerpuff girls", "samurai jack",
        "finn", "jake", "steven universe", "gumball", "rick", "morty", "bojack horseman"
    ],
    
    "Top 20 Video Games of All Time": [
        "tetris", "minecraft", "grand theft auto", "gta", "wii sports", "pubg", "mario", "pokemon",
        "skyrim", "zelda", "pac-man", "pacman", "call of duty", "fortnite", "overwatch",
        "red dead redemption", "super smash bros", "animal crossing", "doom", "final fantasy",
        "street fighter", "mortal kombat", "halo", "world of warcraft", "wow", "league of legends",
        "counter-strike", "half-life", "portal", "bioshock", "mass effect", "fallout",
        "witcher", "dark souls", "god of war", "uncharted", "last of us", "resident evil"
    ],
    
    "Harry Potter Characters": [
        "harry potter", "hermione granger", "ron weasley", "albus dumbledore", "severus snape",
        "voldemort", "tom riddle", "draco malfoy", "rubeus hagrid", "minerva mcgonagall",
        "sirius black", "remus lupin", "neville longbottom", "luna lovegood", "ginny weasley",
        "fred weasley", "george weasley", "molly weasley", "arthur weasley", "bill weasley",
        "charlie weasley", "percy weasley", "bellatrix lestrange", "lucius malfoy", "narcissa malfoy",
        "dobby", "kreacher", "hedwig", "crookshanks", "buckbeak", "fawkes", "nagini", "fluffy",
        "aragog", "grawp", "nymphadora tonks", "mad-eye moody", "kingsley shacklebolt",
        "cornelius fudge", "dolores umbridge", "gilderoy lockhart", "quirinus quirrell",
        "horace slughorn", "pomona sprout", "filius flitwick", "poppy pomfrey", "argus filch",
        "nearly headless nick", "moaning myrtle", "the bloody baron", "the fat lady", "peeves",
        "oliver wood", "katie bell", "angelina johnson", "lee jordan", "dean thomas", "seamus finnigan",
        "lavender brown", "parvati patil", "padma patil", "cho chang", "cedric diggory",
        "fleur delacour", "viktor krum", "peter pettigrew", "james potter", "lily potter"
    ],
    
    "Star Wars Characters": [
        "luke skywalker", "princess leia", "han solo", "darth vader", "anakin skywalker",
        "obi-wan kenobi", "yoda", "emperor palpatine", "chewbacca", "r2-d2", "c-3po",
        "padme amidala", "qui-gon jinn", "mace windu", "boba fett", "jango fett", "jabba the hutt",
        "lando calrissian", "rey", "finn", "poe dameron", "kylo ren", "ben solo", "snoke",
        "general hux", "captain phasma", "bb-8", "grogu", "baby yoda", "the mandalorian",
        "din djarin", "ahsoka tano", "grand admiral thrawn", "ezra bridger", "kanan jarrus",
        "hera syndulla", "sabine wren", "zeb orrelios", "chopper", "cal kestis", "jyn erso",
        "cassian andor", "k-2so", "chirrut imwe", "baze malbus", "saw gerrera", "mon mothma",
        "bail organa", "grand moff tarkin", "admiral ackbar", "wedge antilles", "biggs darklighter",
        "uncle owen", "aunt beru", "shmi skywalker", "watto", "sebulba", "jar jar binks",
        "boss nass", "nute gunray", "count dooku", "general grievous", "asajj ventress",
        "savage opress", "darth maul", "jedi younglings", "tusken raiders", "jawas", "ewoks"
    ],
    
    "Famous Directors": [
        "steven spielberg", "martin scorsese", "alfred hitchcock", "stanley kubrick", "francis ford coppola",
        "quentin tarantino", "christopher nolan", "james cameron", "ridley scott", "george lucas",
        "peter jackson", "tim burton", "david fincher", "coen brothers", "wes anderson", "paul thomas anderson",
        "denis villeneuve", "guillermo del toro", "alfonso cuaron", "alejandro inarritu", "spike lee",
        "clint eastwood", "woody allen", "david lynch", "terrence malick", "darren aronofsky",
        "michael bay", "j.j. abrams", "ron howard", "robert zemeckis", "sam raimi", "john carpenter",
        "brian de palma", "oliver stone", "michael mann", "tony scott", "john woo", "zhang yimou",
        "akira kurosawa", "hayao miyazaki", "federico fellini", "ingmar bergman", "andrei tarkovsky",
        "jean-luc godard", "francois truffaut", "orson welles", "billy wilder", "howard hawks",
        "john ford", "frank capra", "charlie chaplin", "buster keaton", "sergei eisenstein",
        "d.w. griffith", "fritz lang", "f.w. murnau", "luis bunuel", "roberto rossellini"
    ],
    
    "Famous Actors": [
        "tom hanks", "robert de niro", "al pacino", "jack nicholson", "marlon brando", "daniel day-lewis",
        "anthony hopkins", "morgan freeman", "samuel l jackson", "denzel washington", "leonardo dicaprio",
        "brad pitt", "johnny depp", "will smith", "tom cruise", "robert downey jr", "christian bale",
        "matt Damon", "ben affleck", "george clooney", "ryan gosling", "jake gyllenhaal", "joaquin phoenix",
        "matthew mcconaughey", "woody harrelson", "kevin spacey", "russell crowe", "hugh jackman",
        "ryan reynolds", "chris pratt", "chris hemsworth", "chris evans", "chris pine", "mark ruffalo",
        "scarlett johansson", "jennifer lawrence", "meryl streep", "cate blanchett", "nicole kidman",
        "charlize theron", "natalie portman", "anne hathaway", "emma stone", "sandra bullock",
        "julia roberts", "angelina jolie", "jennifer aniston", "reese witherspoon", "amy adams",
        "jessica chastain", "viola davis", "octavia spencer", "lupita nyongo", "margot robbie",
        "saoirse ronan", "florence pugh", "anya taylor-joy", "zendaya", "timothee chalamet"
    ],
    
    // ANIMALS & NATURE (10 categories)
    "Dog Breeds": [
        "labrador", "golden retriever", "bulldog", "beagle", "poodle", "rottweiler", "pointer",
        "dachshund", "yorkshire terrier", "yorkie", "boxer", "siberian husky", "husky",
        "great dane", "pug", "boston terrier", "shih tzu", "pomeranian", "chihuahua", "border collie",
        "basset hound", "cocker spaniel", "mastiff", "maltese", "schnauzer", "corgi", "shiba inu",
        "german shepherd", "pit bull", "pitbull", "australian shepherd", "cavalier", "french bulldog",
        "doberman", "akita", "bloodhound", "dalmatian", "greyhound", "saint bernard", "papillon",
        "bichon frise", "newfoundland", "collie", "samoyed", "weimaraner", "bernese mountain dog"
    ],
    
    "Cat Breeds": [
        "persian", "maine coon", "siamese", "ragdoll", "bengal", "british shorthair", "abyssinian",
        "scottish fold", "sphynx", "devon rex", "american shorthair", "exotic shorthair", "russian blue",
        "norwegian forest cat", "birman", "oriental shorthair", "cornish rex", "selkirk rex",
        "burmese", "tonkinese", "egyptian mau", "manx", "ocicat", "somali", "turkish angora",
        "turkish van", "chartreux", "balinese", "havana brown", "korat", "laperm", "nebelung",
        "peterbald", "pixiebob", "ragamuffin", "siberian", "singapura", "snowshoe", "toyger",
        "american curl", "american wirehair", "bombay", "colorpoint shorthair", "javanese",
        "munchkin", "savannah", "himalayan", "cymric", "chausie", "khao manee"
    ],
    
    "Ocean Animals": [
        "shark", "whale", "dolphin", "octopus", "jellyfish", "starfish", "seahorse", "ray",
        "stingray", "manta ray", "eel", "tuna", "salmon", "swordfish", "marlin", "barracuda",
        "angelfish", "clownfish", "pufferfish", "sea turtle", "sea lion", "seal", "walrus",
        "manatee", "otter", "crab", "lobster", "shrimp", "oyster", "clam", "mussel", "squid",
        "nautilus", "coral", "anemone", "urchin", "sea cucumber", "barnacle", "krill", "plankton",
        "hammerhead", "great white", "blue whale", "orca", "killer whale", "narwhal", "beluga"
    ],
    
    "Birds": [
        "eagle", "hawk", "falcon", "owl", "parrot", "crow", "raven", "sparrow", "robin", "cardinal",
        "blue jay", "woodpecker", "hummingbird", "pelican", "seagull", "albatross", "flamingo",
        "peacock", "turkey", "chicken", "duck", "goose", "swan", "crane", "heron", "stork",
        "penguin", "ostrich", "emu", "kiwi", "vulture", "condor", "pigeon", "dove", "canary",
        "parakeet", "cockatiel", "cockatoo", "macaw", "toucan", "puffin", "kingfisher", "finch",
        "warbler", "oriole", "chickadee", "nuthatch", "wren", "thrush", "blackbird", "starling",
        "magpie", "jay", "grouse", "pheasant", "quail", "partridge", "roadrunner", "cuckoo"
    ],
    
    "Dinosaurs": [
        "tyrannosaurus", "t-rex", "triceratops", "stegosaurus", "brachiosaurus", "velociraptor",
        "pterodactyl", "pteranodon", "diplodocus", "allosaurus", "spinosaurus", "ankylosaurus",
        "parasaurolophus", "pachycephalosaurus", "apatosaurus", "brontosaurus", "iguanodon",
        "deinonychus", "dilophosaurus", "compsognathus", "gallimimus", "archaeopteryx",
        "carnotaurus", "giganotosaurus", "megalosaurus", "microraptor", "oviraptor", "protoceratops",
        "styracosaurus", "therizinosaurus", "utahraptor", "baryonyx", "ceratosaurus", "corythosaurus",
        "dracorex", "edmontosaurus", "euoplocephalus", "hadrosaurus", "hypsilophodon", "kentrosaurus",
        "lambeosaurus", "maiasaura", "ornithomimus", "pachyrhinosaurus", "plateosaurus", "quetzalcoatlus"
    ],
    
    "Flowers": [
        "rose", "tulip", "daisy", "sunflower", "lily", "orchid", "daffodil", "iris", "peony",
        "hydrangea", "carnation", "chrysanthemum", "dahlia", "zinnia", "marigold", "pansy",
        "violet", "lavender", "jasmine", "gardenia", "magnolia", "azalea", "rhododendron",
        "camellia", "hibiscus", "bougainvillea", "geranium", "begonia", "petunia", "impatiens",
        "snapdragon", "cosmos", "aster", "poppy", "buttercup", "bluebell", "foxglove", "hollyhock",
        "larkspur", "delphinium", "gladiolus", "amaryllis", "freesia", "ranunculus", "anemone",
        "bird of paradise", "calla lily", "bleeding heart", "columbine", "morning glory",
        "sweet pea", "wisteria", "honeysuckle", "clematis", "passion flower", "plumeria"
    ],
    
    "Trees": [
        "oak", "maple", "pine", "birch", "willow", "elm", "ash", "cedar", "spruce", "fir",
        "redwood", "sequoia", "palm", "apple", "cherry", "peach", "pear", "orange", "lemon",
        "lime", "grapefruit", "avocado", "mango", "banana", "coconut", "olive", "fig", "walnut",
        "pecan", "almond", "chestnut", "hazelnut", "beech", "poplar", "sycamore", "cypress",
        "eucalyptus", "acacia", "baobab", "banyan", "bamboo", "dogwood", "magnolia", "holly",
        "juniper", "larch", "hickory", "cottonwood", "aspen", "alder", "buckeye", "catalpa",
        "ginkgo", "hawthorn", "locust", "mulberry", "sassafras", "sumac", "tamarack", "yew"
    ],
    
    "Insects": [
        "ant", "bee", "wasp", "hornet", "butterfly", "moth", "caterpillar", "beetle", "ladybug",
        "dragonfly", "damselfly", "grasshopper", "cricket", "locust", "praying mantis", "mantis",
        "cockroach", "termite", "fly", "mosquito", "gnat", "midge", "firefly", "lightning bug",
        "cicada", "aphid", "earwig", "silverfish", "centipede", "millipede", "spider", "tick",
        "mite", "scorpion", "flea", "louse", "bedbug", "stink bug", "water bug", "june bug",
        "weevil", "scarab", "dung beetle", "rhinoceros beetle", "stag beetle", "walking stick",
        "leaf insect", "assassin bug", "shield bug", "lacewing", "mayfly", "caddisfly"
    ],
    
    "Farm Animals": [
        "cow", "pig", "chicken", "horse", "sheep", "goat", "duck", "turkey", "goose", "donkey",
        "mule", "llama", "alpaca", "rooster", "hen", "bull", "ox", "ram", "ewe", "lamb",
        "piglet", "calf", "foal", "colt", "filly", "mare", "stallion", "gelding", "boar", "sow",
        "billy goat", "nanny goat", "kid", "drake", "peacock", "peahen", "guinea fowl", "quail",
        "pheasant", "rabbit", "bunny", "cat", "dog", "barn cat", "farm dog", "herding dog",
        "guard dog", "mouser", "ratter", "working horse", "draft horse", "pony"
    ],
    
    "Zoo Animals": [
        "lion", "tiger", "elephant", "giraffe", "zebra", "hippopotamus", "rhinoceros", "cheetah",
        "leopard", "jaguar", "panther", "bear", "polar bear", "grizzly bear", "panda", "koala",
        "kangaroo", "wallaby", "monkey", "chimpanzee", "gorilla", "orangutan", "baboon", "lemur",
        "meerkat", "otter", "seal", "sea lion", "penguin", "flamingo", "peacock", "ostrich", "emu",
        "cassowary", "tapir", "capybara", "anteater", "armadillo", "sloth", "hyena", "wolf",
        "fox", "lynx", "bobcat", "cougar", "mountain lion", "gazelle", "antelope", "deer",
        "moose", "elk", "caribou", "bison", "buffalo", "yak", "camel", "dromedary", "llama",
        "alpaca", "warthog", "peccary", "okapi", "binturong", "red panda", "clouded leopard"
    ],
    
    // SPORTS & ACTIVITIES (10 categories)
    "Sports": [
        "football", "basketball", "baseball", "soccer", "hockey", "tennis", "golf", "volleyball",
        "swimming", "running", "track", "gymnastics", "boxing", "wrestling", "martial arts",
        "skiing", "snowboarding", "skating", "surfing", "cycling", "cricket", "rugby", "lacrosse",
        "field hockey", "badminton", "table tennis", "ping pong", "archery", "bowling", "darts",
        "pool", "billiards", "chess", "poker", "fishing", "hunting", "sailing", "rowing",
        "kayaking", "rock climbing", "skateboarding", "bmx", "motocross", "formula 1", "nascar"
    ],
    
    "Olympic Sports": [
        "swimming", "diving", "water polo", "synchronized swimming", "track and field", "marathon",
        "race walking", "gymnastics", "rhythmic gymnastics", "trampoline", "basketball", "volleyball",
        "beach volleyball", "soccer", "tennis", "table tennis", "badminton", "boxing", "wrestling",
        "judo", "taekwondo", "karate", "fencing", "archery", "shooting", "weightlifting",
        "rowing", "canoeing", "kayaking", "sailing", "cycling", "mountain biking", "bmx",
        "equestrian", "triathlon", "modern pentathlon", "golf", "rugby", "field hockey",
        "handball", "baseball", "softball", "skateboarding", "sport climbing", "surfing",
        "breaking", "ice hockey", "figure skating", "speed skating", "short track", "curling",
        "skiing", "snowboarding", "biathlon", "bobsled", "luge", "skeleton", "ski jumping"
    ],
    
    "NFL Teams": [
        "patriots", "bills", "dolphins", "jets", "ravens", "bengals", "browns", "steelers",
        "texans", "colts", "jaguars", "titans", "broncos", "chiefs", "raiders", "chargers",
        "cowboys", "giants", "eagles", "commanders", "bears", "lions", "packers", "vikings",
        "falcons", "panthers", "saints", "buccaneers", "cardinals", "rams", "49ers", "seahawks"
    ],
    
    "NBA Teams": [
        "celtics", "nets", "knicks", "76ers", "sixers", "raptors", "bulls", "cavaliers", "pistons",
        "pacers", "bucks", "hawks", "hornets", "heat", "magic", "wizards", "nuggets", "timberwolves",
        "thunder", "blazers", "jazz", "warriors", "clippers", "lakers", "suns", "kings",
        "mavericks", "rockets", "grizzlies", "pelicans", "spurs"
    ],
    
    "MLB Teams": [
        "orioles", "red sox", "yankees", "rays", "blue jays", "white sox", "guardians", "tigers",
        "royals", "twins", "astros", "angels", "athletics", "mariners", "rangers", "braves",
        "marlins", "mets", "phillies", "nationals", "cubs", "reds", "brewers", "pirates",
        "cardinals", "diamondbacks", "rockies", "dodgers", "padres", "giants"
    ],
    
    "Famous Athletes": [
        "michael jordan", "lebron james", "kobe bryant", "magic johnson", "larry bird", "kareem abdul-jabbar",
        "tom brady", "peyton manning", "joe montana", "jerry rice", "walter payton", "barry sanders",
        "babe ruth", "willie mays", "hank aaron", "barry bonds", "mickey mantle", "ted williams",
        "wayne gretzky", "mario lemieux", "bobby orr", "gordie howe", "sidney crosby", "alex ovechkin",
        "pele", "diego maradona", "lionel messi", "cristiano ronaldo", "ronaldinho", "zinedine zidane",
        "muhammad ali", "mike tyson", "floyd mayweather", "sugar ray robinson", "tiger woods",
        "jack nicklaus", "arnold palmer", "serena williams", "roger federer", "rafael nadal",
        "novak djokovic", "michael phelps", "usain bolt", "simone biles", "michael schumacher",
        "lewis hamilton", "ayrton senna", "dale earnhardt", "richard petty", "tony hawk"
    ],
    
    "Yoga Poses": [
        "downward dog", "warrior one", "warrior two", "warrior three", "triangle", "tree", "mountain",
        "child's pose", "cobra", "upward dog", "plank", "side plank", "bridge", "wheel", "crow",
        "eagle", "pigeon", "camel", "bow", "boat", "chair", "twisted chair", "half moon",
        "dancer", "standing split", "seated forward fold", "bound angle", "happy baby", "supine twist",
        "legs up the wall", "corpse pose", "lotus", "half lotus", "cat", "cow", "thread the needle",
        "lizard", "frog", "garland", "goddess", "reverse warrior", "extended side angle", "pyramid",
        "wide legged forward fold", "standing forward fold", "halfway lift", "low lunge", "high lunge",
        "crescent lunge", "runners lunge", "skandasana", "firefly", "peacock", "scorpion",
        "headstand", "handstand", "forearm stand", "shoulder stand", "plow", "fish"
    ],
    
    "Dance Styles": [
        "ballet", "jazz", "tap", "hip hop", "contemporary", "modern", "lyrical", "ballroom",
        "salsa", "bachata", "merengue", "tango", "waltz", "foxtrot", "quickstep", "rumba",
        "cha cha", "samba", "paso doble", "jive", "swing", "lindy hop", "west coast swing",
        "east coast swing", "country", "line dancing", "square dancing", "irish", "flamenco",
        "belly dance", "bollywood", "bhangra", "afrobeat", "dancehall", "reggaeton", "breaking",
        "breakdancing", "popping", "locking", "krump", "voguing", "waacking", "house", "techno",
        "rave", "pole dancing", "aerial", "acro", "capoeira", "folk", "clogging", "stomp",
        "broadway", "burlesque", "can can", "charleston", "disco", "go go", "hula", "polka"
    ],
    
    "Card Games": [
        "poker", "texas hold'em", "blackjack", "21", "rummy", "gin rummy", "bridge", "hearts",
        "spades", "euchre", "canasta", "pinochle", "cribbage", "solitaire", "klondike", "spider",
        "freecell", "pyramid", "uno", "skip-bo", "phase 10", "rook", "pitch", "whist", "500",
        "go fish", "crazy eights", "old maid", "war", "slap jack", "speed", "egyptian rat screw",
        "bs", "bullshit", "president", "asshole", "kings cup", "ring of fire", "ride the bus",
        "fuck the dealer", "quarters", "flip cup", "beer pong", "magic the gathering", "pokemon",
        "yu-gi-oh", "hearthstone", "gwent", "slay the spire", "dominion", "ascension"
    ],
    
    "Board Games": [
        "monopoly", "scrabble", "clue", "risk", "chess", "checkers", "backgammon", "life",
        "sorry", "trouble", "battleship", "connect four", "operation", "jenga", "twister",
        "pictionary", "trivial pursuit", "yahtzee", "boggle", "candy land", "chutes and ladders",
        "mouse trap", "hungry hungry hippos", "guess who", "stratego", "othello", "mancala",
        "chinese checkers", "parcheesi", "dominoes", "catan", "settlers of catan", "ticket to ride",
        "pandemic", "codenames", "azul", "wingspan", "splendor", "carcassonne", "agricola"
    ],
    
    // EVERYDAY ITEMS & BRANDS (10 categories)
    "Car Brands": [
        "toyota", "honda", "ford", "chevrolet", "chevy", "nissan", "hyundai", "kia", "mazda",
        "subaru", "volkswagen", "mercedes", "bmw", "audi", "lexus", "acura", "infiniti",
        "cadillac", "lincoln", "buick", "gmc", "ram", "jeep", "dodge", "chrysler", "tesla",
        "volvo", "porsche", "jaguar", "land rover", "range rover", "mini", "fiat", "alfa romeo",
        "maserati", "ferrari", "lamborghini", "bentley", "rolls royce", "aston martin",
        "mitsubishi", "genesis", "polestar", "rivian", "lucid"
    ],
    
    "Clothing Brands": [
        "nike", "adidas", "puma", "reebok", "under armour", "new balance", "asics", "converse",
        "vans", "champion", "fila", "gap", "old navy", "banana republic", "j crew", "h&m",
        "zara", "forever 21", "uniqlo", "target", "walmart", "levis", "wrangler", "lee",
        "calvin klein", "tommy hilfiger", "ralph lauren", "polo", "lacoste", "hugo boss",
        "armani", "versace", "gucci", "prada", "louis vuitton", "chanel", "dior", "burberry",
        "coach", "michael kors", "kate spade", "tory burch", "north face", "patagonia",
        "columbia", "lands end", "ll bean", "eddie bauer", "rei", "dick's sporting goods",
        "lululemon", "athleta", "fabletics", "gymshark", "american eagle", "hollister",
        "abercrombie", "aeropostale", "victoria's secret", "pink"
    ],
    
    "Tech Companies": [
        "apple", "microsoft", "google", "amazon", "facebook", "meta", "netflix", "tesla",
        "nvidia", "intel", "amd", "oracle", "ibm", "hp", "dell", "lenovo", "cisco", "adobe",
        "salesforce", "paypal", "square", "block", "stripe", "uber", "lyft", "airbnb", "doordash",
        "instacart", "grubhub", "spotify", "twitter", "x", "snapchat", "snap", "pinterest",
        "reddit", "discord", "slack", "zoom", "dropbox", "box", "docusign", "atlassian",
        "shopify", "etsy", "ebay", "alibaba", "tencent", "bytedance", "tiktok", "samsung",
        "sony", "nintendo", "xbox", "playstation", "steam", "valve", "epic games", "activision",
        "blizzard", "ea", "electronic arts", "ubisoft", "riot games", "roblox", "unity"
    ],
    
    "Kitchen Appliances": [
        "refrigerator", "fridge", "stove", "oven", "microwave", "dishwasher", "toaster",
        "blender", "mixer", "food processor", "coffee maker", "espresso machine", "kettle",
        "air fryer", "instant pot", "pressure cooker", "slow cooker", "crock pot", "rice cooker",
        "waffle maker", "panini press", "griddle", "deep fryer", "bread maker", "ice cream maker",
        "juicer", "can opener", "electric knife", "garbage disposal", "water filter",
        "wine fridge", "freezer", "warming drawer", "steamer", "sous vide", "vacuum sealer",
        "popcorn maker", "chocolate fountain", "fondue pot", "egg cooker", "hot plate"
    ],
    
    "Furniture": [
        "sofa", "couch", "loveseat", "sectional", "recliner", "chair", "armchair", "ottoman",
        "coffee table", "end table", "side table", "console table", "dining table", "dining chair",
        "bar stool", "desk", "office chair", "bookshelf", "bookcase", "cabinet", "dresser",
        "chest of drawers", "nightstand", "bed", "bed frame", "headboard", "mattress", "box spring",
        "futon", "daybed", "bunk bed", "loft bed", "crib", "changing table", "rocking chair",
        "glider", "bench", "storage bench", "tv stand", "entertainment center", "credenza",
        "sideboard", "buffet", "china cabinet", "hutch", "armoire", "wardrobe", "vanity",
        "mirror", "floor lamp", "table lamp", "chandelier", "rug", "curtains", "blinds"
    ],
    
    "School Supplies": [
        "pencil", "pen", "eraser", "sharpener", "highlighter", "marker", "crayon", "colored pencil",
        "notebook", "binder", "folder", "paper", "lined paper", "graph paper", "construction paper",
        "index cards", "sticky notes", "post its", "tape", "glue", "glue stick", "scissors",
        "ruler", "protractor", "compass", "calculator", "backpack", "lunch box", "pencil case",
        "pencil box", "pencil pouch", "stapler", "staples", "paper clips", "binder clips",
        "rubber bands", "hole punch", "white out", "correction fluid", "dictionary", "thesaurus",
        "textbook", "workbook", "planner", "agenda", "calendar", "dry erase marker", "chalk",
        "clipboard", "push pins", "thumb tacks", "bulletin board", "poster board", "flash cards"
    ],
    
    "Bathroom Items": [
        "toothbrush", "toothpaste", "floss", "mouthwash", "soap", "shampoo", "conditioner",
        "body wash", "loofah", "washcloth", "towel", "bath towel", "hand towel", "bath mat",
        "shower curtain", "toilet paper", "tissues", "cotton balls", "q-tips", "cotton swabs",
        "razor", "shaving cream", "aftershave", "lotion", "moisturizer", "face wash", "toner",
        "serum", "sunscreen", "deodorant", "antiperspirant", "perfume", "cologne", "body spray",
        "hair brush", "comb", "hair dryer", "straightener", "curling iron", "hair gel", "hair spray",
        "mousse", "hair tie", "bobby pins", "nail clippers", "nail file", "tweezers", "makeup",
        "mirror", "scale", "toilet brush", "plunger", "air freshener", "hamper", "robe"
    ],
    
    "Tools": [
        "hammer", "screwdriver", "wrench", "pliers", "drill", "saw", "level", "tape measure",
        "ruler", "square", "chisel", "file", "sandpaper", "clamp", "vise", "workbench",
        "toolbox", "ladder", "step stool", "extension cord", "flashlight", "headlamp",
        "utility knife", "box cutter", "scissors", "wire cutters", "wire strippers", "multimeter",
        "stud finder", "allen wrench", "hex key", "socket wrench", "ratchet", "torque wrench",
        "pipe wrench", "adjustable wrench", "needle nose pliers", "locking pliers", "vice grips",
        "hacksaw", "jigsaw", "circular saw", "miter saw", "table saw", "band saw", "chainsaw",
        "angle grinder", "belt sander", "orbital sander", "router", "dremel", "soldering iron",
        "glue gun", "staple gun", "nail gun", "air compressor", "shop vac", "wheelbarrow"
    ],
    
    "Office Supplies": [
        "computer", "laptop", "monitor", "keyboard", "mouse", "printer", "scanner", "copier",
        "fax machine", "phone", "desk", "chair", "filing cabinet", "bookshelf", "inbox", "outbox",
        "pen", "pencil", "highlighter", "marker", "eraser", "white out", "paper", "notebook",
        "sticky notes", "notepad", "legal pad", "clipboard", "binder", "folder", "file folder",
        "hanging folder", "label maker", "labels", "stapler", "staples", "paper clips", "binder clips",
        "rubber bands", "tape", "tape dispenser", "scissors", "hole punch", "calculator",
        "calendar", "planner", "bulletin board", "whiteboard", "corkboard", "push pins", "thumb tacks",
        "envelope", "stamps", "letter opener", "rubber stamp", "ink pad", "business cards",
        "card holder", "desk organizer", "pen holder", "paper tray", "magazine holder"
    ],
    
    "Cleaning Supplies": [
        "broom", "mop", "bucket", "vacuum", "dustpan", "duster", "feather duster", "swiffer",
        "paper towels", "cleaning cloths", "microfiber cloths", "sponge", "scrub brush",
        "toilet brush", "plunger", "all purpose cleaner", "glass cleaner", "bathroom cleaner",
        "kitchen cleaner", "floor cleaner", "carpet cleaner", "furniture polish", "wood cleaner",
        "stainless steel cleaner", "oven cleaner", "degreaser", "disinfectant", "bleach",
        "ammonia", "vinegar", "baking soda", "dish soap", "dishwasher detergent", "laundry detergent",
        "fabric softener", "dryer sheets", "stain remover", "spot cleaner", "air freshener",
        "deodorizer", "trash bags", "recycling bags", "gloves", "rubber gloves", "mask",
        "apron", "cleaning caddy", "spray bottle", "squeegee", "lint roller", "steam cleaner"
    ],
    
    // ACADEMIC & MISC (10 categories)
    "Chemical Elements": [
        "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen",
        "fluorine", "neon", "sodium", "magnesium", "aluminum", "silicon", "phosphorus", "sulfur",
        "chlorine", "argon", "potassium", "calcium", "scandium", "titanium", "vanadium", "chromium",
        "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium",
        "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium",
        "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver",
        "cadmium", "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "cesium",
        "barium", "lanthanum", "cerium", "praseodymium", "neodymium", "promethium", "samarium",
        "europium", "gadolinium", "terbium", "dysprosium", "holmium", "erbium", "thulium",
        "ytterbium", "lutetium", "hafnium", "tantalum", "tungsten", "rhenium", "osmium",
        "iridium", "platinum", "gold", "mercury", "thallium", "lead", "bismuth", "polonium",
        "astatine", "radon", "francium", "radium", "actinium", "thorium", "protactinium",
        "uranium", "neptunium", "plutonium", "americium", "curium", "berkelium", "californium"
    ],
    
    "Currencies": [
        "dollar", "euro", "pound", "yen", "yuan", "renminbi", "franc", "peso", "rupee", "real",
        "rand", "ruble", "won", "lira", "dinar", "dirham", "riyal", "baht", "dong", "ringgit",
        "rupiah", "peso", "krona", "krone", "crown", "forint", "zloty", "leu", "lev", "kuna",
        "shekel", "shilling", "naira", "cedi", "birr", "kwanza", "pula", "lilangeni", "nakfa",
        "dalasi", "ouguiya", "ariary", "kwacha", "leone", "somoni", "manat", "tenge", "som",
        "tugrik", "taka", "kyat", "riel", "kip", "pataca", "bolivar", "guarani", "sol", "quetzal",
        "cordoba", "balboa", "colon", "gourde", "guilder", "florin", "escudo", "bitcoin",
        "ethereum", "dogecoin", "litecoin"
    ],
    
    "Programming Languages": [
        "python", "java", "javascript", "c", "c++", "c sharp", "ruby", "swift", "go", "rust",
        "php", "typescript", "kotlin", "scala", "r", "matlab", "perl", "shell", "bash",
        "powershell", "sql", "html", "css", "xml", "json", "yaml", "markdown", "latex",
        "assembly", "fortran", "cobol", "pascal", "basic", "visual basic", "vb", "delphi",
        "objective-c", "dart", "lua", "groovy", "haskell", "erlang", "elixir", "clojure",
        "f sharp", "ocaml", "scheme", "lisp", "prolog", "ada", "julia", "nim", "crystal",
        "zig", "v", "racket", "elm", "purescript", "reasonml", "hack", "apex", "solidity"
    ],
    
    "Zodiac Signs": [
        "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio",
        "sagittarius", "capricorn", "aquarius", "pisces"
    ],
    
    "Planets": [
        "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto",
        "sun", "moon", "ceres", "makemake", "haumea", "eris", "sedna", "orcus", "quaoar",
        "varuna", "ixion", "vesta", "pallas", "hygiea", "europa", "ganymede", "io", "callisto",
        "titan", "enceladus", "mimas", "rhea", "iapetus", "dione", "tethys", "miranda", "ariel",
        "umbriel", "titania", "oberon", "triton", "nereid", "charon", "nix", "hydra", "kerberos",
        "styx", "phobos", "deimos", "asteroid", "comet", "meteor", "meteorite", "meteoroid"
    ],
    
    "Greek Gods": [
        "zeus", "hera", "poseidon", "demeter", "athena", "apollo", "artemis", "ares", "aphrodite",
        "hephaestus", "hermes", "hestia", "dionysus", "hades", "persephone", "hebe", "hecate",
        "iris", "nike", "pan", "selene", "eos", "helios", "atlas", "prometheus", "epimetheus",
        "cronus", "rhea", "oceanus", "tethys", "hyperion", "theia", "coeus", "phoebe", "mnemosyne",
        "themis", "crius", "iapetus", "gaia", "uranus", "erebus", "nyx", "tartarus", "eros",
        "chaos", "thanatos", "hypnos", "morpheus", "nemesis", "tyche", "moirai", "fates",
        "erinyes", "furies", "muses", "graces", "horae", "hours", "nymphs", "satyrs", "centaurs"
    ],
    
    "Shakespeare Plays": [
        "hamlet", "romeo and juliet", "macbeth", "othello", "king lear", "julius caesar",
        "a midsummer nights dream", "much ado about nothing", "the tempest", "twelfth night",
        "as you like it", "the merchant of venice", "the taming of the shrew", "alls well that ends well",
        "measure for measure", "the comedy of errors", "loves labours lost", "the winters tale",
        "cymbeline", "pericles", "the two gentlemen of verona", "the merry wives of windsor",
        "troilus and cressida", "coriolanus", "titus andronicus", "timon of athens", "henry iv",
        "henry v", "henry vi", "richard ii", "richard iii", "king john", "henry viii",
        "antony and cleopatra", "sonnets", "venus and adonis", "the rape of lucrece"
    ],
    
    "Types of Doctors": [
        "cardiologist", "dermatologist", "endocrinologist", "gastroenterologist", "hematologist",
        "nephrologist", "neurologist", "oncologist", "ophthalmologist", "orthopedist", "otolaryngologist",
        "pathologist", "pediatrician", "psychiatrist", "pulmonologist", "radiologist", "rheumatologist",
        "urologist", "allergist", "anesthesiologist", "dentist", "orthodontist", "periodontist",
        "endodontist", "prosthodontist", "oral surgeon", "podiatrist", "chiropractor", "optometrist",
        "gynecologist", "obstetrician", "midwife", "geriatrician", "internist", "family doctor",
        "general practitioner", "emergency physician", "intensivist", "hospitalist", "surgeon",
        "plastic surgeon", "vascular surgeon", "neurosurgeon", "cardiothoracic surgeon",
        "transplant surgeon", "trauma surgeon", "bariatric surgeon", "colorectal surgeon",
        "hepatologist", "infectious disease specialist", "pain management specialist", "palliative care",
        "sports medicine", "occupational medicine", "aerospace medicine", "nuclear medicine",
        "forensic pathologist", "medical examiner", "epidemiologist", "veterinarian"
    ],
    
    "Universities": [
        "harvard", "yale", "princeton", "stanford", "mit", "caltech", "columbia", "penn",
        "brown", "dartmouth", "cornell", "duke", "northwestern", "johns hopkins", "vanderbilt",
        "rice", "notre dame", "georgetown", "emory", "carnegie mellon", "ucla", "berkeley",
        "michigan", "virginia", "north carolina", "georgia tech", "nyu", "boston university",
        "northeastern", "tufts", "wake forest", "william and mary", "boston college", "rochester",
        "case western", "tulane", "miami", "usc", "washington", "wisconsin", "illinois", "texas",
        "florida", "ohio state", "penn state", "maryland", "pittsburgh", "minnesota", "indiana",
        "purdue", "iowa", "michigan state", "rutgers", "arizona", "arizona state", "colorado",
        "oregon", "washington state", "utah", "byu", "alabama", "auburn", "lsu", "tennessee",
        "kentucky", "mississippi", "ole miss", "arkansas", "missouri", "kansas", "oklahoma",
        "texas a&m", "baylor", "tcu", "smu", "clemson", "florida state", "georgia", "south carolina"
    ],
    
    "Colors": [
        "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
        "gray", "grey", "silver", "gold", "beige", "tan", "navy", "turquoise", "teal", "cyan",
        "magenta", "maroon", "crimson", "scarlet", "coral", "salmon", "peach", "khaki", "olive",
        "lime", "mint", "forest", "emerald", "jade", "aqua", "sky", "royal", "indigo", "violet",
        "lavender", "lilac", "fuchsia", "rose", "burgundy", "wine", "rust", "copper", "bronze",
        "ivory", "cream", "pearl", "charcoal", "slate", "ash", "sand", "camel", "chocolate"
    ]
};