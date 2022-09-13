import{_ as d}from"./VM_Options.cfaf4215.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as v,c as S,d as a,a as e,w as i,f as m,r as t,b as r}from"./app.6f7d6c20.js";const p={},b=e("h1",{id:"_6-5-comunicaciones-seguras-en-java",tabindex:"-1"},"6.5 Comunicaciones seguras en Java",-1),g={class:"table-of-contents"},f=r("6.5.1. Protocolo SSL (Secure Sockets Layer)"),y=r("6.5.2. JSSE"),h=r("SSLSocket y SSLServerSocket"),k=r("keytool: certificados, confianza y almacenes de claves"),q=r("6.5.3. Servidor y Cliente SSL"),E=m(`<h2 id="_6-5-1-protocolo-ssl-secure-sockets-layer" tabindex="-1">6.5.1. Protocolo SSL (Secure Sockets Layer)</h2><p>SSL es el protocolo habitualmente usado para encriptar la comunicaci\xF3n cliente-servidor. Casi todo el tr\xE1fico de la red puede encriptarse con SSL: POP, IMAP, telnet, FTP, etc, pero es especialmente interesante para dotar de seguridad al protocolo HTTP, es decir como base del HTTPS.</p><p>La implementaci\xF3n de SSL es una extensi\xF3n de los sockets que permite establecer un canal (stream) de comunicaci\xF3n. Dicha comunicaci\xF3n se inicia con un <strong>handshake</strong> durante el cual, el cliente y el servidor construyen una session-key (clave sim\xE9trica encriptada con par de claves asim\xE9tricas) compartida para verificar su identidad mutua.</p><h2 id="_6-5-2-jsse" tabindex="-1">6.5.2. JSSE</h2><p>JSSE (Java Secure Socket Extension) es un conjunto de paquetes que permiten el desarrollo de aplicaciones seguras en Internet. Proporciona un marco y una implementaci\xF3n para Java de los protocolos SSL y TSL e incluye funcionalidad de</p><ul><li>encriptaci\xF3n de datos</li><li>autenticaci\xF3n de servidores</li><li>integridad de mensajes</li><li>autenticaci\xF3n de clientes</li></ul><p>Con JSSE, los programadores pueden ofrecer intercambio seguro de datos entre un cliente y un servidor que ejecuta un protocolo de aplicaci\xF3n, tales como HTTP, Telnet o FTP, a trav\xE9s de TCP/IP.</p><p>Las clases de JSSE se encuentran en los paquetes javax.net y javax.net.ssl.</p><h3 id="sslsocket-y-sslserversocket" tabindex="-1">SSLSocket y SSLServerSocket</h3><p>Las clases SSLSocket y SSLServerSocket representan sockets seguros y son derivadas de las ya conocidas Socket y ServerSocket respectivamente.</p><p>JSSE tiene dos clases SSLServerSocketFactory y SSLSocketFactory para la creaci\xF3n de sockets seguros. No tienen constructor, se obtienen a trav\xE9s del m\xE9todo est\xE1tico getDefault().</p><p>Para obtener un socket servidor seguro o <em>SSLServerSocket</em>:</p><div class="language-java ext-java"><pre class="language-java"><code>SSLServerSocketFactory sfact = (SSLServerSocketFactory) SSLServerSocketFactory.getDefault();
SSLServerSocket servidorSSL = (SSLServerSocket) = sfact.createServerSocket(puerto);
</code></pre></div><p>El m\xE9todo <strong>createServerSocket(int puerto)</strong> devuelve un socket de servidor enlazado al puerto especificado.</p><p>Para crear un <em>SSLSocket</em>:</p><div class="language-java ext-java"><pre class="language-java"><code>SSLSocketFactory sfact = (SSLSocketFactory) SSLSocketFactory.getDefault();
SSLSocket Cliente = (SSLSocket) sfact.createSocket(Host, puerto);
</code></pre></div><p>El m\xE9todo createSocket (String host, int puerto) crea un socket y lo conecta con el host y el puerto especificados.</p><h3 id="keytool-certificados-confianza-y-almacenes-de-claves" tabindex="-1">keytool: certificados, confianza y almacenes de claves</h3><p>Cuando dos socket SSL, uno cliente y otro servidor, intentan establecer conexi\xF3n, tienen que &quot;presentarse&quot; el uno al otro y comprobar que el otro es de confianza. Si todo va bien y uno conf\xEDa en l otro, la conexi\xF3n se establece, en caso contrario, no se establece.</p><p>Para establecer esa confianza se debe crear un certificado en el servidor y a\xF1adirlo a los certificados de confianza del cliente.</p><ul><li>El servidor debe tener su propio certificado. Si no lo tenemos, se puede generar primero una pareja de claves con la herramienta <strong>keytool</strong>, que viene incluida en el JDK de Java. La herramienta guardar\xE1 la pareja de claves en un almac\xE9n (el cual tiene su propia clave).</li><li>Despu\xE9s generaremos un certificado a partir de esa pareja.</li><li>El c\xF3digo del servidor necesitar\xE1 indicar el fichero donde se almacenan las claves y la clave para acceder a ese almac\xE9n.</li><li>El cliente necesitar\xE1 indicar que conf\xEDa en el certificado del servidor. Dicho certificado del servidor puede estar guardado (por ejemplo) en el almac\xE9n de claves del cliente.</li></ul><p>::: info Seguridad mutua Aunque no suele hacerse tambi\xE9n podr\xEDa hacerse a la inversa y obligar al cliente a tener un certificado que el servidor pudiera importar, lo que aumentar\xEDa la seguridad. :::</p><p>Vamos a ver c\xF3mo realizar estas operaciones previas con la herramienta <strong>keytool</strong></p><p>Primero las acciones a realizar en el servidor</p><div class="language-bash ext-sh"><pre class="language-bash"><code># El servidor genera una pareja de claves que se almacena en un
# fichero llamado &quot;clavesservidor&quot;. Dentro del fichero se indica
# un alias para poder referirnos a esa clave f\xE1cilmente
# keytool -genkey -keyalg RSA -alias servidor -keystore ClavesServidor -storepass 12345678
&quot;C:/Program Files/Java/jdk-11.0.11/bin/keytool.exe&quot; -genkey -keyalg RSA -alias servidor -keystore ClavesServidor -storepass 12345678
What is your first and last name?
  [Unknown]:  Vicente Martinez
