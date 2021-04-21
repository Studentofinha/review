function sum(arr) {
    let even = [];
    let odd = [];
    let sumOdd = [];

    arr.reduce((a, v, i, ar) => {
        if (v % 2 === 0) {
            even.push(v);
        } else {
            odd.push(v);
        }
    })
    even = even.reduce((a, v) => a + v);
    odd = odd.reduce((a, v) => a + v);
    sumOdd.push(even, odd)
    return sumOdd
}

console.log(sum([0, 1, 2, 3, 4, 5]))