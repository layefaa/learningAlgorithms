function binarySearch(list: Array<any>, value: any) {
  let lowestIndex = 0
  let highestIndex = list.length - 1

  while (lowestIndex <= highestIndex) {
    let midIndex = (lowestIndex + highestIndex) / 2
    console.log('midIndex ' + midIndex)
    console.log('lowestIndex ' + lowestIndex)
    console.log('highestIndex ' + highestIndex)
    let guess = list[Math.floor(midIndex)]
    if (guess === value) {
      return midIndex;
    } else if (guess < value) {
      lowestIndex = midIndex + 1
    } else {
      highestIndex = midIndex - 1
    }
  }

  return -1
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 8))