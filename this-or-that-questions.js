// This or That Questions - Binary choices for preference guessing
const thisOrThatQuestions = {
    round1: [
        // Food & Drinks (20 questions)
        {
            question: "Coffee or Tea?",
            optionA: "Coffee",
            optionB: "Tea"
        },
        {
            question: "Pizza or Burgers?",
            optionA: "Pizza", 
            optionB: "Burgers"
        },
        {
            question: "Sweet or Salty snacks?",
            optionA: "Sweet",
            optionB: "Salty"
        },
        {
            question: "Ice cream or Cake?",
            optionA: "Ice cream",
            optionB: "Cake"
        },
        {
            question: "Chocolate or Vanilla?",
            optionA: "Chocolate",
            optionB: "Vanilla"
        },
        {
            question: "Wine or Beer?",
            optionA: "Wine",
            optionB: "Beer"
        },
        {
            question: "Cooking at home or Dining out?",
            optionA: "Cooking at home",
            optionB: "Dining out"
        },
        {
            question: "Breakfast or Dinner?",
            optionA: "Breakfast",
            optionB: "Dinner"
        },
        {
            question: "Spicy food or Mild food?",
            optionA: "Spicy food",
            optionB: "Mild food"
        },
        {
            question: "Fruits or Vegetables?",
            optionA: "Fruits",
            optionB: "Vegetables"
        },
        {
            question: "Hot drinks or Cold drinks?",
            optionA: "Hot drinks",
            optionB: "Cold drinks"
        },
        {
            question: "Pancakes or Waffles?",
            optionA: "Pancakes",
            optionB: "Waffles"
        },
        {
            question: "Chinese food or Italian food?",
            optionA: "Chinese food",
            optionB: "Italian food"
        },
        {
            question: "Cookies or Brownies?",
            optionA: "Cookies",
            optionB: "Brownies"
        },
        {
            question: "Sandwich or Soup?",
            optionA: "Sandwich",
            optionB: "Soup"
        },
        {
            question: "White bread or Wheat bread?",
            optionA: "White bread",
            optionB: "Wheat bread"
        },
        {
            question: "Cereal or Oatmeal?",
            optionA: "Cereal",
            optionB: "Oatmeal"
        },
        {
            question: "Popcorn or Chips?",
            optionA: "Popcorn",
            optionB: "Chips"
        },
        {
            question: "Juice or Soda?",
            optionA: "Juice",
            optionB: "Soda"
        },
        {
            question: "Meat or Vegetarian?",
            optionA: "Meat",
            optionB: "Vegetarian"
        },

        // Lifestyle & Activities (20 questions)
        {
            question: "Morning person or Night owl?",
            optionA: "Morning person",
            optionB: "Night owl"
        },
        {
            question: "Beach or Mountains?",
            optionA: "Beach",
            optionB: "Mountains"
        },
        {
            question: "Summer or Winter?",
            optionA: "Summer",
            optionB: "Winter"
        },
        {
            question: "City or Countryside?",
            optionA: "City",
            optionB: "Countryside"
        },
        {
            question: "Hot weather or Cold weather?",
            optionA: "Hot weather",
            optionB: "Cold weather"
        },
        {
            question: "Indoor activities or Outdoor activities?",
            optionA: "Indoor activities",
            optionB: "Outdoor activities"
        },
        {
            question: "Gym or Home workouts?",
            optionA: "Gym",
            optionB: "Home workouts"
        },
        {
            question: "Bath or Shower?",
            optionA: "Bath",
            optionB: "Shower"
        },
        {
            question: "Early bird or Procrastinator?",
            optionA: "Early bird",
            optionB: "Procrastinator"
        },
        {
            question: "Planner or Spontaneous?",
            optionA: "Planner",
            optionB: "Spontaneous"
        },
        {
            question: "Stay in or Go out?",
            optionA: "Stay in",
            optionB: "Go out"
        },
        {
            question: "Big party or Small gathering?",
            optionA: "Big party",
            optionB: "Small gathering"
        },
        {
            question: "Adventure or Relaxation?",
            optionA: "Adventure",
            optionB: "Relaxation"
        },
        {
            question: "Road trip or Flying?",
            optionA: "Road trip",
            optionB: "Flying"
        },
        {
            question: "Hotel or Camping?",
            optionA: "Hotel",
            optionB: "Camping"
        },
        {
            question: "Shopping online or In-store?",
            optionA: "Shopping online",
            optionB: "In-store"
        },
        {
            question: "Text or Phone call?",
            optionA: "Text",
            optionB: "Phone call"
        },
        {
            question: "Sunrise or Sunset?",
            optionA: "Sunrise",
            optionB: "Sunset"
        },
        {
            question: "Dancing or Singing?",
            optionA: "Dancing",
            optionB: "Singing"
        },
        {
            question: "Photography or Drawing?",
            optionA: "Photography",
            optionB: "Drawing"
        },

        // Entertainment (20 questions)
        {
            question: "Movies or TV shows?",
            optionA: "Movies",
            optionB: "TV shows"
        },
        {
            question: "Comedy or Drama?",
            optionA: "Comedy",
            optionB: "Drama"
        },
        {
            question: "Horror or Romance?",
            optionA: "Horror",
            optionB: "Romance"
        },
        {
            question: "Books or Podcasts?",
            optionA: "Books",
            optionB: "Podcasts"
        },
        {
            question: "Fiction or Non-fiction?",
            optionA: "Fiction",
            optionB: "Non-fiction"
        },
        {
            question: "Music or Silence?",
            optionA: "Music",
            optionB: "Silence"
        },
        {
            question: "Pop music or Rock music?",
            optionA: "Pop music",
            optionB: "Rock music"
        },
        {
            question: "Concert or Theater?",
            optionA: "Concert",
            optionB: "Theater"
        },
        {
            question: "Video games or Board games?",
            optionA: "Video games",
            optionB: "Board games"
        },
        {
            question: "Netflix or YouTube?",
            optionA: "Netflix",
            optionB: "YouTube"
        },
        {
            question: "Action movies or Animated movies?",
            optionA: "Action movies",
            optionB: "Animated movies"
        },
        {
            question: "Live sports or Watching on TV?",
            optionA: "Live sports",
            optionB: "Watching on TV"
        },
        {
            question: "Documentary or Reality TV?",
            optionA: "Documentary",
            optionB: "Reality TV"
        },
        {
            question: "Headphones or Speakers?",
            optionA: "Headphones",
            optionB: "Speakers"
        },
        {
            question: "New music or Classic hits?",
            optionA: "New music",
            optionB: "Classic hits"
        },
        {
            question: "Streaming or Physical media?",
            optionA: "Streaming",
            optionB: "Physical media"
        },
        {
            question: "Karaoke or Just listening?",
            optionA: "Karaoke",
            optionB: "Just listening"
        },
        {
            question: "Binge-watching or One episode?",
            optionA: "Binge-watching",
            optionB: "One episode"
        },
        {
            question: "Marvel or DC?",
            optionA: "Marvel",
            optionB: "DC"
        },
        {
            question: "Star Wars or Star Trek?",
            optionA: "Star Wars",
            optionB: "Star Trek"
        },

        // Style & Preferences (20 questions)
        {
            question: "Casual or Formal clothing?",
            optionA: "Casual",
            optionB: "Formal"
        },
        {
            question: "Bright colors or Dark colors?",
            optionA: "Bright colors",
            optionB: "Dark colors"
        },
        {
            question: "Sneakers or Dress shoes?",
            optionA: "Sneakers",
            optionB: "Dress shoes"
        },
        {
            question: "Long hair or Short hair?",
            optionA: "Long hair",
            optionB: "Short hair"
        },
        {
            question: "Gold or Silver jewelry?",
            optionA: "Gold",
            optionB: "Silver"
        },
        {
            question: "Minimalist or Maximalist style?",
            optionA: "Minimalist",
            optionB: "Maximalist"
        },
        {
            question: "Vintage or Modern style?",
            optionA: "Vintage",
            optionB: "Modern"
        },
        {
            question: "Patterns or Solid colors?",
            optionA: "Patterns",
            optionB: "Solid colors"
        },
        {
            question: "Comfort or Style?",
            optionA: "Comfort",
            optionB: "Style"
        },
        {
            question: "Makeup or Natural look?",
            optionA: "Makeup",
            optionB: "Natural look"
        },
        {
            question: "Perfume or No fragrance?",
            optionA: "Perfume",
            optionB: "No fragrance"
        },
        {
            question: "Glasses or Contact lenses?",
            optionA: "Glasses",
            optionB: "Contact lenses"
        },
        {
            question: "Backpack or Handbag?",
            optionA: "Backpack",
            optionB: "Handbag"
        },
        {
            question: "Watch or Phone for time?",
            optionA: "Watch",
            optionB: "Phone for time"
        },
        {
            question: "Hat or No hat?",
            optionA: "Hat",
            optionB: "No hat"
        },
        {
            question: "Scarf or No scarf?",
            optionA: "Scarf",
            optionB: "No scarf"
        },
        {
            question: "Belt or No belt?",
            optionA: "Belt",
            optionB: "No belt"
        },
        {
            question: "Sunglasses or Regular glasses?",
            optionA: "Sunglasses",
            optionB: "Regular glasses"
        },
        {
            question: "Designer brands or Generic brands?",
            optionA: "Designer brands",
            optionB: "Generic brands"
        },
        {
            question: "Trendy or Timeless style?",
            optionA: "Trendy",
            optionB: "Timeless"
        },

        // Technology & Modern Life (20 questions)
        {
            question: "iPhone or Android?",
            optionA: "iPhone",
            optionB: "Android"
        },
        {
            question: "Mac or PC?",
            optionA: "Mac",
            optionB: "PC"
        },
        {
            question: "Social media or No social media?",
            optionA: "Social media",
            optionB: "No social media"
        },
        {
            question: "Instagram or TikTok?",
            optionA: "Instagram",
            optionB: "TikTok"
        },
        {
            question: "Email or Text messaging?",
            optionA: "Email",
            optionB: "Text messaging"
        },
        {
            question: "Online shopping or In-store shopping?",
            optionA: "Online shopping",
            optionB: "In-store shopping"
        },
        {
            question: "Digital photos or Printed photos?",
            optionA: "Digital photos",
            optionB: "Printed photos"
        },
        {
            question: "E-books or Physical books?",
            optionA: "E-books",
            optionB: "Physical books"
        },
        {
            question: "GPS or Paper maps?",
            optionA: "GPS",
            optionB: "Paper maps"
        },
        {
            question: "Voice messages or Text messages?",
            optionA: "Voice messages",
            optionB: "Text messages"
        },
        {
            question: "Wireless earbuds or Wired headphones?",
            optionA: "Wireless earbuds",
            optionB: "Wired headphones"
        },
        {
            question: "Smart home or Traditional home?",
            optionA: "Smart home",
            optionB: "Traditional home"
        },
        {
            question: "Electric car or Gas car?",
            optionA: "Electric car",
            optionB: "Gas car"
        },
        {
            question: "Video calls or Audio calls?",
            optionA: "Video calls",
            optionB: "Audio calls"
        },
        {
            question: "Cloud storage or Local storage?",
            optionA: "Cloud storage",
            optionB: "Local storage"
        },
        {
            question: "Smartphone camera or Digital camera?",
            optionA: "Smartphone camera",
            optionB: "Digital camera"
        },
        {
            question: "Streaming music or Downloaded music?",
            optionA: "Streaming music",
            optionB: "Downloaded music"
        },
        {
            question: "Password manager or Remember passwords?",
            optionA: "Password manager",
            optionB: "Remember passwords"
        },
        {
            question: "Dark mode or Light mode?",
            optionA: "Dark mode",
            optionB: "Light mode"
        },
        {
            question: "Latest tech or Proven technology?",
            optionA: "Latest tech",
            optionB: "Proven technology"
        }
    ]
};

// Function to get a random this-or-that question
function getRandomThisOrThatQuestion(round) {
    const questions = thisOrThatQuestions.round1;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}