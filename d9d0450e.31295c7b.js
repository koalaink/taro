(window.webpackJsonp=window.webpackJsonp||[]).push([[1417],{1472:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),c=(n(0),n(1723)),b=n(1727),l=n(1728),i={title:"View",sidebar_label:"View"},o={unversionedId:"components/viewContainer/view",id:"version-3.0.14/components/viewContainer/view",isDocsHomePage:!1,title:"View",description:"\u89c6\u56fe\u5bb9\u5668",source:"@site/versioned_docs/version-3.0.14/components/viewContainer/view.md",slug:"/components/viewContainer/view",permalink:"/taro/docs/components/viewContainer/view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/components/viewContainer/view.md",version:"3.0.14",sidebar_label:"View",sidebar:"version-3.0.14/components",previous:{title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",permalink:"/taro/docs/components-desc"},next:{title:"ScrollView",permalink:"/taro/docs/components/viewContainer/scroll-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"ViewProps",id:"viewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:O};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u89c6\u56fe\u5bb9\u5668"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ViewProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"\nexport default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>flex-direction: row \u6a2a\u5411\u5e03\u5c40</Text>\n        <View className='flex-wrp' style='flex-direction:row;'>\n          <View className='flex-item demo-text-1'/>\n          <View className='flex-item demo-text-2'/>\n          <View className='flex-item demo-text-3'/>\n        </View>\n        <Text>flex-direction: column \u7eb5\u5411\u5e03\u5c40</Text>\n        <View className='flex-wrp' style='flex-direction:column;'>\n          <View className='flex-item flex-item-V demo-text-1'/>\n          <View className='flex-item flex-item-V demo-text-2'/>\n          <View className='flex-item flex-item-V demo-text-3'/>\n        </View>\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>flex-direction: row \u6a2a\u5411\u5e03\u5c40</text>\n    <view class="flex-wrp flex-wrp-row" hoverClass="hover" >\n      <view class="flex-item demo-text-1" hoverStopPropagation="true" />\n      <view class="flex-item demo-text-2" hoverStartTime="1000" hoverClass="hover" />\n      <view class="flex-item demo-text-3" hoverStayTime="1000" hoverClass="hover" />\n    </view>\n    <text>flex-direction: column \u7eb5\u5411\u5e03\u5c40</text>\n    <view class="flex-wrp flex-wrp-column">\n      <view class="flex-item flex-item-V demo-text-1" />\n      <view class="flex-item flex-item-V demo-text-2" />\n      <view class="flex-item flex-item-V demo-text-3" />\n    </view>\n  </view>\n</template>\n\n<style>\n.flex-wrp { display: flex; }\n.flex-wrp-column{ flex-direction: column; }\n.flex-wrp-row { flex-direction:row; padding: 20px; background: #f1f1f1; }\n.flex-item { width: 180px; height: 90px; }\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n.hover {\n  background: #000;\n}\n</style>\n')))),Object(c.b)("h2",{id:"viewprops"},"ViewProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"hoverClass"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"none")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u7c7b\u3002\u5f53 ",Object(c.b)("code",null,'hover-class="none"')," \u65f6\uff0c\u6ca1\u6709\u70b9\u51fb\u6001\u6548\u679c")),Object(c.b)("tr",null,Object(c.b)("td",null,"hoverStyle"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"none")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7531\u4e8e RN \u4e0d\u652f\u6301 Class\uff0c\u6545 RN \u7aef\u7684 View \u7ec4\u4ef6\u5b9e\u73b0\u4e86 ",Object(c.b)("code",null,"hoverStyle"),"\u5c5e\u6027\uff0c\u5199\u6cd5\u548c style \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",Object(c.b)("code",null,"hoverStyle")," \u7684\u6837\u5f0f\u662f\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"hoverStopPropagation"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"fasle")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u662f\u5426\u963b\u6b62\u672c\u8282\u70b9\u7684\u7956\u5148\u8282\u70b9\u51fa\u73b0\u70b9\u51fb\u6001")),Object(c.b)("tr",null,Object(c.b)("td",null,"hoverStartTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"50")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6309\u4f4f\u540e\u591a\u4e45\u51fa\u73b0\u70b9\u51fb\u6001\uff0c\u5355\u4f4d\u6beb\u79d2")),Object(c.b)("tr",null,Object(c.b)("td",null,"hoverStayTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"400")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u677e\u5f00\u540e\u70b9\u51fb\u6001\u4fdd\u7559\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ViewProps.hoverClass"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"(\u7531\u4e8e RN \u4e0d\u652f\u6301 Class\uff0c\u6545 RN \u7aef\u7684 View \u7ec4\u4ef6\u5b9e\u73b0\u4e86 ",Object(c.b)("inlineCode",{parentName:"td"},"hoverStyle"),"\u5c5e\u6027\uff0c\u5199\u6cd5\u548c style \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",Object(c.b)("inlineCode",{parentName:"td"},"hoverStyle")," \u7684\u6837\u5f0f\u662f\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u3002)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ViewProps.hoverStyle"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ViewProps.hoverStopPropagation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ViewProps.hoverStartTime"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ViewProps.hoverStayTime"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"View"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0},1723:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),O=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=O(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=O(n),j=r,u=s["".concat(b,".").concat(j)]||s[j]||d[j]||c;return n?a.a.createElement(u,l(l({ref:t},o),{},{components:n})):a.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},1724:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1725:function(e,t,n){"use strict";var r=n(0),a=n(1726);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1726:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1727:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1725),b=n(1724),l=n(47),i=n.n(l),o=37,O=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,s=e.values,d=e.groupId,j=e.className,u=Object(c.a)(),m=u.tabGroupChoices,p=u.setTabGroupChoices,f=Object(r.useState)(l),v=f[0],g=f[1],w=Object(r.useState)(!1),N=w[0],x=w[1];if(null!=d){var h=m[d];null!=h&&h!==v&&s.some((function(e){return e.value===h}))&&g(h)}var y=function(e){g(e),null!=d&&p(d,e)},V=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},C=function(){x(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",C)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},j)},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(b.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return V.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case O:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(V,e.target,e),P(e)},onFocus:function(){return y(t)},onClick:function(){y(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},1728:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);