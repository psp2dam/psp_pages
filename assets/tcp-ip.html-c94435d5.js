import{_ as l,a as d,b as p,c as u,d as m,e as v}from"./5-Graphic-UDP-Vs-TCP-be6b3666.js";import{_ as f,r as i,o as P,c as b,d as a,a as e,w as n,b as o,f as g}from"./app-900a6bbb.js";const _="/psp_pages/assets/tcp_vs_udp-8cd9c1c3.png",h={},q=e("h1",{id:"_4-1-pila-de-protocolos-tcp-ip",tabindex:"-1"},"4.1 Pila de protocolos TCP IP",-1),y={class:"table-of-contents"},C=e("h2",{id:"_4-1-1-las-capas-del-modelo-tcp-ip",tabindex:"-1"},"4.1.1. Las capas del modelo TCP/IP",-1),T=e("p",null,[o("La pila de protocolos TCP/IP, o los protocolos de internet, son un conjunto de "),e("code",null,"protocolos de comunicación"),o(" usados en la red Internet o en redes similares.")],-1),I=e("p",null,"TCP/IP son los protocolos más usados a nivel mundial. Son protocolos abiertos y por ese motivo permiten la comunicación entre máquinas usando diferentes plataformas de hardware y software. Estos protocolos funcionan tanto en redes de área extensa (WAN) como en redes de área local (LAN).",-1),k=e("p",null,[o("La pila de protocolos TCP/IP es, como hemos dicho, un conjunto de protocolos que reciben su nombre de los dos protocolos más importantes "),e("code",null,"Protocolo de Control de la Transmission(TCP)"),o(" and the "),e("code",null,"Protocolo de Internet(IP)"),o(". Además de estos protocolos, la pila TCP/IP incluye muchos otros protocolos de más alto nivel que facilitan la comunicación con aplicaciones como el email, transferencia de archivos, servidores web, etc.")],-1),x={class:"custom-container info"},E=e("p",{class:"custom-container-title"},"Documentos RFC",-1),L=e("p",null,[o("Cada protocolo de Internet, junto con sus correcciones y modificaciones posteriores, está descrito en un documento conocido como "),e("code",null,"Request For Comments (RFC)"),o(".")],-1),D={href:"http://www.ietf.org/rfc.html",target:"_blank",rel:"noopener noreferrer"},j=g('<p>Recibe el nombre de <strong>pila</strong> o <strong>stack</strong> porque está diseñado como una jerarquía de capas en las que cada capa da soporte a la capa que tiene por encima y utiliza los servicios de la capa que tiene por debajo. Cada capa está encargada de resolver un subconjunto de los problemas específicos que encontramos cuando queremos realizar una comunicación de datos entre equipos en una red.</p><p>El modelo TCP/IP está dividido en cuatro capas. De más bajo nivel a más alto tenemos la capa de enlace de datos (Link), la capa de red (internet), la capa de transporte y la capa de aplicación, tal y como podemos ver en la siguiente imagen.</p><p><img src="'+l+'" alt="TCP/IP real communication flow"></p><ul><li>La <strong>capa de enlace</strong> proporciona la comunicación entre dos interfaces o tarjetas de red dentro de una misma red local, con conexión directa o a través de uno o varios switches.</li><li>La <strong>capa de red</strong> proporciona comunicación entre dos interfaces de red o hosts. Estos hosts pueden estar en la misma red o en redes diferentes, siempre que estén interconectadas por uno o más routers. A cada interfaz de red se le asigna una dirección IP que identifica al equipo de forma unívoca. El protocolo IP es el más importante de esta capa y probablemente sea el más importante de toda la pila de protocolos.</li><li>La <strong>capa de transporte</strong> se encarga de proporcionar una comunicación punto a punto, permitiendo manejar múltiples transferencias de información de forma simultanea. El protocolo principal de esta capa es el protocolo <code>TCP</code>, que se encarga de proporcionar un servicio confiable y orientado a conexión. <code>UDP</code> por su parte proporciona un servicio más eficaz y rápido, pero lo hace de forma no fiable y no orientado a conexión.</li><li>La <strong>capa de aplicación</strong> proporciona servicios específicos de transmisión fiable para un tipo determinado de aplicación (transferencia de archivos, correo electrónico, gestión de red, configuración de red, etc.). Esta capa se encuentra unas veces dentro de las aplicaciones cliente que usamos para acceder a estos servicios y en otras ocasiones como servicios del propio SO. El interfaz entre los protocolos de la capa de aplicación y los protocolos de la capa de transporte se definen como <code>puertos </code> y <code>sockets</code>.</li></ul><p><img src="'+d+'" alt="TCP/IP logical communication flow"></p><h2 id="_4-1-2-direcciones-y-puertos-sockets" tabindex="-1">4.1.2. Direcciones y puertos - Sockets</h2><h3 id="direcciones-ip" tabindex="-1">Direcciones IP</h3><p>Cada host o equipo que está en una red TCP/IP tiene asignada na dirección IP única consistente en un número de red y un número de host. El número de red sirve para identificar la red en la que se encuentran los hosts. El número de host sirve para identificar a un host dentro de una red.</p><p>Las direcciones Ipv4 son direcciones de 32-bits. La dirección IP se agrupa en cuatro octetos o bytes (grupos de 8 bits) y se representan usando el valor en notación decimal de cada uno de los bytes, separados por puntos. El valor mínimo para cada octeto es 0 y el valor máximo es 255.</p><blockquote><p>192.168.0.100</p><p>127.0.0.1</p><p>10.1.100.1</p></blockquote><p>Las direcciones IPv6 está formadas por 64-bits para la dirección de red o prefijo de red, y otros 64 bits para el número de host. Las direcciones IPv6 se escriben como 8 grupos de 4 dígitos hexadecimales separados por el caracter &#39;:&#39;. Un grupo que sólo tiene ceros puede ser omitido. Los ceros iniciales también se pueden omitir</p><p>Todas estas direcciones serían equivalentes. Se les han aplicado diferentes reglas de reducción</p><blockquote><p>2001:0db8:0000:0000:0000:0000:1428:57ab</p><p>2001:0db8:0000:0000:0000::1428:57ab</p><p>2001:0db8:0:0:0:0:1428:57ab</p><p>2001:0db8:0:0::1428:57ab</p><p>2001:0db8::1428:57ab</p><p>2001:db8::1428:57ab</p></blockquote><p><img src="'+p+'" alt="Routing"></p><h3 id="puertos" tabindex="-1">Puertos</h3><p>Cuando una aplicación que se est´ejecutando en un equipo quiere comunicarse con otra aplicación de otro equipo, se identifica a sí misma con un número de 16 bits, que denominamos <code>puerto</code>. Ese identificador es usado por los protocolos de la capa de transporte (TCP or UDP) para entregar los mensajes a la aplicación correcta dentro del equipo.</p><p>Los puertos van de 0 a 65535, y se agrupan en tres rangos</p><table><thead><tr><th>Grupo de puertos</th><th>Rango de puertos</th><th>Descripción</th></tr></thead><tbody><tr><td>Puertos bien conocidos o puertos del sistema</td><td>0 - 1023</td><td>Los usan los protocolos estándar y los servicios del SO</td></tr><tr><td>Puertos registrados</td><td>1024- 49151</td><td>Reservados por empresas y organizaciones para sus propios servicios</td></tr><tr><td>Puertos efímeros</td><td>49152 - 65535</td><td>De libre disposición y uso para aplicaciones cliente y servidor</td></tr></tbody></table><p>Los servidores de protocolos estándar como Telnet y FTP usan uno o más de estos puertos bien conocidos. La mayoría de los servidores sólo utilizan un puerto aunque hay otros, como FTP, que usan dos. El uso de un puerto específico permite a las aplicaciones cliente el poder comunicarse con el servidor sin tener que enviar una petición previa para determinar qué puerto se está usando.</p><blockquote><p>Por ejemplo, las peticiones HTTP se envían por defecto al puerto 80 del servidor..</p></blockquote><p>Las aplicaciones cliente (navegadores, clientes de correo, etc) no necesitan usar uno de los puertos bien conocidos ya que son los que inician la comunicación. A los procesos cliente se les asigna un número de puerto de forma dinámica por parte del SO. Ese número está incluido en todos los datagramas que intercambia con el servidor, por lo tanto el servidor tiene acceso a esa información.</p><h3 id="sockets" tabindex="-1">Sockets</h3><p>Un <code>socket</code> es básicamente un punto final de conexión en una comunicación entre proceso y está formado por una combinación unica de <strong>dirección IP, puerto y protocolo de transporte (normalmente TCP)</strong>.</p><p>Cuando una aplicación cliente quiere comunicarse con un servidor, el SO crea el socket que usará el cliente para recibir la información del servidor. lA combinación única de Protocolo + puerto + IP permite que este extremo de la comunicación sea accesible desde el servidor, de manera inequívoca y asegura que los datos los recibe el proceso que los solicitó.</p><p>El servidor tiene su propio socket par comunicarse con el cliente, y una conexión establecida entre el cliente y el servidor usando los dos extremos (los dos sockets cliente &lt;--&gt; servidor. Las aplicaciones intercambian información escribiendo o leyendo en los sockets que han creado..</p><p>La conexión usada por un cliente está formada por dos sockets, uno en el lado del cliente y otro en el lado des servidor. Por lo tanto, la conexión puede identificarse con una tupla formada por cuatro número: la dirección IP de origen, la dirección IP de destino, el puerto de origen y el puerto de destino.</p><p>Esto permite que múltiples aplicaciones cliente ejecutándose en máquinas diferentes puedan conectarse al mismo socket de destino en el servidor. Tampoco hay confusión de a qué equipo se debe enviar un datagram de respuesta, incluso si el puerto de origen y destino es el mismo.</p><p>Usando sockets también es posible tener varias aplicaciones cliente corriendo en el mismo equipo y conectándose al mismo servidor (varias pestañas de un navegador). Los datagramas de respuesta enviados por el servidor al cliente contienen la información del socket en el lado del client, la cual incluye el puerto asignado individualmente a cada uno de los clientes, no pudiendo haber confusión sobre a qué proceso entregar la respuesta.</p><p><img src="'+u+'" alt="TCP/IP logical communication flow"></p><p>En una red, la comunicación real se realiza de una capa a la siguiente o a la anterior. Sin embargo, las aplicaciones de cada capa realizan una abstracción de las capas inferiores y ven su flujo de comunicación como una comunicación directa con la capa equivalente en el otro extremo de la conexión.</p><p>En la pila de protocolos TCP/IP se manejan diferentes elementos de información en cada nivel (frames, packets, datagramas, streams, messages, ...).</p><p><img src="'+m+'" alt="TCP/IP logical communication flow"></p><p>Como ya se ha citando anteriormente, los sockets son el puente entre la capa de transporte y la capa de aplicación. Este es el punto donde vamos a trabajar y desarrollar nuestras aplicaciones en este tema, ofreciendo servicios a los protocolos de la capa superior, la capa de aplicación.</p><h2 id="_4-1-3-tcp-vs-udp" tabindex="-1">4.1.3 TCP vs UDP</h2><p>El protocolo TCP que es el más utilizado en la navegación cotidiana. Es el más habitual por tratarse de un protocolo de transporte ‘orientado a conexión’. Esto quiere decir que el protocolo TCP está diseñado no solo para transmitir una determinada información entre un dispositivo y otro, sino también para verificar la correcta recepción de la información transmitida entre un dispositivo y otro, o, dicho de otro modo, es un protocolo para manejar conexiones de extremo a extremo.</p><p>El protocolo TCP establece una conexión entre el dispositivo emisor y el dispositivo receptor y verifica de forma continua la emisión y recepción de la información entre ambos. El protocolo TCP consigue esta verificación dividiendo los flujos de bytes en segmentos ordenados con un número de secuencia antes de transmitirlos a través del protocolo IP. Este número de secuencia es verificado por el dispositivo receptor y, en caso de que falte alguno de los segmentos, el protocolo TCP vuelve a solicitar su envío a través del protocolo IP, hasta que el mensaje llega en su totalidad al dispositivo receptor. Gracias a su fiabilidad, el protocolo TCP da soporte a los protocolos HTTP, SMTP, SSH y FTP.</p><p>El protocolo TCP ofrece los siguientes servicios :</p><ul><li>Comunicación Full duplex: los dos extremos pueden transmitir simultaneamente</li><li>Timing: Utiliza temporizadores para asegurar que los datos se transmiten de forma síncrona</li><li>Secuenciación: Los bloques se transmiten con un número de secuencia para que puedan ser reensamblados en el destino, en orden correcto, antes de pasarlos al protocolo de la capa de aplicación.</li><li>Control de flujo: Se encarga de gestionar el congestión y adaptar la velocidad de envío / recepción de bloques.</li><li>Gestión de errores: Usa comprobaciones checksum para detectar posibles errores en la transmisión de los datos y gestionar dichos errores.</li></ul><p><img src="'+v+'" alt="TCP/IP logical communication flow"></p><p>El protocolo UDP funciona de manera similar al protocolo TCP, pero no es un protocolo de transporte orientado a conexión. Esto quiere decir que el protocolo UDP no verifica la recepción de los datos transmitidos entre un dispositivo y otro. Por esto, se articula en un nivel de capa inferior al protocolo TCP, con lo que el sistema de verificación de la recepción de los datos debe implementarse en las capas superiores.</p><p>La principal ventaja del protocolo UDP consiste en su velocidad. Al prescindir de un sistema de verificación de ida y vuelta entre el dispositivo emisor y el dispositivo receptor, el protocolo UDP permite una velocidad de transferencia superior a la del protocolo TCP. Por esto, el protocolo UDP es el más utilizado por los servicios de transmisión de voz o vídeo en streaming, donde la velocidad de la transmisión es más importante que una posible pérdida de datos puntual.</p><p>Cabe destacar su uso especializado para transmisiones de tipo multicast y broadcast.</p><p><img src="'+_+'" alt="TCP/IP logical communication flow"></p>',43);function w(S,z){const r=i("DownloadPDF-component"),t=i("DocumentCover-component"),s=i("router-link"),c=i("ExternalLinkIcon");return P(),b("div",null,[a(r),a(t,{titulo:"4.1 Pila de protocolos TCP IP"}),q,e("nav",y,[e("ul",null,[e("li",null,[a(s,{to:"#_4-1-1-las-capas-del-modelo-tcp-ip"},{default:n(()=>[o("4.1.1. Las capas del modelo TCP/IP")]),_:1})]),e("li",null,[a(s,{to:"#_4-1-2-direcciones-y-puertos-sockets"},{default:n(()=>[o("4.1.2. Direcciones y puertos - Sockets")]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#direcciones-ip"},{default:n(()=>[o("Direcciones IP")]),_:1})]),e("li",null,[a(s,{to:"#puertos"},{default:n(()=>[o("Puertos")]),_:1})]),e("li",null,[a(s,{to:"#sockets"},{default:n(()=>[o("Sockets")]),_:1})])])]),e("li",null,[a(s,{to:"#_4-1-3-tcp-vs-udp"},{default:n(()=>[o("4.1.3 TCP vs UDP")]),_:1})])])]),C,T,I,k,e("div",x,[E,L,e("p",null,[o("Aquí se puede consultar la lista de los RFCs disponibles: "),e("a",D,[o("http://www.ietf.org/rfc.html"),a(c)]),o(".")])]),j])}const A=f(h,[["render",w],["__file","tcp-ip.html.vue"]]);export{A as default};
