import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimation() {
  useEffect(() => {
    // Textos
    gsap.to(".about-text", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });

    // Imagen
    gsap.to(".image-wrapper", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".image-wrapper",
        start: "top 80%",
      },
    });

    // Contadores
    document.querySelectorAll(".counter").forEach((el) => {
      const target = parseInt(el.dataset.target || "0");

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: function () {
            el.innerText = Math.floor(gsap.getProperty(el, "innerText")) + "+";
          },
        }
      );
    });
  }, []);

  return null;
}
