$(document).ready(function () {

    const targetMin = 19;
    const targetMax = 120;
    const targetNumber = Math.floor(Math.random() * (targetMax - targetMin + 1) + targetMin);

    // point storage

    let pointStore = 0;
    let winTrack = 0;
    let lossTrack = 0;

    $(".targetNumber").text(targetNumber);

    // assign a random number value to .quarter-circle's

    let planet1 = $(".quarter-circle-1");
    planet1.attr("data-points", Math.floor(Math.random() * (12-9) + 9));
    planet1.addClass("planet1");
    $(".quarter-circle-1").append(planet1);
    console.log(planet1);

    let planet2 = $(".quarter-circle-2");
    planet2.attr("data-points", Math.floor(Math.random() * (8-5) + 5));
    planet2.addClass("planet2");
    $(".quarter-circle-2").append(planet2);
    console.log(planet2);
    
    let planet3 = $(".quarter-circle-3");
    planet3.attr("data-points", Math.floor(Math.random() * (4-1) + 1));
    planet3.addClass("planet3");
    $(".quarter-circle-3").append(planet3);
    console.log(planet3);
    
    let planet4 = $(".quarter-circle-4");
    planet4.attr("data-points", Math.floor(Math.random() * (12) + 1));
    planet4.addClass("planet4");
    $(".quarter-circle-4").append(planet4);
    console.log(planet4);


    // click listeners for qc's
    $(".quarter-circle-1").on("click", function () {
        let planetVal1 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal1);
        console.log(pointStore);
    })
    $(".quarter-circle-2").on("click", function () {
        let planetVal2 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal2);
        console.log(pointStore);
    })
    $(".quarter-circle-3").on("click", function () {
        let planetVal3 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal3);
        console.log(pointStore);    
    })
    $(".quarter-circle-4").on("click", function () {
        let planetVal4 = ($(this).attr("data-points"));
        pointStore += parseInt(planetVal4);
        console.log(pointStore);    
    })


})