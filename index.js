var birthDay = document.querySelector("#birth-day");
var buttonClick = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

function stringReverse(msg){
    //var inputStringSplitArray = inputString.split('');
    //var inputStringSplitArrayReverse = inputStringSplitArray.reverse();
    //var inputStringReverse = inputStringSplitArrayReverse.join('');
     return msg.split('').reverse().join('');
    
}

function palindromeCheck(msg){
    return msg ===  stringReverse(msg);
    
}

function convertDateToStr(date){
    var dateStr = {
        day: '',
        month:'',
        year:''
    }
    if(date.day<10){
        dateStr.day = '0' + date.day;
    }
    else{
        dateStr.day = date.day.toString(); 
    }
    if(date.month<10){
        dateStr.month = '0' + date.month;
    }
    else{
        dateStr.month = date.month.toString(); 
    }
    dateStr.year = date.year.toString();
    
    return dateStr;
}

function getAllDateFormats(){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year; 
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
   // var yyyyddmm = dateStr.year + dateStr.day + dateStr.month ;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day ;
   // var yyddmm = dateStr.year.slice(-2) + dateStr.day + dateStr.month ;

   return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function palindromeCheckForAllFormats(date){

    var allDateFormatsList = getAllDateFormats(date);
    var flag = false;
    var palindromeList = [];
    for(var i=0; i<allDateFormatsList.length;i++){
        
        var result = palindromeCheck(allDateFormatsList[i]);
            palindromeList.push(result);
        
        
    }
    return palindromeList;
}

function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year%100 === 0){
        return true;
    }
    if(year%4 === 0){
        return true;
    }
}
function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2){
        if(isLeapYear(year)){
            if(day>29){
                day = 1;
                month++;
            }
            
        }
        else{
            if(day>28){
                day = 1;
                month++;
            }
        }
    }
    else{
        if(day>monthDays[month-1]){
            day = 1;
            month++;
        }
    }
    if(month>12){
        month = 1
        year++
    }

    return {
        day: day,
        month: month,
        year: year
    }
}


function getNextPalindromeDate(date){
var count = 0;
var nextDate = getNextDate(date);

 var flag = true;

    
   while(1){
        
        count++;
        var resultList = palindromeCheckForAllFormats(nextDate);
        for(let i = 0; i< resultList.length;i++){
            if(resultList[i]){
            break;
        }
        nextDate = getNextDate(date);
    }
    
    return [count, nextDate];
    
   }
   
   
}

function getPreviousDate(date){
    var day = date.day -1;
    var month = date.month;
    var year = date.year;

    monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day === 0){
        month--
    

    if(month === 0){
        month = 12;
        day = 31;
        year--;
    }
    else if (month === 2){
        if(isLeapYear(year)){
            day = 29;
        }
        else {
            day = 28;
        }
    }
    else{
        day = monthDays[month - 1];
    }
}

    return {
        day: day,
        month: month,
        year: year
    };
}

function getPreviuosPalindromeDate(){
    var count = 0;
var previousDate = getPreviousDate(date);

    while(1){
        
        count++;
        var resultList = palindromeCheckForAllFormats(previousDate);
        for(let i = 0; i< resultList.length;i++){
            if(resultList[i]){
            break;
        }
        previousDate = getPreviousDate(date);
    }
    
    return [count, previousDate];
    
   }
}

function clickHandler(){
    var birthDayInput = birthDay.value;
    if(birthDayInput !== ""){
        var  birthDaySplit=birthDayInput.split("-");
        var birthDay = {
            day: birthDaySplit[2],
            month: birthDaySplit[1],
            year: birthDaySplit[0]
        }
        console.log(birthDay);
    }

}


buttonClick.addEventListener("click", clickHandler);

var date = {
    day: 01,
    month: 2,
    year: 2021
}

//console.log(getPreviuosPalindromeDate(date));

