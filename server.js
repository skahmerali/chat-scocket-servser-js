const { Socket } = require("socket.io");

const io=require("Socket.io")(8000);





const users= {};
io.on("connection",socket=>{
    socket.on("new-user-joined" , name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    
    
    });

    socket.on('send' ,message =>{
        socket.broadcast.emit('recive', {message: message, name: user[socket.id]})
    });

})