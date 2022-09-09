
// navbar
const slideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(slideNav);

// media Slider
const Slider = document.querySelectorAll('.slider')
M.Slider.init(Slider,{
    indicators : false,
    height : 350,
    duration : 300,
    interval : 2000
});

// clients
const parlax = document.querySelector('.parallax');
M.Parallax.init(parlax);

// portfolio
const zoom = document.querySelectorAll('.materialboxed');
M.Materialbox.init(zoom)

// scroll section
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
    scrollOffset : 50
})