
const playerFactory = (name, id) => {
    return {name, id};
};

const playerX = playerFactory('X','×');
const playerO = playerFactory('O','○');
let currentPlayer = playerX;

const gameBoard = (() => {
    
    let boardArr = ['blank','blank','blank','blank','blank','blank','blank','blank','blank']
    
    
    function newTurn(e) {
        const gameInfo = document.getElementById('game-info');
         
        if (boardArr[e.target.id] == 'blank' && _checkWinner() == "keep playing") {
            console.log(currentPlayer)
            boardArr[e.target.id] = currentPlayer.name;
            document.getElementById(e.target.id).textContent = currentPlayer.id;
            if(currentPlayer == playerX) {
            currentPlayer = playerO;
            } else {
                currentPlayer = playerX;
            }
            gameInfo.textContent = `Player ${currentPlayer.name}'s Turn`
            console.log(boardArr);
            
            if(_checkWinner() != "keep playing") {
                gameInfo.textContent = _checkWinner();
            };
        }
    };

    function resetGame() {
        boardArr = ['blank','blank','blank','blank','blank','blank','blank','blank','blank']
        currentPlayer = playerX;
        document.getElementById('game-info').textContent = `Player ${currentPlayer.name}'s Turn`
        const gameCell = document.querySelectorAll('.game-cell');
        gameCell.forEach(cell => cell.textContent = "");
    }
    
   
    function _checkWinner() {
        if(boardArr[0] == boardArr[1] && boardArr[0] == boardArr[2] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0] +'!';
        } else if(boardArr[3] == boardArr[4] && boardArr[3] == boardArr[5] && boardArr[3] != 'blank') {
            return 'The winner is: ' + boardArr[3] +'!';
        } else if(boardArr[6] == boardArr[7] && boardArr[6] == boardArr[8] && boardArr[6] != 'blank') {
            return 'The winner is: ' + boardArr[6] +'!';
        } else if(boardArr[0] == boardArr[3] && boardArr[0] == boardArr[6] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0] +'!';
        } else if(boardArr[1] == boardArr[4] && boardArr[1] == boardArr[7] && boardArr[1] != 'blank') {
            return 'The winner is: ' + boardArr[1] +'!';
        } else if(boardArr[2] == boardArr[5] && boardArr[2] == boardArr[8] && boardArr[2] != 'blank') {
            return 'The winner is: ' + boardArr[2] +'!';
        } else if(boardArr[0] == boardArr[4] && boardArr[0] == boardArr[8] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0] +'!';
        } else if(boardArr[2] == boardArr[4] && boardArr[2] == boardArr[6] && boardArr[2] != 'blank') {
            return 'The winner is: ' + boardArr[2] +'!';
        } else if(!boardArr.includes('blank')) {
            return "It's a Draw!";
        } else {
            return "keep playing"
        }
    }
    
    return {newTurn, resetGame};
})();


const gameController = (() => {
    
    const gameCell = document.querySelectorAll('.game-cell');
    gameCell.forEach(function(cell) {
       cell.addEventListener('click', gameBoard.newTurn);
    })


    const btnReset = document.getElementById('reset-game');
    btnReset.addEventListener('click', gameBoard.resetGame);
})();
