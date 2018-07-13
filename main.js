function pad(num,size) {
    var s = "";
    while(s.length < size){
        s += "0" + num;
    }
    return s;
}
console.log("Hello World!");
document.getElementById("BUTTON").addEventListener("click",function() {
    var randomNumber = Math.floor(10000*Math.random());
    var text = "<h1>This site generate a random sequence of 4 numbers<br>" 
    document.getElementById("TEXT").innerHTML = text + pad(randomNumber,4)+"</h1>";
});