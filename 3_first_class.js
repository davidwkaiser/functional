const printNumber = (number) => {
  console.log("Your number is", number)
}

const printString = (input) =>{
  console.log("Input was", input)
}

const controller = (input) => {
  const functionToCall = typeof(input) === Number ? printNumber : printString
  functionToCall(input)
}

controller(2)

// controller("Hello world!")

