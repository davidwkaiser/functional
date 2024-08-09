let myArray = [
    "one",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "two",
    "three",
    "four",
    "seven",
    "eight",
    "nine",
    "ten",
    "two",
    "nine",
    "ten",
    "two",
    "three",
    "four",
    "seven",
    "eight",
    "nine",
    "ten",
    "two",
    "three",
    "four",
    "seven",
    "ten",
    "two",
    "three",
    "four",
    "one",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "two",
]
console.log("beginning!", myArray)

let capitalizedSpanishArray = myArray
    .map(numberWord => englishToInteger(numberWord))
    .filter(integer => keepLessThanFive(integer))
    .map(number => convertToSpanish(number))
    .map(uncapitalizedSpanishNumber => capitalizeWord(uncapitalizedSpanishNumber))

//Completed
console.log("capitalized & completed!", capitalizedSpanishArray)

//FUNCTIONS
function englishToInteger(word){
    switch(word) {
        case "one":
            return 1;
            break;
        case "two":
            return 2;
            break;
        case "three":
            return 3;
            break;
        case "four":
            return 4;
            break;
        case "five":
            return 5;
            break;
        case "six":
            return 6;
            break;
        case "seven":
            return 7;
            break;
        case "eight":
            return 8;
            break;
        case "nine":
            return 9;
            break;
        default:
            return 10;
    }
}

function keepLessThanFive(number){
  return number < 5
}

function convertToSpanish(englishNumber) {
    switch (englishNumber) {
        case 1:
            return "uno";
            break;
        case 2:
            return "dos";
            break;
        case 3:
            return "tres";
            break;
        case 4:
            return "cuatro";
            break;
        default:
            return "??"
    }
}

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1);
}
