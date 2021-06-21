// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", ",", "`", "{", "|", "}", "~"];


// console.log(selectedupperCase, selectedlowerCase, selectednumbers, selectedspecialCharacter);

function generatePassword() {
    //password placeholders
    var passwordValuel = "";
    var passwordValuen = "";
    var passwordValues = "";
    var passwordValueu = "";
    var passwordLength = "";
    var passwordTemp = "";
    var selectedspecialCharacter = false;
    var selectedupperCase = false;
    var selectedlowerCase = false;
    var selectednumbers = false;
    //first prompt to determine password length
    passwordLength = (prompt("What length password are you looking to generate? (Select a length between 8 and 128 characters)"))

    // check for password length input
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid password length by choosing a number between 8 and 128 to determine character length of the randomly generated password");
        return;
    }

    // confirms length of password 
    else {
        alert(`Please proceed with selecting what comprises your ${passwordLength} character long password! `)
    }

    //subsequent prompts for including specialcharacters, uppercase and lowercase characters
    selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
    selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");
    selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
    selectedspecialCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");

    console.log(selectedupperCase, selectedlowerCase, selectednumbers, selectedspecialCharacter)
        //Validating for atleast 1 prompt being okayed
    while (selectedlowerCase === false && selectedupperCase === false && selectedspecialCharacter === false && selectednumbers === false) {
        alert("Atleast one selection must be considered to create a randomly generated password");
        selectedupperCase = confirm("Click OK if you would like to include upperCase characters (A, B,C, ....) in your randomly generated password");
        selectedlowerCase = confirm("Click OK if you would like to include lowerCase characters (a,b,c, ...) in your randomly generated password");
        selectednumbers = confirm("Click OK if you would like to include numbers (0 -9) in your randomly generated password");
        selectedspecialCharacter = confirm("Click OK if you would like to include special characters (@, !, ~, ...) in your randomly generated password");
    }

    //storing all the selected values in a variable for subsequent use
    var selectedOptions = {
            upperCase: selectedupperCase,
            lowerCase: selectedlowerCase,
            numbers: selectednumbers,
            specialCharacters: selectedspecialCharacter
        }
        // return selectedOptions;

    // reiterates user 's selection prior to displaying th randomly generated password
    if (selectedlowerCase === true || selectedupperCase === true || selectedspecialCharacter === true || selectednumbers === true) {
        alert(`Your ${passwordLength} character long password will contain ${JSON.stringify(selectedOptions, null, 2)} `);
    }

    // if the user opted for upper case characters then choose a few character from uppercase string
    if (selectedupperCase === true) { // && ((selectednumbers === false || selectedlowerCase === false || selectedspecialCharacter == false))) {
        for (let i = 0; i < (Math.floor(passwordLength / 4)); i++) {
            let randomNumber = Math.floor(Math.random() * upperCase.length);
            // console.log(1, i, randomNumber, upperCase.join(",").substring(randomNumber, randomNumber+1));
            passwordValueu += upperCase.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }
    // if the user opted for lower case characters then choose a few character from lowercase string
    if (selectedlowerCase === true) { //&& ((selectednumbers === false || selectedspecialCharacter === false || selectedupperCase == false))) {
        for (let j = 0; j < (Math.floor(passwordLength / 4)); j++) {
            let randomNumber = Math.floor(Math.random() * lowerCase.length);
            //   console.log(1, i, randomNumber, lowerCase.join(",").substring(randomNumber, randomNumber +1));
            passwordValuel += lowerCase.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }

    // if the user opted for numbers then choose a few numbers from numbers variable
    if (selectednumbers === true) { //} && ((selectedspecialCharacter === false || selectedlowerCase === false || selectedupperCase == false))) {
        for (let k = 0; k < (Math.floor(passwordLength / 4)); k++) {
            let randomNumber = Math.floor(Math.random() * numbers.length);
            //   console.log(1, i, randomNnumber, randomNumbers.join(",").substring(randomNumber, randomNumber +1));
            passwordValuen += numbers.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
    }
    // } else if (selectednumbers === false) {
    //     for (let o = 0; o < (Math.floor(passwordLength / 4)); o++) {
    //         let randomNumber = Math.floor(Math.random() * passwordLength / 4);
    //         //   console.log(1, i, randomNnumber, randomNumbers.join(",").substring(randomNumber, randomNumber +1));
    //         passwordValuen += specialCharacters.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
    //     }
    // }

    // to fill in the password to match the length selected by the user, calaculate how many letters are left
    passwordTemp = passwordValuel + passwordValuen + passwordValueu;
    //console.log(passwordTemp);
    //console.log((passwordLength - passwordTemp.length));

    // if the user opted for special characters then choose a few characters from specialcharacters string
    if (selectedspecialCharacter === true) { // && (selectednumbers === false || selectedlowerCase === false || selectedupperCase == false)) {
        for (let l = 0; l < (passwordLength - passwordTemp.length); l++) {
            let randomNumber = Math.floor(Math.random() * specialCharacters.length);
            //   console.log(1, i, randomNumber, specialCharacter.join(",").substring(randomNumber, randomNumber +1));
            passwordValues += specialCharacters.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
        }
        //console.log(passwordValues)
    }

    // concatenating the specialcharacters to fill up until the length of the password is reached
    var randomCharacters = passwordTemp + passwordValues;
    //console.log(randomCharacters);

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
    //console.log(randomPassword);
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


/* RoughWork:

UC,LC,N,S 
*/