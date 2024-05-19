
      
var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "right");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "8kFUxVQMeBClrAQVfQMKjbmuthjVwMNC");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertM').src = response.link;
    document.querySelector('.advertM').alt = response.alt;
    document.querySelector('.anchorlemen').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}

      
var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "right");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "8kFUxVQMeBClrAQVfQMKjbmuthjVwMNC");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertMG').src = response.link;
    document.querySelector('.advertMG').alt = response.alt;
    document.querySelector('.anchorlement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}