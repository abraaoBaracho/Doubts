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

                const pergunta = document.createElement("h2");
                pergunta.id = "pergunta-post";
                pergunta.textContent = valor.pergunta;
                div.appendChild(pergunta);

                const botao = document.createElement("button");
                botao.id = "salvar";
                botao.textContent = "Responder"
                div.appendChild(botao);

                document.body.appendChild(div);

                botao.onclick = function () {
                    sessionStorage.setItem('id_pergunta', valor.id)
                    sessionStorage.setItem('titulo', valor.titulo)
                    sessionStorage.setItem('pergunta', valor.pergunta)
                    window.location.assign("file:///home/abraao/%C3%81rea%20de%20Trabalho/Doubts/Doubts/html/responder.html")
                };
        });
    }
}

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        uparrowBtn.style.display = "block"
    }

    else if(window.pageYOffset < 200){
        uparrowBtn.style.display = "none"
    }
})
