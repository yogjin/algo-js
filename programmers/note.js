// 1. 문자 반복 (repeat)
console.log('*'.repeat(5)); // *****

// 2. slice, splice
// array.slice() -> 배열에서 원하는 부분만 리턴
// array.splice() -> 배열 자체도 바꾸고 잘려진 부분을 리턴
// slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(2, 4));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(1, 5));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(2, 4));
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
console.log(animals.slice());

// array.splice()
let fruits = ['apple', 'watermelon', 'mandarin', 'pear'];

// 하나도 제거하지 않고, 2번 인덱스에 "banana", "kiwi" 추가
let removed = fruits.splice(2, 0, 'banana', 'kiwi');
console.log(fruits); // [ 'apple', 'watermelon', 'banana', 'kiwi', 'mandarin', 'pear' ]
console.log(removed); // []

// 3번 인덱스에서 한 개 요소 제거
removed = fruits.splice(3, 1);
console.log(fruits); // [ 'apple', 'watermelon', 'banana', 'mandarin', 'pear' ]
console.log(removed); // ['kiwi']

// 2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가
removed = fruits.splice(2, 1, 'trumpet');
console.log(fruits); // [ 'apple', 'watermelon', 'trumpet', 'mandarin', 'pear' ]
console.log(removed); // [ 'banana' ]

// 3. Array 메소드

// 4. swap (구조분해할당 이용)
let a = 3;
let b = 7;
console.log(a, b); // 3 7
[a, b] = [b, a]; // swap
console.log(a, b); // 7 3

// 5. 정수 판별
const int123 = 123;
const str123 = '123';

console.log(Number.isInteger(int123)); // true
console.log(Number.isInteger(str123)); // false

// 6. string 접근
// string.charAt과 index접근
const str = '  i love you ';
console.log(str[2]); // i
console.log(str.charAt(2)); // i
console.log(str[-2]); // undefined
console.log(str.charAt(-2)); // ""

// 7. 제곱
// x^y
let x = 2;
let y = 10;
console.log(Math.pow(x, y)); // 1024
console.log(x ** y); // 1024

// 8. 진법 변환
const eight = 8;
const binaryEight = eight.toString(2);
console.log(binaryEight); // 1000 (string)
console.log(parseInt(binaryEight, 2)); // 8 (number);

// 9. Object, Array, Map 정리

// 10. Regex

// 11. 다중집합
// 다중 교집합 구하기
let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [1, 1, 2, 3, 4, 6];
const intersection = [];
arr1.forEach((str) => {
  if (arr2.includes(str)) {
    delete arr2[arr2.indexOf(str)];
    intersection.push(str);
  }
});
console.log(intersection); // [ 1, 2, 3, 4 ]
console.log('arr1:', arr1, 'arr2:', arr2); // arr1: [ 1, 2, 2, 3, 4, 5 ] arr2: [ <1 empty item>, 1, <3 empty items>, 6 ]

// 다중 합집합
// arr1 + arr2 - 교집합
const union = [...arr1, ...arr2]
  .filter((x) => x !== undefined)
  .sort((a, b) => a - b);
console.log(union); // [ 1, 1, 2, 2, 3, 4, 5, 6 ]
