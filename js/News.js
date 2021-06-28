CreateNews();
async function CreateNews() {
    response = await apiFetch('News/GetNews', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    let AllNews = (await response.json());

    console.log(AllNews);
    NewsBlock = document.getElementById("NewsBlock");
    for (let i = 0; i < AllNews.length; i++) {
        h2 = document.createElement('h2');
        lineBreak = document.createElement('br');
        h4 = document.createElement("h4");

        h2.innerText = AllNews[i].heading;
        h4.innerText = AllNews[i].body;

        NewsBlock.appendChild(h2);
        NewsBlock.appendChild(lineBreak);
        NewsBlock.appendChild(h4);
        NewsBlock.appendChild(lineBreak);
    }
}