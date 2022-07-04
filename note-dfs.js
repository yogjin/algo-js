// dfs 전략

// [ [], [], [], ... ]
// new Array(n).fill([])로 선언하지 말 것. 주소값 같은걸로 선언됨.
let li = new Array(n + 1).fill(0).map(() => []);

// 연결리스트로 vertex, edge 기록
for (let i = 1; i < m + 1; i++) {
  const [a, b] = numbers[i].map((x) => parseInt(x));

  li[a].push(b);
  li[b].push(a);
}

let vis = new Array(n + 1).fill(false); // visited 배열
let print = [];

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
