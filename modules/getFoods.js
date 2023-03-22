import popup from './popup.js';
import addNewLike from './addNewLike.js';
import getLikes from './getLikes.js';
import foodCounter from './foodCounter.js';

const getFoods = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const result = await response.json();
  const data = result.meals;
  const counter = foodCounter(data);
  const counterText = document.querySelector('.food-counter');
  counterText.innerHTML = counter !== undefined ? `(${counter})` : '(0)';
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
          <small class="likes"><span class="liked-num"> </span> <i class="fa-regular fa-heart heartsign"></i></small>
        </div>
      
       `;
    displaylist.appendChild(node);
    const numberOfLikes = document.querySelectorAll('.liked-num');

    const numberofLikes = async () => {
      const id = data[i].idMeal;
      const data2 = await getLikes();
      const num = data2.find((json) => json.item_id === id);
      numberOfLikes[i].innerHTML = num !== undefined ? `${num.likes}` : '0';
      return num.likes;
    };
    numberofLikes();

    const buttonComments = document.querySelectorAll('.comments');
    buttonComments[i].addEventListener('click', () => {
      popup(i);
    });

    const likes = document.querySelectorAll('.heartsign');

    likes[i].addEventListener('click', async (event) => {
      if (event.target.classList.contains('fa-regular')) {
        likes[i].classList.remove('fa-regular');
        likes[i].classList.add('fa-solid');

        await addNewLike(i);
        numberOfLikes[i].innerHTML = `${await numberofLikes()}`;
      } else {
        likes[i].classList.add('fa-regular');
        likes[i].classList.remove('fa-solid');
      }
    });
  }
};

export default getFoods;