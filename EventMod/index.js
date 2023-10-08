const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkout", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");