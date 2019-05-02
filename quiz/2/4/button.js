const EventEmitter = require('events');

class Button extends EventEmitter {

    constructor(props) {
        super(props);
        this.label = '';
    }

    click() {
        this.emit('click', {label: this.label, 'page-x': 100, 'page-y': 100});
    }
}

exports.Button = Buton;
