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

// for(const [keys, values] of Object.entries(obj)){
//     console.log(keys,values)
// }


// copying in objects

// const obj1 = {
//     name1:"Vineet"
// }

// const obj2 = {
//     name2:"Aman"
// }

// const result = Object.assign({},obj1,obj2);
// console.log(result);

// const obj1 = {
//     a: "Vineet"
// };

// const obj2 = {
//     b: "Aman"
// };

// const result = Object.assign({}, obj1, obj2);

// console.log(result);

// const obj1 = {
//     a:"Vineet"
// }

// const obj2 = {
//     b:"Aman"
// }

// const result = {
//     ...obj1,
//     ...obj2,
//     c:"Aayush",
// }

// console.log(result);

// const user = {
//     name:"Vineet",
//     age:21
// }

// const {name,age} = user;

// console.log(name);
// console.log(age);

// const obj = {
//     name:"Vineet",
//     age:21
// }

// const result = Object.entries(obj)
// console.log(result)


// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner
// }
// const result = outer()
// result();


// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a)
//     }
//     inner();
// }
// outer();


// const users = ["Vineet","Sourabh","Ayush","Aman","Guddu"];

// console.log(users.slice(1,3))

// users.splice(1,3,"Hi")
// console.log(users)

// const arr = [10,20];

// console.log(arr.push(30));
// const arr = [10,20,30];

// console.log(arr.pop());

// console.log(arr);


const arr = [1,2,3];

console.log(arr.slice(1,3));

console.log(arr);