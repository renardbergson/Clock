/* Format convert function */
function timeAndDateConvert(element) {
    if (element < 10) {
        element = '0' + element
    }

    return element
}

/* Calendar code */
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date()

document.querySelector('.weekDay').innerHTML = weekDays[date.getDay()]

document.querySelector('.day').innerHTML = timeAndDateConvert(date.getDate()) + '/'
document.querySelector('.month').innerHTML = timeAndDateConvert(date.getMonth() + 1) + '/'
document.querySelector('.year').innerHTML = date.getFullYear()

/* Clock code */
const $hours = document.querySelector('.hours')
const $minutes = document.querySelector('.minutes')
const $seconds = document.querySelector('.seconds')

setInterval( () => {
    let today = new Date()

    $hours.innerText = timeAndDateConvert(today.getHours())
    $minutes.innerText = timeAndDateConvert(today.getMinutes())
    $seconds.innerText = timeAndDateConvert(today.getSeconds())
}, 500)

// code to update the background according to hour of the day"
let currentTime = new Date().getHours()

if (6 <= currentTime && currentTime < 12) {

    document.body.style.background = 'linear-gradient(270deg, #6BD3EB  0%, #2293B0 100%)'
    document.querySelector('.leftButton').style.background = '#A3E9FF'

}else if (12 <= currentTime && currentTime < 18) {

    document.body.style.background = 'linear-gradient(270deg, #FEB78B 0%, #DE6362 100%)'
    document.querySelector('.leftButton').style.background = '#FF4D00'

}else {

    document.body.style.background = 'linear-gradient(270deg, #243B55 0%, #141E30 100%)'
    document.querySelector('.leftButton').style.background = '#4980E2'
}