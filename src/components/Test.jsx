import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  //   const colors = ["#3fa9f5", "#ff2a91", "#12c4e8", "#ffb703", "#8338ec"];

  const sectionRef = useRef(null);
  const stripRef = useRef(null);

  useGSAP(
    () => {
      let verticalScrollLength;

      const refresh = () => {
        verticalScrollLength =
          stripRef.current.scrollHeight - window.innerHeight;
      };

      refresh();

      const tween = gsap.to(stripRef.current, {
        y: () => -verticalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: () => `+=${verticalScrollLength}`,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      ScrollTrigger.addEventListener("refreshInit", refresh);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", refresh);
        tween.kill();
      };
    },
    { scope: sectionRef },
  );
  return (
    <section>
      <div ref={sectionRef} className="relative h-screen overflow-hidden">
        <div className="overflow-hidden grid grid-cols-2">
          <div ref={stripRef} className="flex flex-col flex-nowrap">
            <div className="bg-[#3fa9f5] min-w-full min-h-screen flex items-center justify-center font-bold text-3xl">
              slide
            </div>
            <div className="bg-[#ff2a91] min-w-full min-h-screen flex items-center justify-center font-bold text-3xl">
              slide
            </div>
            <div className="bg-[#12c4e8] min-w-full min-h-screen flex items-center justify-center font-bold text-3xl">
              slide
            </div>
            <div className="bg-[#ffb703] min-w-full min-h-screen flex items-center justify-center font-bold text-3xl">
              slide
            </div>
          </div>

          <div className="relative bg-amber-700 max-h-screen flex justify-center items-center">
            <div className="bg-zinc-300 aspect-square h-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
