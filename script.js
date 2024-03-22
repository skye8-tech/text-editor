function saveText(){
    var textToSave = document.getElementById("textinput").ariaValueMax;
    var blob = new Blob([textToSave],{type: "text/plain"}); 
}