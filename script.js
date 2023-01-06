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
  let total = 0;
  
  function numButtons() {
    for (let i = 0; i <= 9; i++) {
      let buttons = document.getElementById('numButtons');
      let btn = document.createElement('button');
      btn.innerHTML = i;
      btn.setAttribute('id', i);
      btn.addEventListener('click', () => {
        arr.push(i); 
        console.log(arr);
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
  
  const addNum = (num) => {
  arr.push(num);
  let newNum = arr.join('');
  display.innerHTML = newNum;
  }
  
  const addMe = () => {
    arr.push('+');
    arr2.push(arr);
    calcDisplay();
  }
  
  const subMe = () => {
    arr.push('-');
    arr2.push(arr);
    calcDisplay();
  }
  
  const multMe = () => {
    arr.push('*');
    arr2.push(arr);
    calcDisplay();
  }
  
  const divMe = () => {
    arr.push ('/');
    arr2.push(arr);
    calcDisplay();
  }
  
  const clearArr = () => {
    arr = [];
    calcDisplay();
  }
  
  const equals = () => {
    
  }
  
  //2nd array contains first number in operation
    //all buttons have function id-tag -> single unifying function to have them all put 1st number into 2nd array via calling id-tag
      //function that is executed is based on which function key was pressed
      //also executes if another function is pressed and pushes the result of that into arr2
  
    
      
  
  //button to listen for click on number
  const button = document.createElement('button');
  
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
  