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


// function getConcatenation(nums) {
//     let ans = [];

//     for (let i = 0; i < 2; i++) {

//         for (let num of nums) {
//             ans.push(num)

//         }
//     }
//     return ans
// }
// console.log(getConcatenation([1, 2, 3, 4]))


// // const numbers = [10,20,30];

// // numbers.forEach(function(num){
// //     console.log(num);
// // });
// let numbers = [10,20,30]
// for(let i = 0; i < numbers.length; i++){
//     callback(numbers[i], i, numbers);
// }


// function getConcatenation(nums) {
//     let ans = [];

//     for(let i=0;i<2;i++){
//         for(let num of nums){
//             ans.push(num)
//         }
//     } return ans
// }
// console.log(getConcatenation([1,2,3,4]))


// let arr = [1,2,3,4];

// let dbl = arr.map(num=>num*2);

// console.log(dbl);
// console.log(arr);

// let arr = [1,2,3,4];

// let even = arr.filter(n=>n%2===0);
// console.log(even);
// console.log(arr);


// let arr = [1,3,5,7];

// let match = arr.some(n=>n%2===0);
// console.log(match)

// let arr = [2,4,6,9];
// let match = arr.every(n=>n%2===0);
// console.log(match)


// function flatten(arr) {
//    return arr.reduce((flat, toFlatten) =>
//        flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
//     , [])
// }
// console.log(flatten([1, 2, [3, 4, [5, 6]]]))

// let arr = [1, 2, [3, 4, [5, 6]]]
// const faltten = arr.flat(2);
// console.log(faltten)

// function frequencyCounter(arr) {
//     const counter = arr.reduce((acc,num)=>{
//         acc[num] = (acc[num] || 0) + 1
//     return acc;
// },{})
// return counter
// }
// console.log(frequencyCounter([1,2,3,4,5,6,7,8,9,1,2,3,4,5]))

// function intersection(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     return insertectionSet = arr1.filter(values=>set2.has(values));

// }
// console.log(intersection([1,2,3,4,5],[4,3,6,7,8]))


// const array = [1, 2, 3, 4, 5];
// const allUnique = new Set(array).size === array.length;
// console.log(allUnique);


// function twoSum(nums, target) {

//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {
//             sum = nums[i] + nums[j]
//             if (sum === target) {
//                return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 9))


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
// console.log(isAnagram("vineet","eeilvt"))

// let strs = ['hat','cat','act',"pots","stop","tops"];

// let strssort = strs.map(str=>str.split('').sort().join(''));

// function groupAnagrams(strs) {
//     let group = {};

//     for(let word of strs){
//         let key = word.split('').sort().join('');

//         if(!group[key]){
//             group[key] = []
//         }
//             group[key].push(word);

//     }
//     return Object.values(group);

// }

// console.log(groupAnagrams(['hat','cat','act',"pots","stop","tops"]))


// let arr = [10,30,20,50,40];

// const result = arr.sort();
// console.log(result)

// console.log(arr.sort())


// console.log(
// ["10","30","20"].sort()
// );

// function anagram(strs) {

//     const result = strs.reduce((acc, str) => {
//         let group = {};
//         // acc[str] = (acc[str] || 0)+1;


//         for (let char of str) {

//             group[char] = (group[char] || 0) + 1

//         }
//         acc[str] = group;
//         return acc;

//     }, {});
//     return result;
// }
// console.log(anagram(["apple", "Banana", "apple", "orange", "Banana"]))


// let arr = [1,3,4,2]

// const fart = arr.sort();
// console.log(arr)
// console.log(fart)

// let arr = [1,3,4,2]
// const result = arr.sort((a,b)=>a-b);
// console.log(result)


// let users = [
//     {name:"Vineet",active:true},
//     {name:"Aman",active:false},
//     {name:"Ayush",active:true},
//     {name:"Sourabh",active:false},
//     {name:"Guddu",active:true}
// ]
// const result = users
// .filter(user=>user.active)
// .map(user=>user.name)
// .sort()

// console.log(result)


// let arr = [1,2,3];

// let result = arr.splice(1,2);
// console.log(result)
// console.log(arr)



