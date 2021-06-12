function DownloadOtherImage(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        downloadCanvas(reader.result);
    }
}

async function downloadCanvas(format) {

    if(format == "canvas"){
        var data = {
            Map: canvas.toDataURL()
        }    
    } else {
        var data = {
            Map: format
        }
    }

    var response = await fetch('http://localhost:5000/api/Map/Download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}
