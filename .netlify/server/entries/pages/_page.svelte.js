import { c as create_ssr_component, d as compute_rest_props, o as onDestroy, f as spread, h as escape_object, i as add_attribute, j as escape_attribute_value, e as escape, k as createEventDispatcher, v as validate_component, m as missing_component, l as compute_slots, p as null_to_empty, q as each } from "../../chunks/index.js";
function browserEvent(target, ...args) {
  target.addEventListener(...args);
  return () => target.removeEventListener(...args);
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const InlineContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let ref;
  let portal;
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const OffcanvasBackdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = classnames(className, "offcanvas-backdrop");
  return `${isOpen ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const OffcanvasBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "offcanvas-body");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const OffcanvasHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "children", "closeAriaLabel", "toggle"]);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { toggle = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  classes = classnames(className, "offcanvas-header");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}><h5 class="offcanvas-title">${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</h5>
  ${slots.close ? slots.close({}) : `
    ${typeof toggle === "function" ? `<button${add_attribute("aria-label", closeAriaLabel, 0)} class="btn-close" type="button"></button>` : ``}
  `}</div>`;
});
const Offcanvas_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".overflow-noscroll{overflow:hidden;padding-right:0px}",
  map: null
};
const Offcanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let outer;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "backdrop",
    "body",
    "container",
    "fade",
    "header",
    "isOpen",
    "placement",
    "scroll",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "style",
    "toggle"
  ]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { backdrop = true } = $$props;
  let { body = true } = $$props;
  let { container = "body" } = $$props;
  let { fade = true } = $$props;
  let { header = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { placement = "start" } = $$props;
  let { scroll = false } = $$props;
  let { sm = false } = $$props;
  let { md = false } = $$props;
  let { lg = false } = $$props;
  let { xl = false } = $$props;
  let { xxl = false } = $$props;
  let { style = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let isTransitioning = false;
  let element;
  let removeEscListener;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.scroll === void 0 && $$bindings.scroll && scroll !== void 0)
    $$bindings.scroll(scroll);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  $$result.css.add(css$5);
  {
    if (isOpen && toggle && typeof window !== "undefined") {
      removeEscListener = browserEvent(document, "keydown", (event) => {
        if (event.key && event.key === "Escape")
          toggle();
      });
    }
  }
  {
    if (!isOpen && removeEscListener) {
      removeEscListener();
    }
  }
  classes = classnames(
    {
      offcanvas: !sm && !md && !lg && !xl && !xxl,
      "offcanvas-sm": sm,
      "offcanvas-md": md,
      "offcanvas-lg": lg,
      "offcanvas-xl": xl,
      "offcanvas-xxl": xxl,
      show: isOpen
    },
    `offcanvas-${placement}`,
    className
  );
  outer = container === "inline" ? InlineContainer : Portal;
  return `

${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `<div${spread(
        [
          escape_object($$restProps),
          {
            "aria-hidden": escape_attribute_value(!isOpen ? true : void 0)
          },
          {
            "aria-modal": escape_attribute_value(isOpen ? true : void 0)
          },
          { class: escape_attribute_value(classes) },
          {
            role: escape_attribute_value(isOpen || isTransitioning ? "dialog" : void 0)
          },
          {
            style: escape_attribute_value(`visibility: ${isOpen || isTransitioning ? "visible" : "hidden"};${style}`)
          },
          { tabindex: "-1" }
        ],
        {}
      )}${add_attribute("this", element, 0)}>${toggle || header || $$slots.header ? `${validate_component(OffcanvasHeader, "OffcanvasHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `${header ? `${escape(header)}` : ``}
        ${slots.header ? slots.header({}) : ``}`;
        }
      })}` : ``}
    ${body ? `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</div>
  ${backdrop ? `${validate_component(OffcanvasBackdrop, "OffcanvasBackdrop").$$render($$result, { fade, isOpen }, {}, {})}` : ``}`;
    }
  })}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "header.svelte-145x367.svelte-145x367{position:fixed;top:0;height:var(--header-height);width:100vw;z-index:10}.desktop-nav.svelte-145x367.svelte-145x367{background-color:transparent;backdrop-filter:blur(10px);height:100%}.desktop-nav.svelte-145x367 ul.svelte-145x367{position:absolute;top:50%;right:0;transform:translateY(-50%);display:flex;flex-direction:row;justify-content:right;margin:0 0 0 auto;padding:0 var(--min-page-margin)}li.svelte-145x367.svelte-145x367{list-style-type:none}.desktop-nav.svelte-145x367 li.svelte-145x367{margin:0 0 0 1rem;font-size:1.2rem}.desktop-nav.svelte-145x367 button.svelte-145x367{color:var(--background-color);transition:0.1s}header.underwater.svelte-145x367 .desktop-nav.svelte-145x367{background-color:var(--background-color-translucent)}header.underwater.svelte-145x367 .desktop-nav button.svelte-145x367{color:var(--accent-color)}.desktop-nav.svelte-145x367 button.svelte-145x367,.mobile-nav.svelte-145x367 button.svelte-145x367{background-color:transparent;border:none}.desktop-nav.svelte-145x367 button.svelte-145x367:hover{text-decoration:underline}.mobile-menu-button.svelte-145x367.svelte-145x367{position:fixed;display:none;top:1rem;right:calc(var(--min-page-margin) * 0.25);width:calc(var(--min-page-margin) * 0.75);background-color:transparent;border:none;padding:0;margin:0}.mobile-menu-button.svelte-145x367 img.svelte-145x367{height:100%;width:100%;filter:var(--background-color);transition:0.1s}header.underwater.svelte-145x367 .mobile-menu-button img.svelte-145x367{filter:var(--svg-filter-accent)}.mobile-menu.svelte-145x367.svelte-145x367,.mobile-nav.svelte-145x367.svelte-145x367{overflow-x:hidden}.mobile-nav.svelte-145x367 ul.svelte-145x367{padding:0}.mobile-nav.svelte-145x367 li.svelte-145x367{font-size:3rem;font-family:'Bakbak One'}.mobile-nav.svelte-145x367 button.svelte-145x367{color:var(--accent-color)}@media(max-width: 992px){.desktop-nav.svelte-145x367.svelte-145x367{display:none}.mobile-menu-button.svelte-145x367.svelte-145x367{display:block}}",
  map: null
};
const menu = "/images/bars-solid.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let underwaterClass = "";
  let labels = ["Home", "About", "Projects", "Blog", "Contact"];
  let open = false;
  const toggle = () => open = !open;
  $$result.css.add(css$4);
  underwaterClass = "";
  return `

<header class="${escape(null_to_empty(underwaterClass), true) + " svelte-145x367"}"><nav class="desktop-nav svelte-145x367"><ul class="svelte-145x367">${each(labels, (label, index) => {
    return `<li class="svelte-145x367"><button class="svelte-145x367">${escape(label)}</button>
				</li>`;
  })}</ul></nav>
	<button class="mobile-menu-button svelte-145x367" type="button"><img${add_attribute("src", menu, 0)} alt="menu icon" loading="eager" class="svelte-145x367"></button>
	${validate_component(Offcanvas, "Offcanvas").$$render(
    $$result,
    {
      class: "mobile-menu",
      isOpen: open,
      toggle,
      placement: "end"
    },
    {},
    {
      default: () => {
        return `<nav class="mobile-nav svelte-145x367"><ul class="svelte-145x367">${each(labels, (label, index) => {
          return `<li class="svelte-145x367"><button class="svelte-145x367">${escape(label)}</button>
					</li>`;
        })}</ul></nav>`;
      }
    }
  )}
</header>`;
});
const Wave_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1he87rx.svelte-1he87rx{position:absolute;left:50%;transform:translateX(-50%);bottom:var(--home-bottom-height);width:101vw;height:11.9vh}.waves.svelte-1he87rx.svelte-1he87rx{width:100%;height:10vh}.bottom.svelte-1he87rx.svelte-1he87rx{width:100%;height:15vh;transform:translateY(-1px)}.parallax.svelte-1he87rx>use.svelte-1he87rx{animation:svelte-1he87rx-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}.parallax.svelte-1he87rx>use.svelte-1he87rx:nth-child(1){animation-delay:-2s;animation-duration:6s}.parallax.svelte-1he87rx>use.svelte-1he87rx:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax.svelte-1he87rx>use.svelte-1he87rx:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax.svelte-1he87rx>use.svelte-1he87rx:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes svelte-1he87rx-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}@media(max-width: 576px){div.svelte-1he87rx.svelte-1he87rx{bottom:calc(var(--home-bottom-height-mobile) + 1vh);height:8vh}}",
  map: null
};
const Wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="svelte-1he87rx"><svg class="waves svelte-1he87rx" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="parallax svelte-1he87rx"><use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,28,85,0.7" class="svelte-1he87rx"></use><use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,28,85,0.5)" class="svelte-1he87rx"></use><use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,28,85,0.3)" class="svelte-1he87rx"></use><use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0,28,85,1)" class="svelte-1he87rx"></use></g></svg>
	<svg class="bottom svelte-1he87rx"><rect width="100%" height="100%" fill="rgba(0,28,85,1)"></rect></svg>
