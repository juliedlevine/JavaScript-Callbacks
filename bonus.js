function double(arr, counter, callback) {
    if (counter <= arr.length - 1) {
        var newValue = arr[counter] * 2;
        arr[counter] = newValue;
        counter++;
        double(arr, counter, callback);
    } else {
        callback();
    }
}

var numbers = [1, 2, 3, 5];
counter = 0;
double(numbers, counter, function() {
    console.log('Done. New values are:');
    console.log(numbers);
});
