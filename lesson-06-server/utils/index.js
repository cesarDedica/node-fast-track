const countChars = word => {
  const response = {
    original: word,
    size: word.length,
  }

  const wordArray = [...word];
  const uniqueChars = new Set(wordArray);
  const uniqueCharsArray = Array.from(uniqueChars);

  uniqueCharsArray.forEach(char => {
    const count = wordArray.filter(currentChar => currentChar === char);
    response[char] = count.length;
  });

  return response;
}

module.exports = {
  countChars
}
