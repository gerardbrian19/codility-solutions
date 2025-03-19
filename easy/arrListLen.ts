function solution(A: number[]): number {
  // Implement your solution here
  let length = 0;
  let index = 0;

  while (index !== -1) {
    length++;
    index = A[index]; // Move to the next node
  }

  return length;
}
