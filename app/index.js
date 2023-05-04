const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (number) => number % 2 === 0;

const checkIfPrime = (number) => {
  for (let count = 2; count < number; count++) {
    if (number % count === 0) {
      return false;
    }
  }

  return true;
};

exports.checkAllVowels = checkAllVowels;
exports.checkIfEven = checkIfEven;
exports.checkIfPrime = checkIfPrime;
