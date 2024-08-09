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

//Convert to integer
englishToInteger(myArray)
console.log("integers!", myArray)

//Filter to 1 - 4
myArray = filterArray(myArray)
console.log("filtered!", myArray)

//Convert to Spanish
convertToSpanish(myArray)
console.log("Spanish!", myArray)

//Capitalize
capitalize(myArray)
console.log("capitalized & complete!", myArray)

//FUNCTIONS
function englishToInteger(array){
  for (let i= 0; i < array.length; i++ ){
    switch(array[i]) {
        case "one":
            array[i] = 1;
            break;
        case "two":
            array[i] = 2;
            break;
        case "three":
            array[i] = 3;
            break;
        case "four":
            array[i] = 4;
            break;
        case "five":
            array[i] = 5;
            break;
        case "six":
            array[i] = 6;
            break;
        case "seven":
            array[i] = 7;
            break;
        case "eight":
            array[i] = 8;
            break;
        case "nine":
            array[i] = 9;
            break;
        default:
            array[i] = 10;
    }
  }
}

function filterArray(array){
  let tempArray = []
  for (let i= 0; i < array.length; i++){
      if (array[i] < 5) tempArray.push(array[i])
  }
    return tempArray
}

function convertToSpanish(array) {
  for (let i= 0; i < array.length; i++ ){
    switch (array[i]) {
        case 1:
            array[i] = "uno";
            break;
        case 2:
            array[i] = "dos";
            break;
        case 3:
            array[i] = "tres";
            break;
        case 4:
            array[i] = "cuatro";
            break;
        default:
            array[i] = "??"
    }
  }
}

function capitalize(array){
  for (let i= 0; i < array.length; i++ ){
    array[i] = capitalizeWord(array[i])
  }
}

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1);
}
