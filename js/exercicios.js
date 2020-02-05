// Utilizando o array abaixo e console.log:

// var numeros = [
//     10,
//     15,
//     18,
//     23,
//     50,
//     100,
//     321,
//     1,
//     0
// ];


// faça as seguintes ações:

// 1. Obtenha um novo array a partir do array numeros, com todos os itens multiplicados por 3 e retorne o resultado no console.
// 	2. crie um novo array com os todos os itens menores que 50 e retorne o resultado no console.
// 	3. retorne no console todos os itens pares do array.
// 	4. retorne no console todos os itens impares do array.
// 	5. utilizando o map retorne um novo array que fique da seguinte forma:
// [
//     "numero: 10",
//     "numero: 15",
//     "numero: 18",
//     "numero: 23",
//     "numero: 50",
//     "numero: 100",
//     "numero: 321",
//     "numero: 1",
//     "numero: 0"
// ]

var numeros = [
    10,
    15,
    18,
    23,
    50,
    100,
    321,
    1,
    0
];

// 1. Obtenha um novo array a partir do array numeros, 
// com todos os itens multiplicados por 3 e 
// retorne o resultado no console.

let multiplicados_por_tres = numeros.map(function (item) {
    return item * 3;
});

console.log("EXERCICIO 1:", multiplicados_por_tres);

// 	2. crie um novo array com os todos os itens menores 
// que 50 e retorne o resultado no console.

let menor_cinquenta = numeros.filter((item, index) => item < 50);

console.log("Exercicio 2:", menor_cinquenta);

// 	3. retorne no console todos os itens pares do array.
console.log("Exercicio 3:", numeros.filter(item => item % 2 === 0));

// 	4. retorne no console todos os itens impares do array.
console.log("Exercicio 4:", numeros.filter(item => item % 2 === 1));

// 	5. utilizando o map retorne um novo array que fique da seguinte forma:
let numeros_com_string = numeros.map(item => "numero: " + item);
console.log("Exercicio 5:", numeros_com_string);