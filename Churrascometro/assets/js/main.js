function calc(){
let adultos = parseInt(document.getElementById('adultos').value);
let criancas = parseInt(document.getElementById('criancas').value);
let horas = parseInt(document.getElementById('duracao').value);
let carne = 0;
let refrigerante = 0;
let Cerveja = 0;
let pessoas = adultos + (criancas*0.5);
    if(horas<7){
        carne = ((pessoas * ((400/6)*horas))/1000).toFixed(1);
        refrigerante = Math.round((pessoas * ((1000/6)*horas))/2000);
        Cerveja = Math.round((adultos * ((1200/6)*horas))/350);
    }else{
        carne = ((pessoas * ((650/6)*horas))/1000).toFixed(1);
        refrigerante = Math.round((pessoas * ((1500/6)*horas))/2000);
        Cerveja = Math.round((adultos * ((2000/6)*horas)/350));   
    }
    console.log(carne +"Kg de Carne")
    console.log(refrigerante +" Garrafas de 2L")
    console.log(Cerveja+" Latas de Cerveja") 
    document.getElementById("carne").innerHTML = carne + `Kg de Carne`
    document.getElementById("cerveja").innerHTML = refrigerante +` Garrafas de 2L`
    document.getElementById("bebidas").innerHTML = Cerveja+` Latas de Cerveja`
}