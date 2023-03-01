'use strict';

window.addEventListener('DOMContentLoaded', () => {

    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
        window.location = "https://www.apple.com/ru/app-store/";
    }
    
    if(navigator.userAgent.match(/android/i)) {
        window.location = "https://play.google.com/store/games?pli=1";
    }

});