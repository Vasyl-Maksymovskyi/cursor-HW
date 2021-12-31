'use strict';

console.log('test');

window.onload = function () {
document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 500);
}

$(document).ready(function () {
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.bg-arrow_left',
        nextArrow: '.bg-arrow_right'
    })
})
    
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('video', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE'
});
}