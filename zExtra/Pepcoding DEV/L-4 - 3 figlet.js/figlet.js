//figlet module is use to make terminal beautiful

var figlet = require('figlet');

// figlet('A k h i l', function(err, data) {
figlet('hello world', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});