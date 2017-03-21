var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnail = 'js-logo-small.png';
var options = {
    url: url,
    encoding: null
};

function downloadAndCreateThumbnail(imageUrl, filename, thumbnailFilename, callback) {
    request.get(options, function(err, response, imageData) {
        if (err) {
            callback(err);
            return;
        }
        // If no error from get request, write image file to new file
        fs.writeFile(filename, imageData, function(err) {
            if (err) {
                callback(err);
                return;
            }
            // If no error from write file, let user know file was saved and resize
            gm(filename).resize(240, 240).write(thumbnail, function(err) {
                if (err) {
                    callback(err);
                    return;
                }
                // If no error from resize let user know it worked
                callback(null);
            }); // End file resize
        }); // End write file
    }); // End get request
} // End function definition


downloadAndCreateThumbnail(url, filename, thumbnail, function(err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked. Thumbnail saved to ' + thumbnail);
});
