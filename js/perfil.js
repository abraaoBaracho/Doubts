//FUNÇÃO PARA MOSTRAR DADOS DO PERFIL
const getData = async () => {
    try {
        const response = await axios.get("")//colocar caminho para back-end

        return response
    }
    catch{
        console.log(error)
        window.alert("[ERRO!] Algum problema aconteceu na busca do seu perfil, pode ser um problema temporário.")
    }
}
getData()

const variavelDivPerfil = document.querySelector("#perfil-div")
const printPerfil = async() => {

    variavelDivPerfil = await getData()

    const nomePerfil = document.createElement("p")
    nomePerfil.id = "nome-perfil"
    nomePerfil.textContent = variavelDivPerfil.//colocar palavra referente ao nome, que tiver no back-end
    variavelDivPerfil.appendChild(nomePerfil)

    const periodoPerfil = document.createElement("p")
    periodoPerfil.textContent = variavelDivPerfil.//colocar palavra referente ao periodo, que tiver no back-end
    periodoPerfil.id = "periodo-perfil"
    variavelDivPerfil.appendChild(periodoPerfil)

    const editBtn = documnet.createElement("button")
    editBtn.id = "btn-edit-perfil"
    editBtn.textContent = "Editar"
    variavelDivPerfil.appendChild(editBtn)

}
printPerfil()

//FUNÇÂO PARA EDITAR O PERFIL

//elementos
const form = document.querySelector("#form-perfil-edit")
const postDivBtn = document.querySelector("#btn-edit-perfil")

postDivBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const editarPerfilDiv = document.querySelector("#editar-perfil-div")
    
    if(editarPerfilDiv.style.display = "none"){
    editarPerfilDiv.style.display = "block"
    }
})

form.addEventListener('submit', async(e) => {
    try{
        e.preventDefault()

    const fomrulario = new FormData(form)

    const data = await fetch(
        '',{
        method: 'POST',
        body: fomrulario
        })

    const response = await data.json()
    }
    catch(erro){
        window.alert("[ERRO] Algum problema aconteceu, tente mais tarde.")
    }
})