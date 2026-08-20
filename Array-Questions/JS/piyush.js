// console.log("Your age is ",age)
// // age will be undefined because javascript compile the code line by line 
// // so this line will executed first and because age is defined after this line it will show undefined 


// var age = 20;

// console.log("Your age is",age)

// age = 20;

// console.log("your age is",age);
// let age = 10;

// myFunc();

// var myFunc = function(){
//     console.log("First")
// }
// myFunc();

// function myFunc(){
//     console.log("Second")
// }
// myFunc();

// var variable = 20;

// (()=>{
//     console.log(variable);

//     variable = 10;

//     console.log(variable)
// }) ();//iife = immideatly invoked function expression

// console.log(variable)
// var variable = 30;


// a = 10;
// console.log(a)

// let a = 20;
// console.log(a)

// variable = 10;
// (() => {
//     foo = 100;
//     console.log(variable);
//     var foo = 100;
//     variable = 20;
//     console.log(variable);
// })(); 

// console.log(foo);
// console.log(variable);
// var variable = 30;

// const vineet = {
//     name:"damn",
//     sayHello: function (){
//         console.log(this.name)
//     }
// }
// vineet.sayHello();

// const joe = {
//     name:"Karan",
//     sayHello: function(){
//         console.log(this.name)
//     }
// }
// joe.sayHello.call(vineet);


// let a = 10;

// function changeValue(x){
//     x=20;
// }

// changeValue(a)
// console.log(a);

// let person = {
//     name: "Vineet"
// };

// function changeName(obj) {
//     obj.name = "Rahul";
// }

// changeName(person);

// console.log(person.name);

// let arr = [1];

// let a = [1,2]
// console.log(typeof(a));

// const a = 10;

// a = 20;

// console.log(a);

// const user = {
//     name: "Vineet"
// };

// user = {};
// greet();

// var greet = function(){

// console.log("Hello");

// // }
// greet();

// const greet = ()=>{

// console.log("Hello");

// }

// let a = 10;

// function test(){

// console.log(a);

// let a = 20;

// }

// test();

// let a = 10;
// function outer(){
//     let b = 20;
//     function inner(){
//         let c= 30;
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     inner()
// }
// outer();

// function outer() {
//     let x = 10;

//     return function () {
//         x++;
//         console.log(x);
//     };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();

// fn2();

// fn1();

// function outer(){
//     let arr = [];

// for (var i = 0; i <= 3; i++) {

//     (function(j){

//         arr.push(function(){

//             console.log(j);

//         });

//     })(i);

// } return arr
// }
// const result = outer();

// result[0]();
// result[1]();
// result[2]();
// result[3]();

// function hello() {
//     console.log("Hello");
// }

// hello;
// hello();


// let name = prompt("Enter your name");

// function greet(name){
//     console.log(`Welcome ${name}`)
// }

// greet(name);



// const greet = function (){
//     console.log("Hello")
// }

// function test() {
//     return;
//     console.log("Hello");
// }

// console.log(test());

// function add(a,b){
//     console.log(a,b)
// }
// add(10);

// function greet(name = "Guest") {
//     console.log(name);
// }

// greet(undefined);
// greet(null);
// greet();

// function outer() {

//     function inner() {
//         return "Hello";
//     }

//     return inner;
// }

// console.log(outer);
// console.log(outer());
// console.log(outer()());

// function greet() {
//     console.log("First");

//     return function () {
//         console.log("Second");
//     };
// }

// const x = greet();

// x();

// function hello() {
//     return hello;
// }

// const x = hello;

// console.log(typeof x);
// console.log(typeof x());

// function outer() {

//     return function () {
//         return "JavaScript";
//     };

// }

// const fn = outer();

// console.log(typeof fn);
// console.log(fn());


// function greet() {
//     console.log("A");

//     return function () {
//         console.log("B");

//         return function () {
//             console.log("C");
//         };
//     };
// }

// greet()()();


// class User {
//     constructor(name, role) {
//         this.username = name;
//         this.role = role;
//     }

//     sayHi() {
//         console.log(`Hello mister ${this.username} you role is ${this.role}`);
//     }
// }

// const admin = new User("Vineet","Admin");
// const guest = new User("Aman", "Guest");

// admin.sayHi();



// const sayHello = ()=>{
//     console.log("Hello zi")
// }
// sayHello();


// const obj = {
//     name: "Vineet",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// obj.greet();

// const sum = (a, b) => a + b;

// console.log(sum.length);

// const greet = () => {};

// console.log(greet.prototype);

// function sayHi(){
//     name:"Vineet";
//     greet:function(){
//         console.log(this)

//     }
// }
// sayHi();

// const sayHi = ()=>{
//     console.log(this)
// }
// sayHi();


// const person = {
//     name: "Vineet",

//     greet() {
//         console.log(this.name);
//     }
// };

// person.greet();

// const obj = {
//   name: "A",
//   show() {
//     return this.name;
//   }
// };

// const fn = obj.show;

// console.log(fn);

// const person = {
//     name: "Vineet",

//     greet: () => {

//         const arrow = () => {
//             console.log(this.name);
//         };

//         arrow();
//     }
// };

// person.greet();

// function test() {

//     this.name = "JavaScript";

//     const arrow = () => {
//         console.log(this.name);
//     };

//     arrow();
// }

// test();

// const person = {

//     name: "Vineet",

//     greet() {


//         function inner() {


//             const arrow = () => {
//                 console.log(this.name);
//             };

//             arrow();
//         }

//         inner();
//     }

// };

// person.greet();

// const person = {

//     name: "Vineet",

//     greet() {

//         const self = this;


//         function inner() {

//             console.log(self.name);

//         }

//         inner();

//     }

// };

// person.greet();

// function greet(){
//     console.log(this.name)
// }

// const person = {
//     name:"Vineet"
// };

// greet();


// class Person {
//     constructor(name, job, age) {
//         this.name = name;
//         this.job = job;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }
// const boy1 = new Person("Vineet", "SWE", 21);
// const boy2 = new Person("Aman", "JE", 24);
// console.log(boy1);
// boy1.greet();
// console.log(boy2);
// boy2.greet();

// const obj = {
//     name:"Vineet",
//     age:21
// }

// console.log(Object.keys(obj))


// const person = new Object();

// person.firstName = "Vineet";
// person.lastName = "Pal";
// person.age = 21;

// person.firstName = "Aman"
// person.prototype.

// console.log(person.firstName);

// const obj = {
//     name:"Vineet",
//     age:21
// }
// console.log(Object.values(obj))

// const obj = {
//     name:"Vineet",
//     age:21
// }
// console.log(Object.entries(obj))