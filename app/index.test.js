import checkAllVowels from "./index";

describe("Given a checkAllVowels function", () => {
  describe("When it receives the word 'murciélago'", () => {
    test("Then it should return true", () => {
      const word = "murciélago";
      const expectedOutput = true;

      const hasAllVowels = checkAllVowels(word);

      expect(hasAllVowels).toBe(expectedOutput);
    });
  });
});
