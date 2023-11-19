var id_pergunta = sessionStorage.getItem('id_pergunta')
var titulo = sessionStorage.getItem('titulo')
var pergunta = sessionStorage.getItem('pergunta')
var form = document.querySelector("form")
var id_user = sessionStorage.getItem('id_user')

document.getElementById('id_pergunta').value = id_pergunta
document.getElementById('id_user').value = id_user


async function getData() {
    try {
        document.getElementById('nome-post').innerHTML = titulo
        document.getElementById('pergunta-post').innerHTML = pergunta
        const data = await fetch("http://localhost:8000/getRespostas.php?id_pergunta=" + id_pergunta)
        const response = await data.json()
        
        if(Array.isArray(response)){
            response.forEach(valor => {
                
                const div = document.getElementById("respostas");
    
                    const resposta = document.createElement("h3");
                    resposta.id = "resposta-post";
                    resposta.textContent = valor.resposta;
                    div.appendChild(resposta);
                    
                    const br = document.createElement("br");
                    div.appendChild(br);
            });
        }else{
            console.log("erro")
        }

    }
    catch {
        console.log(error)
        window.alert('Estamos com problema no sistema, voltaremos logo!')
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const data = await fetch(
        'http://localhost:8000/addResposta.php', {
        method: 'POST',
        body: formData,
    })

    const response = await data.json()
    alert(response)
    
    setTimeout(() => {
        location.reload();
    }, 1000)
})