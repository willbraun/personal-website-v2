import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.gcsGDKyg.js","_app/immutable/chunks/CDwCb_-V.js","_app/immutable/chunks/B0IYlHlP.js","_app/immutable/chunks/BWnkJqD7.js"];
export const stylesheets = ["_app/immutable/assets/0.BMz9gb8a.css"];
export const fonts = [];
