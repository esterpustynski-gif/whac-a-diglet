
function greetMe() {
    let playername = document.getElementById("name").value
    document.getElementById("greeting").innerText = (() => "Hello, " + playername + "!")();
}

function startGame() {
    document.getElementById("startGame").innerText = (() => "Loading...")();
}