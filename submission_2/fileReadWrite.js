//2.Read and write file

const fs = require('fs');

fs.writeFileSync('example.txt', 'This is a sample text.');

const data = fs.readFileSync('example.txt', 'utf-8');
console.log("File Content:", data);
