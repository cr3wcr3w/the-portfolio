import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const LoadingMessage = ({
  introText,
  mainText,
  closingText,
  sloganText,
  setLoadingDone,
}: {
  introText: string;
  mainText: string;
  closingText: string;
  sloganText: string;
  setLoadingDone: () => void;
}) => {
  const wordsRefIntro = useRef<HTMLSpanElement[]>([]);
  const wordsRefMain = useRef<HTMLSpanElement[]>([]);
  const wordsRefClosing = useRef<HTMLSpanElement[]>([]);
  const wordsRefSlogan = useRef<HTMLSpanElement[]>([]);
  const wordsRefSection = useRef<HTMLElement>(null);

  useGSAP(() => {
    const textAnimation = gsap.timeline();

    if (
      wordsRefIntro.current.length &&
      wordsRefMain.current.length &&
      wordsRefClosing.current.length &&
      wordsRefSlogan.current.length
    ) {
      textAnimation
        .to(wordsRefIntro.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.7,
          stagger: 0.1,
          ease: "power2.out",
        })
        .to(wordsRefMain.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.7,
          stagger: 0.1,
          ease: "power2.out",
        })
        .to(wordsRefClosing.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.7,
          stagger: 0.1,
          ease: "power2.out",
        })
        .to(wordsRefSlogan.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.7,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => {
              gsap.to(wordsRefSection.current, {
                opacity: 0,
                y: -50,
                filter: "blur(10px)",
                scale: 0.5,
                duration: 1,
                stagger: 0.1,
                ease: "power2.in",
                onComplete: () => {
                  setLoadingDone();
                },
              });
            }, 1000);
          },
        });
    }
  });

  // Function to handle dynamic refs for each span element (word)
  const addWordRef = (
    el: HTMLSpanElement,
    refArray: React.RefObject<HTMLSpanElement[]>,
  ) => {
    if (refArray.current && el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <section
      className="flex h-[100dvh] flex-col items-center justify-center text-white px-3"
      ref={wordsRefSection}
    >
      <div className="flex flex-col gap-5 text-xl sm:w-[39rem] sm:gap-10 sm:text-4xl md:w-[50rem]">
        <p className="flex flex-wrap">
          {introText.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefIntro);
                }
              }}
              style={{
                whiteSpace: "pre-wrap",
                display: "inline-block",
                filter: "blur(10px)",
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {mainText.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefMain);
                }
              }}
              style={{
                whiteSpace: "pre-wrap",
                display: "inline-block",
                filter: "blur(10px)",
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {closingText.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefClosing);
                }
              }}
              style={{
                whiteSpace: "pre-wrap",
                display: "inline-block",
                filter: "blur(10px)",
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {sloganText.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefSlogan);
                }
              }}
              style={{
                whiteSpace: "pre-wrap",
                display: "inline-block",
                filter: "blur(10px)",
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
