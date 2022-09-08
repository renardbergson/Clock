const $hours = document.querySelector('.hours')
const $minutes = document.querySelector('.minutes')
const $seconds = document.querySelector('.seconds')

setInterval( () => {
    let date = new Date()

    $hours.innerText = date.getHours()
    $minutes.innerText = date.getMinutes()
    $seconds.innerText = date.getSeconds()
}, 500)