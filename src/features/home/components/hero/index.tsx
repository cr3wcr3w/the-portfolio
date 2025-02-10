import Image from "next/image";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* modal */}
      <section
        ref={modalParentWrapperRef}
        className="fixed inset-0 z-50 bg-[#000000cc] w-full h-full hidden"
      >
        <div className="flex justify-center items-center h-full flex-col">
          <div
            className="h-40 w-40 lg:h-80 lg:w-80 xl:h-90 xl:w-90"
            ref={modalContentWrapperRef}
          >
            {/* append here */}
          </div>
        </div>
      </section>

      {/* hero section */}
      <section className="mb-16 flex flex-col gap-8 md:flex-row-reverse md:gap-14">
        <div className="w-[120px] md:w-[300px]" ref={heroParentRef}>
          <Image
            src="/profile.webp"
            alt="profile_pic"
            className="aspect-square w-full cursor-zoom-in"
            width={200}
            height={200}
            ref={heroImageRef}
            onClick={clickHandler}
            style={{ viewTransitionName: "image" }}
          />
        </div>

        <div>
          <h1 className="playfair-font text-4xl font-bold text-white md:text-5xl mb-4">
            Kenneth Racelis
          </h1>
          {/* <p className="mb-4 text-lg text-slate-200 md:text-xl">
            Aspiring Security Researcher
          </p>  */}
          <p className="text-slate-400 text-pretty">
            At present, I&apos;m working towards honing my skills on Frontend
            Development.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
