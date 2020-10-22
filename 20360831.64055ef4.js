(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1723:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),l=p(t),u=n,g=l["".concat(c,".").concat(u)]||l[u]||s[u]||o;return t?a.a.createElement(g,i(i({ref:r},b),{},{components:t})):a.a.createElement(g,i({ref:r},b))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},274:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return d})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),o=(t(0),t(1723)),c={title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},i={unversionedId:"apis/media/recorder/getRecorderManager",id:"apis/media/recorder/getRecorderManager",isDocsHomePage:!1,title:"Taro.getRecorderManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager",source:"@site/docs/apis/media/recorder/getRecorderManager.md",slug:"/apis/media/recorder/getRecorderManager",permalink:"/taro/docs/next/apis/media/recorder/getRecorderManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/recorder/getRecorderManager.md",version:"current",sidebar_label:"getRecorderManager",sidebar:"API",previous:{title:"Taro.startRecord(option)",permalink:"/taro/docs/next/apis/media/recorder/startRecord"},next:{title:"RecorderManager",permalink:"/taro/docs/next/apis/media/recorder/RecorderManager"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:d};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u83b7\u53d6",Object(o.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => RecorderManager\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const recorderManager = Taro.getRecorderManager()\nrecorderManager.onStart(() => {\n  console.log('recorder start')\n})\nrecorderManager.onPause(() => {\n  console.log('recorder pause')\n})\nrecorderManager.onStop((res) => {\n  console.log('recorder stop', res)\n  const { tempFilePath } = res\n})\nrecorderManager.onFrameRecorded((res) => {\n  const { frameBuffer } = res\n  console.log('frameBuffer.byteLength', frameBuffer.byteLength)\n})\nconst options = {\n  duration: 10000,\n  sampleRate: 44100,\n  numberOfChannels: 1,\n  encodeBitRate: 192000,\n  format: 'aac',\n  frameSize: 50\n}\nrecorderManager.start(options)\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getRecorderManager"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);