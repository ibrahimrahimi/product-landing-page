let isOpen = false;
function myFunction() {
    var x = document.getElementById("nav-bar");
    console.log(x)
    if (isOpen) {
        x.style.display = "none";
        isOpen = false;
        return;
    } else {
        x.style.display = "block";
        isOpen = true;
        return;
    }
    return;
}