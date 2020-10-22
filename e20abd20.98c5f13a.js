(window.webpackJsonp=window.webpackJsonp||[]).push([[1477],{1532:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var b=n(2),a=n(6),c=(n(0),n(1723)),r=n(1727),l=n(1728),i={title:"Image",sidebar_label:"Image"},O={unversionedId:"components/media/image",id:"components/media/image",isDocsHomePage:!1,title:"Image",description:"\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001SVG\u3001WEBP\u3001GIF \u7b49\u683c\u5f0f\u4ee5\u53ca\u4e91\u6587\u4ef6ID\u3002",source:"@site/docs/components/media/image.md",slug:"/components/media/image",permalink:"/taro/docs/next/components/media/image",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/media/image.md",version:"current",sidebar_label:"Image",sidebar:"components",previous:{title:"Audio",permalink:"/taro/docs/next/components/media/audio"},next:{title:"LivePlayer",permalink:"/taro/docs/next/components/media/live-player"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"ImageProps",id:"imageprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"mode",id:"mode",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onLoadEventDetail",id:"onloadeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001SVG\u3001WEBP\u3001GIF \u7b49\u683c\u5f0f\u4ee5\u53ca\u4e91\u6587\u4ef6ID\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," \u4e3a\u5b9e\u73b0\u5c0f\u7a0b\u5e8f\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"mode")," \u7279\u6027\uff0c\u5728 H5 \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"div")," \u5bb9\u5668\u6765\u5bf9\u5185\u90e8\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"img")," \u8fdb\u884c\u5c55\u793a\u533a\u57df\u7684\u88c1\u526a\uff0c\u56e0\u6b64\u8bf7\u52ff\u4f7f\u7528\u5143\u7d20\u9009\u62e9\u5668\u6765\u91cd\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"img")," \u7684\u6837\u5f0f\uff01"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ImageProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(r.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='nerv_logo.png'\n        />\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'\n        />\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="nerv_logo.png"\n    />\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"\n    />\n  </view>\n</template>\n')))),Object(c.b)("h2",{id:"imageprops"},"ImageProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u56fe\u7247\u8d44\u6e90\u5730\u5740")),Object(c.b)("tr",null,Object(c.b)("td",null,"mode"),Object(c.b)("td",null,Object(c.b)("code",null,'"scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"scaleToFill"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u88c1\u526a\u3001\u7f29\u653e\u7684\u6a21\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"webp"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9ed8\u8ba4\u4e0d\u89e3\u6790 webP \u683c\u5f0f\uff0c\u53ea\u652f\u6301\u7f51\u7edc\u8d44\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"lazyLoad"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u61d2\u52a0\u8f7d\u3002\u53ea\u9488\u5bf9 page \u4e0e scroll-view \u4e0b\u7684 image \u6709\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"showMenuByLongpress"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f00\u542f\u957f\u6309\u56fe\u7247\u663e\u793a\u8bc6\u522b\u5c0f\u7a0b\u5e8f\u7801\u83dc\u5355")),Object(c.b)("tr",null,Object(c.b)("td",null,"onError"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u9519\u8bef\u53d1\u751f\u65f6\uff0c\u53d1\u5e03\u5230 AppService \u7684\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u5bf9\u8c61")),Object(c.b)("tr",null,Object(c.b)("td",null,"onLoad"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u56fe\u7247\u8f7d\u5165\u5b8c\u6bd5\u65f6\uff0c\u53d1\u5e03\u5230 AppService \u7684\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u5bf9\u8c61")),Object(c.b)("tr",null,Object(c.b)("td",null,"imgProps"),Object(c.b)("td",null,Object(c.b)("code",null,"ImgHTMLAttributes<HTMLImageElement>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4e3a img \u6807\u7b7e\u989d\u5916\u589e\u52a0\u7684\u5c5e\u6027")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.src"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.mode"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u652f\u6301 scaleToFill, aspectFit, aspectFill, widthFix)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.webp"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.lazyLoad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.showMenuByLongpress"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.onError"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.onLoad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"ImageProps.imgProps"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"mode"},"mode"),Object(c.b)("p",null,"mode \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"scaleToFill"),Object(c.b)("td",null,"\u7f29\u653e\u6a21\u5f0f\uff0c\u4e0d\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u4f7f\u56fe\u7247\u7684\u5bbd\u9ad8\u5b8c\u5168\u62c9\u4f38\u81f3\u586b\u6ee1 image \u5143\u7d20")),Object(c.b)("tr",null,Object(c.b)("td",null,"aspectFit"),Object(c.b)("td",null,"\u7f29\u653e\u6a21\u5f0f\uff0c\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u4f7f\u56fe\u7247\u7684\u957f\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ef\u4ee5\u5b8c\u6574\u5730\u5c06\u56fe\u7247\u663e\u793a\u51fa\u6765\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"aspectFill"),Object(c.b)("td",null,"\u7f29\u653e\u6a21\u5f0f\uff0c\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u4fdd\u8bc1\u56fe\u7247\u7684\u77ed\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u56fe\u7247\u901a\u5e38\u53ea\u5728\u6c34\u5e73\u6216\u5782\u76f4\u65b9\u5411\u662f\u5b8c\u6574\u7684\uff0c\u53e6\u4e00\u4e2a\u65b9\u5411\u5c06\u4f1a\u53d1\u751f\u622a\u53d6\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"widthFix"),Object(c.b)("td",null,"\u7f29\u653e\u6a21\u5f0f\uff0c\u5bbd\u5ea6\u4e0d\u53d8\uff0c\u9ad8\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8")),Object(c.b)("tr",null,Object(c.b)("td",null,"heightFix"),Object(c.b)("td",null,"\u7f29\u653e\u6a21\u5f0f\uff0c\u9ad8\u5ea6\u4e0d\u53d8\uff0c\u5bbd\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8")),Object(c.b)("tr",null,Object(c.b)("td",null,"top"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u9876\u90e8\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"bottom"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5e95\u90e8\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"center"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u4e2d\u95f4\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"left"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u8fb9\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"right"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u8fb9\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"top left"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u4e0a\u8fb9\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"top right"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u4e0a\u8fb9\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"bottom left"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u4e0b\u8fb9\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"bottom right"),Object(c.b)("td",null,"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u4e0b\u8fb9\u533a\u57df")))),Object(c.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(c.b)("h3",{id:"onloadeventdetail"},"onLoadEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",null,"\u56fe\u7247\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",null,"\u56fe\u7247\u5bbd\u5ea6")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Image"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0},1723:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p}));var b=n(0),a=n.n(b);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,b,a=function(e,t){if(null==e)return{};var n,b,a={},c=Object.keys(e);for(b=0;b<c.length;b++)n=c[b],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)n=c[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=a.a.createContext({}),o=function(e){var t=a.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},j=function(e){var t=o(e.components);return a.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),j=o(n),u=b,p=j["".concat(r,".").concat(u)]||j[u]||d[u]||c;return n?a.a.createElement(p,l(l({ref:t},O),{},{components:n})):a.a.createElement(p,l({ref:t},O))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=n.length,r=new Array(c);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,r[1]=l;for(var O=2;O<c;O++)r[O]=n[O];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1724:function(e,t,n){"use strict";function b(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(a&&(a+=" "),a+=t);return a}},1725:function(e,t,n){"use strict";var b=n(0),a=n(1726);t.a=function(){var e=Object(b.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1726:function(e,t,n){"use strict";var b=n(0),a=Object(b.createContext)(void 0);t.a=a},1727:function(e,t,n){"use strict";var b=n(0),a=n.n(b),c=n(1725),r=n(1724),l=n(47),i=n.n(l),O=37,o=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,j=e.values,d=e.groupId,u=e.className,p=Object(c.a)(),m=p.tabGroupChoices,s=p.setTabGroupChoices,g=Object(b.useState)(l),f=g[0],N=g[1],h=Object(b.useState)(!1),y=h[0],v=h[1];if(null!=d){var x=m[d];null!=x&&x!==f&&j.some((function(e){return e.value===x}))&&N(x)}var w=function(e){N(e),null!=d&&s(d,e)},P=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},I=function(){v(!1)};return Object(b.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",I)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},u)},j.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case o:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case O:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},b.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},1728:function(e,t,n){"use strict";var b=n(0),a=n.n(b);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);