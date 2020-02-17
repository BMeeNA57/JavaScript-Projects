function concat() {
     var sentence_1 = "This is";
     var sentence_2 = " a concatenating";
     var sentence_3 = " sentence.";
     var whole = sentence_1.concat(sentence_2,sentence_3);
     document.getElementById("concat").innerHTML = whole;
}
function slice_method() {
    var sentence="We're slicing this thang!";
    var section = sentence.slice(6,13);
    document.getElementById("slice").innerHTML=section;
}
function up() {
    var str= "Uppercase";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

function searching() {
    var str = "thang"; 
    var x = str.search("thang");
    document.getElementById("search").innerHTML = x;
  }

function string_method() {
      var n =99;
      document.getElementById("number_string").innerHTML = n.toString();
  }
function pmethod() {
    var f= 10915919.982490592872459487;
    document.getElementById("percision").innerHTML = f.toPrecision(11);
}
function fixedmeth() {
    var num = 9.9849849;
    var t= num.toFixed(4);
    document.getElementById("fixed").innerHTML = t;
}

function valueof() {
    var str= "Hello World!";
    var res= str.valueOf();
    document.getElementById("value").innerHTML = res;
}