import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-11gfgug.svelte-11gfgug{width:100%;height:100vh;background-color:var(--background-color);display:flex;justify-content:center;align-items:center;padding:2rem}section.svelte-11gfgug>h1.svelte-11gfgug,section.svelte-11gfgug>p.svelte-11gfgug{background:var(--sky-gradient);font-family:'Bakbak One';background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;word-wrap:break-word}h1.svelte-11gfgug.svelte-11gfgug{font-size:6rem}p.svelte-11gfgug.svelte-11gfgug{font-size:3rem}a.svelte-11gfgug.svelte-11gfgug{font-size:1.5rem;color:var(--sky-blue)}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="svelte-11gfgug"><section class="svelte-11gfgug"><h1 class="svelte-11gfgug">Error</h1>
		<p class="svelte-11gfgug">${escape($page.status)} - ${escape($page.error?.message)}</p>
		<br>
		<a href="/" class="svelte-11gfgug">Home</a></section>
</div>`;
});
export {
  Error$1 as default
};
