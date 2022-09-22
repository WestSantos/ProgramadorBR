document.addEventListener('DOMContentLoaded',() => {

    let squares = document.querySelectorAll(".quadrado");

    squares.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick);
    });

})

function handleClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        let jogador = playerTime;
        if(jogador == 0){jogador="Jogador 01"}
            else{jogador="Jogador 02"}

        setTimeout(() => {
            // if(board.indexOf('')==-1){
            //     alert("Empate")
            // }
            alert("O jogo Acabou - O vencedor foi o "+jogador);
        }, 10);
        
    }
    updateSquare(position);

}
function updateSquare (position){
    let quadrado = document.getElementById(position.toString());
    let symbol=board[position];
    quadrado.innerHTML = `<div class='${symbol}'></div>`
}

// function updateSquares(){

//     let squares = document.querySelectorAll(".quadrado");

//     squares.forEach((quadrado) => {
//         let position = quadrado.id;
//         let symbol=board[position];

//         if (symbol != '') {
//             quadrado.innerHTML = `<div class='${symbol}'></div>`
//         }
//     })

// }