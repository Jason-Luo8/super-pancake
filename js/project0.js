//Declare global variables
let gameOver = false;
let Xscore = 0;
let Yscore = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let drawScore = 0;
let turn = 1;
let One_Win;
let Two_Win;
let Draw_Win;
let playerSelection;

//Start javascript/jquery
$(document).ready(function () {
    let O_val = "fa fa-circle-o fa-3x";
    let X_val = "fa fa-times fa-3x";
    One_Win = $('#p1_win');
    Two_Win = $('#p2_win');
    Draw_Win = $('#No_win');
    $("#instructions").text("PLAYER 1, PLEASE PICK X OR O");
    $("#result").text("WELCOME TO TIC TAC TOE!");

    //Set Reset function
    $("#reset").click(function () {
        $("#tictac td button").text('');
        $("#instructions").text("PLAYER 1, PLEASE PICK X OR O");
        $("#result").text("WELCOME TO TIC TAC TOE!");
        $("#result").css("background-color", "transparent");
        $("td button").removeClass(X_val);
        $("td button").removeClass(O_val);
        One_Win.html(0);
        Two_Win.html(0);
        Draw_Win.html(0);
        turn = 1;
        gameOver = false;
        $('.selectionButton').show();
        // Reset Colors
        $(".topL_sq1").css("color", "black");
        $(".topM_sq2").css("color", "black");
        $(".topR_sq3").css("color", "black");
        $(".midL_sq4").css("color", "black");
        $(".midM_sq5").css("color", "black");
        $(".midR_sq6").css("color", "black");
        $(".lowL_sq7").css("color", "black");
        $(".lowM_sq8").css("color", "black");
        $(".lowR_sq9").css("color", "black");
        $("button").off('click');
    });

    //set playAgain function
    $("#playAgain").click(function () {
        $("#tictac td button").text('');
        $("#result").css("background-color", "transparent");
        $("td button").removeClass(X_val);
        $("td button").removeClass(O_val);
        turn = 1;
        gameOver = false;
        $('.selectionButton').show();

        $("#instructions").text("PLAYER 1, PLEASE PICK X OR O");
        $("#result").text("TIME FOR THE NEXT ROUND!");


        //Set playAgain Colors
        $(".topL_sq1").css("color", "black");
        $(".topM_sq2").css("color", "black");
        $(".topR_sq3").css("color", "black");
        $(".midL_sq4").css("color", "black");
        $(".midM_sq5").css("color", "black");
        $(".midR_sq6").css("color", "black");
        $(".lowL_sq7").css("color", "black");
        $(".lowM_sq8").css("color", "black");
        $(".lowR_sq9").css("color", "black");
        $("button").off('click');
    });

    //Player 1 selection for X/O
    $(".playerChoice").click(function () {
        let One_Player = $('#p1_track');
        let Two_Player = $('#p2_track');

        //Print out what the player 1 has chosen
        const id = $(this).attr("id");
        if (id == 'X') {
            turn = 2;
            One_Player.html('X');
            Two_Player.html('O');
            $("#result").text("PLAYER 1 HAS CHOSEN TO BE X");
            console.log(`Current turn: ${turn}`);
            playerSelection = 'X';
        } else if (id == 'O') {
            turn = 1;
            One_Player.html('O');
            Two_Player.html('X');
            $("#result").text("PLAYER 1 HAS CHOSEN TO BE O");
            console.log(`Current turn: ${turn}`);
            playerSelection = 'O';
        }
        $("button").off('click');
        $("button").click(mainGame);
    });

    //Load up main game
    const mainGame = function () {

        //Hide the selection button
        $('.selectionButton').hide();

        //Checks if the space is occupied
        console.log("checking if piece placed");
        if ($(this).hasClass("fa fa-times fa-3x") ||
            $(this).hasClass("fa fa-circle-o fa-3x")) {
            $(this).css("background-color", "red");
            setTimeout(() => {
                $(this).css("background-color", "#E4E0C7");
            }, 800);

            return;

        }
        //When game is over, ends game function
        if (gameOver) {
            return;
        }

        //Main function of gameplay
        console.log("Placing piece");
        if (turn === 1) {
            let currentPlayer;
            if (playerSelection === "O") {
                currentPlayer = "Player 1";
            } else {
                currentPlayer = "Player 2";
            }
            $("#result").text(`IT IS NOW YOUR TURN, ${currentPlayer}`);
            $("#instructions").text(`${currentPlayer}, PLEASE CHOOSE A SPACE`);

            $(this).addClass("fa fa-circle-o fa-3x");
            turn = 2;

        } else {
            let currentPlayer;
            if (playerSelection === "X") {
                currentPlayer = "Player 1";
            } else {
                currentPlayer = "Player 2";
            }
            $("#result").text(`IT IS NOW YOUR TURN, ${currentPlayer}`);
            $("#instructions").text(`${currentPlayer}, PLEASE CHOOSE A SPACE`);

            $(this).addClass("fa fa-times fa-3x");
            turn = 1;
        }

    };

    //Win conditions
    function check(symbol) {
        if ($(".topL_sq1").hasClass(symbol) &&
            $(".topM_sq2").hasClass(symbol) &&
            $(".topR_sq3").hasClass(symbol)) {
            $(".topL_sq1").css("color", "green");
            $(".topM_sq2").css("color", "green");
            $(".topR_sq3").css("color", "green");
            return true;
        } else if ($(".midL_sq4").hasClass(symbol)
            && $(".midM_sq5").hasClass(symbol)
            && $(".midR_sq6").hasClass(symbol)) {
            $(".midL_sq4").css("color", "green");
            $(".midM_sq5").css("color", "green");
            $(".midR_sq6").css("color", "green");
            return true;
        } else if ($(".lowL_sq7").hasClass(symbol)
            && $(".lowM_sq8").hasClass(symbol)
            && $(".lowR_sq9").hasClass(symbol)) {
            $(".lowL_sq7").css("color", "green");
            $(".lowM_sq8").css("color", "green");
            $(".lowR_sq9").css("color", "green");
            return true;
        } else if ($(".topL_sq1").hasClass(symbol)
            && $(".midL_sq4").hasClass(symbol)
            && $(".lowL_sq7").hasClass(symbol)) {
            $(".topL_sq1").css("color", "green");
            $(".midL_sq4").css("color", "green");
            $(".lowL_sq7").css("color", "green");
            return true;
        } else if ($(".topM_sq2").hasClass(symbol)
            && $(".midM_sq5").hasClass(symbol)
            && $(".lowM_sq8").hasClass(symbol)) {
            $(".topM_sq2").css("color", "green");
            $(".midM_sq5").css("color", "green");
            $(".lowM_sq8").css("color", "green");
            return true;
        } else if ($(".topR_sq3").hasClass(symbol)
            && $(".midR_sq6").hasClass(symbol)
            && $(".lowR_sq9").hasClass(symbol)) {
            $(".topR_sq3").css("color", "green");
            $(".midR_sq6").css("color", "green");
            $(".lowR_sq9").css("color", "green");
            return true;
        } else if ($(".topL_sq1").hasClass(symbol)
            && $(".midM_sq5").hasClass(symbol)
            && $(".lowR_sq9").hasClass(symbol)) {
            $(".topL_sq1").css("color", "green");
            $(".midM_sq5").css("color", "green");
            $(".lowR_sq9").css("color", "green");
            return true;
        } else if ($(".topR_sq3").hasClass(symbol)
            && $(".midM_sq5").hasClass(symbol)
            && $(".lowL_sq7").hasClass(symbol)) {
            $(".topR_sq3").css("color", "green");
            $(".midM_sq5").css("color", "green");
            $(".lowL_sq7").css("color", "green");
            return true;
        } else {
            return false;
        }
    }

    //Game over screens
    function showGameOver(symbol) {
        let target = $("#result");
        let title = $('#instructions');

        if (symbol == X_val) {
            target.text("X wins!");
            title.text("Congratulations!");
            One_Win.html(++playerOneScore);
            gameOver = true;
        } else if (symbol == O_val) {
            target.text("O wins!");
            title.text("Congratulations!");
            Two_Win.html(++playerTwoScore);
            gameOver = true;
        } else {
            target.text("It's a Draw!");
            title.text("It was a close match!");
            Draw_Win.html(++drawScore);
            gameOver = true;
        }
    }

    //Main button functionality 
    $("#tictac td").click(function () {
        let gridCell, result;
        gridCell = $(this);
        console.log('test');

        //Remove whitespace
        if (gridCell.text().trim() !== '') {
            return;
        }

        //Checking who won
        result = check(X_val);
        if (check(X_val)) {
            showGameOver(X_val);
            return;
        } else if (check(O_val)) {
            showGameOver(O_val);
            return;
        } else if ($('button.fa').length === 9) {
            showGameOver();
            return;
        }
    });

    //Easter Egg
    $("#easterEgg").click(function () {
        $("#pancake").toggle();
    })
});