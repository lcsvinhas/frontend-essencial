// Função declarativa

function soma(a, b) {
    return a + b;
}

console.log("Soma: " + soma(2, 3));

const numeros = [5, 4, 3, 2, 1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 102, 103, 104, 105, 106, 107, 108, 109, 110];

function media(nums) {
    let soma = 0;
    for (let i = 0; i < nums.length; i++) {
        soma += nums[i];
    }
    return Math.round(soma / nums.length);
}

console.log("Média: " + media(numeros));