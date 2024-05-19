var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "school");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "8kFUxVQMeBClrAQVfQMKjbmuthjVwMNC");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIM').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElemen').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
                         