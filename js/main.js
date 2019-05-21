let isOpen = false;
function myFunction() {
    var x = document.getElementById("menu");
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