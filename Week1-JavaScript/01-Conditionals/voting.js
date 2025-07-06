function canvote(age) {
  if (age >= 18) {
      return `You can vote`;
  } else {
      return `You cannot vote`;
  }
}

console.log(canvote(18)); // ✅ You can vote
console.log(canvote(17)); // ❌ You cannot vote
console.log(canvote(20)); // ✅ You can vote



let canvote = (age) => {
  if (age >= 18) {
      return "You can vote";
  } else {
      return "You cannot vote";
  }
}

const canvote = (age) => age >= 18 ? "You can vote" : "You cannot vote";



// Step 1: List of dishes
const desiDishes = ["Rajma Chawal", "Biryani", "Dosa", "Chole Bhature", "Paneer Butter Masala"];

// Step 2: Random picker function
const getRandomDish = () => {
  const randomIndex = Math.floor(Math.random() * desiDishes.length);
  const dish = desiDishes[randomIndex];
  return `Aaj khaane mein try karo: ${dish} 😋`;
};

// Step 3: Print result
console.log(getRandomDish());
