import{_ as d,a as l,b as p,c as u,d as m,e as v}from"./5-Graphic-UDP-Vs-TCP.ef6f7d46.js";import{_ as f,r as i,o as P,c as b,d as a,a as e,w as n,b as o,f as _}from"./app.6128d2f3.js";const g="/psp_pages/assets/tcp_vs_udp.8cd9c1c3.png",h={},q=e("h1",{id:"_4-1-pila-de-protocolos-tcp-ip",tabindex:"-1"},"4.1 Pila de protocolos TCP IP",-1),y={class:"table-of-contents"},C=o("4.1.1. Las capas del modelo TCP/IP"),T=o("4.1.2. Direcciones y puertos - Sockets"),I=o("Direcciones IP"),k=o("Puertos"),x=o("Sockets"),E=o("4.1.3 TCP vs UDP"),L=e("h2",{id:"_4-1-1-las-capas-del-modelo-tcp-ip",tabindex:"-1"},"4.1.1. Las capas del modelo TCP/IP",-1),D=e("p",null,[o("La pila de protocolos TCP/IP, o los protocolos de internet, son un conjunto de "),e("code",null,"protocolos de comunicaci\xF3n"),o(" usados en la red Internet o en redes similares.")],-1),j=e("p",null,"TCP/IP son los protocolos m\xE1s usados a nivel mundial. Son protocolos abiertos y por ese motivo permiten la comunicaci\xF3n entre m\xE1quinas usando diferentes plataformas de hardware y software. Estos protocolos funcionan tanto en redes de \xE1rea extensa (WAN) como en redes de \xE1rea local (LAN).",-1),w=e("p",null,[o("La pila de protocolos TCP/IP es, como hemos dicho, un conjunto de protocolos que reciben su nombre de los dos protocolos m\xE1s importantes "),e("code",null,"Protocolo de Control de la Transmission(TCP)"),o(" and the "),e("code",null,"Protocolo de Internet(IP)"),o(". Adem\xE1s de estos protocolos, la pila TCP/IP incluye muchos otros protocolos de m\xE1s alto nivel que facilitan la comunicaci\xF3n con aplicaciones como el email, transferencia de archivos, servidores web, etc.")],-1),S={class:"custom-container info"},z=e("p",{class:"custom-container-title"},"Documentos RFC",-1),U=e("p",null,[o("Cada protocolo de Internet, junto con sus correcciones y modificaciones posteriores, est\xE1 descrito en un documento conocido como "),e("code",null,"Request For Comments (RFC)"),o(".")],-1),F=o("Aqu\xED se puede consultar la lista de los RFCs disponibles: "),A={href:"http://www.ietf.org/rfc.html",target:"_blank",rel:"noopener noreferrer"},R=o("http://www.ietf.org/rfc.html"),N=o("."),O=_('<p>Recibe el nombre de <strong>pila</strong> o <strong>stack</strong> porque est\xE1 dise\xF1ado como una jerarqu\xEDa de capas en las que cada capa da soporte a la capa que tiene por encima y utiliza los servicios de la capa que tiene por debajo. Cada capa est\xE1 encargada de resolver un subconjunto de los problemas espec\xEDficos que encontramos cuando queremos realizar una comunicaci\xF3n de datos entre equipos en una red.</p><p>El modelo TCP/IP est\xE1 dividido en cuatro capas. De m\xE1s bajo nivel a m\xE1s alto tenemos la capa de enlace de datos (Link), la capa de red (internet), la capa de transporte y la capa de aplicaci\xF3n, tal y como podemos ver en la siguiente imagen.</p><p><img src="'+d+'" alt="TCP/IP real communication flow"></p><ul><li>La <strong>capa de enlace</strong> proporciona la comunicaci\xF3n entre dos interfaces o tarjetas de red dentro de una misma red local, con conexi\xF3n directa o a trav\xE9s de uno o varios switches.</li><li>La <strong>capa de red</strong> proporciona comunicaci\xF3n entre dos interfaces de red o hosts. Estos hosts pueden estar en la misma red o en redes diferentes, siempre que est\xE9n interconectadas por uno o m\xE1s routers. A cada interfaz de red se le asigna una direcci\xF3n IP que identifica al equipo de forma un\xEDvoca. El protocolo IP es el m\xE1s importante de esta capa y probablemente sea el m\xE1s importante de toda la pila de protocolos.</li><li>La <strong>capa de transporte</strong> se encarga de proporcionar una comunicaci\xF3n punto a punto, permitiendo manejar m\xFAltiples transferencias de informaci\xF3n de forma simultanea. El protocolo principal de esta capa es el protocolo <code>TCP</code>, que se encarga de proporcionar un servicio confiable y orientado a conexi\xF3n. <code>UDP</code> por su parte proporciona un servicio m\xE1s eficaz y r\xE1pido, pero lo hace de forma no fiable y no orientado a conexi\xF3n.</li><li>La <strong>capa de aplicaci\xF3n</strong> proporciona servicios espec\xEDficos de transmisi\xF3n fiable para un tipo determinado de aplicaci\xF3n (transferencia de archivos, correo electr\xF3nico, gesti\xF3n de red, configuraci\xF3n de red, etc.). Esta capa se encuentra unas veces dentro de las aplicaciones cliente que usamos para acceder a estos servicios y en otras ocasiones como servicios del propio SO. El interfaz entre los protocolos de la capa de aplicaci\xF3n y los protocolos de la capa de transporte se definen como <code>puertos </code> y <code>sockets</code>.</li></ul><p><img src="'+l+'" alt="TCP/IP logical communication flow"></p><h2 id="_4-1-2-direcciones-y-puertos-sockets" tabindex="-1">4.1.2. Direcciones y puertos - Sockets</h2><h3 id="direcciones-ip" tabindex="-1">Direcciones IP</h3><p>Cada host o equipo que est\xE1 en una red TCP/IP tiene asignada na direcci\xF3n IP \xFAnica consistente en un n\xFAmero de red y un n\xFAmero de host. El n\xFAmero de red sirve para identificar la red en la que se encuentran los hosts. El n\xFAmero de host sirve para identificar a un host dentro de una red.</p><p>Las direcciones Ipv4 son direcciones de 32-bits. La direcci\xF3n IP se agrupa en cuatro octetos o bytes (grupos de 8 bits) y se representan usando el valor en notaci\xF3n decimal de cada uno de los bytes, separados por puntos. El valor m\xEDnimo para cada octeto es 0 y el valor m\xE1ximo es 255.</p><blockquote><p>192.168.0.100</p><p>127.0.0.1</p><p>10.1.100.1</p></blockquote><p>Las direcciones IPv6 est\xE1 formadas por 64-bits para la direcci\xF3n de red o prefijo de red, y otros 64 bits para el n\xFAmero de host. Las direcciones IPv6 se escriben como 8 grupos de 4 d\xEDgitos hexadecimales separados por el caracter &#39;:&#39;. Un grupo que s\xF3lo tiene ceros puede ser omitido. Los ceros iniciales tambi\xE9n se pueden omitir</p><p>Todas estas direcciones ser\xEDan equivalentes. Se les han aplicado diferentes reglas de reducci\xF3n</p><blockquote><p>2001:0db8:0000:0000:0000:0000:1428:57ab</p><p>2001:0db8:0000:0000:0000::1428:57ab</p><p>2001:0db8:0:0:0:0:1428:57ab</p><p>2001:0db8:0:0::1428:57ab</p><p>2001:0db8::1428:57ab</p><p>2001:db8::1428:57ab</p></blockquote><p><img src="'+p+'" alt="Routing"></p><h3 id="puertos" tabindex="-1">Puertos</h3><p>Cuando una aplicaci\xF3n que se est\xB4ejecutando en un equipo quiere comunicarse con otra aplicaci\xF3n de otro equipo, se identifica a s\xED misma con un n\xFAmero de 16 bits, que denominamos <code>puerto</code>. Ese identificador es usado por los protocolos de la capa de transporte (TCP or UDP) para entregar los mensajes a la aplicaci\xF3n correcta dentro del equipo.</p><p>Los puertos van de 0 a 65535, y se agrupan en tres rangos</p><table><thead><tr><th>Grupo de puertos</th><th>Rango de puertos</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>Puertos bien conocidos o puertos del sistema</td><td>0 - 1023</td><td>Los usan los protocolos est\xE1ndar y los servicios del SO</td></tr><tr><td>Puertos registrados</td><td>1024- 49151</td><td>Reservados por empresas y organizaciones para sus propios servicios</td></tr><tr><td>Puertos ef\xEDmeros</td><td>49152 - 65535</td><td>De libre disposici\xF3n y uso para aplicaciones cliente y servidor</td></tr></tbody></table><p>Los servidores de protocolos est\xE1ndar como Telnet y FTP usan uno o m\xE1s de estos puertos bien conocidos. La mayor\xEDa de los servidores s\xF3lo utilizan un puerto aunque hay otros, como FTP, que usan dos. El uso de un puerto espec\xEDfico permite a las aplicaciones cliente el poder comunicarse con el servidor sin tener que enviar una petici\xF3n previa para determinar qu\xE9 puerto se est\xE1 usando.</p><blockquote><p>Por ejemplo, las peticiones HTTP se env\xEDan por defecto al puerto 80 del servidor..</p></blockquote><p>Las aplicaciones cliente (navegadores, clientes de correo, etc) no necesitan usar uno de los puertos bien conocidos ya que son los que inician la comunicaci\xF3n. A los procesos cliente se les asigna un n\xFAmero de puerto de forma din\xE1mica por parte del SO. Ese n\xFAmero est\xE1 incluido en todos los datagramas que intercambia con el servidor, por lo tanto el servidor tiene acceso a esa informaci\xF3n.</p><h3 id="sockets" tabindex="-1">Sockets</h3><p>Un <code>socket</code> es b\xE1sicamente un punto final de conexi\xF3n en una comunicaci\xF3n entre proceso y est\xE1 formado por una combinaci\xF3n unica de <strong>direcci\xF3n IP, puerto y protocolo de transporte (normalmente TCP)</strong>.</p><p>Cuando una aplicaci\xF3n cliente quiere comunicarse con un servidor, el SO crea el socket que usar\xE1 el cliente para recibir la informaci\xF3n del servidor. lA combinaci\xF3n \xFAnica de Protocolo + puerto + IP permite que este extremo de la comunicaci\xF3n sea accesible desde el servidor, de manera inequ\xEDvoca y asegura que los datos los recibe el proceso que los solicit\xF3.</p><p>El servidor tiene su propio socket par comunicarse con el cliente, y una conexi\xF3n establecida entre el cliente y el servidor usando los dos extremos (los dos sockets cliente &lt;--&gt; servidor. Las aplicaciones intercambian informaci\xF3n escribiendo o leyendo en los sockets que han creado..</p><p>La conexi\xF3n usada por un cliente est\xE1 formada por dos sockets, uno en el lado del cliente y otro en el lado des servidor. Por lo tanto, la conexi\xF3n puede identificarse con una tupla formada por cuatro n\xFAmero: la direcci\xF3n IP de origen, la direcci\xF3n IP de destino, el puerto de origen y el puerto de destino.</p><p>Esto permite que m\xFAltiples aplicaciones cliente ejecut\xE1ndose en m\xE1quinas diferentes puedan conectarse al mismo socket de destino en el servidor. Tampoco hay confusi\xF3n de a qu\xE9 equipo se debe enviar un datagram de respuesta, incluso si el puerto de origen y destino es el mismo.</p><p>Usando sockets tambi\xE9n es posible tener varias aplicaciones cliente corriendo en el mismo equipo y conect\xE1ndose al mismo servidor (varias pesta\xF1as de un navegador). Los datagramas de respuesta enviados por el servidor al cliente contienen la informaci\xF3n del socket en el lado del client, la cual incluye el puerto asignado individualmente a cada uno de los clientes, no pudiendo haber confusi\xF3n sobre a qu\xE9 proceso entregar la respuesta.</p><p><img src="'+u+'" alt="TCP/IP logical communication flow"></p><p>En una red, la comunicaci\xF3n real se realiza de una capa a la siguiente o a la anterior. Sin embargo, las aplicaciones de cada capa realizan una abstracci\xF3n de las capas inferiores y ven su flujo de comunicaci\xF3n como una comunicaci\xF3n directa con la capa equivalente en el otro extremo de la conexi\xF3n.</p><p>En la pila de protocolos TCP/IP se manejan diferentes elementos de informaci\xF3n en cada nivel (frames, packets, datagramas, streams, messages, ...).</p><p><img src="'+m+'" alt="TCP/IP logical communication flow"></p><p>Como ya se ha citando anteriormente, los sockets son el puente entre la capa de transporte y la capa de aplicaci\xF3n. Este es el punto donde vamos a trabajar y desarrollar nuestras aplicaciones en este tema, ofreciendo servicios a los protocolos de la capa superior, la capa de aplicaci\xF3n.</p><h2 id="_4-1-3-tcp-vs-udp" tabindex="-1">4.1.3 TCP vs UDP</h2><p>El protocolo TCP que es el m\xE1s utilizado en la navegaci\xF3n cotidiana. Es el m\xE1s habitual por tratarse de un protocolo de transporte \u2018orientado a conexi\xF3n\u2019. Esto quiere decir que el protocolo TCP est\xE1 dise\xF1ado no solo para transmitir una determinada informaci\xF3n entre un dispositivo y otro, sino tambi\xE9n para verificar la correcta recepci\xF3n de la informaci\xF3n transmitida entre un dispositivo y otro, o, dicho de otro modo, es un protocolo para manejar conexiones de extremo a extremo.</p><p>El protocolo TCP establece una conexi\xF3n entre el dispositivo emisor y el dispositivo receptor y verifica de forma continua la emisi\xF3n y recepci\xF3n de la informaci\xF3n entre ambos. El protocolo TCP consigue esta verificaci\xF3n dividiendo los flujos de bytes en segmentos ordenados con un n\xFAmero de secuencia antes de transmitirlos a trav\xE9s del protocolo IP. Este n\xFAmero de secuencia es verificado por el dispositivo receptor y, en caso de que falte alguno de los segmentos, el protocolo TCP vuelve a solicitar su env\xEDo a trav\xE9s del protocolo IP, hasta que el mensaje llega en su totalidad al dispositivo receptor. Gracias a su fiabilidad, el protocolo TCP da soporte a los protocolos HTTP, SMTP, SSH y FTP.</p><p>El protocolo TCP ofrece los siguientes servicios :</p><ul><li>Comunicaci\xF3n Full duplex: los dos extremos pueden transmitir simultaneamente</li><li>Timing: Utiliza temporizadores para asegurar que los datos se transmiten de forma s\xEDncrona</li><li>Secuenciaci\xF3n: Los bloques se transmiten con un n\xFAmero de secuencia para que puedan ser reensamblados en el destino, en orden correcto, antes de pasarlos al protocolo de la capa de aplicaci\xF3n.</li><li>Control de flujo: Se encarga de gestionar el congesti\xF3n y adaptar la velocidad de env\xEDo / recepci\xF3n de bloques.</li><li>Gesti\xF3n de errores: Usa comprobaciones checksum para detectar posibles errores en la transmisi\xF3n de los datos y gestionar dichos errores.</li></ul><p><img src="'+v+'" alt="TCP/IP logical communication flow"></p><p>El protocolo UDP funciona de manera similar al protocolo TCP, pero no es un protocolo de transporte orientado a conexi\xF3n. Esto quiere decir que el protocolo UDP no verifica la recepci\xF3n de los datos transmitidos entre un dispositivo y otro. Por esto, se articula en un nivel de capa inferior al protocolo TCP, con lo que el sistema de verificaci\xF3n de la recepci\xF3n de los datos debe implementarse en las capas superiores.</p><p>La principal ventaja del protocolo UDP consiste en su velocidad. Al prescindir de un sistema de verificaci\xF3n de ida y vuelta entre el dispositivo emisor y el dispositivo receptor, el protocolo UDP permite una velocidad de transferencia superior a la del protocolo TCP. Por esto, el protocolo UDP es el m\xE1s utilizado por los servicios de transmisi\xF3n de voz o v\xEDdeo en streaming, donde la velocidad de la transmisi\xF3n es m\xE1s importante que una posible p\xE9rdida de datos puntual.</p><p>Cabe destacar su uso especializado para transmisiones de tipo multicast y broadcast.</p><p><img src="'+g+'" alt="TCP/IP logical communication flow"></p>',43);function V(B,G){const r=i("DownloadPDF-component"),t=i("DocumentCover-component"),s=i("router-link"),c=i("ExternalLinkIcon");return P(),b("div",null,[a(r),a(t,{titulo:"4.1 Pila de protocolos TCP IP"}),q,e("nav",y,[e("ul",null,[e("li",null,[a(s,{to:"#_4-1-1-las-capas-del-modelo-tcp-ip"},{default:n(()=>[C]),_:1})]),e("li",null,[a(s,{to:"#_4-1-2-direcciones-y-puertos-sockets"},{default:n(()=>[T]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#direcciones-ip"},{default:n(()=>[I]),_:1})]),e("li",null,[a(s,{to:"#puertos"},{default:n(()=>[k]),_:1})]),e("li",null,[a(s,{to:"#sockets"},{default:n(()=>[x]),_:1})])])]),e("li",null,[a(s,{to:"#_4-1-3-tcp-vs-udp"},{default:n(()=>[E]),_:1})])])]),L,D,j,w,e("div",S,[z,U,e("p",null,[F,e("a",A,[R,a(c)]),N])]),O])}const W=f(h,[["render",V],["__file","tcp-ip.html.vue"]]);export{W as default};
