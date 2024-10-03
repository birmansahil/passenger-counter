let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    
    // setting count to zero
    count = 0;
    countEl.textContent = count;
}