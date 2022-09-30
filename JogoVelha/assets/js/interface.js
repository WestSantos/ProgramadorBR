//cria o placar 
let placar = { jogador01: 0, jogador02: 0 };

function Iniciarplacar(){
    //Mostra o Placar
    let placarJog01 = document.getElementById("placarJog01");
    let placarJog02 = document.getElementById("placarJog02");
    let Jogadores = comecar()
    placarJog01.innerHTML = Jogadores.jogador01 + ": " + placar.jogador01;
    placarJog02.innerHTML = Jogadores.jogador02 + ": " + placar.jogador02;
}

function restartButton() {
    document.getElementById("hidden").innerHTML = `<div class="button" onclick="restart()">Restart GAME</div>`;
}

function comecar() {
    //Pegar nome dos JOgadores
    let jogador01 = document.getElementById("jog01").value
    let jogador02 = document.getElementById("jog02").value

    //Mostrar ou esconder Formulario, Tabuleiro e Placar
    let form = document.getElementById("formInv");
    form.classList.add("esconder");


    let tabuleiro = document.getElementById("inv");
    tabuleiro.classList.remove("esconder");
    tabuleiro.classList.add("mostrar");

    let placarHidden = document.getElementById("placar");
    placarHidden.classList.remove("esconder");

    return { jogador01, jogador02 };

}



document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".quadrado");

    squares.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick);
    });

})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        let jogadores = comecar();
        let jogadorWin;
        let emp = empate;

        //Determina o Jogador que venceu e incrementa o placar caso o empate for falso
        if (playerTime == 0 && emp == false) {
            jogadorWin = jogadores.jogador01;
            placar.jogador01++;
            Iniciarplacar();
        } else if(emp == false){
            jogadorWin = jogadores.jogador02
            placar.jogador02++;
            Iniciarplacar();
        }

        setTimeout(() => {
            if (emp == true) {
                restartButton();
                alert("O jogo Acabou temos um EMPATE");

            } else {
                restartButton();
                alert("O jogo Acabou - O vencedor foi o " + jogadorWin);
            }
        }, 10);
    }

    updateSquare(position);
}
//função para acrescentar X ou O no tabuleiro
function updateSquare(position) {
    let quadrado = document.getElementById(position.toString());
    let symbol = board[position];
    quadrado.innerHTML = `<div class='${symbol}'></div>`;
    Iniciarplacar();
}

//Função para zerar o tabuleiro
function updateSquares() {

    let squares = document.querySelectorAll(".quadrado");

    squares.forEach((quadrado) => {
        let position = quadrado.id;
        let symbol = board[position];

        if (symbol == '') {
            quadrado.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function restart() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    empate = false;
    updateSquares();
}