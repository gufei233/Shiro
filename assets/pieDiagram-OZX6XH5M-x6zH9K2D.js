import{p as B}from"./chunk-OQCM5LHU-XdyzRL2X.js";import{D as U,p as j,q,s as K,g as V,c as Z,b as H,_ as i,l as D,r as J,d as Q,E as X,I as Y,K as tt,j as et}from"./mermaid.core-DfuKUWmX.js";import{p as at}from"./gitGraph-YCYPL57B-C5jxMWc-.js";import"./isEmpty-CPJeZ-IN.js";import{o as rt}from"./ordinal-Cboi1Yqb.js";import{d as z}from"./arc-B-_Nkfdy.js";import{d as it}from"./pie-ClI-W486.js";import"./index-CcwMqIYS.js";import"./owner-CIkReF8N.js";import"./StyledButton-DWGw4U0m.js";import"./proxy-Bj7KJYuP.js";import"./line-DIkzZjhL.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-25dB_poh.js";import"./_basePickBy-BvU9RMSZ.js";import"./clone-D4mtdAug.js";import"./init-Gi6I4Gst.js";var F=U.pie,C={sections:new Map,showData:!1,config:F},u=C.sections,w=C.showData,ot=structuredClone(F),st=i(()=>structuredClone(ot),"getConfig"),nt=i(()=>{u=new Map,w=C.showData,J()},"clear"),lt=i(({label:t,value:e})=>{u.has(t)||(u.set(t,e),D.debug(`added new section: ${t}, with value: ${e}`))},"addSection"),ct=i(()=>u,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),G={getConfig:st,clear:nt,setDiagramTitle:j,getDiagramTitle:q,setAccTitle:K,getAccTitle:V,setAccDescription:Z,getAccDescription:H,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,e)=>{B(t,e),e.setShowData(t.showData),t.sections.map(e.addSection)},"populateDb"),mt={parse:i(async t=>{const e=await at("pie",t);D.debug(e),gt(e,G)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),ut=ft,ht=i(t=>{const e=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,n)=>n.value-o.value);return it().value(o=>o.value)(e)},"createPieArcs"),St=i((t,e,W,o)=>{D.debug(`rendering pie chart
`+t);const n=o.db,y=Q(),T=X(n.getConfig(),y.pie),$=40,s=18,d=4,l=450,h=l,S=Y(e),c=S.append("g");c.attr("transform","translate("+h/2+","+l/2+")");const{themeVariables:a}=y;let[A]=tt(a.pieOuterStrokeWidth);A??=2;const _=T.textPosition,g=Math.min(h,l)/2-$,I=z().innerRadius(0).outerRadius(g),M=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=ht(E),O=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],p=rt(O);c.selectAll("mySlices").data(v).enter().append("path").attr("d",I).attr("fill",r=>p(r.data.label)).attr("class","pieCircle");let b=0;E.forEach(r=>{b+=r}),c.selectAll("mySlices").data(v).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+M.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(r,m)=>{const f=s+d,R=f*p.domain().length/2,L=12*s,N=m*f-R;return"translate("+L+","+N+")"});x.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",s+d).attr("y",s-d).text(r=>{const{label:m,value:f}=r.data;return n.getShowData()?`${m} [${f}]`:m});const P=Math.max(...x.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),k=h+$+s+d+P;S.attr("viewBox",`0 0 ${k} ${l}`),et(S,l,k,T.useMaxWidth)},"draw"),vt={draw:St},Ot={parser:mt,db:G,renderer:vt,styles:ut};export{Ot as diagram};
