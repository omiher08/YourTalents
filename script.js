// Get the button
const toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls down 50% of the viewport height from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    // This will use the smooth scroll behavior defined in the CSS
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
