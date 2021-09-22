/* ====== CAROUSEL ======= */
var myCarousel = document.querySelector("#carouselFeatured");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false,
});

/* ====== GSAP ======= */
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({ opacity: 1 });

tl.to(".wave-shape svg path", {
  opacity: 0.2,
  duration: 3,
  y: 100,
  x: 30,
  ease: "Power1.easeInOut",
  stagger: {
    grid: "auto",
    from: "end",
    axis: "y",
    amount: 1.5,
    yoyo: true,
    repeat: -1,
  },
});
gsap.from(".wave-oval svg path", {
  scale: 0.96,
  yoyo: true,
  repeat: -1,
  ease: "Power1.easeInOut",
});
