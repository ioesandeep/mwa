class Storage {
    constructor() {
        this.str = '';
    }

    append(string) {
        this.str += string;
    }

    remove(size) {
        this.str = this.str.substr(0, this.str.length - size);
    }

    fetch(size) {
        return this.str.substr(this.str.length - size);
    }

    char(at) {
        return this.str[at - 1];
    }
}

class AppendCommand {
    constructor(storage, string) {
        this.storage = storage;
        this.append = string;
    }

    execute() {
        this.storage.append(this.append);
    }

    undo() {
        this.storage.remove(this.append.length);
    }
}

class RemoveCommand {
    constructor(storage, size) {
        this.storage = storage;
        this.remove = this.storage.fetch(size);
        this.size = size;
    }

    execute() {
        this.storage.remove(this.size);
    }

    undo() {
        this.storage.append(this.remove);
    }
}

class Invoker {
    constructor() {
        this.commands = [];
    }

    execute(command) {
        command.execute();
        this.commands.push(command);
    }

    undo() {
        if (this.commands.length === 0) {
            return;
        }
        const command = this.commands.pop();
        return command.undo();
    }
}

function processData(input) {
    //Enter your code here
    const invoker = new Invoker();
    const storage = new Storage();
    let inp = input.split("\n");
    inp.shift();
    const commands = inp;
    for (const command of commands) {
        const [cmd, data] = command.split(' ');
        switch (parseInt(cmd)) {
            case 1:
                invoker.execute(new AppendCommand(storage, data));
                break;
            case 2:
                invoker.execute(new RemoveCommand(storage, parseInt(data)));
                break;
            case 3:
                console.log(storage.char(parseInt(data)));
                break;
            case 4:
                invoker.undo();
                break;
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
//https://www.hackerrank.com/challenges/poisonous-plants/problem?h_r=next-challenge&h_v=legacy
