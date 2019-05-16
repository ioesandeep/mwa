function timeInWords(hr, mm) {
    const verbs = {past: 'past', to: 'to', now: "o' clock", half: "half", quarter: "quarter"};
    const time = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    if (mm % 15 === 0) {
        if (mm / 15 === 0) {
            return `${time[hr - 1]} ${verbs.now}`;
        }
        if (mm / 15 === 1) {
            return `${verbs.quarter} ${verbs.past} ${time[hr - 1]}`;
        }
        if (mm / 15 === 2) {
            return `${verbs.half} ${verbs.past} ${time[hr - 1]}`;
        }
        if (mm / 15 === 3) {
            return `${verbs.quarter} ${verbs.to} ${time[hr]}`;
        }
    }

    const past = mm < 30;
    mm = mm > 30 ? 60 - mm : mm;
    const minutes = mm % 30;
    let mmStr = minutes > 20 ? `${time[19]} ${time[minutes - 20 - 1]}` : time[minutes - 1];
    const minute = mm === 1 ? 'minute' : 'minutes';
    return `${mmStr} ${minute} ${past ? verbs.past : verbs.to} ${time[past ? hr - 1 : hr]}`;
}
//https://www.hackerrank.com/challenges/the-time-in-words/copy-from/107356645
