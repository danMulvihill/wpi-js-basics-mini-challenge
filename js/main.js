// #1. a script with 2 number vars added together

var pi = Math.PI;
var e = Math.E;

var sum = pi + e;

console.log("The sum of pi and natural log (e): "+sum);

// #2. outputting two items in sub-arrays of a multidimensional array:
moons = [
    [],[],[],
    ["Luna"],
    ["Deimos", "Phobos"],
    ["Europa", "Gamymede","Io","Callisto"],
    ["Titan", "Enceliadus"],
    ["Titania","Miranda","Ariel"],
    ["Triton"]
]

console.log("Two moons of Planet #6 include "+moons[6][0]+" and "+moons[6][1]);

// #3 & 4 checking if a variable is less than 100.
var checkVar = prompt("Pick a number: ");

if (checkVar < 100){
    alert("The var is less than 100")
}else{
    alert("The number "+checkVar+" is greater than 100.")
}

//#5. a similar script to check if a string stored in a variable is the same
var storedStr = "The quick brown fox";

if (storedStr == "The quick brown fox"){
    alert( storedStr+" jumped over the lazy dog.")
}else{
    alert( storedStr+" tripped and fell.")
}

// #6. function that takes a name in an arg and tells user the name

// var enteredName = "Bob";
// function tellName(name){
//     console.log("Name entered was "+name);
// }
// tellName(enteredName);

//re-did this one (the older version is above):

function greetPerson(){ 
    nameEntered = document.getElementById("nameIn").value;
    if (!nameEntered){
        alert("You didn't enter anything");
        return false;
    }
    alert("Hi, "+nameEntered);
}

// #7. A function with no arguments that prints to the console
function aFunction(){
  console.log("Something");
}

aFunction();


// #8. The three door challenge:

function getPrize(color){
    var output = document.getElementById("output");
    if (color==="green"){
        output.innerHTML = "<h3>You win the Grand Prize: a new car!</h3>"
    }else if (color==="yellow"){
        output.innerHTML = "<h4>You win the consolation prize: a toaster.<h4>"
    }else{
        output.innerHTML ="<p>You win a bumper sticker with our company logo on it. Yay!</p>"
    }
}






