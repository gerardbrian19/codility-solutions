function solution(A: number[]): number {
  // Implement your solution here
  let unpaired = 0;

  for (const num of A) {
    unpaired ^= num; // XOR each number
  }

  return unpaired;
}
