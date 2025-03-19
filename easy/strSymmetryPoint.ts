function solution(S: string): number {
  // Implement your solution here
  for (let i = 0; i < S.length; i++) {
    const left = S.substring(0, i);
    const right = S.substring(i + 1);

    if (left.split("").reverse().join("") === right) {
      return i;
    }
  }

  return -1;
}
