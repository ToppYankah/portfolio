import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function animateAllElements() {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "* > *",
        start: "top 90%",
      },
    })
    .add(
      gsap.fromTo(
        "* > *",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.15 },
      ),
    );
}
