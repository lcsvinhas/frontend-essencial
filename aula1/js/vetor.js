var frutas = new Array();
let cores = [];
let cursos = ["Java", "JavaScript", "Python", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "Kotlin"];
let pessoas = [{nome: "João", idade: 25}, {nome: "Maria", idade: 30}, {nome: "Pedro", idade: 35}];

cursos.push("HTML", "CSS", "React", "Angular", "Vue", "Node.js", "Django", "Flask", "Spring", "Laravel");
cursos.push(1, 2, 3, 4, 5);
cursos.unshift("Delphi", "Pascal", "Fortran", "Cobol", "Assembly", "Lisp", "Prolog", "Ada", "R", "SAS");

cursos.sort();
cursos.reverse();

cursos.shift();
cursos.pop();

cursos.splice(0, 3);

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

const livro = {
    titulo: "Aprendendo JavaScript",
    autor: "John Doe",
    ano: 2020,
    editora: "Editora XYZ",
    preco: 49.90,
    disponivel: true,
    categorias: ["programação", "tecnologia", "desenvolvimento"]
};

console.log(livro.autor);