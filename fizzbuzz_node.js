var fs = require('fs');
const log = "fizzbuzz.log";
var wrong = "Use Three Arguments, Amount, Fizz, Buzz: fizzbuzz_node.js 100 3 5"
function updateLog (msg) {
    fs.appendFile(log, msg, function(err) {
        if(err) {
            return console.log(err);
        }
    })
}

function calculateFizzBuzz (total, byFirst, bySecond) {

    updateLog(`Running FizzBuzz with ${total} ${byFirst} and ${bySecond}`);

    for (var i = 1; i < total; i++) {

        if (i % byFirst === 0) {
            updateLog('fizz');
        } else if (i % bySecond === 0) {
            updateLog('buzz');
        } else {
            updateLog(i);
        }
    }
}


if(typeof process.argv[4] == "undefined"){
    console.log(wrong)
}else{
    for (i = 2; i <= 4; i++ ){

        process.argv[i] = parseInt(process.argv[i])
    }
    if(typeof(process.argv[2])=="number" && 
       typeof(process.argv[3]) =="number" && 
       typeof(process.argv[4]) == "number"){

                calculateFizzBuzz(process.argv[2],process.argv[3],process.argv[4])
            }else{
                console.log(wrong)
            }

}
