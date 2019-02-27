function getCommonElements(array1,array2,array3) {
    var currentValues = {};
    var commonValues = {};
    for (var i = array1.length - 1; i >= 0; i--) {
        currentValues[array1[i]] = 1;
    }
    for (var i = array2.length - 1; i > 0; i--) {
        var currentArray = array3;
        for (var j = currentArray.length - 1; j >= 0; j--) {
            if (currentArray[j] in currentValues) {
                commonValues[currentArray[j]] = 1;
            }
        }
        currentValues = commonValues;
        commonValues = {};
    }
    return Object.keys(currentValues).map(function (value) {
        return parseInt(value);
    });

    console.log(getCommonElements(array1,array2,array3)); //Prints [9,44]
}

getCommonElements([5, 6, 50, 10, 1, 2],
    [5, 4, 8, 50, 2, 10],
    [5, 2, 50]
)