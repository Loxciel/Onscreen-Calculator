//create empty field/array inside a div
//populate w/ numbers -> add to end of array ? 
//create operand functions that take two numbers
//input takes two numbers
//equal sign executes function w/ two numbers
  //depending on which operation button was pressed -> assign id to container/field div and execute function based on ID


//info storage
  //calculator either needs to store the first number somewhere OR clears the display and executes entire line after pressing equals
let arr = [];

function numButtons() {
  for (let i = 0; i < 9; i++) {
    let buttons = document.getElementById('numButtons');
    let btn = document.createElement('button');
    btn.innerHTML = '`${[i]}`'
  };
}

numButtons();

let calcDisplay = () => {
  let total = 0;
  

}

//input
    //adds number to array/field
const addNum = (num) => {
arr.push(num);
let newNum = arr.join('')
display.innerHTML = newNum;
}
    //button to listen for click on number
const button = document.createElement('button');

button.addEventListener('click', () => { //event handler needs to read button that is pressed to use as argument for addNum
  addNum();
})


//operations

const calcAdd = (num1, num2) => {
  total = num1 + num2;
  totalDiv.innerHTML = total;
}

const calcSub = (num1, num2) => {
  total = num1 - num2;
  totalDiv.innerHTML = total;
}

const calcMult = (num1, num2) => {
  total = num1 * num2;
  totalDiv.innerHTML = total;
}

const calcDiv = (num1, num2) => {
  total = num1 / num2; 
  totalDiv.innerHTML = total;
}

//operate function to execute calculator functions

const operate = () => {


}
