(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[381],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||p[d]||a;return r?o.createElement(b,c(c({ref:t},f),{},{components:r})):o.createElement(b,c({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=l;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5232:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return f}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),c={title:"Protobuf",slug:"/what/protobuf"},u={unversionedId:"what/protobuf",id:"what/protobuf",isDocsHomePage:!1,title:"Protobuf",description:"Protobuffet builds enhanced views and documentation for your Protobuf file workspace.",source:"@site/docs/what/protobuf.md",slug:"/what/protobuf",permalink:"/docs/what/protobuf",editUrl:"https://github.com/protobuffet/docusaurus-protobuffet/edit/master/website/docs/what/protobuf.md",version:"current",frontMatter:{title:"Protobuf",slug:"/what/protobuf"}},i=[],s={toc:i};function f(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Protobuffet builds enhanced views and documentation for your Protobuf file workspace.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/overview"},"Protocol buffers")," provide a language-agnostic way to serialize and access structured data. This is enabled by Protobuf contracts defined in ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," files. These Protobuf files define messages, services, enums, and other data types. Applications read these contracts in order to interface with other processes and servers operating on the same set of contracts."),(0,a.kt)("p",null,"Protobuffet depends on a snapshot of these contracts to generate an enhanced view of your workspace. With your contracts used as granular documentation, Protobuffet provides the building blocks to improve towards a complete documentation set."))}f.isMDXComponent=!0}}]);