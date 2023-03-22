import comments from './commentCtr.js';

const projectID = '0PsaHQATvBBc06xhH6ES';
const baseLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (index) => {
  const get = await fetch(`${baseLink}${projectID}/comments?item_id=item${index}`);
  const arr = await get.json();
  const empty = await arr.error;
  const div = document.getElementById('divComments');
  div.innerHTML = '';
  if (empty === undefined) {
    arr.forEach((element) => {
      const p = document.createElement('p');
      p.className = 'listOfComment';
      p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
      div.appendChild(p);
      const count = document.querySelectorAll('.listOfComment');
      comments(count.length);
    });
  }
};

export default getComments;

export { projectID, baseLink };