// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", ",", "`", "{", "|", "}", "~"];

function generatePassword() {
    //password placeholders
    var passwordValuel = "";
    var passwordValuen = "";
    var passwordValues = "";
    var passwordValueu = "";
    var passwordLength = "";
    let count = 0;
    var diff = 0;
    var appendl = "";
    var appendn = "";
    var appends = "";
    var appendu = "";

    // initiatializing variables used subsequently within this function
    var selectedspecialCharacter = false;
    var selectedupperCase = false;
    var selectedlowerCase = false;
    var selectednumbers = false;

    //first prompt to determine password length
    passwordLength = (prompt("What length password are you looking to generate? (Select a length between 8 and 128 characters)"));

    // check for password length input
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid password length by choosing a number between 8 and 128 to determine character length of the randomly generated password");
        return;
    }

    // confirms length of password 
    else {
        alert(`Please proceed with selecting what comprises your ${passwordLength} character long password! Atleast one selection must be considered to create a randomly generated password.`);
    }

    //console.log(selectedupperCase, selectedlowerCase, selectednumbers, selectedspecialCharacter)
    //Validating for atleast 1 prompt being okay'ed
    while (selectedlowerCase === false && selectedupperCase === false && selectedspecialCharacter === false && selectednumbers === false) {
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
    };

    // reiterates user's selection prior to displaying th randomly generated password
    if (selectedlowerCase === true || selectedupperCase === true || selectedspecialCharacter === true || selectednumbers === true) {
        alert(`Your ${passwordLength} character long password will contain ${JSON.stringify(selectedOptions, null, 2)} `);
    }

    //check for true's using truthy format:
    if (selectednumbers) {
        count = count + 1;
    }
    if (selectedupperCase) {
        count = count + 1;
    }
    if (selectedlowerCase) {
        count = count + 1;
    }
    if (selectedspecialCharacter) {
        count = count + 1;
    }

    // if the user opted for upper case characters then choose a few character from uppercase string
    // this condition for if implies true hence skipping '=== true' part : using truthy format
    if (selectedupperCase) {
        passwordValueu = generateValues(passwordLength, count, upperCase);
        // console.log(passwordValueu);
    }

    // if the user opted for lower case characters then choose a few character from lowercase string
    // this condition for if implies true hence skipping '=== true' part  : using truthy format
    if (selectedlowerCase) {
        passwordValuel = generateValues(passwordLength, count, lowerCase);
        //  console.log(passwordValuel);
    }

    // if the user opted for numbers then choose a few numbers from numbers variable
    // this condition for if implies true but here's an example where an explicit '=== true' part is defined : not using truthy format
    if (selectednumbers === true) {
        passwordValuen = generateValues(passwordLength, count, numbers);
        //  console.log(passwordValuen);
    }

    // if the user opted for numbers then choose a few numbers from numbers variable
    // using truthy format
    if (selectedspecialCharacter) {
        passwordValues = generateValues(passwordLength, count, specialCharacters);
        // console.log(passwordValues);
    }
    // concatenating all the equally divided passvalues
    var randomCharacters = passwordValueu + passwordValuel + passwordValuen + passwordValues;
    //console.log(randomCharacters, randomCharacters.length);

    //filling up the password length with characters user has chosen
    diff = (passwordLength - randomCharacters.length);
    // console.log(diff);

    if (diff > 0 && selectedupperCase === true) {
        appendu = generateValues(diff, 1, upperCase);
        //  console.log(appendu);
    } else if (diff > 0 && selectedlowerCase === true) {
        appendl = generateValues(diff, 1, lowerCase);
        //    console.log(appendl);
    } else if (diff > 0 && selectednumbers === true) {
        appendn = generateValues(diff, 1, numbers);
        //   console.log(appendn);
    } else if (diff > 0 && selectednumbers === true) {
        appends = generateValues(diff, 1, specialCharacters);
        //  console.log(appends);
    }
    randomCharacters += appendu + appendl + appends + appendn;
    //console.log(randomCharacters, randomCharacters.length);

    //Shuffle the randomCharacters into an actual randomPassword
    var randomPassword = randomCharacters.split("");
    var n = randomCharacters.length;
    // console.log(n);
    for (var x = n - 1; x > 0; x--) {
        var y = Math.floor(Math.random() * (x + 1));
        var tmp = randomPassword[x];
        randomPassword[x] = randomPassword[y];
        randomPassword[y] = tmp;
        // console.log(x, y, tmp)
    }

    //console.log(randomPassword);
    alert(`Your ${passwordLength} character long password is ${randomPassword.join("")}`);
    //returns a randompassword  without the ",'s"
    return randomPassword.join("");

}

//this function is called by generatePassword to churn through the 4 choices chosen by the user randomNumber of times
function generateValues(passLength, counter, inputString) {
    let outputString = "";
    for (let i = 0; i < (Math.floor(passLength / counter)); i++) {
        var randomNumber = Math.floor(Math.random() * inputString.length);
        outputString += inputString.join("").substring(randomNumber, randomNumber + 1); // adds the second character to first by appending it as opposed to replacing it and has converted everything to a string
    }
    return outputString;
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