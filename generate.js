// Elements

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//Password Characters as per https://owasp.org/www-community/password-special-characters

let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|:;<,>.?';
let passwordLength = 8;
let passwordValue = '';

//Create Password

const createPassword = () => {
        passwordValue = ''; // resets password each time to ensure we start with a clean slate

        for (let i = 0; i < passwordLength; i++) {
            let number = Math.floor(Math.random() * characters.length);
            passwordValue += characters.substring(number, number + 1) // adds the second character to first by appending it as opposed to replacing it 
        }

        password.value = passwordValue;
    }
    //Event Listener

generateBtn.addEventListener('click', createPassword);