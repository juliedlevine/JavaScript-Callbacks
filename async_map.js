var async = require('async');
var fs = require('fs');

var filenames = [
    '1.txt',
    '2.txt',
    '3.txt',
    '4.txt',
    '5.txt',
    '6.txt',
    '7.txt',
    '8.txt',
    '9.txt',
    '10.txt'
];

function transform(file, callback) {
    var text = 'Hello, world!';
    fs.writeFile(file, text, function(err) {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    }); // End write file
}

async.map(filenames, transform, function(err) {
    console.log('Wrote all the files.');
});
