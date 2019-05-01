const add = (a, b) => {
    setTimeout(function () {
        for (let i = 0; i < 9e7; i++) {
            console.log(a + b);
        }
    },5000);
};
console.log("start");
add(1,2);
add(2,3);
add(3,4);
console.log("end");
