(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[908],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3257:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Motivation",slug:"/what/motivation"},u={unversionedId:"what/motivation",id:"what/motivation",isDocsHomePage:!1,title:"Motivation",description:"Protobuffet is intended for builders and consumers of Protobuf service implementations.",source:"@site/docs/what/motivation.md",slug:"/what/motivation",permalink:"/docs/what/motivation",editUrl:"https://github.com/protobuffet/docusaurus-protobuffet/edit/master/website/docs/what/motivation.md",version:"current",frontMatter:{title:"Motivation",slug:"/what/motivation"},sidebar:"docs",previous:{title:"Demo",permalink:"/docs/what/demo"},next:{title:"Packages",permalink:"/docs/how/packages"}},c=[],s={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Protobuffet is intended for builders and consumers of Protobuf service implementations.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Documentation reduces the barrier for users")," to consume your APIs. As a builder, writing ",(0,a.kt)("strong",{parentName:"p"},"consistent, accurate documentation is difficult")," and often impacts developer velocity. The community is transitioning to services exposed by Protobuf contracts, but unfortunately the documentation toolset that we used to rely on for JSON APIs is no longer applicable. ",(0,a.kt)("strong",{parentName:"p"},"Protobuffet aims to solve this need")," for consistent, accurate documentation that satisfies both the builders and consumers of ",(0,a.kt)("strong",{parentName:"p"},"APIs driven by Protobuf contracts"),"."),(0,a.kt)("p",null,"Use Protobuffet if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 You build or consume a set of APIs driven by Protobuf contracts."),(0,a.kt)("li",{parentName:"ul"},"\u2705 You rely on Protobuf contracts for data de/serialization."),(0,a.kt)("li",{parentName:"ul"},"\u2705 You require an enhanced version of Protobuf documentation compared to what is offered today."),(0,a.kt)("li",{parentName:"ul"},"\u2705 You believe documentation should be driven by code and auto-generated."),(0,a.kt)("li",{parentName:"ul"},"\u2705 You are willing to leverage the Docusaurus framework.")))}l.isMDXComponent=!0}}]);