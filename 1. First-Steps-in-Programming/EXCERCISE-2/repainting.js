function totalCost(input) {

    let cover = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let cost = ((cover + 2) * 1.5) + ((paint + (paint * 0.1)) * 14.5) + (razreditel * 5) + 0.4;
    let totalCost = cost +((cost * 0.3) * hours);

    console.log(totalCost);

}

totalCost(["10", "11", "4", "8"]); 