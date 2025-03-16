"use strict";(self.webpackChunkrmc_software_documentation=self.webpackChunkrmc_software_documentation||[]).push([[956],{1488:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(6540),r=i(9030),o=i(4848);const a=e=>{let{parentDocId:t,figKey:i}=e;const[a,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const e=(0,r.Ay)(`/counters/${t.replace(/\//g,"-")}.json`),n=await fetch(e);if(!n.ok)throw new Error(`Failed to load ${e}`);const o=await n.json();let a=null;Object.keys(o).forEach((e=>{o[e]?.figures?.[i]&&(a=o[e].figures[i])})),a?s(a):console.warn(`Figure key "${i}" not found`)}catch(e){console.error("Error loading counters:",e)}})()}),[i]),a?(0,o.jsxs)("span",{className:"figure-reference",children:["Figure ",a.figNumber]}):(0,o.jsx)("span",{children:"Loading..."})}},3900:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(6540),r=i(6916),o=i(6347),a=i(4848);const s=()=>{const[e,t]=(0,n.useState)([]),i=(0,o.zy)();if((0,n.useEffect)((()=>{const e=()=>{const e=(0,r.h)(i.pathname);t(e)};e();const n=()=>{e()};return window.addEventListener("citationsUpdated",n),()=>{window.removeEventListener("citationsUpdated",n)}}),[i.pathname]),console.log("# of citations: ",e.length),0===e.length)return null;const s=e=>{const{author:t,year:i,title:n,journal:r,booktitle:o,report:s,manual:l,institution:c,organization:d,location:h,volume:f,edition:p,pages:u,doi:m,url:b,publisher:g}=e;return(0,a.jsxs)(a.Fragment,{children:[(x=t,Array.isArray(x)?x.length>1?x.slice(0,-1).join(", ")+" & "+x[x.length-1]:x[0]:x)," (",i,"). ",(0,a.jsx)("em",{children:n}),".",r&&` ${r}`,o&&` In ${o}`,d&&` (${d})`,h&&`, ${h}`,f&&`, Vol. ${f}`,p&&`(${p})`,u&&`, pp. ${u}`,g&&` ${g}`,c&&` ${c}`,s&&` ${s}`,l&&` ${l}`,m&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)("a",{href:`https://doi.org/${m}`,target:"_blank",rel:"noopener noreferrer",children:["https://doi.org/",m]})]}),b&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:b})]})]});var x};return(0,a.jsx)("div",{className:"citation-footnote",children:(0,a.jsx)("ol",{children:e.sort(((e,t)=>e.number-t.number)).map((e=>(0,a.jsx)("li",{value:e.number,id:`footnote-${e.citationKey}`,children:s(e)},e.citationKey)))})})}},4577:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(6540),r=i(9030),o=i(4848);const a=e=>{let{parentDocId:t,figKey:i,src:a,alt:s,caption:l}=e;const[c,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const e=(0,r.Ay)(`/counters/${t.replace(/\//g,"-")}.json`);console.log("Fetching JSON from:",e);const n=await fetch(e);if(!n.ok)throw new Error(`Failed to load ${e}`);const o=await n.json();let a=null;Object.keys(o).forEach((e=>{o[e]?.figures?.[i]&&(a=o[e].figures[i])})),a?d(a):console.warn(`Figure key "${i}" not found`)}catch(e){console.error("Error loading counters:",e)}})()}),[t,i]),c?(0,o.jsxs)("figure",{className:"figure-container",children:[(0,o.jsx)("img",{src:(0,r.Ay)(a),alt:s,className:"figure-image"}),(0,o.jsxs)("figcaption",{className:"figure-caption",children:["Figure ",c.figNumber,": ",l]})]}):(0,o.jsx)("span",{children:"Loading..."})}},6916:(e,t,i)=>{i.d(t,{A:()=>l,h:()=>s});var n=i(6540),r=i(6347),o=i(4848);const a=new Map,s=e=>Array.from(a.get(e)?.values()||[]),l=e=>{let{citationKey:t,bibFile:i}=e;const[s,l]=(0,n.useState)("?"),c=(0,r.zy)();return(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch(i),n=(await e.json()).sort(((e,t)=>{const i=Array.isArray(e.author)?e.author[0]:e.author,n=Array.isArray(t.author)?t.author[0]:t.author;return i.localeCompare(n)})),r=n.findIndex((e=>e.citationKey===t));if(-1!==r){const e=r+1;l(e),a.has(c.pathname)||a.set(c.pathname,new Map);a.get(c.pathname).set(t,{...n[r],number:e}),window.dispatchEvent(new Event("citationsUpdated"))}}catch(e){console.error("Error fetching bibliography:",e)}})()}),[t,i,c.pathname]),(0,o.jsx)("span",{className:"citation-reference",children:(0,o.jsxs)("sup",{children:["[",s,"]"]})})}},7531:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>f,default:()=>b,frontMatter:()=>h,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"toolbox-technical-manuals/filter-evaluation-continuation/design-for-particle-retention","title":"design-for-particle-retention","description":"<NavAndPrint","source":"@site/docs/toolbox-technical-manuals/filter-evaluation-continuation/07-design-for-particle-retention.mdx","sourceDirName":"toolbox-technical-manuals/filter-evaluation-continuation","slug":"/toolbox-technical-manuals/filter-evaluation-continuation/design-for-particle-retention","permalink":"/RMC-Software-Documentation/docs/toolbox-technical-manuals/filter-evaluation-continuation/design-for-particle-retention","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742136282000,"sidebarPosition":7,"frontMatter":{},"sidebar":"filterEvaluationSidebar","previous":{"title":"Base Gradation","permalink":"/RMC-Software-Documentation/docs/toolbox-technical-manuals/filter-evaluation-continuation/base-gradation"},"next":{"title":"Foster and Fell","permalink":"/RMC-Software-Documentation/docs/toolbox-technical-manuals/filter-evaluation-continuation/foster-and-fell"}}');var r=i(4848),o=i(8453),a=i(4577),s=i(1488),l=i(6916),c=i(3900),d=i(8807);i(6289),i(9030);const h={},f="Design for Particle Retention",p={},u=[{value:"Base Soil Characterization",id:"base-soil-characterization",level:2},{value:"Filter Material Characterization",id:"filter-material-characterization",level:2},{value:"Particle Retention Criterion",id:"particle-retention-criterion",level:2}];function m(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{link:"internal-erosion-suite",linkTitle:"Internal Erosion Suite",reportName:"toolbox-technical-manuals/filter-evaluation-continuation",pdfFilename:"07-design-for-particle-retention.pdf"}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"design-for-particle-retention",children:"Design for Particle Retention"})}),"\n",(0,r.jsxs)(t.p,{children:["Modern filter design criteria for particle retention are based on providing a no-erosion condition. The no erosion condition occurs when a filter material is sufficiently fine to seal with no erosion,\r\nor practically no erosion, of the base material. This worksheet assesses the particle retention criterion for no erosion and helps to screen potential failure modes if no erosion is expected. If a filter\r\nfails the no-erosion screening, the other erosion boundaries using the Foster and Fell ",(0,r.jsx)(l.A,{citationKey:"FosterFell2001",bibFile:"/bibliographies/107-bib.json"})," method described in section 8 are\r\nevaluated to assess how much erosion is required for self-filtering to occur and whether it can be tolerated."]}),"\n",(0,r.jsx)(t.h2,{id:"base-soil-characterization",children:"Base Soil Characterization"}),"\n",(0,r.jsxs)(t.p,{children:["Step 1 characterizes the base soil. The fines content (",(0,r.jsx)(t.em,{children:"FC"}),"), or percent passing the No. 200 sieve size by weight, of the finest base soil after regrading (if applicable) is obtained from the Base\r\nGradation worksheet, where it is interpolated using a logarithmic scale for particle size and linear scale for percent passing. The base soil category (BSC) is assigned based on the ",(0,r.jsx)(t.em,{children:"FC"})," of the\r\nfinest base soil after regrading (if applicable). Use the drop-down list to select whether the base soil is non-dispersive or dispersive. ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"base-soil-characterization"}),"\r\nis an example of step 1."]}),"\n",(0,r.jsx)(a.A,{parentDocId:"107",docId:"07-design-for-particle-retention.mdx",figKey:"base-soil-characterization",src:"figures/toolbox-technical-manuals/filter-evaluation-continuation/figure19.png",alt:"Step 1 of Particle Retention worksheet: Base soil characterization.",caption:"Step 1 of Particle Retention worksheet: Base soil characterization."}),"\n",(0,r.jsx)(t.h2,{id:"filter-material-characterization",children:"Filter Material Characterization"}),"\n",(0,r.jsxs)(t.p,{children:["Step 2 characterizes the filter material. The coarsest ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," is obtained from the Filter Gradation worksheet, where it is interpolated using a logarithmic scale for particle size and linear\r\nscale for percent passing. ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"filter-material-characterization"})," is an example of step 2."]}),"\n",(0,r.jsx)(a.A,{parentDocId:"107",docId:"07-design-for-particle-retention.mdx",figKey:"filter-material-characterization",src:"figures/toolbox-technical-manuals/filter-evaluation-continuation/figure20.png",alt:"Step 2 of Particle Retention worksheet: Filter material characterization.",caption:"Step 2 of Particle Retention worksheet: Filter material characterization."}),"\n",(0,r.jsx)(t.h2,{id:"particle-retention-criterion",children:"Particle Retention Criterion"}),"\n",(0,r.jsxs)(t.p,{children:["Foster and Fell ",(0,r.jsx)(l.A,{citationKey:"FosterFell2001",bibFile:"/bibliographies/107-bib.json"})," and Sherard et al. ",(0,r.jsx)(l.A,{citationKey:"Sherard1984",bibFile:"/bibliographies/107-bib.json"})," show\r\nthat the measurable property of the filter that best defines its particle retention capability is the ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"})]})," of the filter (",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]}),"). Research also shows that the correlation\r\nbetween ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," and the ",(0,r.jsxs)(t.em,{children:["d",(0,r.jsx)("sub",{children:"85"})]})," of the base soil being protected by the filter (",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"85"}),"B"]}),") provides the best correlation for successful particle retention."]}),"\n",(0,r.jsxs)(t.p,{children:["Sherard and Dunnigan ",(0,r.jsx)(l.A,{citationKey:"Sherard1985",bibFile:"/bibliographies/107-bib.json"})," developed the No-Erosion Filter (NEF) test to find the ratio of ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," and ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"85"}),"B"]}),"\r\nthat establishes a no-erosion condition for non-dispersive base soils. Additional research by Foster and Fell ",(0,r.jsx)(l.A,{citationKey:"FosterFell2001",bibFile:"/bibliographies/107-bib.json"})," at the\r\nUniversity of New South Wales (UNSW) helped in developing the no erosion condition for dispersive base soils. The results of the NEF and UNSW tests were used to develop the modern filter design criteria\r\nfor particle retention in FEMA ",(0,r.jsx)(l.A,{citationKey:"FEMA2011",bibFile:"/bibliographies/107-bib.json"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Step 3 evaluates the no-erosion particle retention criterion by comparing the coarsest ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," to the maximum allowable ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," based on the BSC and knowing whether the base soil\r\nis non-dispersive or dispersive. The criteria are a function of ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"85"}),"B"]})," and ",(0,r.jsx)(t.em,{children:"FC"}),", as shown in ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"particle-retention-not-met"}),"\r\nand ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"particle-retention-met"}),". If the coarsest ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]})," is less than or equal to the maximum allowable ",(0,r.jsxs)(t.em,{children:["D",(0,r.jsx)("sub",{children:"15"}),"F"]}),", \u201cMeets\u201d displays next to the\r\ncalculation. If the criterion is not met, \u201cFails\u201d displays next to the calculation. A green background displays if the particle retention criterion is met, and an orange background displays if the\r\nparticle retention criterion is not met."]}),"\n",(0,r.jsxs)(t.p,{children:["Based on the particle retention criterion, a statement appears after the calculations indicating if the filter material satisfies the no-erosion particle retention criterion or is too coarse to satisfy\r\nthe no-erosion particle retention criterion. If the particle retention criterion for no erosion is not met, use the Foster and Fell ",(0,r.jsx)(l.A,{citationKey:"FosterFell2001",bibFile:"/bibliographies/107-bib.json"}),"\r\nmethod to further evaluate the effectiveness of the filter material for particle retention. ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"particle-retention-not-met"}),"\r\nand ",(0,r.jsx)(s.A,{parentDocId:"107",figKey:"particle-retention-met"})," are examples of the two possible scenarios for the no-erosion particle retention criterion."]}),"\n",(0,r.jsx)(a.A,{parentDocId:"107",docId:"07-design-for-particle-retention.mdx",figKey:"particle-retention-not-met",src:"/figures/toolbox-technical-manuals/filter-evaluation-continuation/figure21.png",alt:"Step 3 of Particle Retention worksheet: Particle retention criterion not met.",caption:"Step 3 of Particle Retention worksheet: Particle retention criterion not met."}),"\n",(0,r.jsx)(a.A,{parentDocId:"107",docId:"07-design-for-particle-retention.mdx",figKey:"particle-retention-met",src:"figures/toolbox-technical-manuals/filter-evaluation-continuation/figure22.png",alt:"Step 3 of Particle Retention worksheet: Particle retention criterion  met.",caption:"Step 3 of Particle Retention worksheet: Particle retention criterion  met."}),"\n",(0,r.jsx)(c.A,{})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},8807:(e,t,i)=>{i.d(t,{A:()=>s});i(6540);var n=i(9030),r=i(4848);const o=e=>{let{reportName:t,pdfFilename:i}=e;return(0,r.jsx)("button",{className:"download-pdf-button",onClick:()=>{const e=(0,n.Ay)(`/pdfs/${t}/${i}`),r=document.createElement("a");r.href=e,r.download=i,r.click(),console.log("Downloading PDF from:",e)},children:"\u2193 PDF"})};var a=i(6289);const s=e=>{let{link:t,linkTitle:i,reportName:n,pdfFilename:s}=e;return"none"===t?(0,r.jsx)("div",{className:"nav-and-print-container",children:(0,r.jsx)("div",{className:"print-to-pdf-container",children:(0,r.jsx)(o,{reportName:n,pdfFilename:s})})}):(0,r.jsxs)("div",{className:"nav-and-print-container",children:[(0,r.jsx)("div",{className:"nav-link",children:(0,r.jsxs)(a.A,{to:`/${t}`,children:["\u2190 ",i]})}),(0,r.jsx)("div",{className:"print-to-pdf-container",children:(0,r.jsx)(o,{reportName:n,pdfFilename:s})})]})}}}]);