import{_ as n,r as e,o as s,c,d as a,a as o,w as r,b as p,f as d}from"./app.1563ff16.js";const m={},_=o("h1",{id:"_5-1-ftp",tabindex:"-1"},"5.1 FTP",-1),u={class:"table-of-contents"},T=p("5.2.1 Apache Common Net FTP"),P=d('<h2 id="_5-2-1-apache-common-net-ftp" tabindex="-1">5.2.1 Apache Common Net FTP</h2><p>La librer\xEDa Apache Commons Net\u2122 library implementa la parte client de la mayor\xEDa de protocolos b\xE1sicos de Internet.</p><p>El prop\xF3sito de la biblioteca es proporcionar acceso b\xE1sico a las funcionalidad de los protocolos, no abstracciones de nivel superior. Por lo tanto, parte del dise\xF1o viola los principios de dise\xF1o orientado a objetos.</p><p>Nuestra filosof\xEDa es hacer que la funcionalidad global de un protocolo sea accesible (por ejemplo, archivo de env\xEDo TFTP y archivo de recepci\xF3n) cuando sea posible, pero tambi\xE9n proporcionar acceso a los protocolos b\xE1sicos cuando corresponda para que el programador pueda construir sus propias implementaciones personalizadas (por ejemplo, se exponen las clases de paquetes TFTP y los m\xE9todos de env\xEDo y recepci\xF3n de paquetes TFTP).</p><div class="custom-container tip"><p class="custom-container-title">Jakarta vs Java Mail</p><p>Los protocolos soportados son:</p><ul><li>FTP/FTPS</li><li>FTP over HTTP (experimental)</li><li>NNTP</li><li>SMTP(S)</li><li>POP3(S)</li><li>IMAP(S)</li><li>Telnet</li><li>TFTP</li><li>Finger</li><li>Whois</li><li>rexec/rcmd/rlogin</li><li>Time (rdate) and Daytime</li><li>Echo</li><li>Discard</li><li>NTP/SNTP</li></ul></div>',5);function h(f,b){const i=e("DownloadPDF-component"),t=e("DocumentCover-component"),l=e("router-link");return s(),c("div",null,[a(i),a(t,{titulo:"5.1 FTP"}),_,o("nav",u,[o("ul",null,[o("li",null,[a(l,{to:"#_5-2-1-apache-common-net-ftp"},{default:r(()=>[T]),_:1})])])]),P])}const F=n(m,[["render",h],["__file","ftp.html.vue"]]);export{F as default};