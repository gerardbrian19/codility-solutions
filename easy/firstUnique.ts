function solution(A: number[]): number {
  // Implement your solution here
  const countMap = new Map<number, number>();

  // Count occurrences of each number
  for (const num of A) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Find the first unique number by iterating through the array
  for (const num of A) {
    if (countMap.get(num) === 1) {
      return num;
    }
  }

  return -1; // Return -1 if no unique number exists
}
