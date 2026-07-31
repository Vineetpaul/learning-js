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


// const arr = [1,2,3];

// console.log(arr.slice(1,3));

// console.log(arr);


// function hasDuplicates(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                  console.log(true);
//             }
//         }
//     }
//     console.log(false);
// };
// hasDuplicates([1,2,3,4])

// let s = "vineet"
// let t = "eeifvt"

// let sorts = s.split('').sort().join('');
// console.log(sorts)

// let tsort = t.split('').sort().join('');
// console.log(tsort)

// if(sorts === tsort){
//     return console.log(true)
// }
// else{
//     return console.log(false)
// }

// function isAnegram(s,t){
//     let ssort = s.split('').sort().join('');
//     let tsort = t.split('').sort().join('');
//     if(ssort === tsort){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(isAnegram("vineet","eeivnt"));


// function isAnagram(s,t){
//     if(s.length !== t.length){
//         return false
//     }
//     let table = {};

//     for(let i=0;i<s.length;i++){
//         let char = s[i];

//         if(table[char]){
//             table[char]++;
//         }else{
//             table[char] = 1
//         }
//     }

//     for(let i=0;i<t.length;i++){
//         let char = t[i]

//         if(!table[char]){
//             return false
//         }
//         table[char]--;
//     }
//     return true
// }
// console.log(isAnagram("vineet","eecvt"))

// let arr =[1,2,3,4];
// let ans = new Array(arr.length * 2);


function getConcatenation(nums) {
    let ans = [];

    for (let i = 0; i < 2; i++) {
       
        for (let num of nums) {
            ans.push(num)
            
        }
    }
    return ans
}
console.log(getConcatenation([1, 2, 3, 4]))