import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B_NLcvJK.mjs';
import { manifest } from './manifest_Dht3cEY1.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/gists.astro.mjs');
const _page2 = () => import('./pages/writeups.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/gists.astro", _page1],
    ["src/pages/writeups.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "deb8ff5f-1661-49e6-9f2c-c69bd9b91d09",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
