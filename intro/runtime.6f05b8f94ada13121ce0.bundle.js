!function(e){function r(r){for(var n,o,c=r[0],u=r[1],d=r[2],s=r[3]||[],l=0,b=[];l<c.length;l++)o=c[l],a[o]&&b.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(p&&p(r),i.push.apply(i,s);b.length;)b.shift()();return f.push.apply(f,d||[]),t()}function t(){for(var e,r=0;r<f.length;r++){for(var t=f[r],n=!0,o=1;o<t.length;o++){var d=t[o];0!==a[d]&&(n=!1)}n&&(f.splice(r--,1),e=u(u.s=t[0]))}return 0===f.length&&(i.forEach(function(e){if(void 0===a[e]){a[e]=null;var r=document.createElement("link");u.nc&&r.setAttribute("nonce",u.nc),r.rel="prefetch",r.as="script",r.href=c(e),document.head.appendChild(r)}}),i.length=0),e}var n={},o={6:0},a={6:0},f=[],i=[];function c(e){return u.p+""+({0:"vendors~Sidebar~presenter.host",1:"Sidebar",2:"live",4:"presenter.host",5:"presenter.view",7:"target-blank",9:"vendors~Sidebar",10:"vendors~live",11:"vendors~presenter.host"}[e]||e)+"."+e+"."+{0:"6956ffbe55f5504fef4d",1:"7e8d69a2e9a3e05a426d",2:"790f6fd37579ffe0ed9c",4:"b6a8f1a29f51f3c0347e",5:"8fb78e3b60d0b15e11fb",7:"7dfb3f9da85720c74af0",9:"3440f15bba4b463eaaef",10:"c1d32b166eb221cc9430",11:"4fc8f4421b49e848b5c5"}[e]+".bundle.js"}function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[];o[e]?r.push(o[e]):0!==o[e]&&{2:1,4:1,5:1}[e]&&r.push(o[e]=new Promise(function(r,t){for(var n=({0:"vendors~Sidebar~presenter.host",1:"Sidebar",2:"live",4:"presenter.host",5:"presenter.view",7:"target-blank",9:"vendors~Sidebar",10:"vendors~live",11:"vendors~presenter.host"}[e]||e)+"."+e+"."+{0:"6956ffbe55f5504fef4d",1:"7e8d69a2e9a3e05a426d",2:"790f6fd37579ffe0ed9c",4:"b6a8f1a29f51f3c0347e",5:"8fb78e3b60d0b15e11fb",7:"7dfb3f9da85720c74af0",9:"3440f15bba4b463eaaef",10:"c1d32b166eb221cc9430",11:"4fc8f4421b49e848b5c5"}[e]+".css",a=u.p+n,f=document.getElementsByTagName("link"),i=0;i<f.length;i++){var c=(s=f[i]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===a))return r()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){var s;if((c=(s=d[i]).getAttribute("data-href"))===n||c===a)return r()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=r,l.onerror=function(r){var n=r&&r.target&&r.target.src||a,f=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");f.code="CSS_CHUNK_LOAD_FAILED",f.request=n,delete o[e],l.parentNode.removeChild(l),t(f)},l.href=a,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){o[e]=0}));var t=a[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise(function(r,n){t=a[e]=[r,n]});r.push(t[2]=n);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var d=new Error;f=function(r){i.onerror=i.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,t[1](d)}a[e]=void 0}};var s=setTimeout(function(){f({type:"timeout",target:i})},12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=r,d=d.slice();for(var l=0;l<d.length;l++)r(d[l]);var p=s;t()}([]);