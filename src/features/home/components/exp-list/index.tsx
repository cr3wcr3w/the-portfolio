const mockExpData = [
  {
    name: "Dewaste Solution",
    startDate: "Feb 2024",
    endDate: "Present",
    description: "Web Developer (Remote)",
    isPresent: true,
  },
  {
    name: "Dianoia Tech",
    startDate: "Feb 2024",
    endDate: "May 2024",
    description: "Software Developer (Remote)",
    isPresent: false,
  },
];

export function ExpList() {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl text-slate-200 md:text-2xl">Work</h2>
      {/* card */}
      {mockExpData.map((item) => {
        return (
          <div
            key={item.name}
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
                    className="lucide lucide-briefcase text-white"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>{" "}
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
                  <span className="text-xs">
                    ({`${item.startDate} - ${item.endDate}`})
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
