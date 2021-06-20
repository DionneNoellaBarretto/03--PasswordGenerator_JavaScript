// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", ",", "`", "{", "|", "}", "~"];
// let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|:;<,>.?';
let passwordValue = '';
//password placeholders
var passwordValuel = "";
var passwordValuen = "";
var passwordValues = "";
var passwordValueu = "";
var passwordLength = "";
var selectedspecilCharacter;
var selectedupperCase;
var selectedlowerCase;
var selectednumbers;

//first prompt to determine password length
function generatePassword() {
    var passwordLength = (prompt("What length password are you looking to generate? (Select a length between 8 and 128 characters)"))
        // check for password length input
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid password Length  by choosing a number between 8 and 128 to determine character length of the password");
        return;
    }
    // confirms length of password 
    else {
        alert(`Please proceed with selecting what comprises your ${passwordLength} character long password! `)
    }

    //subsequent prompts for including specialcharacters, uppercase and lowercase characters
    var selectedspecilCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");
    var selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
    var selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
    var selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");

    //Validating for atleast 1 prompt being okayed
    while (selectedlowerCase === false && selectedupperCase === false && selectedspecilCharacter === false && selectednumbers === false) {
        alert("Atleast one selection must be considered to create a randomly generated password");
        var selectedspecilCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");
        var selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
        var selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
        var selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");
    }

    var selectedOptions = {
            specialCharacters: selectedspecilCharacter,
            numbers: selectednumbers,
            lowerCase: selectedlowerCase,
            upperCase: selectedupperCase
        }
        // return selectedOptions;

    //reiterates user's selection prior to displaying th randomly generated password
    // if (selectedlowerCase === true || selectedupperCase === true || selectedspecilCharacter === true || selectednumbers === true) {
    //     alert(`Your ${passwordLength} character long password will contain ${JSON.stringify(selectedOptions, null, 2)} `);
    // }

    if (selectedupperCase) {
        console.log(upperCase.join(","));
        for (let i = 0; i < (Math.floor(passwordLength / 4)); i++) {
            let number = Math.floor(Math.random() * upperCase.length);
            console.log(1, i, number, upperCase.join(",").substring(number));
            passwordValueu += upperCase.join("").substring(number, number + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }
    // if (selectedlowerCase) {
    //     console.log(lowerCase.join(","));
    //     for (let j = 0; j < passwordLength; j++) {
    //         let number = Math.floor(Math.random() * lowerCase.length);
    //         passwordValuel += lowerCase.join(",").substring(number, number + 1) // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
    //     }
    //     console.log(passwordValuel);
    // }
    // if (selectednumbers) {
    //     console.log(numbers.join(","));
    //     for (let k = 0; k < passwordLength; k++) {
    //         let number = Math.floor(Math.random() * numbers.length);
    //         passwordValuen += numbers.join(",").substring(number, number + 1) // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
    //     }
    //     console.log(passwordValuen);
    // }

    // if (selectedspecilCharacter) {
    //     console.log(specialCharacters.join(","));
    //     for (let l = 0; l < passwordLength; l++) {
    //         let number = Math.floor(Math.random() * specialCharacters.length);
    //         passwordValues += specialCharacters.join(",").substring(number, number + 1) // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
    //     }
    //     console.log(passwordValues);
    // }

    var randomPassword = passwordValuel + passwordValuen + passwordValueu + passwordValues;
    alert("Your password is " + randomPassword);
    console.log(randomPassword);
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