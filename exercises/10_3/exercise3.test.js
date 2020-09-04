const ex1 = require('./exercise1');
// jest.mock('./exercise1');

describe('mocking randomNumber function implementation and reset', () => {
  it('should return a each implementation as mocked', () => {
    const mockRandNum = jest.spyOn(ex1, 'randomNumber').mockImplementation((v1, v2, v3) => v1 * v2 * v3);

    ex1.randomNumber(2, 5, 15);

    expect(mockRandNum).toHaveBeenCalled();
    expect(mockRandNum(2, 5, 15)).toBe(150);
    expect(mockRandNum).toHaveBeenCalledTimes(2);

    ex1.randomNumber.mockReset();

    mockRandNum.mockImplementation(value => value * 2);

    expect(mockRandNum(12)).toBe(24);
    expect(mockRandNum).toHaveBeenCalled();
    expect(mockRandNum).toHaveBeenCalledTimes(1);
  });
});
