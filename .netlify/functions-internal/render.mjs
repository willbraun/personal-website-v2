import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3d-dice-roll.mp4","CNAME","favicon-16x16.png","favicon-180x180.png","favicon-192x192.png","favicon-32x32.png","favicon-512x512.png","manifest.webmanifest"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.51d3b359.js","imports":["_app/immutable/entry/start.51d3b359.js","_app/immutable/chunks/index.0a05ee0f.js","_app/immutable/chunks/singletons.5dd798a9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0bff6a28.js","imports":["_app/immutable/entry/app.0bff6a28.js","_app/immutable/chunks/index.0a05ee0f.js"],"stylesheets":[],"fonts":[]}},
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