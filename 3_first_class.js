const printNumber = (number) => {
  console.log("Your number is", number)
}

const noteNull = (input) =>{
  console.log("Input was null")
}

const controller = (input) => {
  const functionToCall = input ? printNumber : noteNull
  functionToCall(input)
}

console.log("***")
controller(2)

console.log("***")
controller(null)

console.log("***")
