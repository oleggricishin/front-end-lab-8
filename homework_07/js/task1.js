var a = "[~]";
var b = "   ";

var n = prompt("Enter number N from this range 0<N<=20", "0");
if (isNaN(n) || n <= 0 || n > 20 || n % 1 != 0) {
    console.error('Incorrect!');
} else {
    for (var i = 0; i < n; i++) {
        console.log(b.repeat(n - i - 1) + a.repeat(i * 2 + 1) + b.repeat(n - i - 1));
    }
}
