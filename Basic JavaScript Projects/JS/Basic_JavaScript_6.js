function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote= (Age<18) ? "You are not old enough":"You are old  enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
 "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(species, color) {
    this.Animal_species = species;
    this.Animal_color = color;
}
var Glen = new Animal("Duck", "Green");
var Molly = new Animal("Giraffe", "Brown");

function fun() {
    document.getElementById("New_and_This").innerHTML = 
 "Molly is a " + Molly.Animal_species + ". She is the color -" + Molly.Animal_color;
}

/*--------------Not Being Used--------------------*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
/*------------------End Not Being Used---------------------*/


function counting() {
    document.getElementById("Nested_Function").innerHTML = count ();
    function count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

