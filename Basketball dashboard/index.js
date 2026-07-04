let add1 = document.getElementById("homeAdd1");
let add2 = document.getElementById("homeAdd2");
let add3 = document.getElementById("homeAdd3");
let guest1 = document.getElementById("guestAdd1");
let guest2 = document.getElementById("guestAdd2");
let guest3 = document.getElementById("guestAdd3");
let reset = document.getElementById("reset");
let homeScore = document.getElementById("num1");
let guestScore = document.getElementById("num2"); 
let home = 0
let guests = 0


function guestAdd1() {
    guests += 1;
    guestScore.textContent = guests;
}

function guestAdd2() {
    guests += 2;
    guestScore.textContent = guests;
}
function guestAdd3() {
    guests += 3;
    guestScore.textContent = guests;
}

function homeAdd1() {
    home += 1;
    homeScore.textContent = home;
}

function homeAdd2() {
    home += 2;
    homeScore.textContent = home;
}

function homeAdd3() {
    home += 3;
    homeScore.textContent = home;
}


function guestReset() {
    guests = 0;
    guestScore.textContent = guests;
}

function homeReset() {
    home = 0;
    homeScore.textContent = home;
}