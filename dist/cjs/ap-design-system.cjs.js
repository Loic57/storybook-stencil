'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e6de47e0.js');

/*
 Stencil Client Patch Browser v4.0.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ap-design-system.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ap-button.cjs",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ap-design-system.cjs.js.map