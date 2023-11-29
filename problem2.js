function oddIndices(array) {
    if (array.length <= 1) {
        return [];
    }

    let result = array.filter(function (value, index) {
        return index % 2 !== 0;
    });

    return result;
}
console.log(oddIndices([100, 101, 102]));