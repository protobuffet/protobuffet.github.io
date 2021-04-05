(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[632],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4657:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=n(9652),d={title:"pro.exa.ad.v1.ads.proto",hide_title:!0},u={unversionedId:"protobuffet/example/ad/v1/ads.proto",id:"protobuffet/example/ad/v1/ads.proto",isDocsHomePage:!1,title:"pro.exa.ad.v1.ads.proto",description:"ads.proto",source:"@site/protodocs/protobuffet/example/ad/v1/ads.proto.mdx",slug:"/protobuffet/example/ad/v1/ads.proto",permalink:"/protodocs/protobuffet/example/ad/v1/ads.proto",version:"current",frontMatter:{title:"pro.exa.ad.v1.ads.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"goo.pro.wrappers.proto",permalink:"/protodocs/google/protobuf/wrappers.proto"},next:{title:"pro.exa.car.v1.carts.proto",permalink:"/protodocs/protobuffet/example/carts/v1/carts.proto"}},s=[{value:"<code>ads.proto</code>",id:"adsproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>Ad</code>",id:"ad",children:[]},{value:"<code>AdRequest</code>",id:"adrequest",children:[]},{value:"<code>AdResponse</code>",id:"adresponse",children:[]}]},{value:"Enums",id:"enums",children:[{value:"<code>AdType</code>",id:"adtype",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>AdService</code>",id:"adservice",children:[]}]}],i={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adsproto"},(0,o.kt)("inlineCode",{parentName:"h2"},"ads.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," protobuffet/example/ad/v1/ads.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," protobuffet.example.ad.v1")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"ad"},(0,o.kt)("inlineCode",{parentName:"h3"},"Ad")),(0,o.kt)(l.ProtoMessage,{key:0,message:{name:"Ad",longName:"Ad",fullName:"protobuffet.example.ad.v1.Ad",description:"Represents an Ad that can be displayed to a user. These are generated from a given context.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"redirect_url",description:"URL to redirect to when an ad is clicked.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"text",description:"Short advertisement text to display.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"type",description:"Type of ad.",label:"",type:"AdType",longType:"AdType",fullType:"protobuffet.example.ad.v1.AdType",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adtype"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"adrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"AdRequest")),(0,o.kt)(l.ProtoMessage,{key:1,message:{name:"AdRequest",longName:"AdRequest",fullName:"protobuffet.example.ad.v1.AdRequest",description:"Request to fetch ads for a given context.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"context_keys",description:"List of important key words from the current page describing the context.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"adresponse"},(0,o.kt)("inlineCode",{parentName:"h3"},"AdResponse")),(0,o.kt)(l.ProtoMessage,{key:2,message:{name:"AdResponse",longName:"AdResponse",fullName:"protobuffet.example.ad.v1.AdResponse",description:"Response containing ads to display to the user.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"ads",description:"List of all ads to display. The service responds with many ads, so it is up to the client\nto handle how many should be displayed to the user at a time.",label:"repeated",type:"Ad",longType:"Ad",fullType:"protobuffet.example.ad.v1.Ad",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#ad"}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h3",{id:"adtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"AdType")),(0,o.kt)(l.ProtoEnum,{key:0,enumb:{name:"AdType",longName:"AdType",fullName:"protobuffet.example.ad.v1.AdType",description:"Type of ad to render.",values:[{name:"UNKNOWN",number:"0",description:"Unknown/undefined ad type."},{name:"FEATURED_PRODUCT",number:"1",description:"Featured product ad type."},{name:"HEADER_PRODUCT",number:"2",description:"Header product ad type."},{name:"BUY_IT_AGAIN_PRODUCT",number:"3",description:"Buy it again ad type."}]},mdxType:"ProtoEnum"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("h3",{id:"adservice"},(0,o.kt)("inlineCode",{parentName:"h3"},"AdService")),(0,o.kt)("p",null,"Ads management service. Exposes APIs oriented around displaying ads for\nour users."),(0,o.kt)("h4",{id:"getads"},(0,o.kt)("inlineCode",{parentName:"h4"},"GetAds")),(0,o.kt)(l.ProtoServiceMethod,{key:"GetAds-0",method:{name:"GetAds",description:"Fetch ads to display for a given context.",requestType:"AdRequest",requestLongType:"AdRequest",requestFullType:"protobuffet.example.ad.v1.AdRequest",requestStreaming:!1,responseType:"AdResponse",responseLongType:"AdResponse",responseFullType:"protobuffet.example.ad.v1.AdResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adrequest",responseTypeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adresponse"},mdxType:"ProtoServiceMethod"}),(0,o.kt)("hr",null))}c.isMDXComponent=!0},6742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9756),a=n(7294),o=n(3727),l=n(3919),d=n(412),u=(0,a.createContext)({collectLink:function(){}}),s=n(4996);var i=function(e){var t,n,i,c=e.isNavLink,p=e.to,f=e.href,m=e.activeClassName,v=e.isActive,y=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,g=void 0===h||h,E=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),b=(0,s.C)().withBaseUrl,k=(0,a.useContext)(u),x=p||f,T=(0,l.Z)(x),A=null==x?void 0:x.replace("pathname://",""),w=void 0!==A?(n=A,g&&function(e){return e.startsWith("/")}(n)?b(n):n):void 0,O=(0,a.useRef)(!1),P=c?o.OL:o.rU,N=d.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!N&&T&&null!=w&&window.docusaurus.prefetch(w),function(){N&&i&&i.disconnect()}}),[w,N,T]);var R=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,C=!w||!T||R;return w&&T&&!R&&!y&&k.collectLink(w),C?a.createElement("a",Object.assign({href:w},x&&!T&&{target:"_blank",rel:"noopener noreferrer"},E)):a.createElement(P,Object.assign({},E,{onMouseEnter:function(){O.current||null==w||(window.docusaurus.preload(w),O.current=!0)},innerRef:function(e){var t,n;N&&e&&T&&(t=e,n=function(){null!=w&&window.docusaurus.prefetch(w)},(i=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t),i.disconnect(),n())}))}))).observe(t))},to:w||""},c&&{isActive:v,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,d=void 0!==l&&l,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(d)return t+n;var i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9652:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var a=r(n(7294)),o=r(n(6742)),l={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement("table",null,a.default.createElement((function(){return a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Number"),a.default.createElement("th",null,"Description")))}),null),a.default.createElement((function(){return a.default.createElement("tbody",null,t.values.map((function(e){return a.default.createElement("tr",{key:e.name},a.default.createElement("td",null,a.default.createElement("code",null,e.name)),a.default.createElement("td",null,a.default.createElement("code",null,e.number)),a.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return a.default.createElement("table",null,a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Method"),a.default.createElement("td",null,a.default.createElement("code",null,t.name))),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Request"),a.default.createElement("td",null,a.default.createElement(o.default,{to:t.requestTypeLink},a.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Response"),a.default.createElement("td",null,a.default.createElement(o.default,{to:t.responseTypeLink},a.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Description"),a.default.createElement("td",null,t.description))))};var d=function(e){var n=e.methods;return a.default.createElement(a.default.Fragment,null,n.map((function(e,n){return a.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement(d,{methods:t.methods}))};var u=function(e){var t=e.fields,n=function(e){var t=e.field,n=a.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.default.createElement(o.default,{to:t.typeLink},n)};return a.default.createElement("table",null,a.default.createElement((function(){return a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Type"),a.default.createElement("th",null,"Description")))}),null),a.default.createElement((function(){return a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{key:e.name},a.default.createElement("td",null,a.default.createElement("code",null,e.name)),a.default.createElement("td",null,a.default.createElement(n,{field:e})),a.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement(u,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,r=e.components;return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.h1,null,n.name),a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return a.default.createElement(t.ProtoMessage,{message:e,key:n})})))}}}]);