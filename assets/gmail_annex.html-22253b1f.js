import{_ as c,a as A,b as y,c as d}from"./Google-Settings-2.3-2c14aa8a.js";import{_ as D,r as l,o as u,c as B,d as n,a as s,w as e,b as a,f as p}from"./app-ac3cd0ad.js";const m={},E=s("h1",{id:"_5-4-anexo-i-configuraciones-gmail",tabindex:"-1"},"5.4 Anexo I - Configuraciones GMail",-1),v={class:"table-of-contents"},g=p(`<h2 id="_5-4-1-excepciones-comunes-al-usar-el-correo-de-gmail" tabindex="-1">5.4.1 Excepciones comunes al usar el correo de Gmail</h2><p>Al enviar un correo electrónico con cualquiera de los métodos anteriores, es posible que aparezcan las siguientes excepciones, incluso si las credenciales de Gmail son correctas.</p><div class="custom-container danger"><p class="custom-container-title">Seguridad de Google</p><p>Es importante comprobar la seguridad de tu cuenta. Cambia la siguiente configuración solo si estás absolutamente seguro de lo que estás haciendo.</p><p>No compartas ninguna de las contraseñas porque tu cuenta se puede usar sin tu permiso.</p></div><h3 id="_5-4-1-1-verificacion-en-dos-pasos" tabindex="-1">5.4.1.1 Verificación en dos pasos</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">Error</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> trying to send mail</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">534</span><span style="color:#39ADB5;">-</span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">9 Application</span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;">specific password required</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;"> Learn more at</span></span>
<span class="line"><span style="color:#F76D47;">534</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">9  https</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;font-style:italic;">//support.google.com/mail/?p=InvalidSecondFactor r10-20020a05600c458a00b003d35acb0fd7sm14828087wmo.34 - gsmtp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">AuthenticationFailedException</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">534</span><span style="color:#39ADB5;">-</span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">9 Application</span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;">specific password required</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;"> Learn more at</span></span>
<span class="line"><span style="color:#F76D47;">534</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">9  https</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;font-style:italic;">//support.google.com/mail/?p=InvalidSecondFactor r10-20020a05600c458a00b003d35acb0fd7sm14828087wmo.34 - gsmtp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport$Authenticator</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">authenticate</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">947</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">authenticate</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">858</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">protocolConnect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">762</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">364</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">222</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">171</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">send0</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">230</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">send</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">100</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La excepción (jakarta.mail.AuthenticationFailedException) habla de la contraseña específica de la aplicación requerida. Esto se debe a que su cuenta de Gmail está configurada para la verificación de 2 pasos, por lo que su contraseña directa de Gmail no funcionará aquí debido a razones de seguridad. Para rectificar esto, debe seguir los pasos a continuación.</p>`,6),_=s("li",null,"Inicia sesión con tu cuenta de Google",-1),f={href:"https://myaccount.google.com/?pli=1",target:"_blank",rel:"noopener noreferrer"},b=s("img",{src:c,alt:"Configuración de Google"},null,-1),h=p('<li>Haga clic en Seguridad en el menú de la izquierda.</li><li>Desplácese un poco hacia abajo para llegar a la sección &quot;Iniciar sesión en Google&quot;, probablemente la 3ª sección desde la parte superior.</li><li>Aquí puede ver que la verificación en 2 pasos está activada. <img src="'+y+'" alt="Configuración de Google"></li><li>Haga clic en Contraseñas de aplicaciones justo debajo de ella. Google le pedirá que vuelva a introducir la contraseña.</li><li>En la siguiente pantalla, debe seleccionar la Aplicación y el Dispositivo.</li><li>En el menú desplegable &quot;Seleccionar aplicación&quot;, simplemente seleccione Otro (Nombre personalizado).</li><li>Dé un nombre apropiado como &quot;Web&quot; y presione el botón Generar. <img src="'+d+'" alt="Configuración de Google"></li><li>Aparecerá una contraseña generada en la pantalla con una ventana emergente.</li><li>Guarde y use esta contraseña para todo su código de correo Java.</li>',9),F=p(`<h3 id="_5-4-1-2-aplicaciones-menos-seguras" tabindex="-1">5.4.1.2 Aplicaciones menos seguras</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">Error</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> trying to send mail</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">535</span><span style="color:#39ADB5;">-</span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">8 </span><span style="color:#9C3EDA;">Username</span><span style="color:#90A4AE;"> and </span><span style="color:#9C3EDA;">Password</span><span style="color:#90A4AE;"> not accepted</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;"> Learn more at</span></span>
<span class="line"><span style="color:#F76D47;">535</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">8  https</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;font-style:italic;">//support.google.com/mail/?p=BadCredentials o9-20020a05600c510900b003c6f8d30e40sm15602278wms.31 - gsmtp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">AuthenticationFailedException</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">535</span><span style="color:#39ADB5;">-</span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">8 </span><span style="color:#9C3EDA;">Username</span><span style="color:#90A4AE;"> and </span><span style="color:#9C3EDA;">Password</span><span style="color:#90A4AE;"> not accepted</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;"> Learn more at</span></span>
<span class="line"><span style="color:#F76D47;">535</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5.7</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">8  https</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;font-style:italic;">//support.google.com/mail/?p=BadCredentials o9-20020a05600c510900b003c6f8d30e40sm15602278wms.31 - gsmtp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport$Authenticator</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">authenticate</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">947</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">authenticate</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">858</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at com</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">sun</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">smtp</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">protocolConnect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">SMTPTransport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">762</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">364</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">222</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">connect</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Service</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">171</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">send0</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">230</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    at jakarta</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">mail</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">send</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Transport</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">java</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#F76D47;">100</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j=s("li",null,"Inicia sesión con tu cuenta de Google",-1),T={href:"https://www.google.com/settings/security/",target:"_blank",rel:"noopener noreferrer"},S=s("img",{src:c,alt:"Configuración de Google"},null,-1),x=s("li",null,"Haga clic en Seguridad en el menú de la izquierda.",-1),k=s("li",null,'Desplácese un poco hacia abajo para llegar a las "Aplicaciones menos seguras".',-1),C=s("li",null,[a("Lo encontrará desactivado. Ingrese a la sección para activarlo. "),s("img",{src:A,alt:"Configuración de Google"})],-1),G=s("li",null,"Guarde y use la contraseña de su cuenta para todo su código de correo Java.",-1);function q(w,P){const r=l("DownloadPDF-component"),i=l("DocumentCover-component"),o=l("router-link"),t=l("ExternalLinkIcon");return u(),B("div",null,[n(r),n(i,{titulo:"5.4 Anexo I - Configuraciones GMail"}),E,s("nav",v,[s("ul",null,[s("li",null,[n(o,{to:"#_5-4-1-excepciones-comunes-al-usar-el-correo-de-gmail"},{default:e(()=>[a("5.4.1 Excepciones comunes al usar el correo de Gmail")]),_:1}),s("ul",null,[s("li",null,[n(o,{to:"#_5-4-1-1-verificacion-en-dos-pasos"},{default:e(()=>[a("5.4.1.1 Verificación en dos pasos")]),_:1})]),s("li",null,[n(o,{to:"#_5-4-1-2-aplicaciones-menos-seguras"},{default:e(()=>[a("5.4.1.2 Aplicaciones menos seguras")]),_:1})])])])])]),g,s("ol",null,[_,s("li",null,[a("Vaya a su cuenta de Google o simplemente haga clic en el enlace "),s("a",f,[a("Configuración de seguridad de la cuenta de Google"),n(t)]),b]),h]),F,s("ol",null,[j,s("li",null,[a("Vaya a su cuenta de Google o simplemente haga clic en el enlace "),s("a",T,[a("Configuración de aplicaciones menos seguras de Google"),n(t)]),a(" para avanzar hasta el paso 5. "),S]),x,k,C,G])])}const L=D(m,[["render",q],["__file","gmail_annex.html.vue"]]);export{L as default};
