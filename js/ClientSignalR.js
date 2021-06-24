async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/chat")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.onclose(start);

start();

function StartEmut() {


    apiFetch("MoveWorker/EmitationMove", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}
connection.on('Receive', function(message) {
    drawPoint(message);
});

function StopSendInfo() {
    apiFetch("MoveWorker/StopSend", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}