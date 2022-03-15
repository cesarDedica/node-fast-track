const months = ['','enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio','julio', 'agosto', 'septiembre','octubre', 'noviembre','diciembre'];

const data = [
    {month: 01, value: 10},
    {month: 01, value: 15},
    {month: 01, value: 20},
    {month: 02, value: 40},
    {month: 02, value: 30},
    {month: 03, value: 20},
    {month: 03, value: 15},
    {month: 11, value: 15},
    {month: 09, value: 15},
];

const result = [
    {mes: 'enero', total: '$45'},
    {mes: 'febrero', total: '$70'}
];

const getUniqueItems = bigData => {
    const uniqueSet = new Set(bigData);
    return Array.from(uniqueSet);
}

const getMonthName = index => months[index];

const getTotalByMonth = index => {
    const monthData = data.filter(item => item.month === index);
    return monthData.reduce((acc,item) => acc+= item.value, 0);
}

const summary = data => {
    const monthsIndexes = data.map(item => item.month);
    const uniqueMonthItems = getUniqueItems(monthsIndexes);

    return uniqueMonthItems.map(month => {
        return {
            mes: getMonthName(month),
            total: '$' + getTotalByMonth(month)
        }
    });
}

console.log(summary(data));