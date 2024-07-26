const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFall', () => {
    console.log('Please turn of the motor!');
    setTimeout(() => {
        console.log("Please turn of the motor, Its a gentle reminder!!")
    }, 3000);
});

console.log("The script is running!")
myEmitter.emit('WaterFall');
console.log("The script is continuos running...")
console.log("The script is running.....")