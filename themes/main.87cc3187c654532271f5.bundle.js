(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[179],{1405:(e,t,n)=>{"use strict";n.d(t,{X:()=>N});var r=n(3058),a=n(162),o=n.n(a),i=n(2452),s=n(3793),u=n(2813),l=n(1296),c=n(4894),p=n(4457),d=n(3886),f=n(5851);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=[i.Z,s.Z,u.Z];(0,f.Q)().has("pagination")?"false"!==(0,f.Q)().get("pagination")&&(v.push(l.Z),n.e(574).then(n.bind(n,2574))):(v.push(l.Z),n.e(574).then(n.bind(n,2574))),c.Z.use(v);var g=function(e){var t=e.slides,n=e.onChangeSlideIndex;return r.createElement(p.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,keyboard:{enabled:!0},hashNavigation:{watchState:!0},pagination:h({},{type:"bullets",clickable:!0}),onSlideChange:function(e){var t=e.realIndex;return n(t)},className:"slide-background"},t.map((function(e,t){var n=e.slide,a=e.fusumaProps,i=a.classes,s=a.sectionTitle,u=a.background;return r.createElement(d.o,{key:t,className:o()(i,s?"section-title":void 0),"data-hash":"slide-".concat(t+1)},u&&r.createElement("div",{className:"slide-background-div",style:u}),r.createElement("div",{className:"slide-internal-box"},r.createElement(n,null)))})))};function y(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){y(o,r,a,i,s,"next",e)}function s(e){y(o,r,a,i,s,"throw",e)}i(void 0)}))}}function w(){return(w=k(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(9).then(n.bind(n,8009));case 2:return e.next=4,n.e(226).then(n.t.bind(n,4226,23));case 4:t=e.sent,r=t.createContext,a=t.runInNewContext,Array.from(document.querySelectorAll(".executable-code-button")).forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.nextSibling;"none"===t.style.display&&(t.style.display="block");var n=r({console:{log:function(){for(var e=document.createElement("p"),n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.innerText="- ".concat(r.join(" ")),t.appendChild(e)}}});a(e.target.dataset.value,n)}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=(0,r.memo)((function(e){var t=e.slides,a=e.onChangeSlideIndex;e.hash,O(function(){var e=S((0,r.useState)(null),2),t=e[0];return e[1],[t]}(),1)[0];return(0,r.useEffect)((function(){(0,f.Q)().get("ssr")||Promise.resolve().then(n.bind(n,3704)),t.some((function(e){return!!e.fusumaProps.hasExecutableCode}))&&function(){w.apply(this,arguments)}()}),[]),r.createElement(g,{slides:t,onChangeSlideIndex:a})}),(function(e,t){return e.hash===t.hash}))},1796:(e,t,n)=>{"use strict";var r=n(3058),a=n(7848);function o(e){return{id:(t=e).id,slides:t.keys().sort().map((function(e){return t(e)}))};var t}var i=n(2242);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){var e=s((0,r.useState)(function(){var e=new URL(window.location.href).hash.match(/^#slide=(.+?)$/);return null!==e?e[1]-1:0}()),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){n(t)}),[n]),[t,n]}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e=c((0,r.useState)(location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){n(t)}),[n]),[t,n]}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e){var t=e.originalSlides,n=e.hash;e.currentIndex;return(0,r.useMemo)((function(){return e=[],n=[],a=[],o={},t.forEach((function(t){var r=t.slides,o=t.fusumaProps,i=t.backgrounds;e.push.apply(e,b(r)),n.push.apply(n,b(o)),a.push.apply(a,b(i))})),n.reduce((function(e,t,n){var r=t.sectionTitle;return r&&e.push({title:r,index:n+1}),e}),o.contentsList=[]),o.slides=e.map((function(e,t){var i,s,u=n[t],l=0===a[t]?null:a[t].includes("/")?{backgroundImage:"url('".concat(a[t],"')")}:{backgroundColor:a[t]};return{slide:u.contents?(i={list:o.contentsList},s=i.list,function(){return r.createElement("div",{className:"toc"},r.createElement("ol",null,s.map((function(e){var t=e.index,n=e.title;return r.createElement("li",{key:n},r.createElement("a",{href:"#slide-".concat(t),title:n},r.createElement("span",{className:"chapter"},n)))}))))}):e,fusumaProps:m(m({},u),{},{background:l})}})),o;var e,n,a,o}),[n])}var y=n(1405);function k(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){var t=w((0,r.useState)(null),2),a=t[0],o=t[1];return(0,r.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var r,a,i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=4;break}o(y.X),t.next=21;break;case 4:if("view"!==e){t.next=12;break}return t.next=7,n.e(291).then(n.bind(n,291));case 7:r=t.sent,a=r.default,o(a),t.next=21;break;case 12:if("host"!==e){t.next=20;break}return t.next=15,Promise.all([n.e(298),n.e(33),n.e(59)]).then(n.bind(n,6059));case 15:i=t.sent,s=i.default,o(s),t.next=21;break;case 20:o(null);case 21:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(e){k(o,r,a,i,s,"next",e)}function s(e){k(o,r,a,i,s,"throw",e)}i(void 0)}))})()}),[e]),a}var O=n(5851);function x(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){var t=N((0,r.useState)(null),2),a=t[0],o=t[1];return(0,r.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=11;break}if("false"===(0,O.Q)().get("sidebar")){t.next=9;break}return t.next=6,Promise.all([n.e(298),n.e(986),n.e(58)]).then(n.bind(n,8058));case 6:r=t.sent,a=r.Sidebar,o(a);case 9:t.next=12;break;case 11:o(null);case 12:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(e){x(o,r,a,i,s,"next",e)}function s(e){x(o,r,a,i,s,"throw",e)}i(void 0)}))})()}),[e]),a}function P(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e){var t=I((0,r.useState)(null),2),n=t[0],a=t[1];return(0,r.useEffect)((function(){var t;"host"===e?(t=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,O.Q)(),e.next=7;break;case 4:t=e.sent,n=t.CommentsList,a(n);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(e){P(o,r,a,i,s,"next",e)}function s(e){P(o,r,a,i,s,"throw",e)}i(void 0)}))})():a(null)})),n}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=function(e){var t=e.slides,n=e.hash,a=J((0,r.useState)(!1),2),o=a[0],s=a[1],u=J(l(),2),c=u[0],p=u[1],f=g({originalSlides:t,hash:n,currentIndex:c}),m=f.slides,h=f.contentsList,b=J(d(),2),v=b[0],y=b[1],k=j(v),w=E(v),S=T(v),O=function(e){s(!1),y("start"===e?"host":"common")};return r.createElement(r.Fragment,null,w&&r.createElement(r.Fragment,null,r.createElement(w,{goTo:function(e){var t,n;null===(t=document.querySelector(".swiper-container"))||void 0===t||null===(n=t.swiper)||void 0===n||n.slideTo(e),p(e)},isOpen:o,totalSlides:m.length,terminate:function(){return O("terminate")},contents:h,onStateChange:function(e){var t=e.isOpen;return s(t)},currentIndex:c,runPresentationMode:function(){return O("start")}}),r.createElement(i.xXU,{className:"btn-sidebar",onClick:function(){return s(!0)}})),k&&r.createElement(k,{hash:n,slides:m,isJumpPage:0!==c,terminate:function(){return O("terminate")},currentIndex:c,onChangeSlideIndex:p}),S&&r.createElement(S,null))},U=n(9274),$=n.n(U),D=n(842),B={insert:"head",singleton:!1};$()(D.Z,B);D.Z.locals;var L;function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a.hydrate;n(r.createElement(F,{slides:e,hash:t}),document.getElementById("root"))}var R=o(n(3447));null===(L=void 0)||void 0===L||L.accept(R.id,(function(){Z((R=o(n(3447))).slides,Math.random())})),Z(R.slides),document.addEventListener("click",(function(e){if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},3704:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Prism:()=>a.a});var r=n(3513),a=n.n(r);n(690),n(8326),n(7062),n(3279);n.e(247).then(n.bind(n,2247)),a().highlightAll()},4187:(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/samples/themes/style.css".match(/\+*.css$/i))try{n(887)}catch(e){console.error(e)}},5851:(e,t,n)=>{"use strict";function r(){return new URL(window.location.href).searchParams}n.d(t,{Q:()=>r})},5892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>s,backgrounds:()=>u,fusumaProps:()=>l,default:()=>p});var r=n(3058),a=n(605);function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=[function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"Themes 🧏‍♀️"))},function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"default"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://hiroppy.github.io/fusuma"}),"https://hiroppy.github.io/fusuma")))},function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"pop"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    languages:\n      - yml\n      - javascript\n    plugins: []\n    theme: default\n"))),(0,a.kt)("div",{className:"column"},(0,a.kt)("p",null,"Fusuma is an open-source, created by ",(0,a.kt)("a",i({parentName:"p"},{href:"https://twitter.com/about_hiroppy"}),"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://hiroppy.github.io/fusuma/"}),"Fusuma")))))},function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"webpack"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://webpack.js.org/"}),"https://webpack.js.org/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n"))),(0,a.kt)("div",{className:"column"},(0,a.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Webpack"}),"wikipedia/webpack")))))},function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"babel"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://babeljs.io/"}),"https://babeljs.io/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"))),(0,a.kt)("div",{className:"column"},(0,a.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"}),"wikipedia/Babel (transcompiler)")))))},function(e){return(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"node"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n"))),(0,a.kt)("div",{className:"column"},(0,a.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Node.js"}),"wikipedia/Node.js")))))}],u=[0,0,0,0,0,0],l=[{},{},{classes:"pop"},{classes:"webpack"},{classes:"babel"},{classes:"node"}],c={};function p(e){var t=e.components,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Themes 🧏‍♀️"),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"default"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://hiroppy.github.io/fusuma"}),"https://hiroppy.github.io/fusuma")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"pop"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    languages:\n      - yml\n      - javascript\n    plugins: []\n    theme: default\n")),(0,a.kt)("p",null,"Fusuma is an open-source, created by ",(0,a.kt)("a",i({parentName:"p"},{href:"https://twitter.com/about_hiroppy"}),"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://hiroppy.github.io/fusuma/"}),"Fusuma")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"webpack"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://webpack.js.org/"}),"https://webpack.js.org/")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n")),(0,a.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Webpack"}),"wikipedia/webpack")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"babel"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://babeljs.io/"}),"https://babeljs.io/")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,a.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"}),"wikipedia/Babel (transcompiler)")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"node"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),(0,a.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Node.js"}),"wikipedia/Node.js")))}p.isMDXComponent=!0},842:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3746),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=a},9708:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3746),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=a},887:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(9274),a=n.n(r),o=n(9708),i={insert:"head",singleton:!1};a()(o.Z,i);const s=o.Z.locals||{}},3447:(e,t,n)=>{var r={"./slides.mdx":5892};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=3447}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[298,986,58].map(e.E),n}},[[8493,666,736],[1796,666,736],[4187,666,736]]]);