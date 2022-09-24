const Aluno = require('./alunos');
const NovosAlunos = require('./estudanteTransferido');

let Curso = {
    nomeDoCurso : 'ProvaMeuBolo',
    notaDeAprovacao: 7,
    faltasMax: 5,
    listaDeEstudantes:NovosAlunos,

    adicionaAluno: function(nome, qtdFaltas, notas){
       this.listaDeEstudantes.push(new Aluno(nome, qtdFaltas, notas))
    },

    aprovado(Aluno) {
        if (Aluno.calculaMedia() >= this.notaDeAprovacao && Aluno.qtdFaltas < this.faltasMax) {
            return true;
        } else if (Aluno.qtdFaltas == this.faltasMax && Aluno.calculaMedia() >= this.notaDeAprovacao*0.10) {
            return true;
        } return false;
    },

    listaAprovacao(){
        return this.listaDeEstudantes.map(function(Aluno){
            return this.aprovado(Aluno)
        })
    }

}

module.exports = Curso;