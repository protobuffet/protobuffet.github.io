(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[100],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||s;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9397:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),i=r(9652),a={title:"shipping.proto",hide_title:!0},l={unversionedId:"protobuffet/example/shipping/v1/shipping.proto",id:"protobuffet/example/shipping/v1/shipping.proto",isDocsHomePage:!1,title:"shipping.proto",description:"shipping.proto",source:"@site/protodocs/protobuffet/example/shipping/v1/shipping.proto.mdx",slug:"/protobuffet/example/shipping/v1/shipping.proto",permalink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto",version:"current",frontMatter:{title:"shipping.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"recommendations.proto",permalink:"/protodocs/protobuffet/example/recommendations/v1/recommendations.proto"}},p=[{value:"<code>shipping.proto</code>",id:"shippingproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>Address</code>",id:"address",children:[]},{value:"<code>GetQuoteRequest</code>",id:"getquoterequest",children:[]},{value:"<code>GetQuoteResponse</code>",id:"getquoteresponse",children:[]},{value:"<code>ShipOrderRequest</code>",id:"shiporderrequest",children:[]},{value:"<code>ShipOrderResponse</code>",id:"shiporderresponse",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>ShippingService</code>",id:"shippingservice",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"shippingproto"},(0,s.kt)("inlineCode",{parentName:"h2"},"shipping.proto")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"path")," protobuffet/example/shipping/v1/shipping.proto")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"package")," protobuffet.example.shipping.v1")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("h3",{id:"address"},(0,s.kt)("inlineCode",{parentName:"h3"},"Address")),(0,s.kt)(i.ProtoMessage,{key:0,message:{name:"Address",longName:"Address",fullName:"protobuffet.example.shipping.v1.Address",description:"Represents an Address that we ship to.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"street_address",description:"Address Line 1. If a unit number is present, it should prefix the street number eg. 613-54 Albert St.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"city",description:"City the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"state",description:"State the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"country",description:"Country the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"zip_code",description:"Postal area the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"getquoterequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetQuoteRequest")),(0,s.kt)(i.ProtoMessage,{key:1,message:{name:"GetQuoteRequest",longName:"GetQuoteRequest",fullName:"protobuffet.example.shipping.v1.GetQuoteRequest",description:"Request to fetch a quote for a proposed shipment/order.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"Address for proposed order.",label:"",type:"Address",longType:"Address",fullType:"protobuffet.example.shipping.v1.Address",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#address"},{name:"items",description:"Items within proposed order.",label:"repeated",type:"CartItem",longType:"protobuffet.example.carts.v1.CartItem",fullType:"protobuffet.example.carts.v1.CartItem",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/carts/v1/carts.proto#cartitem"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"getquoteresponse"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetQuoteResponse")),(0,s.kt)(i.ProtoMessage,{key:2,message:{name:"GetQuoteResponse",longName:"GetQuoteResponse",fullName:"protobuffet.example.shipping.v1.GetQuoteResponse",description:"Response for a proposed shipment quote.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"cost_usd",description:"Shipment quote. See implementation docs for unique responses.",label:"",type:"Money",longType:"protobuffet.example.common.types.v1.Money",fullType:"protobuffet.example.common.types.v1.Money",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/common/types/v1/money.proto#money"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"shiporderrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"ShipOrderRequest")),(0,s.kt)(i.ProtoMessage,{key:3,message:{name:"ShipOrderRequest",longName:"ShipOrderRequest",fullName:"protobuffet.example.shipping.v1.ShipOrderRequest",description:"Request to trigger a new order to be shipped.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"Address order should be shipped to.",label:"",type:"Address",longType:"Address",fullType:"protobuffet.example.shipping.v1.Address",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#address"},{name:"items",description:"Items the proposed order contains.",label:"repeated",type:"CartItem",longType:"protobuffet.example.carts.v1.CartItem",fullType:"protobuffet.example.carts.v1.CartItem",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/carts/v1/carts.proto#cartitem"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"shiporderresponse"},(0,s.kt)("inlineCode",{parentName:"h3"},"ShipOrderResponse")),(0,s.kt)(i.ProtoMessage,{key:4,message:{name:"ShipOrderResponse",longName:"ShipOrderResponse",fullName:"protobuffet.example.shipping.v1.ShipOrderResponse",description:"Response for a successfully created order.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tracking_id",description:"Tracking ID for the created order.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"services"},"Services"),(0,s.kt)("h3",{id:"shippingservice"},(0,s.kt)("inlineCode",{parentName:"h3"},"ShippingService")),(0,s.kt)("p",null,"Shipment management service. This is a service created for the purpose of demonstration."),(0,s.kt)("h4",{id:"getquote"},(0,s.kt)("inlineCode",{parentName:"h4"},"GetQuote")),(0,s.kt)(i.ProtoServiceMethod,{key:"GetQuote-0",method:{name:"GetQuote",description:"Fetch a quote (cost) for a proposed shipment.",requestType:"GetQuoteRequest",requestLongType:"GetQuoteRequest",requestFullType:"protobuffet.example.shipping.v1.GetQuoteRequest",requestStreaming:!1,responseType:"GetQuoteResponse",responseLongType:"GetQuoteResponse",responseFullType:"protobuffet.example.shipping.v1.GetQuoteResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#getquoterequest",responseTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#getquoteresponse"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"shiporder"},(0,s.kt)("inlineCode",{parentName:"h4"},"ShipOrder")),(0,s.kt)(i.ProtoServiceMethod,{key:"ShipOrder-1",method:{name:"ShipOrder",description:"Trigger a new order to be shipped.",requestType:"ShipOrderRequest",requestLongType:"ShipOrderRequest",requestFullType:"protobuffet.example.shipping.v1.ShipOrderRequest",requestStreaming:!1,responseType:"ShipOrderResponse",responseLongType:"ShipOrderResponse",responseFullType:"protobuffet.example.shipping.v1.ShipOrderResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#shiporderrequest",responseTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#shiporderresponse"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("hr",null))}d.isMDXComponent=!0},6742:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(9756),o=r(7294),s=r(3727),i=r(3919),a=r(412),l=(0,o.createContext)({collectLink:function(){}}),p=r(4996);var u=function(e){var t,r,u,d=e.isNavLink,c=e.to,f=e.href,m=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,b=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),E=(0,p.C)().withBaseUrl,k=(0,o.useContext)(l),x=c||f,T=(0,i.Z)(x),S=null==x?void 0:x.replace("pathname://",""),O=void 0!==S?(r=S,v&&function(e){return e.startsWith("/")}(r)?E(r):r):void 0,w=(0,o.useRef)(!1),q=d?s.OL:s.rU,R=a.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!R&&T&&null!=O&&window.docusaurus.prefetch(O),function(){R&&u&&u.disconnect()}}),[O,R,T]);var P=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,C=!O||!T||P;return O&&T&&!P&&!g&&k.collectLink(O),C?o.createElement("a",Object.assign({href:O},x&&!T&&{target:"_blank",rel:"noopener noreferrer"},b)):o.createElement(q,Object.assign({},b,{onMouseEnter:function(){w.current||null==O||(window.docusaurus.preload(O),w.current=!0)},innerRef:function(e){var t,r;R&&e&&T&&(t=e,r=function(){null!=O&&window.docusaurus.prefetch(O)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),r())}))}))).observe(t))},to:O||""},d&&{isActive:h,activeClassName:m}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return s},Z:function(){return i}});var n=r(2263),o=r(3919);function s(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var s=void 0===n?{}:n,i=s.forcePrependBaseUrl,a=void 0!==i&&i,l=s.absolute,p=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+u:u}(s,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},9652:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var o=n(r(7294)),s=n(r(6742)),i={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Number"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.values.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement("code",null,e.number)),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return o.default.createElement("table",null,o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",{style:i},"Method"),o.default.createElement("td",null,o.default.createElement("code",null,t.name))),o.default.createElement("tr",null,o.default.createElement("th",{style:i},"Request"),o.default.createElement("td",null,o.default.createElement(s.default,{to:t.requestTypeLink},o.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:i},"Response"),o.default.createElement("td",null,o.default.createElement(s.default,{to:t.responseTypeLink},o.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:i},"Description"),o.default.createElement("td",null,t.description))))};var a=function(e){var r=e.methods;return o.default.createElement(o.default.Fragment,null,r.map((function(e,r){return o.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+r})})))};t.ProtoService=function(e){var t=e.service;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(a,{methods:t.methods}))};var l=function(e){var t=e.fields,r=function(e){var t=e.field,r=o.default.createElement("code",null,t.longType);return void 0===t.typeLink?r:o.default.createElement(s.default,{to:t.typeLink},r)};return o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Type"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement(r,{field:e})),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(l,{fields:t.fields}))};t.default=function(e){var r=e.fileDescriptor,n=e.components;return o.default.createElement(o.default.Fragment,null,o.default.createElement(n.h1,null,r.name),o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},r.description),r.messages.map((function(e,r){return o.default.createElement(t.ProtoMessage,{message:e,key:r})})))}}}]);