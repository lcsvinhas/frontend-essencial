function calcular(a, b) {
    return a * b
}

console.log("O resultado é " + calcular(2, 3));

// Template literal
console.log(`O resultado é ${calcular(2, 3)}. Fim do cálculo!`);

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const numerosMap = numeros.map((numero) => numero * 2);
console.log(numerosMap);

numeros.forEach((numero) => console.log(numero));

const numerosFilter = numeros.filter((numero) => numero % 2 == 0);
console.log(numerosFilter);

const numerosFind = numeros.find((numero) => numero % 2 == 0);
console.log(numerosFind);

nomes = ["Lucas", "Ana", "João", "Maria"];
nomes.forEach((nome) => console.log(nome[0]));