// reversing a string


// function ReverseSrting(){
//     let str = "hello";
//     let split= str.split("");
//     console.log(split);
//     let reverse = split.reverse();
//     console.log(reverse);
//     let join = reverse.join("");
//     console.log(join)
// }
// ReverseSrting();

// function ReverseSrting(str){
//     let reversedStr = str.split("").reverse().join("");
//     console.log(reversedStr)
    
// }
// ReverseSrting("what the fuck");

// function a(b,c){
//     return b+c;
// }
// a(8,6);
// console.log("hello");
// const name = "yashash";
// const greeting = "good morning";
// // console.log(greeting +" "+ name);
// let numVariable = 0;
// for(let i = 0 ; i<= 0 ; i++){
//     // console.log(numVariable++);
// }
// const truee = (50 === 20) && (20===20);
// console.log(truee)

// fuctions conditionals and loops

// if (1 === 2){
//     console.log("equal")
// }
// else{
//     console.log("not equal")
// }

// const colors = ['orange','gree', 'yello ','purple', 'blue'];
// const randomcolors = Math.floor(Math.random() * colors.length);
// console.log(randomcolors);

// const randomColor = colors[randomcolors];
// console.log(randomColor);

// for loops
// first initializer - from where to strat loop
// when to end loop
// imcrement || decrementor
const array = [1,2,3,4,5,6,7,8,9,0];
for (let array1 = array[2] ; array1<array.length ; array1++){
    // console.log(array1)
}

// add numbers from 1 to 10
var sum = 0;
for (let num = 0 ;num <10; num++){
    sum = sum + num;
}
// console.log(sum)

// looping through array
const colors = ['orange','gree', 'yello ','purple', 'blue'];
for (let i= 0 ; i<colors.length; i+=1){
    // console.log(colors [i]);
}

// looping through object
let data = {
    name : "faku",
    age :21,
    profession : "tdmPlayer",
    status : "iphone11Bot",
}
for (let ele in data){
    // console.log(ele, data(ele));
}

// function to print numbers from 1 to 10
function printingNum(){
    for (let i = 0; i<11; i++){
// console.log(i)
    }
}
printingNum();


const isEqualto100 = (a,b) =>
a === 100 || b === 100 || (a+b) === 100;
// console.log(isEqualto100(100,0));
// console.log(isEqualto100(0,100));

// console.log(isEqualto100(100,0));
// console.log(isEqualto100(0,100));

// console.log(isEqualto100(20,80));
// console.log(isEqualto100(0,10));

// get extension of file name

const getFileExtension = (string) =>{
return string.slice(string.lastIndexOf('.'));
}
// console.log(getFileExtension("file.txt"));

// replace every character in a given string with the character following it in alphabet

// String.fromCharCode
// charCodeAt
const moveOneWordForward = (str) => {
return str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('');
}

// console.log(moveOneWordForward("abcd"))

// get current date

// const day = date.getDay();
// const month = date.getMonth();
// const years = date.getFullYera();

const formatDate = (date = new Date()) =>{
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
}
// console.log(formatDate())

const addString = (stri) =>{
    return `New! ${stri}`;
}
// console.log(addString("hello"))

// slice 3 char of string at both end and return
const newString = (stringg) =>{
    return stringg.length < 3 ? stringg : stringg.slice(0,3) + stringg.slice(-3)
}
// console.log(newString("yashaskumar"))

// slice string to exact half if it is a even kength
function string (){
    let str = "yashash12344";
    let galfstr = str.slice(0,Math.ceil(str.length / 2) );
    // console.log(galfstr);
}
string();

// add two string by removing first char
function concatString (str1,str2){
    // str1.slice(0) && str2.slice(0);
    let str11 = str1.substring(1);
    let str22 = str2.substring(1);
    // console.log(str11 + str22);
}
concatString("yashas","kumar")

// find which number is near to 100
const closestTo100 = (a,b) => (100-a) < (100-b) ? a : b;
// or
function nearest(n1, n2){
    if (n1 > n2){
        // console.log("n1 is nearest to 100")
    }
    else{
        // console.log("n2 is nearest")
    }
}
nearest(99,88);

// find number of even digits in an array
// const arrayInt = [1,2,3,4,5,6,7,8,9,0]

