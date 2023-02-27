function calculateMinCost() {
  const value = document.getElementById('rope-lengths').value;
  const arr = value.split(',').map(Number);
  const n = arr.length;

  let pq = [];
  for (let i = 0; i < n; i++) {
    pq.push(arr[i]);
  }
  pq.sort(function (a, b) { return a - b; });

  let res = 0;
  while (pq.length > 1) {
    let first = pq.shift();
    let second = pq.shift();
    res += first + second;
    pq.push(first + second);
    pq.sort(function (a, b) { return a - b; });
  }

  document.getElementById('result').innerHTML = res;
}
