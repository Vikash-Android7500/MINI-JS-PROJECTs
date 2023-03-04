const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]");
const generteBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


/*** insal stade  */
let password = "";
let passwordLength = 10;
let checkCount = 0;

//all call Method.
handleSlider();
//ste strength circle color to grey.


//set Password Length IU Riflect krata hai
function handleSlider(){
     inputSlider.value = passwordLength;
     lengthDisplay.innerText = passwordLength;
}

//set indicator
function setIndicator(color) {
     indicator.style.backgroundColor = color;
}

//set get RndInteger.
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
     return getRndInteger(0, 9);
}

function generateLowerCase() {
     return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
     return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbols() {
     const randNum = getRndInteger(0, symbols.length);
     return symbols.charAt(randNum);
}

//Calculator All value.
function calcStrength() {
     let hasUpper = false;
     let hasLower = false;
     let hasNum = false;
     let hasSym = false;

     //use if else
     if (uppercaseCheck.checked) hasUpper = true; 
     if (uppercaseCheck.checked) hasLower = true; 
     if (uppercaseCheck.checked) hasNum = true; 
     if (uppercaseCheck.checked) hasSym = true;
     
  
     if (
        (hasUpper && hasLower) && 
        (hasNum || hasSym) && 
        passwordLength >= 8
     ) {
          setIndicator("#0f0");
     } 
     else if (
          (hasLower || hasUpper) && 
          (hasNum || hasSym) && 
          passwordLength >= 6
     ) {
          setIndicator("#ff0");
     }
     else{
          setIndicator("#f00");
     }
}


//copyMsg copyContant
async function copyContent() {
     try {
          await navigator.clipboard.writeText(passwordDisplay.value);
          copyMsg.innerText = "copied";
     }
     catch (e) {
          copyMsg.value = "Felide";
     }

     copyMsg.classList.add("active");

     setTimeout(() => {
          copyMsg.classList.remove("active");
     }, 1500);
}


//shuffale function
function shufflePassword(array) {
  //Fisher Yates Method
  for (let i = array.length - 1; i > 0; i--) {
    //random J, find out using random function
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}


//CheckBox counter function
function handleCheckBoxChange() {
     checkCount = 0;
     allCheckBox.forEach( (checkbox) => {
          console.log("check");
          if (checkbox.checked) {
               checkCount++;
               
          }
     })

     //spacial condition
     if (passwordLength < checkCount) {
          passwordLength = checkCount;
          handleSlider();
     }
}


//CheckBox forEach
allCheckBox.forEach( (checkbox) => {
     checkbox.addEventListener('change', handleCheckBoxChange);   
})


//input Slider scroller change value
inputSlider.addEventListener('input', (e) => {
     passwordLength = e.target.value;
     handleSlider();
})

//copyBtn clickEvent
copyBtn.addEventListener('click', () => {
     if (passwordDisplay.value){
          copyContent();
     } 
     else{
          showToast("Select Checkbox our Generate Button Click !");
     }         
})


//GenerteBtn
generteBtn.addEventListener('click', () => {
     if (checkCount == 0) 
       return showToast("CheckBox Not Checked !");

     if (passwordLength < checkCount) {
          passwordLength = checkCount;
          handleSlider();
     }


     console.log("click btn");
     //remove old password
     password = "";

     // arr function
     let functionArr = [];

     if (uppercaseCheck.checked) 
          functionArr.push(generateUpperCase);

     if (lowercaseCheck.checked)
          functionArr.push(generateLowerCase);

     if (numbersCheck.checked)   
          functionArr.push(generateRandomNumber);
          
     if (symbolsCheck.checked)
          functionArr.push(generateSymbols);    
          
          
     // Compulsory Addition
     for (let i = 0; i < functionArr.length; i++) {
          password += functionArr[i](); 
     }     
       console.log("Compulsory Addition");

     //remainig Addition
     for (let i = 0; i < passwordLength-functionArr.length; i++) {
         let randIndex = getRndInteger(0, functionArr.length);
          password += functionArr[randIndex]();
     }


     //password shufale
     password = shufflePassword(Array.from(password)) ;

     //show Ui design
     passwordDisplay.value = password;
      console.log("show iu datete");
     //caculator function
     calcStrength();
           console.log("calculator");
})


//show Toast
function showToast(content = "Unknown error") {

  let Toast = document.querySelector("#snackbar");
  Toast.innerHTML = content;

  Toast.classList.add("show");

   setTimeout(() => {

     Toast.classList.remove("show");

   }, 1500);
}