var x = add(51293,100);
document.getElementById("math").innerHTML = x;

function add(a,b) {
    return a+b;
}

var y = subtract(10,5);
document.getElementById("subtract").innerHTML = y;

function subtract(a,b) {
    return a-b;
}

var y = divide(10,5);
document.getElementById("divide").innerHTML = y;

function divide(a,b) {
    return a/b;
}

var y = multiply(10,5);
document.getElementById("multiply").innerHTML = y;

function multiply(a,b) {
    return a*b;
}

var t = more(10,5,5,3);
document.getElementById("more").innerHTML = t;

function more(a,b,c,d) {
    return a*b/c+d;
}

var m = modulus(25,6);
document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + m;

function modulus(a,b) {
    return a%b;
}

var y = negation(10);
document.getElementById("negation").innerHTML = -y;

function negation(a) {
    return a;
}

var y = increment(10);
y++;
document.getElementById("increment").innerHTML = y;

function increment(a) {
    return a++;
}

var y = decrement(10);
y--;
document.getElementById("decrement").innerHTML = y;

function decrement(a) {
    return a--;
}

window.alert(Math.random() * 100);

document.getElementById("expo").innerHTML = Math.exp(25,5);




