//Elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")
const BannerLayer = document.querySelector("#banner-layer")
const BannerLayerLogin = document.querySelector("#banner-layer-login")
const PasswordDiv = document.querySelector("#password-generation-div")
const loginBtn = document.querySelector("#Logar")
//itens do formulário
const nameConst = String(document.getElementById("name").value)
const matriculaLogin = String(document.querySelector("#matricula-login").value)
const matricula = String(document.getElementById("matricula").value)
const periodo = String(document.getElementById("periodo").value)
const password = String(document.getElementById("password").value)
const confirmPassword = String(document.getElementById("confirmpassword").value)
const passwordLogin = String(document.querySelector("#password-login").value)
const submitBtn = String(document.getElementById("cadastrar").value)
const nameTip = String(document.getElementById("name-tip").value)
const periodoTip = String(document.getElementById("período-tip").value)
const suggestion = String(document.getElementById("suggestion").value)
/*
const formObject = {
    Nome: nameConst,
    Matricula: matricula,
    Periodo: periodo,
    Senha: password,
    ConfirmSenha: confirmPassword
}
const formLoginObject = {
    Nome: matriculaLogin,
    Senha: passwordLogin
}
const formSuggestionObject = {
    Nome: nameTip,
    Periodo: periodoTip,
    Sugestão: suggestion
}*/
//o formlário
const form = document.querySelector("#form")
const formLogin = document.querySelector("#form-login")
const tipDiv = document.querySelector("#tip")
//botões para alterar
const log = document.querySelector("#login")
const reg = document.querySelector("#register")

//Funções
const getLetterLowerCase = () => {
    //Gerar letras minúsculas aleatoriamente
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
} 

const getLetterUpperCase = () => {
    //Gerar letras maiúsculas aleatoriamente
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
} 

const getNumber = () => {
    //Gerar números aleatoriamente
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    //Gerar símbolos aleatoriamente
    const symbols = ".@&*,_-+"

    return symbols[Math.floor(Math.random() * symbols.length)]
}

const  generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = ""
    const passwordLength = +lengthInput.value

    const generators = []

    if(lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if(numbersInput.checked){
        generators.push(getNumber)
    }
    if(symbolsInput.checked){
        generators.push(getSymbol)
    }
    console.log(generators.length)
    if(generators.length == 0){
        return
    }


    for(c = 0; c < passwordLength; c = c + generators.length){
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }

    password = password.slice(0, passwordLength)
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
}

function login(){
    if(BannerLayer.style.display = "block" ){
        BannerLayer.style.display = "none"
        form.style.display = "none"
        PasswordDiv.style.display = "none"

        BannerLayerLogin.style.display = "block"
        formLogin.style.display = "block"
        tipDiv.style.display = "block"

        reg.style.borderBottom = "none"
        log.style.borderBottom = "1px solid #0099ff"
    }
}

function register(){
    if(BannerLayer.style.display = "none"){
        BannerLayer.style.display = "block"
        form.style.display = "block"
        PasswordDiv.style.display = "block"
        
        BannerLayerLogin.style.display = "none"
        formLogin.style.display = "none"
        tipDiv.style.display = "none"

        log.style.borderBottom = "none"
        reg.style.borderBottom = "1px solid #0099ff"
    }
}

function enviarBtn(){
    loginBtn.value = "Enviado !"

    setTimeout(() => {
        loginBtn.value = "Enviar"
    }, 3000)
}

//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {

        copyPasswordButton.innerText = "Senha copiada com sucesso!" 

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 3000)
    })
})

//cadastro
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    
    const data = await fetch(
        'http://localhost:8000/addUser.php',{
        method: 'POST',
        body: formData
        })
   
   const response = await data.json()
   if (response[0] === "23000"){
alert("Usuario ja cadastrado");
   }else{
    console.log(response);
   }
   
   
})
//login
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(formLogin);

    const data = await fetch(
        'http://localhost:8000/doLogin.php', {
            method: 'POST',
            body: formData
        })


    const response = await data.json()
    console.log(response);
    })
//sugestão
tipDiv.addEventListener('submit', async (e) => {
    enviarBtn()
    
    e.preventDefault()

    const suggestion = formSuggestionObject
    
    const data = await fetch(
        'http://localhost:8800',{
        method: 'POST',
        body: suggestion
        })
   
   const jsonn = await data.json()
})