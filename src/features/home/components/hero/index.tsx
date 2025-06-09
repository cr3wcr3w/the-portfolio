import Image from "next/image";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { mouseEnterAnimationHandler } from "../../helper/stars-animation";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGoUpAnimated, setIsGoUpAnimated] = useState(false);
  const heroParentRef = useRef<HTMLImageElement>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);

  const modalParentWrapperRef = useRef<HTMLImageElement>(null);
  const modalContentWrapperRef = useRef<HTMLImageElement>(null);

  const updateTheModal = () => {
    modalParentWrapperRef.current?.classList.toggle("hidden");
    heroImageRef.current?.classList.toggle("cursor-zoom-in");
    heroImageRef.current?.classList.toggle("cursor-zoom-out");

    if (!isOpen) {
      if (modalContentWrapperRef.current && heroImageRef.current) {
        modalContentWrapperRef.current.appendChild(heroImageRef.current);
      }
    } else {
      if (heroParentRef.current && heroImageRef.current) {
        heroParentRef.current.appendChild(heroImageRef.current);
      }
    }

    if (!isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const clickHandler = () => {
    setIsOpen(!isOpen);

    if (!document.startViewTransition) {
      return;
    }

    document.startViewTransition(() => {
      updateTheModal();
    });
  };

  const moveStarHandler = () => {
    setIsGoUpAnimated(true);
    if (isGoUpAnimated) return;
    mouseEnterAnimationHandler({});
  };

  return (
    <>
      {/* modal */}
      <section
        ref={modalParentWrapperRef}
        className="fixed inset-0 z-50 bg-[#000000cc] w-full h-full hidden"
      >
        <div className="flex justify-center items-center h-full flex-col">
          <div
            className="h-40 w-40 md:h-90 md:w-90 lg:h-[25rem] lg:w-[25rem] xl:h-[26rem] xl:w-[26rem]"
            ref={modalContentWrapperRef}
          >
            {/* append here */}
          </div>
        </div>
      </section>

      {/* hero section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-11">
        {/* w-[120px] h-[120px] md:h-[167px] md:w-[167px] */}
        <div
          className="w-[130px] h-[130px] md:h-[167px] md:w-[167px]"
          ref={heroParentRef}
        >
          <Image
            src="/profile.webp"
            alt="profile_pic"
            className="w-full cursor-zoom-in select-none"
            width={200}
            height={200}
            priority
            ref={heroImageRef}
            onClick={clickHandler}
            style={{ viewTransitionName: "image" }}
            onMouseEnter={moveStarHandler}
          />
        </div>

        <div className="md:col-span-2 md:order-first">
          <h1 className="playfair-font text-4xl font-bold text-white md:text-5xl mb-1 ">
            Kenneth Racelis
          </h1>
          <p className="mb-4 text-lg text-slate-200 md:text-xl">
            Frontend Developer
          </p>
          <p className="text-slate-400 text-pretty ">
            I&apos;m into coding, Always learning something new.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
