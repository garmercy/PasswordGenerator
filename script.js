var generateBtn = document.querySelector("#generate");

// The function generatePassword its divided in four main goals: lengthPassword, lowercase, symbol and uppercase
// Then when this function its generate we validate the input and generate get the solution that it's showed in the Textbox

function generatePassword(){
  console.log("Hello you clicked the bottom and the function its running");
  
  //First, we configurate the lenght of the password that has to be from number 8 to number 50.
  let number = prompt("Please enter the length of your password from 5 to 50");
  if (number > 4 && number < 51 ) {
    alert("Perfect " + number + " it's the length of your password");
  }else{
    alert("Please type correcty from 5 to 50");
  }return number;
    
}
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Funtion to generate a password
// function generatePassword(){
//   // If user pressed Cancel, immediately end function

  

// console.log = (characterNumber);
//  let person = prompt("How many characters would you like your password to contain?");
//   if (person != characterNumber){
//     console.log("right");
   
//   }else{
//     console.log("right");}
    
  
 

// }

// PSEUDO CODING
//have three blocks:


  //First create number of password
  
  // a Password Length 8 <128
  // if person type any number like 5 then the number of password its 5
  //else its not a number close app


  //Second include/no include lowercase
  // if person click yes then include
  // if person click no then not include


  //Third include/no include symbols
  // if person click yes then include
  // if person click no then not include

  //Second include/no include uyppercase
  // if person click yes then include
  // if person click no then not include

  // Validate imput
  //Generate password based on criteria

  //Solution
  // result =  numberpassword + lowercase + symbol +uppercase




  // var passwordLength = lengthPassword();
  // function lengthPassword(){
  //   let number = prompt("Please enter the length of your password from 8 to 50");
  //   if (number < 8 || number > 50 ) {
  //   alert("Please type correcty from 5 to 30");
  //   }else{
  //     alert("Perfect " + number + " it's the length of your password");
  //   }
  //  } 