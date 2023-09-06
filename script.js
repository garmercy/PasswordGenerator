var generateBtn = document.querySelector("#generate");
var userAnswers= [];
var lower="abcdefghijklmnopqrstuvwxyz"
var upper="ABCDEFGHIJKLMNOPQRSTYUVWXYZ"
var number="12345678890"
var symbol="`~!@#$%^&*()_+-={}[]:;<>?',./"

// The function generatePassword its divided in four main goals: lengthPassword, lowercase, symbol and uppercase
// Then when this function its generate we validate the input and generate get the solution that it's showed in the Textbox

  function generatePassword(){
    console.log("Hello you clicked the bottom and the function its running");
    
  //   //First, we configurate the lenght of the password that has to be from number 8 to number 50.
    let getLenght = prompt("Please enter the length of your password from 8 to 128");
    if (getLenght > 7 && getLenght< 129 ) {
    alert("Perfect " + getLenght + " it's the length of your password");
    userAnswers.push(getLenght);
    console.log(getLenght);
    }else{
    alert("Sorry, it's included 8 by default as a minimun lenght");
    userAnswers.push(8);
    }
      
    let getLower = prompt("Do you want in your password lowercase?.  Please answer yes or no.");
    if (getLower === "yes" || getLower === "Yes" || getLower === "YES") {
    alert("Perfect you will have lowercase in your password");
    userAnswers.push(getLower);
    console.log(getLower);
    }else{
    alert("You won't have lower case");
    userAnswers.push("no");
    console.log("no");
    }
      
    let getUpper = prompt("Do you want in your password uppercase?. Please answer yes or no.");
    if (getUpper === "yes" || getUpper === "Yes" || getUpper === "YES") {
    alert("Perfect you will have uppercase in your password");
    userAnswers.push(getUpper);
    console.log(getUpper);
    }else{
    alert("You won't have lower case. Please answer yes or no.");
    userAnswers.push("no");
    console.log("no");
    }
    
    let getSymbol = prompt("Do you want in your password symbols?. Please answer yes or no.");
    if (getSymbol === "yes" || getSymbol === "Yes" || getSymbol === "YES") {
    alert("Perfect you will have symbols in your password");
    userAnswers.push(getSymbol);
    console.log(getSymbol);
    }else{
    alert("You won't have symbols.");
    userAnswers.push("no");
    console.log("no");
    }
    console.log(userAnswers);
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
  // if person type any number like 8 then the number of password its 8
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





  // function lenthpasswordnumber(){
  //   let number = prompt("Please enter the length of your password from 5 to 50");
  //   if (number > 4 && number < 51 ) {
  //     alert("Perfect " + number + " it's the length of your password");
  //   }else{
  //     alert("Please type correcty from 5 to 50");
  //   }
  // }
  // function gettinglowercase(){
  //   let lower = prompt("Do you want in your password lowercase?");
  //   if (lower === "yes" || lower === "Yes" || lower === "YES") {
  //     alert("Perfect you will have lowercase in your password");
  //   var loweryes = "yes you have lower";
  //   console.log(loweryes);
  //   }else{
  //     alert("You won't have lower case. Otherwise type Yes, yes or YES");
  //   var lowerno = "no you dont have lower";
  //   console.log(lowerno);
  //   }
  // }
  
  // function gettinguppercase(){
  //   let upper = prompt("Do you want in your password uppercase?");
  //   if (upper === "yes" || upper === "Yes" || upper === "YES") {
  //     alert("Perfect you will have uppercase in your password");
  //   var upperyes = "yes you have upper";
  //   console.log(upperyes);
  //   }else{
  //     alert("You won't have lower case. Otherwise type Yes, yes or YES");
  //   var upperno = "no you haven't upper";
  //   console.log(upperno);
  //   }
  // }
  
  // function gettingsymbols(){
  //   let symbol = prompt("Do you want in your password symbols?");
  //   if (symbol === "yes" || symbol === "Yes" || symbol === "YES") {
  //     alert("Perfect you will have symbols in your password");
  //   var symbolyes = "yes you have symbols";
  //   console.log(symbolyes);
  //   }else{
  //     alert("You won't have symbols. Otherwise type Yes, yes or YES");
  //   var symbolno = "no you haven't symbols";
  //   console.log(symbolno);
  //   }
  // }



