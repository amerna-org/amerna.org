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

gsap.from("#header .btn, .hero-btn, .lang-select", {
  opacity: 0,
  delay: 1.25,
  stagger: 0.15,
});

gsap.from(".hero-img", {
  ease: Power4.easeOut,
  opacity: 0,
  yPercent: 100,
});

gsap.from("#hero .hero-img svg path", {
  opacity: 0,
  stagger: 0.08,
  yPercent: 100,
  duration: 1,
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

const howTl = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#how",
    },
  });

  return tl
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
      "#how #step-1 svg",
      {
        opacity: 0,
        scale: 0,
      },
      "-=1.5",
    )
    .from(
      "#how #step-1 h3",
      {
        opacity: 0,
        y: 40,
      },
      "<",
    )
    .fromTo(
      "#how #step-1 .arrow",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
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
      "#how #step-2 svg",
      {
        opacity: 0,
        scale: 0,
      },
      "-=1.5",
    )
    .from(
      "#how #step-2 h3",
      {
        opacity: 0,
        y: 40,
      },
      "<",
    )
    .fromTo(
      "#how #step-2 .arrow",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
      },
      "-=1",
    )
    .from(
      "#how #step-3",
      {
        x: 100,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      "#how #step-3 svg",
      {
        opacity: 0,
        scale: 0,
      },
      "-=1.5",
    )
    .from(
      "#how #step-3 h3",
      {
        opacity: 0,
        y: 40,
      },
      "<",
    );
};

const aboutTl = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
    },
  });

  return tl.from("#about h2", titleVars).from(
    "#about .card",
    {
      y: 100,
      opacity: 0,
    },
    "-=1.5",
  );
};

const servicesTl = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
    },
  });

  return tl
    .from("#services h2", titleVars)
    .from(
      "#services .services .card",
      {
        y: 100,
        opacity: 0,
        stagger: 1,
      },
      "-=1",
    )
    .from(
      "#services svg",
      {
        opacity: 0,
        scale: 0,
        stagger: 1,
      },
      "<",
    )
    .from(
      "#services h3",
      {
        opacity: 0,
        y: 40,
        stagger: 1,
      },
      "-=1.75",
    );
};

const footerTl = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      end: "bottom bottom",
    },
  });

  return tl
    .from("#contact h2", titleVars)
    .from(
      "#contact .contact .logo, #contact .contact p",
      {
        opacity: 0,
        stagger: 0.5,
        x: 50,
      },
      "-=1.5",
    )
    .from(
      "#contact #socials li",
      {
        opacity: 0,
        xPercent: 100,
        stagger: 0.25,
      },
      "-=1",
    )
    .from(
      "#contact form > *",
      {
        opacity: 0,
        stagger: 0.5,
      },
      "-=1",
    );
};

const masterTl = gsap.timeline();
masterTl.add(howTl()).add(aboutTl()).add(servicesTl()).add(footerTl());
