function solve(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let profitValue = input[i].price;
        let townName = input[i].town;

        let myObj =
            {
                town: townName,
                profit: profitValue,
                vignette: 1
            };

        let foundTown = result.some(e => e.town === townName);

        if (foundTown) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].town === townName) {
                    result[i].profit += profitValue;
                    result[i].vignette++;
                }
            }
        }

        else {
            result.push(myObj);
        }

    }
    result.sort(function (a, b) {
        return b.profit - a.profit || b.vignette - a.vignette;
    });
    let countModels = [];

    let townName = result[0];



    for (let i = 0; i < input.length; i++) {

        if (input[i].town === townName.town) {
            let modelName = input[i].model;
            let priceValue = input[i].price;

            let modelObject =
                {
                    model: modelName,
                    count: 1,
                    price: priceValue
                }

            let foundModel = countModels.some(e => e.model === modelName);

            if (foundModel) {
                for (let i = 0; i < countModels.length; i++) {
                    if (countModels[i].model === modelName) {

                        countModels[i].count++;
                        if (countModels[i].price < priceValue) {
                            countModels[i].price = priceValue;
                        }
                    }
                }
            }

            else {
                countModels.push(modelObject);
            }

        }
    }
    countModels.sort(function (a, b) {
        return  b.price - a.price || b.count - a.count;
    });

    let townsObjects = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i].model === countModels[0].model) {
            let regNumberValue = input[i].regNumber;

            let townName = input[i].town;

            let townObject =
                {
                    town: townName,
                    regNumber: regNumberValue
                }

            let found = townsObjects.some(e => e.town === townName);

            if (found) {
                for (let i = 0; i < townsObjects.length; i++) {
                    if (townsObjects[i].town === townName) {

                        townsObjects[i].regNumber += ', '+ input[i].regNumber;
                    }
                }
            }
            else {
                townsObjects.push(townObject);
            }

        }
    }
    townsObjects.sort(function(a,b) { //Array now becomes [7, 8, 25, 41]
        return a - b
    });
  //  townsObjects.sort(function(a, b){
  //      if(a.town > b.town) { return 1; }
  //      if(a.town < b.town) { return -1; }
  //      return 0;
  //  });

    console.log(result[0].town + ' is most profitable - ' + result[0].profit + ' BGN');
    console.log('Most driven model: ' + countModels[0].model);
    for (let i = 0; i < townsObjects.length; i++ ) {
        console.log(townsObjects[i].town + ': ' + townsObjects[i].regNumber);
    }

}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
);