What is the name of your organizational unit?
  [Unknown]:  Dpto. Informatica
What is the name of your organization?
  [Unknown]:  IES Doctor Balmis
What is the name of your City or Locality?
  [Unknown]:  Alicante
What is the name of your State or Province?
  [Unknown]:  Alicante
What is the two-letter country code for this unit?
  [Unknown]:  ES
Is CN=Vicente Martinez, OU=Dpto. Informatica, O=IES Doctor Balmis, L=Alicante, ST=Alicante, C=ES correct?
  [no]: yes

# El servidor genera su &quot;certificado&quot;, es decir un fichero que
# de alguna forma indica quien es \xE9l. El certificado se almacena
# en un fichero llamado clavesservidor y a partir de \xE9l queremos
# generar el certificado de un alias creado previamente con nombre servidor
# keytool -exportcert -alias servidor -file servidor.cer -keystore ClavesServidor
&quot;C:/Program Files/Java/jdk-11.0.11/bin/keytool.exe&quot; -exportcert -alias servidor -file servidor.cer -keystore ClavesServidor
Enter keystore password:
Certificate stored in file &lt;servidor.cer&gt;
</code></pre></div><p>En la carpeta donde hemos ejecutado el comando keytool, se ha creado el almac\xE9n de claves en un fichero llamado <strong>ClavesServidor</strong> y el certificado exportado en el archivo <strong>servidor.cer</strong></p><p>y a continuaci\xF3n las que habr\xEDa que realizar en el cliente para generar el almac\xE9n de confianza que, en nuestro caso contenga el mismo certificado que hemos exportado del servidor.</p><div class="language-bash ext-sh"><pre class="language-bash"><code># Se importa el certificado del servidor indicando que pertenece a
# la lista de certificados confiables.
# keytool -importcert -trustcacerts -alias servidor -file servidor.cer -keystore clavescliente  -storepass 87654321
&quot;C:/Program Files/Java/jdk-11.0.11/bin/keytool.exe&quot; -importcert -trustcacerts -alias servidor -file servidor.cer -keystore CertificadosConfianzaCliente -storepass 87654321
Owner: CN=Vicente Martinez, OU=Dpto. Informatica, O=IES Doctor Balmis, L=Alicante, ST=Alicante, C=ES
Issuer: CN=Vicente Martinez, OU=Dpto. Informatica, O=IES Doctor Balmis, L=Alicante, ST=Alicante, C=ES
Serial number: 4eb6f2a5
Valid from: Mon Jan 24 00:20:24 CET 2022 until: Sun Apr 24 01:20:24 CEST 2022
Certificate fingerprints:
         SHA1: DD:A2:75:4C:1C:BC:39:60:BE:B1:20:67:E1:5C:45:8C:48:B5:1F:54
         SHA256: 82:C8:56:C2:DB:DE:8C:73:A9:21:C6:7D:DE:1F:39:4F:79:CC:5F:D5:10:BC:61:DA:E3:EE:E1:1D:21:EA:D2:33
