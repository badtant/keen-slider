/**
 * keen-slider 5.3.5
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2020 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2020-12-04
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).KeenSlider={},t.react)}(this,(function(t,e){"use strict";function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t){var e,n,r,o,u,c,f,s,h,v,p,b,m,g,y,w,M,O,j,S,A,x,k,E,P,T,D,L,C,I,X,Y,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},q="data-keen-slider-moves",z="data-keen-slider-v",F=[],H=null,R=!1,V=!1,K=0,W=[];function N(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.addEventListener(e,n,r),F.push([t,e,n,r])}function U(t){if(O&&j===J(t)&&ut()){var n=Z(t).x;if(!et(t)&&E)return B(t);E&&(Rt(),S=n,e.setAttribute(q,!0),E=!1),t.cancelable&&t.preventDefault(),It(k(S-n,$t)*(ft()?-1:1),t.timeStamp),S=n}}function $(t){O||!ut()||tt(t.target)||(O=!0,E=!0,j=J(t),et(t),ht(),M=v,S=Z(t).x,It(0,t.timeStamp),ot("dragStart"))}function B(t){O&&j===J(t,!0)&&ut()&&(e.removeAttribute(q),O=!1,bt(),ot("dragEnd"))}function G(t){return t.changedTouches}function J(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?G(t):Q(t);return n?n[0]?n[0].identifier:"error":"default"}function Q(t){return t.targetTouches}function Z(t){var e=Q(t);return{x:lt()?e?e[0].screenY:t.pageY:e?e[0].screenX:t.pageX,timestamp:t.timeStamp}}function tt(t){return t.hasAttribute(w.preventEvent)}function et(t){var e=Q(t);if(!e)return!0;var n=e[0],r=lt()?n.clientY:n.clientX,i=lt()?n.clientX:n.clientY,o=void 0!==A&&void 0!==x&&Math.abs(x-i)<=Math.abs(A-r);return A=r,x=i,o}function nt(t){ut()&&O&&t.preventDefault()}function rt(){N(window,"orientationchange",Pt),N(window,"resize",(function(){return Et()})),N(e,"dragstart",(function(t){ut()&&t.preventDefault()})),N(e,"mousedown",$),N(w.cancelOnLeave?e:window,"mousemove",U),w.cancelOnLeave&&N(e,"mouseleave",B),N(window,"mouseup",B),N(e,"touchstart",$,{passive:!0}),N(e,"touchmove",U,{passive:!1}),N(e,"touchend",B,{passive:!0}),N(e,"touchcancel",B,{passive:!0}),N(window,"wheel",nt,{passive:!1})}function it(){F.forEach((function(t){t[0].removeEventListener(t[1],t[2],t[3])})),F=[]}function ot(t){w[t]&&w[t]($t)}function at(){return w.centered}function ut(){return void 0!==n?n:w.controls}function ct(){return w.loop}function ft(){return w.rtl}function st(){return!w.loop&&w.rubberband}function lt(){return!!w.vertical}function dt(){P=window.requestAnimationFrame(vt)}function ht(){P&&(window.cancelAnimationFrame(P),P=null),T=null}function vt(t){T||(T=t);var e=t-T,n=pt(e);if(e>=L)return It(D-I,!1),Y?Y():void ot("afterChange");var r=Xt(n);if(0===r||ct()||st()||X){if(0!==r&&st()&&!X)return Mt();I+=n,It(n,!1),dt()}else It(n-r,!1)}function pt(t){return D*C(t/L)-I}function bt(){switch(ot("beforeChange"),w.mode){case"free":yt();break;case"free-snap":wt();break;case"snap":default:mt()}}function mt(){if(1===f)gt((1===f&&0!==p?M:v)+Math.sign(p));else{var t=M===v?0:Math.abs(M-v);gt(M+t*p)}}function gt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(t){return 1+--t*t*t*t*t};Ot(zt(t=qt(t,r,i)),n,o,e)}function yt(){if(0===m)return!(!Xt(0)||ct())&&gt(v);var t=w.friction/Math.pow(Math.abs(m),-.5);Ot(Math.pow(m,2)/t*Math.sign(m),6*Math.abs(m/t),(function(t){return 1-Math.pow(1-t,5)}))}function wt(){if(0===m)return gt(v);var t=w.friction/Math.pow(Math.abs(m),-.5),e=Math.pow(m,2)/t*Math.sign(m),n=6*Math.abs(m/t),r=(K+e)/(c/f);Ot((-1===p?Math.floor(r):Math.ceil(r))*(c/f)-K,n,(function(t){return 1-Math.pow(1-t,5)}))}function Mt(){if(ht(),0===m)return gt(v,!0);var t=.04/Math.pow(Math.abs(m),-.5),e=Math.pow(m,2)/t*Math.sign(m),n=function(t){return--t*t*t+1},r=m;Ot(e,3*Math.abs(r/t),n,!0,(function(){Ot(zt(qt(v)),500,n,!0)}))}function Ot(t,e,n,r,i){ht(),D=t,I=0,L=e,C=n,X=r,Y=i,T=null,dt()}function jt(n){var r=l(t);r.length&&(e=r[0],Et(n),rt(),ot("mounted"))}function St(){var t,e=_.breakpoints||[];for(var n in e)window.matchMedia(n).matches&&(t=n);if(t===H)return!0;var r=(H=t)?e[H]:_;r.breakpoints&&H&&delete r.breakpoints,w=i(i(i({},Ut),_),r),R=!0,h=null,kt()}function At(t){return"function"==typeof t?t():d(t,1,Math.max(ct()?r-1:r,1))}function xt(){St(),V=!0,ot("created")}function kt(t,e){t&&(_=t),e&&(H=null),Tt(),jt(e)}function Et(t){var n=window.innerWidth;if(St()&&(n!==h||t)){h=n;var i=w.slides;"number"==typeof i?(u=null,r=i):(u=l(i,e),r=u?u.length:0);var a=w.dragSpeed;k="function"==typeof a?a:function(t){return t*a},c=lt()?e.offsetHeight:e.offsetWidth,f=At(w.slidesPerView),s=d(w.spacing,0,c/(f-1)-1),c+=s,o=at()?(c/2-c/f/2)/c:0,Lt();var p=!V||R&&w.resetSlide?w.initial:v;Nt(ct()?p:Yt(p)),lt()&&e.setAttribute(z,!0),R=!1}}function Pt(t){Et(),setTimeout(Et,500),setTimeout(Et,2e3)}function Tt(){it(),Ct(),e&&e.hasAttribute(z)&&e.removeAttribute(z),ot("destroyed")}function Dt(){u&&u.forEach((function(t,e){var n=g[e].distance*c-e*(c/f-s/f-s/f*(f-1)),r=lt()?0:n,i=lt()?n:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");t.style.transform=o,t.style["-webkit-transform"]=o}))}function Lt(){u&&u.forEach((function(t){var e="calc(".concat(100/f,"% - ").concat(s/f*(f-1),"px)");lt()?(t.style["min-height"]=e,t.style["max-height"]=e):(t.style["min-width"]=e,t.style["max-width"]=e)}))}function Ct(){if(u){var t=["transform","-webkit-transform"];t=[].concat(a(t),lt?["min-height","max-height"]:["min-width","max-width"]),u.forEach((function(e){t.forEach((function(t){e.style.removeProperty(t)}))}))}}function It(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();Ht(t,n),e&&(t=Kt(t)),K+=t,Vt()}function Xt(t){var e=c*(r-1*(at()?1:f))/f,n=K+t;return n>e?n-e:n<0?n:0}function Yt(t){return d(t,0,r-1-(at()?0:f-1))}function _t(){var t=Math.abs(y),e=K<0?1-t:t;return{direction:p,progressTrack:e,progressSlides:e*r/(r-1),positions:g,position:K,speed:m,relativeSlide:(v%r+r)%r,absoluteSlide:v,size:r,slidesPerView:f,widthOrHeight:c}}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ct()?e?Ft(t,n):t:Yt(t)}function zt(t){return-(-c/f*t+K)}function Ft(t,e){var n=(v%r+r)%r,i=n<(t=(t%r+r)%r)?-n-r+t:-(n-t),o=n>t?r-n+t:t-n,a=e?Math.abs(i)<=o?i:o:t<n?i:o;return v+a}function Ht(t,e){clearTimeout(b);var n=Math.sign(t);if(n!==p&&Rt(),p=n,W.push({distance:t,time:e}),b=setTimeout((function(){W=[],m=0}),50),(W=W.slice(-6)).length<=1||0===p)return m=0;var r=W.slice(0,-1).reduce((function(t,e){return t+e.distance}),0),i=W[W.length-1].time,o=W[0].time;m=d(r/(i-o),-10,10)}function Rt(){W=[]}function Vt(){y=ct()?K%(c*r/f)/(c*r/f):K/(c*r/f),Wt();for(var t=[],e=0;e<r;e++){var n=(1/r*e-(y<0&&ct()?y+1:y))*r/f+o;ct()&&(n+=n>(r-1)/f?-r/f:n<-r/f+1?r/f:0);var i=1/f,a=n+i,u=a<i?a/i:a>1?1-(a-1)*f/1:1;t.push({portion:u<0||u>1?0:u,distance:ft()?-1*n+1-i:n})}g=t,Dt(),ot("move")}function Kt(t){if(ct())return t;var e=Xt(t);if(!st())return t-e;if(0===e)return t;var n;return t*(n=e/c,(1-Math.abs(n))*(1-Math.abs(n)))}function Wt(){var t=Math.round(K/(c/f));t!==v&&(!ct()&&(t<0||t>r-1)||(v=t,ot("slideChanged")))}function Nt(t){ot("beforeChange"),It(zt(t),!1),ot("afterChange")}var Ut={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},$t={controls:function(t){n=t},destroy:Tt,refresh:function(t){kt(t,!0)},next:function(){gt(v+1,!0)},prev:function(){gt(v-1,!0)},moveToSlide:function(t,e){gt(t,!0,e)},moveToSlideRelative:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;gt(t,!0,n,!0,e)},resize:function(){Et(!0)},details:function(){return _t()}};return xt(),$t}function s(t){return Array.prototype.slice.call(t)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof t?s(t()):"string"==typeof t?s(e.querySelectorAll(t)):t instanceof HTMLElement!=!1?[t]:t instanceof NodeList!=!1?t:[]}function d(t,e,n){return Math.min(Math.max(t,e),n)}Math.sign||(Math.sign=function(t){return(t>0)-(t<0)||+t});var h=function t(e,n){var r=Object.prototype.toString.call(e);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var i="[object Array]"===r?e.length:Object.keys(e).length;if(i!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var o=function(e,n){var r=Object.prototype.toString.call(e);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!t(e,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(e.toString()!==n.toString())return!1}else if(e!==n)return!1}};if("[object Array]"===r){for(var a=0;a<i;a++)if(!1===o(e[a],n[a]))return!1}else for(var u in e)if(e.hasOwnProperty(u)&&!1===o(e[u],n[u]))return!1;return!0};t.default=f,t.useKeenSlider=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.useRef(),r=e.useRef();function i(t){return h(r.current,t)||(r.current=t),r.current}var a=e.useState(null),u=o(a,2),c=u[0],s=u[1];return e.useEffect((function(){var t=new f(n.current,r.current);return s(t),function(){t.destroy()}}),[i(t)]),[n,c]},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=react.js.map
