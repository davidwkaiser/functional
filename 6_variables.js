const myArray = [
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
const arrayOfIntegers = englishToInteger(myArray)
console.log("integers!", arrayOfIntegers)

//Filter to 1 - 4
const filteredArray = filterArray(arrayOfIntegers)
console.log("filtered!", filteredArray)

//Convert to Spanish
const spanishArray = convertToSpanish(filteredArray)
console.log("Spanish!", spanishArray)

//Capitalize
const capitalizedSpanishArray = capitalize(spanishArray)
console.log("capitalized & complete!", capitalizedSpanishArray)

//METHODS
function englishToInteger(array){
  let outputArray = []
  for (let i= 0; i < array.length; i++ ){
    switch(array[i]) {
        case "one":
            outputArray[i] = 1;
            break;
        case "two":
            outputArray[i] = 2;
            break;
        case "three":
            outputArray[i] = 3;
            break;
        case "four":
            outputArray[i] = 4;
            break;
        case "five":
            outputArray[i] = 5;
            break;
        case "six":
            outputArray[i] = 6;
            break;
        case "seven":
            outputArray[i] = 7;
            break;
        case "eight":
            outputArray[i] = 8;
            break;
        case "nine":
            outputArray[i] = 9;
            break;
        default:
            outputArray[i] = 10;
    }
  }
    return outputArray;
}

function filterArray(unfilteredArray){
  let tempArray = []
  for (let i= 0; i < unfilteredArray.length; i++){
      if (unfilteredArray[i] < 5) tempArray.push(unfilteredArray[i])
  }
  return tempArray
}

function convertToSpanish(englishArray) {
  let outputArray = []
  for (let i= 0; i < englishArray.length; i++ ){
    switch (englishArray[i]) {
        case 1:
            outputArray[i] = "uno";
            break;
        case 2:
            outputArray[i] = "dos";
            break;
        case 3:
            outputArray[i] = "tres";
            break;
        case 4:
            outputArray[i] = "cuatro";
            break;
        default:
            outputArray[i] = "??"
    }
  }
  return outputArray
}

function capitalize(uncapitalizedArray){
  let arrayWithCapitals = []
  for (let i= 0; i < uncapitalizedArray.length; i++ ){
    arrayWithCapitals[i] = capitalizeWord(uncapitalizedArray[i])
  }
  return arrayWithCapitals
}

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1);
}
