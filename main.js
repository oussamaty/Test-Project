console.log("Hello World!");
document.getElementById("BUTTON").addEventListener("click",function() {
    var randomNumber = Math.floor(10000*Math.random());
    var text = "This site generate a random series of 4 numbers <br>" 
    document.getElementById("TEXTWINDOW").innerHTML = text + randomNumber;
});