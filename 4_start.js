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
for (let i= 0; i < myArray.length; i++ ){
    switch(myArray[i]) {
        case "one":
            myArray[i] = 1;
            break;
        case "two":
            myArray[i] = 2;
            break;
        case "three":
            myArray[i] = 3;
            break;
        case "four":
            myArray[i] = 4;
            break;
        case "five":
            myArray[i] = 5;
            break;
        case "six":
            myArray[i] = 6;
            break;
        case "seven":
            myArray[i] = 7;
            break;
        case "eight":
            myArray[i] = 8;
            break;
        case "nine":
            myArray[i] = 9;
            break;
        default:
            myArray[i] = 10;
    }
}

console.log("integers!", myArray)

//Filter to 1 - 4
let tempArray = []
for (let i= 0; i < myArray.length; i++){
    if (myArray[i] < 5) tempArray.push(myArray[i])
}
myArray = tempArray

console.log("filtered!", myArray)

//Convert to Spanish
for (let i= 0; i < myArray.length; i++ ){
    switch (myArray[i]) {
        case 1:
            myArray[i] = "uno";
            break;
        case 2:
            myArray[i] = "dos";
            break;
        case 3:
            myArray[i] = "tres";
            break;
        case 4:
            myArray[i] = "cuatro";
            break;
        default:
            myArray[i] = "??"
    }
}

console.log("Spanish!", myArray)

//Capitalize
for (let i= 0; i < myArray.length; i++ ){
    myArray[i] = myArray[i][0].toUpperCase() + myArray[i].substring(1);
}

console.log("capitalized & complete!", myArray)
