import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="container mx-auto max-w-2xl px-4">
      <nav className="text-md mb-20 mt-8 flex w-full items-center justify-between ">
        <ul className="flex gap-2 text-slate-400">
          <li>
            <Link
              href="/"
              id="/"
              className={`${
                isActive("/") ? "text-slate-50" : ""
              } cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <span className="text-slate-400" aria-label="Separator">
              /
            </span>
          </li> */}
        </ul>

        <div>
          <a
            className="block cursor-pointer rounded-lg border border-slate-700 bg-slate-700 p-2 transition duration-300 ease-out hover:border hover:border-slate-400"
            href="https://gist.github.com/cr3wcr3w"
            target="_blank"
            aria-label="My Personal Gist Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
