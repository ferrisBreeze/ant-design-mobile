webpackJsonp([30],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},26:function(n,a,s){"use strict";s(40)},40:function(n,a){},236:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(6),o=e(p),c=s(3),u=e(c),l=s(5),i=e(l),r=s(4),k=e(r),d=s(1),f=t(d),b=s(2),m=e(b),y=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,e=s.prefixCls,p=s.overflowCount,c=s.className,u=s.style,l=s.children,i=this.props.dot,r=this.props.size,k=this.props.corner;t=t>p?p+"+":t,i&&(t="");var d=!(t&&"0"!==t||i),b=(0,m["default"])((n={},(0,o["default"])(n,e+"-dot",i),(0,o["default"])(n,e+"-dot-large",i&&"large"===r),(0,o["default"])(n,e+"-text",!i&&!k),(0,o["default"])(n,e+"-corner",k),(0,o["default"])(n,e+"-corner-large",k&&"large"===r),n)),y=(0,m["default"])((a={},(0,o["default"])(a,c,!!c),(0,o["default"])(a,e,!0),(0,o["default"])(a,e+"-not-a-wrapper",!l),(0,o["default"])(a,e+"-corner-wrapper",k),(0,o["default"])(a,e+"-corner-wrapper-large",k&&"large"===r),a));return f.createElement("span",{className:y,title:t},l,!d&&f.createElement("sup",{className:b,style:u},t))},a}(f.Component);a["default"]=y,y.propTypes={prefixCls:d.PropTypes.string,text:d.PropTypes.oneOfType([d.PropTypes.string,d.PropTypes.number]),dot:d.PropTypes.bool,corner:d.PropTypes.bool,overflowCount:d.PropTypes.number,size:d.PropTypes.string},y.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},237:function(n,a,s){"use strict";s(8),s(26),s(399)},276:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(6),p=t(e),o=s(1),c=t(o),u=s(2),l=t(u),i=c["default"].createClass({displayName:"TabPane",propTypes:{active:o.PropTypes.bool,destroyInactiveTabPane:o.PropTypes.bool,placeholder:o.PropTypes.node},getDefaultProps:function(){return{placeholder:null}},render:function(){var n,a=this.props,s=a.destroyInactiveTabPane,t=a.active;this._isActived=this._isActived||t;var e=a.rootPrefixCls+"-tabpane",o=(0,l["default"])((n={},(0,p["default"])(n,e+"-inactive",!t),(0,p["default"])(n,e+"-active",t),(0,p["default"])(n,e,1),n)),u=s?t:this._isActived;return c["default"].createElement("div",{role:"tabpanel","aria-hidden":a.active?"false":"true",className:o},u?a.children:a.placeholder)}});a["default"]=i,n.exports=a["default"]},277:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(Array.isArray(n))return n;var a=[];return b["default"].Children.forEach(n,function(n){return a.push(n)}),a}function p(n,a){for(var s=e(n),t=0;t<s.length;t++)if(s[t].key===a)return t;return-1}function o(n,a){var s=e(n);return s[a].key}function c(n,a){n.transform=a,n.webkitTransform=a,n.mozTransform=a}function u(n){return"transition"in n||"webkitTransition"in n||"MozTransition"in n}function l(n){return"transform"in n||"webkitTransform"in n||"MozTransform"in n}function i(n,a){n.transition=a,n.webkitTransition=a,n.MozTransition=a}function r(n){return{transform:n,WebkitTransform:n,MozTransform:n}}function k(n){return"left"===n||"right"===n}function d(n,a){var s=k(a)?"translateY":"translateX";return s+"("+100*-n+"%) translateZ(0)"}Object.defineProperty(a,"__esModule",{value:!0}),a.toArray=e,a.getActiveIndex=p,a.getActiveKey=o,a.setTransform=c,a.isTransitionSupported=u,a.isTransformSupported=l,a.setTransition=i,a.getTransformPropValue=r,a.isVertical=k,a.getTransformByIndex=d;var f=s(1),b=t(f)},312:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){if(!m&&void 0!==("undefined"==typeof window?"undefined":(0,i["default"])(window))&&window.document&&window.document.documentElement){var n=window.document.documentElement,a="no-csstransitions";(0,b.isTransitionSupported)(n.style)||n.className.indexOf(a)!==-1||(n.className+=" "+a),m=!0}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(9),o=t(p),c=s(6),u=t(c),l=s(146),i=t(l),r=s(1),k=t(r),d=s(2),f=t(d),b=s(277),m=void 0;e();var y=k["default"].createClass({displayName:"TabContent",propTypes:{animated:r.PropTypes.bool,prefixCls:r.PropTypes.string,children:r.PropTypes.any,activeKey:r.PropTypes.string,style:r.PropTypes.any,tabBarPosition:r.PropTypes.string},getDefaultProps:function(){return{animated:!0}},componentDidMount:function(){e()},getTabPanes:function(){var n=this.props,a=n.activeKey,s=n.children,t=[];return k["default"].Children.forEach(s,function(s){var e=s.key,p=a===e;t.push(k["default"].cloneElement(s,{active:p,destroyInactiveTabPane:n.destroyInactiveTabPane,rootPrefixCls:n.prefixCls}))}),t},render:function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.activeKey,p=a.tabBarPosition,c=a.animated,l=a.style,i=(0,f["default"])((n={},(0,u["default"])(n,s+"-content",!0),(0,u["default"])(n,c?s+"-content-animated":s+"-content-no-animated",!0),n));if(c){var r=(0,b.getActiveIndex)(t,e);l=r!==-1?(0,o["default"])({},l,(0,b.getTransformPropValue)((0,b.getTransformByIndex)(r,p))):(0,o["default"])({},l,{display:"none"})}return k["default"].createElement("div",{className:i,style:l},this.getTabPanes())}});a["default"]=y,n.exports=a["default"]},399:function(n,a){},435:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={LEFT:37,UP:38,RIGHT:39,DOWN:40},n.exports=a["default"]},436:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(9),p=t(e),o=s(1),c=t(o),u={"float":"right"};a["default"]={getDefaultProps:function(){return{styles:{}}},onTabClick:function(n){this.props.onTabClick(n)},getTabs:function(){var n=this,a=this.props,s=a.panels,t=a.activeKey,e=[],o=a.prefixCls;return c["default"].Children.forEach(s,function(a){var s=a.key,u=t===s?o+"-tab-active":"";u+=" "+o+"-tab";var l={};a.props.disabled?u+=" "+o+"-tab-disabled":l={onClick:n.onTabClick.bind(n,s)};var i={};t===s&&(i.ref="activeTab"),e.push(c["default"].createElement("div",(0,p["default"])({role:"tab","aria-disabled":a.props.disabled?"true":"false","aria-selected":t===s?"true":"false"},l,{className:u,key:s},i),a.props.tab))}),e},getRootNode:function(n){var a=this.props,s=a.prefixCls,t=a.onKeyDown,e=a.extraContent,p=a.style;return c["default"].createElement("div",{role:"tablist",className:s+"-bar",tabIndex:"0",ref:"root",onKeyDown:t,style:p},e?c["default"].createElement("div",{style:u,key:"extra"},e):null,n)}},n.exports=a["default"]},437:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){var a=void 0;return l["default"].Children.forEach(n.children,function(n){a||n.props.disabled||(a=n.key)}),a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(6),c=t(o),u=s(1),l=t(u),i=s(435),r=t(i),k=s(276),d=t(k),f=s(2),b=t(f),m=l["default"].createClass({displayName:"Tabs",propTypes:{destroyInactiveTabPane:u.PropTypes.bool,renderTabBar:u.PropTypes.func.isRequired,renderTabContent:u.PropTypes.func.isRequired,onChange:u.PropTypes.func,children:u.PropTypes.any,prefixCls:u.PropTypes.string,className:u.PropTypes.string,tabBarPosition:u.PropTypes.string,style:u.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-tabs",destroyInactiveTabPane:!1,onChange:e,tabBarPosition:"top",style:{}}},getInitialState:function(){var n=this.props,a=void 0;return a="activeKey"in n?n.activeKey:"defaultActiveKey"in n?n.defaultActiveKey:p(n),{activeKey:a}},componentWillReceiveProps:function(n){"activeKey"in n&&this.setState({activeKey:n.activeKey})},onTabClick:function(n){this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(n),this.setActiveKey(n)},onNavKeyDown:function(n){var a=n.keyCode;if(a===r["default"].RIGHT||a===r["default"].DOWN){n.preventDefault();var s=this.getNextActiveKey(!0);this.onTabClick(s)}else if(a===r["default"].LEFT||a===r["default"].UP){n.preventDefault();var t=this.getNextActiveKey(!1);this.onTabClick(t)}},setActiveKey:function(n){this.state.activeKey!==n&&("activeKey"in this.props||this.setState({activeKey:n}),this.props.onChange(n))},getNextActiveKey:function(n){var a=this.state.activeKey,s=[];l["default"].Children.forEach(this.props.children,function(a){a.props.disabled||(n?s.push(a):s.unshift(a))});var t=s.length,e=t&&s[0].key;return s.forEach(function(n,p){n.key===a&&(e=p===t-1?s[0].key:s[p+1].key)}),e},render:function(){var n,a=this.props,s=a.prefixCls,t=a.tabBarPosition,e=a.className,p=a.renderTabContent,o=a.renderTabBar,u=(0,b["default"])((n={},(0,c["default"])(n,s,1),(0,c["default"])(n,s+"-"+t,1),(0,c["default"])(n,e,!!e),n));this.tabBar=o();var i=[l["default"].cloneElement(this.tabBar,{prefixCls:s,key:"tabBar",onKeyDown:this.onNavKeyDown,tabBarPosition:t,onTabClick:this.onTabClick,panels:a.children,activeKey:this.state.activeKey}),l["default"].cloneElement(p(),{prefixCls:s,tabBarPosition:t,activeKey:this.state.activeKey,destroyInactiveTabPane:a.destroyInactiveTabPane,children:a.children,onChange:this.setActiveKey,key:"tabContent"})];return"bottom"===t&&i.reverse(),l["default"].createElement("div",{className:u,style:a.style},i)}});m.TabPane=d["default"],a["default"]=m,n.exports=a["default"]},438:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a.TabPane=a["default"]=void 0;var e=s(437),p=t(e),o=s(276),c=t(o);a["default"]=p["default"],a.TabPane=c["default"]},774:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(839),s(838)),p=t(e),o=s(1),c=t(o),u=s(7);t(u);n.exports={content:[["p","\u591a\u7528\u4e8e\u9875\u9762\u7684\u5185\u5bb9\u533a\u5757\uff0c\u8d77\u7740\u63a7\u5236\u5c0f\u8303\u56f4\u5185\u7684\u5927\u5757\u5185\u5bb9\u7684\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u8d77\u7740\u4fdd\u6301\u754c\u9762\u6574\u6d01\u7684\u4f5c\u7528\u3002"]],meta:{order:0,title:"APP\u578b\u9009\u9879\u5361",filename:"components/tab-bar/demo/basic.md",id:"components-tab-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TabBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> TabBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >,</span>\n      notifCount<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n      presses<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >renderContent</span><span class="token punctuation" >(</span>pageText<span class="token punctuation" >,</span> num<span class="token operator" >?</span><span class="token punctuation" >:</span> number<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'white\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> paddingTop<span class="token punctuation" >:</span> <span class="token number" >30</span><span class="token punctuation" >,</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >50</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>pageText<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token number" >50</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>num<span class="token punctuation" >}</span> re<span class="token operator" >-</span>renders <span class="token keyword" >of</span> the <span class="token punctuation" >{</span>pageText<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar</span>\n        <span class="token attr-name" >unselectedTintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#949494<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >tintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#33A3F4<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >barTintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>white<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u751f\u6d3b<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u751f\u6d3b<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'blueTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'blueTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u751f\u6d3b Tab\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53e3\u7891<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53e3\u7891<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >badge={this.state.notifCount</span> <span class="token punctuation" >></span></span> <span class="token number" >0</span> <span class="token operator" >?</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>notifCount <span class="token punctuation" >:</span> undefined<span class="token punctuation" >}</span>\n          selected<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >}</span>\n          onPress<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >,</span>\n              notifCount<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>notifCount <span class="token operator" >+</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u53e3\u7891 Tab\'</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>notifCount<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u670b\u53cb<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u670b\u53cb<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'greenTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'greenTab\'</span><span class="token punctuation" >,</span>\n              presses<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>presses <span class="token operator" >+</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u670b\u53cb Tab\'</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>presses<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u7684<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u7684<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'yellowTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'yellowTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u6211\u7684 Tab\'</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>presses<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=c["default"].createClass({displayName:"TabBarExample",getInitialState:function(){return{selectedTab:"redTab",notifCount:0,presses:0}},renderContent:function(n,a){return c["default"].createElement("div",{style:{backgroundColor:"white",height:"100%"}},c["default"].createElement("div",{style:{paddingTop:30,marginLeft:50}},n),c["default"].createElement("div",{style:{margin:50}},a," re-renders of the ",n))},render:function(){var n=this;return c["default"].createElement(p["default"],{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},c["default"].createElement(p["default"].Item,{title:"\u751f\u6d3b",key:"\u751f\u6d3b",icon:{uri:"https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png"},selected:"blueTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"blueTab"})}},this.renderContent("\u751f\u6d3b Tab")),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png"},title:"\u53e3\u7891",key:"\u53e3\u7891",badge:this.state.notifCount>0?this.state.notifCount:void 0,selected:"redTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"redTab",notifCount:n.state.notifCount+1})}},this.renderContent("\u53e3\u7891 Tab",this.state.notifCount)),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png"},title:"\u670b\u53cb",key:"\u670b\u53cb",selected:"greenTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"greenTab",presses:n.state.presses+1})}},this.renderContent("\u670b\u53cb Tab",this.state.presses)),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png"},title:"\u6211\u7684",key:"\u6211\u7684",selected:"yellowTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"yellowTab"})}},this.renderContent("\u6211\u7684 Tab",this.state.presses)))}});return c["default"].createElement(n,null)},style:".demo-preview-item,\n.am-tab-bar,\n.am-tab-bar-content,\n.am-tab-bar-tabpane {\n  height: 100%;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.demo-preview-item</span>,\n<span class="token class" >.am-tab-bar</span>,\n<span class="token class" >.am-tab-bar-content</span>,\n<span class="token class" >.am-tab-bar-tabpane</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >100%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},837:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(3),o=e(p),c=s(5),u=e(c),l=s(4),i=e(l),r=s(1),k=t(r),d=s(236),f=e(d),b=function(n){function a(){return(0,o["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,i["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.title,s=n.icon,t=n.selectedIcon,e=n.prefixCls,p=n.badge,o=n.selected,c=n.unselectedTintColor,u=n.tintColor;return k.createElement("div",null,k.createElement("div",{className:e+"-icon"},p?k.createElement(f["default"],{text:p,className:e+"-badge"},k.createElement("img",{className:e+"-image",src:o?t.uri:s.uri,alt:a})):k.createElement("img",{className:e+"-image",src:o?t.uri:s.uri,alt:a})),k.createElement("p",{className:e+"-title",style:{color:o?u:c}},a))},a}(k.Component);a["default"]=b,n.exports=a["default"]},838:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}Object.defineProperty(a,"__esModule",{value:!0});var p=s(1),o=e(p),c=s(438),u=t(c),l=s(837),i=t(l),r=s(312),k=t(r),d=s(1287),f=t(d),b=o.createClass({displayName:"AntTabBar",statics:{Item:function(){}},getDefaultProps:function(){return{prefixCls:"am-tab-bar",barTintColor:"white",tintColor:"#108ee9",unselectedTintColor:"#888"}},onChange:function(n){o.Children.forEach(this.props.children,function(a){a.key===n&&a.props.onPress&&a.props.onPress()})},renderTabBar:function(){var n=this.props;return o.createElement(f["default"],{onTabClick:n.onTabClick,style:{backgroundColor:n.barTintColor}})},renderTabContent:function(){return o.createElement(k["default"],{animated:!1})},render:function(){var n=this,a=void 0,s=[];o.Children.forEach(this.props.children,function(n){n.props.selected&&(a=n.key),s.push(n)});var t=this.props,e=t.tintColor,p=t.unselectedTintColor,l=s.map(function(a){var s=a.props,t=o.createElement(i["default"],{prefixCls:n.props.prefixCls+"-tab",badge:s.badge,selected:s.selected,icon:s.icon,selectedIcon:s.selectedIcon,title:s.title,tintColor:e,unselectedTintColor:p});return o.createElement(c.TabPane,{placeholder:"\u6b63\u5728\u52a0\u8f7d",tab:t,key:a.key},s.children)});return o.createElement(u["default"],{renderTabBar:this.renderTabBar,renderTabContent:this.renderTabContent,tabBarPosition:"bottom",prefixCls:this.props.prefixCls,activeKey:a,onChange:this.onChange},l)}});a["default"]=b,n.exports=a["default"]},839:function(n,a,s){"use strict";s(8),s(1152),s(237)},905:function(n,a,s){n.exports={basic:s(774)}},1152:function(n,a){},1287:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),p=t(e),o=s(436),c=t(o),u=p["default"].createClass({displayName:"TabBar",mixins:[c["default"]],render:function(){var n=this.getTabs();return this.getRootNode(n)}});a["default"]=u,n.exports=a["default"]}});