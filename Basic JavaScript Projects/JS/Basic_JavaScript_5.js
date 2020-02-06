document.write(typeof 5);
function my_function() {
    document.getElementById("NaN").innerHTML = 0/0;
}
function my_funct() {
    document.getElementById("true").innerHTML = isNaN("a string");
}

function my_func() {
    document.getElementById("false").innerHTML = isNaN("9843");
}

document.write(2E310);
document.write(-3E310);
document.write(10<11);
document.write(10>11);
console.log(2+2);
document.write("5"+30);
console.log(111>115);
console.log("false");

document.write(100==100);
document.write(99==100);

x=10;
y=10;
document.write(x===y);
x=82
y="string"
document.write(x===y);
x=82
y="82"
document.write(x===y);
x=82
y=52
document.write(x===y);

document.write(10>1 && 10<11);
document.write(10>1 && 10>11);
document.write(10>1 || 10>11);
document.write(10<1 || 10>11);

function not_function() {
    document.getElementById("not").innerHTML=!(10>100);
}
function not_funct() {
    document.getElementById("notdouble").innerHTML=!(100>10);
}
