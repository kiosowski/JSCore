function solve(number) {
    let digits=[];
    while (number > 0){
        digits[digits.length] = number % 10;
        number = parseInt(number/10);
    }
    let allSame = digits.every(x=>x===digits[0]);
    let resultSum = digits.reduce(function(a,v){return a+v;},0);

    console.log(allSame);
    console.log(resultSum);
}

solve(2222232);