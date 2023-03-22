import commentCounter from '../modules/commentCtr.js';

describe('Check counter all the comments', () => {
  test('Should be equal to 2 ', () => {
    document.body.innerHTML = '<h4 class=\'listOfComment\'></h4> <h4 class=\'listOfComment\'></h4>';
    expect(commentCounter()).toEqual(2);
  });

  test('Should be 0 ', () => {
    document.body.innerHTML = '';
    expect(commentCounter()).toEqual(0);
  });
});