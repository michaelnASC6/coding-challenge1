// Here go the medium level challenges

//! IMPORTANT:
//! Create a repositary named coding-challenge1, then clone it in your
//! Documents folder. Create 3 folders inside the newly created folder,
//! Name them easy, medium and hard.
//! Create ONE .js file PER coding challenge inside the relevant folder, named after the challenge.
//! Copy the challlenge prompt and start your code after.
//===============================================

// Mini Maxi
/*
Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/
//===============================================
var testelements = [-2,3,4,2,5,6,8,24,10,100,101]

console.log(Math.max(...testelements));
console.log(Math.min(...testelements));



// Secret Society
/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names and returns the name of the secret society.
Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Notes
The secret society's name should be entirely uppercased.
*/
//===============================================

//isPalindrome

//Write a function that returns true if a lowercase string is a palindrome and false for otherwise

/*
Write a function that returns true if a lowercase string is a palindrome and false for otherwise
Parameter: 
str - a string
Return:
palindrome -  a boolean that is true if the string is a palindrome and false for otherwise.
const str = "hiih"
This string is a palindrome!
Look up the word palindrome in Google for more information.
Ex.)
const word = "hello"
const palindrome = isPalindrome(word);
console.log(palindrome);
/////Output to the console/////
false
function isPalindrome(str) {
    return palindrome;
}
Program Tests:
console.log(isPalindrome("no"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("qwertytrewq"));
console.log(isPalindrome("zxcvjklplkjvcxz"));
console.log(isPalindrome("_***_**_"));
console.log(isPalindrome("mirror__ _rorrim"));
console.log(isPalindrome("mirror_  _rorrim"));
*/