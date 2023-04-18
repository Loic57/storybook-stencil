'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9202a0ac.js');

/*
 Stencil Client Patch Browser v3.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ap-design-system.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ap-button.cjs",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ap-design-system.cjs.js.map