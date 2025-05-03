function assincrona() {
    setTimeout(() => {
        console.log("Função assincrona");
}, 3000)
};

console.log("Início");

assincrona();
console.log("Fim do programa!");