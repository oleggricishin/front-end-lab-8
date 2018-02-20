function decypherPhrase(obj, someString) {
    var stringArray = someString.split("");
    var objValues = Object.values(obj);
    var objKeys = Object.keys(obj);
    var k;

    for (var i = 0; i < stringArray.length; i++) {
        k = 0;
        while (objValues[k]) {
            if (stringArray[i] === objValues[k]) {
                stringArray[i] = objKeys[k];
            }
            k++;
        }
    }
    var result = stringArray.join('');
    console.log(result);

}