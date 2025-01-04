const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard(){
    return <ol id="game-board">
        {initalGameBoard.map()}

    </ol>
}