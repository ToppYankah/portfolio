import gsap from "gsap";

export function animateScreenOutlines(
  screenOutline1Ref: React.RefObject<SVGRectElement>,
  screenOutline2Ref: React.RefObject<SVGRectElement>,
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: screenOutline1Ref.current,
      start: "top bottom",
      end: "top 50%",
      scrub: true,
    },
  });

  tl.add(
    gsap.fromTo(
      screenOutline1Ref.current,
      {
        yPercent: 0,
        xPercent: 0,
      },
      {
        yPercent: -15,
        xPercent: 10,
      },
    ),
  ).add(
    gsap.fromTo(
      screenOutline2Ref.current,
      {
        yPercent: 0,
        xPercent: 0,
      },
      {
        yPercent: -30,
        xPercent: 20,
      },
    ),
    "<",
  );

  return tl;
}

export function animateExpertiseItems() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#expertise",
        start: "top 50%",
        end: "top top",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".expertise-item",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: -10,
          opacity: 1,
          stagger: 1,
        },
      ),
    );
}

export function animateSideImage(
  imageContainerRef: React.RefObject<HTMLDivElement>,
  imageRef: React.RefObject<HTMLImageElement>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: 10,
        },
        {
          yPercent: -10,
        },
      ),
    );
}