</div>`;
});
const TechLogo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".tech-logo.svelte-1aambkv.svelte-1aambkv{position:relative;width:20%;max-width:8rem;margin:1rem 1rem 2rem;animation:svelte-1aambkv-bob 3s ease-in-out infinite}.img-box.svelte-1aambkv.svelte-1aambkv{position:relative;background-color:var(--accent-color);border-radius:50%;width:100%;aspect-ratio:1 / 1;margin:0 auto 0.5rem}.img-box.svelte-1aambkv img.svelte-1aambkv{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:60%;max-width:70%;object-fit:contain}p.svelte-1aambkv.svelte-1aambkv{position:absolute;left:50%;transform:translateX(-50%);text-align:center;font-size:1.4rem;font-family:'Bakbak One', 'Arial', 'sans-serif';color:var(--accent-color)}@keyframes svelte-1aambkv-bob{0%{transform:translateY(0)}50%{transform:translateY(7%)}100%{transform:translateY(0)}}@media(max-width: 576px){p.svelte-1aambkv.svelte-1aambkv{font-size:1rem}}@media(min-width: 576px) and (max-width: 768px){p.svelte-1aambkv.svelte-1aambkv{font-size:1.2rem}}",
  map: null
};
const TechLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { index } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$2);
  return `<div class="tech-logo svelte-1aambkv" style="${"animation-delay: -" + escape(0.5 * index, true) + "s"}"><div class="img-box svelte-1aambkv"><img${add_attribute("src", data.imageSrc, 0)} alt="${escape(data.name, true) + " logo"}" class="svelte-1aambkv"></div>
	<p class="svelte-1aambkv">${escape(data.name)}</p>
