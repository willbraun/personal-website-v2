import { v as slot, w as sanitize_props, x as rest_props, y as attributes, z as clsx, F as bind_props, G as attr, J as sanitize_slots, K as attr_class, N as ensure_array_like, O as attr_style, P as stringify, Q as head } from "../../chunks/index2.js";
import { p as ssr_context, q as fallback, m as escape_html } from "../../chunks/context.js";
import { w as writable } from "../../chunks/index.js";
import "matter-js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
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
const classnames = (...args) => args.map(toClassName).filter(Boolean).join(" ");
function InlineContainer($$renderer, $$props) {
  $$renderer.push(`<div><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div>`);
}
function Portal($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    $$renderer2.push(`<div${attributes({ ...$$restProps })}><!--[-->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!--]--></div>`);
  });
}
function OffcanvasBackdrop($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "isOpen", "fade"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let isOpen = fallback($$props["isOpen"], false);
    let fade = fallback($$props["fade"], true);
    classes = classnames(className, "offcanvas-backdrop");
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes({ role: "presentation", ...$$restProps, class: clsx(classes) }, void 0, { fade })}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { class: className, isOpen, fade });
  });
}
function OffcanvasBody($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    classes = classnames(className, "offcanvas-body");
    $$renderer2.push(`<div${attributes({ ...$$restProps, class: clsx(classes) })}><!--[-->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { class: className });
  });
}
function OffcanvasHeader($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "content", "closeAriaLabel", "toggle"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let content = fallback($$props["content"], void 0);
    let closeAriaLabel = fallback($$props["closeAriaLabel"], "Close");
    let toggle = fallback($$props["toggle"], void 0);
    classes = classnames(className, "offcanvas-header");
    $$renderer2.push(`<div${attributes({ ...$$restProps, class: clsx(classes) })}><h5 class="offcanvas-title">`);
    if (content) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(content)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></h5> <!--[-->`);
    slot($$renderer2, $$props, "close", {}, () => {
      if (typeof toggle === "function") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button${attr("aria-label", closeAriaLabel)} class="btn-close" type="button"></button>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    });
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { class: className, content, closeAriaLabel, toggle });
  });
}
function Offcanvas($$renderer, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "backdrop",
    "body",
    "container",
    "fade",
    "header",
    "isOpen",
    "keyboard",
    "placement",
    "scroll",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "style",
    "theme",
    "toggle"
  ]);
  $$renderer.component(($$renderer2) => {
    let classes, outer;
    let className = fallback($$props["class"], "");
    let backdrop = fallback($$props["backdrop"], true);
    let body = fallback($$props["body"], true);
    let container = fallback($$props["container"], "body");
    let fade = fallback($$props["fade"], true);
    let header = fallback($$props["header"], "");
    let isOpen = fallback($$props["isOpen"], false);
    let keyboard = fallback($$props["keyboard"], true);
    let placement = fallback($$props["placement"], "start");
    let scroll = fallback($$props["scroll"], false);
    let sm = fallback($$props["sm"], false);
    let md = fallback($$props["md"], false);
    let lg = fallback($$props["lg"], false);
    let xl = fallback($$props["xl"], false);
    let xxl = fallback($$props["xxl"], false);
    let style = fallback($$props["style"], "");
    let theme = fallback($$props["theme"], null);
    let toggle = fallback($$props["toggle"], void 0);
    let isTransitioning = false;
    let removeEscListener;
    if (isOpen && toggle && typeof window !== "undefined") {
      removeEscListener = browserEvent(document, "keydown", (event) => {
        if (event.key && event.key === "Escape" && keyboard) {
          toggle();
        }
      });
    }
    if (!isOpen && removeEscListener) {
      removeEscListener();
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
    $$renderer2.push(`<!---->`);
    outer?.($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attributes({
          ...$$restProps,
          "aria-hidden": !isOpen ? true : void 0,
          "aria-modal": isOpen ? true : void 0,
          class: clsx(classes),
          role: isOpen ? "dialog" : void 0,
          "data-bs-theme": theme,
          style: `visibility: ${isOpen || isTransitioning ? "visible" : "hidden"};${style}`,
          tabindex: "-1"
        })}>`);
        if (toggle || header || $$slots.header) {
          $$renderer3.push("<!--[-->");
          OffcanvasHeader($$renderer3, {
            toggle,
            children: ($$renderer4) => {
              if (header) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`${escape_html(header)}`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> <!--[-->`);
              slot($$renderer4, $$props, "header", {}, null);
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (body) {
          $$renderer3.push("<!--[-->");
          OffcanvasBody($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              slot($$renderer4, $$props, "default", {}, null);
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!--[-->`);
          slot($$renderer3, $$props, "default", {}, null);
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div> `);
        if (backdrop) {
          $$renderer3.push("<!--[-->");
          OffcanvasBackdrop($$renderer3, { fade, isOpen });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, {
      class: className,
      backdrop,
      body,
      container,
      fade,
      header,
      isOpen,
      keyboard,
      placement,
      scroll,
      sm,
      md,
      lg,
      xl,
      xxl,
      style,
      theme,
      toggle
    });
  });
}
const colorMode = writable(getInitialColorMode());
colorMode.subscribe((mode) => useColorMode(mode));
function getInitialColorMode() {
  const currentTheme = globalThis.document?.documentElement.getAttribute("data-bs-theme") || "light";
  const prefersDarkMode = typeof globalThis.window?.matchMedia === "function" ? globalThis.window?.matchMedia("(prefers-color-scheme: dark)").matches : false;
  return currentTheme === "dark" || currentTheme === "auto" && prefersDarkMode ? "dark" : "light";
}
function useColorMode(element, mode) {
  let target = element;
  if (arguments.length === 1) {
    target = globalThis.document?.documentElement;
    if (!target) {
      return;
    }
    mode = element;
    colorMode.update(() => mode);
  }
  target.setAttribute("data-bs-theme", mode);
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const menu = "/images/bars-solid.svg";
    let underwaterClass = "";
    let labels = ["Home", "About", "Projects", "Blog", "Contact"];
    let open = false;
    const toggle = () => open = !open;
    $$renderer2.push(`<header${attr_class(clsx(underwaterClass), "svelte-zne36e")}><nav class="desktop-nav svelte-zne36e"><ul class="svelte-zne36e"><!--[-->`);
    const each_array = ensure_array_like(labels);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let label = each_array[index];
      $$renderer2.push(`<li class="svelte-zne36e"><button class="svelte-zne36e">${escape_html(label)}</button></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav> <button class="mobile-menu-button svelte-zne36e" type="button"><img${attr("src", menu)} alt="menu icon" loading="eager" class="svelte-zne36e"/></button> `);
    Offcanvas($$renderer2, {
      class: "mobile-menu",
      isOpen: open,
      toggle,
      placement: "end",
      children: ($$renderer3) => {
        $$renderer3.push(`<nav class="mobile-nav svelte-zne36e"><ul class="svelte-zne36e"><!--[-->`);
        const each_array_1 = ensure_array_like(labels);
        for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
          let label = each_array_1[index];
          $$renderer3.push(`<li class="svelte-zne36e"><button class="svelte-zne36e">${escape_html(label)}</button></li>`);
        }
        $$renderer3.push(`<!--]--></ul></nav>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></header>`);
  });
}
function Bubbles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let containerHeight = 650;
    let showDebug = false;
    $$renderer2.push(`<div class="bubbles-container svelte-11w2rr2"${attr_style(`height: ${stringify(containerHeight)}px;`)}><canvas${attr_class("svelte-11w2rr2", void 0, { "debug-visible": showDebug })}></canvas> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Wave($$renderer) {
  $$renderer.push(`<div class="svelte-59bj26"><svg class="waves svelte-59bj26" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs class="svelte-59bj26"><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" class="svelte-59bj26"></path></defs><linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1" class="svelte-59bj26"><stop offset="0%" stop-color="rgba(0,100, 250,1)" class="svelte-59bj26"></stop><stop offset="50%" stop-color="rgba(0,28, 50, 1)" stop-opacity="1" class="svelte-59bj26"></stop><stop offset="100%" stop-color="rgba(0,100, 250,1)" class="svelte-59bj26"></stop></linearGradient><g class="parallax svelte-59bj26"><use xlink:href="#gentle-wave" x="48" y="5" fill="url(#Gradient)" opacity="0.3" class="svelte-59bj26"></use><use xlink:href="#gentle-wave" x="48" y="3" fill="url(#Gradient)" opacity="0.5" class="svelte-59bj26"></use><use xlink:href="#gentle-wave" x="48" y="0" fill="url(#Gradient)" opacity="0.7" class="svelte-59bj26"></use><use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0,28,85,1)" opacity="1" class="svelte-59bj26"></use></g></svg> <svg class="bottom svelte-59bj26"><rect width="100%" height="100%" fill="rgba(0,28,85,1)" class="svelte-59bj26"></rect></svg></div>`);
}
function Main($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const headshot = "/images/headshot.jpg";
    const unison = "/images/unison.png";
    const linkedInMessagePreview = "/images/linkedin-message-preview.jpg";
    const racquetRivals = "/images/racquet-rivals-image3.png";
    const gridlock = "/images/gridlock-image.png";
    const downArrow = "/images/angles-down-solid.svg";
    const github = "/images/github.svg";
    const copy = "/images/copy-icon.svg";
    const check = "/images/check-solid.svg";
    const externalLink = "/images/arrow-up-right-from-square-solid.svg";
    let showCheck = false;
    $$renderer2.push(`<main class="scroll-point svelte-18mg5l2"><section class="top svelte-18mg5l2"><div class="row align-items-center m-0 p-0 svelte-18mg5l2"><div class="col-xs-12 col-lg-7 pb-3 title svelte-18mg5l2"><h1 class="svelte-18mg5l2">Hi, I'm Will</h1> <p class="svelte-18mg5l2">Software engineer, problem-solver, creator</p></div> <div class="col-xs-12 col-lg-5 svelte-18mg5l2"><div class="img-box svelte-18mg5l2"><img class="headshot svelte-18mg5l2"${attr("src", headshot)} alt="Headshot" loading="eager"/></div></div></div> `);
    Wave($$renderer2);
    $$renderer2.push(`<!----> <div class="down-arrow-box svelte-18mg5l2"><button type="button" class="down-arrow svelte-18mg5l2"><img class="col-xs-12 svelte-18mg5l2"${attr("src", downArrow)} alt="Down arrow to scroll to About" loading="eager"/></button></div></section> `);
    Bubbles($$renderer2);
    $$renderer2.push(`<!----> <section class="scroll-point about svelte-18mg5l2"><h2 class="svelte-18mg5l2">About</h2> <p class="svelte-18mg5l2">I'm passionate about making ideas come to life on the web. As a senior software engineer with
			experience in product management, consulting, and chemical engineering, I have a wide range of
			tools in my toolbox and bring a unique perspective to every project. I strive to build robust
			and intuitive solutions across the tech stack.</p> <p class="svelte-18mg5l2">I also build web apps in my spare time. Have an idea? Tired of vibe coding? Let's chat!</p></section> <section class="scroll-point projects svelte-18mg5l2"><h2 class="svelte-18mg5l2">Projects</h2> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">Unison</h3> <p class="svelte-18mg5l2">Unison is an online community where women can share stories and discuss health and wellness
				in a safe, inclusive space. Members can create posts, comment, reply, like, search, and
				report content to keep the conversations supportive. I designed and developed the platform
				as a freelance project for a friend who saw the need for this kind of community, taking the
				idea from vision to launch. The frontend is built with Next.js and hosted on Vercel, and the
				backend is built with Supabase.</p> <img class="full-width-img svelte-18mg5l2"${attr("src", unison)} alt="Unison" loading="lazy"/> <div class="project-buttons svelte-18mg5l2"><a href="https://unisoncommunity.com" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">unisoncommunity.com</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></article> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">LinkedIn Message Preview</h3> <p class="svelte-18mg5l2">Want to read LinkedIn messages without marking them as read? This Chrome extension lets you
				preview messages simply by hovering over them. It's available for free on the Chrome Web
				Store and has over 200 weekly users with a 5-star rating.</p> <img class="full-width-img svelte-18mg5l2"${attr("src", linkedInMessagePreview)} alt="LinkedIn Message Preview" loading="lazy"/> <div class="project-buttons svelte-18mg5l2"><a href="https://chromewebstore.google.com/detail/linkedin-message-preview/ldlcapdmaddcmhnmelfehiklgclgknhk?hl=en" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">Chrome Web Store</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a> <a href="https://github.com/willbraun/linkedin-message-preview" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">GitHub</p> <img${attr("src", github)} alt="github icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></article> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">Racquet Rivals</h3> <p class="svelte-18mg5l2">My wife and I used to create brackets by hand for the last 16 players of the four major
				tennis tournaments. We had so much fun I made it into a web app, like March Madness. Sign
				up, add your predictions during a major tournament, and you'll be awarded points by round
				for correct choices. You can compare scores with your friends along the way. The frontend is
				built with SvelteKit hosted on Netlify, and the backend is Pocketbase hosted on a Digital
				Ocean Linux Droplet.</p> <img class="full-width-img svelte-18mg5l2"${attr("src", racquetRivals)} alt="Racquet Rivals" loading="lazy"/> <div class="project-buttons svelte-18mg5l2"><a href="https://racquetrivals.com" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">racquetrivals.com</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a> <a href="https://github.com/willbraun/racquet-rivals" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">GitHub</p> <img${attr("src", github)} alt="github icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></article> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">OpenSeat</h3> <p class="svelte-18mg5l2">When I moved to Greenville, SC, I was working remotely and found it tough to meet new
				people. I was inspired to create a solution to connect people based on their unique
				interests. With OpenSeat, you can create events to do any activity you'd like with a small
				group. You can also search for and sign up for events that others have posted. It is a full
				stack app that I built with React, Django, Google and Twilio APIs, and deployed to Heroku.
				This was my final project at Carolina Code School, and I've included a video demo of the app
				below.</p> <div class="video-wrapper svelte-18mg5l2" style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe title="Open Seat Loom video demo" src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" loading="lazy"></iframe></div> <div class="project-buttons svelte-18mg5l2"><a href="https://github.com/willbraun/openseat-app" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">GitHub</p> <img${attr("src", github)} alt="github icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></article> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">Gridlock</h3> <div class="row gridlock-grid"><div class="col-xs-12 col-md-8 gridlock-info"><p class="svelte-18mg5l2">Gridlock is a 2-player strategy game that a friend showed me on a whiteboard, and I
						thought it would be fun to create a digital version. The goal is to connect 4 numbers in
						a row, using a factor of the number from your opponent's previous turn. I designed the
						app to be mobile-friendly, built it using React, and deployed it to Netlify.</p> <br/> <p class="svelte-18mg5l2">Do you like a challenge? The "Computer - Hard" mode in the settings is an AI inspired by
						chess engines that I created to play against you. It uses a DFS minimax algorithm,
						alpha-beta pruning, and an evaluation function. See if you can beat it!</p> <div class="project-buttons svelte-18mg5l2"><a href="https://gridlock.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">Play Gridlock</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a> <a href="https://github.com/willbraun/gridlock" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">GitHub</p> <img${attr("src", github)} alt="github icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></div> <div class="col-xs-12 col-md-4 gridlock-play svelte-18mg5l2"><a class="gridlock-link svelte-18mg5l2" href="https://gridlock.willbraun.dev" target="_blank"><img class="gridlock-img svelte-18mg5l2"${attr("src", gridlock)} alt="Gridlock" loading="lazy"/> <div class="overlay svelte-18mg5l2">Click to play</div></a></div></div></article> <article class="project svelte-18mg5l2"><h3 class="svelte-18mg5l2">3D Dice Roll</h3> <p class="svelte-18mg5l2">Roll two six-sided dice and watch them bounce around. I used SvelteKit, Three.js, Threlte,
				the Rapier Physics Engine, and deployed it to Netlify.</p> <div class="video-wrapper svelte-18mg5l2"><video width="100%" muted autoplay loop playsinline class="svelte-18mg5l2"><source src="3d-dice-roll.mp4" type="video/mp4"/></video></div> <div class="project-buttons svelte-18mg5l2"><a href="https://dice.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">Roll Dice</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a> <a href="https://github.com/willbraun/3d-dice-roll" target="_blank" rel="noopener noreferrer"><button class="button-primary github-button svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">GitHub</p> <img${attr("src", github)} alt="github icon" loading="lazy" class="svelte-18mg5l2"/></button></a></div></article></section> <section class="scroll-point blog svelte-18mg5l2"><h2 class="svelte-18mg5l2">Blog</h2> <p class="svelte-18mg5l2">I write articles about tech I am working with, personal projects, problems I have solved, and
			life as a developer. Check it out!</p> <a href="https://blog.willbraun.dev" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">Visit My Blog</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a></section> <section class="scroll-point contact svelte-18mg5l2"><h2 class="svelte-18mg5l2">Contact</h2> <div class="contact-info svelte-18mg5l2"><p class="svelte-18mg5l2">Want to chat? Feel free to reach out!</p> <a href="mailto:williamhbraun1@gmail.com" target="_blank" rel="noopener noreferrer"><button class="button-primary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">Open Mail App</p> <img${attr("src", externalLink)} alt="external link icon" loading="lazy" class="svelte-18mg5l2"/></button></a> <div class="copy-email svelte-18mg5l2"><button class="copy-button button-secondary svelte-18mg5l2" type="button"><p class="svelte-18mg5l2">williamhbraun1@gmail.com</p> <img${attr("src", copy)} alt="copy email" loading="lazy" class="svelte-18mg5l2"/></button> <div${attr_class(`copied ${stringify(showCheck)}`, "svelte-18mg5l2")}><img${attr("src", check)} alt="copied check mark" loading="lazy" class="svelte-18mg5l2"/></div></div></div></section> <button type="button" class="down-arrow up-arrow svelte-18mg5l2"><img class="col-xs-12 svelte-18mg5l2"${attr("src", downArrow)} alt="up arrow scroll to top" loading="lazy"/></button></main>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const linkedin = "/images/linkedin.svg";
    const x = "/images/x.svg";
    const github = "/images/github.svg";
    let year = (/* @__PURE__ */ new Date()).getFullYear().toString();
    $$renderer2.push(`<footer class="svelte-9sff3o"><div class="footer-info svelte-9sff3o"><p class="svelte-9sff3o">Will Braun ${escape_html(year)}</p> <a class="logo svelte-9sff3o" href="https://www.linkedin.com/in/williamhbraun/" target="_blank" rel="noopener noreferrer"><img${attr("src", linkedin)} alt="LinkedIn icon" loading="lazy" class="svelte-9sff3o"/></a> <a class="logo svelte-9sff3o" href="https://x.com/WillBraunDev" target="_blank" rel="noopener noreferrer"><img${attr("src", x)} alt="X icon" loading="lazy" class="svelte-9sff3o"/></a> <a class="logo svelte-9sff3o" href="https://github.com/willbraun" target="_blank" rel="noopener noreferrer"><img${attr("src", github)} alt="GitHub icon" loading="lazy" class="svelte-9sff3o"/></a></div></footer>`);
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Will Braun | Software Engineer</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Will Braun is a software engineer passionate about building simple solutions to complex problems."/>`);
  });
  $$renderer.push(`<div class="app">`);
  Header($$renderer);
  $$renderer.push(`<!----> `);
  Main($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
