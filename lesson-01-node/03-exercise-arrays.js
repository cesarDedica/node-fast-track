const countChars_Version01 = word => {
    const wordArray = word.split('');
    const uniqueChars = [];

    console.log(wordArray);

    wordArray.forEach(char => {
        if(!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    });

    console.log(uniqueChars);
    
    uniqueChars.forEach(char => {
        const count = wordArray.filter(currentChar => currentChar === char);
        console.log(char+': '+count.length);
    });
}


const word = 'Hello';

countChars_Version01(word);