</div>`;
});
const techData = [
  {
    name: "TypeScript",
    imageSrc: "/images/tech-logos/typescript-logo.png"
  },
  {
    name: "React",
    imageSrc: "/images/tech-logos/react-logo.png"
  },
  {
    name: "Redux",
    imageSrc: "/images/tech-logos/redux-logo-1.png"
  },
  {
    name: "Svelte",
    imageSrc: "/images/tech-logos/svelte-logo.png"
  },
  {
    name: "HTML",
    imageSrc: "/images/tech-logos/html-logo.png"
  },
  {
    name: "CSS",
    imageSrc: "/images/tech-logos/css-logo.png"
  },
  {
    name: "Tailwind",
    imageSrc: "/images/tech-logos/tailwind-logo-1.png"
  },
  {
    name: "Bootstrap",
    imageSrc: "/images/tech-logos/bootstrap-logo.png"
  },
  {
    name: "C#",
    imageSrc: "/images/tech-logos/csharp-logo.png"
  },
  {
    name: "Go",
    imageSrc: "/images/tech-logos/go-logo-1.png"
  },
  {
    name: "Python",
    imageSrc: "/images/tech-logos/python-logo.png"
  },
  {
    name: "Django",
    imageSrc: "/images/tech-logos/django-logo.png"
  },
  {
    name: "Perl",
    imageSrc: "/images/tech-logos/perl-logo.png"
  },
  {
    name: "Git",
    imageSrc: "/images/tech-logos/git-logo.png"
  },
  {
    name: "Linux",
    imageSrc: "/images/tech-logos/linux-logo.png"
  },
  {
    name: "Web Scraping",
    imageSrc: "/images/tech-logos/web-scraping-logo.png"
  }
];
const Main_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;top:0;width:100%;background-color:var(--background-color);overflow:hidden}section.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:first-child{background:linear-gradient(\n			0deg,\n			rgba(255, 122, 237, 1) 0%,\n			rgba(255, 220, 165, 1) 50%,\n			var(--sky-blue) 100%\n		);margin-bottom:2rem}section.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:not(:first-child){width:100%;max-width:992px;padding:0 var(--min-page-margin);margin:0 auto 3rem;scroll-margin:var(--header-height)}section.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0{font-size:1.5rem}.title.svelte-l1ukr0 .svelte-l1ukr0.svelte-l1ukr0{text-align:center;color:var(--background-color)}.title.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0{font-size:1.5rem}h1.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{font-size:clamp(4rem, 15vw, 6rem)}h2.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{font-size:4rem;margin:0 0 1rem}h3.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{font-size:2rem}h1.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,h2.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,h3.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{font-family:'Bakbak One', 'Georgia', 'sans-serif'}h2.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,h3.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,p.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{color:var(--accent-color)}.top.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;height:100vh}.top.svelte-l1ukr0>.row.svelte-l1ukr0.svelte-l1ukr0{position:absolute;top:40%;transform:translateY(-40%);width:100%}.top.svelte-l1ukr0>.row.svelte-l1ukr0>div.svelte-l1ukr0{position:relative}.img-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;width:375px;height:375px;margin:auto}.headshot.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{width:100%;height:100%;border-radius:50%;border:0.8rem solid var(--background-color)}.down-arrow-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:absolute;bottom:0;width:100%;height:var(--home-bottom-height);background-color:var(--background-color)}.down-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,.up-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:3rem;width:3rem;border:none;background-color:transparent}.down-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;margin:0 auto;bottom:-2vh;left:50%;transform:translateX(-50%)}.up-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;margin:0 0 3rem;transform:translateX(-50%) rotate(180deg)}.down-arrow.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0,.up-arrow.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0{width:100%;filter:var(--svg-filter-accent);transition:0.1s}.down-arrow.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0:hover,.up-arrow.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0:hover{scale:1.1}.about.svelte-l1ukr0 h3.svelte-l1ukr0.svelte-l1ukr0{margin-top:1rem}.skills.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{display:flex;flex-wrap:wrap;justify-content:center;max-width:700px;margin:auto}.project.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{margin:0 0 2rem}.full-width-img.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{width:100%;border-radius:0.75rem;margin-top:2rem}.gridlock-play.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;overflow:hidden;margin:1rem auto;max-width:350px}.gridlock-img.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{width:100%;border-radius:0.75rem;transition:0.1s}.gridlock-play.svelte-l1ukr0:hover img.svelte-l1ukr0.svelte-l1ukr0{filter:blur(3px) brightness(50%)}.project-buttons.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{display:flex;justify-content:space-evenly;gap:1rem;width:100%;margin-top:2rem}.overlay.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{width:100%;height:99%;position:absolute;top:0;left:0;opacity:0;vertical-align:center;color:#fff;font-size:2rem;font-weight:600;border-radius:0.75rem;display:flex;justify-content:center;align-items:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;transition:0.1s}.gridlock-play.svelte-l1ukr0:hover .overlay.svelte-l1ukr0.svelte-l1ukr0{opacity:1}.github-button.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0{width:2rem;margin-left:0.5rem}.video-wrapper.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{margin:2rem 0}video.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{border-radius:0.5rem}.button-primary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{display:flex;justify-content:space-between;align-items:center;background-color:var(--accent-color);height:'fit-content'}.button-primary.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0{color:#000;font-size:1.4rem;font-weight:600}.button-primary.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0{width:1.5rem;margin-left:1rem}.button-secondary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{display:flex;justify-content:space-between;align-items:center;color:var(--accent-color);background-color:transparent}.button-primary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,.button-secondary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{padding:0.5rem 0.6rem;border:1px solid var(--accent-color);border-radius:0.5rem;height:3rem;transition:0.1s}.button-primary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:hover,.button-secondary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:hover{transform:scale(1.07)}.blog.svelte-l1ukr0 .button-primary.svelte-l1ukr0.svelte-l1ukr0{margin:2rem auto 0}.contact-info.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:1rem}.copy-email.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:relative}.copy-button.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{width:100%}.copy-button.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0{width:1.8rem;margin-left:1rem;filter:var(--svg-filter-accent)}.copied.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{position:absolute;top:50%;transform:translateY(-50%);right:-3rem;transition:0.1s}.copied.svelte-l1ukr0 img.svelte-l1ukr0.svelte-l1ukr0{width:2rem;filter:var(--svg-filter-accent)}.copied.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:not(.show-check){opacity:0}.copied.show-check.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{opacity:1}@media(max-width: 576px){.top.svelte-l1ukr0>.row.svelte-l1ukr0.svelte-l1ukr0{position:absolute;top:20%;transform:translateY(-20%);width:100%}section.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0{font-size:1.3rem}.img-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:35vh;width:35vh}.up-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0,.down-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:15vw;width:15vw}.down-arrow.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{bottom:0}.down-arrow-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:var(--home-bottom-height-mobile);bottom:-10px}.button-primary.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0,.button-secondary.svelte-l1ukr0 p.svelte-l1ukr0.svelte-l1ukr0{font-size:1.2rem}.button-primary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:hover,.button-secondary.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0:hover{transform:none}.overlay.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{display:none}.gridlock-play.svelte-l1ukr0:hover .overlay.svelte-l1ukr0.svelte-l1ukr0{opacity:0}.gridlock-play.svelte-l1ukr0:hover img.svelte-l1ukr0.svelte-l1ukr0{filter:none}.gridlock-link.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{pointer-events:none}.copy-email.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{transform:scale(0.9)}}@media(min-width: 576px) and (max-width: 992px){.top.svelte-l1ukr0>.row.svelte-l1ukr0.svelte-l1ukr0{top:0;transform:translateY(0)}.img-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:45vh;width:45vh}.down-arrow-box.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{height:var(--home-bottom-height);bottom:-10px}.title.svelte-l1ukr0.svelte-l1ukr0.svelte-l1ukr0{margin:4vh 0 1rem}}",
  map: null
};
const headshot = "/images/headshot.jpg";
const racquetRivals = "/images/racquet-rivals-image2.png";
const aiPokerCoach = "/images/ai-poker-coach-image.png";
const gridlock = "/images/gridlock-image.png";
const downArrow = "/images/angles-down-solid.svg";
const github$1 = "/images/github.svg";
const copy = "/images/copy-icon.svg";
const check = "/images/check-solid.svg";
const externalLink = "/images/arrow-up-right-from-square-solid.svg";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showCheck = false;
  $$result.css.add(css$1);
  return `<main class="scroll-point svelte-l1ukr0"><section class="top svelte-l1ukr0"><div class="row align-items-center m-0 p-0 svelte-l1ukr0"><div class="col-xs-12 col-lg-7 pb-3 title svelte-l1ukr0"><h1 class="svelte-l1ukr0">Hi, I&#39;m Will</h1>
				<p class="svelte-l1ukr0">Software engineer, problem-solver, creator</p></div>
			<div class="col-xs-12 col-lg-5 svelte-l1ukr0"><div class="img-box svelte-l1ukr0"><img class="headshot svelte-l1ukr0"${add_attribute("src", headshot, 0)} alt="Headshot" loading="eager"></div></div></div>
		${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}
		<div class="down-arrow-box svelte-l1ukr0"><button type="button" class="down-arrow svelte-l1ukr0"><img class="col-xs-12 svelte-l1ukr0"${add_attribute("src", downArrow, 0)} alt="Down arrow to scroll to About" loading="eager"></button></div></section>

	<section class="scroll-point about svelte-l1ukr0"><h2 class="svelte-l1ukr0">About</h2>
		<p class="svelte-l1ukr0">I&#39;m passionate about making ideas come to life on the web. While working as a consultant, I
			learned firsthand the power of code and how it can be used to improve the lives of millions. I
			dabbled with JavaScript in my spare time and I was hooked, jumpstarting me on a life-changing
			journey to code professionally. Now, I am a software engineer at SIOS Technology Corp., where
			I work on high availability and disaster recovery solutions for cloud systems.
		</p>
		<h3 class="svelte-l1ukr0">Skills and Technologies</h3>
		<div class="skills svelte-l1ukr0">${each(techData, (data, index) => {
    return `${validate_component(TechLogo, "TechLogo").$$render($$result, { data, index }, {}, {})}`;
  })}</div></section>
	<section class="scroll-point projects svelte-l1ukr0"><h2 class="svelte-l1ukr0">Projects</h2>
		<article class="project svelte-l1ukr0"><a href="https://racquetrivals.com" target="_blank" rel="noopener noreferrer"><h3 class="svelte-l1ukr0">RacquetRivals.com</h3></a>
			<p class="svelte-l1ukr0">My wife and I used to create brackets by hand for the last 16 players of the four major
				tennis tournaments. We had so much fun I made it into a web app, like March Madness. Sign
				up, add your predictions during a major tournament, and you&#39;ll be awarded points by round
				for correct choices. You can compare scores with your friends along the way. The frontend is
				built with SvelteKit hosted on Netlify, and the backend is Pocketbase hosted on a Digital
				Ocean Linux Droplet.
			</p>
			<img class="full-width-img svelte-l1ukr0"${add_attribute("src", racquetRivals, 0)} alt="Racquet Rivals" loading="lazy">
			<div class="project-buttons svelte-l1ukr0"><a href="https://racquetrivals.com" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">RacquetRivals.com</p>
						<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a>
				<a href="https://github.com/willbraun/racquet-rivals" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">GitHub</p>
						<img${add_attribute("src", github$1, 0)} alt="github icon" loading="lazy" class="svelte-l1ukr0"></button></a></div></article>
		<article class="project svelte-l1ukr0"><h3 class="svelte-l1ukr0">AI Poker Coach</h3>
			<p class="svelte-l1ukr0">Poker is a game of incomplete information and luck, so it can be difficult to know if your
				play is correct. With this app, you can analyze your poker hands using AI fine-tuned with
				poker information. You&#39;re able to review your analysis in English rather than needing to
				decipher complex diagrams via traditional methods of poker study. The frontend is built with
				Next.js and hosted on Netlify, and the backend is an ASP.NET Core Web API with a PostgreSQL
				database hosted on a Digital Ocean Linux Droplet.
			</p>
			<img class="full-width-img svelte-l1ukr0"${add_attribute("src", aiPokerCoach, 0)} alt="AI Poker Coach" loading="lazy">
			<div class="project-buttons svelte-l1ukr0"><a href="https://aipokercoach.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">AI Poker Coach</p>
						<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a>
				<a href="https://github.com/willbraun/ai-poker-coach" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">GitHub</p>
						<img${add_attribute("src", github$1, 0)} alt="github icon" loading="lazy" class="svelte-l1ukr0"></button></a></div></article>
		<article class="project svelte-l1ukr0"><h3 class="svelte-l1ukr0">OpenSeat</h3>
			<p class="svelte-l1ukr0">When I moved to Greenville, SC, I was working remotely and found it tough to meet new
				people. I was inspired to create a solution to connect people based on their unique
				interests. With OpenSeat, you can create events to do any activity you&#39;d like with a small
				group. You can also search for and sign up for events that others have posted. It is a full
				stack app that I built with React, Django, Google and Twilio APIs, and deployed to Heroku.
				This was my final project at Carolina Code School, and I&#39;ve included a video demo of the app
				below.
			</p>
			<div class="video-wrapper svelte-l1ukr0" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe title="Open Seat Loom video demo" src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" loading="lazy"></iframe></div>
			<div class="project-buttons svelte-l1ukr0"><a href="https://github.com/willbraun/openseat-app" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">GitHub</p>
						<img${add_attribute("src", github$1, 0)} alt="github icon" loading="lazy" class="svelte-l1ukr0"></button></a></div></article>
		<article class="project svelte-l1ukr0"><h3 class="svelte-l1ukr0">Gridlock</h3>
			<div class="row gridlock-grid"><div class="col-xs-12 col-md-8 gridlock-info"><p class="svelte-l1ukr0">Gridlock is a 2-player strategy game that a friend showed me on a whiteboard, and I
						thought it would be fun to create a digital version. The goal is to connect 4 numbers in
						a row, using a factor of the number from your opponent&#39;s previous turn. I designed the
						app to be mobile-friendly, built it using React, and deployed it to Netlify.
					</p>
					<br>
					<p class="svelte-l1ukr0">Do you like a challenge? I am most proud of the &quot;Computer - Hard&quot; mode in Settings. It
						is an AI inspired by chess engines that I created to play against you. It uses a DFS
						minimax algorithm, alpha-beta pruning, and an evaluation function. See if you can beat
						it!
					</p>
					<div class="project-buttons svelte-l1ukr0"><a href="https://gridlock.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">Play Gridlock</p>
								<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a>
						<a href="https://github.com/willbraun/gridlock" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">GitHub</p>
								<img${add_attribute("src", github$1, 0)} alt="github icon" loading="lazy" class="svelte-l1ukr0"></button></a></div></div>
				<div class="col-xs-12 col-md-4 gridlock-play svelte-l1ukr0"><a class="gridlock-link svelte-l1ukr0" href="https://gridlock.willbraun.dev" target="_blank"><img class="gridlock-img svelte-l1ukr0"${add_attribute("src", gridlock, 0)} alt="Gridlock" loading="lazy">
						<div class="overlay svelte-l1ukr0">Click to play</div></a></div></div></article>
		<article class="project svelte-l1ukr0"><h3 class="svelte-l1ukr0">3D Dice Roll</h3>
			<p class="svelte-l1ukr0">Roll two six-sided dice and watch them bounce around. I used SvelteKit, Three.js, Threlte,
				the Rapier Physics Engine, and deployed it to Netlify.
			</p>
			<div class="video-wrapper svelte-l1ukr0"><video width="100%" muted autoplay loop playsinline class="svelte-l1ukr0"><source src="3d-dice-roll.mp4" type="video/mp4"></video></div>
			<div class="project-buttons svelte-l1ukr0"><a href="https://dice.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">Roll Dice</p>
						<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a>
				<a href="https://github.com/willbraun/3d-dice-roll" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">GitHub</p>
						<img${add_attribute("src", github$1, 0)} alt="github icon" loading="lazy" class="svelte-l1ukr0"></button></a></div></article></section>
	<section class="scroll-point blog svelte-l1ukr0"><h2 class="svelte-l1ukr0">Blog</h2>
		<p class="svelte-l1ukr0">I love software development because there is always more to learn, and I can share what I&#39;ve
			learned to help others. I write articles about tech I am working with, personal projects,
			problems I have solved, and life as a developer. Check it out!
		</p>
		<a href="https://blog.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">Visit My Blog</p>
				<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a></section>
	<section class="scroll-point contact svelte-l1ukr0"><h2 class="svelte-l1ukr0">Contact</h2>
		<div class="contact-info svelte-l1ukr0"><p class="svelte-l1ukr0">Want to chat? Feel free to reach out!</p>
			<a href="mailto:williamhbraun1@gmail.com" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">Open Mail App</p>
					<img${add_attribute("src", externalLink, 0)} alt="external link icon" loading="lazy" class="svelte-l1ukr0"></button></a>
			<div class="copy-email svelte-l1ukr0"><button class="copy-button button-secondary svelte-l1ukr0" type="button"><p class="svelte-l1ukr0">williamhbraun1@gmail.com</p>
					<img${add_attribute("src", copy, 0)} alt="copy email" loading="lazy" class="svelte-l1ukr0"></button>
				<div class="${"copied " + escape(showCheck, true) + " svelte-l1ukr0"}"><img${add_attribute("src", check, 0)} alt="copied check mark" loading="lazy" class="svelte-l1ukr0"></div></div></div></section>
	<button type="button" class="down-arrow up-arrow svelte-l1ukr0"><img class="col-xs-12 svelte-l1ukr0"${add_attribute("src", downArrow, 0)} alt="up arrow scroll to top" loading="lazy"></button>
