// console.log('Hello World');
// console.warn('Hello World');
// console.error('Hello World');
// console.info('Hello World'); // same as log
// console.table({name: 'harsh', age: 27})


// let result = 35*2 - (10/2) + 7;
// console.log(result);

// console.log(typeof("abc")) //string
// console.log(typeof 123 ) //number
// console.log(typeof(null)) //object (null ka typeobject is an mistake)(to know more learn about datatags)(000) same datatag as object (000), a well known bug
// console.log(typeof(true)) //boolean
// console.log(typeof(undefined)) //undefined


// let a = "sprite";
// let b = "coke";
// console.log("Before Swap:", "a =", a, ", b =", b);
// let c;
// c = a;
// a = b;
// b = c;
// console.log("After Swap (Method 1):", "a =", a, ", b =", b);
// M2
// let a = 12;
// let b = 13;
// console.log(a,b)
// [a,b] = [b,a];
// console.log(a,b)

// var a = 12;
// var b = 13;
// console.log(a,b);
// a = a+b; //25
// b = a-b; //12
// a = a-b; //13
// console.log(a,b);


// console.group('hisaab');
//     console.groupCollapsed("Aaj ka hisaab");
//     console.log('pani puri 10');
//     console.log('chai 10');
//     console.groupEnd();
//     console.groupCollapsed("kal ka hisaab");
//     console.log('pani puri 10');
//     console.log('chai 10');
//     console.groupEnd();
//     console.groupEnd();



// const obj = {
//     name: 'harsh',
//     age: 27,
//      city:'indore',
// };
// console.log(obj);
// constant se aap value change nhi kr skte update kr skte ho value ke andar ki cheeze
// obj.name = 'rostan';
// console.log(obj);

// const arr = [1,3,4];
// // arr = 12; error
// arr.pop();

// const obj = {
//     name: 'rostan',
//     age: 27,
//     city: 'indore',
// };
// Object.freeze(obj); //wont allow to change
// obj.city = 'bhopal'; //nhi hoga
// console.log(obj);

// converts string to number
// console.log(Number("50"));
// console.log(parseInt("50"));
// console.log(+"50") //not recommended

// let str = "JavaScript";
// console.log(str.includes("Script"));
// console.log(str.indexOf("Script")); //if it contians the word then the starting alphabeg  index it gives otherwise -1

// let str = "JavaScript";
// console.log(str.indexOf("Script") !== -1);
// console.log(str.search("Script") !== -1);


// undefined null NAN
// undefined - if the var id declared and not initialized then the value displayed will be undefined
// null - no value empty
// NaN - if the var is declared and initialized with invalid math operation then the value displayed will be NaN