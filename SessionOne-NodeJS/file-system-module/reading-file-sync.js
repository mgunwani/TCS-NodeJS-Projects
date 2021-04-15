
var fs = require('fs');

var data1 = fs.readFileSync('data-one.txt', 'utf-8');
console.log(data1);

var data2 = fs.readFileSync('data-two.txt', 'utf-8');
console.log(data2);

console.log('Finished Reading Files..!!');