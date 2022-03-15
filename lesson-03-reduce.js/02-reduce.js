const meses = ['','enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio','julio', 'agosto', 'septiembre','octubre', 'noviembre','diciembre'];

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



const mapa = data.map(elemento => {
    const mes = meses[elemento.month];
    const precio = elemento.value;

    return {
        mes,
        precio
    }
});

//console.log(mapa);


const filtro = mapa.filter(elemento => {
    //console.log('ELEMENTO =====>', elemento);
    return elemento.mes.includes('enero');
});

//console.log(filtro);

// REDUCE

const reduccion = data.reduce( (acumulador, elemento, index, arrayOriginal) => {
    acumulador.total += elemento.value; 
    acumulador.meses = arrayOriginal.length;
    return acumulador
} , {total: 0, meses: 0});

console.log(reduccion);



