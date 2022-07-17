// bfs 전략

// 1. shift() 대신 pointer를 사용하여 시간복잡도 줄이기
function solution(maps) {
  const col = maps.length;
  const row = maps[0].length;

  let di = [-1, 1, 0, 0];
  let dj = [0, 0, -1, 1];
  // 2차원 배열 선언
  const dist = new Array(col).fill(0).map(() => new Array(row).fill(0));

  const q = [];
  q.push([0, 0]);
  dist[0][0] = 1;
  let pointer = 0; // pop() 수행할 위치
  while (pointer < q.length) {
    const [i, j] = q[pointer]; // pop
    pointer += 1; // pop 했으므로 pointer 이동
    for (let k = 0; k < 4; k++) {
      let [ni, nj] = [i + di[k], j + dj[k]];
      if (ni < 0 || ni >= col || nj < 0 || nj >= row) {
        continue;
      }
      if (dist[ni][nj] > 0 || maps[ni][nj] === 0) {
        continue;
      }
      q.push([ni, nj]);
      dist[ni][nj] = dist[i][j] + 1;
    }
  }
  const ans = dist[col - 1][row - 1];
  return ans > 0 ? ans : -1;
}

// 2. visited 배열선언
// 1차원
let vis = new Array(n + 1).fill(false);
// 2차원
const col = graph.length;
const row = graph.length;
let vis = new Array(col).fill().map(() => new Array(row).fill(false));

// 3. 인접리스트용 배열 선언
const nodeCount = 10;
let map = new Array(nodeCount).fill(0).map(() => []);
/*
[
  [], [], [], [], [],
  [], [], [], [], []
]
*/
