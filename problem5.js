function firstPunctuationIndex(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "." || string[i] === "?" || string[i] === "!") {
        return i;
    }
  } return -1;
}

console.log(firstPunctuationIndex('I love taking tests?'))