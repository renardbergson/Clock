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