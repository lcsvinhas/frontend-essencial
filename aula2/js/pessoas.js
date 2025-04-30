const pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 28, cidade: "Curitiba" },
    { nome: "Lucas", idade: 35, cidade: "Porto Alegre" },
    { nome: "Fernanda", idade: 27, cidade: "Salvador" },
    { nome: "Carlos", idade: 40, cidade: "Fortaleza" },
    { nome: "Juliana", idade: 32, cidade: "Recife" },
    { nome: "Roberto", idade: 29, cidade: "Manaus" },
    { nome: "Patrícia", idade: 31, cidade: "Brasília" }
]

pessoas
    .filter((pessoa) => pessoa.cidade === "Rio de Janeiro" && pessoa.idade >= 30)
    .forEach((pessoa) => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`));

pessoas
    .filter((p) => p.nome.toLowerCase().includes("p"))
    .forEach((p) => console.log(`Nome: ${p.nome}, Idade: ${p.idade}`));