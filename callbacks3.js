function f(x, y, callback) {
    var result = x + y;
    callback(result);
}
// f(1, 2, function(z) {
//     console.log("result is " + z);
// });


function g(x, y, bool, callback) {
    var result = 'The numbers ' + x + ' and ' + y + ' are ' + bool;
    callback(result);
}
// g(4.5, 0.2, true, function(string) {
//     console.log(string);
// });


function convert(arr, callback) {
    var result = 'Heres the array ' + arr;
    callback(result);
}
// convert([1, 2, 3], function(string){
//     console.log(string);
// });


function kick(object, callback) {
    var kicked = object + ' has been kicked.';
    callback(kicked);
}
var can = 'can';
// kick(can, function(kicked) {
//     console.log(kicked);
// });


function distance(start, finish, callback) {
    var total = finish - start;
    callback(total);
}
// distance(2, 12, function(miles) {
//     console.log('I ran ' + miles + ' miles today.');
// });


function allCaps(word, callback) {
    var title = word.toUpperCase();
    callback(title);
}
// allCaps('hello', function(title) {
//     console.log('Capitalized word is: ' + title);
// });


function shampoo(animal, callback) {
    callback();
}
var dog = 'dog';
shampoo(dog, function() {
    var clean = dog + ' is all clean now.';
    console.log(clean);
});
