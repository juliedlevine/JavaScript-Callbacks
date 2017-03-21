var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', function(inputFile) {

    rl.question('Output file ', function(outputFile) {

        fs.readFile(inputFile, function(err, buffer) {
            if (err) {
                console.log(err.message);
                return;
            }
            var caps = buffer.toString().toUpperCase();

            fs.writeFile(outputFile, caps, function(err) {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Wrote to file ' + outputFile + '.');
                rl.close();
            }); // End write file

        }); // End read file

    }); // End readfile output question

}); // End readfile input question
