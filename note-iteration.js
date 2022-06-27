// Array, Set, Object, Map에 대한 데이터 순회

// 1. Array
const arr = [1, 2, 3, 4, 5];

// Array iteration 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Array iteration 2
arr.forEach((x) => console.log(x));

// Array iteration 3
for (let i of arr) {
  console.log(i);
}

// Array iteration 4
for (let i in arr) {
  console.log(arr[i]);
}

// 2. Set
const set = new Set([1, 2, 3, 4, 'Hello']);

// Set iteration 1
for (let i of set) {
  console.log(i);
}

// Set iteration 2
set.forEach((x) => console.log(x));

// 3. Object
const obj = { a: 1, b: 2, c: 3, 9: 4, e: 'Hello' };
const entries = Object.entries(obj); // [ [ '9', 4 ], [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'e', 'Hello' ] ]

// Object iteration 1
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// Object iteration 2
for (let key in obj) {
  console.log(key, obj[key]); // '9' 4
}

// 4. Map

// Map 선언
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map); // Map(2) { 'a' => 1, 'b' => 2 }

const map2 = new Map([
  ['a', 1],
  ['b', 2],
]);
console.log(map2); // Map(2) { 'a' => 1, 'b' => 2 }
console.log([...map2]); // [ [ 'a', 1 ], [ 'b', 2 ] ]

const map3 = new Map(entries);
console.log(map3); // Map(5) { '9' => 4, 'a' => 1, 'b' => 2, 'c' => 3, 'e' => 'Hello' }

// Map iteration 1
for (let [k, v] of map3) {
  console.log(k, v); // '9' 4
}

// Map iteration 2
map.forEach((v, k) => console.log(k, v));

/* Map과 Object 비교 */
/*
 * Map의 출현으로 더 이상 Object를 데이터 컨테이너로 사용하는 건 옳지 않다.
 * 1. Map의 key는 string 이외의 타입도 가능하다. Object의 key는 항상 string으로 변환된다.
 * 2. Map은 저장한 순서대로 값을 얻을 수 있다.
 * 3. 데이터의 개수를 .size를 통해 바로 얻을 수 있다.
 * 4. 데이터 추가, 삭제 시 Object보다 성능이 뛰어나다.
 */
const _obj = { a: 1, 9: 2 };
const _map = new Map([
  ['a', 1],
  [9, 2],
]);

// 1. Map의 key는 string 이외의 타입도 가능하다. Object의 key는 항상 string으로 변환된다.
// 2. Map은 저장한 순서대로 값을 얻을 수 있다.
console.log(_obj); // { '9': 2, a: 1 }
console.log(_map); // Map(2) { 'a' => 1, 9 => 2 }

// 3. 데이터의 개수를 .size를 통해 바로 얻을 수 있다.
console.log(Object.entries(_obj).length); // 2
console.log(_map.size); // 2
