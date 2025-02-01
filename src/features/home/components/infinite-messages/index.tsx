import "./index.css";

const messages = [
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
  {
    text: "Whispers... Watching?",
  },
];

function InfiniteMessage() {
  return (
    <section className="mb-16">
      <div className="scroller" data-speed="slow" data-animated="true">
        <ul className="scroller__inner">
          {messages.map((tech, index) => (
            <li key={index}>
              <p className="text-lg text-slate-400 hover:text-slate-100">
                {tech.text}
              </p>
            </li>
          ))}
          {messages.map((tech, index) => (
            <li key={index}>
              <p className="text-lg text-slate-400 hover:text-slate-100">
                {tech.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InfiniteMessage;
