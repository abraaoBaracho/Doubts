
//FUNÇÃO PARA MOSTRAR PERGUNTAS NO FEED
async function getPerguntas() {
    try {
        const response = await axios.get("http://localhost:8000/getPerguntas.php");
        
        if (response.status === 200) {
            console.log( response.data);
        } else {
            console.log("Erro na solicitação:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Ocorreu um erro na solicitação:", error);
    }
}

getPerguntas();

/*
getData()

const perguntas = document.querySelector("#posts")

const printData = async () => {
    const perguntas = await getData()

    perguntas.forEach((pergunta) => {

        const div = document.createElement("div")
        div.id = "post"

        const nome = document.createElement("h3")
        nome.id = "nome-post"
        nome.textContent = pergunta.//colocar palavra referente ao nome, que tiver no back-end
           

        const periodo = document.createElement("h4")
        periodo.id = "periodo-post"
        periodo.textContent = pergunta.//colocar palavra referente ao periodo, que tiver no back-end
            

        const perguntaPost = document.createElement("p")
        perguntaPost.id = "pergunta-post"
        perguntaPost.textContent = pergunta.//colocar palavra referente à pergunta, que tiver no back-end
            

        const responderBtn = document.createElement("a")
        responderBtn.textContent = "Responda essa pergunta"
        responderBtn.href = "" //colocar caminho para responder a pergunta certa
        

        div.appendChild(nome)
        div.appendChild(periodo)
        div.appendChild(perguntaPost)
        div.appendChild(pergunta)
    })
}*/