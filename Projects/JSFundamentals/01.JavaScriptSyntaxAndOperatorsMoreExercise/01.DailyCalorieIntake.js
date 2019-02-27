function solve(input, workOuts)
{
    let calorieIntake = 0;
    let manOrWoman = input[0];
    let weight = input[1];
    let height = input[2];
    let age = input[3];

    var caloriesMan = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    var caloriesWoman = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;

    if (manOrWoman == "m") {
        if (workOuts < 1) {
            calorieIntake = caloriesMan * 1.2;
        }
        else if (workOuts >= 1 && workOuts <= 2) {
            calorieIntake = caloriesMan * 1.375;
        }
        else if (workOuts >= 3 && workOuts <= 5) {
            calorieIntake = caloriesMan * 1.55;
        }
        else if (workOuts === 6 || workOuts === 7) {
            calorieIntake = caloriesMan * 1.725;
        }
        else {
            calorieIntake = caloriesMan * 1.90;
        }
        1
    }
    else {
        if (workOuts < 1) {
            calorieIntake = caloriesWoman * 1.2;
        }
        else if (workOuts >= 1 && workOuts <= 2) {
            calorieIntake = caloriesWoman * 1.375;
        }
        else if (workOuts >= 3 && workOuts <= 5) {
            calorieIntake = caloriesWoman * 1.55;
        }
        else if (workOuts === 6 || workOuts === 7) {
            calorieIntake = caloriesWoman * 1.725;
        }
        else {
            calorieIntake = caloriesWoman * 1.90;
        }
    }
    console.log(Math.round(calorieIntake));
}
solve(['m', 86, 185, 25], 3);