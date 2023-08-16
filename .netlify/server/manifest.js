export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CNAME","favicon-16x16.png","favicon-180x180.png","favicon-192x192.png","favicon-32x32.png","favicon-512x512.png","manifest.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fb2b1469.js","imports":["_app/immutable/entry/start.fb2b1469.js","_app/immutable/chunks/index.0a05ee0f.js","_app/immutable/chunks/singletons.f1f379fc.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d8043566.js","imports":["_app/immutable/entry/app.d8043566.js","_app/immutable/chunks/index.0a05ee0f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
