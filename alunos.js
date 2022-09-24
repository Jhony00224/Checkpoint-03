const aluno = function(nome, qtdFaltas, notas){
    this.nome = nome,
    this.qtdFaltas = qtdFaltas,
    this.notas = notas,

    this.calculaMedia = function () {
        let soma = 0;

        for (i = 0; i < notas.length; i++) {
          let notaAux = notas[i];
          soma = soma + notaAux;
        }

        return soma / notas.length;
      },

      this.faltas = () => {
        this.qtdFaltas++
    };
}
module.exports = aluno;