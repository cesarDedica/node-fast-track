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


const months = ['','enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio','julio', 'agosto', 'septiembre','octubre', 'noviembre','diciembre'];

const getUniqueItems = bigData => {
  const uniqueSet = new Set(bigData);
  return Array.from(uniqueSet);
}

const getMonthName = index => months[index];

const getTotalByMonth = (index, data) => {
  const monthData = data.filter(item => item.month === index);
  return monthData.reduce((acc,item) => acc+= item.value, 0);
}

const summary = data => {
  const monthsIndexes = data.map(item => item.month);
  const uniqueMonthItems = getUniqueItems(monthsIndexes);

  return uniqueMonthItems.map(month => {
    return {
      mes: getMonthName(month),
      total: '$' + getTotalByMonth(month, data)
    }
  });
}


module.exports = {
  countChars,
  summary
}
