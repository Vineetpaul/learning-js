// const dt = new Date();
// console.log(dt)

// const name = "Vineet"
// const lastName = "Pal"

// console.log(name + ' ' +lastName)

// // const concat = name + lastName;
// // console.log(concat)

// var a = 10;
// console.log(a);

// a = 20;
// console.log(a)
// console.error('not reco')

// var a = true;
// console.log(typeof(a))

// var age = 21;
// if(age>18) console.log(true)
//     else console.log(false)

// console.log(100/0);

// let a = 12;
// console.log(a)

// let a = 12
// a = 10
// console.log(a)

// var a = "aman"
// var b = 2
// var c = true
// console.log(a,b,c)

// 
// assignment to const will always give type error
// let arr = [1,2,3]
// arr = [4,5,6]
// console.log(arr) 

// for(i=1;i<=50;i++){
//     console.log(i)
// }
// let sum = 0;
// let i = 1;
// while(i<=10){
//     sum+=i
//     i++
// }
// console.log(sum)


// let a = "Vineet"

// for(let i=0;i<a.length;i++){
//     const temp = a[i]
//     console.log(temp)
// }

// for(let i = 1; i<=20;i++){
//     if(i%2===0){

//     }else{
//         console.log(i)
//     }
// }
// let sum = 1
// for(let i=5;i>0;i--){
// sum = sum*i

// }
// console.log(sum)

// for(let i = 1;i<=3;i++){
//     for(let j = 1;j<=3;j++){
//         process.stdout.write(String(j));
//     }
// }
// console.log();

// let arr = [1,2,3,4,5,6,7,8,9]
// let temp = new Array(arr.length);
// let j=0;

// for(let i=arr.length-1;i>=0;i--){
// temp[j] = arr[i]
// j++;
// }
// console.log(temp)


// let a = 1;
// while(a<101){
//     if(a%5===0){
//         console.log(a)
//     }
//     a++
// }

// let obj = {
//     name:"Vineet",
//     age:21,
//     roll:123
// }
// for(let key in obj){
//     console.log(key)
// }

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// console.log(arr1.concat(arr2))


// let arr = [5,3,7,1,2,4,6,10,23]

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j+1]
//             arr[j+1] = arr[j]
//             arr[j] = temp
//         }
//     }

// }
// console.log(arr)

// let arr = [1,2,3,4]

// let temp = [];

// arr.forEach(function(val){
//     temp.push(val*2)
// })
// console.log(temp)

// let r = Number(prompt("Enter radius of circle"))

// function areaOfCircle(){
//   let area = Math.PI*r*r;
//   console.log(area)
// }
// areaOfCircle();



// function sumOfArray(arr) {
//     var sum = 0;
//     arr.forEach(function (val) {
//         sum = sum + val
//     })
//     return sum
// }
// console.log(sumOfArray([1, 2, 3, 4, 5, 2]))

// let str = "@vineet"

// function checkStr(){
//     if(str[0]==="@"){
//         return true
//     }else return false
// }
// console.log(checkStr())

// function checkStr(str, char){
//     return str.startsWith(char)
// }
// console.log(checkStr("@vineet","i"))

// let num = Number(prompt("Enter a number"))

// function factorial(){
//     var fact =1;
//     for(let i=num;i>1;i--){
//      fact = fact*i;

//     }
//     return fact;
// }
// console.log(factorial())


// function greater(arr){
//     let max = 0;
//     for(let i=1;i<arr.length-1;i++){
//         if(arr[i]>max){
//             max = i
//         }
//     }
//     return arr[max]

// }
// console.log(greater([1,4,7,2,7]))
