const socket = io.connect("http://localhost:8080", { forceNew: true });

socket.on("messages", function (data) {
    console.log(data);
    render(data);
});

function render (data){
    const html = data.map((data, index)=>{
        return `<div>
            <strong>${data.author}</strong>:
            <em>${data.text}</em>
        </div>`
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    const payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    }

    socket.emit("newMessage", payload);

    return false;
}