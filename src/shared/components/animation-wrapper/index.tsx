import Lenis from "lenis";
import { useEffect } from "react";
import "./index.css";

type AnimationWrapperProps = {
  children: React.ReactNode;
};

function AnimationWrapper({ children }: AnimationWrapperProps) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // background stars
    const generateStart = (n: number) => {
      let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
        Math.random() * 2000,
      )}px rgba(165, 190, 195, ${Math.random().toFixed(1)})`;

      for (let i = 0; i <= n; i++) {
        value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
          Math.random() * 2000,
        )}px rgba(184, 174, 131, ${Math.random().toFixed(1)})`;
      }

      return value;
    };
    const starsElement1 = document.getElementById("stars1");
    const starsElement2 = document.getElementById("stars2");
    const starsElement3 = document.getElementById("stars3");
    const starsElement4 = document.getElementById("stars4");

    starsElement1!.style.boxShadow = generateStart(200);
    starsElement2!.style.boxShadow = generateStart(300);
    starsElement3!.style.boxShadow = generateStart(400);
    starsElement4!.style.boxShadow = generateStart(500);
  }, []);

  return (
    <>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-[100dvh]">
        {children}
      </div>
    </>
  );
}

export default AnimationWrapper;
