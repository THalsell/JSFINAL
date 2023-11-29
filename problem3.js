function numOddValues(array) {
    return array.filter(value => value % 2 !== 0).length
}

console.log(numOddValues([5, 5, 5, 5]))