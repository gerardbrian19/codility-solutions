function solution(A: number[], K: number): number[] {
  // Implement your solution here
  const N = A.length;
  if (N === 0 || K % N === 0) return A; // Handle edge cases

  K = K % N; // Optimize rotations

  return [...A.slice(-K), ...A.slice(0, -K)]; // Rotate efficiently
}