Signature algorithm name: SHA256withRSA
Subject Public Key Algorithm: 2048-bit RSA key
Version: 3

Extensions:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 16 AE 35 7C 58 97 B1 95   91 9B FA 6C 2A 80 D2 90  ..5.X......l*...
0010: 1C 50 7F C0                                        .P..
]
]

Trust this certificate? [no]:  yes
Certificate was added to keystore
</code></pre></div><p>En esta ocasi\xF3n tambi\xE9n se crea, en la carpeta donde se ha ejecutado el comando keytool, un fichero <strong>CertificadosConfianzaCliente</strong> con el/los certificados de confianza para el cliente.</p><h2 id="_6-5-3-servidor-y-cliente-ssl" tabindex="-1">6.5.3. Servidor y Cliente SSL</h2><p>En le siguiente ejemplo podemos observar como la inicializaci\xF3n del ServerSocket es diferente, pero a partir de que se llama al m\xE9todo accept y, en este caso se obtiene una instancia de tipo SSLSocket, el resto del c\xF3digo es igual que con la clase Socket.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U6S2_SSLServer {

    public static void main(String[] arg) throws IOException {

        SSLSocket clienteConectado = null;
        DataInputStream flujoEntrada = null; //FLUJO DE ENTRADA DE CLIENTE
        DataOutputStream flujoSalida = null; //FLUJO DE SALIDA AL CLIENTE

        // Las propiedades se pueden especificar mediante c\xF3digo, o bien mediante
        // argumentos de la JVM en la llamada a la aplicaci\xF3n
        // System.setProperty(&quot;javax.net.ssl.keyStore&quot;, System.getProperty(&quot;user.dir&quot;) + &quot;\\\\ClavesServidor&quot;);
        // System.setProperty(&quot;javax.net.ssl.keyStorePassword&quot;, &quot;12345678&quot;);
        
        // Inicializaci\xF3n del ServerSocket SSL
        int puerto = 6000;
        SSLServerSocketFactory sfact = (SSLServerSocketFactory) SSLServerSocketFactory.getDefault();
        SSLServerSocket servidorSSL = (SSLServerSocket) sfact.createServerSocket(puerto);

        for (int i = 1; i &lt; 5; i++) {

            System.out.println(&quot;Esperando al cliente &quot; + i);

            // Se espera la conexi\xF3n de un cliente con accept
            clienteConectado = (SSLSocket) servidorSSL.accept();
            // Trabajamos do DataInputStream y DataOutputStream para simplificar
            // el c\xF3digo del ejemplo
            flujoEntrada = new DataInputStream(clienteConectado.getInputStream());
            flujoSalida = new DataOutputStream(clienteConectado.getOutputStream());

            // El cliente env\xEDa un mensaje
            System.out.println(&quot;Recibiendo del CLIENTE: &quot; + i + &quot; \\n\\t&quot; + flujoEntrada.readUTF());

            // El Servidor responde con un saludo
            flujoSalida.writeUTF(&quot;Saludos al cliente del servidor&quot;);
        }

        // CERRAR STREAMS Y SOCKETS
        flujoEntrada.close();
        flujoSalida.close();
        clienteConectado.close();
        servidorSSL.close();
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el cliente el proceso es el mismo, tras la llamada al m\xE9todo createSocket, obtenemos una instancia de SSLSocket que utilizamos igual que si fuese un Socket.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U6S2_SSLClient {

    public static void main(String[] arg) throws IOException {

        SSLSocket clienteSSL = null;
        DataInputStream flujoEntrada = null; //FLUJO DE ENTRADA DE CLIENTE
        DataOutputStream flujoSalida = null; //FLUJO DE SALIDA AL CLIENTE

        // Las propiedades se pueden especificar mediante c\xF3digo, o bien mediante
        // argumentos de la JVM en la llamada a la aplicaci\xF3n
        // System.setProperty(&quot;javax.net.ssl.trustStore&quot;, System.getProperty(&quot;user.dir&quot;) + &quot;/CertificadosConfianzaCliente&quot;);
        System.setProperty(&quot;javax.net.ssl.trustStore&quot;, &quot;CertificadosConfianzaCliente&quot;);
        System.setProperty(&quot;javax.net.ssl.trustStorePassword&quot;, &quot;87654321&quot;);
        // Inicializaci\xF3n del ServerSocket SSL
        int puerto = 6000;
        String host = &quot;localhost&quot;;

        System.out.println(&quot;Programa Cliente iniciado....&quot;);
        SSLSocketFactory sfact = (SSLSocketFactory) SSLSocketFactory.getDefault();
        clienteSSL = (SSLSocket) sfact.createSocket(host, puerto);

        // Trabajamos do DataInputStream y DataOutputStream para simplificar
        // el c\xF3digo del ejemplo
        flujoSalida = new DataOutputStream(clienteSSL.getOutputStream());
        flujoEntrada = new DataInputStream(clienteSSL.getInputStream());

        // Env\xEDo un saludo al servidor
        flujoSalida.writeUTF(&quot;Saludos al SERVIDOR DESDE EL CLIENTE&quot;);

        // El Servidor responde con un mensaje
        System.out.println(&quot;Recibiendo del SERVIDOR: \\n\\t&quot; + flujoEntrada.readUTF());

        // CERRAR STREAMS Y SOCKETS
        flujoEntrada.close();
        flujoSalida.close();
        clienteSSL.close();
    }

    void mostrarInformacionSesionSSL(SSLSocket cliente) throws SSLPeerUnverifiedException {

        //------------------------------------------------------------------------------
        //Ejemplo de la m\xFAltiple informaci\xF3n sobre la sesi\xF3n SSL
        // que se puede obtener a partir 
        SSLSession session = ((SSLSocket) cliente).getSession();
        System.out.println(&quot;Host: &quot; + session.getPeerHost());
        System.out.println(&quot;Cifrado: &quot; + session.getCipherSuite());
        System.out.println(&quot;Protocolo: &quot; + session.getProtocol());

        System.out.println(&quot;IDentificador:&quot; + new BigInteger(session.getId()));

        System.out.println(&quot;Creaci\xF3n de la sesi\xF3n: &quot; + session.getCreationTime());

        X509Certificate certificate = (X509Certificate) session.getPeerCertificates()[0];
        System.out.println(&quot;Propietario: &quot; + certificate.getSubjectDN());
        System.out.println(&quot;Algoritmo: &quot; + certificate.getSigAlgName());
        System.out.println(&quot;Tipo: &quot; + certificate.getType());
        System.out.println(&quot;Emisor: &quot; + certificate.getIssuerDN());
        System.out.println(&quot;N\xFAmero Serie: &quot; + certificate.getSerialNumber());
        //-----------------------------------------------------------------------------
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si ejecutamos el cliente y el servidor directamente, obtendremos el siguiente error</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Programa Cliente iniciado....
Exception in thread &quot;main&quot; javax.net.ssl.SSLHandshakeException: Received fatal alert: handshake_failure
</code></pre></div><p>Para ejecutar el programa servidor es necesario indicar el certificado que se utilizar\xE1.</p><p>Lo podemos indicar a la hora de ejecutar el programa, a\xF1adiendo a la l\xEDnea de comandos</p><blockquote><p>java -Djavax.net.ssl.keyStore=ClavesServidor -Djavax.net.ssl.keyStorePassword=12345678</p></blockquote><p>y en el programa cliente es necesario indicar la ubicaci\xF3n de los certificados de confianza</p><blockquote><p>java -Djavax.net.ssl.trustStore=CertificadosConfianzaCliente -Djavax.net.ssl.trustStorePassword=87654321</p></blockquote><p><img src="`+d+'" alt="Netbeans: Opciones de la JVM"></p><p>::: info Par\xE1metros de JVM o c\xF3digo En el c\xF3digo anterior hay unas l\xEDneas comentadas que especifican c\xF3mo podemos configurar el valor de las propiedades desde c\xF3digo mediante el uso del m\xE9todo System.setProperty(String propiedad, String valor).</p><p>En el programa servidor incluir\xEDamos las siguientes l\xEDneas:</p><p>System.setProperty(&quot;javax.net.ssl.keyStore&quot;, &quot;ClavesServidor&quot;); System.setProperty(&quot;javax.net.ssl.keyStorePassword&quot;, &quot;12345678&quot;);</p><p>Y en el programa cliente ser\xEDan estas:</p><p>System.setProperty(&quot;javax.net.ssl.trustStore&quot;, &quot;CertificadosConfianzaCliente&quot;); System.setProperty(&quot;javax.net.ssl.trustStorePassword&quot;, &quot;87654321&quot;);</p><p>Adem\xE1s del nombre, podemos indicar la ruta donde se encuentran los almacenes, recordando que NO ES RECOMENDABLE el uso de barras invertidas para indicar rutas. :::</p><p>Una vez hechos los cambios, bien en las opciones de la JVM o bien en el c\xF3digo de las aplicaciones, la salida que obtendremos ser\xE1 esta</p>',49),C=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`Esperando al cliente 1
Recibiendo del CLIENTE: 1 
	Saludos al SERVIDOR DESDE EL CLIENTE
Esperando al cliente 2
Recibiendo del CLIENTE: 2 
	Saludos al SERVIDOR DESDE EL CLIENTE
Esperando al cliente 3
`)])],-1),L=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`Programa Cliente iniciado....
Recibiendo del SERVIDOR: 
	Saludos al cliente del servidor
`)])],-1),j=e("p",null,"::: warning Default trusted certificates Whenever Java attempts to connect to another application over SSL (e.g.: HTTPS, IMAPS, LDAPS), it will only be able to connect to that application if it can trust it. The way trust is handled in the Java world is that you have a keystore (typically $JAVA_HOME/lib/security/cacerts), also known as the truststore. This contains a list of all known Certificate Authority (CA) certificates, and Java will only trust certificates that are signed by one of those CAs or public certificates that exist within that keystore.",-1),D=e("p",null,"If -Djavax.net.ssl.trustStore has been configured, it will override the location of the default truststore, which will need to be checked. :::",-1);function _(P,x){const s=t("DownloadPDF-component"),l=t("DocumentCover-component"),n=t("router-link"),o=t("CodeGroupItem"),c=t("CodeGroup");return v(),S("div",null,[a(s),a(l,{titulo:"6.5 Comunicaciones seguras en Java"}),b,e("nav",g,[e("ul",null,[e("li",null,[a(n,{to:"#_6-5-1-protocolo-ssl-secure-sockets-layer"},{default:i(()=>[f]),_:1})]),e("li",null,[a(n,{to:"#_6-5-2-jsse"},{default:i(()=>[y]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#sslsocket-y-sslserversocket"},{default:i(()=>[h]),_:1})]),e("li",null,[a(n,{to:"#keytool-certificados-confianza-y-almacenes-de-claves"},{default:i(()=>[k]),_:1})])])]),e("li",null,[a(n,{to:"#_6-5-3-servidor-y-cliente-ssl"},{default:i(()=>[q]),_:1})])])]),E,a(c,null,{default:i(()=>[a(o,{title:"Servidor",active:""},{default:i(()=>[C]),_:1}),a(o,{title:"Cliente"},{default:i(()=>[L]),_:1})]),_:1}),j,D])}const w=u(p,[["render",_],["__file","jsse.html.vue"]]);export{w as default};
