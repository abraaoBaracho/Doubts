//FUNÇÃO PARA MOSTRAR PERGUNTAS NO FEED
async function getData() {
   try {
        const response = await axios.get("http://localhost:8000/getPerguntas.php")
        return response.data
    
   }
  catch{
      console.log(error)
       window.alert('Estamos com problema no sistema, voltaremos logo!')
    }
}
async function printData(){
    const dados = await getData()
    if(Array.isArray(dados)){
        dados.forEach(valor => {

            const div = document.createElement("div");
                div.id = "post";

                const titulo = document.createElement("h3");
                titulo.id = "titulo-post";
                titulo.textContent = valor.titulo;
                div.appendChild(titulo);

                const pergunta = document.createElement("h3");
                pergunta.id = "pergunta-post";
                pergunta.textContent = valor.pergunta;
                div.appendChild(pergunta);

                const botao = document.createElement("button");
                botao.id = "salvar";
                botao.textContent = "Responder"
                div.appendChild(botao);

                document.body.appendChild(div);

                botao.onclick = function () {
                    // Substitua este código pelo que você deseja fazer quando o botão é clicado
                    console.log("Botão Responder clicado para a pergunta:", valor.pergunta);
                };
        });
    }
}

/*
const perguntas = document.querySelector("#posts")

const printData = async() => {
    try{
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
    catch(erro){
        window.alert('Estamos com problema no sistema, voltaremos logo!')
    }
}
printData()*/