import{_ as d,r as t,o as p,c as u,d as o,a as e,w as r,e as _,b as n,f as i}from"./app.108f91ed.js";const h={},g=e("div",{class:"pagebreak"},null,-1),m=e("h1",{id:"psp",tabindex:"-1"},"PSP",-1),v={class:"table-of-contents"},k=n("Acerca de"),f=n("Segundo apartado"),w=n("Segundo apartado"),b=e("h2",{id:"acerca-de",tabindex:"-1"},"Acerca de",-1),S=n("::: info "),P={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},R=n('"Google"'),C=n(" :::"),E={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"Aviso",-1),y={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},A=n('"Google"'),D={class:"custom-container warning"},j=e("p",{class:"custom-container-title"},"Aviso",-1),G={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},O=n('"Google"'),B={class:"custom-container danger"},q=e("p",{class:"custom-container-title"},"Aviso",-1),N={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},U=n('"Google"'),V=i(`<p>::: question Chech your skills \xBFQu\xE9 pasar\xE1 ahora? :::</p><div class="pagebreak"></div><h2 id="segundo-apartado" tabindex="-1">Segundo apartado</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),K=n("::: info "),I={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},F=n('"Google"'),L=n(" :::"),Q={class:"custom-container tip"},z=e("p",{class:"custom-container-title"},"Aviso",-1),T={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},H=n('"Google"'),J={class:"custom-container warning"},M=e("p",{class:"custom-container-title"},"Aviso",-1),W={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},X=n('"Google"'),Y={class:"custom-container danger"},Z=e("p",{class:"custom-container-title"},"Aviso",-1),$={href:"http://www.google.es",target:"_blank",rel:"noopener noreferrer"},ee=n('"Google"'),ne=i(`<p>::: question Chech your skills \xBFQu\xE9 pasar\xE1 ahora? :::</p><div class="pagebreak"></div><h2 id="segundo-apartado-1" tabindex="-1">Segundo apartado</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div>`,5);function oe(se,te){const c=t("DownloadPDF-component"),l=t("DocumentCover-component"),a=t("router-link"),s=t("ExternalLinkIcon");return p(),u("div",null,[g,o(c),o(l,{titulo:"PSP"}),m,e("nav",v,[e("ul",null,[e("li",null,[o(a,{to:"#acerca-de"},{default:r(()=>[k]),_:1})]),e("li",null,[o(a,{to:"#segundo-apartado"},{default:r(()=>[f]),_:1})]),e("li",null,[o(a,{to:"#segundo-apartado-1"},{default:r(()=>[w]),_:1})])])]),b,e("p",null,[S,e("a",P,[R,o(s)]),C]),e("div",E,[x,e("p",null,[e("a",y,[A,o(s)])])]),e("div",D,[j,e("p",null,[e("a",G,[O,o(s)])])]),e("div",B,[q,e("p",null,[e("a",N,[U,o(s)])])]),V,e("p",null,[K,e("a",I,[F,o(s)]),L]),e("div",Q,[z,e("p",null,[e("a",T,[H,o(s)])])]),e("div",J,[M,e("p",null,[e("a",W,[X,o(s)])])]),e("div",Y,[Z,e("p",null,[e("a",$,[ee,o(s)])])]),ne,_(`
## Diagrama de flujo
![diagrama de sequencia|, 20%](/media/puml_sequence_test.png)

\`\`\`puml {align="center", style="zoom:1"}
@startuml
skinparam handwritten true
title Protocolo validaci\xF3n user/passwd
header Prueba
footer Prueba
hide footbox
skinparam sequence {
ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
} 
note left of Cliente: El programa cliente lee por teclado\\nun usuario y una contrase\xF1a 
Cliente->Servidor: Usuario
Cliente->Servidor: Password
note right of Servidor: El programa servidor comprueba\\n- Si el usuario es "vicente"\\n     contesta "USEROK" \\nsino \\n    contesta "USERERROR"
note right of Servidor: El programa servidor comprueba\\n- Si el password es "psp"\\n     contesta "PASSOK" \\nsino \\n    contesta "PASSERROR"
Servidor->Cliente: USEROK \xF3 USERERROR
Servidor->Cliente: PASSOK \xF3 PASSERROR
note left of Cliente: El programa mostrar\xE1 un mensaje\\nen base a la informaci\xF3n recibida\\nIndicando si el usuario y la contrase\xF1a\\nenviadas han diso correctas o no
@enduml
\`\`\`
`)])}const re=d(h,[["render",oe],["__file","test_page.html.vue"]]);export{re as default};
