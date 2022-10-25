const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
});

sr.reveal(`.image-left, .popular-destinations-data, 
.plan-trip-data`, {
    origin: 'left'
})

sr.reveal(`.image-center`, {
    origin: 'bottom'
})

sr.reveal('.image-right, .showcase-data' ,{
    origin: 'right'
})

sr.reveal('.beach-data-wrapper', {
    origin: 'bottom',
    interval: 250
})

sr.reveal('.newsletter-container', {
    origin: 'top'
})
