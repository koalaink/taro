(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1723:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||s[h]||a;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},717:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(1723)),i={title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",sidebar_label:"onBluetoothAdapterStateChange"},c={unversionedId:"apis/device/bluetooth/onBluetoothAdapterStateChange",id:"version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange",isDocsHomePage:!1,title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.onBluetoothAdapterStateChange\u3002",source:"@site/versioned_docs/version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange.md",slug:"/apis/device/bluetooth/onBluetoothAdapterStateChange",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange.md",version:"1.3.45",sidebar_label:"onBluetoothAdapterStateChange",sidebar:"version-1.3.45/API",previous:{title:"Taro.getConnectedBluetoothDevices(OBJECT)",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"Taro.onBluetoothDeviceFound(CALLBACK)",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/onBluetoothDeviceFound"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothAdapterStateChange.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.onBluetoothAdapterStateChange")),"\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onBluetoothAdapterStateChange(res => {\n  console.log(`adapterState changed, now is`, res)\n})\n")))}u.isMDXComponent=!0}}]);