// const users = [
//     { name: "A", age: 21, active: true },
//     { name: "B", age: 17, active: false },
//     { name: "C", age: 25, active: true },
//     { name: "D", age: 16, active: true }
// ];

// const reult = users
// .filter(user=>user.active&&user.age>=18)
// .map(user=>user.name)
// .sort()

// console.log(reult)


// let str = "vineet"
// // str[0] = "A"
// // console.log(str)

// let name = "A" + str.slice(1);
// console.log(name);
// console.log(str)

// let a ="7"
// console.log(a*2)


// let name = "Vineet"

// let upper = name.toUpperCase();
// console.log(upper);
// console.log(name)

// console.log(name.toUpperCase());
// console.log(name)

// let name = "Vineet"

// let diff = name.split("")
// console.log(diff)


// const str = "  Hello World  ";

// console.log(str.trim());
// console.log(str.length);

// let name = "vineet";

// let arr = name.split("");
// let temp = "";

// for (let i = 0; i < arr.length / 2; i++) {
//   let j = arr.length - 1 - i;

//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// console.log(arr);
// console.log(arr.join(""));


// function reverseString(str) {
//     let reverse = str.split("");
//     let temp = "";
//     for(let i=0;i<reverse.length/2;i++){
//         let j = reverse.length - 1 - i;
//         temp = reverse[i];
//         reverse[i] = reverse[j];
//         reverse[j] = temp;

//     }
//     if(reverse.join("")===str){
//         return true
//     }
//     return false

// }
// console.log(reverseString("madam"))
// console.log(reverseString("hello"))


// function frequencyCounter(str) {
//     let group = {};
//     for(let char of str){
//         group[char] = (group[char]||0)+1;
//     } return group
// }
// console.log(frequencyCounter("banana"));


// function reverseString(str) {
//     let reverse = str.split("");
//     let left = 0;
//     let right = reverse.length - 1;
//     let temp ="";

//     while(left<right){
//         temp = reverse[left];
//         reverse[left] = reverse[right];
//         reverse[right] = temp;
//         left++;
//         right--;

//     } return reverse.join("");

// }
// console.log(reverseString("hello"));

// function checkPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
//      while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(checkPalindrome("madam"));


// function frequencyCounter(str) {
//     let group = {};
//     for(let char of str){
//         if(!group[char]){
//             group[char] = 0;
//         }
//         group[char]++;
//     }
//     return group;
// }
// console.log(frequencyCounter("banana"));


// function firstNonRepeatingCharacter(str) {
//     let group = {};
//     let start = 0;
//     for (let char of str) {
//         if (!group[char]) {
//             group[char] = 0;
//         }
//         group[char]++;

//     }
//     for (let char of str) {
//         if (group[char] === 1) {
//             return char;
//         }
//     }

//     return null;
// }
// console.log(firstNonRepeatingCharacter("aabccdeff"));


// function isAnagram(s, t) {
//     let group = {};
//     if(s.length !== t.length){
//         return false
//     }
//     for(let char of s){
//         if(!group[char]){
//             group[char] = 0;
//         }
//         group[char]++
//     }

//     for(let char of t){
//         if(!group[char]){
//             return false
//         }
//         group[char]--
//     } return true
// }
// console.log(isAnagram("vineet","ineevt"));



// function removeDuplicate(str){
//     let group = {};

//     for(let char of str){
//         if(!group[char]){
//             group[char] = 0;
//         }
//         group[char]++
//     }

//     for(let char of str){
//         if(!group[char]){
//             return false
//         }
//         if(group[char]>1){
//             group[char]--
//         }
//     } return group
// }
// console.log(removeDuplicate("programming"));


// function removeDuplicate(str){
//     let result = '';
//     let group = {};

//     for(let char of str){
//         if(!group[char]){
//             result +=char;
//             group[char] =true
//         }
//     }return result
// }
// console.log(removeDuplicate("programming"))


// function mostFrequent(str) {
//     let maxCount = 0;
//     let maxChar = "";
//     let group = {};

//     for (let char of str) {
//         if (!group[char]) {
//             group[char] = 0;
//         }
//         group[char]++
//     }

//     for (let char of str) {
//         if (group[char] > maxCount) {
//             maxCount = group[char]
//             maxChar = char;
//         }
//     } return maxChar
// }
// console.log(mostFrequent("vineet"))



