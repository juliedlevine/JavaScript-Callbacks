// function add(x, y, callback) {
//     var result = x + y;
//     callback(result);
// }

// add (2, 3, function(result) {
//     console.log('Result is ' + result);
// });


// function sum(numbers, callback) {
//     var result = numbers.reduce(function(a, b) {
//         return a + b;
//     }, 0);
//     callback(result);
// }
// sum([2, 3, 4], function(result) {
//     console.log('Result is ' + result);
// });


// function hello(callback) {
//     console.log('Hello, world!');
//     callback();
// }
// hello(function() {
//     console.log('Done saying hello.');
// });


// function add(x, y, callback) {
//     var result = x + y;
//     callback(result);
// }
// add (2, 3, function(result) {
//     console.log('The result is ' + result);
// });


// function subtract(x, y, callback) {
//     var result = x - y;
//     callback(result);
// }
// subtract(5, 2, function(result) {
//     console.log('The result is ' + result);
// });


// function greeting(person, callback) {
//     var greet = 'Hola, ' + person + '!';
//     callback(greet);
// }
// greeting('Julie', function(greet) {
//     console.log(greet);
// });


// function hello(callback) {
//     callback();
// }
// hello(function() {
//     console.log('Hello, world!');
// });


// function product(numbers, callback) {
//     var result = numbers.reduce(function(a, b) {
//         return a * b;
//     }, 1);
//     callback(result);
// }
// product([2, 3, 4], function(result) {
//     console.log('The result is ' + result);
// });


// function square(num, callback) {
//     var result = num * num;
//     callback(result);
// }
// square(3, function(result) {
//     console.log('The result is ' + result);
// });


// function delayedHello(callback) {
//     setTimeout(function() {
//         console.log('Hello, world!');
//         callback();
//     }, 1000);
// }
// delayedHello(function() {
//     console.log('Done saying hello.');
// });
// console.log('Called hello');


// function square(num, callback) {
//     var result = num * num;
//     callback(result);
// }
// square(5, function(result) {
//     return result;
// });



// var x = 4;
// var y = 3;
//
// function square(num, callback) {
//     var squaredN = num * num;
//     callback(squaredN);
// }
//
// square(x, function(squaredX) {
//     square(y, function(squaredY) {
//         var sum = squaredX + squaredY;
//         console.log('The sum of squares is: ' + sum);
//     });
// });

var x = 4;
var y = 3;

function square(num, callback) {
    setTimeout(function() {
        var squared = num * num;
        callback(squared);
    }, 1000);
}
function squareRoot(num, callback) {
    setTimeout(function() {
        var sqRooted = Math.sqrt(num);
        callback(sqRooted);
    }, 1000);
}
square(x, function(squaredX) {
    console.log('First step done, x squared is: ' + squaredX);
    square(y, function(squaredY) {
        console.log('Second step done, y squared is: ' + squaredY);
        var sum = squaredX + squaredY;
        squareRoot(sum, function(sqRooted) {
            console.log('Final step done, sqrt is: ' + sqRooted);
        });
    });
});
