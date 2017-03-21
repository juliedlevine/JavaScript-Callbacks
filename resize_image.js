var fs = require('fs');
var gm = require('gm');
var request = require('request');

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

request.get(options, function(err, response, imageData) {
    if (err) {
        console.log(err.message);
        return;
    }

    // If no error from get request, write image file to new file
    var file = 'jslogo.png';
    fs.writeFile(file, imageData, function(err){
        if (err) {
            console.log(err.message);
            return;
        }

        // If no error from write file, let user know file was saved and resize
        console.log('Saved to file ' + file);
        gm(file).resize(240, 240).write('thumbnail.png', function(err) {
            if (err) {
                console.log(err.message);
                return;
            }

            // If no error from resize let user know it worked
            console.log('It worked!');

        }); // End file resize

    }); // End write file

}); // End get request
