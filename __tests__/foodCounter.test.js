import foodCounter from '../modules/foodCounter.js';

describe('food counter', () => {
  test('call foodCounter without adding food class', () => {
    document.body.innerHTML = '';
    expect(foodCounter()).toEqual(0);
  });
  test('add three food class and call foodCounter', () => {
    document.body.innerHTML = '<h4 class="food"></h4> <h4 class="food"></h4> <h4 class="food"></h4>';
    expect(foodCounter()).toEqual(3);
  });
});
