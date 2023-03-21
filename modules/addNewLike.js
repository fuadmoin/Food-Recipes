const addNewLike = async (index) => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const result = await response.json();
  const data = result.meals;
  const id = data[index].idMeal;

  const response2 = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j1YpVmbR1iUd0yLMCLKR/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response2;
};
export default addNewLike;