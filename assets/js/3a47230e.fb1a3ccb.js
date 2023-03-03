"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),c=o,m=d["".concat(a,".").concat(c)]||d[c]||f[c]||s;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=c;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),s=r(9652);const l={title:"shipping.proto",hide_title:!0},p="shipping.proto",a={unversionedId:"protobuffet/example/shipping/v1/shipping.proto",id:"protobuffet/example/shipping/v1/shipping.proto",title:"shipping.proto",description:"**path** protobuffet/example/shipping/v1/shipping.proto",source:"@site/protodocs/protobuffet/example/shipping/v1/shipping.proto.mdx",sourceDirName:"protobuffet/example/shipping/v1",slug:"/protobuffet/example/shipping/v1/shipping.proto",permalink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto",draft:!1,tags:[],version:"current",frontMatter:{title:"shipping.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"recommendations.proto",permalink:"/protodocs/protobuffet/example/recommendations/v1/recommendations.proto"}},i={},u=[{value:"Messages",id:"messages",level:2},{value:"<code>Address</code>",id:"address",level:3},{value:"<code>GetQuoteRequest</code>",id:"getquoterequest",level:3},{value:"<code>GetQuoteResponse</code>",id:"getquoteresponse",level:3},{value:"<code>ShipOrderRequest</code>",id:"shiporderrequest",level:3},{value:"<code>ShipOrderResponse</code>",id:"shiporderresponse",level:3},{value:"Services",id:"services",level:2},{value:"<code>ShippingService</code>",id:"shippingservice",level:3},{value:"<code>GetQuote</code>",id:"getquote",level:4},{value:"<code>ShipOrder</code>",id:"shiporder",level:4}],d={toc:u},f="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shippingproto"},(0,o.kt)("inlineCode",{parentName:"h1"},"shipping.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," protobuffet/example/shipping/v1/shipping.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," protobuffet.example.shipping.v1")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"address"},(0,o.kt)("inlineCode",{parentName:"h3"},"Address")),(0,o.kt)(s.ProtoMessage,{key:0,message:{name:"Address",longName:"Address",fullName:"protobuffet.example.shipping.v1.Address",description:"Represents an Address that we ship to.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"street_address",description:"Address Line 1. If a unit number is present, it should prefix the street number eg. 613-54 Albert St.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"city",description:"City the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"state",description:"State the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"country",description:"Country the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"zip_code",description:"Postal area the address is within. See implementation docs for expected formatting.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"getquoterequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetQuoteRequest")),(0,o.kt)(s.ProtoMessage,{key:1,message:{name:"GetQuoteRequest",longName:"GetQuoteRequest",fullName:"protobuffet.example.shipping.v1.GetQuoteRequest",description:"Request to fetch a quote for a proposed shipment/order.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"Address for proposed order.",label:"",type:"Address",longType:"Address",fullType:"protobuffet.example.shipping.v1.Address",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#address"},{name:"items",description:"Items within proposed order.",label:"repeated",type:"CartItem",longType:"protobuffet.example.carts.v1.CartItem",fullType:"protobuffet.example.carts.v1.CartItem",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/carts/v1/carts.proto#cartitem"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"getquoteresponse"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetQuoteResponse")),(0,o.kt)(s.ProtoMessage,{key:2,message:{name:"GetQuoteResponse",longName:"GetQuoteResponse",fullName:"protobuffet.example.shipping.v1.GetQuoteResponse",description:"Response for a proposed shipment quote.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"cost_usd",description:"Shipment quote. See implementation docs for unique responses.",label:"",type:"Money",longType:"protobuffet.example.common.types.v1.Money",fullType:"protobuffet.example.common.types.v1.Money",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/common/types/v1/money.proto#money"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"shiporderrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"ShipOrderRequest")),(0,o.kt)(s.ProtoMessage,{key:3,message:{name:"ShipOrderRequest",longName:"ShipOrderRequest",fullName:"protobuffet.example.shipping.v1.ShipOrderRequest",description:"Request to trigger a new order to be shipped.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"Address order should be shipped to.",label:"",type:"Address",longType:"Address",fullType:"protobuffet.example.shipping.v1.Address",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#address"},{name:"items",description:"Items the proposed order contains.",label:"repeated",type:"CartItem",longType:"protobuffet.example.carts.v1.CartItem",fullType:"protobuffet.example.carts.v1.CartItem",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/protobuffet/example/carts/v1/carts.proto#cartitem"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"shiporderresponse"},(0,o.kt)("inlineCode",{parentName:"h3"},"ShipOrderResponse")),(0,o.kt)(s.ProtoMessage,{key:4,message:{name:"ShipOrderResponse",longName:"ShipOrderResponse",fullName:"protobuffet.example.shipping.v1.ShipOrderResponse",description:"Response for a successfully created order.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tracking_id",description:"Tracking ID for the created order.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("h3",{id:"shippingservice"},(0,o.kt)("inlineCode",{parentName:"h3"},"ShippingService")),(0,o.kt)("p",null,"Shipment management service. This is a service created for the purpose of demonstration."),(0,o.kt)("h4",{id:"getquote"},(0,o.kt)("inlineCode",{parentName:"h4"},"GetQuote")),(0,o.kt)(s.ProtoServiceMethod,{key:"GetQuote-0",method:{name:"GetQuote",description:"Fetch a quote (cost) for a proposed shipment.",requestType:"GetQuoteRequest",requestLongType:"GetQuoteRequest",requestFullType:"protobuffet.example.shipping.v1.GetQuoteRequest",requestStreaming:!1,responseType:"GetQuoteResponse",responseLongType:"GetQuoteResponse",responseFullType:"protobuffet.example.shipping.v1.GetQuoteResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#getquoterequest",responseTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#getquoteresponse"},mdxType:"ProtoServiceMethod"}),(0,o.kt)("h4",{id:"shiporder"},(0,o.kt)("inlineCode",{parentName:"h4"},"ShipOrder")),(0,o.kt)(s.ProtoServiceMethod,{key:"ShipOrder-1",method:{name:"ShipOrder",description:"Trigger a new order to be shipped.",requestType:"ShipOrderRequest",requestLongType:"ShipOrderRequest",requestFullType:"protobuffet.example.shipping.v1.ShipOrderRequest",requestStreaming:!1,responseType:"ShipOrderResponse",responseLongType:"ShipOrderResponse",responseFullType:"protobuffet.example.shipping.v1.ShipOrderResponse",responseStreaming:!1,requestTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#shiporderrequest",responseTypeLink:"/protodocs/protobuffet/example/shipping/v1/shipping.proto#shiporderresponse"},mdxType:"ProtoServiceMethod"}),(0,o.kt)("hr",null))}c.isMDXComponent=!0},9652:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var o=n(r(7294)),s=n(r(9960)),l={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Number"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.values.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement("code",null,e.number)),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return o.default.createElement("table",null,o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Method"),o.default.createElement("td",null,o.default.createElement("code",null,t.name))),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Request"),o.default.createElement("td",null,o.default.createElement(s.default,{to:t.requestTypeLink},o.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Response"),o.default.createElement("td",null,o.default.createElement(s.default,{to:t.responseTypeLink},o.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),o.default.createElement("tr",null,o.default.createElement("th",{style:l},"Description"),o.default.createElement("td",null,t.description))))};var p=function(e){var r=e.methods;return o.default.createElement(o.default.Fragment,null,r.map((function(e,r){return o.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+r})})))};t.ProtoService=function(e){var t=e.service;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(p,{methods:t.methods}))};var a=function(e){var t=e.fields,r=function(e){var t=e.field,r=""!=t.label?o.default.createElement("i",null,t.label,"\xa0"):"",n=o.default.createElement("span",null,r,o.default.createElement("code",null,t.longType));return void 0===t.typeLink?n:o.default.createElement(s.default,{to:t.typeLink},n)};return o.default.createElement("table",null,o.default.createElement((function(){return o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Type"),o.default.createElement("th",null,"Description")))}),null),o.default.createElement((function(){return o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{key:e.name},o.default.createElement("td",null,o.default.createElement("code",null,e.name)),o.default.createElement("td",null,o.default.createElement(r,{field:e})),o.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),o.default.createElement(a,{fields:t.fields}))};t.default=function(e){var r=e.fileDescriptor,n=e.components;return o.default.createElement(o.default.Fragment,null,o.default.createElement(n.h1,null,r.name),o.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},r.description),r.messages.map((function(e,r){return o.default.createElement(t.ProtoMessage,{message:e,key:r})})))}}}]);