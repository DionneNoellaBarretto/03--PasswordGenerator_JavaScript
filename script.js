// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", ",", "`", "{", "|", "}", "~"];


//password placeholders
var passwordValuel = "";
var passwordValuen = "";
var passwordValues = "";
var passwordValueu = "";
var passwordLength = "";
var passwordTemp = "";
var selectedspecialCharacter;
var selectedupperCase;
var selectedlowerCase;
var selectednumbers;


function generatePassword() {
    //first prompt to determine password length
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
    var selectedspecialCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");
    var selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
    var selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
    var selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");

    //Validating for atleast 1 prompt being okayed
    while (selectedlowerCase === false && selectedupperCase === false && selectedspecialCharacter === false && selectednumbers === false) {
        alert("Atleast one selection must be considered to create a randomly generated password");
        var selectedspecialCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");
        var selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
        var selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
        var selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");
    }

    //storing all the selected values in a variable for subsequent use
    var selectedOptions = {
            specialCharacters: selectedspecialCharacter,
            numbers: selectednumbers,
            lowerCase: selectedlowerCase,
            upperCase: selectedupperCase
        }
        // return selectedOptions;

    // reiterates user 's selection prior to displaying th randomly generated password
    if (selectedlowerCase === true || selectedupperCase === true || selectedspecilCharacter === true || selectednumbers === true) {
        alert(`Your ${passwordLength} character long password will contain ${JSON.stringify(selectedOptions, null, 2)} `);
    }

    // if the user opted for upper case characters then choose a few character from uppercase string
    if (selectedupperCase) {
        for (let i = 0; i < (Math.floor(passwordLength / 4)); i++) {
            let number = Math.floor(Math.random() * upperCase.length);
            // console.log(1, i, number, upperCase.join(",").substring(number));
            passwordValueu += upperCase.join("").substring(number, number + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }

    // if the user opted for lower case characters then choose a few character from lowercase string
    if (selectedlowerCase) {
        for (let j = 0; j < (Math.floor(passwordLength / 4)); j++) {
            let number = Math.floor(Math.random() * lowerCase.length);
            //   console.log(1, i, number, lowerCase.join(",").substring(number));
            passwordValuel += lowerCase.join("").substring(number, number + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }

    // if the user opted for numbers then choose a few numbers from numbers variable
    if (selectednumbers) {
        for (let k = 0; k < (Math.floor(passwordLength / 4)); k++) {
            let number = Math.floor(Math.random() * numbers.length);
            //   console.log(1, i, number, numbers.join(",").substring(number));
            passwordValuen += numbers.join("").substring(number, number + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }

    // to fill in the password to match the length selected by the user, calaculate how many letters are left
    var passwordTemp = passwordValuel + passwordValuen + passwordValueu;
    //console.log(passwordTemp);
    //console.log((passwordLength - passwordTemp.length));

    // if the user opted for special characters then choose a few characters from specialcharacters string
    if (selectedspecialCharacter) {
        for (let l = 0; l < (passwordLength - passwordTemp.length); l++) {
            let number = Math.floor(Math.random() * specialCharacters.length);
            //   console.log(1, i, number, specialCharacter.join(",").substring(number));
            passwordValues += specialCharacters.join("").substring(number, number + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
        //console.log(passwordValues)
    }

    // concatenating the specialcharacters to fill up until the length of the password is reached
    var randomCharacters = passwordTemp + passwordValues;
    console.log(randomCharacters);

    //Shuffle the randomCharacters into a randomPassword
    var randomPassword = randomCharacters.split("");
    n = randomCharacters.length;
    // console.log(n);
    for (var x = n - 1; x > 0; x--) {
        var y = Math.floor(Math.random() * (x + 1));
        var tmp = randomPassword[x];
        randomPassword[x] = randomPassword[y]
        randomPassword[y] = tmp;
        // console.log(x, y, tmp)
    }
    console.log(randomPassword);
    alert("Your password is " + randomPassword.join(""));
    //returns a randompassword  without the ",'s"
    return randomPassword.join("");
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