gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 2,
  ease: Power4.easeOut,
});

gsap.from(".hero-txt", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  y: -50,
  opacity: 0,
  stagger: 0.5,
});

gsap.from("#header .btn, .hero-btn", {
  opacity: 0,
  delay: 1.25,
});

gsap.from(".hero-img", {
  ease: Power4.easeOut,
  opacity: 0,
  y: 100,
});

gsap.fromTo(
  "#header .logo, #nav li",
  {
    x: 20,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 0.5,
    stagger: 0.25,
  },
);
