function add(a,b)
{
    console.log('Sum of',a,"and",b,'is:',a+b)
}

function sub(a,b)
{
    console.log('Subtraction of',a,"and",b,'is:',a-b)
}

function mul(a,b)
{
    console.log('Multiplication of',a,"and",b,'is:',a*b)
}

function div(a,b)
{
    console.log('Division of',a,"and",b,'is:',a/b)
}

// add(2,3)
// sub(5,4)
// mul(2,3)
// div(10,5)

module.exports = {  //making keys to use the function outside the current file
    addition : add,
    subtraction : sub,
    multipication : mul,
    division : div
}
