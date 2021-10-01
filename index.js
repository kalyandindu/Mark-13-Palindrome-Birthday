const birthDay = document.querySelector("#bday");
const buttonClick = document.querySelector("#btn-click");

function stringReverse(msg){
    var inputString = msg;
    var inputStringSplitArray = inputString.split("-");
    var inputStringSplitArrayReverse = inputStringSplitArray.reverse();
    var inputStringReverse = inputStringSplitArrayReverse.join('');
    console.log(inputStringReverse);

    if(inputString === inputStringReverse){
        console.log("True, Boolean input");
    }
    else{
        console.log("False, No Boolean");
    }
   
}

function palindromeCheck(msg){
    var numToStrDob = msg;
    stringReverse(numToStrDob);
}

function dateNumToStr(){
    var bDayString = (birthDay.value).toString();
    palindromeCheck(bDayString);
}

buttonClick.addEventListener("click", dateNumToStr);