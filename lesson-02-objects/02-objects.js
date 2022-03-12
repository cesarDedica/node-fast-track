const kiss = {
    tipo: 'Rock',
    lanzamiento: 1973,
    discos: 25,
    activos: true,
    integrantes: [
        {
            nombre: 'Starchild',
            instrumento: 'guitarra',
            rol: 'Lead singer'
        },
        {
            nombre: 'Demon',
            instrumento: 'Bajo'
        },
        {
            nombre: 'Ace',
            instrumento: 'guitarra solos'
        },
        {
            nombre: 'Catman',
            instrumento: 'Bateria'
        }
    ],
    estructura: {
        guitarra: 'P stanley',
        bateria: 'P Criss',
        solos: 'Ace',
        bajo: 'G Simmons'
    }
}

console.log(kiss.discos);
console.log(kiss['discos']);

console.log(kiss.integrantes[0].rol);

console.log( Object.keys(kiss) );
console.log( Object.values(kiss) );

console.log('---------------------');
console.log(kiss.premios);

kiss.premios = 9999999;

console.log(kiss.premios);