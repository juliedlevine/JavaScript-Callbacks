var async = require('async');
var fs = require('fs');
var gm = require('gm');
var path = 'img/';


function resize(image, callback) {
    gm(path + image).resize(240, 240).write(path + image, function(err) {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}


fs.readdir(path, function(err, images) {
    async.map(images, resize, function(err) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log('Resized all images');
    });
});
