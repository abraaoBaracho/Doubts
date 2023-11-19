const form = document.querySelector("form")
const enviarBtn = document.querySelector("#perguntar-btn")
const id_user = sessionStorage.getItem('id_user')
document.getElementById("id_user").value = id_user;

//FUNÇÃO PARA FAZER PERGUNTA
form.addEventListener('submit', async (e) => {
      try {
    e.preventDefault()

    const formulario = new FormData(form)

    const dados = await fetch(
        'http://localhost:8000/addPergunta.php', {
        method: 'POST',
        body: formulario
    })

    const response = await dados.json()


    if (response === true) {
        enviarBtn.innerText = "Enviado com sucesso"
        enviarBtn.style.backgraundColor = "green";
        setTimeout(() => {
            enviarBtn.innerText = "Enviar"
            window.location.assign("file:///home/abraao/%C3%81rea%20de%20Trabalho/Doubts/Doubts/html/feed.html")
        }, 2000)
    }
    else {
        window.alert("[ERRO!] Algum problema aconteceu, tente novamente.".response)

        enviarBtn.innerText = "[ERRO!]"
        enviarBtn.style.backgraundColor = "red";

        setTimeout(() => {
            enviarBtn.innerText = "Enviar"
        }, 2000)
    }
} catch (erro) {
    window.alert("[ERRO!] Algum problema aconteceu, tente novamente.")

    enviarBtn.innerText = "[ERRO!]"

    setTimeout(() => {
        enviarBtn.innerText = "Enviar"
    }, 2000)
}
}
)