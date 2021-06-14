fillPosition();
async function fillPosition() {
    position = await (queryForTakePosition());

    document.getElementById('namePositionU').value = position.namePosition;
    document.getElementById('salaryU').value = position.salary;
}

async function EditPosition() {
    _namePosition = document.getElementById('namePositionU').value;
    _salary = document.getElementById('salaryU').value;

    var data = {
        PositionId: takeCookie("idPositionFor"),
        NamePosition: _namePosition,
        Salary: _salary,
    };

    console.log(JSON.stringify(data));
    response = await apiFetch('Positions', {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}


async function queryForTakePosition() {
    response = await apiFetch('Positions/' + takeCookie("idPositionFor"), {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}