import foodCounter from '../modules/foodCounter.js';

describe('food counter', () => {
  test('length of the array should be zero', () => {
    const zeroArr = [];
    expect(foodCounter(zeroArr)).toBe(0);
  });
  test('length of the array should be three', () => {
    const threeArr = [1, 2, 3];
    expect(foodCounter(threeArr)).toBe(3);
  });
});