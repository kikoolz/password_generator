const passwordBox = document.getElementById("password")
const shuffleBtn = document.getElementById("btn")
const copyBtn = document.getElementById("copy")

const passwordLength = 12

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]></-=?!" 

// generate random password
function generatePassword(length) {
    let password = ""
    for(let i = 0; i < length; i++) {
        const randomChar = Math.floor(Math.random() * allChars.length)
        password += allChars[randomChar]
        passwordBox.value = password
    }
}

// render password in inputField
function renderPassword(){
    const passwordEl = generatePassword(passwordLength)
    passwordBox.textContent = passwordEl
}

// copy generated password

function copyPassword(){
    passwordBox.select()
    navigator.clipboard.writeText(passwordBox.value);
}

// Add event listener for the buttons

shuffleBtn.addEventListener("click", renderPassword)
copyBtn.addEventListener("click", copyPassword )