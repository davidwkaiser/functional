const getTomorrow = ()=> {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  var now = Date.now()
  var today = new Date(now)
  var tomorrowIndex = today.setDate(today.getDate() + 1)
  var tomorrow = new Date(tomorrowIndex)
  return weekday[tomorrow.getDay()]
}

console.log("tomorrow is", getTomorrow())