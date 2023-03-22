const comments = async (count) => {
  const h4 = document.getElementById('comments');
  h4.innerHTML = `Comments(${count})`;
};

export default comments;