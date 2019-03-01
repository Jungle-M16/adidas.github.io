(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{401:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c});var r={baseUrl:"https://raw.githubusercontent.com/wiki/adidas/adidas-contribution-guidelines",pages:{contributing:{id:"contributing",name:"contributing",path:"/contributing",file:"Contributing.md"},"terms-and-conditions":{id:"terms-and-conditions",name:"contributing-document",path:"/contributing/terms-and-conditions",file:"Terms-and-conditions.md"},"css-coding-guidelines":{id:"css-coding-guidelines",name:"contributing-document",path:"/contributing/css-coding-guidelines",file:"CSS-coding-guidelines.md"},"html-coding-guidelines":{id:"html-coding-guidelines",name:"contributing-document",path:"/contributing/html-coding-guidelines",file:"HTML-coding-guidelines.md"},"javascript-coding-guidelines":{id:"javascript-coding-guidelines",name:"contributing-document",path:"/contributing/javascript-coding-guidelines",file:"JavaScript-coding-guidelines.md"},"typescript-coding-guidelines":{id:"typescript-coding-guidelines",name:"contributing-document",path:"/contributing/typescript-coding-guidelines",file:"TypeScript-coding-guidelines.md"}},routes:[{id:"contributing",name:"contributing",path:"/contributing"},{id:"terms-and-conditions",name:"contributing-document",path:"/contributing/terms-and-conditions"},{id:"css-coding-guidelines",name:"contributing-document",path:"/contributing/css-coding-guidelines"},{id:"html-coding-guidelines",name:"contributing-document",path:"/contributing/html-coding-guidelines"},{id:"javascript-coding-guidelines",name:"contributing-document",path:"/contributing/javascript-coding-guidelines"},{id:"typescript-coding-guidelines",name:"contributing-document",path:"/contributing/typescript-coding-guidelines"}],sidebarTree:[{id:"contributing",name:"contributing",path:"/contributing",file:"Contributing.md"},{id:"terms-and-conditions",name:"contributing-document",path:"/contributing/terms-and-conditions",file:"Terms-and-conditions.md"},{id:"coding-style-guidelines",children:[{id:"css-coding-guidelines",name:"contributing-document"},{id:"html-coding-guidelines",name:"contributing-document"},{id:"javascript-coding-guidelines",name:"contributing-document"},{id:"typescript-coding-guidelines",name:"contributing-document"}]}]},o={api:{host:"https://api.adidas.com/github",key:"xy3jxpv3cvc8skw85mjgvxdu"},contributing:{baseUrl:r.baseUrl,pages:r.pages,sidebarTree:r.sidebarTree}},c={"x-api-key":o.api.key}},421:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return _}),n.d(e,"c",function(){return f});var r=n(8),o=n(81),c=n.n(o),l=n(401);function d(){return c.a.get("".concat(l.a.api.host,"/content"),{headers:Object(r.a)({},l.b),responseType:"json"}).then(function(t){return t.data})}function _(){return c.a.get("".concat(l.a.api.host,"/content/projects"),{headers:Object(r.a)({},l.b),responseType:"json"}).then(function(t){return t.data})}function f(t){return c.a.get("".concat(l.a.api.host,"/content/lang/").concat(t),{headers:Object(r.a)({},l.b),responseType:"json"}).then(function(t){return t.data})}},438:function(t,e,n){},439:function(t,e,n){},440:function(t,e,n){},441:function(t,e,n){},460:function(t,e,n){},571:function(t,e,n){"use strict";var r=n(438);n.n(r).a},572:function(t,e,n){"use strict";var r=n(439);n.n(r).a},573:function(t,e,n){"use strict";var r=n(440);n.n(r).a},574:function(t,e,n){"use strict";var r=n(441);n.n(r).a},890:function(t,e,n){"use strict";var r=n(460);n.n(r).a},891:function(t,e,n){"use strict";n.r(e);n(32);var r=n(462),o=(n(22),n(80),n(571),n(1)),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adidoescode"},[e("img",{staticClass:"adidoescode__logo",attrs:{src:"/img/adidoescode.png",alt:"adidoescode logo"}}),this._v(" "),e("div",{staticClass:"adidoescode__line"})])}],!1,null,"122ecdcd",null).exports,l={props:["id","title","subtitle","summary","url","urlLabel","likes"]},d=(n(572),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publication",attrs:{id:t.id}},[n("div",{staticClass:"publication__title",on:{click:function(e){return t.$emit("click")}}},[n("h4",{staticClass:"anchor"},[t._v(t._s(t.title))])]),t._v(" "),t.subtitle?n("div",{staticClass:"publication__subtitle"},[n("h5",[t._v(t._s(t.subtitle))])]):t._e(),t._v(" "),n("div",{staticClass:"publication__separator"}),t._v(" "),n("div",{staticClass:"publication__body",domProps:{innerHTML:t._s(t.summary)}}),t._v(" "),t.url.trim()?n("div",{staticClass:"publication__footer"},[t.likes?n("a",{staticClass:"publication__likes",attrs:{href:t.url,target:"_blank",rel:"nofollow noreferrer noopener"}},[n("i",{staticClass:"fa fa-heart-o color--red-80"}),t._v("\n      "+t._s(t.likes)+"\n    ")]):t._e(),t._v(" "),n("a",{staticClass:"publication__read-more",attrs:{href:t.url,target:"_blank",rel:"nofollow noreferrer noopener"}},[t._v("\n      "+t._s(t.urlLabel)+"\n    ")])]):t._e()])},[],!1,null,null,null).exports),_=n(108),f=(n(31),3),v=".",m={groupSeparator:".",decimalSeparator:","};var h={props:["title","value"],filters:{numberFmt:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=e.groupSeparator,o=e.decimalSeparator,c="".concat(t).split(v),l=Object(r.a)(c,2),d=l[0],_=l[1],h="".concat(d).split("").reverse(),k=Math.ceil(h.length/f),C=[],i=0;i<k;i++)C.push(h.slice(i*f,(i+1)*f).reverse().join(""));var y=C.reverse().join(n);return _?[y,_].join(o):y}}},k=(n(573),Object(o.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kpi"},[n("h5",{staticClass:"kpi__title"},[t._v(t._s(t.title))]),t._v(" "),n("h4",{staticClass:"kpi__data"},[t._v(t._s(t._f("numberFmt")(t.value)))])])},[],!1,null,null,null).exports),C={props:["title","imageUrl","tags"]},y=(n(574),Object(o.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tech-block"},[n("h3",{staticClass:"tech-block__headline"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"tech-block__body"},[n("div",{staticClass:"tech-block__body__img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imageUrl,expression:"imageUrl"}],attrs:{alt:t.title+" logo"}})]),t._v(" "),n("div",{staticClass:"tech-block__body__summary"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"tech-block__footer"},[t._m(0),t._v(" "),n("div",{staticClass:"tech-block__footer__labels"},t._l(t.tags,function(e,r){return n("a",{key:r,staticClass:"btn btn-primary",attrs:{href:e.url,target:"_blank",rel:"nofollow noreferrer noopener"}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"separator-wrapper"},[e("div",{staticClass:"separator"})])}],!1,null,null,null).exports),j=n(421),w=(n(17),n(8)),T=n(109),O=n(401),$=n(575),S=n(465),x=n(81),U=n.n(x);n(477),n(478),n(503),n(487);function P(cursor){return(t="".concat(O.a.api.host,"/repositories").concat(cursor?"?after=".concat(cursor):""),e={headers:Object(w.a)({},O.b),responseType:"json"},S.Observable.create(function(n){U()(t,e).then(function(t){n.next(t),n.complete()}).catch(function(t){n.error(t)})})).map(function(t){var data=t.data;if(data.errors)throw data;return data});var t,e}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth";t&&document.querySelector(t)&&document.querySelector(t).scrollIntoView({block:"start",behavior:e})}var L={layout:"content",asyncData:function(){return Promise.all([Promise.all([new Promise(function(t,e){var n=[],r=P().expand(function(t){var e=t.data.entity.repositories.pageInfo,n=e.hasNextPage,r=e.endCursor;return n?P(r):S.Observable.of({})}).catch(function(t){r.unsubscribe(),e(t)}).subscribe(function(e){var data=e.data;data?n=n.concat(data.entity.repositories.edges.map(function(t){var e=t.node;return Object(w.a)({},e,{config:Object($.load)(e.config?e.config.text:null)})}).filter(function(t){return t.config})).map(function(t){return t.config.imageUrl||(t.config.imageUrl="/img/source.jpg"),t}):(r.unsubscribe(),t(n))})}),Object(j.b)()]).then(function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return[].concat(Object(T.a)(o.map(function(t){return Object(w.a)({},t,{type:"views.home.filter.project"})})),Object(T.a)(n.map(function(t){return Object(w.a)({},t,{type:"views.home.filter.repository"})}))).sort(function(a,b){return a.name.localeCompare(b.name)})}),Object(j.a)()]).then(function(t){var e=Object(r.a)(t,2),n=e[0],o=void 0===n?[]:n,c=e[1],l=c.events,d=void 0===l?[]:l,_=c.careers,f=void 0===_?[]:_,v=c.techStack,m=void 0===v?[]:v,h=c.kpis,k=void 0===h?[]:h,C=c.featuredFlag;return{openSource:o,careers:f,events:d,techStack:m,kpis:k,featuredFlag:void 0===C?{}:C}})},mounted:function(){var t=this.$router.currentRoute.hash;t&&this.scrollTo(t,"auto")},methods:{sort:function(t){return t.sort(function(a,b){return a.sortOrder-b.sortOrder})},toID:function(text){return text.replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"")},linkTo:function(t){this.$nextTick(function(){return function(t){t&&document.querySelector(t)&&(history.pushState?(history.pushState(null,null,t),E(t)):location.hash=t)}(t)})},scrollTo:function(t,e){this.$nextTick(function(){return E(t,e)})}},computed:{orderedKpis:function(){return this.sort(this.kpis)},orderedTechStack:function(){return this.sort(this.techStack)},orderedCareers:function(){return this.sort(this.careers)}},components:{adidoescode:c,TechStackBlock:y,BlogPost:d,Card:_.a,"kpi-item":k}},F=(n(890),Object(o.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container home-page"},[n("section",{staticClass:"section heading clearfix"},[n("header",{staticClass:"heading__title color--primary-white"},[n("h2",[t._v("\n        "+t._s(t.$t("nouns.adidas"))+"\n        "),n("br"),t._v("\n        "+t._s(t.$t("meta.title"))+"\n      ")]),t._v(" "),n("h5",[t._v(t._s(t.$t("meta.description")))])]),t._v(" "),n("adidoescode")],1),t._v(" "),t.orderedKpis.length?n("section",{staticClass:"section kpis color--primary-white"},[n("div",{staticClass:"kpi__list"},t._l(t.orderedKpis,function(t,e){return n("kpi-item",{key:e,attrs:{title:t.title,value:t.value}})}),1)]):t._e(),t._v(" "),n("section",{staticClass:"section open-source",attrs:{id:"open-source"}},[n("div",{staticClass:"links"},[n("nuxt-link",{staticClass:"btn btn--blue",attrs:{to:t.localePath("contributing")}},[t._v("\n        "+t._s(t.$t("links.guidelines"))+"\n      ")]),t._v(" "),n("a",{staticClass:"btn btn-tertiary-dark",attrs:{href:t.$t("href.github"),target:"_blank",rel:"nofollow noreferrer noopener"}},[n("i",{staticClass:"fab fa-github"}),t._v("\n        "+t._s(t.$t("links.github"))+"\n      ")])],1),t._v(" "),n("div",{staticClass:"tiles grid"},t._l(t.openSource,function(e){return n("a",{key:e.id,staticClass:"link grid-item",class:{"grid-item--large":e.name===t.featuredFlag.name},attrs:{href:e.url,target:"_blank",rel:"nofollow noreferrer noopener"}},[n("card",{attrs:{title:e.config&&e.config.display&&e.config.display.name||e.name,image:e.config.imageUrl,"background-color":e.config.backgroundColor,type:e.type}},[n("div",{staticClass:"tile__footer__subheader__text"},[t._v("\n            "+t._s(e.config&&e.config.display&&e.config.display.description||e.description)+"\n          ")])])],1)}),0)]),t._v(" "),n("section",{staticClass:"section tech-stack"},[n("div",{staticClass:"deco"},[n("div",{staticClass:"title anchor",attrs:{id:"tech-stack"},on:{click:function(e){return t.linkTo("#tech-stack")}}},[t._v("\n        "+t._s(t.$t("views.home.platformTechStack"))+"\n      ")]),t._v(" "),n("div",{staticClass:"separator separator--right"})]),t._v(" "),t._l(t.orderedTechStack,function(e,r){return n("tech-stack-block",{key:r,attrs:{title:e.title,tags:e.tags,"image-url":e.imageUrl}},[n("div",{domProps:{innerHTML:t._s(e.summary.html)}})])})],2),t._v(" "),n("section",{staticClass:"section events"},[n("div",{staticClass:"deco"},[n("div",{staticClass:"title anchor",attrs:{id:"events"},on:{click:function(e){return t.linkTo("#events")}}},[t._v("\n        "+t._s(t.$t("views.home.events"))+"\n      ")]),t._v(" "),n("div",{staticClass:"separator separator--right"})]),t._v(" "),n("div",{staticClass:"events__video"},[n("iframe",{attrs:{title:"youtube-sample",frameborder:"0",height:"100%",width:"100%",src:t.$t("href.eventVideo"),allowfullscreen:""}})]),t._v(" "),n("div",{staticClass:"publications"},t._l(t.events,function(e,r){return n("blog-post",{key:r,attrs:{id:t.toID(e.title),title:e.title,subtitle:e.subtitle,summary:e.summary.html,url:e.url,"url-label":e.urlLabel,likes:e.likes},on:{click:function(n){t.linkTo("#"+t.toID(e.title))}}})}),1)]),t._v(" "),n("section",{staticClass:"section careers"},[n("div",{staticClass:"deco"},[n("div",{staticClass:"title anchor",attrs:{id:"careers"},on:{click:function(e){return t.linkTo("#careers")}}},[t._v("\n        "+t._s(t.$t("views.home.careers"))+"\n      ")]),t._v(" "),n("div",{staticClass:"separator separator--right"})]),t._v(" "),n("div",{staticClass:"careers__locations tiles"},t._l(t.orderedCareers,function(t){return n("a",{key:t.id,staticClass:"careers__location",attrs:{href:t.url,target:"_blank",rel:"nofollow noreferrer noopener"}},[n("card",{attrs:{title:t.title,image:t.imageUrl.secure_url,type:t.location,footer:!1}})],1)}),0),t._v(" "),n("div",{staticClass:"careers__btn"},[n("a",{staticClass:"btn btn-primary",attrs:{href:t.$t("href.careers.openPositions"),target:"_blank",rel:"nofollow noreferrer noopener"}},[t._v("\n        "+t._s(t.$t("links.openPositions"))+"\n      ")])])])])},[],!1,null,null,null));e.default=F.exports}}]);