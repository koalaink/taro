(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1723:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var c=n(0),r=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,a=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(n),O=c,j=d["".concat(a,".").concat(O)]||d[O]||p[O]||l;return n?r.a.createElement(j,o(o({ref:t},i),{},{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,a=new Array(l);a[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var i=2;i<l;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var c=n(2),r=n(6),l=(n(0),n(1723)),a={title:"Taro.openLocation(option)",sidebar_label:"openLocation"},o={unversionedId:"apis/location/openLocation",id:"apis/location/openLocation",isDocsHomePage:!1,title:"Taro.openLocation(option)",description:"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e",source:"@site/docs/apis/location/openLocation.md",slug:"/apis/location/openLocation",permalink:"/taro/docs/next/apis/location/openLocation",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/location/openLocation.md",version:"current",sidebar_label:"openLocation",sidebar:"API",previous:{title:"Taro.startLocationUpdate(option)",permalink:"/taro/docs/next/apis/location/startLocationUpdate"},next:{title:"Taro.onLocationChange(callback)",permalink:"/taro/docs/next/apis/location/onLocationChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"latitude"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u7eac\u5ea6\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(l.b)("tr",null,Object(l.b)("td",null,"longitude"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u7ecf\u5ea6\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(l.b)("tr",null,Object(l.b)("td",null,"address"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5730\u5740\u7684\u8be6\u7ec6\u8bf4\u660e")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"name"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4f4d\u7f6e\u540d")),Object(l.b)("tr",null,Object(l.b)("td",null,"scale"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7f29\u653e\u6bd4\u4f8b\uff0c\u8303\u56f45~18")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getLocation({\n type: 'gcj02', //\u8fd4\u56de\u53ef\u4ee5\u7528\u4e8e Taro.openLocation\u7684\u7ecf\u7eac\u5ea6\n success: function (res) {\n   const latitude = res.latitude\n   const longitude = res.longitude\n   Taro.openLocation({\n     latitude,\n     longitude,\n     scale: 18\n   })\n }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.openLocation"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);