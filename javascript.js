var playing=false;
var score;
var action;
var timeremaining;
// if we click on the start/reset
document.getElementById("startreset").onclick=function()
{
    //if we are playing
    if(playing==true){
        location.reload();//reload page


    }else{  //if we are not playing
        // change mode to playing
        playing=true;
        //set score to 0
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        //document.getElementById("timeremaining").style.display="Block";
        show("timeremaining");
           //change button to reset
           timeremaining=60;
           document.getElementById("timeremainingvalue").innerHTML=timeremaining;
           hide("gameOver")
           document.getElementById("startreset").innerHTML="Reset Game";

           startCountdown();
           //generate a new  Q&A

           generateQA();

    }
}
    
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    
        if(playing==true){
            if(this.innerHTML==corectAnswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                generateQA();
    
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
    
        }
    }
        

}

         //show countdown box
         //reduce time by 1 sec in loop
               //timeleft ?
                  //yes-->continue
                  //no--> gameover
     
        //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 sec

                //generate new Q&A
            //no
               //show try again box for 1sec

      /*  function startCountdown(){
            action=setInterval(function()
            {
                timeremaining-=1;
                document.getElementById("timeremainingvalue").innerHTML=timeremaining;
                if(timeremaining==0){
                    //game over
                    stopCountdown();
                    Show("gameOver");
                    document.getElementById("gameOver").style.display="block";
                    document.getElementById("gameOver").innerHTML="<p>Game Over!</p><p>Ypur score is"+score+".</p>";
                    hide("timeremaining");
                    hide("correct");
                    hide("wrong");
                    playing=false;}
            }, 1000);
        }*/
        function startCountdown(){
            action = setInterval(function() {
                timeremaining -= 1;
                document.getElementById("timeremainingvalue").innerHTML = timeremaining;
                if (timeremaining == 0) {
                    // game over
                    stopCountdown();
                    show("gameOver");

                    document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
                    hide("timeremaining");
                    hide("correct");
                    hide("wrong");
                    playing = false;
                }
            }, 1000);
        }
        

        function stopCountdown(){
            clearInterval(action);
        }

        function hide(id){
            document.getElementById(id).style.display="none";
        }
        function show(id){
            document.getElementById(id).style.display="block";
        }

function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    corectAnswer=x*y;

    document.getElementById("question").innerHTML=x+"x"+y;
    var correctPosition=1+Math.round(3*Math.random())
    document.getElementById("box"+correctPosition).innerHTML=corectAnswer;

    var answers=[corectAnswer];

    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));

            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

}