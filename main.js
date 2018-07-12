console.log("Hello World!");
document.getElementById("BUTTON").addEventListener("click",function() {
    var randomNumber = Math.floor(10000*Math.random());
    var text = "This site generate a random sequence of 4 numbers <br>" 
    document.getElementById("TEXT").innerHTML = text + randomNumber;
});