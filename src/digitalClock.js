/* Calendar code */
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date()

document.querySelector('.weekDay').innerHTML = weekDays[date.getDay()]

document.querySelector('.day').innerHTML = `${date.getDate()}/`
document.querySelector('.month').innerHTML = `${date.getMonth() + 1}/`
document.querySelector('.year').innerHTML = date.getFullYear()

/* Clock code */
const $hours = document.querySelector('.hours')
const $minutes = document.querySelector('.minutes')
const $seconds = document.querySelector('.seconds')

function timeConvert(element) {
    if (element < 10) {
        element = '0' + element
    }

    return element
}

setInterval( () => {
    let today = new Date()

    $hours.innerText = timeConvert(today.getHours())
    $minutes.innerText = timeConvert(today.getMinutes())
    $seconds.innerText = timeConvert(today.getSeconds())
}, 500)