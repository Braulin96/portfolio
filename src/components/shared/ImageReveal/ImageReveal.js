//Note: hooks
import { useRef, useEffect } from "react";
//Note: components
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./ImageReveal.scss";

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = ({ children }) => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    // Create a local timeline for each component instance
    let tl = gsap.timeline();
    tl.to(container.current, 0.2, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: "power2.inOut" });

    // Create a local ScrollTrigger for each component instance
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 70%", // Adjust the start position as needed
      onEnter: () => tl.play(), // Play the timeline when the section is entered
      onLeaveBack: () => tl.reverse(), // Reverse the timeline when leaving the section
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [container, imageReveal]);

  return (
    <section className="main">
      <div className="container" ref={container}>
        <div className="img-container">
          <div
            ref={image}
          />
          {children}
        </div>
      </div>
    </section>
  );
};
export default GsapAnimation;
