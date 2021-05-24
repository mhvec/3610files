function inputTitle(title){
    localStorage.setItem("title",title);
};

function inputNote(note){
    localStorage.setItem("field", note);
};

function onLoad(){
    document.getElementById("title").value = localStorage.getItem("title");
    document.getElementById("field").value = localStorage.getItem("field");
};

document.addEventListener('DOMContentLoaded', onLoad);
