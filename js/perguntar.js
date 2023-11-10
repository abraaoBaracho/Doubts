const form = document.querySelector("form")
const enviarBtn = document.querySelector("#perguntar-btn")

//FUNÇÃO PARA FAZER PERGUNTA
form.addEventListener('submit', async(e) => {
    try{
    e.preventDefault()

    const formulario = new FormData(form)

    const dados = await fetch(
        '', {
            method: 'POST',
            body: formulario
        })

    const response = await dados.json()

    enviarBtn.innerText = "Enviado com sucesso"

    setTimeout(() => {
        enviarBtn.innerText = "Enviar"
    }, 5000)
    }

    catch(erro){
        window.alert("[ERRO!] Algum problema aconteceu, tente novamente.")

        enviarBtn.innerText = "[ERRO!]"

        setTimeout(() => {
            enviarBtn.innerText = "Enviar"
        }, 5000)
        }
    }
)