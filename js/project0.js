let gameOver = false;


$(document).ready(function () {
    let O = "fa fa-circle-o fa-3x";
    let X = "fa fa-times fa-3x";
    let P1val;
    let P2val;



    // $(".playerChoice").click(function (id) {
    //     player = $(this).val();
    //     if (id == 'O' || id == 'X') {
    //         if (id == 'X') {
    //             P1val = 'X';
    //             P2val = 'O';
    //         } else {
    //             P1val = 'O';
    //             P2val = 'X';
    //         }
    //         game = true;

    //     }
    //     console.log('player1val: ' + P1val);
    //     console.log('player2val: ' + P2val);

    // });

    $("#reset").click(function () {
        $("#tictac td button").text('');
        $("#result").text("IT IS NOW YOUR TURN, PLAYER 1");
        $("#result").css("background-color", "transparent");
        $("td button").removeClass(X);
        $("td button").removeClass(O);
        turn === 1;
        gameOver = false;
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

    });


    let turn = 1;

    $("button").click(function () {
        //timeout
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
            $("#result").text("IT IS NOW YOUR TURN, PLAYER 1")

            $(this).addClass("fa fa-circle-o fa-3x");
            turn = 2;
        } else {
            $("#result").text("IT IS NOW YOUR TURN, PLAYER 2")

            $(this).addClass("fa fa-times fa-3x");
            turn = 1;
        }


    });

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
        let target;
        target = $("#result");
        if (symbol == X) {
            target.text("X win!");
            gameOver = true;
        } else if (symbol == O) {
            target.text("O win!");
            gameOver = true;
        } else {
            target.text("Draw");
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

        result = check(X);
        if (check(X)) {
            showGameOver(X);
            return;
        } else if (check(O)) {
            showGameOver(O);
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