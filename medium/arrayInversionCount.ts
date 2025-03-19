// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
  if (A.length < 2) return 0;

  let inversionCount = 0;

  function mergeSort(arr: number[], left: number, right: number): number[] {
    if (left >= right) return [arr[left]];

    const mid = Math.floor((left + right) / 2);
    const leftSorted = mergeSort(arr, left, mid);
    const rightSorted = mergeSort(arr, mid + 1, right);

    return merge(leftSorted, rightSorted);
  }

  function merge(leftArr: number[], rightArr: number[]): number[] {
    let i = 0,
      j = 0;
    const merged: number[] = [];

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        merged.push(leftArr[i++]);
      } else {
        merged.push(rightArr[j++]);
        inversionCount += leftArr.length - i; // Count inversions
        if (inversionCount > 1_000_000_000) return [];
      }
    }

    while (i < leftArr.length) merged.push(leftArr[i++]);
    while (j < rightArr.length) merged.push(rightArr[j++]);

    return merged;
  }

  mergeSort(A, 0, A.length - 1);

  return inversionCount > 1_000_000_000 ? -1 : inversionCount;
}
