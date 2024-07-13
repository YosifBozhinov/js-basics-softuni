function TotalCost(input) {
    let size = Number(input[0]); // Parse the input as a number
    let pricePerSqare = size * 7.61;
    let discount = pricePerSqare * 0.18;
  
    let result = pricePerSqare - discount;
  
    console.log(`The final price is: ${result} lv.\nThe discount is: ${discount} lv.`);
  }

  TotalCost(["150"]);