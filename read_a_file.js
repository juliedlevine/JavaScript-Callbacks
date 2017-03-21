var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a file name: ', function(file) {
    fs.readFile(file, function(err, buffer) {
        if (err) {
            console.log(err.message);
            return;
        }
        var caps = buffer.toString().toUpperCase();
        console.log(caps);
    });
    rl.close();
});
