//1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

function Aluno(nomeP, qtFaltasP, notasP) {
    this.nome = nomeP
    this.qtFaltas = qtFaltasP
    this.notas = notasP
    
//2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

    this.calcularMedia = function () {
        let media = 0
        for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i]
        }
        return media / this.notas.length
    }
    this.faltas = function () {
        return this.qtFaltas + 1
    }
}
const aluno1 = new Aluno("Ana", 13, [4, 3, 8, 5]);
const aluno2 = new Aluno("Maria Flor", 10, [5, 6, 20, 3]);
const aluno3 = new Aluno("Isabel", 3, [3.5]);
const aluno4 = new Aluno("Salete", 58, [9.8]);

//3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam) {
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = listaDeEstudantesParam

//4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }

//5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.

    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado = false
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            aprovado = true
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {

//Caso o aluno tenha  a mesma quantidade, tem que estar 10% acima da nota de aprovação.

            aprovado = true
        } 
            return aprovado
    }

 //6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

    this.alunosAprovados = function () {
        let listaAlunosAprovados = []

        for(let i=0;i<this.listaDeEstudantes.length;i++){
            listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
            //console.log(this.aprovarAluno(this.listaDeEstudantes[i]))
        }
            console.log(listaAlunosAprovados)
    }
}

const Materia1 = new Curso("Front End", 7, 2, [aluno1, aluno2, aluno3])
const Materia2 = new Curso("Programação Imperativa", 7, 2, [aluno1, aluno2, aluno3])

console.log(Materia1.aprovarAluno(aluno3))
Materia2.alunosAprovados() 