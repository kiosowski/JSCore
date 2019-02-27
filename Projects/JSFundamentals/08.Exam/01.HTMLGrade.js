function solve(examPoints, homeWorkCompl, totalHomework) {
    let maxPoints = 100;
    let maxExamPoints = 400;
    let total = (examPoints / 4) * 0.9;
    let grade = 0;
    if (examPoints === maxExamPoints) {
        grade = 6.00;
    }
    else if (homeWorkCompl === totalHomework) {
        total += 10;
        grade = 3 + 2 * (total - maxPoints / 5) / (maxPoints / 2);
    }
    else if (homeWorkCompl < totalHomework) {
        let bonus = (homeWorkCompl / totalHomework) * 10;
        total += bonus;
        grade = 3 + 2 * (total - maxPoints / 5) / (maxPoints / 2);
    }
    if (grade < 3.00) {
        grade = 2.00;
    }
    if (grade > 6.00) {
        grade = 6.00;
    }

    console.log(grade.toFixed(2));

}


solve(300, 10, 10);
solve(200, 5, 5);
solve(400, 5, 5);