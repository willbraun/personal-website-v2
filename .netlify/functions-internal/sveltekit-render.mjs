import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","3d-dice-roll.mp4","CNAME","fonts/BakbakOne-Regular.ttf","images/ai-poker-coach-image.png","images/angles-down-solid.svg","images/arrow-up-right-from-square-solid.svg","images/bars-solid.svg","images/check-solid.svg","images/copy-icon.svg","images/favicons/favicon-16x16.png","images/favicons/favicon-180x180.png","images/favicons/favicon-192x192.png","images/favicons/favicon-32x32.png","images/favicons/favicon-512x512.png","images/github.svg","images/gridlock-image.png","images/headshot.jpg","images/linkedin-message-preview.jpg","images/linkedin.svg","images/racquet-rivals-image3.png","images/tech-logos/bootstrap-logo.png","images/tech-logos/csharp-logo.png","images/tech-logos/css-logo.png","images/tech-logos/django-logo.png","images/tech-logos/git-logo.png","images/tech-logos/go-logo-1.png","images/tech-logos/html-logo.png","images/tech-logos/linux-logo.png","images/tech-logos/next-js-logo.svg","images/tech-logos/perl-logo.png","images/tech-logos/python-logo.png","images/tech-logos/react-logo.png","images/tech-logos/redux-logo-1.png","images/tech-logos/scss-logo.png","images/tech-logos/supabase-logo.png","images/tech-logos/svelte-logo.png","images/tech-logos/tailwind-logo-1.png","images/tech-logos/typescript-logo.png","images/tech-logos/web-scraping-logo.png","images/unison.png","images/x.svg","manifest.webmanifest"]),
	mimeTypes: {".mp4":"video/mp4",".ttf":"font/ttf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.DiLn7mrq.js",app:"_app/immutable/entry/app.BMLQ7WQ-.js",imports:["_app/immutable/entry/start.DiLn7mrq.js","_app/immutable/chunks/BhAuuHSJ.js","_app/immutable/chunks/B0IYlHlP.js","_app/immutable/chunks/v8V6vBfK.js","_app/immutable/chunks/By3eWnZd.js","_app/immutable/entry/app.BMLQ7WQ-.js","_app/immutable/chunks/B0IYlHlP.js","_app/immutable/chunks/BLXKRziA.js","_app/immutable/chunks/CDwCb_-V.js","_app/immutable/chunks/By3eWnZd.js","_app/immutable/chunks/JQurHsP4.js","_app/immutable/chunks/BWnkJqD7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
