const secondHand = document.querySelector('.second-hand') // 5
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() { // 1
    const now = new Date() // 2
    const seconds = now.getSeconds() // 3 
    const secondsDegrees = ((seconds / 60) * 360) + 90 // 4
    
    if (secondsDegrees == 90) {
        secondHand.classList.add('no-transition')
    } else {
        secondHand.classList.remove('no-transition')
    }
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    
    if (minutesDegrees == 90) {
        minuteHand.classList.add('no-transition')
    } else {
        minuteHand.classList.remove('no-transition')
    }

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`


    const hours = now.getHours()
    const hoursDegrees = ((hours / 12)* 360) + 90

    if (hoursDegrees == 90) {
        hourHand.classList.add('no-transition')
    } else {
        hourHand.classList.remove('no-transition')
    }

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    console.log(seconds)

}



setInterval(setDate, 1000)