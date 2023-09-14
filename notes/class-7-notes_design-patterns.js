//builder pattern
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
        return this;
    }

    subtract(num) {
        this.result -= num;
        return this;
    }

    multiply(num) {
        this.result *= num;
        return this;
    }

    divide(num) {
        this.result /= num;
        return this;
    }

    compute() {
        return this.result;
    }
}

let calculator = new Calculator();
let sampleOperation = calculator.add(5).subtract(3).multiply(6).divide(3)
console.log(sampleOperation);
console.log(sampleOperation.compute());
sampleOperation.subtract(3)
console.log(sampleOperation.compute())

//facade pattern
class CPU {
    freeze() {
        // does something
    }
    jump(positionInMemory) {
        // does something else
    }
    execute() {
        // runs the program
    }
}

class Memory {
    load(positionInMemory, data) {
        // loads some memory
    }
    write(positionInMemory, data) {
        // writes some memory 
    }
}

class HardDrive {
    read(positionOnDisk, filesize) {
        // reads from the harddrive
    }
}

class Computer {
    constructor() {
        this.processor = new CPU();
        this.ram = new Memory();
        this.hd = new HardDrive();
    }

    start() {
        this.processor.freeze();
        this.ram.load("0xaabbcc", "some data");
        this.processor.executes();
        this.hd.read("0x123456", "20MB");
    }
}

const computer = new Computer();
computer.start();