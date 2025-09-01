// var a = prompt("Num1: ")
// var b = prompt("Num2: ")
// console.log(Number(a)+Number(b))

// var a = undefined
// console.log(a)
// a = 4
// console.log(a)

// if (condition){
//     condition true
// }else{
//     condition false
// }

// var age = +(prompt('Enter your age: '))
// var age = Number(prompt('Enter your age: '))

// if (age >= 18){
//     console.log('You can vote')
// }else{
//     console.log('You cannot vote')    
// }


// var marks = Number(prompt('Marks: '))

// if(marks>90){
//     console.log('A')
// }else if(marks>80){
//     console.log('B')
// }else if(marks>70){
//     console.log('C')
// }else if(marks>60){
//     console.log('D')
// }else{
//     console.log('E')
// }

// Binary opertors
// true -1 
// false 0

// a = 10
// console.log(++a)
// console.log(a)

// var a = 10
// var b = '10'

// == values check only
// if(a==b){
//     console.log('true')
// }else{
//     console.log('false')
// }

// values+datatype check
// if(a===b){
//     console.log('true')
// }else{
//     console.log('false')
// }


// var unit = Number(prompt('Enter Units'))
// var bill

// if(unit >= 100){
//     bill = unit * 10
// } else if(unit >= 50){
//     bill = unit * 8
// } else{
//     bill = unit * 5
// }

// console.log('Bill: ',bill)


// var a = 10 ternary operator
// console.log(a>=10?'hello':'not hello')

// for(var a = 10; a>0; a--){
//     console.log(a)
// }

// console.log(typeof NaN)
//  let str = 'apple'
//  console.log(str.slice(0,4)) 
// `` - backticks , template literals, template string 
// console.log(`2+2 = ${2+2}`)

// let str = "Hello Ji kaise ho"
// orginal string ko kuch nhi hota hai , duplicate pe modification hota hai
// let ans = str.split("ai")
// let ans1 = str.replace('i','y')

// let str = "Hello, World!"
// let ans =str.includes("Worrld")

// staright forward loop (jaha pata ho kaha se kaha jana hai)
// dynamic loop (jaha pata nhi ho kaha se kaha jana hai)

// function
// function abcd(){
//     console.log('abcd')
// }
// abcd();

// TWO TYPES OF CODING STYLE IN INDUSTRY:
// WET CODE - writing everthing twice thrice etc
// DRY CODE - Don't Repeat Yourself

// there are 6 ways of writing a function
// function greet(chacha){ //parameter
//     console.log(chacha)
// }
// greet('Hello') //arguement
// greet('Hi')


// function abcd(){
//     console.log('abcd')
//     //function statement
// }
// abcd();

// var abcd = function(){
//     console.log('abcd')
//     //function expression
// }
// abcd();

// function(){
//     //anonymous function
// }

// fat arrow functiom
()=>{

}

//fat arrow with one parameter
// let abcd = a=>{

// }
// abcd(12);

// fat arrow with implicit return
// ()=>12


// function add(a,b){
//     return a+b explicit return
// }

// function abcd(a,b,c,...rest){
//     console.log(a,b,c,rest);
// }
// abcd(1,2,3,4,5,6,7,8)

// immediate invoked function expression iife
// (function abcd(){
//     console.log('hello');
    
// })();

// hofs

// arrays in js are non-homogenous


// let arr = [1,2,3,4,5];
// arr.pop();
// arr.push(6);
// arr.unshift(9);
// arr.shift();
// arr.splice(1,2);
// console.log(arr);

// ek se zayda bande ki baat ki toh Array, ek bande ke baare mein saari baat ki toh object

// var a = {
//     username : 'rostan', //username is property
//     age : 29,
//     city: function(){} //this is a method
// };


//higher order function
// function abcd(val){
//     val();
// }
// abcd(function sum(){
//     var sum = 3;
//     console.log(sum);
// })