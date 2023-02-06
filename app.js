'use strict'

const calcular = document.getElementById('calcular')

function somar() {
    const nota01 = Number(document.getElementById('nota01').value)
    const nota02 = Number(document.getElementById('nota02').value)
    //const situacao = document.getElementById ('situacao')
    //const formulario = document.getElementById('formulario')

    const situacao = (nota01 + nota02) /2
    const reprovado = 'Aluno Reprovado'
    const aprovado = 'Aluno Aprovado'

    if(situacao >= 7){
        situacao.aprovado
    } else{
        situacao.reprovado
    }
    }


calcular.addEventListener('click', somar)
