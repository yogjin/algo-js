// 자연수가 들어있는 배열 arr가 매개변수로 주어집니다.
// 배열 arr안의 숫자들 중에서 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수를 계산해서 배열로 return 하도록 solution 함수를 완성해주세요.
// 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.

// ▶입출력 예 #1
// arr = [1, 2, 3, 3, 3, 3, 4, 4]에서 3은 4번, 4는 2번씩 나타나므로 [4, 2]를 반환합니다.

// ▶입출력 예 #2
// arr = [3, 2, 4, 4, 2, 5, 2, 5, 5]이면 2가 3회, 4가 2회, 5가 3회 나타나므로 [3, 2, 3]를 반환합니다.

// ▶입출력 예 #3
// [3, 5, 7, 9, 1]에서 중복해서 나타나는 숫자는 없으므로 [-1]을 반환합니다.

// ##### 제한사항
// - 배열 arr의 길이는 1 이상 100 이하의 자연수입니다.
// - 배열 arr의 원소는 1 이상 100 이하의 자연수입니다.

const arr = [3, 5, 7, 9, 1];
const vis = new Set();
const ans = [];
for (let i of arr) {
  const cnt = arr.filter((x) => x === i).length;
  if (cnt > 1 && !vis.has(i)) {
    ans.push(cnt);
  }
  vis.add(i);
}
ans.length > 0 ? console.log(ans) : console.log([-1]);

// 방법 2: Map, forEach 이용
const arr2 = [1, 2, 3, 3, 3, 3, 4, 4];
const map = new Map();

arr2.forEach((x) => {
  if (map.has(x)) {
    map.set(x, map.get(x) + 1);
  } else {
    map.set(x, 1);
  }
});
const ans2 = [];

map.forEach((value) => {
  if (value > 1) ans2.push(value);
});

console.log(ans2);
