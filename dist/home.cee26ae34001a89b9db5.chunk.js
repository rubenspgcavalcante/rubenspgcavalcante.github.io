(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{296:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),o=n(11);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(u(u(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?u(e):t}(this,(e=l(t)).call.apply(e,[this].concat(o))))),"state",{Component:null}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;this.props.promise.then(function(t){return e.setState({Component:t})})}},{key:"render",value:function(){var e=this.state.Component;return e?this.props.children(e):null}}]),t}();s(f,"propTypes",{promise:o.object.isRequired})},297:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),o=n.n(r),c=n(298),a=n.n(c),l=n(48),i=n.n(l);n(299);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){var t=e.src,n=e.trace,r=e.alt,c=e.show,a=e.transitionReady;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("img",{className:i()("thumb",{fade:a}),src:n,alt:r}),c?o.a.createElement("img",{className:i()("picture",{ready:a}),src:t,alt:r}):null)},d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return b(h(h(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}(this,(e=p(t)).call.apply(e,[this].concat(o))))),"state",{reachedViewPort:!1,transition:!1}),b(h(h(n)),"intersectionObs",new IntersectionObserver(function(e){s(e,1)[0].isIntersecting&&(n.setState({reachedViewPort:!0}),n.intersectionObs.disconnect())},{root:null,rootMargin:"0px",threshold:.2})),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"componentDidMount",value:function(){this.intersectionObs.observe(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){this.intersectionObs.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.image,r=t.alt,c=t.className,l=this.state,u=l.transition,s=l.reachedViewPort;return o.a.createElement("div",{ref:"wrapper"},s?o.a.createElement(a.a,{src:n.src.default,placeholder:n.trace},function(t,n){return n||setTimeout(function(){return e.setState({transition:!0})},10),o.a.createElement("div",{className:i()("progressive-image-loader",c)},o.a.createElement(y,{transitionReady:u,show:!n,src:t,alt:r}))}):o.a.createElement("img",{src:n.trace}))}}]),t}()},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.loadImage=function(e){n.image&&(n.image.onload=null,n.image.onerror=null);var t=new Image;n.image=t,t.onload=n.onLoad,t.onerror=n.onError,t.src=e},n.onLoad=function(){n.setState({image:n.image.src,loading:!1})},n.onError=function(e){var t=n.props.onError;t&&t(e)},n.state={image:e.placeholder,loading:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.props.src;this.loadImage(e)}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.src,r=e.placeholder;n!==this.props.src&&this.setState({image:r,loading:!0},function(){t.loadImage(n)})}},{key:"componentWillUnmount",value:function(){this.image&&(this.image.onload=null,this.image.onerror=null)}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.loading,r=this.props.children;if(!r||"function"!=typeof r)throw new Error("ProgressiveImage requires a function as its only child");return r(t,n)}}]),t}();t.default=c},299:function(e,t,n){},301:function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){var e=u(["ANIMATION"]);return c=function(){return e},e}function a(){var e=u(["ALPHA"]);return a=function(){return e},e}function l(){var e=u(["LOSSLESS"]);return l=function(){return e},e}function i(){var e=u(["LOSSY"]);return i=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=function(e){return"WEBP_".concat(e)},f=s(i()),p=s(l()),m=s(a()),h=s(c()),b=(o(r={},f,"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),o(r,p,"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="),o(r,m,"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="),o(r,h,"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"),r);n.d(t,"a",function(){return y});var y=function(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=new Image;return new Promise(function(n,r){t.onload=function(){return n(t.width>0&&t.height>0)},t.onerror=function(){return n(!1)},t.src="data:image/webp;base64,".concat(b[e])})}().then(function(n){return n&&t?e.then(function(e){return t.then(function(t){return{src:t,trace:e.trace}})}):e})}},302:function(e,t,n){e.exports={src:n.p+"dist/assets/5dd1df4b79d998aa13b8814eaabb62eb.png",trace:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='196' height='300' viewBox='0 0 196 300' version='1'%3E%3Cpath d='M183 86h-2l-2 2c0 2-1 2-4 2s-3 1-1 2c3 3 3 3-1 1-3-2-9 0-8 3l-1 2-1 1v2c-1 1-2 0-2-1-1 0-1-1 0 0l1-1-4-1c-4 1-5 0-5-1-1-2-1-2-2 0-1 4-5 4-6 0 0-2-3-5-3-3h-4l-3 1c1 2-1 3-4 2l1-4 1-3-2 2-1 3c2 1 1 3-2 4l-3 3-2 1c-3 0-4 2-3 4 2 2 0 4-6 5l-6 1h1l1-1H90l-2-1-5-3c-4-2-4-2-8-1l-5 1-1 1-7 1c-7 0-8-1-7-3l-1-2h-1c0 2 0 2-2 1-3-2-5 0-2 3s3 4-1 5c-4 2-12 0-12-2l-1-2c-1-1-2 2-1 3l-3 1c-2 0-3 0-2-1l-2-3-1-2h1c0-2-3-1-4 1l-5 3-3 1-1 1h-4c-1-2-2-2-3-1l1 2c3 2 2 3-1 3-4 1-4 1-4 5 1 2 0 4-1 5-2 2-3 4 0 3v3c-2 1-2 1 0 3v3l-2 4h2l1-1h3v7l-1-1c1-1 0-2-1-2H2c-1 2 0 4 2 4 1 0 1 2-1 4-3 2-3 3-3 15l1 13c1-1 1 0 1 1s1 2 3 2l2 3h2c3-2 3-2 3 0s-5 4-10 3c-2-1-2-1-2 5v6h8c10 1 11 2 11 4s1 2 5 2c3 0 5 0 4-1l1-3c2-1 2-1 2 1 0 3 0 3 3 3 2-1 3 0 3 1l1 1v1c-2 0-1 2 1 2 1 0 2-1 2-4l-1-8-1-7-1-2-1-1 2-2v-6c-2-1-2-4 1-7l2-2 1 3 2 4-2 5v3h12l14-1h2c0 2 2 2 10 2h10v-3l-1-9c-1-4-2-7-1-9 2-8 6-8 8-1 0 3 1 5 2 5 2 0 5-10 6-22s1-13 7-20c5-7 8-8 13-4h8l1 1h5l4-2c2-2 3-3 1-3-3 0-2-2 2-3h6l8 1 8 2 5 9 4 9 1 17 2 21-1 4-2 3-2 2-1 2c1 1 1 1 0 0l-3-1c-1 2 0 4 2 3l1 1-3 1c-1-1-4 0-4 1l-2 1-2-1-10-12c-4-4-4-4-2-5h7c3 0 3 0 1-2v-1c2 2 12-1 12-3-1-2-4-5-8-6l-2-2c1-1 6 0 7 3 3 4 8 1 7-4-2-5-17-10-25-7l-4 2-1 4v13l1 5 2 2 1 2c2 2 0 5-3 5-8 1-20-1-20-3l3-4c2-1 3-3 2-3h-1l-1-1 7-6c2 0 3-8 2-12v-2c0-2 0-2-1-1h-2c0-3-4-4-11-5-12-1-16 3-16 12 1 5 1 5 3 6l11 6 1 1 2-1c1 1 0 4-1 4l-4 3-4 2c-4 1-8 4-9 9-1 2-2 3-2 1s-2-4-3-2c0 2-3 3-3 1-1-1-1 0-1 1l1 2c1-1 2 0 3 2 0 2-1 4-2 2-1-1-1 0-2 2 0 3 0 4 2 5l4 8 1 1 1 2 4 6 3 6 1 1 1 1 3 4c3 3 4 5 2 5l-1-2-2-2v3c1 2 1 3 3 2 3-1 3-1 2 1 0 2 0 2 1 1s1 0 2 2l3 4 2 2h4l5-2c1 1 11-3 10-4l-1-2h1l4 1c2 0 3 0 2-2l2-1c2 1 2 1 3-1v-3c-1-1-1-1 1-1 1 1 3 0 5-1 1-2 3-3 3-2l1-1 1-2 1-6a68 68 0 0 1 4-17c1-3 2-4 4-5l1-2c-2 0 0-7 2-9v-12l1-2c-1-2 4-7 6-7 1 0 3 3 3 7l-2 8c-5 11-7 16-7 21 0 4 0 5-2 5s-3 3-1 3v1l-2 3 9 1 8-1-1-1-3-2h-2c-2 1-4-1-5-6l1-3 2 1 2 1 1 1v3l1-2 2-3c3 0 3-4 0-4-4 0-4-3 0-3h3l-1-38-1-65h-2c-1 1-2 1-2-1v-2c2 1 5-2 5-4h-2l-4 1-3 2c-2 1-2 1-4-1v-6a559 559 0 0 0 0-3M62 92l-2 2v1l-2-2c-1-1-1-1-3 1l-2 2 2 1c2 0 2 1 1 3h-2v1c1 2 6 3 6 2s8-1 13 1c5 1 5 1 5-1l-1-3-4-1c-3 0-3 0-3-2 1-1 0-2-1-2l-1-2-2-1c-1 1-2 0-2-1s-1-1-2 1M50 200c0 2-3 3-5 2-2 0-2 1-2 4 0 5 0 5 3 5l3 1-3 1-3 1 7 1h6v-3l-2-6c-1-2-1-2 4 0l5 2v-5c0-4 0-5-2-5l-2 1-3 1-3-1-1-1-2 2m19 15l1 3c1 2 1 2-1 0l-4-3 1 5c0 3 0 4-1 3l-1-2c1-1-2-4-3-3v2l-1 1 1 2v1l-2-2-3-1h-2l-2-1h-2l2 1 1 1-3 1-2-1 1-1-3 1v2l1 1h3c3-1 5 0 5 4l1 2c3 0 4 2 3 4-1 1-1 1 2 1 5-2 17-2 18-1h2l1 2h2l1-1 2-1 2 1h11l3-1c1 1-3 4-8 5l-11 5c-4 2-5 2-6 1l-1-1v2l-1 1c-2 0-4-3-3-4h-1v3c1 1 0 2-2 3l-4 1-5 2-15 5h-1c1 1-4 2-5 1l-1 1c1 1-3 4-5 4l-6 5-4 3h-2c-2 1-2 1-1-2v-2l-1 4c0 4-2 4-4 1l-1-3-3 2-2 2-1-4c0-4 1-6 4-6 1 1 2 0 2-1 0-2-2-3-3-1l-3 1-2-2-1-2c-1-1-1 0-1 1l-1 1H2l-1 1-1 19v19h197v-28l-1-26-6-3-8-3-2-2c-2-3-4-4-4-1l-11 15c-6 6-16 9-24 8-9 0-11-1-12-2s-5 0-5 1l-2 1h-2l-5-1-5-2c-6-1-11-11-8-16 2-6 2-11 0-13l-2-2-2-2c-1-3-2-4-2-2s0 4-1 3l-1-2-2-3h-2l1 2 1 1c1 2-2 1-4-2l-2-1h-3c-4-2-3-1 1 2l5 3 1 1c2 2-2 2-4 0-2-3-7-5-7-3s0 3-1 2l-1-1-1-3c-1-1-1-1-1 1v1c-2-3-2-5 0-4l2-1-2-1c-1 1-3 0-4-1-1-2-2-2-2-1m-40 23l1 2 1 2h-1l-2 2c-2 2-2 2-3 1l1-3c2 0 1-3 0-3l-2 2c0 3-1 3-3 1-2-1-2-1 0 2l3 4 1 3c0 3 0 3 1 2 2-2 5-1 4 1-1 4-3 5-4 3h-2l-2-3v-4l-2-3c-1-2-3-3-3-2l-1-1h-1l2 3c2 0 4 3 3 6l1 2 1 2-1 1c-1-1-1 0-1 2v4l-2-4c-2-3-2-4-1-5 1-2 1-2-1-2-1 0-2 1-1 3l1 4v3l2 2 1 1h1l3-1 1-2c0-1 2-3 4-3v3h1l4-2c3 0 4-2 2-2-1 0-2-1-1-4 0-3-1-4-2-5-2-1-2-1 2-3 3-1 5-3 5-4 0-2 0-2-1-1s-4-1-4-3-2-3-2-1h-3' fill='%23d2dde6' fill-rule='evenodd'/%3E%3C/svg%3E"}},303:function(e,t,n){e.exports=n.p+"dist/assets/7c5d4b266ad1eec8f683989401ab3816.webp"},336:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(7),a=n(296),l=n(297),i=function(e){var t=e.importer,n=e.alt,r=e.className;return o.a.createElement(a.a,{promise:t},function(e){return o.a.createElement(l.a,{alt:n,className:r,image:e})})},u=n(301),s=Object(u.a)(Promise.resolve().then(n.t.bind(null,302,7)),Promise.resolve().then(n.t.bind(null,303,7))),f={twitter:"https://twitter.com/rubenspgc",github:"https://github.com/rubenspgcavalcante/",medium:"https://medium.com/@rubenspgcavalcante",linkedin:"https://www.linkedin.com/in/rubens-pinheiro-a34a4823/","stack-overflow":"https://stackoverflow.com/users/2346915/rubens-pinheiro"},p=function(){return o.a.createElement("div",{id:"profile",className:"card "},o.a.createElement("header",{className:"card-header"},o.a.createElement("h4",{className:"text-center"},"I'm a Front end developer")),o.a.createElement("article",{className:"card-body flex-md-wrap"},o.a.createElement("div",{className:"profile-pic"},o.a.createElement(i,{alt:"my picture",importer:s})),o.a.createElement("p",null,"Passionate about new technologies, active open source contributor, currently living and working in Berlin, Germany."),o.a.createElement("p",null,"My focus is always to build applications with high quality code, with well defined design and architecture, being capable of scale easily, don't loosing the practicality of creating new features in a fast way.")),o.a.createElement("footer",{className:"card-footer text-right"},o.a.createElement("span",null,"Follow me",Object.keys(f).map(function(e){return o.a.createElement("a",{href:f[e],key:e,className:"ml-2"},o.a.createElement("i",{className:"fa fa-".concat(e)}))}))))};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,y(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"home",className:"m-auto row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement(p,null)),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,"I'm fascinated by the ",o.a.createElement("b",null,"JavaScript")," and ",o.a.createElement("b",null,"NodeJS")," world and everything that surrounds it. Although this is my current focus, I have good experience in other languages I've worked in past too, like ",o.a.createElement("b",null,"Python"),", ",o.a.createElement("b",null,"PHP")," and ",o.a.createElement("b",null,"C++"),"."),o.a.createElement("p",null,"Currently studying ",o.a.createElement("b",null,"Go")," and functional programing. As you can see I try to be dynamic as possible, an open minded person and never block myself to other technologies out of my knowledge box."),o.a.createElement("p",null,"So, check my ",o.a.createElement(c.b,{to:"/projects"},"projects")," and ",o.a.createElement(c.b,{to:"/publications"},"publications")," and see a little of my experience!")))))}}]),t}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(A,"propTypes",{});var v=n(47);t.default={Component:A,picture:v.c,title:"All about me",subtitle:o.a.createElement("span",null,"$>: whoami ",o.a.createElement("span",{className:"blink"},"_"))}}}]);
//# sourceMappingURL=home.cee26ae34001a89b9db5.chunk.js.map