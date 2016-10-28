const log = document.getElementById('log');

function updateLog (msg) {
    log.innerHTML += '<pre> > ' + msg + '</pre>';
}

function calculateFizzBuzz (total, byFirst, bySecond) {

    updateLog(`Running FizzBuzz with ${total} ${byFirst} and ${bySecond}`);

    for (var i = 1; i < total; i++) {

        if (i % byFirst === 0) {
            updateLog('fizz');
        } else if (i % bySecond === 0) {
            updateLog('buzz');
        } else if (i % third === 0) {
            updateLog('fizzbuzz');
        } else {
            updateLog(i);
        }
    }
}


calculateFizzBuzz(100, 3, 5)
