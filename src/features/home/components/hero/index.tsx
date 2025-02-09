import Image from "next/image";

function Hero() {
  return (
    <section className="mb-16 flex flex-col gap-8 md:flex-row-reverse md:gap-14">
      <div className="z-50 w-[100px] md:w-[300px]">
        <Image
          src="/profile.webp"
          alt="profile_pic"
          className="aspect-square"
          width={200}
          height={200}
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
  );
}

export default Hero;
