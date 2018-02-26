webpackJsonp([0],{756:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(827)),o=n(249),l=r(n(840));t.default={Component:a.default,reducer:l.default,picture:o.BANNER_AUTUMN,title:"My publications",subtitle:"“In learning you will teach, and in teaching you will learn.” ― Phil Collins"}},757:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});r(n(5));var a=r(n(841)),o=n(249);t.default={Component:a.default,picture:o.BANNER_WINTER,title:"Contact me",subtitle:"Stay in touch!"}},798:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),l=(function(e){e&&e.__esModule}(o),n(105)),u=function(e){function t(){var e,n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={Component:null},o=n,r(a,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),a(t,[{key:"componentDidMount",value:function(){var e=this;this.props.promise.then(function(t){return e.setState({Component:t})})}},{key:"render",value:function(){var e=this.state.Component;return e?this.props.children(e):null}}]),t}();u.propTypes={promise:l.object.isRequired},t.default=u},800:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOAD_PUBLICATIONS="LOAD_PUBLICATIONS",t.LOAD_PUBLICATIONS_SUCCESS="LOAD_PUBLICATIONS_SUCCESS",t.LOAD_PUBLICATIONS_ERROR="LOAD_PUBLICATIONS_ERROR"},827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(42),a=function(e){return e&&e.__esModule?e:{default:e}}(n(828)),o=n(838);t.default=(0,r.connect)(function(e){return{publications:e.publications}},function(e){return{loadPublications:function(){return e((0,o.loadPublications)())}}})(a.default)},828:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),u=r(l),i=r(n(829)),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),o(t,[{key:"componentDidMount",value:function(){this.props.loadPublications()}},{key:"render",value:function(){var e=(this.props.publications||{}).data;return e?u.default.createElement("div",{id:"publications"},e.map(function(e){return u.default.createElement(i.default,a({key:e.id},e))})):null}}]),t}();c.propTypes={},t.default=c},829:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(5)),o=r(n(798));t.default=function(e){var t=e.id,r=e.title,l=e.link;return a.default.createElement("div",{className:"publication"},a.default.createElement("div",{className:"card"},a.default.createElement("div",{className:"card-header text-center"},a.default.createElement("h6",{className:"card-title"},r)),a.default.createElement("div",{className:"card-body"},a.default.createElement("a",{rel:"nofollow",href:l,target:"_blank"},a.default.createElement(o.default,{promise:n(830)("./"+t+".png")},function(e){var n=e.src;return a.default.createElement("img",{src:n,alt:t})}))),a.default.createElement("div",{className:"card-footer text-right"},a.default.createElement("small",null,a.default.createElement("i",{className:"fa fa-medium text-muted"})," Published on Medium"))))}},830:function(e,t,n){function r(e){var t=a[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./hot-reloading-extensions-using-webpack.png":[831,42],"./implementing-javascript-functors-and-monads.png":[832,41],"./javascript-and-duck-typing.png":[833,40],"./javascript-symbols-generators-and-streams.png":[834,39],"./lazy-loading-with-react-and-webpack2.png":[835,38],"./lazy-loading-with-react_redux-and-webpack2.png":[836,37],"./react-and-duck-typing.png":[837,36]};r.keys=function(){return Object.keys(a)},r.id=830,e.exports=r},838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPublications=void 0;var r=n(800);t.loadPublications=function(){return function(e){e({type:r.LOAD_PUBLICATIONS}),n.e(46).then(n.bind(null,839)).then(function(t){return e({type:r.LOAD_PUBLICATIONS_SUCCESS,payload:t})}).catch(function(t){return e({type:r.LOAD_PUBLICATIONS_ERROR,payload:t})})}}},840:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:null},t=arguments[1],n=t.type,o=t.payload;switch(n){case a.LOAD_PUBLICATIONS_SUCCESS:return r({},e,{data:o})}return e};var a=n(800)},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.default=function(){return r.default.createElement("div",null,r.default.createElement("h3",null,"On social media"),r.default.createElement("div",null,r.default.createElement("p",null,"Add me on ",r.default.createElement("a",{target:"_blank",rel:"nofollow",href:"https://www.linkedin.com/in/rubens-pinheiro-a34a4823/"},r.default.createElement("i",{className:"fa fa-linkedin-square"})," LinkedIn")," or follow me on ",r.default.createElement("a",{href:"https://www.twitter.com/rubenspgc",rel:"nofollow",target:"_blank"}," ",r.default.createElement("i",{className:"fa fa-twitter"})," Twitter"),", ",r.default.createElement("a",{target:"_blank",rel:"nofollow",href:"https://medium.com/@rubenspgcavalcante"},r.default.createElement("i",{className:"fa fa-medium"})," Medium")," or ",r.default.createElement("a",{target:"_blank",rel:"nofollow",href:"https://stackoverflow.com/users/2346915/rubens-pinheiro"},r.default.createElement("i",{className:"fa fa-stack-overflow"})," Stack Overflow"))),r.default.createElement("h3",null,"Email"),r.default.createElement("div",null,r.default.createElement("p",null,"Email me on ",r.default.createElement("a",{href:"mailto:rubenspgcavalcante@gmail.com"},"rubenspgcavalcante@gmail.com"))))}}});
//# sourceMappingURL=publications.chunk.js.map