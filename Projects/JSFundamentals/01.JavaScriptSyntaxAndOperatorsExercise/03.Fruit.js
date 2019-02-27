function solve(input,weight,priceForKg){
    let weightInKg = weight/1000;
    let totalPrice = priceForKg*weightInKg;
    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${input}.`)

}

solve('orange',2500,1,80);