var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "`~!@#$%^&*()_+-={}[]:;<>?',./";
var userAnswers= [];
var results=[];



// The function generatePassword its divided in four main goals: lengthPassword, lowercase, symbol and uppercase
// Then when this function its generate we validate the input and generate get the solution that it's showed in the Textbox

function generatePassword(){
  let stringPass = "";
  let typeChar;
  let newChar;
  
  console.log("Hello you clicked the bottom and the function its running");
    
  //First, we configurate the lenght of the password that has to be from number 8 to number 50.
  let getLenght = prompt("Please enter the length of your password from 8 to 128");
  if (getLenght > 7 && getLenght< 129 ) {
    alert("Perfect " + getLenght + " it's the length of your password");
  }else{
    alert("Sorry, it's included 8 by default as a minimun lenght");
    getLenght=8;
  }
      
  let getLower = prompt("Do you want lowercase in your password?");
  if (getLower === "yes" || getLower === "Yes" || getLower === "YES" ) {
    alert("Perfect you will have lowercase in your password");
    getLower=1;
  }else{
    alert("You won't have lower case");
    getLower=0;
  }
      
  let getUpper = prompt("Do you want uppercase in your password?");
  if (getUpper === "yes" || getUpper === "Yes" || getUpper === "YES") {
    alert("Perfect you will have uppercase in your password");
    getUpper=1;
  }else{
    alert("You won't have upper case.");
    getUpper=0;
  }

  let getNumber = prompt("Do you want numbers in your password?");
  if (getNumber === "yes" || getNumber === "Yes" || getNumber === "YES") {
    alert("Perfect you will have numbers in your password");
    getNumber=1;
  }else{
    alert("You won't have numbers.");
    getNumber=0;
  }

  let getSymbol = prompt("Do you want symbols in your password?");
  if (getSymbol === "yes" || getSymbol === "Yes" || getSymbol === "YES") {
    alert("Perfect you will have symbols in your password");
    getSymbol=1;
  }else{
    alert("You won't have symbols.");
    getSymbol=0;
  }
  //inicializacion del indice
  i = 0;
  //Mientras el indice sea menor que el numero de caracteres seleccionado por el usuario
  while(i < getLenght){
    //Genera un numero aleatorio entre el 0 y 3 para ver que tipo de caracter se va a insertar en contrasena
    // 0: minisculas
    // 1: mayusculas
    // 2: numero
    // 3: simbolo
    typeChar = Math.floor(Math.random() * 4);
    //Si aleatoriamente ha salido que hay que insertar una minuscula, y el usuario ha decidido insertar minusculas
    if (typeChar == 0 && getLower == 1){
      //Genera un nuevo caracter seleccionando aleatoriamente dentro de la cadena lower cualquier caracter
      newChar = lower[Math.floor(Math.random() * lower.length)];
      //Concatena el nuevo caracter con la contrasena
      stringPass = stringPass.concat(newChar);
      //aumenta el valor del indice
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
    console.log(stringPass); 
  }
  console.log(stringPass); 
  return stringPass;

    /*if (getLower == "yes" && getNumber == "yes" && getUpper == "yes" && getSymbol == "yes"){
      CaseI=calculateLower()+calculateNumber()+calculateSymbol()+calculateUpper()
      console.log(CaseI);
      
      for (var i = 0; i < getLenght; i++ ){
      CaseII = [Math.floor(Math.random()*CaseI)];
      }
    }

      console.log(CaseI);
      console.log(FinalResult);*/

}
  // console.log(getLenght);
  // console.log(getLower);
  // console.log(getSymbol);
  // console.log(getNumber);
  
  
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

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


  // function calculateLower() {
   
  //   var resultLower = lower[Math.floor(Math.random() * lower.length)];
  //   console.log (resultLower);
  // };
  
  // function calculateUpper() {
   
  //   var resultUpper = upper[Math.floor(Math.random() * upper.length)];
  //   console.log (resultUpper);
  // };
  
  // function calculateNumber() {
   
  //   var resultNumber = number[Math.floor(Math.random() * number.length)];
  //   console.log (resultNumber);
  // };
  
  // function calculateSymbol() {
    
  //   var resultSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  //   console.log (resultSymbol);
  // };



