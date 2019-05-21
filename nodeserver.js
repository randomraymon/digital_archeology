const server = require('http').createServer();
const io = require('socket.io')(server);


console.log("booting....");

io.on('connection', client => {
    client.on('connect', data => {
        console.log("started");
    });
    client.on('stage', data => {
        //console.log(data);
        io.emit("stage",data);

    });
    client.on('disconnect', () => {
        /* … */ });
});

server.listen(3000);