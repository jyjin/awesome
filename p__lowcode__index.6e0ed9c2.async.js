(self["webpackChunk"]=self["webpackChunk"]||[]).push([[285],{98532:function(){},63625:function(e){e.exports={flex:"flex___18rEB","json-viewer":"json-viewer___67rUi"}},20054:function(e){e.exports={flex:"flex___3Cc90",lc:"lc___yNB-z","lc-header":"lc-header___1luCQ","lc-header-left":"lc-header-left___1qd1f","lc-header-center":"lc-header-center___3FX6Z","lc-header-right":"lc-header-right___O4Qj_","lc-content":"lc-content___2pl_v","lc-content-left":"lc-content-left___2oicI","lc-content-right":"lc-content-right___3HIVe",tag:"tag___2-vu6","lc-content-center":"lc-content-center___1Q4Zv","drag-to":"drag-to___1FI6_","sortable-chosen":"sortable-chosen___1w7oT","sortable-drag":"sortable-drag___QBhe4","section-box":"section-box___34En3",selected:"selected___2xUfL","add-btn":"add-btn___xNtEV"}},91967:function(e,t,s){"use strict";s.d(t,{JO:function(){return l},he:function(){return m},gb:function(){return o.Z}});var n=s(45976),r=s(85893),i=(0,n.Z)({scriptUrl:"//at.alicdn.com/t/font_2677882_tzcg0p99ksf.js"}),c=e=>{var t={};return e.size&&(t.fontSize=e.size),e.color&&(t.color=e.color),(0,r.jsx)(i,{type:"icon-".concat(e.type),style:t})},l=c,o=s(25744),a=s(94184),d=s.n(a),h=s(63625),u=s.n(h),g=e=>{var t=e.json,s=e.text,n=d()(u()["json-viewer"]);return s?(0,r.jsx)("pre",{className:n,children:s}):t?(0,r.jsx)("pre",{className:n,children:JSON.stringify(t,null,2)}):(console.warn("[ JSON Viewer ] == 'json' shouldn't be null, expected Object or Array"),null)},m=g,x=s(32101),f=s(45697),p=s.n(f),j=s(98532),v=s.n(j),Z=()=>{},b=e=>{e.name;var t=e.key,s=e.isDragging,n=e.connectDragSource,i=(e.element,s?.4:1),c=d()(v().tag);return n((0,r.jsx)("div",{className:c,style:{opacity:i},children:e.children},t))},_=e=>{var t="box",s={beginDrag:e.begin,endDrag:e.end||Z,canDrag:e.canDrag||Z,isDragging:e.isDragging||Z},n=(e,t)=>({connectDragSource:e.dragSource(),isDragging:t.isDragging()});return(0,x.E)(t,s,n)(b)};_.prototype={begin:p().func.isRequired,end:p().func,canDrag:p().func,isDragging:p().func,element:p().element};var S=s(69684),y=e=>{e.canDrop;var t=e.isOver,s=(e.allowedDropEffect,e.connectDropTarget),n=e.element;console.log("isOVer == ",t);var i=d()({[v()["drag-to"]]:t});return s((0,r.jsx)("div",{className:i,children:n}))},D=e=>{var t="box",s={drop:e.drop,hover:e.hover,canDrop:e.canDrop},n=(e,t)=>({connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()});return(0,S.G)(t,s,n)((0,r.jsx)(y,{element:e.element}))};D.prototype={drop:p().func.isRequired,hover:p().func,canDrag:p().func}},20240:function(e,t,s){"use strict";s.r(t),s.d(t,{en:function(){return r},zh:function(){return n}});var n={author:"\u5b87\u5b99\u6700\u5e05\u91d1\u5efa\u4e1a",why:"\u4e3a\u4ec0\u4e48","who.save.world":"{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}"},r={author:"universe handsome jianye",why:"why","who.save.world":"{who}~ come to save the world \uff01{encourage}"}},29883:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return xe}});var n=s(8870),r=s(57337),i=(s(24793),s(97183)),c=s(29323),l=s(81966),o=s(29558),a=s(20240),d=s(67294),h=s(91967),u=(s(49111),s(19650)),g=(s(48736),s(27049)),m=(s(57663),s(60404)),x=(s(57338),s(56414)),f=s(31138),p=s(20054),j=s.n(p),v=s(85893),Z=i.Z.Header,b=(i.Z.Content,(0,c.f3)("lcStore")((0,c.Pi)((e=>(0,v.jsx)(x.Z,{title:"\u6570\u636eJSON",width:720,visible:e.visible,bodyStyle:{paddingBottom:80},onClose:()=>{e.close()},children:(0,v.jsx)(h.he,{json:e.lcStore.sections})}))))),_=()=>{function e(){var e=sessionStorage.getItem("prevPath")||"/";f.m8.push(e)}var t=(0,d.useState)(!1),s=(0,r.Z)(t,2),n=s[0],c=s[1];return(0,v.jsxs)(i.Z,{children:[(0,v.jsxs)(Z,{className:j()["lc-header"],children:[(0,v.jsxs)(u.Z,{className:j()["lc-header-left"],children:[(0,v.jsx)(m.Z,{type:"link",icon:(0,v.jsx)(h.JO,{type:"fullscreen-exit",color:"black"}),onClick:e}),(0,v.jsx)(g.Z,{type:"vertical",style:{borderColor:"#ddd",height:30}}),(0,v.jsx)("h1",{children:"\u8bbe\u8ba1\u5668"})]}),(0,v.jsx)(u.Z,{className:j()["lc-header-center"],children:(0,v.jsx)("div",{})}),(0,v.jsxs)(u.Z,{className:j()["lc-header-right"],children:[(0,v.jsx)(m.Z,{type:"ghost",icon:(0,v.jsx)(h.JO,{type:"upload",size:16}),children:"\u9884\u89c8"}),(0,v.jsx)(m.Z,{type:"primary",icon:(0,v.jsx)(h.JO,{type:"upload",size:16}),onClick:()=>c(!0),children:"\u5bfc\u51fa"}),(0,v.jsx)(m.Z,{type:"primary",icon:(0,v.jsx)(h.JO,{type:"file-text",size:16}),children:"\u4fdd\u5b58"})]})]}),(0,v.jsx)(b,{visible:n,close:()=>c(!1)})]})},S=_,y=(s(18106),s(16351)),D=s(71069),C=(s(58024),s(39144)),w=(s(71153),s(60331)),I=s(69684),E=s(94184),N=s.n(E),T=s(68949),O=e=>{var t={height:30,lineHeight:"30px",display:"inline-block",width:"100%",fontSize:14,textAlign:"center",cursor:"move",marginBottom:"14px"};function s(t){t.stopPropagation(),e.lcStore.selectField(e.section.id,e.field.id)}var r=N()(j().compo,{[j().selected]:e.section.id===e.lcStore.current["section"]&&e.field.id===e.lcStore.current["field"]});return console.log("current == ",(0,T.ZN)(e.lcStore.current)),(0,v.jsx)(w.Z,{className:r,style:(0,n.Z)({},t),onClick:s,closable:!0,children:e.field.name})},F=(0,c.f3)("lcStore")((0,c.Pi)(O)),k=s(16941),z=(0,c.f3)("lcStore")((0,c.Pi)((e=>{function t(t){t.stopPropagation(),e.lcStore.addSection()}function s(){e.lcStore.selectSection(e.section.id)}var r=t=>{e.lcStore.sortField(e.section.id,t)},i=e.section.id===e.lcStore.current["section"]&&null===e.lcStore.current["field"],c=N()({[j().section]:!0,[j().selected]:i}),l={position:"absolute",height:"20px",left:"50%",bottom:0,marginLeft:-10,marginBottom:-10,cursor:"pointer",zIndex:9},o={height:30,lineHeight:"30px",display:"inline-block",width:"100%",border:"1px dashed #2979ff",background:"#f2f7ff",color:"#8c8c8c",textAlign:"center"};return(0,v.jsxs)(C.Z,{className:c,size:"small",title:"\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae",title:e.name,onClick:s,children:[e.section.fields.length?null:(0,v.jsx)(w.Z,{style:o}),(0,v.jsx)(k._O,{group:"field-group",animation:200,list:e.section.fields,setList:r,ghostClass:j()["sortable-ghost"],chosenClass:j()["sortable-chosen"],dragClass:j()["sortable-drag"],children:e.section.fields.map((t=>(0,v.jsx)(F,(0,n.Z)((0,n.Z)({},e),{},{field:t}),"field-"+t.id.toString())))}),i?(0,v.jsx)("div",{style:l,className:j()["add-btn"],onClick:t,children:(0,v.jsx)(h.JO,{type:"plus-circle-fill",size:20,color:"#2196f3"})}):null]})}))),A=e=>{var t=e.isOver,s=e.connectDropTarget,r=N()(j()["section-box"],{[j()["drag-to"]]:t});return s((0,v.jsx)("div",{className:r,children:(0,v.jsx)(z,(0,n.Z)({},e))}))},L="box",R={drop:e=>{var t=e.allowedDropEffect,s=e.section;return{name:"".concat(t," Dustbin"),section:(0,T.ZN)(s),allowedDropEffect:t}}},P=(e,t)=>({connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}),q=(0,I.G)(L,R,P)(A),H=(0,c.f3)("lcStore")((0,c.Pi)((e=>{var t=t=>{var s=t.filter((e=>void 0!==e));e.lcStore.sortSection(s)},s=()=>(0,v.jsx)("div",{style:{width:"100%",height:24}});return(0,v.jsxs)(i.Z,{className:j()["lc-content-center"],children:[(0,v.jsx)(C.Z,{size:"small",title:"\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae",style:{borderColor:"#d8d8d8"},children:(0,v.jsx)(w.Z,{style:{height:30,lineHeight:"30px",display:"inline-block",width:"100%",border:"1px dashed #2979ff",background:"#f2f7ff",color:"#8c8c8c",textAlign:"center"},children:"\u4f60\u53ef\u4ee5\u62d6\u52a8\u5de6\u4fa7\u7ec4\u4ef6\u5b8c\u6210\u8bbe\u7f6e"})}),(0,v.jsx)(s,{}),(0,v.jsx)(k._O,{animation:200,list:e.lcStore.sections,setList:t,chosenClass:j()["sortable-chosen"],dragClass:j()["sortable-drag"],children:e.lcStore.sections.map((e=>(0,v.jsxs)("div",{children:[(0,v.jsx)(q,{allowedDropEffect:"move",name:e.name,id:e.id,section:e},"dragbox-"+e.id.toString()),(0,v.jsx)(s,{},"row"+e.id.toString())]},e.id)))},"sections")]})}))),U=H,J=s(32101),M=e=>{var t=e.name,s=(e.key,e.isDragging),n=e.connectDragSource,r=s?.4:1,i=N()(j().tag);return n((0,v.jsx)("div",{className:i,style:{opacity:r},children:(0,v.jsx)(w.Z,{style:{width:"100%",height:"100%",lineHeight:"30px",fontSize:14},children:t})}))},B="box",G={beginDrag:e=>(0,n.Z)({name:e.name},e),endDrag(e,t){t.getItem();var s=t.getDropResult();if(console.log("drag target == ",e.source),s){console.log("drag to == ",(0,T.ZN)(s.section));var r=1;s.section.fields.length&&(r=s.section.fields[s.section.fields.length-1].id+1);var i=(0,n.Z)({id:r},e.source);e.lcStore.addField(s.section.id,i)}}},V=(e,t)=>({connectDragSource:e.dragSource(),isDragging:t.isDragging()}),Q=(0,J.E)(B,G,V)(M),W=[{code:"TEXT_SINGLE",name:"\u5355\u884c\u6587\u672c"},{code:"NUMBER",name:"\u6574\u5f62\u6570\u5b57"},{code:"FLOAT",name:"\u6d6e\u70b9\u6570\u5b57"},{code:"CURRENCY",name:"\u8d27\u5e01"},{code:"URL",name:"URL"},{code:"PASSWORD",name:"\u5bc6\u7801\u6846"},{code:"EMAIL",name:"\u90ae\u7bb1"},{code:"TEXT_MULTI",name:"\u591a\u884c\u6587\u672c"},{code:"TEXT_RICH",name:"\u5bcc\u6587\u672c"},{code:"RADIO",name:"\u5355\u9009\u6846"},{code:"CHECK",name:"\u590d\u9009\u6846"},{code:"RADIO_GROUP",name:"\u5706\u5f62\u591a\u9009\u6846"},{code:"CHECK_GROUP",name:"\u65b9\u578b\u591a\u9009\u6846"},{code:"SWITCH",name:"\u5f00\u5173"},{code:"SELECTOR_SINGLE",name:"\u4e0b\u62c9\u5355\u9009"},{code:"SELECTOR_MULTI",name:"\u4e0b\u62c9\u591a\u9009"},{code:"DATE_TIME",name:"\u65e5\u671f\u65f6\u95f4"},{code:"DATE",name:"\u65e5\u671f"},{code:"TIME",name:"\u65f6\u95f4"},{code:"ATTACHMENT",name:"\u9644\u4ef6"},{code:"IMAGE",name:"\u56fe\u7247"},{code:"MATSER_DETAIL",name:"\u591a\u5bf9\u4e00\u5173\u8054"}],X=y.Z.TabPane,K=(0,c.f3)("lcStore")((0,c.Pi)((e=>(0,v.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"0 20px"},children:e.data.map((t=>(0,v.jsx)(Q,(0,n.Z)({name:t.name,source:t},e),t.code)))})))),Y=()=>{var e=(0,f.QT)(D.n);function t(e){console.log(e)}return e.data=W,(0,d.useEffect)((()=>{}),[e.data]),e.data?(0,v.jsx)(i.Z,{className:j()["lc-content-left"],children:(0,v.jsxs)(y.Z,{tabBarStyle:{padding:"0 24px"},defaultActiveKey:"components",onChange:t,children:[(0,v.jsx)(X,{tab:"\u7ec4\u4ef6",children:(0,v.jsx)(K,{data:e.data})},"components"),(0,v.jsx)(X,{tab:"\u81ea\u5b9a\u4e49",children:(0,v.jsx)(K,{data:e.data})},"customer")]})}):(0,v.jsx)(h.gb,{})},$=Y,ee=(s(9715),s(82482)),te=(s(47673),s(61418)),se=e=>{var t=e=>{console.log("Success:",e)},s=e=>{console.log("Failed:",e)},n=e.lcStore.getField();return n?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C.Z,{title:"\u57fa\u672c\u4fe1\u606f",bordered:!1,style:{width:"100%"},children:(0,v.jsxs)(ee.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:t,onFinishFailed:s,children:[(0,v.jsx)(ee.Z.Item,{label:"\u6807\u7b7e",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.name})}),(0,v.jsx)(ee.Z.Item,{label:"\u7f16\u7801",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u63cf\u8ff0",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u5fc5\u586b",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u53ef\u89c1",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u53ef\u7f16\u8f91",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u5360\u4f4d\u7b26",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u5e2e\u52a9\u6587\u672c",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})})]})}),(0,v.jsx)(C.Z,{title:"\u5c5e\u6027\u4fe1\u606f",bordered:!1,style:{width:"100%"},children:(0,v.jsx)(ee.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:t,onFinishFailed:s,children:(0,v.jsx)(ee.Z.Item,{label:"\u9ed8\u8ba4\u503c",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.name})})})})]}):null},ne=(0,c.f3)("lcStore")((0,c.Pi)(se)),re=e=>{var t=e=>{console.log("Success:",e)},s=e=>{console.log("Failed:",e)},n=(e.lcStore.getField(),e.lcStore.getSection());return n?(0,v.jsx)(C.Z,{title:"\u57fa\u672c\u4fe1\u606f",bordered:!1,style:{width:"100%"},children:(0,v.jsxs)(ee.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:t,onFinishFailed:s,children:[(0,v.jsx)(ee.Z.Item,{label:"\u6807\u9898",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.name})}),(0,v.jsx)(ee.Z.Item,{label:"\u5217",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})}),(0,v.jsx)(ee.Z.Item,{label:"\u53ef\u89c1",name:n.code,rules:[{required:!0,message:"\u5b57\u6bb5\u540d"}],children:(0,v.jsx)(te.Z,{value:n.cols})})]})}):null},ie=(0,c.f3)("lcStore")((0,c.Pi)(re)),ce=(0,c.Pi)((e=>{var t=!!e.lcStore.current["field"];return(0,v.jsx)(i.Z,{className:j()["lc-content-right"],children:t?(0,v.jsx)(ne,(0,n.Z)({},e)):(0,v.jsx)(ie,(0,n.Z)({},e))})})),le=(0,c.f3)("lcStore")(ce),oe=s(79622),ae=s(57865),de=s(82083),he=i.Z.Content,ue=o.Z,ge={locale:"zh",author:"jyjin"},me=e=>{var t=(0,d.useState)("zh"),s=(0,r.Z)(t,2),o=s[0];s[1];return(0,v.jsx)(c.zt,{className:"provider",global:ge,intls:l,lcStore:de.Z,children:(0,v.jsx)(ue,{messages:a[o],locale:o,defaultLocale:o,children:(0,v.jsxs)(i.Z,{className:j().lc,children:[(0,v.jsx)(S,{}),(0,v.jsx)(he,{className:j()["lc-content"],children:(0,v.jsxs)(oe.W,(0,n.Z)((0,n.Z)({backend:ae.PD},e),{},{children:[(0,v.jsx)($,(0,n.Z)({},e)),(0,v.jsx)(U,(0,n.Z)({},e)),(0,v.jsx)(le,(0,n.Z)({},e))]}))})]})})})},xe=me},71069:function(e,t,s){"use strict";s.d(t,{n:function(){return i},A:function(){return c}});var n=s(9669),r=s.n(n),i=()=>r().get("api/jy-components"),c=e=>r().post("http://localhost:30010/tool/babel",{code:e})},82083:function(e,t,s){"use strict";var n=s(8870),r=s(68949),i=[{id:1,name:"\u9ed8\u8ba4\u533a\u57df",cols:1,fields:[]}];function c(e,t){return e.find((e=>e.id===t))}function l(e,t){var s=e.findIndex((e=>e.id===t));return e.splice(s,1),e}var o=(0,r.LO)({current:{},sections:i,selectSection(e){this.current["field"]=null,this.current["section"]=e,this.current=(0,n.Z)({},this.current)},selectField(e,t){this.current["field"]=t,this.current["section"]=e,this.current=(0,n.Z)({},this.current)},getField(){if(!this.current["field"])return null;var e=c(this.sections,this.current["section"]),t=c(e.fields,this.current["field"]);return(0,n.Z)({},t)},getSection(){if(!this.current["section"])return null;var e=c(this.sections,this.current["section"]);return(0,n.Z)({},e)},addSection(){var e=this.sections[this.sections.length-1].id+1,t={id:e,name:"\u533a\u57df".concat(e),cols:1,fields:[]};this.sections.push(t),this.sections=[...this.sections],this.selectSection(e)},removeSection(e){l(this.sections,e),this.sections=[...this.sections]},addField(e,t){c(this.sections,e).fields.push(t),c(this.sections,e).fields=[...c(this.sections,e).fields],this.sections=[...this.sections]},removeField(e,t){l(c(this.sections,e).fields,t),this.sections=[...this.sections]},sortSection(e){this.sections=[...e]},sortField(e,t){var s=this.sections.findIndex((t=>t.id===e));this.sections[s].fields=[...t],this.sections=[...this.sections]}});t["Z"]=o}}]);