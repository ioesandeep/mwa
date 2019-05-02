const Button = require('./button').Button;

const button = new Button();
button.label = "Click me";
button.on('click', console.log);
button.click();
