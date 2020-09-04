const ex1 = require('./exercise1');
const exercise1 = require('./exercise1');
const { randomNumber } = require('./exercise1');
jest.mock('./exercise1');


describe('mocking randomNumber function', () => {
  it('should return 10 as mocked', () => {
    ex1.randomNumber.mockReturnValue(10);

    ex1.randomNumber();
    expect(ex1.randomNumber).toHaveBeenCalled();
    expect(ex1.randomNumber()).toBe(10);
    expect(ex1.randomNumber).toHaveBeenCalledTimes(2);
  });
});
