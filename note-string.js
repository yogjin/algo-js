// 1. 대소문자 변경
// 소문자 -> 대문자 .toUpperCase()
// 대문자 -> 소문자 .toLowerCase()
const aBc = 'aBc';
console.log(aBc.toUpperCase()); // ABC
console.log(aBc.toLowerCase()); // abc

// 2. 문자열 길이 체크
// string.length
const str = 'abcdefghijklmnop qrstuvwxyz';
console.log(str.length); // 27 (공백포함)

// 3. 문자열 공백 제거
const spaceStr = '  앞 뒤 공백 있는 문자열      ';

// 앞 뒤 공백제거
// trim() 함수, replace() 함수와 정규식
console.log(spaceStr.trim()); // '앞 뒤 공백 있는 문자열'
console.log(spaceStr.replace(/^\s+|\s+$/gm, '')); // '앞 뒤 공백 있는 문자열'

// 문자열 모든 공백 제거하기
console.log(spaceStr.replace(/\s+/gm, '')); // '앞뒤공백있는문자열'

// 4. 문자열에서 첫번째, 마지막 문자 가져오기
// .charAt() 함수, str[index], string.slice
const firstLast = 'Hello JS';

// charAt()
console.log(firstLast.charAt(0)); // H
console.log(firstLast.charAt(firstLast.length - 1)); // S

// str[index]
console.log(firstLast[0]); // H
console.log(firstLast[firstLast.length - 1]); // S

// slice
console.log(firstLast.slice(0, 1)); // H
console.log(firstLast.slice(-1, firstLast.length)); // S

// 5. 문자열에서 특정 문자열 치환하기
// replace
const fruits = 'apple, banana, orange, banana, Banana';

// str.replace(searchValue, newValue)
// replace() 함수는 첫 번째로 찾은 문자열만 치환한다.
const replaced_fruits = fruits.replace('banana', 'kiwi');
console.log(replaced_fruits); // apple, kiwi, orange, banana, Banana

// 대소문자 구분없이 문자열 치환하기 (regex flag: i)
// 모든 문자열 치환하기 (regex flag: g)
const replaced_fruits2 = fruits.replace(/banana/gi, 'kiwi');
console.log(replaced_fruits2); // apple, kiwi, orange, kiwi, kiwi

// 6.1 문자열 -> 배열 (한글자씩)
// str.split, [...str]
const str2 = 'Yo! Adrian!';
console.log(str2.split('')); // [ 'Y', 'o', '!', ' ', 'A', 'd', 'r', 'i','a', 'n', '!' ]
console.log([...str2]); // [ 'Y', 'o', '!', ' ', 'A', 'd', 'r', 'i','a', 'n', '!' ]

// 6.2 배열 -> 문자열
// array.join()
console.log(str2.split('').join('')); // 'Yo! Adrian!'

// 7. 문자열 찾기
// str.match(regex)
// 더 자세한 regex 정리는 note-regex.js
const str3 = 'abc abcd 1234';
const re = /[a-z]+/gm;
console.log(str3.match(re)); // [ 'abc', 'abcd' ]

const re2 = /[0-9]+/gm;
console.log(str3.match(re2)); // [ '1234' ]
