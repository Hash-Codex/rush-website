$(".home-banner").parallax({ imageSrc: "../assets/home-banner.png" });
AOS.init();
gsap.to(".about-text", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "-300px 500px",
    end: "600px",
    scrub: true, 
  },
  y: 100,
  duration: 3,
  delay: 0.2,
  ease: "power1.inOut",
});
