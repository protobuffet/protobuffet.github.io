(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(114)),l=n(120),d={title:"ads.proto",hide_title:!0},s={unversionedId:"protobuffet/example/ad/v1/ads.proto",id:"protobuffet/example/ad/v1/ads.proto",isDocsHomePage:!1,title:"ads.proto",description:"ads.proto",source:"@site/protodocs/protobuffet/example/ad/v1/ads.proto.mdx",slug:"/protobuffet/example/ad/v1/ads.proto",permalink:"/protodocs/protobuffet/example/ad/v1/ads.proto",version:"current",sidebar:"protodocs",previous:{title:"wrappers.proto",permalink:"/protodocs/google/protobuf/wrappers.proto"},next:{title:"carts.proto",permalink:"/protodocs/protobuffet/example/carts/v1/carts.proto"}},u=[{value:"<code>ads.proto</code>",id:"adsproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>Ad</code>",id:"ad",children:[]},{value:"<code>AdRequest</code>",id:"adrequest",children:[]},{value:"<code>AdResponse</code>",id:"adresponse",children:[]}]},{value:"Enums",id:"enums",children:[{value:"<code>AdType</code>",id:"adtype",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>AdService</code>",id:"adservice",children:[]}]}],c={toc:u};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"adsproto"},Object(o.b)("inlineCode",{parentName:"h2"},"ads.proto")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"path")," protobuffet/example/ad/v1/ads.proto")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"package")," protobuffet.example.ad.v1")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"messages"},"Messages"),Object(o.b)("h3",{id:"ad"},Object(o.b)("inlineCode",{parentName:"h3"},"Ad")),Object(o.b)(l.ProtoMessage,{key:0,message:{name:"Ad",longName:"Ad",fullName:"protobuffet.example.ad.v1.Ad",description:"Represents an Ad that can be displayed to a user. These are generated from a given context.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"redirect_url",description:"URL to redirect to when an ad is clicked.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"text",description:"Short advertisement text to display.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"type",description:"Type of ad.",label:"",type:"AdType",longType:"AdType",fullType:"protobuffet.example.ad.v1.AdType",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adtype"}]},mdxType:"ProtoMessage"}),Object(o.b)("h3",{id:"adrequest"},Object(o.b)("inlineCode",{parentName:"h3"},"AdRequest")),Object(o.b)(l.ProtoMessage,{key:1,message:{name:"AdRequest",longName:"AdRequest",fullName:"protobuffet.example.ad.v1.AdRequest",description:"Request to fetch ads for a given context.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"context_keys",description:"List of important key words from the current page describing the context.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),Object(o.b)("h3",{id:"adresponse"},Object(o.b)("inlineCode",{parentName:"h3"},"AdResponse")),Object(o.b)(l.ProtoMessage,{key:2,message:{name:"AdResponse",longName:"AdResponse",fullName:"protobuffet.example.ad.v1.AdResponse",description:"Response containing ads to display to the user.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"ads",description:"List of all ads to display. The service responds with many ads, so it is up to the client\nto handle how many should be displayed to the user at a time.",label:"repeated",type:"Ad",longType:"Ad",fullType:"protobuffet.example.ad.v1.Ad",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#ad"}]},mdxType:"ProtoMessage"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"enums"},"Enums"),Object(o.b)("h3",{id:"adtype"},Object(o.b)("inlineCode",{parentName:"h3"},"AdType")),Object(o.b)(l.ProtoEnum,{key:0,enumb:{name:"AdType",longName:"AdType",fullName:"protobuffet.example.ad.v1.AdType",description:"Type of ad to render.",values:[{name:"UNKNOWN",number:"0",description:"Unknown/undefined ad type."},{name:"FEATURED_PRODUCT",number:"1",description:"Featured product ad type."},{name:"HEADER_PRODUCT",number:"2",description:"Header product ad type."},{name:"BUY_IT_AGAIN_PRODUCT",number:"3",description:"Buy it again ad type."}]},mdxType:"ProtoEnum"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("h3",{id:"adservice"},Object(o.b)("inlineCode",{parentName:"h3"},"AdService")),Object(o.b)("p",null,"Ads management service. Exposes APIs oriented around displaying ads for\nour users."),Object(o.b)("h4",{id:"getads"},Object(o.b)("inlineCode",{parentName:"h4"},"GetAds")),Object(o.b)(l.ProtoServiceMethod,{key:"GetAds-0",method:{name:"GetAds",description:"Fetch ads to display for a given context.",requestType:"AdRequest",requestLongType:"AdRequest",requestFullType:"protobuffet.example.ad.v1.AdRequest",requestStreaming:!1,responseType:"AdResponse",responseLongType:"AdResponse",responseFullType:"protobuffet.example.ad.v1.AdResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adrequest",responseTypeLink:"/protodocs/protobuffet/example/ad/v1/ads.proto#adresponse"},mdxType:"ProtoServiceMethod"}),Object(o.b)("hr",null))}i.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},i=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=c(n),f=r,m=i["".concat(l,".").concat(f)]||i[f]||p[f]||o;return n?a.a.createElement(m,d(d({ref:t},u),{},{components:n})):a.a.createElement(m,d({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),l=n(115),d=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(117),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.default=function(e){var t,{isNavLink:n,to:i,href:p,activeClassName:f,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:y=!0}=e,v=c(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(u.b)(),g=Object(r.useContext)(s),E=i||p,O=Object(l.a)(E),j=null==E?void 0:E.replace("pathname://",""),w=void 0!==j?(x=j,y&&(e=>e.startsWith("/"))(x)?h(x):x):void 0;var x;const T=Object(r.useRef)(!1),A=n?o.e:o.c,P=d.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!P&&O&&window.docusaurus.prefetch(w),()=>{P&&k&&k.disconnect()})),[w,P,O]);const N=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,R=!w||!O||N;return w&&O&&!N&&!b&&g.collectLink(w),R?a.a.createElement("a",Object.assign({href:w},E&&!O&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(A,Object.assign({},v,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:e=>{var t,n;P&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(w)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:w||""},n&&{isActive:m,activeClassName:f}))}},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(16),a=n(115);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},120:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var a=r(n(0)),o=r(n(116)),l={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement("table",null,a.default.createElement((function(){return a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Number"),a.default.createElement("th",null,"Description")))}),null),a.default.createElement((function(){return a.default.createElement("tbody",null,t.values.map((function(e){return a.default.createElement("tr",{key:e.name},a.default.createElement("td",null,a.default.createElement("code",null,e.name)),a.default.createElement("td",null,a.default.createElement("code",null,e.number)),a.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return a.default.createElement("table",null,a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Method"),a.default.createElement("td",null,a.default.createElement("code",null,t.name))),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Request"),a.default.createElement("td",null,a.default.createElement(o.default,{to:t.requestTypeLink},a.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Response"),a.default.createElement("td",null,a.default.createElement(o.default,{to:t.responseTypeLink},a.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),a.default.createElement("tr",null,a.default.createElement("th",{style:l},"Description"),a.default.createElement("td",null,t.description))))};var d=function(e){var n=e.methods;return a.default.createElement(a.default.Fragment,null,n.map((function(e,n){return a.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement(d,{methods:t.methods}))};var s=function(e){var t=e.fields,n=function(e){var t=e.field,n=a.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.default.createElement(o.default,{to:t.typeLink},n)};return a.default.createElement("table",null,a.default.createElement((function(){return a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Type"),a.default.createElement("th",null,"Description")))}),null),a.default.createElement((function(){return a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{key:e.name},a.default.createElement("td",null,a.default.createElement("code",null,e.name)),a.default.createElement("td",null,a.default.createElement(n,{field:e})),a.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.default.createElement(s,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,r=e.components;return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.h1,null,n.name),a.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return a.default.createElement(t.ProtoMessage,{message:e,key:n})})))}}}]);