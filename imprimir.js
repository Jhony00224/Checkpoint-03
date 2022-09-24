//Informação para pessoas desatualizada sobre o curso.

const Curso = require("./curso");

console.log('O nome do curso é: ' + Curso.nomeDoCurso)
console.log('A nota de aprovação precisa ser igual ou acima de: ' + Curso.notaDeAprovacao)
console.log('Neste Curso para ser aprovado, o aluno precisa ter menos que: ' + Curso.faltasMax + 'faltas.')

Curso.adicionaAluno("Maria",3,[5,5,8]);

Curso.listaDeEstudantes.find((Aluno)=>{
    return Aluno.nome === "Eduardo"
});

Curso.listaDeEstudantes.forEach((Aluno)=>{
    console.log('Nome: ' + Aluno.nome);
    console.log('Quantidade de Faltas: ' + Aluno.qtdFaltas);
    console.log('As notas são: ' + Aluno.notas);
    console.log('A média de suas notas é: ' + Aluno.calculaMedia());
    console.log('Situação no curso: ' + Curso.aprovado(Aluno) ? "Aprovado" : "Reprovado")
});