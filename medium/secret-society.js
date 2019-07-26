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

function societyName(arr){
//     let result=[];

//     for(name of arr){
//         result.push(name[0]);
//     }

// return result.sort().join("");

return arr
.map(name => name[0])
.sort()
.join("");  
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));s