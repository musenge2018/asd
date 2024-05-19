var formdata = new FormData();
formdata.append("type", "Dark Square");
formdata.append("tags", "Right");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "8kFUxVQMeBClrAQVfQMKjbmuthjVwMNC");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.IMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.Element').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
    

  