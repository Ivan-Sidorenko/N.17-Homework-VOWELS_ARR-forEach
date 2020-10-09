"use strict";

var simpleString = prompt("Введите строку");

function countVowels() {
  var vowelSet={"а":true, "е":true, "ё":true, 
                "и":true, "о":true, "у":true, 
                "ы":true, "э":true, "ю":true, "я":true};
  var counter = 0;

  var sS = simpleString.toLowerCase().split("")
  sS.forEach(function(matchCheck){
    if (matchCheck in vowelSet){
      counter++;
    }
  }); 
  return counter;
}

alert ("Количество гласных: "+countVowels());