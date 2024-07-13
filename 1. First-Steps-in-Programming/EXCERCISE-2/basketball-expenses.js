function expenses(input) {
    
    let fee = Number(input[0]);
    let shoes = fee - (fee * 0.4);
    let suit = shoes - (shoes * 0.2);
    let ball = suit / 4;
    let accessories = ball / 5;

    let total = fee + shoes + suit + ball + accessories;

    console.log(total);
}

expenses(["365"]);