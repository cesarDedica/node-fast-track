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

const getSummary = data => {
    const uniqueItemsSet = new Set();
    data.forEach(dataItem => uniqueItemsSet.add(dataItem.month));

    const monthsList = Array.from(uniqueItemsSet);
    console.log(monthsList);

    const result = monthsList.map(monthItem => {
        let value = 0;
        
        const filteredData = data.filter(dataItem => {
            return dataItem.month == monthItem
        });
        
        filteredData.forEach(i => {
            value += i.value;
        });

        return {
            month: monthItem,
            value
        }
    });

    console.log(result);
}

getSummary(data);
