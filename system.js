class System{

    constructor(){}

    authenticate(accessCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(accessCode === enteredCode.toUpperCase()){
            return true
        }
        else{
            return false
            textSize(20);
            fill(darkblue);
            text("better luck next time", 500, 450);
        }

        if(accessCode === enteredCode.toLowerCase()){
            return true
        }
        else{
            return false
            textSize(20);
            fill(darkblue);
            text("better luck next time", 500, 450);
        }
             
    
    }

}