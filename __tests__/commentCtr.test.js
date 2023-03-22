import comments from '../modules/commentCtr.js';

describe('Check counter all the comments', () => {
  test('Should be show Comments(29) ', () => {
    document.body.innerHTML = '<h4 id=\'comments\'></h4>';
    const comment = document.getElementById('comments');
    comments(29);
    expect(comment.textContent).toEqual('Comments(29)');
  });
});