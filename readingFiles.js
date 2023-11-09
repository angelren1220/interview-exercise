// What is the output (and the order of output) we expect to see?

// Assume data1.txt contains 500,000 characters and data2.txt contains only 20.

const fs = require('fs');

const printSize = function(err, data) {
  console.log("Chars: ", data.length);
};

const read = function(fp) {
  fs.readFile(fp, 'utf8', printSize);
  console.log("readFile called!");
};

console.log("Reading files...");

read('./data1.txt');
console.log("After read(data1)");

read('./data2.txt');
console.log("After read(data2)");

// Output:
// Reading files...
// readFile called!
// After read(data1)
// readFile called!
// After read(data2)
// Chars:  20
// Chars:  500000
