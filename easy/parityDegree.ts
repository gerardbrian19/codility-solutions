function solution(N: number): number {
  // Implement your solution here
  let k = 0;

  while (N % 2 === 0) {
    N /= 2;
    k++;
  }

  return k;
}
