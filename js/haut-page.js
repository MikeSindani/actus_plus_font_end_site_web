
$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('.haut-page').addClass('block-class');
    } else {
        $('.haut-page').removeClass('block-class');
    }
});

// Get the button that opens the modal
var modeDark = document.getElementById("dark-mode-btn");
var body = document.getElementById("body");
    
// When the user clicks on the button, open the modal
modeDark.onclick = function() {
body.style.backgroundColor = "black";
body.style.Color = "white";
}