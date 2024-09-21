import { c as createComponent, r as renderTemplate, b as addAttribute, e as createAstro, m as maybeRenderHead, a as renderComponent, f as renderHead, g as renderSlot, h as renderTransition } from './astro/server_VgBgI_oS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { ssr, ssrHydrationKey } from 'solid-js/web';
import { onMount } from 'solid-js';
import Lenis from '@studio-freight/lenis';

var _tmpl$ = ["<div", ' id="stars1"></div>'], _tmpl$2 = ["<div", ' id="stars2"></div>'], _tmpl$3 = ["<div", ' id="stars3"></div>'], _tmpl$4 = ["<div", ' id="stars4"></div>'];
function WrapperAnimation(props) {
  onMount(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const generateStart = (n) => {
      let value = `${Math.floor(Math.random() * 2e3)}px ${Math.floor(Math.random() * 2e3)}px rgba(165, 190, 195, ${Math.random().toFixed(1)})`;
      for (let i = 0; i <= n; i++) {
        value += `, ${Math.floor(Math.random() * 2e3)}px ${Math.floor(Math.random() * 2e3)}px rgba(184, 174, 131, ${Math.random().toFixed(1)})`;
      }
      return value;
    };
    let starsElement1 = document.getElementById("stars1");
    let starsElement2 = document.getElementById("stars2");
    let starsElement3 = document.getElementById("stars3");
    let starsElement4 = document.getElementById("stars4");
    starsElement1.style.boxShadow = generateStart(200);
    starsElement2.style.boxShadow = generateStart(300);
    starsElement3.style.boxShadow = generateStart(400);
    starsElement4.style.boxShadow = generateStart(500);
  });
  return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey()), ssr(_tmpl$4, ssrHydrationKey()), props.children];
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="container mx-auto max-w-2xl px-4"> <nav class="text-md mb-20 mt-8 flex w-full items-center"> <ul class="flex gap-2 text-slate-400"> <li> <a id="home" href="/"${addAttribute(`cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`, "class")}>
Home
</a> </li> <li> <span class="text-slate-400" aria-label="Separator">/</span> </li> <li> <a href="/gists"${addAttribute(`cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`, "class")}>
Gist
</a> </li> <li> <span class="text-slate-400" aria-label="Separator">/</span> </li> <li> <a href="/writeups"${addAttribute(`cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`, "class")}>
WriteUps
</a> </li> </ul> <!-- <div>
        <a
          class="block cursor-pointer rounded-lg border border-slate-700 bg-slate-700 p-2 transition duration-300 ease-out hover:border hover:border-slate-400"
          href="https://k3ndev-performance.netlify.app/k3ndev/"
          target="_blank"
          aria-label="Benchmark K3ndev Personal web site projects"
        >
          <svg
                class="text-xl"
                fill="currentColor"
                stroke-width="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                style="overflow: visible;"
                ><path
                    d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
                ></path><path
                    fill-rule="evenodd"
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                ></path></svg
            >
        </a>
      </div> --> </nav> </header>`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/header/index.astro", void 0);

const $$Astro = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="google-site-verification" content="QajpGGQoBUWPWVjjbTovpjj6KqcvdlOwSdQFM5jXFzs"><!-- Primary Tags --><title>${title}</title><meta name="title" content="K3ndev Portfolio"><meta name="description" content="Explore
      my
      portfolio
      that
      build
      in
      astro
      with
      solid.js"><!-- Twitter --><meta property="twitter:title" content="K3ndev Portfolio"><meta property="twitter:description" content="Explore my portfolio that build in astro with solid.js"><meta property="twitter:image" content="https://astro-k3ndev.vercel.app/open_graph_image.png"><meta property="twitter:url" content="https://astro-k3ndev.vercel.app"><meta property="twitter:card" content="https://astro-k3ndev.vercel.app/open_graph_image.png"><!-- Facebook --><meta property="og:title" content="K3ndev Portfolio"><meta property="og:description" content="Explore my portfolio that build in astro with solid.js"><meta property="og:url" content="https://astro-k3ndev.vercel.app"><meta property="og:image" content="https://astro-k3ndev.vercel.app/open_graph_image.png"><meta property="og:type" content="website"><!-- view transition -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="lato-font flex min-h-[100dvh] flex-col text-white"> ${renderComponent($$result, "WrapperAnimation", WrapperAnimation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/crewcrew/Projects/Personal/astro-portfolio/src/components", "client:component-export": "WrapperAnimation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Index$2, {})} ${renderSlot($$result2, $$slots["default"])} ` })}   </body></html>`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/layouts/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="container mx-auto my-8 max-w-2xl px-4" data-astro-transition-persist="footer"${addAttribute(renderTransition($$result, "5zxdr63r", "", "footer"), "data-astro-transition-scope")}> <p class="text-center text-sm text-slate-400">Build by me ©2024</p> </footer>`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/footer/index.astro", "self");

export { $$Index as $, $$Index$1 as a };
