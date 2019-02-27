function solve(input){
    let rotations = input[input.length-1];
    input.pop();
    let length = Number(rotations%input.length);
    for (let i = 1; i<= length; i++) {
        let last = input[input.length-1];
        input.pop();
        input.unshift(last);
    }
    console.log(input.join(' '));
}

solve(['1', '2', '3', '4', '2']);
