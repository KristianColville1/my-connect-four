document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelectorAll('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;

    for(let i = 0, len = squares.length; i < len; i < len){
        // Add a onclick function to each quare in the grid
        squares[i].onclick = function(){
            // if the square below the current square is taken add square on top
            if(squares[index + 7].classList.contains('taken')){
                if(currentPlayer === 1){
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one');
                    // change the player then after player one goes
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if(currentPlayer === 2){
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-two');
                    // change the player back to player one after player two goes
                }
            }
        }
    }




});