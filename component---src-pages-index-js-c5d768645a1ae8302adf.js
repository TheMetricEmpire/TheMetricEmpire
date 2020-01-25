(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),c=n.n(o),i=n(194),l=n.n(i),s=(n(4),n(204)),u=n.n(s),m=n(209),d=n.n(m),f=function(e){var t=e.status,n=e.message,a=e.className,r=e.style,o=e.onSubmitted,i=void 0;return c.a.createElement("div",{className:a,style:r},"sending"===t&&c.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&c.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&c.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),c.a.createElement("input",{ref:function(e){return i=e},type:"email",placeholder:"Your email"}),c.a.createElement("button",{onClick:function(){return i&&i.value.indexOf("@")>-1&&o({EMAIL:i.value})}},"Submit"))};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){return e.replace("/post?","/post-json?")},E=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.state={status:null,message:null},a.subscribe=function(e){var t=d()(e),n=h(a.props.url)+"&"+t;a.setState({status:"sending",message:null},function(){return u()(n,{param:"c"},function(e,t){e?a.setState({status:"error",message:e}):"success"!==t.result?a.setState({status:"error",message:t.msg}):a.setState({status:"success",message:t.msg})})})},p(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(c.a.Component);E.propTypes={},E.defaultProps={render:function(e){var t=e.subscribe,n=e.status,a=e.message;return c.a.createElement(f,{status:n,message:a,onSubmitted:function(e){return t(e)}})}};var y=E,g=n(190),v=n(193),b=n(210),w=n.n(b),A=n(211),N=n.n(A),S=n(212),k=n.n(S),T=n(213),L=n.n(T),R=n(214),I=n.n(R),P=n(215),C=n.n(P),Q=n(216),O=n.n(Q),X=n(217),j=n.n(X),V=n(218),q=n.n(V),Z=(n(219),function(e){var t,n,a,r=e.status,o=e.message,i=e.onValidated;return c.a.createElement("div",{style:{background:"#efefef",borderRadius:5,padding:10,display:"inline-table"}},"sending"===r&&c.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===r&&c.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:o}}),"success"===r&&c.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:o}}),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("input",{style:{fontSize:"major",padding:5},ref:function(e){return n=e},type:"text",placeholder:"First Name"})),c.a.createElement("td",null,c.a.createElement("input",{style:{fontSize:"major",padding:5},ref:function(e){return a=e},type:"text",placeholder:"Last Name"}))),c.a.createElement("tr",null,c.a.createElement("td",{colspan:"2"},c.a.createElement("input",{style:{fontSize:"h1",padding:5},ref:function(e){return t=e},type:"email",placeholder:"Your Email*"}),c.a.createElement("tr",null,c.a.createElement("sub",null,"* Mandatory fields")))),c.a.createElement("td",{colspan:"2"},c.a.createElement("button",{style:{fontSize:"h2",padding:5},onClick:function(){return t&&n&&a&&t.value.indexOf("@")>-1&&i({EMAIL:t.value,FNAME:n.value,LNAME:a.value})}},"Sign Up"))))}),J=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(v.a,null,c.a.createElement(l.a,null,"title=","Metric Empire Game Studio",c.a.createElement("title",null,"Metric Empire | Home"),c.a.createElement("meta",{charset:"UTF-8"}),c.a.createElement("meta",{name:"description",content:"Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"}),c.a.createElement("meta",{name:"keywords",content:"game developer, video games, steam, xbox, playstation, unity, indie, roguelite, shooter, procedural, innovative, assassin's creed, prince of persia, far cry"}),c.a.createElement("meta",{name:"author",content:"Metric Empire Inc."}),c.a.createElement("meta",{property:"og:title",content:"Metric Empire Game Studio"}),c.a.createElement("meta",{property:"og:image",content:"https://www.metricempire.com/static/OG_Image-f95221e982d90376da9ebe21dd5ca096.jpg"}),c.a.createElement("meta",{property:"og:description",content:"Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"}),c.a.createElement("meta",{property:"og:url",content:"https://www.metricempire.com/"}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:title",content:"Metric Empire Game Studio"}),c.a.createElement("meta",{name:"twitter:description",content:"Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"}),c.a.createElement("meta",{name:"twitter:url",content:"https://www.metricempire.com/"}),c.a.createElement("meta",{name:"twitter:image",content:"https://www.metricempire.com/static/OG_Image-f95221e982d90376da9ebe21dd5ca096.jpg"})),c.a.createElement("section",{id:"one",className:"main style4"},c.a.createElement("div",{className:"grid-wrapper"},c.a.createElement("div",{className:"col-6"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"About the Studio")),c.a.createElement("p",null,"Based in the colorful, creatively vibrant city of Montreal, Metric Empire is a brand new independent game development studio with a mission to create high-quality, meticulously distilled game experiences that are innovative, accessible, highly-replayable and, above all else, infinitely fun."),c.a.createElement("p",null,"Our studio is currently located near the Quartier des Spectacles inside GamePlay Space, a unique co-working space dedicated to independent game developpers like us. ")),c.a.createElement("div",{className:"col-6"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:w.a,alt:"City of Montreal skyline in the sunset"}))))),c.a.createElement("section",{id:"four",className:"main style1 special"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Our Games")),c.a.createElement("p",null,"We're currently working super hard on the creation of our very first game and we hope to unveil the very first, exclusive details by the beginning of spring 2019."),c.a.createElement("p",null,"If you want to be among the privileged few to get the full details about our new game, you just have to become a 'Friend of the Empire' by signing up for our ",c.a.createElement(g.a,{to:"/#newsletter"},"newsletter!")),c.a.createElement("p",null,"That said, if you're not ready for that kind of commitment, that's okay too, just check back often and/or follow us on your favorite social media."),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.facebook.com/MetricEmpire",className:"icon alt fa-facebook"},c.a.createElement("span",{className:"label"},"Facebook"))),c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.twitter.com/TheMetricEmpire",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.linkedin.com/company/MetricEmpire",className:"icon alt fa-linkedin"},c.a.createElement("span",{className:"label"},"LinkedIn"))),c.a.createElement("li",null,c.a.createElement("a",{href:"mailto:hello@metricempire.com",className:"icon alt fa-envelope"},c.a.createElement("span",{className:"label"},"Email")))))),c.a.createElement("scrollTo",{to:"/newletter"}),c.a.createElement("section",{id:"three",className:"main style2 special"},c.a.createElement("div",{className:"grid-wrapper"},c.a.createElement("div",{className:"col-12"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Our Team")),c.a.createElement("p",null,c.a.createElement("div",null,"With well over 40 years of combined development experience on some of the most critically acclaimed, generation-defining AAA games like Prince of Persia, Far Cry and Assassin’s Creed, our little empire means pretty serious business."))),c.a.createElement("div",{className:"col-6"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:N.a,alt:"Co-Founder Nicholas Routhier"})),c.a.createElement("h3",null,"Nicholas Routhier"),c.a.createElement("p",null,"Co-Founder & Technical Director",c.a.createElement("div",null),c.a.createElement("a",{href:"http://www.twitter.com/NyksterR",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"@NyksterR"),"  @NyksterR"))),c.a.createElement("div",{className:"col-6"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:k.a,alt:"Co-Founder Pier-Luc Papineau"})),c.a.createElement("h3",null,"Pier-Luc Papineau"),c.a.createElement("p",null,"Co-Founder & Design Director",c.a.createElement("div",null),c.a.createElement("a",{href:"http://www.twitter.com/PLPapineau",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"@NyksterR"),"  @PLPapineau"))),c.a.createElement("div",{className:"col-6"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:L.a,alt:"3D Artist Lucie Lescuyer"})),c.a.createElement("h3",null,"Lucie Lescuyer"),c.a.createElement("p",null,"3D Artist",c.a.createElement("div",null),c.a.createElement("a",{href:"http://www.twitter.com/LucieLescuyer",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"@LucieLescuyer"),"  @LucieLescuyer"))),c.a.createElement("div",{className:"col-6"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:I.a,alt:"Programmer Emery Monzerol"})),c.a.createElement("h3",null,"Emery Monzerol"),c.a.createElement("p",null,"Programmer",c.a.createElement("div",null),c.a.createElement("a",{href:"http://www.twitter.com/EmeryMonzerol",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"@EmeryMonzerol"),"  @EmeryMonzerol"))))),c.a.createElement("a",{name:"newsletter"}),c.a.createElement("section",{id:"five",className:"main style1 special"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Become a Friend of the Empire")),c.a.createElement("p",null,"Signing up for our newsletter is the best way to never miss out on any of our news and game announcements! Heck, you'll even get exclusive goodies from time to time, ain't that incredible?"),c.a.createElement("ul",{className:"actions uniform"},c.a.createElement(y,{url:"https://facebook.us19.list-manage.com/subscribe/post?u=fdad2467938bbae637fab0fab&amp;id=06e3865496",render:function(e){var t=e.subscribe,n=e.status,a=e.message;return c.a.createElement(Z,{status:n,message:a,onValidated:function(e){return t(e)}})}})),c.a.createElement("sub",null,"We take privacy very seriously and will never share your contact details with anyone else.",c.a.createElement("br",null),"To know more about this, check out our ",c.a.createElement(g.a,{to:"/privacy/"},"Privacy Policy")," page."))),c.a.createElement("section",{id:"four",className:"main style4 special"},c.a.createElement("div",{className:"grid-wrapper"},c.a.createElement("div",{className:"col-12"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Our Partners"))),c.a.createElement("div",{className:"col-3"},c.a.createElement("a",{href:"http://www.unity3d.com/"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:O.a,alt:"Unity Logo"})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("a",{href:"https://www.cmf-fmc.ca/"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:C.a,alt:"FMC_CMF Logo"})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("a",{href:"https://gameplayspace.com/"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:q.a,alt:"Gameplay Space Logo"})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("a",{href:"https://www.ceim.org/en/"},c.a.createElement("span",{className:"image fit"},c.a.createElement("img",{src:j.a,alt:"CEIM Logo"})))))))},t}(c.a.Component);t.default=J},189:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(32),l=n.n(i);n.d(t,"a",function(){return l.a});n(189),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},191:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(59),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},192:function(e,t){e.exports="data:image/png;base64,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"},193:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),c=n.n(o),i=(n(195),n(192)),l=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("section",{id:"header"},c.a.createElement("div",{className:"inner"},c.a.createElement("span",{className:"image"},c.a.createElement("img",{src:l.a,style:{width:250,height:250},alt:"Metric Empire Company Logo"})),c.a.createElement("h1",null,"Metric Empire"),c.a.createElement("h3",null,"Game Studio")))},t}(c.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("section",{id:"footer"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.facebook.com/MetricEmpire",className:"icon alt fa-facebook"},c.a.createElement("span",{className:"label"},"Facebook"))),c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.twitter.com/TheMetricEmpire",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.linkedin.com/company/MetricEmpire",className:"icon alt fa-linkedin"},c.a.createElement("span",{className:"label"},"LinkedIn"))),c.a.createElement("li",null,c.a.createElement("a",{href:"mailto:hello@metricempire.com",className:"icon alt fa-envelope"},c.a.createElement("span",{className:"label"},"Email")))),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© 2018 Metric Empire Inc., All rights reserved. ")))},t}(c.a.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading},c.a.createElement(s,null),e,c.a.createElement(u,null))},t}(c.a.Component);t.a=m},204:function(e,t,n){var a=n(205)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var c,i,l=t.prefix||"__jp",s=t.name||l+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;m&&(i=setTimeout(function(){p(),n&&n(new Error("Timeout"))},m));function p(){c.parentNode&&c.parentNode.removeChild(c),window[s]=o,i&&clearTimeout(i)}return window[s]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(s)).replace("?&","?"),a('jsonp req "%s"',e),(c=document.createElement("script")).src=e,f.parentNode.insertBefore(c,f),function(){window[s]&&p()}};var r=0;function o(){}},205:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}(t=e.exports=n(207)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))}),e.splice(o,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,n(206))},206:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:c}catch(e){a=c}}();var l,s=[],u=!1,m=-1;function d(){u&&l&&(u=!1,l.length?s=l.concat(s):m=-1,s.length&&f())}function f(){if(!u){var e=i(d);u=!0;for(var t=s.length;t;){for(l=s,s=[];++m<t;)l&&l[m].run();m=-1,t=s.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},207:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var c=new Array(arguments.length),i=0;i<c.length;i++)c[i]=arguments[i];c[0]=t.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O");var l=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,function(n,a){if("%%"===n)return n;l++;var r=t.formatters[a];if("function"==typeof r){var o=c[l];n=r.call(e,o),c.splice(l,1),l--}return n}),t.formatArgs.call(e,c),(n.log||t.log||console.log.bind(console)).apply(e,c)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(208),t.names=[],t.skips=[],t.formatters={}},208:function(e,t){var n=1e3,a=60*n,r=60*a,o=24*r,c=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var l,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*c;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*a;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,a,"minute")||i(l,n,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},209:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function a(e,t,n){return"object"===(void 0===t?"undefined":o(t))?""+r(t,n+""+e+(n&&"]")+"["):n&&n.length?""+n+e+"]="+encodeURIComponent(t):e+"="+encodeURIComponent(t)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.arrayPrefix||"";return(Array.isArray(e)?e.map(function(e,n){return a(""+n+r,e,t)}):Object.keys(e).filter(function(t){return void 0!==e[t]}).map(function(n){return e[n]&&Array.isArray(e[n])?function(e,t,n){return t.map(function(t){return a(e,t,n)}).join("&")}(""+n+r,e[n],t):a(n,e[n],t)})).join("&").replace(/%20/g,"+")}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r}])},210:function(e,t,n){e.exports=n.p+"static/pic01-2df005561eac5206673a88647dea4dc3.jpg"},211:function(e,t,n){e.exports=n.p+"static/Team_Nick-965e4100d396cfdf98d2cd855ba1911b.jpg"},212:function(e,t,n){e.exports=n.p+"static/Team_PLP-8c9a1b82a1a9c46fc98c34290aa344c0.jpg"},213:function(e,t,n){e.exports=n.p+"static/Team_Lucie-7304f8bd7a85479bb2859953e552fd19.jpg"},214:function(e,t,n){e.exports=n.p+"static/Team_Emery-a51640dbec253687020d6cee4a5357d0.jpg"},215:function(e,t,n){e.exports=n.p+"static/Partners_CMF-0b54ede40fceb4069953d7d4075f966a.png"},216:function(e,t,n){e.exports=n.p+"static/Partners_Unity-3620a749dbf11651bffa6366274538bc.png"},217:function(e,t,n){e.exports=n.p+"static/Partners_Ceim-e81870cf2d26de40fc03d2791c1bf0a7.png"},218:function(e,t,n){e.exports=n.p+"static/Partners_GPS-d7a53dcecf8c336949a83a3c311613e3.png"},219:function(e,t,n){e.exports=n.p+"static/OG_Image-ac9f7c6615ac350e695a41081811c735.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-c5d768645a1ae8302adf.js.map