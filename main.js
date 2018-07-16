var clickHere = document.getElementById('clickHere');
var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click',closeFunction);

function closeFunction(){
    var mainBody=document.getElementById('main-body');
    mainBody.style.display="none";
}

clickHere.addEventListener('click',displayTrue);

function displayTrue(){
    var mainBody=document.getElementById('main-body');
    mainBody.style.display="block";
}