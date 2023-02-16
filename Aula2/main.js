'use script'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    let situacao = document.getElementById('situacao');
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class = "aluno_nome">${nome}</h2>
                        <span class = "aluno_nota">${nota}</span>`

    container.appendChild(novaDiv)

    if(nota < 5) {
        container.classList.add('sombra_vermelha')
    } else{
        container.classList.add('sombra_azul')
    }
    

}

const handleClick = () => {
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Digite as notas do aluno')
    adicionarCard(nome, nota)
} 

adicionar.addEventListener('click', handleClick)