function solution(A: number, B: number): string {
  let result = "";

  while (A > 0 || B > 0) {
    if (A > B) {
      // Place two 'a's if possible
      if (A > 1) {
        result += "aa";
        A -= 2;
      } else {
        result += "a";
        A -= 1;
      }

      // Place one 'b' if available
      if (B > 0) {
        result += "b";
        B -= 1;
      }
    } else if (B > A) {
      // Place two 'b's if possible
      if (B > 1) {
        result += "bb";
        B -= 2;
      } else {
        result += "b";
        B -= 1;
      }

      // Place one 'a' if available
      if (A > 0) {
        result += "a";
        A -= 1;
      }
    } else {
      // If A == B, alternate them
      result += "ab";
      A -= 1;
      B -= 1;
    }
  }

  return result;
}
