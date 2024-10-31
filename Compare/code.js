document.getElementById("btn").addEventListener('click', onclick);

function onclick () {
    // get the value from the input box
    let a = document.getElementById("first").valueAsNumber;
    let b = document.getElementById("second").valueAsNumber;
    let c = document.getElementById("third").valueAsNumber;
    // compare them and get the largest one
    if (b>a)
        a = b
    if (c>a)
        a = c
    // display the largest one
    document.getElementById("result").innerHTML = "The maximum is" + a + ".";
}