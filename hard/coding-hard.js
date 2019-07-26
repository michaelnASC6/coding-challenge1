// Convenience store
/*
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able 
to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels 
and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01
*/

// let quarter = 0.25
// let dime = 0.10
// let nickel = 0.05
// let penny = 0.01

// function changeEnough([]){

    
// }

//===============================================

// Remove Duplicates
/*
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
Examples
removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
removeDups([1, 0, 1, 0]) ➞ [1, 0]
removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
Notes
Test cases contain arrays with both strings and numbers.
Case sensitive.
*/

//================================================
/*
isMazeSolvable
Write a function called isMazeSolvable() which returns a boolean 
stating true if the maze is solvable or false if not.
Parameters:
maze- an array (which is the maze)  containing numbers [None of these numbers will be 0]
startIndex - a number indicating where to start in the array [The range of this value is from 0 < index < maze.length]
Return:
isSolved - a boolean determining if the maze is solvable.
This is an example maze:
const maze1 = [1, 2, -2, 3, 3, 1 -2]
const startIndex = 0;
In the maze the computer will start at maze1's index 0 and next travel to the index
where we add the currentIndex (which equals 0 )by the element inside.
For example,
The computer starts at index 0 and the value is 1. 
The computer then goes to index 1 and the value is 2.
The computer then goes to index 3 where the value is 3. 
The computer then goes to index 6 where the value is -2.
The computer then goes to index 4 where the value is 3.
The computer finally leaves the maze because it would have gone to index 7 and there is no index 7.
So if we called 
isMazeSolvable(maze1, startIndex);
then in the console it would return true.
Now how the problem is set up the maze should always be solvable unless the computer cannot
exit the maze. The main question you need to ask is when does the computer not exit the maze?
Also, you can only exit the maze to the right meaning you should not deal with negative indexes (left side of array).
Hint: When does the computer get in an infinite loop when traveling through the maze?
function isMazeSolvable(maze, startIndex) {
    return isSolved;
}
const Maze1 = [1,3,5,2,-2,3,6,1];
const Maze2 = [1, -1];
const Maze3 = [1,3,4,2,-1,-3, 2, 3, 1, -2];
const Maze4 = [1, 4, 2, -1, -3, -2];
const Maze5 = [5, -1, 1, -2, 3, 3, -4, -1];
const Maze6 = [6, -1, 1, -2, 1, -3, -2];
const Maze7 = [3, -1, 1, -2];
console.log(isMazeSolvable(Maze1, 0));
console.log(isMazeSolvable(Maze2, 0));
console.log(isMazeSolvable(Maze3, 0));
console.log(isMazeSolvable(Maze4, 2));
console.log(isMazeSolvable(Maze5, 4));
console.log(isMazeSolvable(Maze6, 6));
console.log(isMazeSolvable(Maze7, 2));
*/

//=============================================
//code Breaker
/*
My friend likes codes and he constantly tries to communicate with me through secret messages.
At first it was fun, but now it's too much to handle.
To create the secret message, my friend gives me a number and a string, wants me to convert it to a numberKey
and then look at a sheet where the numberKey will correspond to a specific phrase.
The problem is that I don't know how to convert the string and number into a numberKey.
He told me I need to store all of the ASCII character codes from each character in the string
and choose the code that is the highest number that is divisible by the number given to me with the string.
He tells me I need to use Javascript to figure it out so that's why I asked you for help.
He told me to write a function called codeBreaker that takes parameters code (the string) and num (the number)
and outputs the numberKey (a number).
Parameters:
code - a string
num - a number (num has to be greater than 0)
Return
numberKey- a number (should be one of the character codes from a character from the string parameter code)
Information about UNICODE character codes: https://www.w3schools.com/charsets/ref_html_utf8.asp
Also check out this function to find UNICODE character codes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Ex.)
const str = "hi everybody";
const num = 8;
const numberKey = codeBreaker(str, num);
console.log(numberKey);
////Output in console/////
104
//////Reasoning/////
[Note 104 is the UNICODE character code of the letter h and it is also divisible by 8
Try dividing it by 8! In this case it is the highest character code in the string that is divisible by 8.]
function codeBreaker(code, num) {
   return numberKey
}
Program Tests:
console.log(codeBreaker("hi everybody", 8));
console.log(codeBreaker("hi my name is Donnie Sparks", 2));
console.log(codeBreaker("Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted disposing engrossed. Tall snug do of till on easy. Form not calm new fail.", 7));
console.log(codeBreaker("I'm telling you a secret message!!", 5));
console.log(codeBreaker("Now eldest New tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am. Entire any had depend and figure winter. Change stairs and men likely wisdom new happen piqued six. Now taken him timed sex world get. Enjoyed married an feeling delight pursuit as offered. As admire roused length likely played pretty to no. Means had joy miles her merry solid order. She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it. Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman. Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill. ", 13))
console.log(codeBreaker("Ans barbieren tal spurenden gewandert ins geschickt hemdarmel schreiben. Regnete wimpern se fadelte kleinen ri. Meisten stopfen beinahe braunen am se. Mu stunden beinahe filzhut konntet im er. Aufmerksam ein und dammerigen dazwischen todesfalle hab. Halboffene aufgespart vorsichtig tat frohlicher tag vom. Langweilig te marktplatz neidgefuhl ordentlich hausdacher am zu messingnen. Dus hoffnungen ist aneinander federdecke. Gegangen brauchte so zitterte gegessen weiblein leichter um. Dabei boden licht statt damit je es. Gesprachig je grashalden so ja besonderes dachkammer. Gerbers die kleines gelernt hochmut ein spuckte gedeckt gro. Launischen bilderbuch tat hab verstehsts auf. Nobel leise sogar sah war enden einen essen. Erzahlen nun gefunden hinabsah wer sparlich gru sichtbar geh. Je mu ebenso loffel te morgen beugte fallen kirche. Spater ja setzte heraus la regnen gefuhl. Wort ist gut des dann lass. Spurt jeder dafur heute mi em. Sa vormittags zu federdecke getunchten bodenlosen hausdacher ku ordentlich. Bei achthausen vergnugter ort neidgefuhl. Daran jeder so muhle he roten waren feuer. Hubsche vor man fingern dachern ihn bereits. Es muhe ku so acht fein haar rand. Vergesset schnupfen in unendlich zu schnellen. Gro schien art sie burste feucht hob fertig spinat zeitig. Sohn la auch lied heut an brot ri er. Achtzehn gelernte gerechte gro als gesteckt verlogen dir sie verwirrt. Wollen wo madele ja willst. Ist tat gro burste stelle messer gefiel. Wichszeug schreibet gewandert im zu mitkommen schwachen. Kartoffeln er te an wohlgefuhl neidgefuhl augenblick geschwatzt du. Essen es en ob wovon wo durch sehen. Harmlos ein wie einfach spielen barbele ort auffiel. Fu en leuchtete du verwegene nachgehen la kindliche zierliche. Pa erschrak hinunter zwischen nirgends zu en ratloses. Die fur herde abend als gehen adieu danke. Grad frau aber bis sei ruth. Langsam wahrend heiland da richten sa bedeckt leuchte wo ja. Ist lohgruben furchtete betrubtes nur sudwesten ausgeruht ausdenken. Ferne namen denen regen lag nie davon naher. Bilderbuch dir erkundigte fluchtigen aus geschwatzt zaunpfahle wie. Das besonderes vertreiben hut grashalden fur aneinander ihr.", 6));
*/