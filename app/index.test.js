import {
  checkAllVowels,
  checkIfEven,
  checkIfPrime,
  findLargestNumber,
} from "./index";

describe("Given a checkAllVowels function", () => {
  describe("When it receives the word 'murcielago'", () => {
    test("Then it should return true", () => {
      const word = "murcielago";
      const expectedOutput = true;

      const hasAllVowels = checkAllVowels(word);

      expect(hasAllVowels).toBe(expectedOutput);
    });
  });

  describe("When it receives the word 'casa'", () => {
    test("Then it should return false", () => {
      const word = "casa";
      const expectedOutput = false;

      const hasAllVowels = checkAllVowels(word);

      expect(hasAllVowels).toBe(expectedOutput);
    });
  });
});

describe("Given a checkIfEven function", () => {
  describe("When it receives number 16", () => {
    test("Then it should return true", () => {
      const number = 16;
      const expectedOutput = true;
      const isEven = checkIfEven(number);

      expect(isEven).toBe(expectedOutput);
    });
  });

  describe("When it receives number 55", () => {
    test("Then it should return false", () => {
      const number = 55;
      const expectedOutput = false;
      const isEven = checkIfEven(number);

      expect(isEven).toBe(expectedOutput);
    });
  });
});

describe("Given a checkIfPrime function", () => {
  describe("When it receives number 5", () => {
    test("Then it should return true", () => {
      const number = 5;
      const expectedOutput = true;
      const isPrime = checkIfPrime(number);

      expect(isPrime).toBe(expectedOutput);
    });
  });

  describe("When it receives number 16", () => {
    test("Then it should return false", () => {
      const number = 16;
      const expectedOutput = false;
      const isPrime = checkIfPrime(number);

      expect(isPrime).toBe(expectedOutput);
    });
  });
});

describe("Given a findLargestNumber function", () => {
  describe("When it receives [1,24,76,34,3,63]", () => {
    test("Then it should return 76", () => {
      const numbers = [1, 24, 76, 34, 3, 63];
      const expectedOutput = 76;

      const largestNumber = findLargestNumber(numbers);

      expect(largestNumber).toBe(expectedOutput);
    });
  });

  describe("When it receives [1,-24,-76,34,3,-63]", () => {
    test("Then it should return 34", () => {
      const numbers = [1, -24, -76, 34, 3, -63];
      const expectedOutput = 34;

      const largestNumber = findLargestNumber(numbers);

      expect(largestNumber).toBe(expectedOutput);
    });
  });
});
