/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_VgBgI_oS.mjs';
import 'kleur/colors';
import { $ as $$Index, a as $$Index$1 } from '../chunks/index_t3ERgLYk.mjs';
export { renderers } from '../renderers.mjs';

const $$Writeups = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$1, { "title": "GuestBook" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto max-w-2xl flex-1 px-6"> <p>NOT AVAILABLE</p> </main> ${renderComponent($$result2, "Footer", $$Index, {})} ` })}`;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/writeups.astro", void 0);

const $$file = "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/writeups.astro";
const $$url = "/writeups";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Writeups,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
