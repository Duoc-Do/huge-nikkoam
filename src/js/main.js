/* ====== CAROUSEL ======= */
var myCarousel = document.querySelector("#carouselFeatured");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false,
});

/* ====== GSAP ======= */
gsap.registerPlugin(ScrollTrigger);
//WITH Timelines (cleaner, more versatile)
var tl = gsap.timeline({ duration: 0.5 });
tl.from(".wave-oval svg path", {
  scale: 0.96,
  yoyo: true,
  repeat: -1,
  ease: Power1.easeInOut,
});

// wave effect
tl.to(".wave-shape svg path", {
  duration: 5,
  opacity: 0.2,
  y: 120,
  x: 40,
  ease: "Power1.easeInOut",
  stagger: {
    grid: "auto",
    from: "end",
    axis: "y",
    amount: 1.5,
    yoyou: true,
    repeat: -1,
  },
});
