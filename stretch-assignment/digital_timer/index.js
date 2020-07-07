//Target HTML
const milliOnes = document.getElementById("msTens")
const milliTens = document.getElementById("msHundreds")
const secondOnes = document.getElementById("secondOnes")
const secondTens = document.getElementById("secondTens")

const digits = document.querySelectorAll(".digit")

// Init counters
let mO = 0
let mT = 0
let sO = 0
let sT = 0

// Pair counters with clock tags
milliOnes.innerHTML = mO
milliTens.innerHTML = mT
secondOnes.innerHTML = sO
secondTens.innerHTML = sT

function timer(){
    let clock = setInterval(() => {
        mO ++; // increment millisecond (every millisecond)
        milliOnes.innerHTML = mO // resets DOM value each rep
        if (mO === 10){ //once milliseconds cap at 9
            mO = 0
            milliOnes.innerHTML = mO
            mT ++
            milliTens.innerHTML = mT
        }
        if (mT === 10){
            mT = 0
            milliTens.innerHTML = mT
            sO ++
            secondOnes.innerHTML = sO
        }
        if (sO === 10){
            sO = 0
            secondOnes.innerHTML = sO
            sT ++
            secondTens.innerHTML = sT
        }
        if (sT === 1){
            clearInterval(clock)
            digits.forEach(num => num.style.color = 'red')
        }
    }, 10)
}

timer()