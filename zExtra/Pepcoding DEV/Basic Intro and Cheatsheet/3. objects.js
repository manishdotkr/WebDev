//Objects in JavaScript
// let obj = {}

let IronMan = {
    FirstName : 'Tony',
    LastName : 'Stark',
    Friends : [ 'Spiderman' , 'HawkEye' , 'Black Widow'],
    isAvenger : true,
    Age : 50,
    Address : {
        State : 'New York',
        Country : 'America',
    },

    Sayhi : function fn(){
        console.log('IronMan says hi')
    }

}

console.log(IronMan)


//............................................
// //Dot Notation
// console.log(IronMan.FirstName)

// //Bracket Notation
// console.log(IronMan['Age'])

//............................................

// //Calling the function variable
// IronMan.Sayhi()

//............................................

// //Update object
// console.log(IronMan.isAvenger)
// IronMan.isAvenger = 'false'
// console.log(IronMan.isAvenger

//............................................

// //Create something inside Object
// IronMan.Movies = ['Ironman 1' , 'The hulk']
// console.log(IronMan)

//............................................

// // Delete a property
// delete IronMan.Age
// console.log(IronMan)

//............................................

//Special loop (For in loop)

// for(let key in IronMan)
// {
    //     console.log("key->" , key , "Value ->" , IronMan[key])
    // }
    
//............................................
    
    
