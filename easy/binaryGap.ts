function solution(N: number): number {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;
  let counting = false;

  for (const bit of binary) {
    if (bit === "1") {
      if (counting) {
        maxGap = Math.max(maxGap, currentGap);
      }
      counting = true;
      currentGap = 0;
    } else if (counting) {
      currentGap++;
    }
  }

  return maxGap;
}
