import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BJxV2YX5.mjs';
import { d as decodeKey } from './chunks/astro/server_VgBgI_oS.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/crewcrew/Projects/Personal/astro-portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BcHL3qpA.js"}],"styles":[{"type":"external","src":"/_astro/gists.CXNvqJ73.css"}],"routeData":{"route":"/gists","isIndex":false,"type":"page","pattern":"^\\/gists\\/?$","segments":[[{"content":"gists","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gists.astro","pathname":"/gists","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BcHL3qpA.js"}],"styles":[{"type":"external","src":"/_astro/gists.CXNvqJ73.css"}],"routeData":{"route":"/writeups","isIndex":false,"type":"page","pattern":"^\\/writeups\\/?$","segments":[[{"content":"writeups","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writeups.astro","pathname":"/writeups","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BcHL3qpA.js"}],"styles":[{"type":"external","src":"/_astro/gists.CXNvqJ73.css"},{"type":"inline","content":".scroller[data-astro-cid-j7pv25f6]{max-width:600px}.scroller__inner[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;gap:3rem}.scroller[data-astro-cid-j7pv25f6][data-animated=true]{overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent,white 5%,white 95%,transparent);mask:linear-gradient(90deg,transparent,white 5%,white 95%,transparent)}.scroller[data-astro-cid-j7pv25f6][data-animated=true] .scroller__inner[data-astro-cid-j7pv25f6]{width:-moz-max-content;width:max-content;flex-wrap:nowrap;animation:scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite}.scroller[data-astro-cid-j7pv25f6][data-direction=right]{--_animation-direction: reverse}.scroller[data-astro-cid-j7pv25f6][data-direction=left]{--_animation-direction: forwards}.scroller[data-astro-cid-j7pv25f6][data-speed=fast]{--_animation-duration: 40s}.scroller[data-astro-cid-j7pv25f6][data-speed=slow]{--_animation-duration: 50s}@keyframes scroll{to{transform:translate(calc(-50% - .5rem))}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/gists.astro",{"propagation":"in-tree","containsHead":true}],["/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/crewcrew/Projects/Personal/astro-portfolio/src/pages/writeups.astro",{"propagation":"in-tree","containsHead":true}],["/home/crewcrew/Projects/Personal/astro-portfolio/src/components/footer/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/gists@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/writeups@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/writeups@_@astro":"pages/writeups.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/gists@_@astro":"pages/gists.astro.mjs","/home/crewcrew/Projects/Personal/astro-portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Dht3cEY1.mjs","/home/crewcrew/Projects/Personal/astro-portfolio/src/components/index":"_astro/index.DY76Ik5r.js","/home/crewcrew/Projects/Personal/astro-portfolio/src/components":"_astro/components.0BEVV86P.js","@astrojs/solid-js/client.js":"_astro/client.-ij0x0a3.js","/astro/hoisted.js?q=0":"_astro/hoisted.BcHL3qpA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/profile.CAg7MCwo.webp","/_astro/gists.CXNvqJ73.css","/favicon.svg","/foo.svg","/open_graph_image.png","/profile.webp","/robots.txt","/sitemap.xml","/_astro/client.-ij0x0a3.js","/_astro/components.0BEVV86P.js","/_astro/hoisted.BcHL3qpA.js","/_astro/index.DY76Ik5r.js","/_astro/web.DmsFf7co.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"LhSLbkzt6mgAaMrRj9n4rf3Dl9B6WClOKatqEDsxUpo=","experimentalEnvGetSecretEnabled":false});

export { manifest };
