import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.552a2310.js';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/entry/_layout.svelte.552a2310.js","_app/immutable/chunks/index.0a05ee0f.js"];
export const stylesheets = ["_app/immutable/assets/_layout.2ee9bc62.css"];
export const fonts = ["_app/immutable/assets/BakbakOne-Regular.d187facf.ttf"];
