
function calc(){
    document.getElementById("carne").innerHTML = numCarne() + `Kg de Carne`
    document.getElementById("cerveja").innerHTML = numCerveja()+`L de Cerveja`
    document.getElementById("bebidas").innerHTML = numRefri()+`L de Refrigerante`
}

function horasPessoas(){
    let adultos = parseInt(document.getElementById('adultos').value);
    let criancas = parseInt(document.getElementById('criancas').value);
    let horas = parseInt(document.getElementById('duracao').value);
    let numeroPessoas = adultos + (criancas*0.5);
    return {numeroPessoas, criancas, horas, adultos};
}

function numCarne(){
    let dados = horasPessoas();
    let horas = dados.horas;
    let pessoas = dados.numeroPessoas;
    let resultCarne = 0;
    if(horas >= 6){
        resultCarne= pessoas * 650/1000;
    }else{
        resultCarne = pessoas * 400/1000;
    };
    return resultCarne;
}

function numRefri(){
    let dados = horasPessoas();
    let horas = dados.horas;
    let pessoas = dados.numeroPessoas;
    let resultRefri = 0;
    if(horas >= 6){
        resultRefri= pessoas * 1500/1000;
    }else{
        resultRefri = pessoas * 1000/1000;
    };
    return resultRefri;
}

function numCerveja(){
    let dados = horasPessoas();
    let horas = dados.horas;
    let adultos = dados.adultos;
    let resutCerv = 0;
    if (horas >= 6){
        resutCerv = adultos * 2000/1000
    }else{
        resutCerv = adultos * 1200/1000
    };
    return resutCerv;
}