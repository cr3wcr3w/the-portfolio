import styles from "./message.module.css";

const messages = [
  {
    text: "typecsript",
  },
  {
    text: "react",
  },
  {
    text: "next",
  },
  {
    text: "tailwind",
  },
  {
    text: "gsap",
  },
  {
    text: "express",
  },
  {
    text: "hono",
  },
  {
    text: "drizzle",
  },
  {
    text: "postgres",
  },
  {
    text: "docker",
  },
  {
    text: "terraform",
  },
  {
    text: "digitalOcean",
  },
  {
    text: "linux",
  },
  {
    text: "postman",
  },
];

function InfiniteMessage() {
  return (
    <section className="mb-16">
      <div className={styles.scroller} data-speed="slow" data-animated="true">
        <ul className={styles.scroller__inner}>
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
