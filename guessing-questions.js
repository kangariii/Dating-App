// Guessing Game Questions with fake options
const guessingQuestions = {
  round1: [
    {
      question: "What's my favorite pizza topping?",
      fakeOptions: ["Pepperoni", "Mushrooms", "Pineapple", "Olives", "Sausage", "Bell Peppers", "Extra Cheese", "Bacon"]
    },
    {
      question: "What's my go-to coffee order?",
      fakeOptions: ["Black Coffee", "Latte", "Cappuccino", "Americano", "Macchiato", "Flat White", "Mocha", "Cold Brew", "Espresso"]
    },
    {
      question: "What's my favorite season?",
      fakeOptions: ["Spring", "Summer", "Fall", "Winter"]
    },
    {
      question: "What's my dream vacation destination?",
      fakeOptions: ["Paris", "Tokyo", "Bali", "New York", "Iceland", "Greece", "New Zealand", "Morocco", "Peru"]
    },
    {
      question: "What's my favorite type of movie?",
      fakeOptions: ["Comedy", "Horror", "Romance", "Action", "Sci-Fi", "Drama", "Documentary", "Thriller", "Fantasy"]
    },
    {
      question: "What time do I prefer to wake up?",
      fakeOptions: ["Before 6 AM", "6-7 AM", "7-8 AM", "8-9 AM", "After 9 AM", "Whenever I want"]
    }
  ],
  round3: [
    {
      question: "What's my biggest pet peeve?",
      fakeOptions: ["Being late", "Loud chewing", "Interrupting", "Not listening", "Leaving dishes", "Being on phone too much", "Lying", "Bad drivers"]
    },
    {
      question: "What's my love language?",
      fakeOptions: ["Words of Affirmation", "Physical Touch", "Quality Time", "Acts of Service", "Receiving Gifts"]
    },
    {
      question: "What's my ideal Friday night?",
      fakeOptions: ["Movie night at home", "Dinner out", "Dancing/Club", "Game night", "Cooking together", "Wine and conversation", "Live music", "Early sleep"]
    },
    {
      question: "What's my hidden talent?",
      fakeOptions: ["Singing", "Dancing", "Cooking", "Drawing", "Playing an instrument", "Writing", "Photography", "Making people laugh"]
    },
    {
      question: "What's my biggest fear?",
      fakeOptions: ["Heights", "Spiders", "Public speaking", "Failure", "Being alone", "The ocean", "Flying", "Small spaces"]
    },
    {
      question: "How do I handle stress?",
      fakeOptions: ["Exercise", "Talk it out", "Alone time", "Music", "Sleep", "Cleaning", "Shopping", "Eating comfort food"]
    }
  ],
  round5: [
    {
      question: "What's my dream job if money wasn't a factor?",
      fakeOptions: ["Travel blogger", "Chef", "Artist", "Teacher", "Musician", "Writer", "Photographer", "Animal rescuer", "Professional athlete"]
    },
    {
      question: "What's one thing I can't live without?",
      fakeOptions: ["My phone", "Coffee", "Music", "Books", "Exercise", "Chocolate", "My pet", "Social media", "Netflix"]
    },
    {
      question: "What's my biggest relationship dealbreaker?",
      fakeOptions: ["Dishonesty", "No ambition", "Bad hygiene", "Jealousy", "No sense of humor", "Different values", "Being controlling", "Poor communication"]
    },
    {
      question: "Where do I see us in 5 years?",
      fakeOptions: ["Married with kids", "Traveling the world", "Living abroad", "Building our careers", "Starting a business together", "Living in a house", "Still figuring it out", "Happily together"]
    },
    {
      question: "What's my most attractive quality?",
      fakeOptions: ["My smile", "My humor", "My kindness", "My intelligence", "My confidence", "My loyalty", "My creativity", "My passion"]
    },
    {
      question: "What makes me feel most loved?",
      fakeOptions: ["Surprise gestures", "Deep conversations", "Physical affection", "Being listened to", "Shared experiences", "Little daily texts", "Being prioritized", "Genuine compliments"]
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