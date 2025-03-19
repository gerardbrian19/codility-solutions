class Tree {
  x: number;
  l: Tree | null;
  r: Tree | null;

  constructor(x: number = 0, l: Tree | null = null, r: Tree | null = null) {
    this.x = x;
    this.l = l;
    this.r = r;
  }
}

function solution(T: Tree | null): number {
  if (T === null) {
    return -1; // Conventionally, an empty tree has a height of -1
  }

  const leftHeight = solution(T.l);
  const rightHeight = solution(T.r);

  return Math.max(leftHeight, rightHeight) + 1;
}
