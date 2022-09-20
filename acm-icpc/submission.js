// 여러 줄 입력
// 백준 제출 때는 input 링크를 /dev/stdin 로 설정
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

// 정점의 개수, 간선의 개수, 탐색을 시작할 정점 번호
const [n, m, v] = numbers[0].map((x) => parseInt(x));

let li = new Array(n + 1).fill(0).map(() => []);

for (let i = 1; i < m + 1; i++) {
  const [a, b] = numbers[i].map((x) => parseInt(x));

  li[a].push(b);
  li[b].push(a);
}

li.map((edge) => edge.sort((a, b) => a - b));

let vis = new Array(n + 1).fill(false);
let print = [];
// dfs
function dfs(v, vis, print) {
  vis[v] = true;
  print.push(v);
  for (let nt of li[v]) {
    if (!vis[nt]) {
      dfs(nt, vis, print);
    }
  }
}
dfs(v, vis, print);
console.log(print.join(' '));

vis = new Array(n + 1).fill(false);
print = [];
// bfs
q = [];
q.push(v);
vis[v] = true;
print.push(v);
while (q.length) {
  let now = q.shift();
  for (let nt of li[now]) {
    if (!vis[nt]) {
      q.push(nt);
      vis[nt] = true;
      print.push(nt);
    }
  }
}
console.log(print.join(' '));
