import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,d as o,a as e,w as n,e as u,f as p,r,b as t}from"./app.6f7d6c20.js";const g={},v=e("div",{class:"pagebreak"},null,-1),m=e("h1",{id:"psp",tabindex:"-1"},"PSP",-1),_={class:"table-of-contents"},h=t("Acerca de"),f=t("Segundo apartado"),b=t("Segundo apartado"),w=p(`<h2 id="acerca-de" tabindex="-1">Acerca de</h2><p>::: info <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: tip Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: warning Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: danger Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: question Chech your skills \xBFQu\xE9 pasar\xE1 ahora? :::</p><div class="pagebreak"></div><h2 id="segundo-apartado" tabindex="-1">Segundo apartado</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static void main() {
    return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: tip Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: warning Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: danger Aviso <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">&quot;Google&quot;</a> :::</p><p>::: question Chech your skills \xBFQu\xE9 pasar\xE1 ahora? :::</p><div class="pagebreak"></div><h2 id="segundo-apartado-1" tabindex="-1">Segundo apartado</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static void main() {
    return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div>`,18);function S(k,q){const i=r("DownloadPDF-component"),s=r("DocumentCover-component"),a=r("router-link");return d(),c("div",null,[v,o(i),o(s,{titulo:"PSP"}),m,e("nav",_,[e("ul",null,[e("li",null,[o(a,{to:"#acerca-de"},{default:n(()=>[h]),_:1})]),e("li",null,[o(a,{to:"#segundo-apartado"},{default:n(()=>[f]),_:1})]),e("li",null,[o(a,{to:"#segundo-apartado-1"},{default:n(()=>[b]),_:1})])])]),w,u(`
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
`)])}const C=l(g,[["render",S],["__file","test_page.html.vue"]]);export{C as default};
