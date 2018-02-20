function getFilteredArray(a, func) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i];
    }
    forEach(b, func);
    for (var i = 0; i < b.length; i++) {
        if (b[i] === false) {
            a.splice(i, 1);
        }
    }
    return a;
}

function predicateFunction(num) {
    return num > 3;
}
