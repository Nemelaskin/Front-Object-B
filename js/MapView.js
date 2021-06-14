var nowCompany = document.getElementById("CompanyNow").innerHTML;

RequestFunc();
async function RequestFunc() {
    response = await apiFetch('Map/ViewMap?nameCompany=' + nowCompany, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    var arrayBufferView = (await response.arrayBuffer());
    var blob = new Blob([arrayBufferView], { type: "image/png" });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    var img = document.getElementById("testingImage");
    img.src = imageUrl;
    console.log(img);
}