(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{78672:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Z}});var i=n(63366),r=n(87462),o=n(94780),a=n(73935),s=n(90948),l=n(71657),c=n(95408),d=n(98700),u=n(59766),p=n(30067),h=n(86010),m=n(67294),f=n(34867);function g(e){return(0,f.Z)("MuiMasonry",e)}(0,n(1588).Z)("MuiMasonry",["root"]);var x=n(85893);const w=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],v=e=>Number(e.replace("px","")),b={flexBasis:"100%",width:0,margin:0,padding:0},y=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const i={};if(e.isSSR){const o={},a=v(t.spacing(e.defaultSpacing));for(let t=1;t<=e.defaultColumns;t+=1)o[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return i.height=e.defaultHeight,i.margin=-a/2,i["& > *"]=(0,r.Z)({},n["& > *"],o,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),(0,r.Z)({},n,i)}const o=(0,c.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),a=(0,d.hB)(t);n=(0,u.Z)(n,(0,c.k9)({theme:t},o,(t=>{let n;if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t){const e=Number(t);n=(0,d.NA)(a,e)}else n=t;return(0,r.Z)({margin:`calc(0px - (${n} / 2))`,"& > *":{margin:`calc(${n} / 2)`}},e.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(e.maxColumnHeight+v(n)):`calc(${e.maxColumnHeight}px + ${n})`})})));const s=(0,c.P$)({values:e.columns,breakpoints:t.breakpoints.values});return n=(0,u.Z)(n,(0,c.k9)({theme:t},s,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"string"===typeof o&&!Number.isNaN(Number(o))||"number"===typeof o?(0,d.NA)(a,Number(o)):"0px"})`}})))),"object"===typeof o&&(n=(0,u.Z)(n,(0,c.k9)({theme:t},o,((e,t)=>{if(t){const n=Number(e),i=Object.keys(s).pop(),r=(0,d.NA)(a,n);return{"& > *":{width:`calc(${`${(100/("object"===typeof s?s[t]||s[i]:s)).toFixed(2)}%`} - ${r})`}}}return null})))),n}));var Z=m.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiMasonry"}),{children:s,className:c,component:d="div",columns:u=4,spacing:f=1,defaultColumns:Z,defaultHeight:k,defaultSpacing:S}=n,N=(0,i.Z)(n,w),D=m.useRef(),[M,$]=m.useState(),U=!M&&k&&void 0!==Z&&void 0!==S,[C,j]=m.useState(U?Z-1:0),A=(0,r.Z)({},n,{spacing:f,columns:u,maxColumnHeight:M,defaultColumns:Z,defaultHeight:k,defaultSpacing:S,isSSR:U}),R=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},g,t)})(A),E=m.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!D.current||!e||0===e.length)return;const t=D.current,n=D.current.firstChild,i=t.clientWidth,r=n.clientWidth;if(0===i||0===r)return;const o=window.getComputedStyle(n),s=v(o.marginLeft),l=v(o.marginRight),c=Math.round(i/(r+s+l)),d=new Array(c).fill(0);let u=!1;t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||u)return;const t=window.getComputedStyle(e),n=v(t.marginTop),i=v(t.marginBottom),r=v(t.height)?Math.ceil(v(t.height))+n+i:0;if(0!==r){for(let t=0;t<e.childNodes.length;t+=1){const n=e.childNodes[t];if("IMG"===n.tagName&&0===n.clientHeight){u=!0;break}}if(!u){const t=d.indexOf(Math.min(...d));d[t]+=r;const n=t+1;e.style.order=n}}else u=!0})),u||(0,a.flushSync)((()=>{$(Math.max(...d)),j(c>0?c-1:0)}))})));m.useEffect((()=>{const e=E.current;if(void 0!==e)return D.current&&D.current.childNodes.forEach((t=>{e.observe(t)})),()=>e?e.disconnect():{}}),[u,f,s]);const O=(0,p.Z)(t,D),I=new Array(C).fill("").map(((e,t)=>(0,x.jsx)("span",{"data-class":"line-break",style:(0,r.Z)({},b,{order:t+1})},t)));return(0,x.jsxs)(y,(0,r.Z)({as:d,className:(0,h.Z)(R.root,c),ref:O,ownerState:A},N,{children:[s,I]}))}))},67720:function(e,t,n){"use strict";var i=n(63366),r=n(87462),o=n(67294),a=n(86010),s=n(94780),l=n(41796),c=n(90948),d=n(71657),u=n(35097),p=n(85893);const h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:c,component:g=(l?"div":"hr"),flexItem:x=!1,light:w=!1,orientation:v="horizontal",role:b=("hr"!==g?"separator":void 0),textAlign:y="center",variant:Z="fullWidth"}=n,k=(0,i.Z)(n,h),S=(0,r.Z)({},n,{absolute:o,component:g,flexItem:x,light:w,orientation:v,role:b,textAlign:y,variant:Z}),N=(e=>{const{absolute:t,children:n,classes:i,flexItem:r,light:o,orientation:a,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,o&&"light","vertical"===a&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,s.Z)(d,u.V,i)})(S);return(0,p.jsx)(m,(0,r.Z)({as:g,className:(0,a.Z)(N.root,c),role:b,ref:t,ownerState:S},k,{children:l?(0,p.jsx)(f,{className:N.wrapper,ownerState:S,children:l}):null}))}));t.Z=g},57286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(95746)}])},95746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var i=n(85893),r=n(67294),o=n.t(r,2),a=n(87462),s=n(63366),l=n(20539),c=n(2734),d=n(58974),u=n(34168);function p(e,t,n,i,o){const a="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[s,l]=r.useState((()=>o&&a?n(e).matches:i?i(e).matches:t));return(0,d.Z)((()=>{let t=!0;if(!a)return;const i=n(e),r=()=>{t&&l(i.matches)};return r(),i.addListener(r),()=>{t=!1,i.removeListener(r)}}),[e,n,a]),s}const h=o.useSyncExternalStore;function m(e,t,n,i){const o=r.useCallback((()=>t),[t]),a=r.useMemo((()=>{if(null!==i){const{matches:t}=i(e);return()=>t}return o}),[o,e,i]),[s,l]=r.useMemo((()=>{if(null===n)return[o,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,n,e]);return h(l,s,a)}const f=["initialWidth","width"],g=["xs","sm","md","lg","xl"],x=(e,t,n=!0)=>n?g.indexOf(e)<=g.indexOf(t):g.indexOf(e)<g.indexOf(t),w=(e,t,n=!1)=>n?g.indexOf(t)<=g.indexOf(e):g.indexOf(t)<g.indexOf(e);var v=((e={})=>t=>{const{withTheme:n=!1,noSSR:o=!1,initialWidth:g}=e;return function(e){const x=(0,c.Z)(),w=e.theme||x,v=(0,l.Z)({theme:w,name:"MuiWithWidth",props:e}),{initialWidth:b,width:y}=v,Z=(0,s.Z)(v,f),[k,S]=r.useState(!1);(0,d.Z)((()=>{S(!0)}),[]);const N=w.breakpoints.keys.slice().reverse().reduce(((e,t)=>{const n=function(e,t={}){const n=(0,u.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:r=!1,matchMedia:o=(i?window.matchMedia:null),ssrMatchMedia:a=null,noSsr:s}=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let c="function"===typeof e?e(n):e;return c=c.replace(/^@media( ?)/m,""),(void 0!==h?m:p)(c,r,o,a,s)}(w.breakpoints.up(t));return!e&&n?t:e}),null),D=(0,a.Z)({width:y||(k||o?N:void 0)||b||g},n?{theme:w}:{},Z);return void 0===D.width?null:(0,i.jsx)(t,(0,a.Z)({},D))}})()((function(e){const{children:t,only:n,width:o}=e,a=(0,c.Z)();let s=!0;if(n)if(Array.isArray(n))for(let i=0;i<n.length;i+=1){if(o===n[i]){s=!1;break}}else n&&o===n&&(s=!1);if(s)for(let i=0;i<a.breakpoints.keys.length;i+=1){const t=a.breakpoints.keys[i],n=e[`${t}Up`],r=e[`${t}Down`];if(n&&x(t,o)||r&&w(t,o)){s=!1;break}}return s?(0,i.jsx)(r.Fragment,{children:t}):null})),b=n(86010),y=n(94780),Z=n(98216),k=n(90948),S=n(1588),N=n(34867);function D(e){return(0,N.Z)("PrivateHiddenCss",e)}(0,S.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const M=["children","className","only"],$=(0,k.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:e,ownerState:t})=>{const n={display:"none"};return(0,a.Z)({},t.breakpoints.map((({breakpoint:t,dir:i})=>"only"===i?{[e.breakpoints.only(t)]:n}:"up"===i?{[e.breakpoints.up(t)]:n}:{[e.breakpoints.down(t)]:n})).reduce(((e,t)=>(Object.keys(t).forEach((n=>{e[n]=t[n]})),e)),{}))}));var U=function(e){const{children:t,className:n,only:r}=e,o=(0,s.Z)(e,M),l=(0,c.Z)(),d=[];for(let i=0;i<l.breakpoints.keys.length;i+=1){const e=l.breakpoints.keys[i],t=o[`${e}Up`],n=o[`${e}Down`];t&&d.push({breakpoint:e,dir:"up"}),n&&d.push({breakpoint:e,dir:"down"})}if(r){(Array.isArray(r)?r:[r]).forEach((e=>{d.push({breakpoint:e,dir:"only"})}))}const u=(0,a.Z)({},e,{breakpoints:d}),p=(e=>{const{classes:t,breakpoints:n}=e,i={root:["root",...n.map((({breakpoint:e,dir:t})=>"only"===t?`${t}${(0,Z.Z)(e)}`:`${e}${(0,Z.Z)(t)}`))]};return(0,y.Z)(i,D,t)})(u);return(0,i.jsx)($,{className:(0,b.Z)(p.root,n),ownerState:u,children:t})};const C=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var j=function(e){const{implementation:t="js",lgDown:n=!1,lgUp:r=!1,mdDown:o=!1,mdUp:l=!1,smDown:c=!1,smUp:d=!1,xlDown:u=!1,xlUp:p=!1,xsDown:h=!1,xsUp:m=!1}=e,f=(0,s.Z)(e,C);return"js"===t?(0,i.jsx)(v,(0,a.Z)({lgDown:n,lgUp:r,mdDown:o,mdUp:l,smDown:c,smUp:d,xlDown:u,xlUp:p,xsDown:h,xsUp:m},f)):(0,i.jsx)(U,(0,a.Z)({lgDown:n,lgUp:r,mdDown:o,mdUp:l,smDown:c,smUp:d,xlDown:u,xlUp:p,xsDown:h,xsUp:m},f))},A=n(67720),R=n(15861),E=n(9473),O=n(88375),I=n(78672),L=n(2285),P=n(21121),W=n(78340),_=n(17808),H=n(33726),T=n(9008),Y=n.n(T),B=n(30381),F=n.n(B),z=_.xu.sort(L.e),V=[],X="";z.forEach((function(e){var t=F()(e.created,"DD-MM-YYYY").toDate().getFullYear().toString();X!==t&&V.push(t),X=t}));var q=_.xu,G=function(e){var t=[];return q.forEach((function(n){F()(n.created,"DD-MM-YYYY").toDate().getFullYear().toString()==e&&t.push(n)})),t};var K=function(e){var t=(0,E.v9)(O.Y4);return(0,r.useEffect)((function(){if(t){var e=document.getElementById("post-".concat(t.refId));e&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}),[t]),(0,i.jsxs)(P.E.div,{initial:"hidden",animate:"show",exit:"out",variants:{hidden:{opacity:0,scale:.9},show:{opacity:1,scale:1,transition:{duration:.3}},out:{opacity:0,scale:.9,transition:{duration:.3}}},children:[(0,i.jsxs)(Y(),{children:[(0,i.jsx)("title",{children:H.Tn}),(0,i.jsx)("meta",{name:"description",content:H.gK})]}),(0,i.jsx)(j,{mdUp:!0,children:(0,i.jsx)(A.Z,{sx:function(e){return{marginBottom:e.spacing(1),marginTop:e.spacing(1)}}})}),V.map((function(e,t){return(0,i.jsxs)("div",{children:[(0,i.jsx)(R.Z,{variant:"caption",children:e}),(0,i.jsx)(I.ZP,{columns:{xs:1,sm:2,md:3,lg:3},spacing:0,children:G(e).map((function(e,t){return(0,i.jsx)(W.Z,{id:"post-".concat(e.refId),title:e.title,text:e.description,created:e.created,href:(0,L.O)(e.id,e.title)},"post-".concat(t))}))})]},"yearly-posts-container-".concat(t))}))]})}}},function(e){e.O(0,[774,888,179],(function(){return t=57286,e(e.s=t);var t}));var t=e.O();_N_E=t}]);