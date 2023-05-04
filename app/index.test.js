import { checkAllVowels, checkIfEven } from "./index";

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
