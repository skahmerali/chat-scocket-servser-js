const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
const name = prompt("Enter your name to join");


const append = (message, position) =>{
    
    
    const messageElement =  document.createElement('div');
    messageElement.innerText = message; 
    message.classList.add("message");
    message.classList.add(position);
    messageContainer.append(messageElement);



}


socket.emit('new-user-joined', name);
  
 socket.on('user-joined' , name => {
    append(`${data.message}: ${data.user}` , 'right')
 })