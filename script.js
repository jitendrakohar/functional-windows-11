console.log("made by jitendra kohar in the guidance a code with harry");
var taskbar = document.getElementsByClassName("taskbar")[0];
var startmenu = document.getElementsByClassName("startMenu")[0];
console.log("clicked");
taskbar.addEventListener("click", function() {
    if (startmenu.style.bottom == "7%") {
        startmenu.style.bottom = "-105%"
    } else {
        startmenu.style.bottom = "7%";
    }
})