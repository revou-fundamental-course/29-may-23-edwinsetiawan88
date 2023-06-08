var input_name = prompt("Masukkan Nama Anda");
document.getElementById("nama").innertext= input_name;

var slideindex = 1;
showDivs(slideindex);

function plusDivs(n){
    showDivs(slideindex += n);
}

function showDivs(n){
    var i;
    var imglist = document.getElementsByClassName("img-slide");
    if (n > imglist.length) slideindex = 1;   
    else if (n<1) slideindex = imglist.length;

    for(i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }

    imglist[slideindex - 1].style.display = "block";

}

setInterval(() => {
    plusDivs(1);

},2000);



var currentDate = new Date();

// Display the current time
document.getElementById('waktu' ).innerHTML= currentDate;

var btn = document.getElementById('submit');
btn.addEventListener('click', func);

function func() {
    full_name= document.getElementById("full-name").value;
    document.getElementById("sender-full-name").innerHTML=full_name;

    birth_date = document.getElementById("birth-date").value;
    document.getElementById("sender-birth-date").innerHTML=birth_date;

    messages = document.getElementById("messages").value;
    document.getElementById("sender-message").innerHTML= messages;

    gender = document.querySelectorAll('input[name=gender]');

    for( radio of gender) {
        if(radio.checked) {
            document.getElementById("sender-gender").innerHTML=radio.value;
            break;
        }
    }

    if (full_name == "" || birth_date =="" || gender =="" || messages =="") {
        alert("input tidak boleh kosong");
        return false;
    }
}






