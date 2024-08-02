const getNextDay = (millis)=> {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  var startDay = new Date(millis)
  var nextDayIndex = startDay.setDate(startDay.getDate() + 1);
  var nextDay = new Date(nextDayIndex)
  return weekday[nextDay.getDay()]
}

let today = Date.now()
console.log("Tomorrow is", getNextDay(today))

let laborDay = new Date("2024-9-2")
console.log("The day after Labor Day is", getNextDay(laborDay))
