
// var xVal=0;
// var yVal=0;
// while (true){
//     changeBallX(500);
//     changeBallY(1000);
// }
element = document.getElementById("rect");
var rect = element.getBoundingClientRect();
var top = rect.top;

determineChange();
function determineChange(){
    console.log(top)
}

function changeBallX(xVal){
    var ball = document.getElementById("ball");
    ball.style.left = xVal
}
function changeBallY(yVal){
    var ball = document.getElementById("ball");
    ball.style.bottom = yVal
}

function changeParagFont(font){
    var parag = document.getElementById("parag");
    parag.style.fontSize = font;

}