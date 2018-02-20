function forEach(a, func) {
    for (var i = 0; i < a.length; i++) {
        a[i] = func(a[i]);
    }
}
