import checkAllVowels from "./index";

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
