(window.webpackJsonp=window.webpackJsonp||[]).push([[1134],{1190:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(1723)),c={title:"\u5f02\u6b65\u7f16\u7a0b"},i={unversionedId:"async-await",id:"version-3.0.14/async-await",isDocsHomePage:!1,title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro \u652f\u6301\u4f7f\u7528 async functions \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f async functions \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 @tarojs/async-await",source:"@site/versioned_docs/version-3.0.14/async-await.md",slug:"/async-await",permalink:"/taro/docs/async-await",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/async-await.md",version:"3.0.14"},p=[],s={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add @tarojs/async-await\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save @tarojs/async-await\n")),Object(o.b)("p",null,"\u968f\u540e\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u76f4\u63a5 ",Object(o.b)("inlineCode",{parentName:"p"},"import")," \uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u529f\u80fd\u4e86"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// src/app.js\nimport '@tarojs/async-await'\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}u.isMDXComponent=!0},1723:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,d=l["".concat(c,".").concat(f)]||l[f]||b[f]||o;return t?a.a.createElement(d,i(i({ref:n},s),{},{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);