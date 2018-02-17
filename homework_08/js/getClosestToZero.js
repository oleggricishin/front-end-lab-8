function getClosestToZero() {
    var closestToZero = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(closestToZero)) {
            closestToZero = arguments[i];
        } else {
            i++;
        }
    }
    return closestToZero;
}