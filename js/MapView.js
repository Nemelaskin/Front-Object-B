let path = "http://localhost:5000";
viewImage();

async function viewImage() {
    let companies = await queryForCompanies();
    let img = document.getElementById('testingImage');
    let imageUrl = companies[0].mapLink;
    img.src = path + imageUrl
}

async function queryForCompanies() {
    response = await apiFetch('Companies', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    Compies = (await response.json());
    return Compies;
}