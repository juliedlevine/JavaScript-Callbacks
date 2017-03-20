function add(x, y, callback) {
    var answer = callback(x, y);
    console.log('The sum is ' + answer);
}
function sumNums(x, y) {
    return x + y;
}
// add(2, 3, sumNums);



function product(numbers, callback) {
    var answer = callback(numbers);
    console.log('The product is ' + answer);
}
function reduceNums(numbers) {
    return numbers.reduce(function(a, b) {
        return a * b;
    }, 1);
}
// product([2, 5, 2], reduceNums);



function square(num, callback) {
    var answer = callback(num);
    console.log('The square is ' + answer);
}
function squareNum(num) {
    return num * num;
}
// square(5, squareNum);
