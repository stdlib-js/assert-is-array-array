// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:void 0,a="function"==typeof t?t.toStringTag:"",n=e&&"symbol"==typeof Symbol.toStringTag?function(e){var t,n,o,s,c;if(null==e)return r.call(e);n=e[a],c=a,t=null!=(s=e)&&i.call(s,c);try{e[a]=void 0}catch(i){return r.call(e)}return o=r.call(e),t?e[a]=n:delete e[a],o}:function(e){return r.call(e)},o=Array.isArray?Array.isArray:function(e){return"[object Array]"===n(e)};function s(e){return"number"==typeof e}function c(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function p(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+c(a):c(a)+e,t&&(e="-"+e)),e}var l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!s(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=p(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=p(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,y=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,m=/^(\d+)e/,x=/\.0$/,S=/\.0*e/,k=/(\..*[^0])0*e/;function E(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":g(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=y.call(i,k,"$1e"),i=y.call(i,S,"e"),i=y.call(i,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=y.call(i,w,"e+0$1"),i=y.call(i,b,"e-0$1"),e.alternate&&(i=y.call(i,v,"$1."),i=y.call(i,m,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===h.call(e.specifier)?h.call(i):d.call(i)}function A(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var T=String.fromCharCode,V=isNaN,$=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,t,a,n,o,s,c,l,f,g,d,h;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if("string"==typeof(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=F(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(a=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,V(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!V(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(n)?String(t.arg):T(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=E(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+A(h):A(h)+f)),o+=t.arg||"",s+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,i,t,a;for(i=[],a=0,t=C.exec(e);t;)(r=e.slice(a,C.lastIndex-t[0].length)).length&&i.push(r),i.push(R(t)),a=C.lastIndex,t=C.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function j(e){var r,i;if("string"!=typeof e)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Z(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}return function(e){if("function"!=typeof e)throw new TypeError(j("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!o(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(o)},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isArrayArray=r();
//# sourceMappingURL=index.js.map
