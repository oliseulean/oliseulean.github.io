import{_ as h,r as w,o as E,a as I,b as p,c as u,d as _,u as o,e as b,p as f,f as L,g as v,h as t,i as e,F as V,j as n}from"./oli.portfolio-v3.1.1.js";import{L as g}from"./oli.portfolio-v3.1.13.js";const A="/icons/down-arrow.webp";const T=s=>(f("data-v-ca38bded"),s=s(),L(),s),D={class:"app__land"},O=T(()=>_("div",{class:"app__land__title"},[_("h1",{class:"app__land__title-name"},[v(" hello! \u{1F44B}\u{1F3FD} "),_("br"),v("I'm Olimpiu \u0218eulean ")]),_("div",{class:"app__land__title-typewriter"},[_("p",null,"and this website, is about me.")])],-1)),B={key:0,class:"app__land__bottom"},P=["src"],x={__name:"Land",setup(s){const c=w(!0);E(()=>window.addEventListener("scroll",r)),I(()=>window.removeEventListener("scroll",r));const r=()=>{(window==null?void 0:window.pageYOffset)>100?c.value=!1:c.value=!0},l=()=>{const a=document.getElementById("experience");!a||a.scrollIntoView({behavior:"smooth"})},i=()=>{gtag("event","Scroll Btn",{event_category:"Olimpiu Seulean Portfolio",event_label:"Scroll Down Button",value:1})},d=()=>{i(),l()};return(a,m)=>(p(),u("div",D,[O,c.value?(p(),u("div",B,[_("button",{class:"app__land__bottom-btn",onClick:d},[_("img",{src:o(A),class:"app__land__bottom-downIcon",alt:"Down_Icon_Image",width:"50",height:"50"},null,8,P)])])):b("",!0)]))}},S=h(x,[["__scopeId","data-v-ca38bded"]]),N={__name:"Main",setup(s){const c=t(()=>n(()=>import("./oli.portfolio-v3.1.17.js"),["oli.portfolio-v3.1.17.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.18.js","oli.portfolio-v3.1.1.js"])),r=t(()=>n(()=>import("./oli.portfolio-v3.1.19.js"),["oli.portfolio-v3.1.19.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.110.js","oli.portfolio-v3.1.1.js","oli.portfolio-v3.1.15.js"])),l=t(()=>n(()=>import("./oli.portfolio-v3.1.111.js"),["oli.portfolio-v3.1.111.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.1.js","oli.portfolio-v3.1.15.js","oli.portfolio-v3.1.13.js","oli.portfolio-v3.1.110.js"])),i=t(()=>n(()=>import("./oli.portfolio-v3.1.112.js"),["oli.portfolio-v3.1.112.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.110.js","oli.portfolio-v3.1.1.js","oli.portfolio-v3.1.15.js"])),d=t(()=>n(()=>import("./oli.portfolio-v3.1.113.js"),["oli.portfolio-v3.1.113.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.1.js"])),a=t(()=>n(()=>import("./oli.portfolio-v3.1.114.js"),["oli.portfolio-v3.1.114.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.1.js","oli.portfolio-v3.1.18.js"])),m=t(()=>n(()=>import("./oli.portfolio-v3.1.115.js"),["oli.portfolio-v3.1.115.js","oli.portfolio-v3.1.1.css","oli.portfolio-v3.1.1.js"]));return(y,k)=>(p(),u(V,null,[e(S),e(g),e(o(m)),e(o(c)),e(o(r)),e(o(l)),e(o(i)),e(o(d)),e(o(a))],64))}};export{N as default};