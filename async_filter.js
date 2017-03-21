var async = require('async');
var fs = require('fs');
var gm = require('gm');

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

function checkForFile(fileToCheck, callback) {
    fs.access(fileToCheck, function(err) {
        if (err) {
            callback(null, false);
        } else {
            callback(null, true);
        }
    });
}

async.filter(filenames, checkForFile, function(err, existingFiles) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('The files that exist in the directory are ' + existingFiles);
});
