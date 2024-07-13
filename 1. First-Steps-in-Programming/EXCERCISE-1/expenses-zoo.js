function expenses(input) {
    let dogCount = Number(input[0]) * 2.5;
    let catCount = Number(input[1]) * 4;

    let result = dogCount + catCount;

    console.log(`${result} lv`);
}

expenses(["5", "4"]);