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


$(document).ready(function () {
    let O_val = "fa fa-circle-o fa-3x";
    let X_val = "fa fa-times fa-3x";
    One_Win = $('#p1_win');
    Two_Win = $('#p2_win');
    Draw_Win = $('#No_win');


    $("#reset").click(function () {
        $("#tictac td button").text('');
        $("#result").text("IT IS NOW YOUR TURN, PLAYER 1");
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
        $(".topL_sq1").css("color", "blue");
        $(".topM_sq2").css("color", "blue");
        $(".topR_sq3").css("color", "blue");
        $(".midL_sq4").css("color", "blue");
        $(".midM_sq5").css("color", "blue");
        $(".midR_sq6").css("color", "blue");
        $(".lowL_sq7").css("color", "blue");
        $(".lowM_sq8").css("color", "blue");
        $(".lowR_sq9").css("color", "blue");
        $("button").off('click');
    });

    $("#playAgain").click(function () {
        $("#tictac td button").text('');
        $("#result").text("IT IS NOW YOUR TURN, PLAYER 1");
        $("#result").css("background-color", "transparent");
        $("td button").removeClass(X_val);
        $("td button").removeClass(O_val);
        turn = 1;
        gameOver = false;
        $('.selectionButton').show();
        // playAgain Colors
        $(".topL_sq1").css("color", "yellow");
        $(".topM_sq2").css("color", "yellow");
        $(".topR_sq3").css("color", "yellow");
        $(".midL_sq4").css("color", "yellow");
        $(".midM_sq5").css("color", "yellow");
        $(".midR_sq6").css("color", "yellow");
        $(".lowL_sq7").css("color", "yellow");
        $(".lowM_sq8").css("color", "yellow");
        $(".lowR_sq9").css("color", "yellow");
        $("button").off('click');
    });

    // select piece
    $(".playerChoice").click(function () {
        let One_Player = $('#p1_track');
        let Two_Player = $('#p2_track');

        const id = $(this).attr("id");
        if (id == 'X') {
            turn = 2;
            One_Player.html('X');
            Two_Player.html('O');
            console.log(`Current turn: ${turn}`);
        } else if (id == 'O') {
            turn = 1;
            One_Player.html('O');
            Two_Player.html('X');
            console.log(`Current turn: ${turn}`);
        }
        $("button").off('click');
        $("button").click(mainGame);



    });



    // if x selected{
    //     turn = 1
    // } else if o selected turn equlas 2

    const mainGame = function () {
        //timeout
        $('.selectionButton').hide();

        console.log("checking if piece placed");
        if ($(this).hasClass("fa fa-times fa-3x") ||
            $(this).hasClass("fa fa-circle-o fa-3x")) {
            $(this).css("background-color", "red");
            setTimeout(() => {
                $(this).css("background-color", "white");
            }, 800);

            return;

        }
        if (gameOver) {
            return;
        }

        console.log("Placing piece");
        if (turn === 1) {
            $("#result").text("IT IS NOW YOUR TURN, PLAYER 2")
            $("#instructions").text("PLAYER 2, PLEASE CHOOSE A SPACE")

            $(this).addClass("fa fa-circle-o fa-3x");
            turn = 2;
        } else {
            $("#result").text("IT IS NOW YOUR TURN, PLAYER 1")
            $("#instructions").text("PLAYER 1, PLEASE CHOOSE A SPACE")

            $(this).addClass("fa fa-times fa-3x");
            turn = 1;
        }


    };

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



    $("#tictac td").click(function () {
        let gridCell, result;
        gridCell = $(this);
        console.log('test');
        // debugger
        if (gridCell.text().trim() !== '') {
            return;
        }
        // gridCell.text(player);

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






    // function updateScore(board, player) {
    //     if (player == player1) {
    //         if (checkWin(board, player)) {
    //             game = false;
    //             setTimeout(function () {
    //                 winner.innerHTML = "<h1>player1 won !</h1>";
    //             }, 1000);
    //             return;
    //         }
    //     } else {
    //         if (checkWin(board, player)) {
    //             game = false;
    //             setTimeout(function () {
    //                 winner.innerHTML = "<h1>player2 won !</h1>";
    //             }, 1000);
    //             return;
    //         }

    //     }
    // }
    // if (checkBoard(board)) {
    //     //  console.log(cb); 
    //     setTimeout(function () {
    //         winner.innerHTML = "<h1>Tie !</h1>";
    //         //reset();
    //     }, 1000);
    //     return;
    // }

    // function checkWin(board, player) {
    //     let value;
    //     value = player == player1 ? P1val : P2val;
    // }
    // // loop through winningboard to find win sequence
    // for (let x = 0; x < 8; x++) {
    //     let win = true;
    //     for (let y = 0; y < 3; y++) {
    //         if (board[winningBoard[x][y]] != value) {
    //             win = false;
    //             break;
    //         }
    //     }
    //     if (win) {
    //         return true;
    //     }
    // }
    // return false;


    // function checkBoard(board) {
    //     for (var i = 0; i < board.length; i++) {
    //         if (board[i] == 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }



});