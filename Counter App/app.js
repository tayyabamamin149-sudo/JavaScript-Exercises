var count = 0;
const counterDisplay = document.getElementById('counter');

function updateCount(value) {
count += value;
counterDisplay.innerText = count;
}

function resetCount() {
count = 0;
counterDisplay.innerText = count;
}