</main>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1q7rvd4.svelte-1q7rvd4{position:relative;width:100%;background-color:var(--footer-color);padding:1rem}.footer-info.svelte-1q7rvd4.svelte-1q7rvd4{display:flex;margin:0 auto;justify-content:center;align-items:center}.footer-info.svelte-1q7rvd4 p.svelte-1q7rvd4{font-family:'Bakbak One';font-size:1.8rem;color:#999}.footer-info.svelte-1q7rvd4>.svelte-1q7rvd4:not(:last-child){margin-right:2rem}.logo.svelte-1q7rvd4 img.svelte-1q7rvd4{width:2.5rem;filter:var(--svg-filter-999999)}@media(max-width: 768px){.footer-info.svelte-1q7rvd4>.svelte-1q7rvd4:not(:last-child){margin-right:1rem}}",
  map: null
};
const linkedin = "/images/linkedin.svg";
const github = "/images/github.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear().toString();
  $$result.css.add(css);
  return `<footer class="svelte-1q7rvd4"><div class="footer-info svelte-1q7rvd4"><p class="svelte-1q7rvd4">Will Braun ${escape(year)}</p>
		<a class="logo svelte-1q7rvd4" href="https://www.linkedin.com/in/williamhbraun/" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", linkedin, 0)} alt="GitHub icon" loading="lazy" class="svelte-1q7rvd4"></a>
		<a class="logo svelte-1q7rvd4" href="https://github.com/willbraun" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", github, 0)} alt="GitHub icon" loading="lazy" class="svelte-1q7rvd4"></a></div>
</footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(Main, "Main").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>

${$$result.head += `<!-- HEAD_svelte-n9kkfe_START -->${$$result.title = `<title>Will Braun | Software Engineer</title>`, ""}<meta name="description" content="Will Braun is a software engineer passionate about building simple solutions to complex problems."><!-- HEAD_svelte-n9kkfe_END -->`, ""}`;
});
export {
  Page as default
};
