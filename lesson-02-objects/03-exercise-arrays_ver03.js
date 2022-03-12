const countChars_Version03 = word => {
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


const word = 'Leonardo';

console.log(countChars_Version03(word));

