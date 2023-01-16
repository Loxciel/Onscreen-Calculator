//create empty field/array inside a div
//populate w/ numbers -> add to end of array ? 
//create operand functions that take two numbers
//input takes two numbers
//equal sign executes function w/ two numbers
  //depending on which operation button was pressed -> assign id to container/field div and execute function based on ID


//info storage
  //calculator either needs to store the first number somewhere OR clears the display and executes entire line after pressing equals


  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let total = 0;
  
  function numButtons() {
    for (let i = 0; i <= 9; i++) {
      let buttons = document.getElementById('numButtons');
      let btn = document.createElement('button');
      btn.innerHTML = i;
      btn.setAttribute('id', i);
      btn.addEventListener('click', () => {
        arr.push(i); 
        calcDisplay();
      })
      buttons.appendChild(btn);
    };
  }
  
  numButtons();
  
  const calcDisplay = () => {
    let display = document.getElementById('number');
    display.innerHTML = arr.join('');
  }
  
  calcDisplay();
  
  //input
      //adds number to array/field
    //actually display arr 1 + arr 2 but only input into arr2 when a function button is pressed
      //functions take in 2 parameters -> arr1 and arr2
        //num1, num2; num1 is parseInt(arr1.join('')) and num2 is the same for arr2;
        //function executes labeled function 
        //have 3rd arr to display everything? maybe
  const addNum = (num) => {
  arr.push(num);
  let newNum = arr.join('');
  display.innerHTML = newNum;
  }
  
  //2nd array contains first number in operation
    //all buttons have function id-tag -> single unifying function to have them all put 1st number into 2nd array via calling id-tag
      //function that is executed is based on which function key was pressed
      //also executes if another function is pressed and pushes the result of that into arr2
  
    
      
  
  //button to listen for click on number
  const button = document.createElement('button');
  
  //operations
  
  const addMe = () => {
    if(arr3[0]) {
      operate();
    } else {
    arr2.push(parseInt(arr.join('')));
    calcDisplay();
    arr3.push(`+`);
    arr = [];
    }
  }
  
  const subMe = () => {
    if(arr3[0]) {
      operate();
    } else {
  arr2.push(parseInt(arr.join('')));
    calcDisplay();
    arr3.push('-');
    arr = [];
    }
  }
  
  const multMe = () => {
     if(arr3[0]) {
      operate();
    } else {
    arr2.push(parseInt(arr.join('')));
    calcDisplay();
    arr3.push('*');
    arr = [];
    }
  }
  
  
  const divMe = () => {
     if(arr3[0]) {
      operate();
    } else {
    arr2.push(parseInt(arr.join('')));
    calcDisplay();
    arr3.push('/');
    arr = [];
    }
  }
  
  const clearArr = () => {
    arr = [];
    arr2 = [];
    arr3 = [];
    calcDisplay();
  }
  //operate function to execute calculator functions
  
  const operate = () => {
    if(arr3[0] === '+') {
      let num1 = parseInt(arr.join(''));
      let num2 = arr2[0];
      total = num1 + num2;
      arr = [];
      arr.push(total);
      calcDisplay();
      arr2 = [];
      arr2.push(total);
      arr = [];
      arr3 = [];
    }
    if(arr3[0] === '-') {
      let num2 = parseInt(arr.join(''));
      let num1 = arr2[0];
      total = num1 - num2;
      arr = [];
      arr.push(total);
      calcDisplay();
      arr2.push(total);
      arr2 = [];
      arr2.push(total);
      arr = [];
      arr3 = [];
    }
  if(arr3[0] === '*') {
      let num2 = parseInt(arr.join(''));
      let num1 = arr2[0];
      total = num1 * num2;
      arr = [];
      arr.push(total);
      calcDisplay();
      arr2 = [];
      arr2.push(total);
      arr = [];
      arr3 = [];
    }
    if(arr3[0] === '/') {
      let num2 = parseInt(arr.join(''));
      let num1 = arr2[0];
      total = num1 / num2;
      arr = [];
      arr.push(total);
      calcDisplay();
      arr2 = [];
      arr2.push(total);
      arr = [];
      arr3 = [];
    }
  }
  