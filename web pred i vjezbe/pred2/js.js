function findMax() {
    let x = -Infinity;
    for (var i = 0; i<arguments.length; i++) {
        if(arguments[i] > x) {
            x = arguments[i];
        }
    }
    return x;
}

function findSum() {
    let sum = 0;
    for (var i = 0; i<arguments.length; i++) {
        sum += i;
    }
    return sum;
}


findSum();

let numbers = [1,2,3,4];
console.log(numbers);
numbers.push(5);
console.log(numbers);
numbers.pop();
console.log(numbers);