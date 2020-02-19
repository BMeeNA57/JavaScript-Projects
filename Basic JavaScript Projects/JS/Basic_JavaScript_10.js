function string() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
  }

var Instruments = ["Guitar", "Drums", "Piano", "Violin"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; 
}

function array_function() {
    var dog_picture = [];
    dog_picture[0] = "eating";
    dog_picture[1] = "sleeping";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + 
        dog_picture[1] + ".";
}

function constant_function() {
    const happy_dance = {person:"Michael Jackson", what:"The Moon-walk", when:"80's"};
    happy_dance.what = "The Twist";
    happy_dance.how = "'Shout'";
    document.getElementById("Constant").innerHTML = "The person who made the " + happy_dance.what + " was " + happy_dance.person + ", now it's time to " + happy_dance.how + ".";
}

var n= 85;
document.write(n);
{
    let n=02
    document.write(n);
}
document.write(n);

let car = {
    make: "volkswagen ",
    model: "Jetta ",
    color: "Silver ",
    year: "2015 ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model ;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


var text = "";
var n;
for (n = 0; n < 5; n++) {
  if (n === 3) { break; }
  text += "The number is " + n + "<br>";
}
document.getElementById("break").innerHTML = text;
var text = "";
var j;
for (j = 0; j < 6; j++) {
  if (j === 3) { continue; }
  text += "The number is " + j + "<br>";
}
document.getElementById("continue").innerHTML = text;