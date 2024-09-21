/* empty css                                 */
import { c as createComponent$1, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_VgBgI_oS.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_DgLdTGhZ.mjs';
import { $ as $$Index$1, a as $$Index$2 } from '../chunks/index_t3ERgLYk.mjs';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { For } from 'solid-js';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var _tmpl$$1 = ["<section", ' class="mb-12">', "</section>"], _tmpl$2$1 = ["<div", ' class="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4"><div class="flex w-full gap-3"><div class="flex items-center"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> </div></div><div><div class="', '">', '</div><p class="text-sm text-slate-400 md:text-base italic">~ <!--$-->', '<!--/--> <span class="text-xs">(<!--$-->', "<!--/-->)</span></p></div></div></div>"];
const mockExpData = [{
  name: "Dianoia Tech",
  startDate: "Feb 2024",
  endDate: "May 2024",
  description: "Software Developer (Remote)",
  isPresent: false
}];
function ExpList() {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(For, {
    each: mockExpData,
    children: (item) => ssr(_tmpl$2$1, ssrHydrationKey(), `text-base text-white md:text-lg ${item.isPresent ? "animate-pulse" : ""}`, escape(item.description), escape(item.name), `${escape(item.startDate)} - ${escape(item.endDate)}`)
  })));
}

var _tmpl$ = ["<section", ' class="mb-12">', "</section>"], _tmpl$2 = ["<div", ' class="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4"><div class="flex w-full gap-3"><div class="flex items-center"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg> </div></div><div><div class="', '">', '</div><p class="text-sm text-slate-400 md:text-base italic">~ <!--$-->', "<!--/--> <!--$-->", "<!--/--></p></div></div><!--$-->", "<!--/--></div>"], _tmpl$3 = ["<span", ' class="text-xs">(<!--$-->', "<!--/-->)</span>"], _tmpl$4 = ["<div", ' class="flex items-start pt-2"><a', ' target="_blank" aria-label="', '"><svg class="cursor-pointer text-xl hover:fill-cyan-600" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow:visible;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg></a></div>'];
const mockEduData = [
  // {
  //   name: 'Cybersecurity Online Training',
  //   startDate: 'May 2024',
  //   endDate: 'Present',
  //   description: 'Hack The Box Academy',
  //   cert: '',
  //   isPresent: true
  // },
  {
    name: "Mapúa Malayan Digital College",
    startDate: "",
    // Apr 2024
    endDate: "",
    // Present
    description: "BSIT Major in Network and Cybersecurity",
    cert: "",
    isPresent: false
  },
  {
    name: "KodeGo",
    startDate: "",
    // Nov 2022
    endDate: "",
    // Mar 2023
    description: "FullStack Development Bootcamp",
    cert: "https://assets.kodego.ph/public/isa/tQtx2B19J47h1VVVNMva3vL4mivpnSR5EMZLLQt8.pdf",
    isPresent: false
  }
];
function EduList() {
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
    each: mockEduData,
    children: (item) => ssr(_tmpl$2, ssrHydrationKey(), `text-base text-white md:text-lg ${item.isPresent ? "animate-pulse" : ""}`, escape(item.description), escape(item.name), item.startDate && item.endDate && ssr(_tmpl$3, ssrHydrationKey(), `${escape(item.startDate)} - ${escape(item.endDate)}`), item.cert !== "" && ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("href", escape(item.cert, true), false), `Certification Link to ${escape(item.name, true)}`))
  })));
}

