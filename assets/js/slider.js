document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop',  // Enables looping
        perPage: 1,    // Displays one slide per view
        arrows:false,
        pagination:false,
        autoplay:true,
        speed:1000,
        
        gap:0,
        

    }).mount();
});
