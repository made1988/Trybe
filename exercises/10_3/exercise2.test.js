const ex1 = require('./exercise1');
jest.mock('./exercise1');

describe('mocking randomNumber function implementation', () => {
  it('should return a division as mocked', () => {
    ex1.randomNumber.mockImplementationOnce((value1, value2) => value1 / value2);

    expect(ex1.randomNumber(10, 2)).toBe(5);
    expect(ex1.randomNumber).toHaveBeenCalled();
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
  });
});
