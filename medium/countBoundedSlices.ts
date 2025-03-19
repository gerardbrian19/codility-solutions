// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K: number, A: number[]): number {
  // Implement your solution here
  let count = 0;
  let left = 0;

  const minDeque: number[] = []; // Stores indices of minimum elements
  const maxDeque: number[] = []; // Stores indices of maximum elements

  for (let right = 0; right < A.length; right++) {
    // Maintain minDeque (values in increasing order)
    while (minDeque.length > 0 && A[minDeque[minDeque.length - 1]] > A[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    // Maintain maxDeque (values in decreasing order)
    while (maxDeque.length > 0 && A[maxDeque[maxDeque.length - 1]] < A[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // Ensure the slice is valid
    while (A[maxDeque[0]] - A[minDeque[0]] > K) {
      left++; // Move left pointer to shrink the window

      // Remove invalid indices
      if (minDeque[0] < left) minDeque.shift();
      if (maxDeque[0] < left) maxDeque.shift();
    }

    // Count all subarrays ending at 'right'
    count += right - left + 1;

    // Limit result to 1,000,000,000
    if (count > 1_000_000_000) return 1_000_000_000;
  }

  return count;
}
