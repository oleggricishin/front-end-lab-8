var charactersMap = {a: 'o', c: 'd', t: 'g'};

function cypherPhrase(obj, someString) {
    var stringArray = someString.split("");
    for (var i = 0; i < stringArray.length; i++) {
        if (obj.hasOwnProperty(stringArray[i])) {
            stringArray[i] = obj[stringArray[i]];
        }
    }
    var result = stringArray.join('');
    console.log(result);
}