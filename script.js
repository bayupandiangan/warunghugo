// JavaScript Anda disini
window.addEventListener('scroll', function () {
    var jumbotron = document.querySelector('.jumbotron');
    var scrollPosition = window.scrollY;

    jumbotron.style.backgroundPositionY = -scrollPosition / 2 + 'px';
});
