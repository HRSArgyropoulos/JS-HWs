//Take two or more arrays and return a new array of unique values in the order of the original provided arrays. No duplicates in the same order

function uniteUnique(arr) {
    let genArray = [];
    for (const array of arguments) {
        genArray.push(...array);
    }
    return genArray.reduce(function (arr, item) {
        if (!arr.includes(item)) arr.push(item);
        return arr;
    }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);