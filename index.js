const five = require("johnny-five");
const board = new five.Board({
    port: '/dev/ttyACM0'
});

board.on("ready", function() {
    var led = new five.Led(8);
    led.blink(2000);
});
