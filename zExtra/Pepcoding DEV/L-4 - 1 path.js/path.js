const path = require('path')
const { execPath } = require('process')

let ext = path.extname('C:\Users\Manish\Desktop\codes\DEV\Class 4(Node Modules)\class 5\class 5\f1.txt')
//extname is a function that will get the extension from the path of a file
console.log('extension -> ' , ext)

let basename = path.basename('C:\Users\Manish\Desktop\codes\DEV\Class 4(Node Modules)\class 5\class 5\f1.txt')
//extname is a function that will get the actual name of the file or a folder from its path
console.log('basename -> ', basename)


console.log(__dirname)//gets the path of the current Directory you are in
console.log(__filename)//gets you the path of the current file you are in
// console.log('basename -> ', basename)