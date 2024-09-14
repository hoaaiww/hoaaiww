var tab = [1, 4, 77, 312, 444, 1350, 234, 97, 14, 532, 885]

function legnagyobbNegyzet(sec) {
    var legnagyobb = 0;

    for (var i = 0; i < sec.length; i++) {
        if (legnagyobb < sec[i]) {
            legnagyobb = sec[i]
        }
    }

    console.log(legnagyobb, Math.pow(legnagyobb, 2))
}

function tombberakas(a, b) {
    var tomb = []

    for (var i = 0; i < a; i++) {
        tomb[i] = b
    }

    console.log(tomb)
}

legnagyobbNegyzet(tab)

tombberakas(5, 10)