var a, b, c, num1, num2, num3, p;
var s, type;

num1 = prompt("Enter first side");
num2 = prompt("Enter second side");
num3 = prompt("Enter third side");
a = +num1;
b = +num2;
c = +num3;

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log('Incorrect data');
} else if (a >= b + c || b >= a + c || c >= b + a || a <= 0 || b <= 0 || c <= 0) {
    console.log('Incorrect data');
} else {
    p = (a + b + c) / 2;
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
        type = "Right";
    } else if (a == b && b == c) {
        type = "Equilateral";
    } else if (a == b || b == c || a == c) {
        type = "Isosceles";
    } else {
        type = "Scalene";
    }
    console.log("Type of triangle is " + type + " triangle and square is " + +s.toFixed(2));
}

