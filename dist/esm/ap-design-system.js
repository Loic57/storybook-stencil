import { p as promiseResolve, b as bootstrapLazy } from './index-d62b20c3.js';
export { s as setNonce } from './index-d62b20c3.js';

/*
 Stencil Client Patch Browser v3.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ap-button",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
});

//# sourceMappingURL=ap-design-system.js.map