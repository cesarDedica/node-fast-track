const fruits = ['mango', 'manzana', 'durazno','aguacate'];

//console.log('Tamaño: ', fruits.length);

// FOR
/*
for(let i = 0; i < fruits.length; i++) {
    console.log('--->', fruits[i]);
}
*/

// FOR EACH
/*
fruits.forEach( fruit => {
    console.log('===>', fruit);
});
*/

const users = [
    {
        name: 'Cesar',
        lastName: 'Gutierrez'
    },
    {
        name: 'Ulises',
        lastName: 'Gutierrez'
    },
    {
        name: 'Eric',
        lastName: 'Marín'
    }
];

// MAP
/*
const allMessages = fruits.map(fruit => {
    const message = 'Name: ' + fruit
    console.log(message);
    return message;
});
console.log(fruits);
console.log(allMessages);
*/

/*
const nameList = users.map(user => {
    const fullName = user.name + ' ' + user.lastName;
    return fullName;
});
console.log(nameList);
*/

// FILTER
/*
const someFruits = fruits.filter(fruit => {
    return fruit.includes('m');
});
console.log(fruits);
console.log(someFruits);
*/


