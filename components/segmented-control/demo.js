webpackJsonp([39],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},20:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),o=p(e),c=s(3),l=p(c),u=s(5),i=p(u),k=s(4),r=p(k),d=s(1),g=t(d),f=s(2),m=p(f),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,e=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,o["default"])(n,""+s,!0),(0,o["default"])(n,s+"-"+t,!0),(0,o["default"])(n,p,!!p),n));return g.createElement("div",{className:l,style:e,onClick:c})},a}(g.Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,s){"use strict";s(8),s(48)},48:function(n,a){},758:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(21),s(20)),e=t(p),o=(s(834),s(833)),c=t(o),l=s(1),u=t(l),i=s(7);t(i);n.exports={content:[],meta:{order:0,title:"\u5206\u6bb5\u63a7\u5236",filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> SegmentedControl<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> SegmentedControlExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selectedIndex:</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>e<span class="token punctuation" >.</span>nativeEvent<span class="token punctuation" >.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onValueChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7981\u7528<span class="token operator" >/</span>enabled<span class="token operator" >=</span><span class="token boolean" >false</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >enabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8bbe\u7f6e tintColor<span class="token operator" >/</span>style <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >tintColor</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'#ff0000\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token string" >\'0.8rem\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token string" >\'5rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d selectedIndex <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >selectedIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4e8b\u4ef6 onChange<span class="token operator" >/</span>onValueChange <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onValueChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onValueChange<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControlExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"SegmentedControlExample",onChange:function(n){console.log("selectedIndex:"+n.nativeEvent.selectedSegmentIndex)},onValueChange:function(n){console.log(n)},render:function(){return u["default"].createElement("div",null,u["default"].createElement("div",{style:{padding:16}},"\u7981\u7528/enabled=false"),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"],enabled:!1}),u["default"].createElement(e["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u8bbe\u7f6e tintColor/style "),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],tintColor:"#ff0000",style:{height:"0.8rem",width:"5rem"}}),u["default"].createElement(e["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d selectedIndex "),u["default"].createElement(c["default"],{selectedIndex:1,values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"]}),u["default"].createElement(e["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u4e8b\u4ef6 onChange/onValueChange "),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],onChange:this.onChange,onValueChange:this.onValueChange}))}});return u["default"].createElement(n,null)}}},833:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),o=p(e),c=s(3),l=p(c),u=s(5),i=p(u),k=s(4),r=p(k),d=s(1),g=t(d),f=s(2),m=p(f),v=s(18),h=p(v),C=function(n){function a(s){(0,l["default"])(this,a);var t=(0,i["default"])(this,n.call(this,s));return t.state={selectedIndex:s.selectedIndex},t}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){n.selectedIndex!==this.props.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})},a.prototype.onClick=function(n,a,s){var t=this.props,p=t.enabled,e=t.onChange,o=t.onValueChange;p&&(n.nativeEvent.selectedSegmentIndex=a,n.nativeEvent.value=s,e(n),o(s),this.setState({selectedIndex:a}))},a.prototype.render=function(){var n,a=this,s=this.props,t=s.prefixCls,p=s.style,e=s.enabled,c=s.values,l=s.className,u=s.tintColor,i=(0,m["default"])((n={},(0,o["default"])(n,l,!!l),(0,o["default"])(n,""+t,!0),(0,o["default"])(n,l,l),n)),k=this.state.selectedIndex,r=c.map(function(n,s){var p,e=(0,m["default"])((p={},(0,o["default"])(p,t+"-item",!0),(0,o["default"])(p,t+"-item-selected",s===k),p));return g.createElement("div",{className:e,key:s,onClick:function(t){return a.onClick(t,s,n)},style:{color:s===k?"#fff":u,backgroundColor:s===k?u:"#fff",borderColor:u}},n)}),d=e?1:.5,f=(0,h["default"])({},p,{opacity:d,borderColor:u});return g.createElement("div",{className:i,style:f},r)},a}(g.Component);a["default"]=C,C.defaultProps={prefixCls:"am-segment",selectedIndex:0,enabled:!0,values:[],onChange:function(){},onValueChange:function(){},tintColor:"#2DB7F5",style:{}},n.exports=a["default"]},834:function(n,a,s){"use strict";s(8),s(1149)},899:function(n,a,s){n.exports={basic:s(758)}},1149:function(n,a){}});