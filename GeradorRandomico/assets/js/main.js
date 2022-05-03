let pessoas = ["Igor", "Jose", "Marcos", "Weslley", "Thamires", "Vitor"];

function sortear(){
    let np = pessoas.length;
    let ns = Math.floor(Math.random()*np);
    document.getElementById("d").innerHTML = pessoas[ns];
}