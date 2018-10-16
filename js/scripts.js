// var newstr = userInput.replace(/^./, capitalFirst);
// var finalOutPut = newstr.replace(/.$/, capitalLast);
// alert(finalOutPut);
var capitalFirstLast;
var capitalFirst;
var capitalLast;
var capitalLastFirst;
var concatWithInput;
var  userInput = prompt("Enter Sentence:");
//function to pick first and last letter of string, capitalise and concat them
function concatFirstLast(capitalFirst, capitalLast){
  capitalFirst = userInput.charAt(0).toUpperCase();
  capitalLast = userInput.charAt(userInput.length-1).toUpperCase();
  capitalFirstLast = capitalFirst + capitalLast;
  alert(capitalFirstLast);
};
//function to reverse output of function concatFirstLast
function concatLastFirst(capitalFirstLast){
  capitalLastFirst = capitalFirstLast.charAt(1) + capitalFirstLast.charAt(0);
  alert(capitalLastFirst);
};
//function calls above functions and concats orignal string with the concatLastFirst output
function alertLetters(){
  concatFirstLast(capitalFirst, capitalLast);
  concatLastFirst(capitalFirstLast);
  concatWithInput = userInput + capitalLastFirst;
  alert(concatWithInput);
};
//function to concat middle character to the beginning of last output string
 function concatFront(){
   var half = userInput.length / 2;
   halfPosition = parseFloat(half.toFixed());
   var firstLetter = userInput.charAt(halfPosition);
   var finalOutPut = firstLetter + concatWithInput;
   alert(finalOutPut);
 };
alertLetters();
concatFront();
