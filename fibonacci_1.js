//////////////////////////////////////////////////
// SUM OF THE GIVEN FIBONACCI NUMBERS

function fibbonacci(n) {
    return n <= 1 ? n : fibbonacci(n - 1) + fibbonacci(n - 2);
}

console.log(fibbonacci(12));