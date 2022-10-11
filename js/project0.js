
$(document).ready(function () {
    let P1 = "fa fa-circle-o fa-3x";
    let P2 = "fa fa-times fa-3x";

    $(".playerChoice").click(function () {
        player = $(this).val();
        P1 = "";
        if (player == "fa fa-times fa-3x") {
            P1 = "fa fa-circle-o fa-3x";
            $("#tictac td");
        }
        else {
            P1 = "fa fa-times fa-3x";
            $("#tictac td");
        }
        $("#result").text("You are currently playing as " + player);
    });


    let turn = 1;

    $("button").click(function () {

        console.log("checking if piece placed");
        if ($(this).hasClass("fa fa-times fa-3x") ||
            $(this).hasClass("fa fa-circle-o fa-3x")) {
            $(this).css("background-color", "red");
            setTimeout(() => {
                $(this).css("background-color", "white");
            }, 800);
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

    function reset() {
        $("#result").text("PLAYER 1 TURN FOLLOWS");
        $("#result").css("background-color", "transparent");
        $(".r").removeClass("fa fa-check");
        $(".r").removeClass("fa fa-times");
        turn === 1;

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

    }
});