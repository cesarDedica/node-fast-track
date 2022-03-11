const countChars_Version02 = word => {
    const wordArray = [...word];
    const uniqueChars = new Set(wordArray);
    const uniqueCharsArray = Array.from(uniqueChars);
    
    uniqueCharsArray.forEach(char => {
        const count = wordArray.filter(currentChar => currentChar === char);
        console.log(char+': '+count.length);
    });
}


const word = 'Hello';

countChars_Version02(word);

