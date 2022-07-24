import{o as u,a as d,r as m,b as s,c as l,d as r,k as h,t as v,n as f,l as b,_ as g,F as w,m as k,u as p,i as L,w as y}from"./oli.portfolio-v3.3.0.js";const N={class:"app-tooltip"},x={__name:"Tooltip",props:{position:{type:String,default:""},content:{type:String,default:""}},setup(c){const n=c;u(()=>window.addEventListener("touchmove",t)),d(()=>window.addEventListener("touchmove",t));const o=m(null),t=()=>o.value=!0;return(a,e)=>(s(),l("div",N,[r("div",{class:f(`app-tooltip__position ${n.position}`),tabindex:"0"},[h(a.$slots,"default"),r("span",{ref_key:"hideTooltipRef",ref:o,class:"app-tooltip__text"},v(n.content),513)],2)]))}};var I="/icons/linkedin.webp",M="/icons/medium.webp",S="/icons/github.webp",T="/icons/gmail.webp",$="/icons/phone.webp";const G=b({id:"leftNavbar",state:()=>({items:[{path:"https://www.linkedin.com/in/seulean-olimpiu",alt:"Linkedin icon",icon:I,title:"Linkedin"},{path:"https://medium.com/@olimpiuseulean",alt:"Medium icon",icon:M,title:"Medium"},{path:"https://github.com/oliseulean",alt:"Github icon",icon:S,title:"Github"},{path:"mailto:seulean.olimpiu@gmail.com",alt:"Mail icon",icon:T,title:"Mail"},{path:"tel:0741547328",alt:"Telephone icon",icon:$,title:"Phone"}]}),getters:{},actions:{}});const E={class:"app-left-navbar"},B=["href"],C=["src","alt"],P={__name:"LeftNavbar",setup(c){const n=G(),o=t=>{var i;if(!t)return;const e=((i=t==null?void 0:t.target)==null?void 0:i.alt).replace("webp","");gtag("event",`${e}`,{event_category:"Olimpiu Seulean Portfolio",event_label:`${e} - social`,value:1})};return(t,a)=>(s(),l("div",E,[(s(!0),l(w,null,k(p(n).items,(e,i)=>(s(),l("a",{key:i,href:e.path,target:"_blank",class:"app-left-navbar__link",onClick:a[0]||(a[0]=_=>o(_))},[L(p(x),{position:"right",content:e.title,class:"app-left-navbar__tooltip"},{default:y(()=>[r("img",{src:e.icon,alt:e.alt,class:"app-left-navbar__icon",height:"30",width:"30",loading:"lazy"},null,8,C)]),_:2},1032,["content"])],8,B))),128))]))}};var F=g(P,[["__scopeId","data-v-56b40481"]]);export{F as L,x as _};
