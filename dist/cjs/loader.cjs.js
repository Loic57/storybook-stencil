'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9202a0ac.js');

/*
 Stencil Client Patch Esm v3.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ap-button.cjs",[[1,"ap-button",{"type":[1],"content":[1],"color":[1]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map