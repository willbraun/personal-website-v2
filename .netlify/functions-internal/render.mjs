import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3d-dice-roll.mp4","CNAME","favicon-16x16.png","favicon-180x180.png","favicon-192x192.png","favicon-32x32.png","favicon-512x512.png","fonts/BakbakOne-Regular.ttf","images/ai-poker-coach-image.png","images/angles-down-solid.svg","images/arrow-up-right-from-square-solid.svg","images/bars-solid.svg","images/check-solid.svg","images/copy-icon.svg","images/github.svg","images/gridlock-image.png","images/headshot.jpg","images/linkedin.svg","images/racquet-rivals-image2.png","images/tech-logos/bootstrap-logo.png","images/tech-logos/csharp-logo.png","images/tech-logos/css-logo.png","images/tech-logos/django-logo.png","images/tech-logos/git-logo.png","images/tech-logos/go-logo-1.png","images/tech-logos/html-logo.png","images/tech-logos/linux-logo.png","images/tech-logos/perl-logo.png","images/tech-logos/python-logo.png","images/tech-logos/react-logo.png","images/tech-logos/redux-logo-1.png","images/tech-logos/scss-logo.png","images/tech-logos/svelte-logo.png","images/tech-logos/tailwind-logo-1.png","images/tech-logos/typescript-logo.png","images/tech-logos/web-scraping-logo.png","manifest.webmanifest"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.976589a5.js","imports":["_app/immutable/entry/start.976589a5.js","_app/immutable/chunks/index.0a05ee0f.js","_app/immutable/chunks/singletons.a5469f71.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ab376277.js","imports":["_app/immutable/entry/app.ab376277.js","_app/immutable/chunks/index.0a05ee0f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