// for (let i=0 ; i<=arrayInt.length ; i++){
//     if (arrayInt[i]%2 === 0){
//         // console.log(arrayInt[i])
//     }
// }
// // OR
// const countEvenNumbers = (arr) =>
// arr.filter(numb => numb%2 === 0).length;

// console.log(countEvenNumbers([1,2,3,4,5,7,8,9,6,0]));

// console.log(countEvenNumbers([2,2,2,2,2,2,2,2,2,2]))

// FIND THE EVEN NUMBER UP TO A GIVEN NUMBER

const countEvenNumbers = (arr) =>
arr.filter(numb => numb%2 === 0).length;

const arrayCreation = (number) => {
    let array = [];
    for(let i=0; i<=number; i++){
        array.push(i);
        // console.log(array)
    }
    return array;
}
// console.log(countEvenNumbers(arrayCreation(10)));

// CHECK WHETHER A GIVEN NUMBER OF INTEGERS IS SORTED IN ASCENDING ORDER
const isAscending = (arr) =>{
    for(let i=0; i<arr.length; i++){
        if (arr[i+1] > arr[i])return true;
            // console.log("not in ascending order");
            // console.log("It is in ascending order");
        }
        return false;
}

// console.log(isAscending([1,2,3,4,5,6,7,8,9]))

// FIND LARGEST EVEN NUMBER IN AN ARRAY
const largestEvenNum = (array) =>{
    return Math.max(...array.filter(num => num%2 === 0));
}
// console.log(largestEvenNum([11,22,33,44,55,66,77,88,99]))

// REPLACE FIRST DIGIT IN A STRING
const replace = (string) =>{
    return string.replace(string[0],"$");
    // return string.replace(/[0-9]/g,"$");
    // console.log(string)
}
// console.log(replace("hello world"))


// FIND LEAP YEAR
const leap = (year) =>{
    if (year % 4 === 0)return "leap year";
    return "not a leap year";
}
// console.log(leap(2024))


const f = n => n <= 1 ? 1:n*f(n-1);
let g = f(4);

// console.log(g)

function sortBy(array, prop) {
    return array.sort((a, b) => {
      if (a[prop] < b[prop]) return -1
      if (a[prop] > b[prop]) return 1
  
      return 0
    })
  }
//   console.log(sortBy([3,4,5,5,6,71,],2))

const objA = { a:"1", b:"1", c:"1"};
const objB = { a:"1", b:"1", c:"1"};
const objC = { a:"1", b:"2", d:"3"};

const checking = (a,b) => {
  Object.keys(a).every(key => b[key]);
}
// console.log(checking(objA, objC));

// stacks 

// functions: push ,pop ,peek ,length

let palindrome = [];

let word = "racecar";

let rword = [];

for(let i = 0; i<word.length; i++){
    palindrome.push(word[i]);
}
// console.log(palindrome)

for(let i = 0; i<word.length; i++){
  rword += palindrome.pop();
//   console.log(rword)
}

if (word === rword){
    // console.log("palindrome");
}
// else console.log("not palindrome");


function sumup(n){
    return (n/2) * (1+n);
}
// console.log(sumup(100));

// csv into 2d array
const parseCSV = (csvString) =>
    csvString.split("\n").map(row => row.split(','));

const srt = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

// console.log(parseCSV(srt));

const value = [1,2,3,4,5,6,7,8,9,"A","B","c","d","e","f"];
const random = () =>{
    let hexColor = "#";
    for (i= 0; i<6 ;i++){
        let randomNumber = Math.floor(Math.random() * value.length);
        hexColor += value[randomNumber];

    }
    // console.log(hexColor);
    return hexColor
}

random();

// find duplicate values in array

function findDuplicates(array){
    return array.filter((ele,index,arr) => arr.indexOf(ele) !== index);
}
// console.log(findDuplicates([1,2,3,4,5,64,3,2,1,5]));

// find min/max number in given array

function findMax(array){
  let max = array[0];
  for(let i=1 ;i< array.length ; ++i){
      if (array[i] > max){
          max = array[i];
      }
      console.log(max)
  }
}
findMax([2,4,5,67,8,9,44,656,7]);






