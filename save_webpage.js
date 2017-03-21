var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('URL: ', function(url) {

    rl.question('Save to file: ', function(file) {

        request.get(url, function(err, response, html) {
            if (err) {
                console.log(err.message);
                return;
            }

            // If no error from get request, do this
            fs.writeFile(file, html, function(err){
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Saved to file ' + file);
                rl.close();
            }); // End write file

        }); // End get request

    }); // End file question

}); // End URL question
