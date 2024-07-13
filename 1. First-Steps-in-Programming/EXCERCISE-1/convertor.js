function convertor(input) {
    let usd = (input[0]);
    let exchangeRate = 1.79549;
    let bgn = usd * exchangeRate;
    console.log(bgn);
}

convertor([22]);
convertor([100]);