function solve(dayOfWeek,service,time){
    let workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let weekends = ["Saturday", "Sunday"];
    let result=0;
    switch(service)
    {
        case 'Fitness':
            if (workDays.includes((dayOfWeek))){
                if(time >= 8.00 && time <= 15.00){
                    result=5;
                }
             else if (time > 15.00 && time <= 22.00) {
                    result = 7.5;
                }
            }
            else if(weekends.includes((dayOfWeek))){
                result=8;
            }
            break;
        case'Sauna':
            if (workDays.includes((dayOfWeek))){
                if(time >= 8.00 && time <= 15.00){
                    result = 4;
                }
             else if (time > 15.00 && time <= 22.00) {
                    result = 6.5;
                }
            }
            else if(weekends.includes((dayOfWeek))){
                result = 7;
            }
            break;
        case'Instructor':
            if (workDays.includes((dayOfWeek))){
                if(time >= 8.00 && time <= 15.00){
                    result = 10;
                }
                else if (time > 15.00 && time <= 22.00) {
                    result = 12.50;
                }
            }
            else if(weekends.includes((dayOfWeek))){
                result = 15;
            }
            break;
    }
    console.log(result);
}

solve('Sunday', 'Fitness', 22.00);