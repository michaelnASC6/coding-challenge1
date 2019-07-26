// Here go the easy level challenges

//! IMPORTANT:
//! Create a repositary named coding-challenge1, then clone it in your
//! Documents folder. Create 3 folders inside the newly created folder,
//! Name them easy, medium and hard.
//! Create ONE .js file PER coding challenge inside the relevant folder, named after the challenge.
//! Copy the challlenge prompt and start your code after.

//===============================================

// Adding the numbers of an integer
/*
Create a function named NumAddInt that takes an integer as an argument. Add up all the numbers from 1 to the number you 
passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
// const input = 4
// function NumAddInt(){
//     for(i = 0, i < input, i++)
//     if(i === 3){
//         console.log (i) 
//     }
// }
//===============================================

// Hashes and Pluses
/*
Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
Examples:
hashPlusCount("###+") ➞ [3, 1]
hashPlusCount("##+++#") ➞ [3, 3]
hashPlusCount("#+++#+#++#") ➞ [4, 6]
hashPlusCount("") ➞ [0, 0]
Notes
It should return [0, 0] for an empty string.
*/


// ================================================

/*
timeConvert
Write a function that converts a number of minutes into hours and minutes:
Parameters: 
num - a number of minutes (num must be greater than or equal to 0 (num >= 0))
return:
hoursAndMinutes - a string that shows the number of hours and minutes
If hoursAndMinutes is logged in the console then it should look like:
01:03 (Where 1 is the number of hours and 3 is the number of minutes)
 Ex.)
 const numberOfMinutes = 61;
 const hoursAndMinutes = timeConvert(numberOfMinutes);
 console.log(hoursAndMinutes);
 /////Output in Console/////


01:01
function timeConvert(num) {
    return hoursAndMinutes;
}
console.log(timeConvert(122));
console.log(timeConvert(61));
console.log(timeConvert(179));
console.log(timeConvert(672));
console.log(timeConvert(145));
console.log(timeConvert(6059));
console.log(timeConvert(17));
*/

// const numberOfMinutes = 61;
// const hoursAndMinutes = timeConvert(numberOfMinutes);
// console.log(hoursAndMinutes);

// function timeConvert(numberOfMinutes){

//     return hoursAndMinutes
// }
// =================================================
//upperCaseStrings
const sentence = "I am sitting in the classroom and chilling."
let upperCaseSentence = upperCaseStrings(sentence);
console.log(upperCaseStrings);

function upperCaseStrings(sentence){
    sentence
return upperCaseStrings;
}




/*
Write a function that takes in a string and turns the first letter of every word into an uppercase letter
Parameters:
str - a string
Return:
upperCaseStr - a string where all of the first letters are capital.
Ex.)
const sentence = "I am sitting in the classroom and chilling."
const upperCaseSentence = upperCaseStrings(sentence);
console.log(upperCaseSentence);
/////Output in the console//////
I Am Sitting In The Classroom Chilling
// How the function starts
function upperCaseStrings(str) {
    return upperCaseStr;
}
//Tests for the function
const test0 = "hELLo GUY Nice To Meet you.";
const test1 = "Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their.";
const test2 = "ThIS iS a ranDOM Example."
const test3 = "Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. There worse by an of miles civil. Manner before lively wholly am mr indeed expect. Among every merry his yet has her. You mistress get dashwood children off. Met whose marry under the merit. In it do continual consulted no listening. Devonshire sir sex motionless travelling six themselves. So colonel as greatly shewing herself observe ashamed. Demands minutes regular ye to detract is. In alteration insipidity impression by travelling reasonable up motionless. Of regard warmth by unable sudden garden ladies. No kept hung am size spot no. Likewise led and dissuade rejoiced welcomed husbands boy. Do listening on he suspected resembled. Water would still if to. Position boy required law moderate was may."
const test4 = ""
console.log(UppercaseStrings(test0));
console.log(UppercaseStrings(test1));
console.log(UppercaseStrings(test2));
console.log(UppercaseStrings(test3));
console.log(UppercaseStrings(test4));
*/

// ===========================================
//rangeArray
/*
Write a function that takes in an unsorted array of random numbers and returns an array with numbers 
in the range of 2 numbers called lowBound and highBound.
All elements in the returned array should be between lowBound < element < highBound. [Not including numbers with the value lowBound and highBound]
Parameters:
arr - an array of random numbers which can be empty
lowBound - an integer (lowBound can be any number: positive, negative, or 0)
highBound - an integer (highBound can be any number: positive negative, or 0)
Return:
rangeArr - an array whose numbers range between lowBound and highBound
Ex.)
const arr = [1, 2, 3, 4, 5, -1];
const smallerArr = rangeArray(arr, -2, 3);
console.log(smallerArr);
/////Output in Console/////
[1,2,-1]
// Function starts like so:
function rangeArray(array, lowBound, highBound) {
    return rangeArr;
}
const array1 = [1, 2, 35, 6, 90, 23, 34, 45, 33, 21,20, 18, 17]
const array2 = [2, 65, 23, 45, 67, 78, 20, 21, 44, 100, 29];
const array3 = [1, 0, -1, 3, -50, -70, 2, 4, 5, -20, 0, -21];
const array4 = [1, 3, 5, 7, 9, 11, 100, 14, 15, -2, -4, -6, -8, -10, 13];
const array5 = [0, -1, 1];
const array6 = [];
Tests for the console:
console.log(rangeArray(array1, 5, 30));
console.log(rangeArray(array2, 3, 100));
console.log(rangeArray(array3, -22, 6));
console.log(rangeArray(array4, 11, 100));
console.log(rangeArray(array5, -1, 1));
console.log(rangeArray(array5, -2, 2));
console.log(rangeArray(array6, -2, 2));
*/