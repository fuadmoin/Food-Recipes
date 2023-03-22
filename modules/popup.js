import addComment from './addComments.js';
import getComments from './getComments.js';

const popSection = document.getElementById('popSection');

const popUp = async (index) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const json = await data.json();
  const { meals } = json;
  const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[index].idMeal}`);
  const jsonMeal = await mealData.json();
  const specificMeal = jsonMeal.meals[0];
  const section = document.createElement('section');
  section.className = 'popUp';
  popSection.appendChild(section);
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popupContainer';
  section.appendChild(popupContainer);
  const closeBtn = document.createElement('button');
  closeBtn.id = 'buttonX';
  closeBtn.className = 'closeBtn';
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark" ></i>';
  popupContainer.appendChild(closeBtn);
  const popupImgs = document.createElement('img');
  popupImgs.src = meals[index].strMealThumb;
  popupContainer.appendChild(popupImgs);
  const popUpTitle = document.createElement('h3');
  popUpTitle.innerHTML = meals[index].strMeal;
  popupContainer.appendChild(popUpTitle);
  const divPara = document.createElement('div');
  divPara.className = 'divPara';
  popupContainer.appendChild(divPara);
  const para1 = document.createElement('p');
  para1.innerHTML = `<strong>Area:</strong> ${specificMeal.strArea}`;
  divPara.appendChild(para1);
  const para2 = document.createElement('p');
  para2.innerHTML = `<strong>Category:</strong> ${specificMeal.strCategory}`;
  divPara.appendChild(para2);
  const divDown = document.createElement('a');
  divDown.href = '#instructions';
  divDown.className = 'scrollDown';
  divDown.innerHTML = '<i class="fa-solid fa-circle-chevron-down"></i>';
  popupContainer.appendChild(divDown);
  const para3 = document.createElement('p');
  para3.id = 'instructions';
  para3.innerHTML = `<strong>Instructions:</strong> ${specificMeal.strInstructions}`;
  popupContainer.appendChild(para3);
  const div1 = document.createElement('div');
  div1.className = 'commentsContainer';
  popupContainer.appendChild(div1);
  const h4 = document.createElement('h4');
  h4.id = 'comments';
  h4.innerHTML = 'Comments(0)';
  div1.appendChild(h4);
  const divComments = document.createElement('div');
  divComments.id = 'divComments';
  divComments.className = 'divComments';
  div1.appendChild(divComments);
  const h4Add = document.createElement('h4');
  h4Add.innerHTML = 'Add a comment';
  popupContainer.appendChild(h4Add);
  const form = document.createElement('form');
  form.innerHTML = '<input type="text" name="name" id="nameF"><textarea name="comment" id="textComment" cols="30" rows="5"></textarea><button id="submit" type="submit">Comment</button>';
  popupContainer.appendChild(form);

  closeBtn.addEventListener('click', () => {
    popSection.innerHTML = '';
  });
  const submit = document.getElementById('submit');
  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const nameF = document.getElementById('nameF').value;
    const commentF = document.getElementById('textComment').value;
    if (nameF !== '' && commentF !== '') {
      document.getElementById('nameF').value = '';
      document.getElementById('textComment').value = '';
      addComment(index, nameF, commentF);
    } else {
      const error = document.createElement('p');
      error.className = 'error';
      error.innerHTML = 'Please fill all the requirements';
      setTimeout(() => {
        error.remove();
      }, 3000);
      form.appendChild(error);
      document.getElementById('textComment').insertAdjacentElement('afterend', error);
    }
  });
  await getComments(index);
};

export default popUp;