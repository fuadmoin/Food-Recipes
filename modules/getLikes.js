const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j1YpVmbR1iUd0yLMCLKR/likes/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result2 = await response.json();
  return result2;
};

export default getLikes;
