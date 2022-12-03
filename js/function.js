async function api() {
    let res = await fetch("https://api.punkapi.com/v2/beers");
    let data = await res.json();

    let id = document.getElementById('nombre1');

    document.getElementById("imagen1").src = data[1].image_url;
    document.getElementById("imagen2").src = data[4].image_url;
    document.getElementById("imagen3").src = data[5].image_url;

    document.getElementById("name1").innerHTML = data[1].name;
    document.getElementById("name2").innerHTML = data[4].name;
    document.getElementById("name3").innerHTML = data[5].name;

    document.getElementById("tagline1").innerHTML = data[1].tagline;
    document.getElementById("tagline2").innerHTML = data[4].tagline;
    document.getElementById("tagline3").innerHTML = data[5].tagline;
}

function form(){
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if(name == ""){
        alert("You have to fill in the field 'Full name'");
        return
    }

    if(mail == ""){
        alert("You have to fill in the field 'Email'")
        return
    }

    if(phone == ""){
        alert("You have to fill in the field 'Phone'")
        return
    }
    if(message == ""){
        alert("You have to fill in the field 'Message'")
        return
    }

    alert("Thank you for contacting us " + name);

    window.location.href = "../index.html";
}

api();