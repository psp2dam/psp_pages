import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,d as n,a as e,w as i,f as u,r as d,b as a}from"./app.6f7d6c20.js";const v={},m=e("h1",{id:"_4-2-clases-auxiliares-para-direccionamiento",tabindex:"-1"},"4.2 Clases auxiliares para direccionamiento",-1),p={class:"table-of-contents"},b=a("4.2.1. java.net.NetworkInterface"),g=a("4.2.2 java.net.InterfaceAddress"),f=a("4.2.3. java.net.InetAddress"),h=a("4.2.4 java.net.URL"),q=a("4.2.5 java.net.URLConnection"),I=u(`<h2 id="_4-2-1-java-net-networkinterface" tabindex="-1">4.2.1. java.net.NetworkInterface</h2><p>Esta clase representa la interfaz de red, tanto software como hardware, su nombre, la lista de direcciones IP asignadas y toda la informaci\xF3n relacionada. Se puede usar en los casos en que queramos usar espec\xEDficamente una interfaz particular para transmitir nuestro paquete en un sistema con m\xFAltiples NIC.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/NetworkInterface.html" target="_blank" rel="noopener noreferrer">java.net.InetAddress specification</a></p></blockquote><p>::: info \xBFQu\xE9 es una interfaz de red?<br> Se puede pensar en una interfaz de red como un punto en el que su computadora se conecta a la red. No es necesariamente una pieza de hardware, pero tambi\xE9n se puede implementar en un software. Por ejemplo, una interfaz de bucle invertido que se utiliza con fines de prueba. :::</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public static Enumeration getNetworkInterfaces()</td><td>Devuelve todas las interfaces de red del sistema.</td></tr><tr><td>public List getInterfaceAddresses()</td><td>Devuelve una lista de todas las direcciones de interfaz en esta interfaz.</td></tr><tr><td>public Enumeration getInetAddresses()</td><td>Devuelve una enumeraci\xF3n de todas las Inetaddresses vinculadas a esta interfaz de red, si el administrador de seguridad lo permite.</td></tr><tr><td>public String getName()</td><td>Devuelve el nombre de esta interfaz de red</td></tr><tr><td>public int getIndex()</td><td>Devuelve el \xEDndice asignado a esta interfaz de red por el sistema. Los \xEDndices se pueden utilizar en lugar de nombres largos para hacer referencia a cualquier interfaz del dispositivo.</td></tr><tr><td>public String getDisplayName()</td><td>Este m\xE9todo devuelve el nombre de la interfaz de red en un formato de string legible.</td></tr><tr><td>public static NetworkInterface getByName(String name)</td><td>Busca y devuelve la interfaz de red con el nombre especificado, o nulo si no existe.</td></tr><tr><td>public static NetworkInterface getByIndex(int index)</td><td>Realiza una funci\xF3n similar a la funci\xF3n anterior con el \xEDndice utilizado como par\xE1metro de b\xFAsqueda en lugar del nombre.</td></tr><tr><td>public static NetworkInterface getByInetAddress(InetAddress addr)</td><td>Este m\xE9todo se usa ampliamente ya que devuelve la interfaz de red a la que est\xE1 vinculada la direcci\xF3n de red especificada. Si una InetAddress est\xE1 vinculada a varias interfaces, se puede devolver cualquiera de las interfaces.</td></tr><tr><td>public boolean isUp()</td><td>Devuelve un valor booleano que indica si esta interfaz de red est\xE1 en funcionamiento.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Java program to illustrate various java.net.NetworkInterface class methods.

public class NetworkInterfaceExample
{
    public static void main(String[] args) throws SocketException,
                                                UnknownHostException
    {

        // getNetworkInterfaces() returns a list of all interfaces
        // present in the system.
        ArrayList&lt;NetworkInterface&gt; interfaces = Collections.list(
                                            NetworkInterface.getNetworkInterfaces());

        System.out.println(&quot;Information about present Network Interfaces...\\n&quot;);
        for (NetworkInterface iface : interfaces)
        {
            // isUp() method used for checking whether the interface in process
            // is up and running or not.
            if (iface.isUp())
            {
                // getName() method
                System.out.println(&quot;Interface Name: &quot; + iface.getName());

                // getDisplayName() method
                System.out.println(&quot;Interface display name: &quot; + iface.getDisplayName());

                // getHardwareAddress() method
                System.out.println(&quot;Hardware Address: &quot; +
                                Arrays.toString(iface.getHardwareAddress()));

                // getParent() method
                System.out.println(&quot;Parent: &quot; + iface.getParent());

                // getIndex() method
                System.out.println(&quot;Index: &quot; + iface.getIndex());
                // Interface addresses of the network interface
                System.out.println(&quot;\\tInterface addresses: &quot;);

                // getInterfaceAddresses() method
                for (InterfaceAddress addr : iface.getInterfaceAddresses())
                {
                    System.out.println(&quot;\\t\\t&quot; + addr.getAddress().toString());
                }
                // Interface addresses of the network interface
                System.out.println(&quot;\\tInetAddresses associated with this interface: &quot;);

                // getInetAddresses() method returns list of all
                // addresses currently bound to this interface
                Enumeration&lt;InetAddress&gt; en = iface.getInetAddresses();
                while (en.hasMoreElements())
                {
                    System.out.println(&quot;\\t\\t&quot; + en.nextElement().toString());
                }

                // getMTU() method
                System.out.println(&quot;\\tMTU: &quot; + iface.getMTU());

                // getSubInterfaces() method
                System.out.println(&quot;\\tSubinterfaces: &quot; +
                                Collections.list(iface.getSubInterfaces()));

                // isLoopback() method
                System.out.println(&quot;\\tis loopback: &quot; + iface.isLoopback());

                // isVirtual() method
                System.out.println(&quot;\\tis virtual: &quot; + iface.isVirtual());

                // isPointToPoint() method
                System.out.println(&quot;\\tis point to point: &quot; + iface.isPointToPoint());

                // supportsMulticast() method
                System.out.println(&quot;Supports Multicast: &quot; + iface.supportsMulticast());

            }
        }

        // getByIndex() method returns network interface
        // with the specified index
        NetworkInterface nif = NetworkInterface.getByIndex(1);

        // toString() method is used to display textual
        // information about this network interface
        System.out.println(&quot;Network interface 1: &quot; + nif.toString());

        // getByName() method returns network interface
        // with the specified name
        NetworkInterface nif2 = NetworkInterface.getByName(&quot;eth0&quot;);
        InetAddress ip = InetAddress.getByName(&quot;localhost&quot;);

        // getbyInetAddress() method
        NetworkInterface nif3 = NetworkInterface.getByInetAddress(ip);
        System.out.println(&quot;\\nlocalhost associated with: &quot; + nif3);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-2-java-net-interfaceaddress" tabindex="-1">4.2.2 java.net.InterfaceAddress</h2><p>Esta clase representa una direcci\xF3n de interfaz de red. Cada dispositivo que tiene una direcci\xF3n IP tiene una direcci\xF3n IP en la interfaz de red. De hecho, el comando ping no hace ping a un dispositivo, sino a la direcci\xF3n de interfaz de los dispositivos.</p><p>Java proporciona ciertos m\xE9todos para tratar con direcciones de interfaz que se pueden usar en lugares donde existe la necesidad de conocer la topolog\xEDa de la red, para la detecci\xF3n de fallas en una red, etc.</p><p>Resumiendo, esta clase representa a una direcci\xF3n IP, una m\xE1scara de red y una direcci\xF3n broadcast (cuando la direcci\xF3n es IPv4). S\xF3lo representa una direcci\xF3n IP address y una longitud de prefijo de red en el caso de direcciones IPv6.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InterfaceAddress.html" target="_blank" rel="noopener noreferrer">java.net.InterfaceAddress specification</a></p></blockquote><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public InetAddress getAddress()</td><td>Devuelve una InetAddress para esta direcci\xF3n</td></tr><tr><td>public InetAddress getBroadcast()</td><td>Devuelve InetAddress para la direcci\xF3n de transmisi\xF3n para esta direcci\xF3n de interfaz. Como solo las direcciones IPv4 tienen direcciones de transmisi\xF3n, se devolver\xEDa un valor nulo al usar una direcci\xF3n IPv6.</td></tr><tr><td>public short getNetworkPrefixLength()</td><td>Devuelve la longitud del prefijo para esta direcci\xF3n de interfaz, es decir, la m\xE1scara de subred para esta direcci\xF3n.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Java program to illustrate methods of java.net.InterfaceAddress class

public class InterfaceaddressExample
{
    public static void main(String[] args) throws SocketException
    {
        // Modify according to your system
        NetworkInterface nif = NetworkInterface.getByIndex(1);
        List&lt;InterfaceAddress&gt; list = nif.getInterfaceAddresses();

        for (InterfaceAddress iaddr : list)
        {
            // getAddress() method
            System.out.println(&quot;getAddress() : &quot; + iaddr.getAddress());

            // getBroadcast() method
            System.out.println(&quot;getBroadcast() : &quot; + iaddr.getBroadcast());

            // getNetworkPrefixLength() method
            System.out.println(&quot;PrefixLength : &quot; + iaddr.getNetworkPrefixLength());

            // hashCode() method
            System.out.println(&quot;Hashcode : &quot; + iaddr.hashCode());

            // toString() method
            System.out.println(&quot;toString() : &quot; + iaddr.toString());
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-3-java-net-inetaddress" tabindex="-1">4.2.3. java.net.InetAddress</h2><p>La clase java.net.InetAddress proporciona m\xE9todos para obtener la direcci\xF3n IP de cualquier nombre de host, por ejemplo example www.google.com, www.facebook.com, etc.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetAddress.html" target="_blank" rel="noopener noreferrer">java.net.InetAddress specification</a></p></blockquote><p>La clase InetAddress se usa para encapsular tanto la direcci\xF3n IP num\xE9rica como el nombre de dominio para esa direcci\xF3n.</p><p>Hay 2 tipos de direcciones:</p><ul><li>Unicast: un identificador para una \xFAnica interfaz.</li><li>Multicast: un identificador para un conjunto de interfaces.</li></ul><p>::: warning Local Name Resolver (hosts file) Deber\xEDas saber que DNS traduce nombre de dominio en direcciones IP. Pero, ?sabes que hay un archivo en tu sistema que puede sobrescribir esas traducciones?</p><p>Es el archivo <code>hosts</code> y nos permite mapear nombre de dominio a direcciones IP. Tu archivo HOSTS s\xF3lo afecta al comportamiento de tu equipo, por lo que podemos usarlo para crear direcciones personalizadas para IP de nuestra red, o bien para redireccionar / bloquear el acceso a determinados sitios web.</p><p>Comp puedes imaginar, cambiar de forma incorrecta o <strong>maliciosa</strong> el contenido del archivo hOSTS puede romper f\xE1cilmente el comportamiento de tu conexi\xF3n a Internet, As\xED que la modificaci\xF3n del archivo no es trivial para los usuarios, algo que es de agradecer.</p><ul><li>Windows</li></ul><p>El archivo HOSTS est\xE1 almacenado como un fichero de texto plano en la carpeta del sistema de Windows.</p><p>Abre el men\xFA inicio y escribe &quot;notepad&quot;.</p><p>Pulsa con el bot\xF3n derecho y selecciona la opci\xF3n de &quot;Ejecutar como administrador&quot;</p><p>En Notepad, ve a Archivo &gt; Abrir y pega la siguiente ruta:</p><p>c:\\Windows\\System32\\Drivers\\etc\\hosts</p><p>Ahora ya puedes editar y guardar los cambios en tu archivo HOSTS.</p><p>Para mapear un dominio, a\xF1ade una nueva l\xEDnea siguiendo los ejemplos que hay en el archivo.</p><ul><li>OS X &amp; GNU/Linux</li></ul><p>El archivo est\xE1 en /etc/hosts y debes editarlo con privilegios de administrador. :::</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public static InetAddress getByName(String host) throws UnknownHostException</td><td>Este m\xE9todo devuelve la instancia de InetAddress que contiene el nombre y la IP del host recibido como par\xE1metro.</td></tr><tr><td>public static InetAddress getLocalHost() throws UnknownHostException</td><td>Este m\xE9todo devuelve la instancia de InetAddress que contiene el nombre y la IP de LocalHost.</td></tr><tr><td>public String getHostName()</td><td>Este m\xE9todo devuelve el nombre de host para esta direcci\xF3n IP.</td></tr><tr><td>public String getHostAddress()</td><td>Este m\xE9todo obtiene la direcci\xF3n IP en forma de string.</td></tr><tr><td>public boolean isReachable(int timeout)</td><td>Este m\xE9todo prueba si esa direcci\xF3n es accesible.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
class InetAddressExample {
    public static void main(String[] args)
        throws UnknownHostException
    {
        // To get and print InetAddress of Local Host
        InetAddress address1 = InetAddress.getLocalHost();
        System.out.println(&quot;InetAddress of Local Host : &quot;
                        + address1);

        // To get and print InetAddress of Named Host
        InetAddress address2
            = InetAddress.getByName(&quot;45.22.30.39&quot;);
        System.out.println(&quot;InetAddress of Named Host : &quot;
                        + address2);

        // To get and print ALL InetAddresses of Named Host
        InetAddress address3[]
            = InetAddress.getAllByName(&quot;172.19.25.29&quot;);
        for (int i = 0; i &lt; address3.length; i++) {
            System.out.println(
                &quot;ALL InetAddresses of Named Host : &quot;
                + address3[i]);
        }

        // To get and print InetAddresses of
        // Host with specified IP Address
        byte IPAddress[] = { 125, 0, 0, 1 };
        InetAddress address4
            = InetAddress.getByAddress(IPAddress);
        System.out.println(
            &quot;InetAddresses of Host with specified IP Address : &quot;
            + address4);

        // To get and print InetAddresses of Host
        // with specified IP Address and hostname
        byte[] IPAddress2
            = { 105, 22, (byte)223, (byte)186 };
        InetAddress address5 = InetAddress.getByAddress(
            &quot;gfg.com&quot;, IPAddress2);
        System.out.println(
            &quot;InetAddresses of Host with specified IP Address and hostname : &quot;
            + address5);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Buscador de equipos (U4S4_HostSeeker) Tu equipo est\xE1 conectado a una LAN (Red de \xC1rea Local) y probablemente est\xE9 usando una direcci\xF3n IP privada.</p><p>Las direcciones pueden ser de clase C (192.168.X.Y), clase B (172.17.X.Y) o clase A (10.X.Y.Z). Eso depende principalmente de la m\xE1scara de red y del prefijo de red usado para la configuraci\xF3n del interfaz.</p><p>Puedes comprobar esta configuraci\xF3n con los comandos <strong>ifconfig</strong> de OSX GNU/Linuxo o <strong>ipconfig</strong> de Windows..</p><p>Escribe un programa que averig\xFCe, dentro de nuestra red, qu\xE9 hosts est\xE1n activos en la red, es decir, qu\xE9 hosts son &quot;alcanzables&quot; desde tu equipo usando uno de los interfaces disponibles.</p><p>Primero vamos a hacerlo de forma sencilla. Escribe un programa que sabiendo la direcci\xF3n de tu equipo y la longitud del prefijo, pruebe todas las posibles combinaciones.</p><blockquote><p>Si nuestra IP es 192.168.0.50 y el prefijo es /24, esto indica que los primeros 24 bits de la direcci\xF3n IP son el identificador de la red, y que los 8 \xFAltimos son para identificadores de hosts. Por lo que s\xF3lo tenemos que ir probando con los \xFAltimos 8 bits (el \xFAltimo d\xEDgito de la direcci\xF3n) para detectar a otros equipos en la red. Esto nos da 254 posibilidades, ya que la 0 y la 255 no se usan para hosts.</p><p>Si por el contrario, el prefijo fuese 16, tendr\xEDamos que ir cambiando los dos \xFAltimos n\xFAmeros.</p><p>192.168.0.1 a 192.168.0.254, despu\xE9s 192.168.1.1 a 192.168.1.254, as\xED hasta 192.168.255.1 a 192.168.255.254, es decir, tendr\xEDa que usar un bucle anidado.</p></blockquote><p>La aplicaci\xF3n s\xF3lo debe mostrar la direcci\xF3n IP de los equipos que sean alcanzables.</p><p><strong>Optativo</strong>: Una vez que tengas tu aplicaci\xF3n funcionando, intenta hacerla gen\xE9rica y reutilizable para que funcione en cualquier red, obteniendo el prefijo de red y comprobando todas las posibles direcciones en la red en funci\xF3n del prefijo obtenido.</p><p>En ambos casos la aplicaci\xF3n recibir\xE1 el nombre de una NIC como argumento y comprobar\xE1 s\xF3lo las direcciones IP asignadas a esa interfaz.</p><p>Podemos saber si una direcci\xF3n es IPv4 o IPv6 usando el operador <code>\xECnstanceof</code> con las subclases Inet4Address y Inet6Address. :::</p><p>::: details C\xF3digo del ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    // Code not visible yet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><h2 id="_4-2-4-java-net-url" tabindex="-1">4.2.4 java.net.URL</h2><p>URL es un acr\xF3nimo de Localizador de recursos uniforme. Un recurso puede ser cualquier cosa, desde un simple archivo de texto hasta cualquier otro como im\xE1genes, directorio de archivos, etc.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/URL.html" target="_blank" rel="noopener noreferrer">java.net.URL specification</a></p></blockquote><p>Es un puntero para localizar recursos en www (World Wide Web), por ejemplo:</p><blockquote><p>http://psp2dam.github.io/psp_pages/</p></blockquote><p>La URL tiene las siguientes partes:</p><ul><li><strong>Protocolo</strong>: en este caso el protocolo es HTTP, puede ser HTTPS en algunos casos</li><li><strong>Nombre de host o IP</strong>: el nombre de host representa la direcci\xF3n de la m\xE1quina en la que se encuentra el recurso, en este caso, www.example.com</li><li><strong>N\xFAmero de puerto</strong>: es un atributo opcional. Si no se especifica, devuelve -1. En el caso anterior, el n\xFAmero de puerto es 80. Si no se indica se usa el puerto usado por defecto por el protocolo indicado en el primer campo.</li><li><strong>Nombre del recurso</strong>: es el nombre de un recurso ubicado en el servidor dado que queremos ver (la carpeta /psp_pages). Dependiendo de la configuraci\xF3n del servidor, el nombre del archivo puede tener un valor por defecto. En el ejemplo s\xF3lo se ha indicado una ruta, por lo que se intentar\xE1 devolver el archivo <code>\xECndex.html</code> si se encuentra en esa carpeta.</li></ul><table><thead><tr><th>Constructor</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>URL(String spec)</td><td>Este constructor crea un objeto de clase URL a partir de una representaci\xF3n de string dada</td></tr><tr><td>URL(String protocol, String host, int port, String file)</td><td>Este constructor crea un objeto de URL a partir del protocolo, host, n\xFAmero de puerto y archivo especificados.</td></tr><tr><td>URL(String protocol, String host, String file)</td><td>Este constructor crea un objeto de URL a partir del protocolo, el servidor y la ruta/archivo especificados.</td></tr><tr><td>URL(URL context, String spec)</td><td>Este constructor crea una instancia de una URL analizando el src dado con el controlador especificado dentro de un contexto dado. Se usa cuando tenemos rutas relativas a una URL</td></tr></tbody></table><p>Estos son los m\xE9todos mas importantes y utilizados de la clase de URL:</p><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>public String getProtocol()</td><td>Este m\xE9todo obtiene el nombre de protocolo de esta URL.</td></tr><tr><td>public String getHost()</td><td>Este m\xE9todo obtiene el nombre de host de esta URL, si corresponde.</td></tr><tr><td>public String getPort()</td><td>Este m\xE9todo obtiene el n\xFAmero de puerto de esta URL.</td></tr><tr><td>public String getFile()</td><td>Este m\xE9todo obtiene la parte de la ruta de esta URL.</td></tr><tr><td>public String getAuthority()</td><td>Este m\xE9todo obtiene la parte de autoridad de esta URL.</td></tr><tr><td>public String toString()</td><td>Este m\xE9todo construye una representaci\xF3n de string de esta URL.</td></tr><tr><td>public String getQuery()</td><td>Este m\xE9todo obtiene la parte de consulta de esta URL.</td></tr><tr><td>public String getDefaultPort()</td><td>Este m\xE9todo obtiene el n\xFAmero de puerto predeterminado del protocolo asociado con esta URL.</td></tr><tr><td>public URLConnection openConnection()</td><td>Este m\xE9todo devuelve una instancia de URLConnection que representa una conexi\xF3n al objeto remoto al que hace referencia la URL.</td></tr><tr><td>public InputStream openStream()</td><td>Este m\xE9todo abre una conexi\xF3n a esta URL y devuelve un InputStream para leer desde esa conexi\xF3n.</td></tr><tr><td>public boolean equals(Object obj)</td><td>Este m\xE9todo compara la igualdad de esta URL con otro objeto.</td></tr><tr><td>public Object getContent()</td><td>Este m\xE9todo obtiene el contenido de esta URL.</td></tr><tr><td>public String getRef()</td><td>Este m\xE9todo obtiene el ancla (tambi\xE9n conocido como la \xABreferencia\xBB) de esta URL.</td></tr><tr><td>public URI toURI()</td><td>Este m\xE9todo devuelve un URI equivalente a esta URL.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>//URLDemo.java  
public static void main(String[] args) throws MalformedURLException{  

    URL url=new URL(&quot;http://psp2dam.github.io/psp_pages&quot;);  
  
    System.out.println(&quot;Protocol: &quot;+url.getProtocol());  
    System.out.println(&quot;Host Name: &quot;+url.getHost());  
    System.out.println(&quot;Port Number: &quot;+url.getPort());  
    System.out.println(&quot;File Name: &quot;+url.getFile());  
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vamos con otro ejemplo m\xE1s completo de uso de los m\xE9todos de URL.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>//URLDemo.java  
public static void main(String[] args){    
    URL url=new URL(&quot;https://www.google.com/search?q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8&quot;);    
        
    System.out.println(&quot;Protocol: &quot;+url.getProtocol());    
    System.out.println(&quot;Host Name: &quot;+url.getHost());    
    System.out.println(&quot;Port Number: &quot;+url.getPort());    
    System.out.println(&quot;Default Port Number: &quot;+url.getDefaultPort());    
    System.out.println(&quot;Query String: &quot;+url.getQuery());    
    System.out.println(&quot;Path: &quot;+url.getPath());    
    System.out.println(&quot;File: &quot;+url.getFile());      
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh"><pre class="language-bash"><code>Protocol: https
Host Name: www.google.com
Port Number: -1
Default Port Number: 443
Query String: q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8
Path: /search
File: /search?q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div><h2 id="_4-2-5-java-net-urlconnection" tabindex="-1">4.2.5 java.net.URLConnection</h2><p>La clase URLConnection se utiliza para dos prop\xF3sitos diferentes pero relacionados.</p><ul><li>En primer lugar, proporciona m\xE1s control sobre la interacci\xF3n con un servidor (especialmente un servidor HTTP) que la clase URL.</li><li>En segundo lugar, con una URLConnection podemos verificar el encabezado enviado por el servidor y responder en consecuencia, podemos configurar los campos de encabezado utilizados en las requests de los clientes. Tambi\xE9n podemos descargar archivos binarios usando URLConnection.</li></ul><p>La clase URLConnection representa un enlace entre la URL y la aplicaci\xF3n. Puede usarse para leer y escribir datos en el recurso se\xF1alado por la URL.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/URLConnection.html" target="_blank" rel="noopener noreferrer">java.net.URLConnection specification</a></p></blockquote><p>La clase URLConnection en Java es una clase abstracta que representa una conexi\xF3n de un recurso seg\xFAn lo especificado por la URL correspondiente. Tiene dos subclases <code>HttpURLConnection</code> y <code>JarURLConnection</code> que se encargan de hacer la conexi\xF3n entre el programa cliente y el recurso indicado en URL.</p><p>La clase URLConnection proporciona una gran cantidad de m\xE9todos. Podemos mostrar el contenido de una p\xE1gina web usando el m\xE9todo <code>getInputStream()</code> , de un modo similar a como lo hac\xEDamos con los procesos.</p><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>void connect()</td><td>Este m\xE9todo se utiliza para establecer una conexi\xF3n con el recurso especificado por la URL, si dicha conexi\xF3n a\xFAn no se ha establecido.</td></tr><tr><td>Object getContent()</td><td>Recupera el contenido de esta conexi\xF3n URL.</td></tr><tr><td>String getContentEncoding()</td><td>Devuelve el valor del campo de encabezado de codificaci\xF3n de contenido.</td></tr><tr><td>int getContentLength()</td><td>Devuelve el valor del campo de encabezado de longitud del contenido.</td></tr><tr><td>long getContentLengthLong()</td><td>Devuelve el valor del campo de encabezado de longitud del contenido como long.</td></tr><tr><td>String getContentType()</td><td>Devuelve el valor del campo de encabezado de tipo de contenido.</td></tr><tr><td>long getDate()</td><td>Devuelve el valor del campo de encabezado de fecha.</td></tr><tr><td>boolean getDoInput()</td><td>Devuelve el valor del indicador doInput de esta URLConnection.</td></tr><tr><td>boolean getDoInput()</td><td>Devuelve el valor del indicador doInput de esta URLConnection.</td></tr><tr><td>String getHeaderField(int n)</td><td>obtiene el valor del en\xE9simo campo de encabezado.</td></tr><tr><td>String getHeaderField(String name)</td><td>Devuelve el valor del campo de encabezado con nombre.</td></tr><tr><td>String getHeaderFieldKey(int n)</td><td>obtiene el valor del en\xE9simo campo de encabezado.</td></tr><tr><td>Map&lt;String, List&lt;String&gt;&gt; getHeaderFields()</td><td>Devuelve un mapa no modificable de los campos de encabezado.</td></tr><tr><td>long getIfModifiedSince()</td><td>Devuelve el valor del campo ifModifiedSince de este objeto.</td></tr><tr><td>InputStream getInputStream()</td><td>Devuelve un flujo de entrada que lee de esta conexi\xF3n abierta</td></tr><tr><td>long getLastModified()</td><td>Devuelve el valor del campo de encabezado modificado por \xFAltima vez.</td></tr><tr><td>OutputStream getOutputStream()</td><td>Devuelve un flujo de salida que escribe en esta conexi\xF3n.</td></tr><tr><td>URL getURL()</td><td>Devuelve el valor del campo URL de este URLConnection.</td></tr><tr><td>void setDoInput(boolean doinput)</td><td>Establece el valor del campo doInput para esta URLConnection en el valor especificado.</td></tr><tr><td>void setDoOutput(boolean dooutput)</td><td>Establece el valor del campo doOutput para esta URLConnection en el valor especificado.</td></tr></tbody></table><p>::: info C\xF3mo obtener un objeto de tipo URLConnection El m\xE9todo openConnection() de la clase URL devuelve un objeto de tipo URLConnection. :::</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// URLConnectionExample
public static void main(String[] args) throws MalformedURLException, IOException{

    // Creating an object of URL class

    // Custom input URL is passed as an argument
    URL u = new URL(&quot;www.google.com&quot;);

    // Creating an object of URLConnection class to
    // communicate between application and URL
    URLConnection urlconnect = u.openConnection();

    // Creating an object of InputStream class
    // for our application streams to be read
    InputStream stream
        = urlconnect.getInputStream();

    BufferedReader in =  
        new BufferedReader(
            new InputStreamReader(stream));
    // Till the time URL is being read
    String line;
    while ((line = in.readLine()) != null) {

        // Continue printing the stream
        System.out.println(line);
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Descargar im\xE1genes (U4S7_ImagesDownloader) Crea una nueva aplicaci\xF3n que descargue im\xE1genes de una URL.</p><p>La URL de la imagen se debe pasar como argumento a la aplicaci\xF3n. La imagen descargada debe guardarse en una carpeta images, en la ra\xEDz del proyecto, con el mismo nombre que tuviese el recurso online. :::</p><p>::: details C\xF3digo del ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    // Code not visible yet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>`,76);function S(y,L){const s=d("DownloadPDF-component"),r=d("DocumentCover-component"),t=d("router-link");return l(),c("div",null,[n(s),n(r,{titulo:"4.2 Clases auxiliares para direccionamiento"}),m,e("nav",p,[e("ul",null,[e("li",null,[n(t,{to:"#_4-2-1-java-net-networkinterface"},{default:i(()=>[b]),_:1})]),e("li",null,[n(t,{to:"#_4-2-2-java-net-interfaceaddress"},{default:i(()=>[g]),_:1})]),e("li",null,[n(t,{to:"#_4-2-3-java-net-inetaddress"},{default:i(()=>[f]),_:1})]),e("li",null,[n(t,{to:"#_4-2-4-java-net-url"},{default:i(()=>[h]),_:1})]),e("li",null,[n(t,{to:"#_4-2-5-java-net-urlconnection"},{default:i(()=>[q]),_:1})])])]),I])}const w=o(v,[["render",S],["__file","urls.html.vue"]]);export{w as default};
