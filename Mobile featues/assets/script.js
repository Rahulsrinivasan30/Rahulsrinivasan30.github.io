var circle = document.querySelector("#circle");
var upBtn = document.querySelector("#upbtn");
var downBtn = document.querySelector("#downbtn");

var rotateVal = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateVal + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}

downBtn.onclick = function () {
    rotateSum = rotateVal + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}