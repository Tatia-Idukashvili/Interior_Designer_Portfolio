function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function handleLinkClick(event) {
    event.preventDefault(); 

    var targetUrl = event.target.getAttribute('href'); 

    closeNav();

    setTimeout(function() {
        window.location.href = targetUrl; 
    }, 300);
}

document.querySelectorAll('.overlay-content a').forEach(function(link) {
    link.addEventListener('click', handleLinkClick);
});