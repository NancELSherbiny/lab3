var buttons = document.querySelectorAll('button[data-food]');
var loader = document.getElementById('loader');
var container = document.getElementById('food-container');

buttons.forEach(button => {
  button.addEventListener('click', async () => {
    let foodType = button.dataset.food;
    container.innerHTML = '';           
    loader.classList.remove('hidden');  

    try {
      let res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${foodType}`);
      let data = await res.json();

      loader.classList.add('hidden');  

      if (!data.recipes || data.recipes.length === 0) {
        container.innerHTML = '<p>No recipes found.</p>';
        return;
      }

      data.recipes.forEach(recipe => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${recipe.image_url}" alt="${recipe.title}" />
          <h3>${recipe.title}</h3>
          <p><strong>Publisher:</strong> ${recipe.publisher}</p>
        `;
        container.appendChild(card);
      });

    } catch (error) {
      loader.classList.add('hidden');
      container.innerHTML = '<p>Something went wrong!</p>';
      console.error(error);
    }
  });
});
