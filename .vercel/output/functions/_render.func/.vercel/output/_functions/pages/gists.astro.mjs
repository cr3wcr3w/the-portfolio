/* empty css                                 */
import { c as createComponent$1, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_VgBgI_oS.mjs';
import 'kleur/colors';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, onMount, onCleanup, For } from 'solid-js';
import { $ as $$Index, a as $$Index$1 } from '../chunks/index_t3ERgLYk.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$$2 = ["<div", ' class="mb-3 flex h-[68px] cursor-wait items-center gap-3 bg-gray-800 p-3 md:h-[76px] md:gap-4"></div>'];
function Loading() {
  return [ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$$2, ssrHydrationKey())];
}

var _tmpl$$1 = ["<div", ' class="mb-3 flex h-[68px] cursor-not-allowed items-center gap-3 bg-gray-800 p-3 md:h-[76px] md:gap-4 animate-pulse border border-red-700"></div>'], _tmpl$2$1 = ["<div", ' class="mb-3 flex h-[68px] cursor-not-allowed items-center gap-3 bg-gray-800 p-3 md:h-[76px] md:gap-4 animate-pulse border border-red-800"></div>'], _tmpl$3 = ["<div", ' class="mb-3 flex h-[68px] cursor-not-allowed items-center gap-3 bg-gray-800 p-3 md:h-[76px] md:gap-4 animate-pulse border border-red-900"></div>'];
function Error() {
  return [ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey())];
}

const FetchGist = () => {
  const [data, setData] = createSignal([]);
  const [isError, setIsError] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(false);
  const abortController = new AbortController();
  const fetchRepos = async (username) => {
    const url = `https://api.github.com/users/${username}/gists`;
    const data2 = await fetch(url, {
      signal: abortController.signal
    });
    setIsLoading(true);
    const res = await data2.json();
    return res;
  };
  onMount(() => {
    fetchRepos("cr3wcr3w").then((res) => {
      const filteredGists = res.map((repo) => ({
        html_url: repo.html_url,
        filename: repo.files[Object.keys(repo.files)[0]].filename,
        updated_at: repo.updated_at
      }));
      setIsLoading(false);
      setData(filteredGists);
    }).catch((_) => {
      setIsError(true);
      setIsLoading(false);
    });
    onCleanup(() => {
      abortController.abort();
    });
  });
  return {
    data,
    isError,
    isLoading
  };
};

var _tmpl$ = ["<section", ' class="mb-12"><!--$-->', "<!--/--><!--$-->", '<!--/--><div class="flex items-center gap-1"><a class="inline text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline" href="https://gist.github.com/K3ndev" target="_blank">View all Gist<svg class="inline" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow:visible;"><path d="M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg></a></div></section>'], _tmpl$2 = ["<a", ' class="mb-3 flex cursor-pointer items-center gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:gap-4"', ' target="_blank"><div><svg class="text-xl" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1em" width="1em" style="overflow:visible;"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zm96-34c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"></path></svg></div><div><h3 class="', '">', '</h3><p class="text-sm text-slate-400 md:text-base italic">Updated at: <!--$-->', "<!--/--></p></div></a>"];
function GistList() {
  const {
    data,
    isError,
    isLoading
  } = FetchGist();
  return ssr(_tmpl$, ssrHydrationKey(), !isError() && escape(createComponent(For, {
    get each() {
      return data();
    },
    get fallback() {
      return createComponent(Loading, {});
    },
    children: (item) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("href", escape(item.html_url, true), false), `text-base text-white md:text-lg`, escape(item.filename), escape(item.updated_at))
  })), isError() && !isLoading() && escape(createComponent(Error, {})));
}

const $$Gists = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$1, { "title": "Gist" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto max-w-2xl flex-1 px-6"> <section class="mb-16"> <h2 class="mb-4 text-2xl">My Notes</h2> ${renderComponent($$result2, "GistList", GistList, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/index", "client:component-export": "GistList" })} </section> </main> ${renderComponent($$result2, "Footer", $$Index, {})} ` })}`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/gists.astro", void 0);

const $$file = "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/gists.astro";
const $$url = "/gists";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gists,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
