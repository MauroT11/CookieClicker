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

const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', function() {
    console.log('Reset Counter')
    cookies = 0
    localStorage.removeItem('Cookies')
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
    if (cookies >= 5) {
        cookies = cookies - 5
        grandmaCounter = grandmaCounter + 1
        grandmaOwn.textContent = grandmaCounter
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
    if (cookies >= 10) {
        cookies = cookies - 10
        ovenCounter = ovenCounter + 1
        ovenOwn.textContent = ovenCounter
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
    if (cookies >= 20) {
        cookies = cookies - 20
        farmCounter = farmCounter + 1
        farmOwn.textContent = farmCounter
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
    if (cookies >= 50) {
        cookies = cookies - 50
        mineCounter = mineCounter + 1
        mineOwn.textContent = mineCounter
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
    if (cookies >= 100) {
        cookies = cookies - 100
        bankCounter = bankCounter + 1
        bankOwn.textContent = bankCounter
        setInterval(function () {
            cookies = cookies + 50;
            console.log("🏦", cookies)
            counter.textContent = cookies
        }, 1000)
    }
})

// LOADS COOKIES FROM PREVIOUS SESSION

function loadCookie() {
    const localCookie = localStorage.getItem('Cookies')
    cookies = localCookie * 1
}

loadCookie()