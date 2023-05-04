const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (number) => {
  for (let count = 1; count < number; count++) {
    if (number === count) {
      return false;
    }

    if (number === count + 1) {
      return true;
    }
  }
};

exports.checkAllVowels = checkAllVowels;
