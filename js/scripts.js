var userInput = prompt("Enter Sentence:");
console.log(userInput);
var capitalFirst = userInput.charAt(0).toUpperCase();
var capitalLast = userInput.charAt(userInput.length-1).toUpperCase();
var newstr = userInput.replace(/^./, capitalFirst);
var finalOutPut = newstr.replace(/.$/, capitalLast);
alert(finalOutPut);
