import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

ScrollTrigger.defaults({
  start: "top 75%",
  end: "bottom 75%",
  scrub: 1,
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

const titleVars: gsap.TweenVars = {
  opacity: 0,
  y: 100,
};

const howTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#how",
  },
});

howTl
  .from("#how h2", titleVars)
  .from(
    "#how #step-1",
    {
      x: 100,
      opacity: 0,
    },
    "-=1.5",
  )
  .from(
    "#how #step-1 .arrow",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      opacity: 0,
    },
    "-=1.5",
  )
  .from(
    "#how #step-2",
    {
      x: -100,
      opacity: 0,
    },
    "<",
  )
  .from(
    "#how #step-2 .arrow",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      opacity: 0,
    },
    "-=1",
  )
  .from(
    "#how #step-3",
    {
      x: 100,
      opacity: 0,
    },
    "<",
  );

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
  },
});

aboutTl.from("#about h2", titleVars).from(
  "#about .card",
  {
    y: 100,
    opacity: 0,
  },
  "-=1.5",
);
const projWrapper = document.getElementById("projects");
const projects = document.querySelector("#projects > .projects");
const getAmountToScroll = () => {

  const container = document.querySelector(".container");
  const containerStyle = window.getComputedStyle(container);
  const containerPad = parseInt(containerStyle.paddingInline) * 2;
  return projects?.offsetWidth - projWrapper?.offsetWidth + containerPad;
};

const projTl = gsap.timeline({
  scrollTrigger: {
    trigger: projWrapper,
    end: () => `+=${getAmountToScroll()}`,
    invalidateOnRefresh: true,
  },
});

projTl
  .fromTo("#projects h2", titleVars, {
    opacity: 1,
    y: 0,
  })
  .fromTo(
    "#projects > .projects li",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      stagger: 0.5,
      x: 0,
    },
    "<",
  );

ScrollTrigger.create({
  trigger: projWrapper,
  start: `top ${document.getElementById("header")?.offsetHeight}`,
  end: () => `+=${getAmountToScroll() * 1.5}`,
  pin: true,
  invalidateOnRefresh: true,
  animation: gsap.fromTo(
    projects,
    {
      x: 0,
    },
    {
      x: getAmountToScroll,
      ease: "none",
    },
  ),
});
