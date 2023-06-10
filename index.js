




// MAIN OBJECT IN MODULE PATTERN
const TicTacToe = (() => {

    let boardStatus = []

    // X STARTS
    // X = 1
    // O = 2
    let current = 1;

    const handleSquareClick = (current, row, col) => {
        const square = document.querySelector(`.row:nth-child(${row + 1}) .square:nth-child(${col + 1})`);
        console.log(boardStatus[row][col])
        console.log(`Clicked square at row ${row}, column ${col}`);

        if(boardStatus[row][col] != 0) {
            console.log("ALREADY CLICKED")
        }

        else {
            boardStatus[row][col] = current
            console.log("CURRENT IS: "+current)
            if(current == 1){
                square.textContent = "X"
                console.log("Change current to O")
                current = 2;
            }
            else {
                square.textContent = "O"
                console.log("Change current to X")
                current = 1;
            }
        }


        return current
    }

    const makegame = () => {
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
              const value = 0;
              row.push(value);
            }
            boardStatus.push(row);
        }
        console.log(boardStatus)

        // Get the div container
        const container = document.getElementById('game-container');

        // Create a 3x3 grid
        for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 3; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('click', () => {
                // Call your empty event listener function here
                current = handleSquareClick(current, i, j);
                console.log(boardStatus)
            });

            row.appendChild(square);
        }

        container.appendChild(row);
}

          
    }

    return {
        boardStatus,
        makegame
    }
})();

TicTacToe.makegame()
console.log("Toimii")