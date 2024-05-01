// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,t="function"==typeof a?a.toStringTag:"";var n=r&&"symbol"==typeof Symbol.toStringTag?function(r){var a,n,o,s,c;if(null==r)return e.call(r);n=r[t],c=t,a=null!=(s=r)&&i.call(s,c);try{r[t]=void 0}catch(i){return e.call(r)}return o=e.call(r),a?r[t]=n:delete r[t],o}:function(r){return e.call(r)};var o=Array.isArray?Array.isArray:function(r){return"[object Array]"===n(r)};function s(r){return"number"==typeof r}function c(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function p(r,e,i){var a=!1,t=e-r.length;return t<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=i?r+c(t):c(t)+r,a&&(r="-"+r)),r}var l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,i,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,a=parseInt(i,10),!isFinite(a)){if(!s(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(i=(-a).toString(e),r.precision&&(i=p(i,r.precision,r.padRight)),i="-"+i):(i=a.toString(e),a||r.precision?r.precision&&(i=p(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===f.call(r.specifier)?f.call(i):l.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,w=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,m=/^(\d+)e/,x=/\.0$/,S=/\.0*e/,k=/(\..*[^0])0*e/;function E(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":g(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=w.call(i,k,"$1e"),i=w.call(i,S,"e"),i=w.call(i,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=w.call(i,v,"e+0$1"),i=w.call(i,y,"e-0$1"),r.alternate&&(i=w.call(i,b,"$1."),i=w.call(i,m,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===h.call(r.specifier)?h.call(i):d.call(i)}function A(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}var V=String.fromCharCode,$=isNaN,T=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,i,a,t,n,o,s,c,l,f,g,d,h;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(a=r[c],"string"==typeof a)o+=a;else{if(e=void 0!==a.precision,!(a=F(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),i=a.flags,l=0;l<i.length;l++)switch(t=i.charAt(l)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,$(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,$(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=u(a);break;case"s":a.maxWidth=e?a.precision:-1;break;case"c":if(!$(a.arg)){if((n=parseInt(a.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=$(n)?String(a.arg):V(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=E(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=p(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(f=a.arg,g=a.width,d=a.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+A(h):A(h)+f)),o+=a.arg||"",s+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Z(r){var e,i,a,t;for(i=[],t=0,a=C.exec(r);a;)(e=r.slice(t,C.lastIndex-a[0].length)).length&&i.push(e),i.push(R(a)),t=C.lastIndex,a=C.exec(r);return(e=r.slice(t)).length&&i.push(e),i}function O(r){var e,i;if("string"!=typeof r)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Z(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return I.apply(null,e)}var W=function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var i,a;if(!o(e))return!1;if(0===(i=e.length))return!1;for(a=0;a<i;a++)if(!1===r(e[a]))return!1;return!0}}(o);export{W as default};
//# sourceMappingURL=mod.js.map
