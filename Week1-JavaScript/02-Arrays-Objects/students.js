const food = [
    {name : "Apple", price : 100},
    {name : "Banana", price : 200},
    {name : "Orange", price : 300},
]

for(let item of food){
    console.log(`${item.name} - ₹${item.price} rupees`);
}


const streetfood = [
    { name: "Vada Pav", price: 20 },
    { name: "Momos", price: 40 },
    { name: "Pani Puri", price: 30 },
  ];
  
  for (let item of streetfood) {
    console.log(`Bhaiya ji! ${item.name} sirf ₹${item.price} mein! 😋`);
  }
  