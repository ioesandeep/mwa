var obj = {open :false};
setTimeout(function () {
    obj.open = true;
    console.log("Open it");
},1000);

while(!obj.open);
console.log("Opened");