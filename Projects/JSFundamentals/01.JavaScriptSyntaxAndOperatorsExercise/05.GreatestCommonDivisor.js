function solve(a, b){
    if (a>0 && b>0){
        let c = a%b;
        while (b!=0){
            c=a%b;
            a=b;
            b=c;
        }
        console.log(a);
    }
    else{
        console.log("Please enter positive number!");
    }
}

solve(15,5);