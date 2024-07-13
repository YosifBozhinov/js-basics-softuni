function totalPrice(input) {
    
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.4;
    let veganMenu = Number(input[2]) * 8.15;

    let totalFood = chickenMenu + fishMenu + veganMenu;
    let dessert = totalFood * 0.2;
    let totalPrice = totalFood + dessert + 2.5;

    console.log(totalPrice);

}

totalPrice(["2", "4", "3"]);