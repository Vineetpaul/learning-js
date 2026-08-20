// topics:- 
// Set and Map
// Destructuring
// Spread/rest
// Optional chaining
// Nullish coalescing


// Set and Map

// const numbers = new Set([1,2,3,4,4,3,5,6])
// console.log(numbers)

// let fruits = new Set()

// fruits.add('asd')
// fruits.add('asdw')
// fruits.add('asds')

// console.log(fruits.has('asdw'))

// console.log(fruits)


// let arr = [1,2,2,3,5,5,4,6]

// let removeDuplicate = [...new Set(arr)]
// console.log(removeDuplicate);

// const numbers = new Set([1, 2, 2, 3, 3, 4]);

// console.log(numbers.size);

// const numbers = new Set([1,3,4,2,3,5,5]);

// console.log(numbers)


// Destructuring in objects:--

// const users = {
//     name:"Vineet",
//     clas:"BCA",
//     personal:{
//         age:21,
//         address:123,
//         contact:234,
//     }
// }
// const {name, clas} = users;
// const {age,address,contact} = users.personal;

// console.log(name)
// console.log(name,age)


// const arr = [10,20,30,40]

// const [a,b,c,d] = arr;
// console.log(a)

// const users = {
//     name:"Vineet",
//     age:21,
//     contact:12,
//     personal:{
//         address:34,
//         street:22,
//     }
// }
// const {name:userName,age,contact} = users;
// const {adrress,street} = users.personal;
// console.log(userName,street)

// const users = {
//     name:"Vineet",
//     age:21,
//     personal:{
//         subject:4,
//         sems:6,
//     }
// }
// const {name,age,personal:{subject,sems}} = users;
// console.log(name,subject)

// function greet({name,age}){
//     console.log(name)
//     console.log(age)
// }
// greet({
//     name:"Vineet",
//     age:21
// })


// const users = {
//     name:"Vineet",
//     age:21
// }
// const {name:userName} = users;
// console.log(userName)
// console.log(name)


// function greet(){
//     console.log("Hello")
// }

// function execute(fn){
//     fn()
// }
// execute(greet)


// function sam(){
//     console.log("API requestes")
// }

// function sendApi(fn){

// }
// sendApi(sam())


// function apiFetch(name){
//     setTimeout(()=>{
//         console.log("This task will take 2 sec " + name)
//     },2000)
// };
// function result(callback){
//     setTimeout(()=>{
//         console.log("Api fetching is completed time taken 5sec")
//     },5000)
//     callback("Vineet")
// }
// result(apiFetch)


// function download(name){
//     setTimeout(()=>{
//         console.log("Your download will take 2 sec " + name)
//     },2000)
// }
// function result(callback){
//     setTimeout(()=>{
//         console.log("Your download is completed in 5 sec")
//     },5000)
//     callback("http://movie")
// }
// result(download)


// getUser(function(user){
//     getUserProfile(user, function (getProfile){
//         getUserOrder(getProfile, function (getOrder){
//             getOrderPayment(getOrder, function (getPayment){
//                 console.log("Done")
//             })
//         })
//     })
// })


// getUsers()
//     .then(users => getOrder(user))
//     .then(order => getPayment(payment))

// let numbers = [1,2,3,4]
// numbers.map((nums)=>{
//     console.log(nums+1)
// }

// )
// document.addEventListener("DOMContentLoaded", () => {
//     let element = document.getElementById("btn-logs");

//     element.addEventListener("click", () => {
//         console.log("You are signed in");
//     });
// });


// const prom1 = new Promise((resolve,reject)=>{
//     let a = Math.random();
//     if(a>0.5){
//         reject("Number is greater than 0.5")
//     }
// else{
//     setTimeout(()=>{
//         console.log("Yes I am done " + a)
//         resolve(a)
//     },2000)
// }
// })
// prom1.then((a)=>{
//     console.log("Your promise is resolved "+ a)
// }).catch((err)=>{
//     console.log(err)
// })



