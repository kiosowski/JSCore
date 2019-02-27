function solve(input, command) {

    let header = input[0];
    let allWords = command.split(' ');

    if (allWords[0] === 'sort') {

        let col = allWords[1];

        function sortIndex(e) {
            return e === col;
        }

        let index = header.findIndex(sortIndex);
        console.log(input[0].join(' | '));
        input.sort(function(a, b){
            if(a > b) { return 1; }
            if(a < b) { return -1; }
            return 0;
        });

        for (let i = 0; i < input.length -1; i++) {

            console.log(input[i].join(' | '));
        }
    }
    else if (allWords[0] === 'filter') {

        let col = allWords[1];
        let val = allWords[2];
        let result = [];
        result.push(0);

        function sortIndex(e) {
            return e === col;
        }

        let index = header.findIndex(sortIndex);

        for (let i = 1; i < input.length; i++) {
            if (input[i][index] === val) result.push(i);
        }

        for (let i = 0; i < result.length; i++) {
            console.log(input[result[i]].join(' | '));
        }

    }
    else if (allWords[0] === 'hide') {
        let col = allWords[1];

        function sortIndex(e) {
            return e === col;
        }

        let index = header.findIndex(sortIndex);

        for (let i = 0; i < input.length; i++) {
            input[i].splice(index, 1);


            console.log(input[i].join(' | '));
        }
    }
}

solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name'
);