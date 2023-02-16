var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"]; 

var level = 0;

var started = false;

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});

$(document).keypress(function(event){

    if(started === false) {

        nextSequence();

        started = true;

    }

  
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        {
            if(gamePattern.length === userClickedPattern.length){

            setTimeout(function(){
    
                nextSequence();
    
            },1000);

            }

        }

    }

    else {

        $("body").addClass("game-over");

        setTimeout(function(){

            $("body").removeClass("game-over");

        },200);

        playSound("wrong");

        $("#level-title").text("Game Over, Press Any Key to Restart ");

        startOver();

    }

}
  
function startOver() {

    level = 0;

    gamePattern = [];

    started = false;

}

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("#"+"level-title").text("Level "+ level );

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour);

    playSound(randomChosenColour);


}

function playSound(name) {

    var audio = new Audio ( "sounds/" + name + ".mp3" );

    audio.play();


}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {

        $("#" + currentColour).removeClass("pressed");

    }, 100);


}



