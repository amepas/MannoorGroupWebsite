$(window).load(function () { //start after HTML, images have loaded
    "use strict";
    var InfiniteRotator = {
        init: function () {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000,

            //interval between items (in milliseconds)
                itemInterval = 5000,

            //cross-fade time (in milliseconds)
                fadeTime = 2500,

            //count number of items
                numberOfItems = $('.rotating-item').length,

            //set current item
                currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items		
            var infiniteLoop = setInterval(function () {
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if (currentItem === numberOfItems - 1) {
                    currentItem = 0;
                } else {
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});