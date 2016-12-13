/**
 * Created by oluyemi on 12-Dec-16.
 */
// module

function myFunction(){
    console.log('function was called')
}

var myString = 'Our very first string!!!';

// to make the functions and variables in this file available in other files
module.exports.myFunction = myFunction;
module.exports.myString = myString;