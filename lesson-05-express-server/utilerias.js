const countElements = list => list.length;

const evenItems = list => list.filter(item => item % 2 === 0 );

module.exports = {
    countElements,
    evenItems
}
