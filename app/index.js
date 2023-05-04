const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }

  return true;
};

exports.checkAllVowels = checkAllVowels;
