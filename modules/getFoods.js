import popup from './popup.js'

const getFoods = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const result = await response.json();
  const data = result.meals;
  const displaylist = document.querySelector('.display-list');
  for (let i = 0; i < data.length; i += 1) {
    const node = document.createElement('article');
    node.className = 'food';
    node.innerHTML = `
      <img
          class="food-image"
          src=${data[i].strMealThumb}
          alt="a picture of a food"
        />

        
          <small class="title"
            >${data[i].strMeal}</small
          >
          <div class="detail-container">
          <button type="button" class="comments">Comments</button>
          <small class="likes">3 <i class="fa-regular fa-heart"></i></small>
        </div>
      
       `
       ;
    displaylist.appendChild(node);
  }
};

export default getFoods;