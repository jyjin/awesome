(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1203],{98532:function(){},63625:function(e){e.exports={flex:"flex___18rEB","json-viewer":"json-viewer___67rUi"}},33291:function(e){e.exports={flex:"flex___2dm7d","content-download":"content-download___syE_n",api:"api___2k62r"}},91967:function(e,t,n){"use strict";n.d(t,{JO:function(){return s},he:function(){return h},gb:function(){return c.Z}});var r=n(45976),a=n(85893),o=(0,r.Z)({scriptUrl:"//at.alicdn.com/t/font_2677882_tzcg0p99ksf.js"}),i=e=>{var t={};return e.size&&(t.fontSize=e.size),e.color&&(t.color=e.color),(0,a.jsx)(o,{type:"icon-".concat(e.type),style:t})},s=i,c=n(25744),l=n(94184),d=n.n(l),g=n(63625),p=n.n(g),u=e=>{var t=e.json,n=e.text,r=d()(p()["json-viewer"]);return n?(0,a.jsx)("pre",{className:r,children:n}):t?(0,a.jsx)("pre",{className:r,children:JSON.stringify(t,null,2)}):(console.warn("[ JSON Viewer ] == 'json' shouldn't be null, expected Object or Array"),null)},h=u,D=n(32101),f=n(45697),x=n.n(f),j=n(98532),m=n.n(j),v=()=>{},y=e=>{e.name;var t=e.key,n=e.isDragging,r=e.connectDragSource,o=(e.element,n?.4:1),i=d()(m().tag);return r((0,a.jsx)("div",{className:i,style:{opacity:o},children:e.children},t))},_=e=>{var t="box",n={beginDrag:e.begin,endDrag:e.end||v,canDrag:e.canDrag||v,isDragging:e.isDragging||v},r=(e,t)=>({connectDragSource:e.dragSource(),isDragging:t.isDragging()});return(0,D.E)(t,n,r)(y)};_.prototype={begin:x().func.isRequired,end:x().func,canDrag:x().func,isDragging:x().func,element:x().element};var b=n(69684),k=e=>{e.canDrop;var t=e.isOver,n=(e.allowedDropEffect,e.connectDropTarget),r=e.element;console.log("isOVer == ",t);var o=d()({[m()["drag-to"]]:t});return n((0,a.jsx)("div",{className:o,children:r}))},w=e=>{var t="box",n={drop:e.drop,hover:e.hover,canDrop:e.canDrop},r=(e,t)=>({connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()});return(0,b.G)(t,n,r)((0,a.jsx)(k,{element:e.element}))};w.prototype={drop:x().func.isRequired,hover:x().func,canDrag:x().func}},64039:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});n(57663);var r=n(60404),a=n(67294),o=n(91967),i=n(9669),s=n.n(i),c=n(94184),l=n.n(c),d=n(33291),g=n.n(d),p=n(85893);class u extends a.Component{constructor(e){super(e),this.state={i:0,data:""},this.getDataDelay=this.getDataDelay.bind(this),this.getDataLoop=this.getDataLoop.bind(this)}componentWillMount(){this.complicatedRenderPage()}complicatedRenderPage(){for(var e=0;e<100;e++)this.setState({i:e})}getDataDelay(){s().get("/api/delay").then((e=>{this.setState({data:e.data})}))}getDataLoop(){s().get("/api/loop").then((e=>{}))}onClick(){for(var e=0;e<10;e++)this.getDataDelay()}render(){var e=l()(g()["content-download"]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"\u70b9\u51fb\u3010\u6d4b\u8bd5content download\u3011\u53d1\u51fa\u8bf7\u6c42\uff0c\u518d\u70b9\u51fb\u3010\u8ba9\u670d\u52a1\u53d8\u5361\u3011\u89c2\u5bdf\u8bf7\u6c42content download"}),(0,p.jsxs)("div",{className:e,children:[(0,p.jsx)(r.Z,{type:"primary",onClick:this.onClick.bind(this),children:"\u6d4b\u8bd5content download"}),(0,p.jsx)(r.Z,{type:"primary",onClick:()=>{this.getDataLoop()},children:"\u8ba9\u670d\u52a1\u53d8\u5361"}),(0,p.jsx)(r.Z,{type:"primary",onClick:()=>{s().get("/api/menus").then((e=>{this.setState({menuData:e})}))},children:"\u6d4b\u8bd5mock"})]}),(0,p.jsx)("br",{}),this.state.menuData?"\u8fd9\u91cc\u662faxios\u8bf7\u6c42\u7684\u672c\u5730mock\u6a21\u62df\u6570\u636e\uff0c\u5c4c\u4e0d\u5c4c\uff1f":"",this.state.i?"\u5148\u6765\u4ed6".concat(this.state.i,"\u6b21\u6e32\u67d3"):null,(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(o.he,{json:this.state.menuData}),(0,p.jsx)(o.he,{json:this.state.data}),(0,p.jsx)(o.gb,{tip:"\u62fc\u547d\u52a0\u8f7d\u4e2d..."})]})}}}}]);