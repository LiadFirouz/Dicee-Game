var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

// creating a random string of the dicee images
var randomDiceeImg1 = "images/dice" + randomNumber1 + ".png";
var randomDiceeImg2 = "images/dice" + randomNumber2 + ".png";

//changing the images in the HTML
document.querySelectorAll("img")[0].setAttribute("src", randomDiceeImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceeImg2);


if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML= "Player 1 WON 🏆";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 WON 🏆";
else
    document.querySelector("h1").innerHTML = "Draw! 👏";