const ProfilePic = new Proxy({"src":"/_astro/profile.CAg7MCwo.webp","width":460,"height":460,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/crewcrew/Projects/Personal/astro-portfolio/public/profile.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent$1(($$result, $$props, $$slots) => {
  const messages = [
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    },
    {
      text: "Whispers... Watching?"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$2, { "title": "Portfollio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto max-w-2xl flex-1 px-6" data-astro-cid-j7pv25f6> <!-- profile --> <section class="mb-16 flex flex-col gap-8 md:flex-row-reverse md:gap-14" data-astro-cid-j7pv25f6> <div class="z-50 w-[100px] md:w-[300px]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": ProfilePic, "alt": "profile_pic", "class": "aspect-square", "width": "200", "height": "200", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> <h1 class="playfair-font text-4xl font-bold text-white md:text-5xl mb-4" data-astro-cid-j7pv25f6>
Kenneth Racelis
</h1> <!-- <p class="mb-4 text-lg text-slate-200 md:text-xl">
          Aspiring Security Researcher
        </p> --> <p class="text-slate-400 text-pretty" data-astro-cid-j7pv25f6>
At present, I'm working towards honing my skills in Software Development.
</p> </div> </section> <section class="mb-16" data-astro-cid-j7pv25f6> <div class="scroller" data-speed="slow" data-animated="true" data-astro-cid-j7pv25f6> <ul class="scroller__inner" data-astro-cid-j7pv25f6> ${messages.map((tech) => renderTemplate`<li data-astro-cid-j7pv25f6> <p class="text-lg text-slate-400 hover:text-slate-100" data-astro-cid-j7pv25f6> ${tech.text} </p> </li>`)} ${messages.map((tech) => renderTemplate`<li data-astro-cid-j7pv25f6> <p class="text-lg text-slate-400 hover:text-slate-100" data-astro-cid-j7pv25f6> ${tech.text} </p> </li>`)} </ul> </div> </section> <section class="mb-16" data-astro-cid-j7pv25f6> <h2 class="mb-4 text-2xl" data-astro-cid-j7pv25f6>Work</h2> ${renderComponent($$result2, "ExpList", ExpList, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/index", "client:component-export": "ExpList", "data-astro-cid-j7pv25f6": true })} </section> <section class="mb-16" data-astro-cid-j7pv25f6> <h2 class="mb-4 text-2xl" data-astro-cid-j7pv25f6>Education / Certification</h2> ${renderComponent($$result2, "EduList", EduList, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/crewcrew/Projects/Personal/astro-portfolio/src/components/index", "client:component-export": "EduList", "data-astro-cid-j7pv25f6": true })} </section> <section class="mb-16" data-astro-cid-j7pv25f6> <h3 class="playfair-font mb-4 text-3xl md:text-4xl" data-astro-cid-j7pv25f6>Get in Touch</h3> <p class="text-slate-400" data-astro-cid-j7pv25f6>
If you want to work together, Don't hesitate to contact me.
</p> <a class="mb-4 inline-block text-slate-400 underline transition duration-300 ease-out hover:text-white" href="mailto:racelisjk@gmail.com" aria-label="Contact racelisjk@gmail.com via Email." data-astro-cid-j7pv25f6>racelisjk@gmail.com</a> <div class="flex gap-3" data-astro-cid-j7pv25f6> <a href="https://github.com/K3ndev" target="_blank" class="text-xl transition duration-300 ease-out hover:scale-125" aria-label="github" data-astro-cid-j7pv25f6><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;" data-astro-cid-j7pv25f6><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" data-astro-cid-j7pv25f6></path></svg></a> <a href="https://www.linkedin.com/in/jkenneth-racelis/" target="_blank" class="text-xl transition duration-300 ease-out hover:scale-125" aria-label="linkedin" data-astro-cid-j7pv25f6><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;" data-astro-cid-j7pv25f6><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" data-astro-cid-j7pv25f6></path></svg></a> <a href="https://twitter.com/k3n_dev" target="_blank" class="text-xl transition duration-300 ease-out hover:scale-125" aria-label="twitter" data-astro-cid-j7pv25f6><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;" data-astro-cid-j7pv25f6><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" data-astro-cid-j7pv25f6></path></svg></a> <a href="https://www.buymeacoffee.com/K3ndev" aria-label="coffee" target="_blank" class="text-xl transition duration-300 ease-out hover:scale-125" data-astro-cid-j7pv25f6><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;" data-astro-cid-j7pv25f6><path d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z" data-astro-cid-j7pv25f6></path></svg></a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Index$1, { "data-astro-cid-j7pv25f6": true })} ` })} <!-- todo  https://web.dev/use-srcset-to-automatically-choose-the-right-image/ --> `;
}, "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
