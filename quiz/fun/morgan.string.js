const fs = require('fs');

function morganAndString(a, b) {
    if (!b) {
        return a;
    }

    if (!a) {
        return b;
    }

    let lexical = [];
    a = a.split('');
    b = b.split('');
    while (a.length > 0 || b.length > 0) {
        if (a.length === 0 && b.length > 0) {
            return lexical.concat(b).join('');
        }

        if (b.length === 0 && a.length > 0) {
            return lexical.concat(a).join('');
        }

        if (a.length === 0 && b.length === 0) {
            break;
        }

        if (a[0] < b[0]) {
            lexical.push(a.shift());
            continue;
        }

        if (b[0] < a[0]) {
            lexical.push(b.shift());
            continue;
        }

        const lenA = a.length;
        const lenB = b.length;
        const to = lenA > lenB ? lenB : lenA;
        let removed = false;
        //too much time consuming
        for (let i = 1; i < to; i++) {
            if (a[i] < b[i]) {
                lexical.push(a.shift());
                removed = true;
                break;
            }
            if (a[i] > b[i]) {
                lexical.push(b.shift());
                removed = true;
                break;
            }
        }

        if (removed) {
            continue;
        }

        //all compared chars are same
        if (lenA > lenB) {
            lexical.push(b.shift());
            continue;
        }

        lexical.push(a.shift());
    }
    return lexical.join('');
}

const data = fs.readFileSync('./test.txt', 'utf8').split("\n");
console.time("whole");
for (let i = 0; i < data.length; i += 2) {
    console.time("start");
    const morgan = morganAndString(data[i], data[i + 1]);
    console.timeEnd("start");
}
console.timeEnd("whole");
