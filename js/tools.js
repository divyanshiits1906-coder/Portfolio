// tools.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Stagger entry animation for tool cards when scrolled into view
  gsap.from(".tool-card", {
    scrollTrigger: {
      trigger: ".tools-section",
      start: "top 75%", // Starts animation when top of section is 75% down the viewport
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Fade in the section header
  gsap.from(".tools-header-wrapper", {
    scrollTrigger: {
      trigger: ".tools-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
