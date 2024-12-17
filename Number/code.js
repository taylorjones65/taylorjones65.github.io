document.getElementById("b").addEventListener('click', onclick)
 let a=10;
 function onclick () {
    let guess=prompt("Guess the value");
    if(guess===a){
        prompt("You Won");
    }else{
        if(guess>a){
            alert("try decreasing the value");
        }else{
        if(guess<a)
            alert("Try increasing the value")
    }
    }
 }
