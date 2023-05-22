// Declaring Variables
const clear = document.querySelector('#clear')
const screen = document.querySelector('#output')
const backspace = document.querySelector('#backspace')
const equal = document.querySelector('#equal')

// displays Numbers
function display(value) {
    screen.value 
    += value;
}

// backspace button
backspace.addEventListener('click', ()=>{
    let output = screen.value;
    screen.value = output.slice(0, -1);
})

// Equal Button
equal.addEventListener('click', ()=> {
    let output = eval(screen.value)
    screen.value = output.toFixed(2);
})

// Clear Button
clear.addEventListener('click', ()=> {
    let output = "";
    screen.value = output;
})
