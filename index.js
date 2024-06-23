// script.js

// Initialize the ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create ScrollMagic scenes for each section
new ScrollMagic.Scene({
    triggerElement: '#home',  // Element that triggers the scene
    offset: 0,  // Trigger point offset
    triggerHook: 0.9  // Trigger point (0.9 = 90% down from the top)
})
.setClassToggle('#home', 'fadee')  // Toggle the 'fadee' class
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: 0,
    triggerHook: 0.9
})
.setClassToggle('#about', 'fadee')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#skills',
    offset: 0,
    triggerHook: 0.9
})
.setClassToggle('#skills', 'fadee')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#services',
    offset: 0,
    triggerHook: 0.9
})
.setClassToggle('#services', 'fadee')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#portfolio',
    offset: 0,
    triggerHook: 0.9
})
.setClassToggle('#portfolio', 'fadee')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#contact',
    offset: 0,
    triggerHook: 0.9
})
.setClassToggle('#contact', 'fadee')
.addTo(controller);
