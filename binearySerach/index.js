function binarySearch(list, value) {
    var lowestIndex = 0;
    var highestIndex = list.length - 1;
    while (lowestIndex <= highestIndex) {
        var midIndex = (lowestIndex + highestIndex) / 2;
        console.log('midIndex ' + midIndex);
        console.log('lowestIndex ' + lowestIndex);
        console.log('highestIndex ' + highestIndex);
        var guess = list[Math.floor(midIndex)];
        if (guess === value) {
            return midIndex;
        }
        else if (guess < value) {
            lowestIndex = midIndex + 1;
        }
        else {
            highestIndex = midIndex - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 8));
