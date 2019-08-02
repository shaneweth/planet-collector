$(document).ready(function () {
    let pointStore;

    let winTrack = 0;
    let lossTrack = 0;

    let randomTarget = generateTargetNumber();

    function generateTargetNumber() {
        return Math.floor(Math.random() * 102) + 19;
    }

    function generatePlanetValue() {

        let planet1 = $(".quarter-circle-1");
        planet1.attr("data-points", Math.floor(Math.random() * (12 - 9) + 9));
        planet1.addClass("planet1");
        $(".quarter-circle-1").append(planet1);

        let planet2 = $(".quarter-circle-2");
        planet2.attr("data-points", Math.floor(Math.random() * (8 - 5) + 5));
        planet2.addClass("planet2");
        $(".quarter-circle-2").append(planet2);

        let planet3 = $(".quarter-circle-3");
        planet3.attr("data-points", Math.floor(Math.random() * (4 - 1) + 1));
        planet3.addClass("planet3");
        $(".quarter-circle-3").append(planet3);

        let planet4 = $(".quarter-circle-4");
        planet4.attr("data-points", Math.floor(Math.random() * (12) + 1));
        planet4.addClass("planet4");
        $(".quarter-circle-4").append(planet4);

    }

    function resetAnimation() {

        let planets = $(".quarter-circle-1, .quarter-circle-2, .quarter-circle-3, .quarter-circle-4");
        newPlanets = planets.clone(true);

        planets.before(newPlanets);

        $("." + planets.attr("class") + ":last").remove();
    };

    function resetGame() {
        pointStore = 0;
        generatePlanetValue();
        randomTarget = generateTargetNumber();
        $(".targetNumber").text(randomTarget);
        // resetAnimation();
    }

    function showWinLose(userWins) {
        $("#win-lose-display").empty();

        // if Won
        if (userWins === true) {
            $("#win-lose-display").append($("<p>").text("Well Done - You Won."));
            resetGame();
            renderPointStore();
        }
        else if (userWins === false) {
            $("#win-lose-display").append($("<p>").text("Not Good, Friend. It appears you didn't Win."));
            resetGame();
            renderPointStore();
        }

    }






    function renderPointStore() {
        let scoreDiv = $("<div id='score-number'>").text(pointStore);
        $(".point-store").html();
        $(".point-store").html(scoreDiv);
    }

    resetGame();
    showWinLose();
    renderPointStore();


    // click listeners for qc's
    $(".quarter-circle-1").on("click", function () {
        let planetVal1 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal1);
        $("#points-store").text("This is the  " + pointStore + " pointStore.")
        tracker();
    })

    $(".quarter-circle-2").on("click", function () {
        let planetVal2 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal2);
        $("#points-store").text("This is the  " + pointStore + " pointStore.")
        tracker();
    })

    $(".quarter-circle-3").on("click", function () {
        let planetVal3 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal3);
        $("#points-store").text("This is the  " + pointStore + " pointStore.")
        tracker();
    })

    $(".quarter-circle-4").on("click", function () {
        let planetVal4 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal4);
        $("#points-store").text("This is the  " + pointStore + " pointStore.")
        tracker();
    })

    // change alert to print to page and add new win to ("#win-tracker")

    function tracker() {

        if (pointStore === randomTarget) {
            winTrack++;
            $("#win-tracker").text("You've collected " + winTrack + ". Well Done.")
            resetGame();
        }

        else if (pointStore > randomTarget) {
            lossTrack++;
            $("#loss-tracker").text("You've lost " + lossTrack + ". Not Good, Friend.")
            resetGame();
        }
    }
})