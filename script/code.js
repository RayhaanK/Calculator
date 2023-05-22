// Declaring Variables
const clears = document.querySelector('#clear')
const screen = document.querySelector('#output')
const backspace = document.querySelector('#backspace')
const equal = document.querySelector('#equal')
const numbers = document.querySelector('.numbers')
const decimal = document.querySelector('.decimal')
let checkerArray = [];

// displays Numbers
function display(value) {
    if(value == '.' && checkerArray.includes('.')){
        return;
    } else if(value == '+' || value == '-' || value == '*' || value == '/'){
    } else {
        screen.value += value;
        checkerArray.push(value);
    } 
}

// removing repetition of operators
document.querySelector('#add')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '+'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkerArray = [];
    }
    })

    document.querySelector('#subtract')
    .addEventListener('click', (e)=>{
        let inputArray = screen.value.split('');
        console.log(inputArray)
        if(inputArray[inputArray.length-1] === '-'){
            return;
        } else {
            screen.value += e.target.innerHTML;
            checkerArray = [];
        }
    })

document.querySelector('#divide')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '/'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkerArray = [];
    }
    })

    document.querySelector('#multiply')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === 'x'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkerArray = [];
    }
})


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

function clear() {
    screen.value = "";
}

// Clear Button
clears.addEventListener('click', ()=> {
   clear(); 
})

