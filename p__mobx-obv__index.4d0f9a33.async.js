(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2988],{98532:function(){},63625:function(e){e.exports={flex:"flex___18rEB","json-viewer":"json-viewer___67rUi"}},69458:function(e){e.exports={flex:"flex___3-hlV"}},46675:function(){},91967:function(e,n,r){"use strict";r.d(n,{JO:function(){return l},he:function(){return g},gb:function(){return a.Z}});var t=r(45976),o=r(85893),i=(0,t.Z)({scriptUrl:"//at.alicdn.com/t/font_2677882_tzcg0p99ksf.js"}),c=e=>{var n={};return e.size&&(n.fontSize=e.size),e.color&&(n.color=e.color),(0,o.jsx)(i,{type:"icon-".concat(e.type),style:n})},l=c,a=r(25744),s=r(94184),u=r.n(s),d=r(63625),p=r.n(d),f=e=>{var n=e.json,r=e.text,t=u()(p()["json-viewer"]);return r?(0,o.jsx)("pre",{className:t,children:r}):n?(0,o.jsx)("pre",{className:t,children:JSON.stringify(n,null,2)}):(console.warn("[ JSON Viewer ] == 'json' shouldn't be null, expected Object or Array"),null)},g=f,m=r(32101),v=r(45697),x=r.n(v),h=r(98532),y=r.n(h),j=()=>{},D=e=>{e.name;var n=e.key,r=e.isDragging,t=e.connectDragSource,i=(e.element,r?.4:1),c=u()(y().tag);return t((0,o.jsx)("div",{className:c,style:{opacity:i},children:e.children},n))},S=e=>{var n="box",r={beginDrag:e.begin,endDrag:e.end||j,canDrag:e.canDrag||j,isDragging:e.isDragging||j},t=(e,n)=>({connectDragSource:e.dragSource(),isDragging:n.isDragging()});return(0,m.E)(n,r,t)(D)};S.prototype={begin:x().func.isRequired,end:x().func,canDrag:x().func,isDragging:x().func,element:x().element};var Z=r(69684),b=e=>{e.canDrop;var n=e.isOver,r=(e.allowedDropEffect,e.connectDropTarget),t=e.element;console.log("isOVer == ",n);var i=u()({[y()["drag-to"]]:n});return r((0,o.jsx)("div",{className:i,children:t}))},w=e=>{var n="box",r={drop:e.drop,hover:e.hover,canDrop:e.canDrop},t=(e,n)=>({connectDropTarget:e.dropTarget(),isOver:n.isOver(),canDrop:n.canDrop()});return(0,Z.G)(n,r,t)((0,o.jsx)(b,{element:e.element}))};w.prototype={drop:x().func.isRequired,hover:x().func,canDrag:x().func}},68144:function(e,n,r){"use strict";r.r(n);r(57663);var t=r(60404),o=(r(49111),r(19650)),i=(r(67294),r(12938)),c=r(29323),l=r(68949),a=r(74806),s=r(91967),u=(r(69458),r(85893)),d=e=>{function n(){var n=e.lcStore.sections[e.lcStore.sections.length-1].id+1;e.lcStore.addSection({id:n,name:"\u533a\u57df".concat(n),cols:1,fields:[]})}return console.log("\u6d4b\u8bd5\u6ce8\u5165\u7684store == ",(0,l.ZN)(e.lcStore)),console.log("\u6d4b\u8bd5\u6ce8\u5165\u7684\u5176\u4ed6\u6570\u636eglobal,intls == ",(0,l.ZN)(e)),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Observer\u6807\u7b7e\u5c40\u90e8\u76d1\u542c\u63a7\u5236"}),(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("span",{children:"Store\u7684section\u6761\u6570\u4e3a\uff1a"}),e.lcStore.sections.length]}),(0,u.jsxs)(o.Z,{style:{width:"100%"},children:[(0,u.jsx)("span",{children:"\u70b9\u6211\u589e\u52a0section\uff0csection\u6570\u636e\u9875\u9762\u4f1a\u66f4\u65b0\uff0c\u4f46\u662f\u6761\u6570\u4e0d\u66f4\u65b0"}),(0,u.jsx)(t.Z,{type:"primary",onClick:n,children:"\u6dfb\u52a0\u533a\u57df"})]}),(0,u.jsx)(i.Qj,{children:()=>(0,u.jsx)(s.he,{json:e.lcStore.sections})})]})};n["default"]=(0,c.f3)("global","intls","lcStore")((0,a.ZP)(d))},33732:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t,o=r(28481),i=r(67294),c=r(98924),l=function(){return(0,c.Z)()&&window.document.documentElement},a=function(){if(!l())return!1;if(void 0!==t)return t;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),t=1===e.scrollHeight,document.body.removeChild(e),t},s=function(){var e=i.useState(!1),n=(0,o.Z)(e,2),r=n[0],t=n[1];return i.useEffect((function(){t(a())}),[]),r}},19650:function(e,n,r){"use strict";r.d(n,{u:function(){return g},Z:function(){return h}});var t=r(22122),o=r(96156),i=r(28481),c=r(67294),l=r(94184),a=r.n(l),s=r(50344),u=r(86032);function d(e){var n=e.className,r=e.direction,i=e.index,l=e.marginDirection,a=e.children,s=e.split,u=e.wrap,d=c.useContext(g),p=d.horizontalSize,f=d.verticalSize,m=d.latestIndex,v=d.supportFlexGap,x={};return v||("vertical"===r?i<m&&(x={marginBottom:p/(s?2:1)}):x=(0,t.Z)((0,t.Z)({},i<m&&(0,o.Z)({},l,p/(s?2:1))),u&&{paddingBottom:f})),null===a||void 0===a?null:c.createElement(c.Fragment,null,c.createElement("div",{className:n,style:x},a),i<m&&s&&c.createElement("span",{className:"".concat(n,"-split"),style:x},s))}var p=r(33732),f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r},g=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};function v(e){return"string"===typeof e?m[e]:e||0}var x=function(e){var n,r=c.useContext(u.E_),l=r.getPrefixCls,m=r.space,x=r.direction,h=e.size,y=void 0===h?(null===m||void 0===m?void 0:m.size)||"small":h,j=e.align,D=e.className,S=e.children,Z=e.direction,b=void 0===Z?"horizontal":Z,w=e.prefixCls,z=e.split,O=e.style,E=e.wrap,N=void 0!==E&&E,C=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,p.Z)(),k=c.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return v(e)}))}),[y]),G=(0,i.Z)(k,2),P=G[0],B=G[1],F=(0,s.Z)(S,{keepEmpty:!0}),I=void 0===j&&"horizontal"===b?"center":j,A=l("space",w),J=a()(A,"".concat(A,"-").concat(b),(n={},(0,o.Z)(n,"".concat(A,"-rtl"),"rtl"===x),(0,o.Z)(n,"".concat(A,"-align-").concat(I),I),n),D),R="".concat(A,"-item"),T="rtl"===x?"marginLeft":"marginRight",V=0,q=F.map((function(e,n){return null!==e&&void 0!==e&&(V=n),c.createElement(d,{className:R,key:"".concat(R,"-").concat(n),direction:b,index:n,marginDirection:T,split:z,wrap:N},e)})),M=c.useMemo((function(){return{horizontalSize:P,verticalSize:B,latestIndex:V,supportFlexGap:_}}),[P,B,V,_]);if(0===F.length)return null;var U={};return N&&(U.flexWrap="wrap",_||(U.marginBottom=-B)),_&&(U.columnGap=P,U.rowGap=B),c.createElement("div",(0,t.Z)({className:J,style:(0,t.Z)((0,t.Z)({},U),O)},C),c.createElement(g.Provider,{value:M},q))},h=x},49111:function(e,n,r){"use strict";r(43673),r(46675)}}]);