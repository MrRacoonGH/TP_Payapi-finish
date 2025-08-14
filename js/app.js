document.getElementById("burger-menu").addEventListener("click", function() {
    document.getElementById("side-menu").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("side-menu").classList.remove("active");
});
