import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import { LoadingMessage } from "../loading-message";
import Header from "../header";
import { useSessionStorage } from "usehooks-ts";
import Footer from "../footer";
import { mouseEnterAnimationHandler } from "@/features/home/helper/stars-animation";

function Layout({ children }: { children: React.ReactNode }) {
  const [isLoadingStatus, setIsLoadingStatus] = useSessionStorage(
    "global-loading-status",
    false,
  );
  const [isLoadingRendered, setIsLoadingRendered] = useState<boolean | null>(
    null,
  );

  // stars
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

  const toggleIsFirstRender = () => {
    setIsLoadingStatus(true);
    setIsLoadingRendered(true);
  };

  // for checking loading status
  useEffect(() => {
    if (window) {
      if (isLoadingStatus === false) {
        mouseEnterAnimationHandler({ sec: 10 });
        setIsLoadingRendered(false);
      } else {
        setIsLoadingRendered(true);
      }
    }
  }, []);

  return (
    <div>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />

      {!isLoadingRendered ? (
        <LoadingMessage
          introText={"Imagine a world where functionality drives experience."}
          mainText={
            "I build dynamic, interactive websites using modern web technologies."
          }
          closingText={"Every line of code builds something extraordinary."}
          sloganText={"Focused. Passionate. Efficient."}
          toggleIsFirstRender={toggleIsFirstRender}
        />
      ) : (
        <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-[100dvh]">
          <Header />
          <main className="container mx-auto max-w-2xl flex-1 px-6">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;
