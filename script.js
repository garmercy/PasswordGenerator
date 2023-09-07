// This var it is conected whin the bottom generate password.
var generateBtn = document.querySelector("#generate");

//Var lower it's the list of the lowercase alphabet.
var lower = "abcdefghijklmnopqrstuvwxyz";

//Var upper it's the list of the uppercase alphabet.
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Var number it's the list of numbers.
var number = "0123456789";

//Var symbol it's the list of the symbols.
var symbol = "`~!@#$%^&*()_+-={}[]:;<>?',./";


// The function generatePassword return the password created with the user requirements.
function generatePassword(){

  //The stringPass its the final password that it is showed on the screen.
  let stringPass = "";

  //typeChar it's the type of characters, and it is used to configure aleatory the characters that are going to form password.
  let typeChar;

  //newChar it is the result of creating an aleatory character. 
  let newChar;


  //Using if and else, we register the user requirements for the future password (length,numbers,symbols,lowercase & uppercase).
  
  //getLength defines the password length. 
  //If the user selects another answer that it's not a number between 8 to 128, 8 will be used as a minimum length by default.
  let getLength = prompt("Please enter the length of your password from 8 to 128");
  if (getLength > 7 && getLength< 129 ) {
    alert("Perfect " + getLength + " it's the length of your password");
  }else{
    alert("Sorry, it's included 8 by default as a minimun lenght");
    getLength=8;
  }
   
  //getLower specifies if the person prefers lowercase or not in the password.
  let getLower = prompt("Do you want lowercase in your password?");
  if (getLower === "yes" || getLower === "Yes" || getLower === "YES" ) {
    alert("Perfect you will have lowercase in your password");
    getLower=1;
  }else{
    alert("You won't have lower case");
    getLower=0;
  }

  //getUpper specifies  if the person prefers uppercase or not in the password.   
  let getUpper = prompt("Do you want uppercase in your password?");
  if (getUpper === "yes" || getUpper === "Yes" || getUpper === "YES") {
    alert("Perfect you will have uppercase in your password");
    getUpper=1;
  }else{
    alert("You won't have upper case.");
    getUpper=0;
  }

  //getNumber specifies  if the person prefers numbers or not in the password.  
  let getNumber = prompt("Do you want numbers in your password?");
  if (getNumber === "yes" || getNumber === "Yes" || getNumber === "YES") {
    alert("Perfect you will have numbers in your password");
    getNumber=1;
  }else{
    alert("You won't have numbers.");
    getNumber=0;
  }

  //getSymbol specifies  if the person prefer symbols or not in the password. 
  let getSymbol = prompt("Do you want symbols in your password?");
  if (getSymbol === "yes" || getSymbol === "Yes" || getSymbol === "YES") {
    alert("Perfect you will have symbols in your password");
    getSymbol=1;
  }else{
    alert("You won't have symbols.");
    getSymbol=0;
  }

  //Starting while
  //index initialization
  i = 0;

  //This while will run if the index is less than the number of characters selected by the user.
  //If the user selects a length with more than 128 this while will run with only 8 characters by default.
  //If the user doesn't select any symbol,number, uppercase or lowercase, then the result doesn't apply and the text box will appear empty.
  while(i < getLength){

    //Generate a random number between 0 to 3 to check what type of character is going to be inserted in the password.
    // 0: lowercase
    // 1: uppercase
    // 2: numbers
    // 3: symbols
    typeChar = Math.floor(Math.random() * 4);

    //If it has randomly come up that a lowercase needs to be inserted, and the user has decided to insert lowercase.
    if (typeChar == 0 && getLower == 1){
      //Generates a new character by randomly selecting from the string lower.
      newChar = lower[Math.floor(Math.random() * lower.length)];
      //Concatenate the new character with the password
      stringPass = stringPass.concat(newChar);
      // increases the index value
      i++;

    }else if(typeChar == 1 && getUpper == 1){
      newChar = upper[Math.floor(Math.random() * upper.length)];
      stringPass = stringPass.concat(newChar);
      i++;
    }else if(typeChar == 2 && getNumber == 1){
      newChar = number[Math.floor(Math.random() * number.length)];
      stringPass = stringPass.concat(newChar);
      i++;
    }else if(typeChar == 3 && getSymbol == 1){
      newChar = symbol[Math.floor(Math.random() * symbol.length)];
      stringPass = stringPass.concat(newChar);
      i++;
    }
  }
  return stringPass;
}

//This function contains the password created in generatePassword function and it is connected with the html file through the query selector #password
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


