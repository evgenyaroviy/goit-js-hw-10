var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{document.querySelector(".country-info").insertAdjacentHTML("beforeend",e.map((({name:{official:e},capital:n,population:t,flags:{png:o},languages:r})=>`\n      <li>\n        <h2>${e}</h2>\n        <img src="${o}" alt="">\n        <p>${n}</p>\n        <p>${t}</p>\n        <p>${{languages:r}}</p>\n      </li>\n    `)).join("")),console.log(e)})).catch((e=>{console.error("Oops, there is no country with that name",e)}))}var t={},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,p=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var t=i.test(e);return t||u.test(e)?a(e.slice(2),t?2:8):r.test(e)?NaN:+e}t=function(e,n,t){var o,r,i,u,a,f,c=0,l=!1,s=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(n){var t=o,i=r;return o=r=void 0,c=n,u=e.apply(i,t)}function y(e){return c=e,a=setTimeout(T,n),l?b(e):u}function j(e){var t=e-f;return void 0===f||t>=n||t<0||s&&e-c>=i}function T(){var e=d();if(j(e))return w(e);a=setTimeout(T,function(e){var t=n-(e-f);return s?m(t,i-(e-c)):t}(e))}function w(e){return a=void 0,h&&o?b(e):(o=r=void 0,u)}function $(){var e=d(),t=j(e);if(o=arguments,r=this,f=e,t){if(void 0===a)return y(f);if(s)return a=setTimeout(T,n),b(f)}return void 0===a&&(a=setTimeout(T,n)),u}return n=v(n)||0,g(t)&&(l=!!t.leading,i=(s="maxWait"in t)?p(v(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h),$.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},$.flush=function(){return void 0===a?u:w(d())},$};const h=document.querySelector("#search-box");console.log(h.value),h.addEventListener("keyup",t((function(e){const t=h.value;if(console.log(Number(t.length)),0===Number(t.length))return;1===Number(t.length)&&console.log("Too many matches found. Please enter a more specific name.");Number(t.length)>1&&n(t.trim())}),300));
//# sourceMappingURL=index.4d6ab6ed.js.map