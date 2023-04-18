import { p as promiseResolve, b as bootstrapLazy } from './index-d62b20c3.js';
export { s as setNonce } from './index-d62b20c3.js';

/*
 Stencil Client Patch Esm v3.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ap-button",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map