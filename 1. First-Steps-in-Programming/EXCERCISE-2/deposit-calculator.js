function totalAmount(input) {
    let deposited = Number(input[0]);
    let time = Number(input[1]);
    let percent = Number(input[2]) / 12;

    let result = deposited + time *((deposited * percent) / 12);

    console.log(result);

}

totalAmount(["200", "3", "5.7"]);