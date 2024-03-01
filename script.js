var toggled = false;

var ptag = document.getElementsByTagName("p")[0];
var container = document.getElementsByClassName("container")[0];
var circle = document.getElementById("circle");

let button = document.getElementsByClassName("button")[0]; // Access the first button element
button.addEventListener("click", toggle);

function toggle() {
    if (!toggled) {
        container.classList.add("bck-color-black");
        button.classList.add("color-white");
        ptag.classList.add("bck-color-white");
        
        circle.classList.add("dark-mode");
        toggled = true;
    } else {
        button.classList.remove("bck-color-black");
        ptag.classList.remove("bck-color-white");
        container.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode");
        toggled = false;
    }
}
