const QUESTOS_QUIZ = [
    {
        questao: 'Quem é o professor mais legal da Ctrl + play?',
        a: 'Rodrigo',
        b: 'Diego',
        c: 'Felipe',
        d: 'Daniel',
        correta: 'b',
    },
    {
        questao: 'Linguagem de programação mais legal?',
        a: 'Python',
        b: 'JavaScript',
        c: 'PHP',
        d: 'C#',
        correta: 'a',
    },
    {
        questao: 'Qual é a alternativa correta?',
        a: 'c',
        b: 'd',
        c: 'a',
        d: 'b',
        correta: 'c',
    },
]

// PASSO 1 - IDENTIFICAR ELEMENTOS
const QUIZ_TITULO = document.querySelector('h1')
const ALTERNATIVA_A = document.querySelector('#texto_a')
const ALTERNATIVA_B = document.querySelector('#texto_b')
const ALTERNATIVA_C = document.querySelector('#texto_c')
const ALTERNATIVA_D = document.querySelector('#texto_d')
const BOTAO = document.querySelector('button')
const QUIZ_CONTAINER = document.querySelector('.container')
const ALTERNATIVAS = document.querySelectorAll('.resposta')

let verificou = false
let acertou = 0
let questao_atual = 0

window.onload = carregar_quiz()
BOTAO.addEventListener('click', verificar)

// Passo 3 criar as Funcões 
function carregar_quiz()
{
    const QUESTAO = QUESTOS_quiz[questao_atualizada]
    ALTERNATIVAS.forEach((alternativa) =>{
        document.querySelector(`label[for${alternativa.id}]`).classList.remove("correta", 'incorreta')
 })
    QUIZ_TITULO.innerText = QUESTAO.questao
    ALTERNATIVA_A.innerText = QUESTAO.a
    ALTERNATIVA_B.innerText = QUESTAO.b
    ALTERNATIVA_C.innerText = QUESTAO.c
    ALTERNATIVA_D.innerText = QUESTAO.d
    
}

function verificar(){
    if (verificou == false){
        verificar_resposta()
    }
    else{
        proxima_pergunta()
    }
}
function verificar_resposta()
{
    const RESPOSTA_CORRETA = QUESTOS_QUIZ[questao_atual].correta
    const RESPOSTA_JOGADOR = pegar_resposta[questao_atual].correta
    ALTERNATIVAS.forEach((alternativa) =>{
        const LABEL = document.querySelector(`label[for=${alternativa.id}]`)
        if (alternativa.id == RESPOSTA_CORRETA)

    
    {
        LABEL.classList.add("correta")
    }
    else{
        LABEL.classList.add("incorreta")
    }
})
    if (RESPOSTA_JOGADOR == RESPOSTA_CORRETA)
    {
        acerto++
    }
    BOTAO.innerText="Proxima"
    verificou = true
}
function pegar_resposta()
{
    let resposta = undefined
    ALTERNATIVAS.forEach((alternativa)=>{
        if (alternativa.checked == true){
            resposta = alternativa.id
        }
    })
    return resposta
}
function proxima_pergunta(){
    questao_atual++
    maximo_perguntas = QUESTOS_QUIZ.length
    if (questao_atual < maximo_perguntas)
    {
        carregar_quiz()
    }
    else{
        QUIZ_CONTAINER.innerHTML = `<h1 id="questao"> Voce acertou ${acertou} de ${maximo_perguntas} perguntas! </h1>`
    }
}