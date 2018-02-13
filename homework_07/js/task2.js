var atempts = 3,
    prize = 0,
    prizeAtempt = 10,
    number,
    n = 5, k = 3;

var game = confirm("Do you want to play a game?");
if (game) {
    var number1 = Math.floor(Math.random() * (n + 1));
    var i = 2;
    number = prompt("Enter a number from 0 to " + n + "\n" +
        "Atempts left: " + atempts + "\n" +
        "Total prize: " + prize + "$\n" +
        "Possible prize on current attempt: " + prizeAtempt + "$");
    while (number) {
        if (number == number1) {
            prize += prizeAtempt;
            atempts = 3;
            prizeAtempt = 10;
            var game2 = confirm("YOU HAVE GUESSED NUMBER!!! Do you want to continue?");
            if (game2) {
                n = n * 2;
                prizeAtempt = prizeAtempt * k;
                k = k * 3;
                number1 = Math.floor(Math.random() * (n + 1));
            } else {
                console.log("Thank you for a game. Your prize is: " + prize + "$");
                var game3 = confirm("Do you want to play again?");
                if (game3) {
                    atempts = 3;
                    prize = 0;
                    prizeAtempt = 10;
                    n = 5;
                    k = 3;
                    number1 = Math.floor(Math.random() * (n + 1));
                } else {
                    break;
                }
            }
            number = prompt("Enter a number from 0 to " + n + "\n" +
                "Atempts left: " + atempts + "\n" +
                "Total prize: " + prize + "$\n" +
                "Possible prize on current attempt: " + prizeAtempt + "$");
        } else {
            atempts = atempts - 1;
            prizeAtempt = Math.floor(prizeAtempt / 2);
            if (atempts == 0) {
                console.log("Thank you for a game. Your prize is: " + prize + "$");
                var game1 = confirm("Do you want to play again?");
                if (game1) {
                    atempts = 3;
                    prize = 0;
                    prizeAtempt = 10;
                    n = 5;
                    k = 3;
                    number1 = Math.floor(Math.random() * (n + 1));
                } else {
                    break;
                }
            }
            number = prompt("Enter a number from 0 to " + n + "\n" +
                "Atempts left: " + atempts + "\n" +
                "Total prize: " + prize + "$\n" +
                "Possible prize on current attempt: " + prizeAtempt + "$");
        }
    }

} else {
    console.log("You did not become a millionaire");
}


