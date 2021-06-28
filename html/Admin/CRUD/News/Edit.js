fillNews();
async function fillNews() {
    news = await (queryForTakeNews());

    document.getElementById('HeadingU').value = news.heading;
    document.getElementById('BodyU').value = news.body;
}

async function EditCompany() {
    header = document.getElementById('HeadingU').value;
    body = document.getElementById('BodyU').value;
    var data = {
        NewsId: takeCookie("idNewsFor"),
        Heading: header,
        Body: body
    };

    console.log(JSON.stringify(data));
    response = await apiFetch('News', {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}

async function queryForTakeNews() {
    response = await apiFetch('News/' + takeCookie("idNewsFor"), {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    news = (await response.json());
    return news;
}