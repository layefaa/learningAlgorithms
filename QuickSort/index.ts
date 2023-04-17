function quickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const less = array.slice(1).filter((item) => item <= pivot);
    const greater = array.slice(1).filter((item) => item > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

const arr: number[] = [1,6,4,8,0,2,6,9,7]

console.log(quickSort(arr))
