function totalAmount(input) {
    
    let penPrice = 5.8;
    let penCount = Number(input[0]) * penPrice;
    let markerPrice = 7.2;
    let markerCount = Number(input[1]) * markerPrice;
    let acidPrice = 1.2;
    let acidCount = Number(input[2]) * acidPrice;

    let percent = Number(input[3]) / 100;

    let result = penCount + markerCount + acidCount;
    console.log(result - (result * percent));


}

totalAmount(["2", "3", "4", "25"]);