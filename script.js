function firstNonRepeatedChar(str) {
  const charFrequency = {};

  for (let char of str) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  for (let char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
