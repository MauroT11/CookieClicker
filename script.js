let counter = document.getElementById('counter')
let cookies = 0

setInterval(function () {
    cookies = cookies + 1;
    console.log("🍪", cookies);
    counter.textContent = cookies
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

const grandmaBtn = document.getElementById('grandmaBtn')

grandmaBtn.addEventListener('click', buyGrandma(counter))