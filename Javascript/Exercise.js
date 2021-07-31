function sleepIn(week, vac) {
    return (week && vac) || (!week && !vac)
}

function stringTimes(str, n) {
    var returnStr = "";
    var i = 0;
    while(i<n) {
        returnStr += str;
        i++
    }
    return returnStr
}

function luckySum(a,b,c) {
    if(a === 13){
        return 0
    }
    else if(b===13) {
        return a
    }
    else if(c === 13) {
        return a + b
    }
    else{
        return a + b + c
    }
}


function bonus(speed, birth) {
    if (birth) {
        speed -= 5
    }
    if (speed <= 60) {
        return 0
    }
    else if(60 < speed <= 80 ){
        return 1
    }
    else{
        return 2
    }
}