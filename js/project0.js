//Declare global variables
let gameOver = false;
let playerOneScore = 0;
let playerTwoScore = 0;
let drawScore = 0;
let oddTurn = true; // Use a boolean to represent turns
let playerSelection;

let $squares;

// Function to reset the game
function resetGame() {
    $("#tictac td button").text('');
    $("#instructions").text("PLAYER 1, PLEASE PICK X OR O");
    $("#result").text("WELCOME TO TIC TAC TOE!");
    $squares.removeClass("fa fa-circle-o fa-3x fa fa-times fa-3x");
    $(".player-result").html(0);
    playerOneScore = 0;
    playerTwoScore = 0;
    drawScore = 0;
    oddTurn = true;
    gameOver = false;
    $(".square").css("color", "black");
    $('.selection-button').show();
    $("button").off('click');
}

// Function to handle play again
function playAgain() {
    $("#tictac td button").text('');
    $squares.removeClass("fa fa-circle-o fa-3x fa fa-times fa-3x");
    oddTurn = true;
    gameOver = false;
    $(".square").css("color", "black");
    $("button").off('click');

    // Update the instructions and result messages
    $("#instructions").text(`PLAYER 1 SELECTED ${playerSelection}`);
    $("#result").text("TIME FOR THE NEXT ROUND!");

    // If the last game resulted in a win or draw, update the score table
    if (gameOver) {
        if (check("fa fa-times fa-3x")) {
            showGameOver("fa fa-times fa-3x");
        } else if (check("fa fa-circle-o fa-3x")) {
            showGameOver("fa fa-circle-o fa-3x");
        } else if ($squares.filter('.fa').length === 9) {
            showGameOver();
        }
    }

    // Continue the game
    $('.selection-button').show();

}

// Function to check win conditions
function check(symbol) {
    const winConditions = [
        ["topL_sq1", "topM_sq2", "topR_sq3"],
        ["midL_sq4", "midM_sq5", "midR_sq6"],
        ["lowL_sq7", "lowM_sq8", "lowR_sq9"],
        ["topL_sq1", "midL_sq4", "lowL_sq7"],
        ["topM_sq2", "midM_sq5", "lowM_sq8"],
        ["topR_sq3", "midR_sq6", "lowR_sq9"],
        ["topL_sq1", "midM_sq5", "lowR_sq9"],
        ["topR_sq3", "midM_sq5", "lowL_sq7"]
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if ($(`.${a}`).hasClass(symbol) && $(`.${b}`).hasClass(symbol) && $(`.${c}`).hasClass(symbol)) {
            $(`.${a}`).css("color", "green");
            $(`.${b}`).css("color", "green");
            $(`.${c}`).css("color", "green");
            return true;
        }
    }

    return false;
}

// Function to handle game over screens
function showGameOver(symbol) {
    let target = $("#result");
    let title = $('#instructions');

    if (symbol == "fa fa-times fa-3x") {
        target.text("X wins!");
        title.text("Congratulations!");
        if (playerSelection === 'X') {
            playerOneScore++;
        } else {
            playerTwoScore++;
        }
        $(".player-result").eq(0).html(playerOneScore);
        $(".player-result").eq(1).html(playerTwoScore);
        gameOver = true;
    } else if (symbol == "fa fa-circle-o fa-3x") {
        target.text("O wins!");
        title.text("Congratulations!");
        if (playerSelection === 'O') {
            playerOneScore++;
        } else {
            playerTwoScore++;
        }
        $(".player-result").eq(0).html(playerOneScore);
        $(".player-result").eq(1).html(playerTwoScore);
        gameOver = true;
    } else {
        target.text("It's a Draw!");
        title.text("It was a close match!");
        drawScore++;
        $(".playerResult").eq(2).html(drawScore);
        gameOver = true;
    }
}

// Function to handle main game logic
const mainGame = function () {
    $('.selection-button').hide();

    if ($(this).hasClass("fa fa-times fa-3x") || $(this).hasClass("fa fa-circle-o fa-3x")) {
        $(this).css("background-color", "red").delay(800).queue(function () {
            $(this).css("background-color", "#E4E0C7").dequeue();
        });
        return;
    }

    if (gameOver) {
        return;
    }

    let currentPlayer = oddTurn ? "Player 1" : "Player 2";
    if (playerSelection === "O") {
        currentPlayer = oddTurn ? "Player 2" : "Player 1";
    }
    $("#result").text(`IT IS NOW YOUR TURN, ${currentPlayer}`);
    $("#instructions").text(`${currentPlayer}, PLEASE CHOOSE A SPACE`);

    $(this).addClass(oddTurn ? "fa fa-circle-o fa-3x" : "fa fa-times fa-3x");
    oddTurn = !oddTurn;

    if (check("fa fa-times fa-3x")) {
        showGameOver("fa fa-times fa-3x");
    } else if (check("fa fa-circle-o fa-3x")) {
        showGameOver("fa fa-circle-o fa-3x");
    } else if ($squares.filter('.fa').length === 9) {
        showGameOver();
    }
};

// Main document ready function
$(document).ready(function () {
    $squares = $('.square');
    $(".player-choice").click(function () {
        let onePlayer = $('#p1_track');
        let twoPlayer = $('#p2_track');

        //Print out what Player 1 has chosen
        const id = $(this).attr("id");
        oddTurn = (id === 'O'); //Update oddTurn

        if (id === 'X') {
            onePlayer.html('X');
            twoPlayer.html('O');
            $("#result").text(`PLAYER 1 HAS CHOSEN TO BE ${id}`);
            playerSelection = id;
        } else if (id === 'O') {
            onePlayer.html('O');
            twoPlayer.html('X');
            $("#result").text(`PLAYER 1 HAS CHOSEN TO BE ${id}`);
            playerSelection = id;
        }
        $("button").off('click');
        $squares.click(mainGame);
    });

    $("#reset").click(resetGame);
    $("#play-again").click(playAgain);

    $("#easter-egg").click(function () {
        $("#pancake").toggle();
    });
});