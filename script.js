// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", ",", "`", "{", "|", "}", "~"];

var passwordLength = "";
var selectedspecilCharacter;
var selectedupperCase;
var selectedlowerCase;

//first prompt to determine password length
function generatePassword() {
    var passwordLength = (prompt("What length password are you looking to generate? (Select a length between 8 and 128 characters)"))
        // check for password length input
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid password Length  by choosing a number between 8 and 128 to determine character length of the password")
    }
    // confirms length of password 
    else {
        alert(`Your password will be ${passwordLength} characters long!`)
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    // var password = 0;

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);