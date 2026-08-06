<!-- 1. How do you remove duplicates from an array?
Solution:

Using a Set (which only stores unique values):

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = […new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

Or using filter and indexOf:

const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]



2. How do you reverse an array in place?
Solution:

Using the reverse method:

const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // [5, 4, 3, 2, 1]

Or manually:

for (let i = 0, j = array.length — 1; i < j; i++, j — ) {
[array[i], array[j]] = [array[j], array[i]];
}
console.log(array); // [5, 4, 3, 2, 1]




3. How do you find the largest and smallest numbers in an array?
Solution:

Using Math.max and Math.min with the spread operator:

const array = [1, 2, 3, 4, 5];
const max = Math.max(…array);
const min = Math.min(…array);
console.log(`Max: ${max}, Min: ${min}`); // Max: 5, Min: 1

Using reduce:

const max = array.reduce((a, b) => Math.max(a, b));
const min = array.reduce((a, b) => Math.min(a, b));
console.log(`Max: ${max}, Min: ${min}`);




4. How do you flatten a nested array?
Solution:

Using flat (for shallow flattening):

const array = [1, [2, [3, [4]], 5]];
const flatArray = array.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5]

Using recursion:

function flatten(arr) {
return arr.reduce((flat, toFlatten) =>
flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}
console.log(flatten(array)); // [1, 2, 3, 4, 5]




5. How do you find the frequency of elements in an array?
Solution:

Using reduce to create a frequency map:

const array = [1, 2, 2, 3, 4, 4, 4, 5];

const frequency = array.reduce((acc, value) => {
acc[value] = (acc[value] || 0) + 1;
return acc;
}, {});

console.log(frequency); // {1: 1, 2: 2, 3: 1, 4: 3, 5: 1}




6. How do you find the intersection of two arrays?
Solution:

Using filter and includes:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const intersection = arr1.filter(value => arr2.includes(value));
console.log(intersection); // [4, 5]

Using Set for better performance on large arrays:

const set2 = new Set(arr2);
const intersection = arr1.filter(value => set2.has(value));
console.log(intersection); // [4, 5]




7. How do you find the difference between two arrays?
Solution:

Using filter and includes:

const difference = arr1.filter(value => !arr2.includes(value));
console.log(difference);

Or for the symmetric difference (items unique to each array):

const symmetricDifference = [
…arr1.filter(value => !arr2.includes(value)),
…arr2.filter(value => !arr1.includes(value))
];
console.log(symmetricDifference);





8. How do you check if all elements in an array are unique?
Solution:

Using Set:

const array = [1, 2, 3, 4, 5];
const allUnique = new Set(array).size === array.length;
console.log(allUnique); // true

Using every and indexOf:

const allUnique = array.every((value, index) => array.indexOf(value) === index);
console.log(allUnique); // true




9. How do you find pairs in an array whose sum equals a target value?
Solution:

Using two nested loops:

const array = [1, 2, 3, 4, 5];
const target = 6;
const pairs = [];

for (let i = 0; i < array.length; i++) {
for (let j = i + 1; j < array.length; j++) {
if (array[i] + array[j] === target) {
pairs.push([array[i], array[j]]);
}
}
}
console.log(pairs); // [[1, 5], [2, 4]] -->