type mockEduDataType = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  cert: string;
  isPresent: boolean;
};

const mockEduData = [
  {
    name: "Mapúa Malayan Digital College",
    startDate: "", // Apr 2024
    endDate: "", // Present
    description: "BSIT Major in Network and Cybersecurity",
    cert: "",
    isPresent: false,
  },
  // {
  //   name: "KodeGo",
  //   startDate: "", // Nov 2022
  //   endDate: "", // Mar 2023
  //   description: "FullStack Development Bootcamp",
  //   // cert: "https://assets.kodego.ph/public/isa/tQtx2B19J47h1VVVNMva3vL4mivpnSR5EMZLLQt8.pdf",
  //   cert: "https://drive.google.com/file/d/1XrFK5GVvjtCODmvSfAJw2PnM9NDV8_9U/view?usp=sharing",
  //   isPresent: false,
  // },
];

export function EduList() {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl text-slate-200 md:text-2xl">
        Education / Certification
      </h2>
      {/* card */}
      {mockEduData.map((item: mockEduDataType, index) => (
        <div
          key={index}
          className="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4"
        >
          <div className="flex w-full gap-3">
            <div className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
            </div>
            <div>
              <div
                className={`text-base text-white md:text-lg ${item.isPresent ? "animate-pulse" : ""}`}
              >
                {item.description}
              </div>
              <p className="text-sm text-slate-400 md:text-base italic">
                ~ {item.name}{" "}
                {item.startDate && item.endDate && (
                  <span className="text-xs">
                    ({`${item.startDate} - ${item.endDate}`})
                  </span>
                )}
              </p>
            </div>
          </div>
          {item.cert !== "" && (
            <div className="flex items-start pt-2">
              <a
                href={item.cert}
                target="_blank"
                aria-label={`Certification Link to ${item.name}`}
              >
                <svg
                  className="cursor-pointer text-xl hover:fill-cyan-600 overflow-visible text-white"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
