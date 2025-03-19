"use strict";(self.webpackChunkrmc_software_documentation=self.webpackChunkrmc_software_documentation||[]).push([[938],{8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}},8807:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var o=t(9030),a=t(4848);const r=e=>{let{reportName:n,pdfFilename:t}=e;const r=(0,o.Ay)(`pdfs/${n}/${t}`);return(0,a.jsx)("button",{className:"download-pdf-button",onClick:()=>{const e=document.createElement("a");e.href=r,e.download=t,e.click(),console.log("Downloading PDF from:",r)},children:"\u2193 PDF"})};var i=t(6289);const s=e=>{let{link:n,linkTitle:t,reportName:o,pdfFilename:s}=e;return"none"===n?(0,a.jsx)("div",{className:"nav-and-print-container",children:(0,a.jsx)("div",{className:"print-to-pdf-container",children:(0,a.jsx)(r,{reportName:o,pdfFilename:s})})}):(0,a.jsxs)("div",{className:"nav-and-print-container",children:[(0,a.jsx)("div",{className:"nav-link",children:(0,a.jsxs)(i.A,{to:`/${n}`,children:["\u2190 ",t]})}),(0,a.jsx)("div",{className:"print-to-pdf-container",children:(0,a.jsx)(r,{reportName:o,pdfFilename:s})})]})}},9621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"toolbox-technical-manuals/filter-evaluation-continuation/appendix-acronyms","title":"appendix-acronyms","description":"<NavAndPrint","source":"@site/docs/toolbox-technical-manuals/filter-evaluation-continuation/13-appendix-acronyms.mdx","sourceDirName":"toolbox-technical-manuals/filter-evaluation-continuation","slug":"/toolbox-technical-manuals/filter-evaluation-continuation/appendix-acronyms","permalink":"/RMC-Software-Documentation/docs/toolbox-technical-manuals/filter-evaluation-continuation/appendix-acronyms","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742135725000,"sidebarPosition":13,"frontMatter":{},"sidebar":"filterEvaluationSidebar","previous":{"title":"References","permalink":"/RMC-Software-Documentation/docs/toolbox-technical-manuals/filter-evaluation-continuation/references"}}');var a=t(4848),r=t(8453),i=t(6540),s=t(9030);const c=e=>{let{parentDocId:n,tableKey:t,headers:o,columns:r}=e;const[c,l]=(0,i.useState)(null),d=(0,s.Ay)(`counters/${n.replace(/\//g,"-")}.json`);if((0,i.useEffect)((()=>{(async()=>{try{const e=await fetch(d);if(!e.ok)throw new Error(`Failed to load ${d}`);const n=await e.json();let o=null;Object.keys(n).forEach((e=>{n[e]?.tables?.[t]&&(o=n[e].tables[t])})),o?l(o):console.warn(`Table key "${t}" not found`)}catch(e){console.error("Error loading counters:",e)}})()}),[n,t]),!c)return(0,a.jsx)("span",{children:"Loading..."});const u=r.length>0?r[0].length:0;return(0,a.jsx)("div",{className:"table-container",children:(0,a.jsxs)("table",{className:"static-table-vertical",children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:o.map(((e,n)=>(0,a.jsx)("th",{children:e},n)))})}),(0,a.jsx)("tbody",{children:Array.from({length:u}).map(((e,n)=>(0,a.jsx)("tr",{children:r.map(((e,t)=>(0,a.jsx)("td",{children:e[n]||""},t)))},n)))})]})})};var l=t(8807);t(6289);const d={},u="Appendix A - Acronyms",m={},p=[];function f(e){const n={h1:"h1",header:"header",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{link:"internal-erosion-suite",linkTitle:"Internal Erosion Suite",reportName:"toolbox-technical-manuals/filter-evaluation-continuation",pdfFilename:"13-appendix-acronyms.pdf"}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"appendix-a---acronyms",children:"Appendix A - Acronyms"})}),"\n",(0,a.jsx)(c,{parentDocId:"107",tableKey:"acronyms",headers:["Acronym","Full Form"],columns:[["BSC","CE","CEF","CPD","EE","FC","FEMA","fm","HEC","HW","IWR","JOS","NAVD88","NE","NEF","NGVD29","NRCS","QC","RMC","SE","UDF","UNSW","U.S.","USACE","USBR","USDA"],["Base Soil Category","Continuing Erosion","Continuing Erosion Filter","Computer Program Document","Excessive Erosion","Fines Content","Federal Emergency Management Agency","Fine-to-Medium","Hydrologic Engineering Center","Headwater","Institute for Water Resources","Joint Opening Size","North American Vertical Datum of 1988","No Erosion","No Erosion Filter","National Geodetic Vertical Datum of 1929","Natural Resource Conservation Center","Quality Control","Risk Management Center","Some Erosion","User-Defined Function","University of New South Wales","United States","United States Army Corps of Engineers","United States Bureau of Reclamation","United States Department of Agriculture"]],alt:"Acronyms",caption:"Acronyms"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);