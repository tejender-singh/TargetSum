import {
  getArrayOfRandomNumbersBetween,
  getSumOfRandomNumbersInArray,
  randomNumberBetween,
} from "../utils/MathUtil";

describe("MathUtil test", () => {
  test("returns a random number between 1 and 10", () => {
    const result = randomNumberBetween(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test("returns a random number between -5 and 5", () => {
    const result = randomNumberBetween(-5, 5);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(5);
  });

  test("returns a random number between 0 and 100", () => {
    const result = randomNumberBetween(0, 100);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  test("returns sum of random 2 numbers in array of [1, 2, 3, 4, 5]", () => {
    const result = getSumOfRandomNumbersInArray([1, 2, 3, 4, 5], 2);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(10);
  });

  test("returns sum of random 3 numbers in array of [10, 20, 30, 40, 50]", () => {
    const result = getSumOfRandomNumbersInArray([10, 20, 30, 40, 50], 3);
    expect(result).toBeGreaterThanOrEqual(30);
    expect(result).toBeLessThanOrEqual(150);
  });

  test("returns -1 if count is greater than array length", () => {
    const result = getSumOfRandomNumbersInArray([1, 2, 3], 4);
    expect(result).toBe(-1);
  });

  it("should return an array of 6 random numbers between min and max", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const result = getArrayOfRandomNumbersBetween(1, 10);
    expect(result).toEqual([6, 6, 6, 6, 6, 6]);
    Math.random.mockRestore();
  });
});