// const prom = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {

//     }
// })
// const prom = new Promise((reslove, reject) => {
//     reslove(10)
// }

// );
// prom.then(value => {
//         throw new Error("something went wrong")
//     })
//     .then(value => {
//         console.log("this block will not run")
//     })
//     .catch(err => {
//         console.log(err.message)
//     });


// const prom = new Promise((resolve, reject) => {
//     resolve(12)
// })
// prom.then((value) => {
//    return value*2
// })
//     .then((value) => {
//         console.log(value+2)
//     })
//     .catch(err => {
//         console.log("Someting went wrong")
//     });


// const prom = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve(10)
//     } else {
//         reject("Something is off")
//     }
// })
// prom.then((value) => {
//     return value * 2
// })
//     .then((value) => {
//         console.log(value + 2)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(()=>{console.log("Your promise is completed")})


// Promise.resolve(10)
//     .then(value => {
//         throw new Error("Failed");
//     })
//     .then(value => {
//         console.log("Success");
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("First Promise to reject"),200)
// })
// const p2 = new Promise(resolve=>{
//     setTimeout(()=>resolve("Second Promise"),5000)
// })
// const p3 = new Promise(resolve=>{
//     setTimeout(()=>resolve("Third Promise"),1000)
// })
// Promise.all([p1,p2,p3])
// .then(value=>{
//     console.log(value)
// })

// console.log("Start")

// Promise.resolve()
//     .then(() => {
//         console.log("Promise 1")

//         Promise.resolve().then(() => {
//             console.log("Nested Promise")
//         })
//         setTimeout(() => {
//             console.log("Nested Timeout ")
//         }, 5000)
//     })

// setTimeout(() => {
//     console.log("Timeout")
// }, 2000);

// console.log("End")


// async function greet(){
//     console.log("A")
//     const result = await Promise.resolve("B")
//     console.log(result)
//     console.log("C")
//     setTimeout(()=>{
//         console.log("timeout")
//     },1000)
// }
// console.log("Start")
// setTimeout(()=>{
//     console.log("Outside")
// },500)
// greet()

// console.log("End")


// async function greet() {
//     console.log("First line")
//     const prom = await Promise.resolve("Inside await")
//     console.log(prom)

//     console.log("Third line")
//     setTimeout(() => {
//         console.log("Nested Timeout")
//     }, 1000)
// }
// console.log("Start")
// greet()
// console.log("End")

// async function apiFetch(){
//     const user = await getUser()
//     const orders = await getOrder(user.id)
//     console.log(orders);

// }
// apiFetch()

// async function greet(){
//     return "Hello"
// }
// greet().then((value)=>{setTimeout(()=>{
//     console.log(value)
// },1000)
// }
// )


// function isAnagram(s, t){
//     if(s.length !== t.length){
//         return false
//     }
//     let table = {};

//     for(let char of s){
//         if(table[char]){
//             table[char]++
//         }
//         table[char] = 1
//     }
//     for(let char of t){
//         if(!table[char]){
//             return false
//         }
//         table[char]--
//     }
//     return true
// }
// console.log(isAnagram("race","carj"))

// function checkDuplicate(arr){
//     let set = arr.Set();
//     console.log(set)
// }
// console.log(checkDuplicate([1,2,3,4,2,3]))

// const set = new Set([1,2,3,5,3,4,5]);
// console.log(set)

// async function apiFetch() {
//     try {
//         const url = "https://jsonplaceholder.typicode.com/todos/1";
//         let response = await fetch(url);
//         response = await response.json();
//         console.log(response);
//         alert("First Api call is done");
//     }catch(error){
//         console.log(error.message)
//         alert(error.message+" your first api please check url")
//     }
//     finally{
//         console.log("Your loader is disabled")
//     }
// }
// apiFetch();

