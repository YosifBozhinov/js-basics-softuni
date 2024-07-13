function liters(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) * 0.01;

    let volume = lenght * width * height;
    let liters = volume * 0.001;
    let result = liters * (1 - percent);


    console.log(result);
}

liters(["85", "75", "47", "17"]);