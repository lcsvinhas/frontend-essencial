var array = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// foreach
array.forEach((item) => console.log(item));

// map
const array2 = new Array(
    array.map((item) => item + 1));

console.log(`Array 1: ${array}, Array 2: ${array2}`);

// reduce
const somatorio = array.reduce((acumulador, item) => acumulador + item, 0);

console.log(somatorio);

// filter
const novoArray = [90, 10, 15, 30, 40, 60];

const resultadoFilter = novoArray.filter((item) => item >= 30);

console.log(resultadoFilter);

// find
const resultadoFind = novoArray.find((item) => item >= 30);

console.log(resultadoFind);

