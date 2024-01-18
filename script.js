let counter = document.getElementById('counter')
let cookies = 0

setInterval(function () {
    cookies = cookies + 1;
    console.log("🍪", cookies);
    counter.textContent = cookies
    localStorage.setItem('Cookies', cookies)
}, 1000); // 1000 milliseconds == 1 second

function buyGrandma(num) {
    if (num >= 5) {
        console.log('grand')
        setInterval(function () {
            cookies = cookies + 2;
            console.log("Grandma", cookies)
        })
    }
}

// RESETS BY DELETING EVERYTHING IN THE LOCALSTORAGE

const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', function() {
    cookies = 0
    grandmaCounter = 0
    ovenCounter = 0
    farmCounter = 0
    mineCounter = 0
    bankCounter = 0
    localStorage.clear()
})

// COOKIE BUTTON WHICH ADDS 1 EVERY TIME CLICKED

const cookieBtn = document.getElementById('cookieBtn')

cookieBtn.addEventListener('click', function() {
    cookies = cookies + 1
    console.log('💥', cookies)
})

// GRANDMA UPGRADE ACTIVATION

const grandmaBtn = document.getElementById('grandmaBtn')
let grandmaOwn = document.getElementById('grandmaOwn')
let grandmaCounter = 0

grandmaBtn.addEventListener('click', function(event) {
    if (cookies >= 100) {
        cookies = cookies - 100
        grandmaCounter = grandmaCounter + 1
        grandmaOwn.textContent = grandmaCounter
        localStorage.setItem('Grandma', grandmaCounter)
        setInterval(function () {
            cookies = cookies + 1;
            console.log("👵", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// OVEN UPGRADE ACTIVATION

const ovenBtn = document.getElementById('ovenBtn')
let ovenOwn = document.getElementById('ovenOwn')
let ovenCounter = 0

ovenBtn.addEventListener('click', function() {
    if (cookies >= 250) {
        cookies = cookies - 250
        ovenCounter = ovenCounter + 1
        ovenOwn.textContent = ovenCounter
        localStorage.setItem('Oven', ovenCounter)
        setInterval(function () {
            cookies = cookies + 5;
            console.log("🔥", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// FARM UPGRADE ACTIVATION

const farmBtn = document.getElementById('farmBtn')
let farmOwn = document.getElementById('farmOwn')
let farmCounter = 0

farmBtn.addEventListener('click', function() {
    if (cookies >= 1000) {
        cookies = cookies - 1000
        farmCounter = farmCounter + 1
        farmOwn.textContent = farmCounter
        localStorage.setItem('Farm', farmCounter)
        setInterval(function () {
            cookies = cookies + 10;
            console.log("🌽", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// MINE UPGRADE ACTIVATION

const mineBtn = document.getElementById('mineBtn')
let mineOwn = document.getElementById('mineOwn')
let mineCounter = 0

mineBtn.addEventListener('click', function() {
    if (cookies >= 2500) {
        cookies = cookies - 2500
        mineCounter = mineCounter + 1
        mineOwn.textContent = mineCounter
        localStorage.setItem('Mine', mineCounter)
        setInterval(function () {
            cookies = cookies + 20;
            console.log("⛏️", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// BANK UPGRADE ACTIVATION

const bankBtn = document.getElementById('bankBtn')
let bankOwn = document.getElementById('bankOwn')
let bankCounter = 0

bankBtn.addEventListener('click', function() {
    if (cookies >= 5000) {
        cookies = cookies - 5000
        bankCounter = bankCounter + 1
        bankOwn.textContent = bankCounter
        localStorage.setItem('Bank', bankCounter)
        setInterval(function () {
            
            cookies = cookies + 50;
            console.log("🏦", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// LOADS LOCALSTORAGE DATA FROM PREVIOUS SESSION

function loadCookie() {
    const localCookie = localStorage.getItem('Cookies')
    const localGrandma = localStorage.getItem('Grandma')
    const localOven = localStorage.getItem('Oven')
    const localFarm = localStorage.getItem('Farm')
    const localMine = localStorage.getItem('Mine')
    const localBank = localStorage.getItem('Bank')
    cookies = localCookie * 1
    grandmaCounter = localGrandma * 1
    ovenCounter = localOven * 1
    farmCounter = localFarm * 1
    mineCounter = localMine * 1
    bankCounter = localBank * 1
    
}

loadCookie()