function solve() {
    let number = Number(document.getElementById("num1").value);
    let multiplier = Number(document.getElementById("num2").value);

    let divResult = document.getElementById('result');

    function findWrongNumber(number,multiplier){
        if (number > multiplier) {
            divResult.innerHTML = 'Try with other numbers.';
        }
    }

    function printTable(number,multiplier){
        for (let i = number; i <= multiplier; i++) {
            let result = multiplier * i;
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${multiplier} = ${result}`;
            divResult.appendChild(p);
        }
    }
    divResult.innerHTML = '';

    findWrongNumber(number,multiplier);
    printTable(number,multiplier);


}