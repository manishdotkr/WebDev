//Node Modules are used to perform tasks as required 

/*
File System Module-
1. We will be reading, writing , updating , deleting files from our script


*/

//1.

const fs = require('fs');


let content;

//read from file
content = fs.readFileSync('f1.txt');

// print from file
console.log('This is f1 data ->' + content);

//write in file(it delete prevous data and write new data)
fs.writeFileSync('f2.txt' , 'hello to f2')
fs.writeFileSync('f2.txt' , 'hello to f2 second time')

//append in file(make changes in previous file)
fs.appendFileSync('f2.txt' , '\nthis is second f2 data')

// delete a file
// fs.unlinkSync('f2.txt')


