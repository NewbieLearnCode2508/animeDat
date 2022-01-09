
function moveSlideAuto() {
    var animeSlider = document.querySelector('.slider');
    var slideImg = document.querySelectorAll('.slide-img');
    var sizeImg = slideImg[0].clientWidth;

    
    animeSlider.style.transform = 'translateX(' + (-sizeImg-24) + 'px)';

    setTimeout(function() {
        animeSlider.style.transform = 'translateX(' + (0) + 'px)';
    }, 3000);
}

setInterval(moveSlideAuto, 6000);

