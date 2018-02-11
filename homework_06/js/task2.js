var euro = 33.2324,
    dolar = 27.1240,
    hruivnaUsd, hruivnaEuro, a, b, data1, data2;

a = prompt("Enter amount of EURO", "0");
data1 = +a;
b = prompt("Enter amount of USD", "0");
data2 = +b;

if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
    console.log("Incorrect data");
} else {
    hruivnaEuro = data1 * euro;
    hruivnaUsd = data2 * dolar;
    console.log(data1 + " euros are equal " + +hruivnaEuro.toFixed(2) + " UAH, " + data2 + " dollars are equal " + +hruivnaUsd.toFixed(2) + " UAH, one euro is equal " + +(euro / dolar).toFixed(2) + " dollars.");
}
