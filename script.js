// /* `// Assignment Code
var generateBtn = document.querySelector("#generate");
var num1 = [1, 3, 5, 7, 9]
var num2 = [2, 4, 6, 8]
var specials = ["!", "@", "#", "$", "*"];
var let1 = "abcdefghijklm";
var let2 = "nopqrstuvwxyz";
var passParts1 = (num2 + specials + let1 + num1 + let2);
var passParts2 = (num1 + specials + let1 + num2 + let2);
//generateBtnonclick: alert("Would you like to create a password");





//document.getElementById(generateBtn).addEventListener("click", function(){
  alert("Would you like to create a password?");
if (true) {
  var passLength = prompt("How Many Characters?");
}
if (passLength >= 8) {
 var numConfim = confirm("Would you like Numbers?"); 
}
else { alert("Password must be at LEAST 8 Characters");
}
if (numConfim === true) {
  var letUpConfirm = confirm("Would you like Uppercase Letters?");
}
if (letUpConfirm === true){
  var specConfirm = confirm("Would you like Special Characters")
}


console.log()



 // if (true) { prompt("How Many Characters")
 // } 
//if (passLength >= 8) { prompt("Would you Like special characters");
//  }
//if else(passLength < 8); {alert("Password Must be 8 characters");
//}
;
//}.then(() => {
  
//}).catch((err) => {
  
//});
    
  //}
