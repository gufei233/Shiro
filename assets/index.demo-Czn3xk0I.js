import{j as t}from"./index-DxLeZpHp.js";import{W as i,M as m,G as a}from"./Gallery-CapicdKf.js";import"./StyledButton-DQlb0OgE.js";import"./proxy-Dbmmtn7v.js";import"./image-atPSlLOM.js";import"./use-ref-value-DQrCLp6T.js";import"./owner-CQ2PmhEj.js";import"./index-D4TgdpoP.js";import"./viewport-DyTw4qvL.js";import"./use-is-unmounted-BCmdp-K_.js";const n=()=>Math.floor(Math.random()*255).toString(16).padStart(2,"0"),o=Array.from({length:10}).map((r,e)=>({src:`https://loremflickr.com/640/480/city?${e}`,height:480,width:640,type:"image",accent:`#${n()}`})),s=()=>t.jsx("div",{className:"inline-block overflow-hidden border border-accent",style:{width:"600px"},children:t.jsx(i,{children:t.jsx(m,{images:o,children:t.jsx(a,{images:o.map(r=>({...r,url:r.src,name:r.src,footnote:r.src}))})})})});s.meta={title:"Gallery",description:"Gallery component"};export{s as Demo1};