let food = ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood', 'Burger'];

let foodSet = new Set(food);

foodSet.add('Pasta');
console.log('After adding Pasta:', foodSet);

foodSet.delete('Burger'); 
console.log('After removing Burger:', foodSet);

function clearSetIfMoreThanTwoItems(set) {
  if (set.size > 2) {
    set.clear();
    console.log('Set has been cleared.');
  } else {
    console.log('Set has 2 or fewer items, not cleared.');
  }
}

clearSetIfMoreThanTwoItems(foodSet);

console.log('Final Set:', foodSet);
