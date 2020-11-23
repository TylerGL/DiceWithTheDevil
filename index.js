//function runs on click
document.querySelector(".devilbutton").addEventListener("click", rollDice);
//all inside function
function rollDice(){
//random number your two dice
var yd1 = Math.random();
yd1 = yd1 * 6;
yd1 = Math.floor(yd1) + 1;

var yd2 = Math.random();
yd2 = yd2 * 6;
yd2 = Math.floor(yd2) + 1;

// your dice added together
var yourRandomNumber = yd1 + yd2

//random number devil two dice
var dd1 = Math.random();
dd1 = dd1 * 6;
dd1 = Math.floor(dd1) + 1;

var dd2 = Math.random();
dd2 = dd2 * 6;
dd2 = Math.floor(dd2) + 1;
// devil dice added together
var devilRandomNumber = dd1 + dd2

//dice image selectors
var imageSelector1 = "images/dice" + yd1 + ".png";
var imageSelector2 = "images/dice" + yd2 + ".png";
var imageSelector3 = "images/dice" + dd1 + ".png";
var imageSelector4 = "images/dice" + dd2 + ".png";

//dice image set set attribute
document.querySelector(".dice .yourDice1").setAttribute("src",imageSelector1);
document.querySelector(".dice .yourDice2").setAttribute("src",imageSelector2);
document.querySelector(".dice .devilDice1").setAttribute("src",imageSelector3);
document.querySelector(".dice .devilDice2").setAttribute("src",imageSelector4);

//total dice number for user with if statement for perfect throw and fatal throw
if (yourRandomNumber === 12){
  document.querySelector(".dice .yourdice").innerHTML=("Your Dice = " + yourRandomNumber + "</br> A perfect throw!");
}
else if (yourRandomNumber === 2){
  document.querySelector(".dice .yourdice").innerHTML=("Your Dice = " + yourRandomNumber + "</br> A fatal throw!");
}
else{
  document.querySelector(".dice .yourdice").innerHTML=("Your Dice = " + yourRandomNumber);
}

if( devilRandomNumber === 12){
  document.querySelector(".dice .devildice").innerHTML=("Devil's Dice = " + devilRandomNumber + "</br> A perfect throw!");
}
else if ( devilRandomNumber === 2){
  document.querySelector(".dice .devildice").innerHTML=("Devil's Dice = " + devilRandomNumber + "</br> A fatal throw!");
}
else{
  document.querySelector(".dice .devildice").innerHTML=("Devil's Dice = " + devilRandomNumber);
}

//change h2 based on outcome
if (yourRandomNumber > devilRandomNumber){
  document.querySelector(".outcome").innerHTML=("<em>You win this time.</em>")
}
else if (yourRandomNumber < devilRandomNumber){
  document.querySelector(".outcome").innerHTML=("<em>The <span>Devil</span> wins your soul!</em>")
}
else if (yourRandomNumber === devilRandomNumber){
  document.querySelector(".outcome").innerHTML=("<em><span>A draw</span> </br> How about another game?</em>")
}
//end of funciton
}
