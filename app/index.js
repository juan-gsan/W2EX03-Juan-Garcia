export const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

export const checkIfEven = (number) => number % 2 === 0;

export const checkIfPrime = (number) => {
  for (let count = 2; count < number; count++) {
    if (number % count === 0) {
      return false;
    }
  }

  return true;
};

export const findLargestNumber = (numbers) => Math.max(...numbers);

export const findLargestWord = () => {};
