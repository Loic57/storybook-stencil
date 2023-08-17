import { p as promiseResolve, b as bootstrapLazy } from './index-4f696a85.js';
export { s as setNonce } from './index-4f696a85.js';

/*
 Stencil Client Patch Browser v4.0.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ap-button",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
});

//# sourceMappingURL=ap-design-system.js.map