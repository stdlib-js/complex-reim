// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,l,f,a,i;if(null==t)return o.call(t);l=t[n],i=n,r=null!=(a=t)&&e.call(a,i);try{t[n]=void 0}catch(e){return o.call(t)}return f=o.call(t),r?t[n]=l:delete t[n],f}:function(t){return o.call(t)},l="function"==typeof Float64Array,f="function"==typeof Float64Array?Float64Array:null,a="function"==typeof Float64Array?Float64Array:void 0,i=function(){var t,o,e;if("function"!=typeof f)return!1;try{o=new f([1,3.14,-3.14,NaN]),e=o,t=(l&&e instanceof Float64Array||"[object Float64Array]"===r(e))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?a:function(){throw new Error("not implemented")};return function(t){var o=new i(2);return o[0]=t.re,o[1]=t.im,o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).reim=o();
//# sourceMappingURL=browser.js.map
