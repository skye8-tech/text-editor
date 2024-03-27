const save = document.getElementById("save")

const text = document.getElementById("text")

 

/**

 * Algorithm:

 * 1. Get input

 * 2. Save text -> Save to local storage

 * 3. Load the item when page loads.

 */

function saveText(){

    // console.log("Something");

    // console.log(text.value);

    // text.value = "something"

    localStorage.setItem("input", text.value);

}

 

function onPageLoad(){

    text.value = localStorage.getItem("input")

}

 

onPageLoad();

save.addEventListener("click", saveText)