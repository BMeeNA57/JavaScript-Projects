var x=50;
function add_numbers_1() {
    document.write(50+x);
}
function add_local() {
    var x=90;
    var y=15
    document.write(30+x+y)
}
function add_numbers_2() {
    console.log(50+y)
}

function time() {
    if (new Date().getHours() < 18) {
        document.getElementById("if").innerHTML = "Hello today! How are ya?!";
    }
}

function own() {
    if (new Date().getUTCDate() <30 ) {
        document.getElementById("own").innerHTML = "We're not halfway through this month!";
    }
}

function Vote() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote. :(";
    }
    document.getElementById("How_old").innerHTML= Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        REply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the eveneing time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}