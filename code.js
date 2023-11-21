// Strings Code method //
1;
const myString = "Abinaya";
const NewString = myString.charAt(3);

document.getElementById("demo").innerHTML = NewString;

2;
const Concat1 = "abinaya";
const Concat2 = "abisha";
let result = Concat1.concat(" ", Concat2);
document.getElementById("concat").innerHTML = result;

3;
let text = "Hello world, welcome to the universe.";
let newText = text.startsWith("Hello");

document.getElementById("starts").innerHTML = newText;

4;
let end = "i am abinaya web developer";
let newEnd = end.endsWith("develope");
document.getElementById("ends").innerHTML = newEnd;

5;
const include = "hi good morning, hoe are you";
const newInclude = include.includes("hi");
document.getElementById("include").innerHTML = newInclude;

6;
const index = "hi good morning, how are you";
const newIndex = index.indexOf("are");
document.getElementById("indexof").innerHTML = newIndex;

7;
const indexlast = "hi good morning, how are you";
const newIndexlast = indexlast.lastIndexOf("good");
document.getElementById("indexlast").innerHTML = newIndexlast;

8;
const myMatch = "HEllo abinaya sharya shakulya hwouya";
const newMatch = myMatch.match("ya");
document.getElementById("match").innerHTML = newMatch;

9;
let text1 = "abi";
text1 = text1.padStart(7, "naya");

document.getElementById("padstart").innerHTML = text1;

10;

let text2 = "abi";
text2 = text2.padEnd(7, "naya");

document.getElementById("padend").innerHTML = text2;

11;
let Myrepeat = "abi";
Myrepeat = Myrepeat.repeat(7);

document.getElementById("repeat").innerHTML = Myrepeat;

12;

let Myreplace = "Abinaya web developer";
Myreplace = Myreplace.replace("abinaya");

document.getElementById("replace").innerHTML = Myreplace;

13;
let MySearch = "Abinaya web developer";
const newSearch = MySearch.search("web");
document.getElementById("search").innerHTML = newSearch;

14;
let mySlice = "Abinaya";
let newSlice = mySlice.slice(2);
document.getElementById("slice").innerHTML = newSlice;

15;

let mySplit = "Abinaya";
let newSplit = mySlice.split("");
document.getElementById("split").innerHTML = newSplit; //[3];

16;
let mySubString = "Abinaya";
let NewSubString = mySubString.substring(5);
document.getElementById("substring").innerHTML = NewSubString;

let MyLowerCase = "Abinaya";
let NewLowerCase = MyLowerCase.toLowerCase();
document.getElementById("lowercase").innerHTML = NewLowerCase;

18;

let MyUpperCase = "Abinaya";
let NewUpperCase = MyUpperCase.toUpperCase();
document.getElementById("uppercase").innerHTML = NewUpperCase;

19;

let myTrim = "Abinaya";
let NewTrim = myTrim;
document.getElementById("trim").innerHTML = NewTrim;

20;
let myTrimstart = " ABINAYA      Abinaya";
let NewTrimstart = myTrimstart;
document.getElementById("trimstart").innerHTML = NewTrimstart;

21;
let myTrimEnd = "Abinaya         ABINAYA";
let NewTrimEnd = myTrimEnd;
document.getElementById("trimend").innerHTML = NewTrimEnd;

//-------------------Array Method-----------------//
1; //at method//
const fruit = ["orange", "apple", "mango", "banana"];
const Newfruit = fruit.at(1);
document.getElementById("array").innerHTML = Newfruit;

2; //push {last element Add}//

const pushfruit = ["orange", "apple", "mango", "banana"];
pushfruit.push("strawberry");
document.getElementById("push").innerHTML = pushfruit;
3;
//pop {last element remove}//

const popfruit = ["orange", "apple", "mango", "banana", "strawberry"];
popfruit.pop();
document.getElementById("pop").innerHTML = popfruit;

4;
//Fill//
const fillfruit = ["orange", "apple", "mango", "banana", "strawberry"];
fillfruit.fill("kiwi");
document.getElementById("fill").innerHTML = fillfruit;

5;
//shift {first element remove}//

const shiftfruit = ["orange", "apple", "mango", "banana", "strawberry"];
shiftfruit.shift("Kiwi");
document.getElementById("shift").innerHTML = shiftfruit;

6;
//Unshift  {first element Add}//

const Unshiftfruit = ["orange", "apple", "mango", "banana", "strawberry"];
Unshiftfruit.unshift("kiwi");
document.getElementById("unshift").innerHTML = Unshiftfruit;

7;
//Reverse Array//

const reverseArray = [1, 2, 3, 4, 5, 6, 7, 0, 8, 9];
document.getElementById("reverse").innerHTML = reverseArray.reverse();

8;
//Includes//

const MyArrayInclude = ["orange", "apple", "mango", "banana", "strawberry"];

document.getElementById("arrayinclude").innerHTML =
  MyArrayInclude.includes("apple");
9;
//map//
const numbers = [1, 2, 3, 4, 5, 6];
const newArray = numbers.map(myfunction);
function myfunction(num) {
  return num * 2;
}
document.getElementById("map").innerHTML = newArray;

10;
//Filter//

const ages = [10, 20, 30, 40, 43, 45, 67, 3, 6, 8, 23, 12, 11, 15, 100];

function checkAge(age) {
  return age >= 18;
}

document.getElementById("Filter").innerHTML = ages.filter(checkAge);
11;
// Find //

const Myfind = [10, 20, 30, 40, 43, 45, 67, 3, 6, 8, 23, 12, 11, 15, 100];

function checkAge(age) {
  return age >= 30;
}

document.getElementById("find").innerHTML = ages.find(checkAge);

12;

//FindIndex//
const Myfindindex = [10, 20, 30, 40, 43, 45, 67, 3, 6, 8, 23, 12, 11, 15, 100];

function FindcheckAge(age) {
  return age >= 20;
}

document.getElementById("findindex").innerHTML = ages.findIndex(FindcheckAge);

13;
// To string //

const chocolate = ["Dairymilk", "Fivestar", "kitkat", "Milkybar"];
const newChocolate = chocolate.toString();
document.getElementById("tostring").innerHTML = newChocolate;
console.log(newChocolate); //String
console.log(chocolate); //Array

14;

// Join //
const animals = ["lion", "deer", "dog", "tiger"];
const Newanimals = animals.join(" /");
document.getElementById("join").innerHTML = Newanimals;
console.log(Newanimals);

15;
//splice//

const fruits1 = ["apple", "orange", "papaya", "strawberry"];
fruits1.splice(2, 0, "kiwi", "mango");
document.getElementById("splice").innerHTML = fruits1;

//Slice
16;
const fruits2 = ["apple", "orange", "papaya", "strawberry"];
const SliceFruit = fruits2.slice(0, 3); // 3 is remove  //0 is standard
document.getElementById("arrayslice").innerHTML = SliceFruit;

//sort//
17;
const Sortfruit = ["apple", "orange", "papaya", "strawberry"];

document.getElementById("sort").innerHTML = Sortfruit.sort();
