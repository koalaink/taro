(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1723:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=d(n),u=r,s=O["".concat(b,".").concat(u)]||O[u]||j[u]||c;return n?a.a.createElement(s,l(l({ref:t},i),{},{components:n})):a.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1724:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1725:function(e,t,n){"use strict";var r=n(0),a=n(1726);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1726:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1727:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1725),b=n(1724),l=n(47),o=n.n(l),i=37,d=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,O=e.values,j=e.groupId,u=e.className,s=Object(c.a)(),p=s.tabGroupChoices,m=s.setTabGroupChoices,g=Object(r.useState)(l),f=g[0],y=g[1],h=Object(r.useState)(!1),v=h[0],N=h[1];if(null!=j){var x=p[j];null!=x&&x!==f&&O.some((function(e){return e.value===x}))&&y(x)}var E=function(e){y(e),null!=j&&m(j,e)},w=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},A=function(){N(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",A),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",A)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},u)},O.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),P(e)},onFocus:function(){return E(t)},onClick:function(){E(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},1728:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},585:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return j}));var r=n(2),a=n(6),c=(n(0),n(1723)),b=n(1727),l=n(1728),o={title:"Editor",sidebar_label:"Editor"},i={unversionedId:"components/forms/editor",id:"version-3.0.14/components/forms/editor",isDocsHomePage:!1,title:"Editor",description:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002",source:"@site/versioned_docs/version-3.0.14/components/forms/editor.md",slug:"/components/forms/editor",permalink:"/taro/docs/components/forms/editor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/components/forms/editor.md",version:"3.0.14",sidebar_label:"Editor",sidebar:"version-3.0.14/components",previous:{title:"Checkbox",permalink:"/taro/docs/components/forms/checkbox"},next:{title:"Form",permalink:"/taro/docs/components/forms/form"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"EditorProps",id:"editorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"editorEventDetail",id:"editoreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:d};function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002"),Object(c.b)("p",null,"\u7f16\u8f91\u5668\u5bfc\u51fa\u5185\u5bb9\u652f\u6301\u5e26\u6807\u7b7e\u7684 html\u548c\u7eaf\u6587\u672c\u7684 text\uff0c\u7f16\u8f91\u5668\u5185\u90e8\u91c7\u7528 delta \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),Object(c.b)("p",null,"\u901a\u8fc7 setContents \u63a5\u53e3\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u89e3\u6790\u63d2\u5165\u7684 html \u53ef\u80fd\u4f1a\u7531\u4e8e\u4e00\u4e9b\u975e\u6cd5\u6807\u7b7e\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u5185\u4f7f\u7528\u65f6\u901a\u8fc7 delta \u8fdb\u884c\u63d2\u5165\u3002"),Object(c.b)("p",null,"\u5bcc\u6587\u672c\u7ec4\u4ef6\u5185\u90e8\u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6837\u5f0f\u4f7f\u5f97\u5185\u5bb9\u53ef\u4ee5\u6b63\u786e\u7684\u5c55\u793a\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u8fdb\u884c\u8986\u76d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5176\u5b83\u7ec4\u4ef6\u6216\u73af\u5883\u4e2d\u4f7f\u7528\u5bcc\u6587\u672c\u7ec4\u4ef6\u5bfc\u51fa\u7684 html \u65f6\uff0c\u9700\u8981\u989d\u5916\u5f15\u5165 \u8fd9\u6bb5\u6837\u5f0f\uff0c\u5e76\u7ef4\u62a4 ",Object(c.b)("inlineCode",{parentName:"p"},"<ql-container><ql-editor></ql-editor></ql-container>")," \u7684\u7ed3\u6784\u3002"),Object(c.b)("p",null,"\u56fe\u7247\u63a7\u4ef6\u4ec5\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u6709\u6548\u3002"),Object(c.b)("p",null,"*\u7f16\u8f91\u5668\u5185\u652f\u6301\u90e8\u5206 HTML \u6807\u7b7e\u548c\u5185\u8054\u6837\u5f0f\uff0c\u4e0d\u652f\u6301 ",Object(c.b)("strong",{parentName:"p"},"class")," \u548c ",Object(c.b)("strong",{parentName:"p"},"id*")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<EditorProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    placeholder: '\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...'\n  }\n\n  editorReady = e => {\n    Taro.createSelectorQuery().select('#editor').context((res) => {\n      this.editorCtx = res.context\n    }).exec()\n  }\n\n  undo = e => {\n    this.editorCtx.undo()\n  }\n\n  render () {\n    return (\n      <View>\n        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>\n        <Button type='warn' onClick={this.undo}>\u64a4\u9500</Button>\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>\n    <button type="warn" @tap="undo">\u64a4\u9500</button>\n  </view>\n</template>\n\n<script>\n  import Taro from \'@tarojs/taro\'\n  export default {\n    data() {\n      return {\n        placeholder: \'\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...\'\n      }\n    },\n    methods: {\n      editorReady() {\n        Taro.createSelectorQuery().select(\'#editor\').context((res) => {\n          this.editorCtx = res.context\n        }).exec()\n      },\n      undo() {\n        this.editorCtx.undo()\n      }\n    }\n  }\n<\/script>\n')))),Object(c.b)("h2",{id:"editorprops"},"EditorProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"readOnly"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u7f16\u8f91\u5668\u4e3a\u53ea\u8bfb")),Object(c.b)("tr",null,Object(c.b)("td",null,"placeholder"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63d0\u793a\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"showImgSize"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u56fe\u7247\u5927\u5c0f\u63a7\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"showImgToolbar"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u5de5\u5177\u680f\u63a7\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"showImgResize"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u4fee\u6539\u5c3a\u5bf8\u63a7\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onReady"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f16\u8f91\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onFocus"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f16\u8f91\u5668\u805a\u7126\u65f6\u89e6\u53d1",Object(c.b)("br",null),"event.detail = ","{ html, text, delta }")),Object(c.b)("tr",null,Object(c.b)("td",null,"onBlur"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",Object(c.b)("br",null),"detail = ","{ html, text, delta }")),Object(c.b)("tr",null,Object(c.b)("td",null,"onInput"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f16\u8f91\u5668\u5185\u5bb9\u6539\u53d8\u65f6\u89e6\u53d1",Object(c.b)("br",null),"detail = ","{ html, text, delta }")),Object(c.b)("tr",null,Object(c.b)("td",null,"onStatuschange"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u901a\u8fc7 Context \u65b9\u6cd5\u6539\u53d8\u7f16\u8f91\u5668\u5185\u6837\u5f0f\u65f6\u89e6\u53d1\uff0c\u8fd4\u56de\u9009\u533a\u5df2\u8bbe\u7f6e\u7684\u6837\u5f0f")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.readOnly"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.placeholder"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgSize"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgToolbar"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgResize"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.onReady"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.onFocus"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.onBlur"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.onInput"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"EditorProps.onStatuschange"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"editoreventdetail"},"editorEventDetail"),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Editor"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);