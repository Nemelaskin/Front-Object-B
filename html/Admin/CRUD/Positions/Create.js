async function CreateNewPosition() {
    _namePosition = document.getElementById('namePosition').value;
    _salary = document.getElementById('salary').value;

    
    var data = {
        NamePosition: _namePosition,
        Salary: _salary
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Positions', {
        method: 'POST',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    response = (await response.json());
    location.href = "Index.html";
}