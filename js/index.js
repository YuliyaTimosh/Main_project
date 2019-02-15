const footer = document.querySelector('footer');
const colors = ['#9664e6', '#e664d0', '#9198e5', '#64e0e6', '#f4ff4f', '#64e686', '#e66465', '#b4e664'];


document.querySelector('#easterEgg').addEventListener('click', function() {
    const i1 = Math.round(Math.random() * 7);
    const i2 = Math.round(Math.random() * 7);
    footer.style.background = 'linear-gradient(' + colors[i1] + ', ' + colors[i2] + ')';
});

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        footer.style.background = 'white';
    }
});
