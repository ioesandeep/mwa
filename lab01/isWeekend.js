function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();

    const weeks = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend'];
    return weeks[day];
}

const weekendTest = () => {

};

//function to check whether a day is weekday or weekend without using if
console.log(isWeekend());
