var fibb = [];

fibb[0] = 0;
fibb[1] = 1;
for (var i = 2; i <= 10; i++) {
    fibb[i] = fibb[i - 2] + fibb[i - 1];
    console.log(fibb[i]);
}