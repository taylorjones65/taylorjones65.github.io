document.getElementById("b").addEventListener('click', onclick)
 
 function onclick () {
    let guess = document.getElementById("score").valueAsNumber;
    let a=10
    let score=("");
    if (guess===a){
        score = "You Won";
    }else if(guess>a){
        score = "try decreasing the value";
    } else if(guess<a)
        score = "Try increasing the value";
    document.getElementById("guess").innerHTML = " Your number is " + score + "."
    }
    
 
