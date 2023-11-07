const novaNota = document.getElementById("nova-nota")
const adicionarNota = document.getElementById("adicionar-nota")
const limparNotas = document.getElementById("limpar-notas")
const notasSalvas = document.getElementById("notas-salvas")

if(localStorage.getItem("notas")) {
    const notas = JSON.parse(localStorage.getItem("notas"))

    notas.forEach(function (nota, index){
        criarNota(nota, index)
    })
}

adicionarNota.addEventListener("click", function(){
    const textoNota = novaNota.value.trim()
    if(textoNota !== ''){
        criarNota(textoNota)
        salvarNota()
        novaNota.value = ''
    }
})

limparNotas.addEventListener("click", function(){
    notasSalvas.innerHTML = ''
    localStorage.removeItem('notas')
})

function criarNota(texto, index) {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const botaoEditar = document.createElement("button")
    const botaoExcluir = document.createElement("button")
    const inputCor = document.createElement("input")
    
    inputCor.type = "color"
    p.textContent = texto
    botaoEditar.textContent = "Editar"
    botaoExcluir.textContent = "Excluir"

    div.appendChild(p)
    div.appendChild(botaoEditar)
    div.appendChild(botaoExcluir)
    div.appendChild(inputCor)

    div.className = "nota"
    //Verifica se o indice é indefinido
    if(index !== undefined) {
        const notas = JSON.parse
        (localStorage.getItem("notas"))
        inputCor.value = notas[index].cor;
        div.style.backgroundColor = notas[index].cor
    }
     notasSalvas.appendChild(div)

     // Função para editar a nota
     botaoEditar.addEventListener("click",function(){
        editarNota(p, div, inputCor)
     })
     // Função para excluir a nota
     botaoExcluir.addEventListener("click",function(){
        if(confirm("Tem certeza que deseja excluir está Nota?")){
            div.remove()
            salvarNota()
        }
     })

// Funçao para alternar entre a visualização da nota e a textarea para edição
function editarNota(p, div, inputCor) {
    const textareaEdicao = document.createElement("textarea")
    textareaEdicao.value = p.textContent
    div.replaceChild(textareaEdicao, p)

    const botaoSalvar = document.createElement("button")
    botaoSalvar.textContent = "Salvar"
    div.appendChild(botaoSalvar)
}








}