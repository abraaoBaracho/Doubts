//FUNÇÃO PARA MOSTRAR PERGUNTAS NO FEED
const getData = async () => {
    try {
        const response = await axios.get("")//colocar caminho para back-end

        return response
    }
    catch{
        console.log(error)
    }
}
getData()

const perguntas = document.querySelector("#posts")

const printData = async() => {
    const perguntas = await getData()

    perguntas.forEach((pergunta) => {

        const div = document.createElement("div")
        div.id = "post"

        const nome = document.createElement("h3")
        nome.id = "nome-post"
        nome.textContent = pergunta.//colocar palavra referente ao nome, que tiver no back-end
        div.appendChild(nome)

        const periodo = document.createElement("h4")
        periodo.id = "periodo-post"
        periodo.textContent = pergunta.//colocar palavra referente ao periodo, que tiver no back-end
        div.appendChild(periodo)
        
        const perguntaPost = document.createElement("p")
        perguntaPost.id = "pergunta-post"
        perguntaPost.textContent = pergunta.//colocar palavra referente à pergunta, que tiver no back-end
        div.appendChild(perguntaPost)
        
        const responderBtn = document.createElement("a")
        responderBtn.textContent = "Responda essa pergunta"
        responderBtn.href = "" //colocar caminho para responder a pergunta certa
        div.appendChild(pergunta)

    })
}