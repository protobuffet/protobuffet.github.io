(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[660],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=n(9652),i={title:"recommendations.proto",hide_title:!0},s={unversionedId:"protobuffet/example/recommendations/v1/recommendations.proto",id:"protobuffet/example/recommendations/v1/recommendations.proto",isDocsHomePage:!1,title:"recommendations.proto",description:"recommendations.proto",source:"@site/protodocs/protobuffet/example/recommendations/v1/recommendations.proto.mdx",slug:"/protobuffet/example/recommendations/v1/recommendations.proto",permalink:"/protodocs/protobuffet/example/recommendations/v1/recommendations.proto",version:"current",frontMatter:{title:"recommendations.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"productcatalog.proto",permalink:"/protodocs/protobuffet/example/productcatalog/v1/productcatalog.proto"},next:{title:"shipping.proto",permalink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto"}},u=[{value:"<code>recommendations.proto</code>",id:"recommendationsproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>ListRecommendationsRequest</code>",id:"listrecommendationsrequest",children:[]},{value:"<code>ListRecommendationsResponse</code>",id:"listrecommendationsresponse",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>RecommendationService</code>",id:"recommendationservice",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"recommendationsproto"},(0,a.kt)("inlineCode",{parentName:"h2"},"recommendations.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," protobuffet/example/recommendations/v1/recommendations.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," protobuffet.example.recommendations.v1")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"listrecommendationsrequest"},(0,a.kt)("inlineCode",{parentName:"h3"},"ListRecommendationsRequest")),(0,a.kt)(l.ProtoMessage,{key:0,message:{name:"ListRecommendationsRequest",longName:"ListRecommendationsRequest",fullName:"protobuffet.example.recommendations.v1.ListRecommendationsRequest",description:"Request to get product recommendations for a user.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"user_id",description:"User to lookup recommendations for.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"product_ids",description:"Product IDs for the current user context that we are recommending for.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"listrecommendationsresponse"},(0,a.kt)("inlineCode",{parentName:"h3"},"ListRecommendationsResponse")),(0,a.kt)(l.ProtoMessage,{key:1,message:{name:"ListRecommendationsResponse",longName:"ListRecommendationsResponse",fullName:"protobuffet.example.recommendations.v1.ListRecommendationsResponse",description:"Response containing product recommendations.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"product_ids",description:"IDs referencing products that we recommend for the received request.\nSee implementation docs for details on formatting.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("h3",{id:"recommendationservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"RecommendationService")),(0,a.kt)("p",null,"Further product recommendations for user given a set of product IDs."),(0,a.kt)("h4",{id:"listrecommendations"},(0,a.kt)("inlineCode",{parentName:"h4"},"ListRecommendations")),(0,a.kt)(l.ProtoServiceMethod,{key:"ListRecommendations-0",method:{name:"ListRecommendations",description:"List recommendations for a given user and context.",requestType:"ListRecommendationsRequest",requestLongType:"ListRecommendationsRequest",requestFullType:"protobuffet.example.recommendations.v1.ListRecommendationsRequest",requestStreaming:!1,responseType:"ListRecommendationsResponse",responseLongType:"ListRecommendationsResponse",responseFullType:"protobuffet.example.recommendations.v1.ListRecommendationsResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/recommendations/v1/recommendations.proto#listrecommendationsrequest",responseTypeLink:"/protodocs/protobuffet/example/recommendations/v1/recommendations.proto#listrecommendationsresponse"},mdxType:"ProtoServiceMethod"}),(0,a.kt)("hr",null))}d.isMDXComponent=!0},6742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(9756),o=n(7294),a=n(3727),l=n(3919),i=n(412),s=(0,o.createContext)({collectLink:function(){}}),u=n(4996);var c=function(e){var t,n,c,d=e.isNavLink,m=e.to,p=e.href,f=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,E=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),b=(0,u.C)().withBaseUrl,k=(0,o.useContext)(s),w=m||p,R=(0,l.Z)(w),x=null==w?void 0:w.replace("pathname://",""),L=void 0!==x?(n=x,y&&function(e){return e.startsWith("/")}(n)?b(n):n):void 0,O=(0,o.useRef)(!1),P=d?a.OL:a.rU,T=i.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!T&&R&&null!=L&&window.docusaurus.prefetch(L),function(){T&&c&&c.disconnect()}}),[L,T,R]);var S=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,N=!L||!R||S;return L&&R&&!S&&!h&&k.collectLink(L),N?o.createElement("a",Object.assign({href:L},w&&!R&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(P,Object.assign({},E,{onMouseEnter:function(){O.current||null==L||(window.docusaurus.preload(L),O.current=!0)},innerRef:function(e){var t,n;T&&e&&R&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(c=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(t),c.disconnect(),n())}))}))).observe(t))},to:L||""},d&&{isActive:v,activeClassName:f}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(2263),o=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,l=a.forcePrependBaseUrl,i=void 0!==l&&l,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(i)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(a,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},9652:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var o=r(n(7294)),a=r(n(6742)),l={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Number"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.values.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement("code",null,e.number)),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return o.default.createElement("table",null,o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Method"),o.default.createElement("td",null,o.default.createElement("code",null,t.name))),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Request"),o.default.createElement("td",null,o.default.createElement(a.default,{to:t.requestTypeLink},o.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Response"),o.default.createElement("td",null,o.default.createElement(a.default,{to:t.responseTypeLink},o.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Description"),o.default.createElement("td",null,t.description))))};var i=function(e){var n=e.methods;return o.default.createElement(o.default.Fragment,null,n.map((function(e,n){return o.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(i,{methods:t.methods}))};var s=function(e){var t=e.fields,n=function(e){var t=e.field,n=o.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:o.default.createElement(a.default,{to:t.typeLink},n)};return o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Type"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement(n,{field:e})),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(s,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,r=e.components;return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.h1,null,n.name),o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return o.default.createElement(t.ProtoMessage,{message:e,key:n})})))}}}]);