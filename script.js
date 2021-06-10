
const gameBoard = (() => {
    
    let boardArr = ['blank','blank','blank','blank','blank','blank','blank','blank','blank']
    
    
    function newTurn(playerID, boardSpace) {
        boardArr[boardSpace] = playerID
        return _checkWinner();
    };
    
    function _checkWinner() {
        if(boardArr[0] == boardArr[1] && boardArr[0] == boardArr[2] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0];
        } else if(boardArr[3] == boardArr[4] && boardArr[3] == boardArr[5] && boardArr[3] != 'blank') {
            return 'The winner is: ' + boardArr[3];
        } else if(boardArr[6] == boardArr[7] && boardArr[6] == boardArr[8] && boardArr[6] != 'blank') {
            return 'The winner is: ' + boardArr[6];
        } else if(boardArr[0] == boardArr[3] && boardArr[0] == boardArr[6] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0];
        } else if(boardArr[1] == boardArr[4] && boardArr[1] == boardArr[7] && boardArr[1] != 'blank') {
            return 'The winner is: ' + boardArr[1];
        } else if(boardArr[2] == boardArr[5] && boardArr[2] == boardArr[8] && boardArr[2] != 'blank') {
            return 'The winner is: ' + boardArr[2];
        } else if(boardArr[0] == boardArr[4] && boardArr[0] == boardArr[8] && boardArr[0] != 'blank') {
            return 'The winner is: ' + boardArr[0];
        } else if(boardArr[2] == boardArr[4] && boardArr[2] == boardArr[6] && boardArr[2] != 'blank') {
            return 'The winner is: ' + boardArr[2];
        } else if(!boardArr.includes('blank')) {
            return "It's a Draw!";
        } else {
            return "keep playing"
        }
    }

    return {newTurn};
})();


const playerFactory = (id) => {
    return {id};
};

const playerX = playerFactory('X');
const playerO = playerFactory('O');

