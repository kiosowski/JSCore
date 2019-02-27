function solve(input){
    let biggestNumber = -Infinity;
    let result = [];

    input.filter((value) => {
        if (value >= biggestNumber){
            biggestNumber = value;
            result.push(value);
        }
    });

    console.log(result.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
