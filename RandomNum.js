function randomNumber() {
  const random = Math.floor(Math.random() * 100);
  return console.log(random);
}

// randomNumber()

function randomNumberWithRange(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return console.log(random);
}

// randomNumberWithRange(50,100)

// Higher Order Functions
function arr(...values) {
  const arr1 = values;
  const arr2 = arr1.filter((val) => val % 2 === 0);
  // console.log(arr2)
  const max = arr1.reduce((acc, cv) => (acc > cv ? acc : cv));
  console.log(max);
}

// arr(1, 2, 34, 134, 5, 6, 7);

function arr3(target, ...args) {
  const values = args;
  const removeElement = values.filter((item) => item !== target);
  console.log(removeElement)
}

// arr3(23, 1, 23, 4, 62, 23, 7, 23, 56);

// Date and time 
function curremtTimeAndDate(){
    const date = new Date()
    console.log(date)
    return date.toLocaleString
}
// curremtTimeAndDate()

// Recursion

function factorial(n){
 if(n===1){
    return 1
 }else{
    return n*(factorial(n-1))
 } 
}

// console.log(factorial(5))

// Recursion for Fibonnaci series

function Fibonnaci(n){
    if(n<=1){
        return n
    }else{
        return Fibonnaci(n-1)+Fibonnaci(n-2)
    }
}

// console.log(Fibonnaci(3))

// 0,1,1,2,3,5,8,13,21...

// Closure

function increment(){
    let count = 0
    return function(){
        count++;
        console.log(count)
    }
}

const counter = increment()
// counter()
// counter()
// counter()

// Closure for private variable

function incrementer2(){
  let count = 0

  function incrementCount(){
    count++
    console.log(count)
  }

  return {
    executeCounter:function(){
      return incrementCount()
    },
    getCountValue:  function(){
      return count
    }
  }
}

const counter2 = incrementer2()
counter2.executeCounter()
counter2.executeCounter()
counter2.executeCounter()