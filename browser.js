// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,i,f,l,u;if(null==r)return t.call(r);i=r[n],u=n,o=null!=(l=r)&&e.call(l,u);try{r[n]=void 0}catch(e){return t.call(r)}return f=t.call(r),o?r[n]=i:delete r[n],f}:function(r){return t.call(r)},i=Array.isArray?Array.isArray:function(r){return"[object Array]"===o(r)};return function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!i(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(i)},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isArrayArray=t();
//# sourceMappingURL=browser.js.map
