const socket = io();
let user;
let chatBox = document.getElementById('chatBox')

socket.on('messageLogs', data=>{
    let log = document.getElementById('messageLogs');
    let messages = "";
    data.forEach(message => {
        messages = `${messages} ${message.user} dice: ${message.message} </br>`
    });
    log.innerHTML = messages;
})

socket.on("userConnected", function (username) {
    Swal.fire({        
        text: `${username} se ha unido al chat`,
        toast: true,
        position: 'top-right'
    });
});

Swal.fire({
    title: 'Identificate',
    input: 'text',
    text: 'Ingresa el chat para identificarte en el chat',
    inputValidator: (value) => {
        if (!value) {
            return 'Debes ingresar tu nombre de usuario para continuar';
        }
    },
    allowOutsideClick: false,
}).then((result) => {
    user= result.value;
    socket.emit('auth', user);
});

chatBox.addEventListener('keyup', evt => {
    if(evt.key==='Enter'){
        if(chatBox.value.trim().length>0){
            socket.emit('message', {user:user, message:chatBox.value});
            chatBox.value = '';
        }
    }
})