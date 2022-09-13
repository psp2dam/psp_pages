import{_ as l,a as d}from"./udp_process.3be6e717.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as m,d as i,a as e,w as n,f as v,r as t,b as s}from"./app.6f7d6c20.js";const p={},b=e("h1",{id:"_4-4-udp-sockets",tabindex:"-1"},"4.4 UDP Sockets",-1),g={class:"table-of-contents"},q=s("4.4.1. Client/Server communication using UDP sockets"),k=s("DatagramSocket"),h=s("DatagramPacket"),S=s("Programaci\xF3n de aplicaciones Cliente y/o Servidor"),P=s("4.4.2. Cliente UDP"),y=s("4.4.3 Servidor UDP"),D=s("4.4.4 Multicast socket"),f=v('<h2 id="_4-4-1-client-server-communication-using-udp-sockets" tabindex="-1">4.4.1. Client/Server communication using UDP sockets</h2><p>Igual que en el apartado anterior, Oracle proporciona una gu\xEDa son informaci\xF3n b\xE1sica sobre el uso de los Sockets UDP. De nuevo, todo lo que podemos ver en ese tutorial lo vamos a ir comentando y ampliando en este apartado del tema</p><p><a href="https://docs.oracle.com/javase/tutorial/networking/datagrams/index.html" target="_blank" rel="noopener noreferrer">Tutorial de Oracle: All about datagrams</a></p><p>::: info UDP - Protocolo sin conexi\xF3n El protocolo de comunicaciones con <code>datagramas</code> UDP, es un protocolo sin conexi\xF3n, es decir, cada vez que se env\xEDen datagramas es necesario enviar el descriptor del socket local y la direcci\xF3n del socket que debe recibir el datagrama. Como se puede ver, hay que enviar datos adicionales cada vez que se realice una comunicaci\xF3n.</p><p>Se trata de un servicio de transporte sin conexi\xF3n. Son m\xE1s eficientes que TCP, pero no est\xE1 garantizada la fiabilidad: los datos se env\xEDan y reciben en paquetes, cuya entrega no est\xE1 garantizada; los paquetes pueden ser duplicados, perdidos o llegar en un orden diferente al que se envi\xF3. :::</p><p>La interfaz Java que da soporte a sockets TCP est\xE1 constituida por las clases <strong>DatagramPacket</strong> y <strong>DatagramSocket</strong>.</p><ul><li><p>DatagramSocket: es la clase utilizada para realizar el env\xEDo y la recepci\xF3n de los datos. A diferencia de los sockets TCP, esta clase no es la encargada de gestionar las direcciones ni de realizar la conexi\xF3n, s\xF3lo se encarga de transportar los datos del origen al destino.</p><p>Lo \xFAnico que se hace es enviar los datos, mediante la creaci\xF3n de un socket y utilizando los m\xE9todos de env\xEDo y recepci\xF3n apropiados.</p><p>Esta clase proporciona los m\xE9todos <code>send</code> y <code>receive</code>.</p></li><li><p>DatagramPackets: esta clase es la encargada de incluir la informaci\xF3n que se quiere enviar/recibir y la informaci\xF3n de direccionamiento, es decir, la direcci\xF3n a la que se quiere enviar l informaci\xF3n que contiene.</p><p>DatagramPacket contiene la informaci\xF3n relevante. Cuando se desea recibir un datagrama, \xE9ste deber\xE1 almacenarse bien en un buffer o un array de bytes. Y cuando preparamos un datagrama para ser enviado, el DatagramPacket no s\xF3lo debe tener la informaci\xF3n, sino que adem\xE1s debe tener la direcci\xF3n IP y el puerto de destino.</p></li></ul><p>::: warning Puertos duplicados UDP / TCP Dado que la gesti\xF3n de los puertos y el protocolo que se utiliza es diferente, podemos usar el mismo n\xFAmero de puerto para un servicio que use el protocolo TCP y otro servicio, en el mismo puerto, que use UDP.</p><p>En realidad, un socket adem\xE1s de IP_origen, Puerto_origen, IP_destino, Puerto_destino, tambi\xE9n incluye el protocolo usado, por eso un socket con el mismo origen y destino, es diferente y puede ser usado a al vez por UDP y TCP</p><p><strong>Socket = [Protocolo (TCP/UDP) + IP_origen + Puerto_origen + IP_destino + Puerto_destino]</strong> :::</p><h3 id="datagramsocket" tabindex="-1">DatagramSocket</h3><p>Esta clase proporciona los siguiente m\xE9todos</p><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>public DatagramSocket () throws SocketException</td><td>Se encarga de construir un socket para datagramas y de conectarlo al primer puerto disponible.</td></tr><tr><td>public DatagramSocket (int port) throws SocketException</td><td>\xCDdem, pero con la salvedad de que permite especificar el n\xFAmero de puerto asociado.</td></tr><tr><td>public DatagramSocket (int port, InetAddress ip) throws SocketException</td><td>Permite especificar, adem\xE1s del puerto, la direcci\xF3n local a la que se va a asociar el socket.</td></tr><tr><td>public int getLocalPort()</td><td>Retorna el n\xFAmero de puerto en el host local al que est\xE1 conectado el socket.</td></tr><tr><td>public void <strong>receive</strong> (DatagramPacket p) throws IOException</td><td>Recibe un DatagramPacket del socket, y llena el buffer con los datos que recibe.</td></tr><tr><td>public void <strong>send</strong> (DatagramPacket p) throws IOException</td><td>Env\xEDa un DatagramPacket a trav\xE9s del socket.</td></tr><tr><td><strong>public setSoTimeout(int timeout)</strong></td><td>Permite establecer un tiempo de espera l\xEDmite para que el m\xE9todo receive se quede bloqueado esperando a recibir una respuesta por parte del otro extremo. Si no reciben datos en el tiempo fijado se lanza la excepci\xF3n <code>InterruptedIOException</code></td></tr></tbody></table><p>El DatagramSocket, cuando se utiliza en la parte receptora (la que vamos a llamar servidora) que ofrece el servicio para que los clientes se conecten, s\xF3lo va a indicar el puerto al que esos clientes deben enviar sus solicitudes. En el caso de los procesos que act\xFAen como clientes, se usar\xE1 el constructor sin par\xE1metros para que sea el SO el que asigne un puerto libre.</p><p>Por lo tanto, un mismo DatagramSocket al no incluir ninguna informaci\xF3n de direccionamiento puede ser reutilizado para enviar y/o recibir datagramas a/desde diferentes destinos.</p><h3 id="datagrampacket" tabindex="-1">DatagramPacket</h3><p>La clase <code>DatagramPacket</code> como se ha indicado anteriormente, es un contenedor del mensaje y del destino de ese mensaje.</p><p><img src="'+l+`" alt="Datagram Packet"></p><p>Esta clase proporciona los siguiente m\xE9todos</p><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>public DatagramPacket(byte ibuf[], int ilength)</td><td>Implementa un DatagramPacket para la <strong>recepci\xF3n</strong> de paquetes de longitud ilength, siendo el valor de este par\xE1metro menor o igual que ibuf.length.</td></tr><tr><td>public DatagramPacket(byte ibuf[], int ilength, InetAddress iaddr, int iport)</td><td>Implementa un DatagramPacket para el <strong>env\xEDo</strong> de paquetes de longitud ilength al n\xFAmero de puerto especificado en el par\xE1metro iport, del host especificado en la direcci\xF3n de destino que se le pasa por medio del par\xE1metro iaddr.</td></tr><tr><td>public InetAddress getAddress ()</td><td>Retorna la direcci\xF3n IP del host al cual se le env\xEDa el datagrama o del que el datagrama se recibi\xF3.</td></tr><tr><td>public byte[] getData()</td><td>Retorna los <strong>datos a recibir</strong> o a enviar.</td></tr><tr><td>public int getLength()</td><td>Retorna la longitud de los datos a enviar o a recibir.</td></tr><tr><td>public int getPort()</td><td>Retorna el n\xFAmero de puerto de la m\xE1quina remota a la que se le va a enviar el datagrama o del que se recibi\xF3.</td></tr></tbody></table><p>Como se intuye de la descripci\xF3n de los m\xE9todos, la forma de crear el datagrama va a depender de si queremos enviar o recibir la informaci\xF3n, ya que en cada uno de estas acciones tendremos que indicar d\xF3nde van dirigidos esos datos (env\xEDo) o bien esa informaci\xF3n ya vendr\xE1 incluida en el datagrama (recepci\xF3n) y podremos acceder a ella a trav\xE9s de los m\xE9todos getter de la clase.</p><p>Es importante hacer ver que la informaci\xF3n debe enviarse como un array de bytes y que se recibe de la misma forma, por lo que tendremos que usar los m\xE9todos de String o de cualquiera de los otros tipos primitivos de Java para convertirlos a bytes.</p><h3 id="programacion-de-aplicaciones-cliente-y-o-servidor" tabindex="-1">Programaci\xF3n de aplicaciones Cliente y/o Servidor</h3><p>En el caso de aplicaciones UDP, el protocolo de comunicaci\xF3n no tiene sentido a nivel de capa de transporte, ya que s\xF3lo se env\xEDan y reciben mensajes y hablamos de un <code>protocolo no orientado a conexi\xF3n</code>, por lo tanto no sirve para realizar confirmaciones o di\xE1logos entre la parte servidora y cliente.</p><p>La parte del protocolo se delega en una capa superior, que ser\xE1 la encargada de gestionar la comunicaci\xF3n a un nivel de abstracci\xF3n mayor.</p><p>De todas formas, la comunicaci\xF3n entre ambas partes debe seguir estando sincronizada en los que a env\xEDos / respuestas se refiere para no dejar a la otra parte bloqueada en las lecturas.</p><p>::: info Bloqueo de lecturas con timeout Esta caracter\xEDstica, tambi\xE9n disponible para los sockets TCP, permite evitar un bloqueo infinito de un hilo a la espera de recibir datos del otro extremo del socket.</p><p>Es de especial importancia en la gesti\xF3n de las comunicaciones UDP ya que, como hemos dicho, no tienen porqu\xE9 seguir un protocolo preestablecido a nivel de transporte.</p><p>Con el m\xE9todo <code>setSoTimeout</code> de DatagramSocket podemos fijar un tiempo de espera m\xE1ximo para la recepci\xF3n de datos a trav\xE9s del socket. :::</p><h2 id="_4-4-2-cliente-udp" tabindex="-1">4.4.2. Cliente UDP</h2><p>Si nos centramos en la parte de comunicaciones, la forma general de implementar un cliente ser\xE1:</p><ol><li>El cliente crear\xE1 un socket para comunicarse con el servidor. Para enviar datagramas necesita conocer su IP y el puerto por el que escucha.</li><li>Utilizar\xE1 el m\xE9todo send() del socket para enviar la petici\xF3n en forma de datagrama. <ul><li>La informaci\xF3n se envia en un objeto de tipo DatagramPacket</li><li>El DatagramPacket almacena el contenido del mensaje en un array de bytes</li></ul></li><li>Permanece a la espera de recibir respuesta</li><li>El cliente recibe la respuesta del servidor mediante el m\xE9todo receive() del socket. <ul><li>La informaci\xF3n se recibe en un objeto de tipo DatagramPacket</li><li>El DatagramPacket almacena el contenido del mensaje en un array de bytes</li></ul></li><li>Cerrar y liberar los recursos.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicUDP_Client {

    public static void main(String[] argv) throws Exception {

        // IP y puerto al que se env\xEDa el Datagrama
        InetAddress destino = InetAddress.getLocalHost();
        int port = 12345; 
        
        // Buffer para recibir el datagrama
        byte[] buffer = new byte[1024];
        
        // El mensaje a enviar en el Datagrama se convierte a bytes
        String mensajeEnviado = &quot;Enviando Saludos !!&quot;;
        buffer = mensajeEnviado.getBytes(); //codifico String a bytes

        // Se preparara el DatagramPacket que se va a enviar
        DatagramPacket datagramaEnviado = new DatagramPacket(buffer, buffer.length, destino, port);
        // En este caso, especificamos un puerto, aunque podr\xEDamos dejarlo para
        // que el SO asigne uno libre
        DatagramSocket socket = new DatagramSocket(34567);
        
        System.out.println(&quot;Host destino : &quot; + destino.getHostName());
        System.out.println(&quot;IP Destino : &quot; + destino.getHostAddress());
        System.out.println(&quot;Puerto local del socket: &quot; + socket.getLocalPort());
        System.out.println(&quot;Puerto al que envio: &quot; + datagramaEnviado.getPort());

        // Env\xEDo del Datagrama
        socket.send(datagramaEnviado);
        
        // Cierre y liberaci\xF3n de recursos       
        socket.close(); 
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_4-4-3-servidor-udp" tabindex="-1">4.4.3 Servidor UDP</h2><p>En los sockets UDP no se establece conexi\xF3n. A pesar de que cuando los programamos s\xED existen diferencias entre el servidor y el cliente, estas no son tan claras como con los sockets TCP. La funcionalidad y el c\xF3digo que diferencia a un servidor de un cliente est\xE1 m\xE1s diluido.</p><blockquote><p>Podemos considerar servidor al que espera un mensaje y responde; y cliente al que inicia la comunicaci\xF3n.</p></blockquote><p>Tanto uno como otro si desean ponerse en contacto necesitan saber en qu\xE9 ordenador y en qu\xE9 puerto est\xE1 escuchando el otro.</p><ol><li>El servidor crea un socket asociado a un puerto local para escuchar peticiones de clientes.</li><li>Permanece a la espera de recibir peticiones.</li><li>El servidor recibe las peticiones mediante el m\xE9todo receive() del socket. <ul><li>La informaci\xF3n se recibe en un objeto de tipo DatagramPacket</li><li>El DatagramPacket almacena el contenido del mensaje en un array de bytes</li></ul></li><li>En el datagrama recibido va incluido adem\xE1s del mensaje, el puerto y la IP del cliente emisor de la petici\xF3n; lo que le permite al servidor conocer la direcci\xF3n del emisor del datagrama. Utilizando el m\xE9todo send() del socket puede enviar la respuesta al cliente emisor.</li><li>El servidor permanece a la espera de recibir m\xE1s peticiones.</li><li>Cerrar y liberar los recursos.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicUDP_Server {

    public static void main(String[] argv) throws Exception {

        // Buffer para recibir el datagrama
        byte[] bufer = new byte[1024];

        // El Socket del servidor se asocia a un puerto para que los clientes
        // puedan enviar peticiones.
        DatagramSocket socket = new DatagramSocket(12345);

        // Se espera la llegada de un DATAGRAMA
        // Al igual que con TCP, esta llamada a receive es bloqueante
        // y es la que tiene que marcar la sincronizaci\xF3n entre lecturas y 
        // escrituras de las app cliente / servidor
        System.out.println(&quot;Esperando Datagrama ................&quot;);
        // Se crea el objeto que almacenar\xE1 el mensaje enviado por el cliente
        DatagramPacket datagramaRecibido = new DatagramPacket(bufer, bufer.length);
        // Se espera el mensaje y se le pasa el datagrama para que lo almacene ah\xED
        socket.receive(datagramaRecibido);
        String mensajeRecibido = new String(datagramaRecibido.getData());

        //Informaci\xF3n recibida
        System.out.println(&quot;N\xFAmero de Bytes recibidos: &quot; + datagramaRecibido.getLength());
        System.out.println(&quot;Contenido del Paquete    : &quot; + mensajeRecibido.trim());

        System.out.println(&quot;Puerto origen del mensaje: &quot; + datagramaRecibido.getPort());

        System.out.println(&quot;IP de origen             : &quot; + datagramaRecibido.getAddress().getHostAddress());
        System.out.println(&quot;Puerto destino del mensaje:&quot; + socket.getLocalPort());

        // Liberamos los recursos
        socket.close(); 
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quedando la secuencia de acciones entre el cliente y el servidor de la siguiente manera</p><p><img src="`+d+`" alt="Estados de un servidor UDP"></p><p>Veamos ahora un ejemplo completo de C/S UDP</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicUDP_Client2 {

    public static void main(String args[]) throws Exception {

        // FLUJO PARA ENTRADA ESTANDAR
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

        DatagramSocket clientSocket = new DatagramSocket();
        byte[] enviados = new byte[1024];
        byte[] recibidos = new byte[1024];

        // DATOS DEL SERVIDOR al que enviar mensaje
        InetAddress IPServidor = InetAddress.getLocalHost();// localhost
        int puerto = 9876; // puerto por el que escucha

        // INTRODUCIR DATOS POR TECLADO
        System.out.print(&quot;Introduce mensaje: &quot;);
        String cadena = in.readLine();
        enviados = cadena.getBytes();

        // ENVIANDO DATAGRAMA AL SERVIDOR
        System.out.println(&quot;Enviando &quot; + enviados.length + &quot; bytes al servidor.&quot;);
        DatagramPacket envio = new DatagramPacket(enviados, enviados.length, IPServidor, puerto);
        clientSocket.send(envio);

        // RECIBIENDO DATAGRAMA DEL SERVIDOR
        DatagramPacket recibo = new DatagramPacket(recibidos, recibidos.length);
        System.out.println(&quot;Esperando datagrama....&quot;);
        clientSocket.receive(recibo);
        String mayuscula = new String(recibo.getData());

        // OBTENIENDO INFORMACI\xD3N DEL DATAGRAMA
        InetAddress IPOrigen = recibo.getAddress();
        int puertoOrigen = recibo.getPort();
        System.out.println(&quot;\\tProcedente de: &quot; + IPOrigen + &quot;:&quot; + puertoOrigen);
        System.out.println(&quot;\\tDatos: &quot; + mayuscula.trim());

        //cerrar socket
        clientSocket.close();

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicUDP_Server2 {

    public static void main(String args[]) throws Exception {

        //Puerto por el que escucha el servidor: 9876
        DatagramSocket serverSocket = new DatagramSocket(9876);
        byte[] recibidos = new byte[1024];
        byte[] enviados = new byte[1024];
        String cadena;

        while (true) {
            System.out.println(&quot;Esperando datagrama.....&quot;);

            //RECIBO DATAGRAMA
            recibidos = new byte[1024];
            DatagramPacket paqRecibido = new DatagramPacket(recibidos, recibidos.length);
            serverSocket.receive(paqRecibido);
            cadena = new String(paqRecibido.getData());

            //DIRECCION ORIGEN
            InetAddress IPOrigen = paqRecibido.getAddress();
            int puerto = paqRecibido.getPort();
            System.out.println(&quot;\\tOrigen: &quot; + IPOrigen + &quot;:&quot; + puerto);
            System.out.println(&quot;\\tMensaje recibido: &quot; + cadena.trim());

            //CONVERTIR CADENA A MAY\xDASCULA
            String mayuscula = cadena.trim().toUpperCase();
            enviados = mayuscula.getBytes();

            //ENVIO DATAGRAMA AL CLIENTE
            DatagramPacket paqEnviado = new DatagramPacket(enviados, enviados.length, IPOrigen, puerto);
            serverSocket.send(paqEnviado);

            // Condici\xF3n de finalizaci\xF3n
            if (cadena.trim().equals(&quot;*&quot;)) {
                break;
            }

        }//Fin de while

        serverSocket.close();
        System.out.println(&quot;Socket cerrado...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_4-4-4-multicast-socket" tabindex="-1">4.4.4 Multicast socket</h2><p>La clase MulticastSocket es \xFAtil para enviar paquetes a m\xFAltiples destinos simult\xE1neamente.</p><p>Para poder recibir estos paquetes es necesario establecer un grupo multicast, que es un grupo de direcciones IP que comparten el mismo n\xFAmero de puerto.</p><p>Cuando se env\xEDa un mensaje a un grupo de multicast, todos los que pertenezcan a ese grupo recibir\xE1n el mensaje.</p><p>La pertenencia al grupo es transparente al emisor, es decir, el emisor no conoce el n\xFAmero de miembros del grupo ni sus direcciones IP.</p><p>::: info Grupo multicast</p><p>Un grupo multicast se especifica mediante una direcci\xF3n IP de clase D y un n\xFAmero de puerto UDP est\xE1ndar.</p><p>Las direcciones desde la 224.0.0.0 a la 239.255.255.255 est\xE1n destinadas para ser direcciones de multicast.</p><p>La direcci\xF3n 224.0.0.0 est\xE1 reservada y no debe ser utilizada. :::</p><p>Los m\xE9todos que proporciona la clase MulticastSocket son</p><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>MulticastSocket() throws IOException</td><td>Construye un socket multicast dejando al SO que asigne un puerto libre.</td></tr><tr><td>MulticastSocket(int port) throws IOException</td><td>Construye un socket multicast y lo conecta al puerto local especificado.</td></tr><tr><td>public void <strong>receive</strong> (DatagramPacket p) throws IOException</td><td>Recibe un DatagramPacket del socket, y llena el buffer con los datos que recibe.</td></tr><tr><td>public void <strong>send</strong> (DatagramPacket p) throws IOException</td><td>Env\xEDa un DatagramPacket a trav\xE9s del socket.</td></tr><tr><td>joinGroup( InetAddress multicastAddress)</td><td>Permite al socket unirse al grupo de multicast. A partir de ese momento podr\xE1 recibir los mensajes que se env\xEDan a esa direcci\xF3n. Un MulticastSocket puede estar unido a m\xE1s de un grupo multicast.</td></tr><tr><td>leaveGroup( InetAddress multicastAddress)</td><td>Permite al socket abandonar el grupo de multicast</td></tr></tbody></table><p>Y a continuaci\xF3n presentamos el esquema de llamadas seguido por un <strong>servidor multicast</strong></p><ol><li><p>Se crea el socket multicast. No hace falta especificar puerto</p><blockquote><p>MulticastSocket ms = new MulticastSocket();</p></blockquote></li><li><p>Se define el puerto multicast</p><blockquote><p>int Puerto = 12345;</p></blockquote></li><li><p>Se crea el grupo multicast</p><blockquote><p>InetAddress grupo = InetAddress.getByName(\u201C225.0.0.1\u201D);</p></blockquote></li><li><p>Se crea el datagrama</p><blockquote><p>DatagramPacket paquete = new DatagramPacket(msg.getBytes(), msg.length(), grupo, Puerto);</p></blockquote></li><li><p>Se env\xEDa el paquete al grupo</p><blockquote><p>ms.send(paquete);</p></blockquote></li><li><p>Se cierra el socket</p><blockquote><p>ms.close();</p></blockquote></li></ol><p>y el esquema de llamadas seguido por un <strong>cliente multicast</strong></p><ol><li><p>Se crea un socket multicast en el puerto establecido</p><blockquote><p>MulticastSocket ms = new MulticastSocket(12345);</p></blockquote></li><li><p>Se configura la IP del grupo al que nos conectaremos</p><blockquote><p>InetAddress grupo = InetAddress.getByName(\u201C225.0.0.1\u201D);</p></blockquote></li><li><p>Se une al grupo</p><blockquote><p>ms.joinGroup(grupo);</p></blockquote></li><li><p>Recibe el paquete del servidor multicast</p><blockquote><p>byte[] buf = new byte[1000]; DatagramPacket recibido = new DatagramPacket(buf, buf.length); ms.receive(recibido);</p></blockquote></li><li><p>Salimos del grupo multicast:</p><blockquote><p>ms.leaveGroup(grupo);</p></blockquote></li><li><p>Se cierra el socket</p><blockquote><p>ms.close();</p></blockquote></li></ol><p>Y ahora lo vemos todo junto con un ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U4_BasicMulticastServer {

    public static void main(String args[]) throws Exception {

        // Enviamos la informaci\xF3n introducida por teclado hasta que se env\xEDe un *        
        Scanner in = new Scanner(System.in);

        //Se crea el socket multicast.
        MulticastSocket ms = new MulticastSocket();
        // Se escoge un puerto para el server
        int puerto = 12345;
        // Se escoge una direcci\xF3n para el grupo
        InetAddress grupoMulticast = InetAddress.getByName(&quot;225.0.0.1&quot;);

        String cadena = &quot;&quot;;
        while (!cadena.trim().equals(&quot;*&quot;)) {

            System.out.print(&quot;Datos a enviar al grupo: &quot;);
            cadena = in.nextLine();

            // Enviamos el mensaje a todos los clientes que se hayan unido al grupo
            DatagramPacket paquete = new DatagramPacket(cadena.getBytes(), cadena.length(), grupoMulticast, puerto);
            ms.send(paquete);
        }

        // Cerramos recursos
        ms.close();
        System.out.println(&quot;Socket cerrado...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U4_BasicMulticastClient {

    public static void main(String args[]) throws Exception {

        //Se crea el socket multicast
        // El puerto debe ser el mismo en todos los clientes, ya que el 
        // servidor multicast env\xEDa la informaci\xF3n a la IP multicast y a un puerto
        int puerto = 12345;//Puerto multicast
        MulticastSocket ms = new MulticastSocket(puerto);

        //Nos unimos al grupo multicast
        InetAddress grupo = InetAddress.getByName(&quot;225.0.0.1&quot;);
        ms.joinGroup(grupo);
        String msg = &quot;&quot;;

        while (!msg.trim().equals(&quot;*&quot;)) {
            // El buffer se crea dentro del bucle para que se sobrescriba 
            // con cada nuevo mensaje
            byte[] buf = new byte[1000];
            DatagramPacket paquete = new DatagramPacket(buf, buf.length);
            //Recibe el paquete del servidor multicast
            ms.receive(paquete);
            msg = new String(paquete.getData());
            System.out.println(&quot;Recibo: &quot; + msg.trim());
        }

        // Abandonamos grupo
        ms.leaveGroup(grupo);

        // Cerramos recursos
        ms.close();
        System.out.println(&quot;Socket cerrado...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info mezcla de sockets en una app Ya hemos visto todo el abanico de posibilidades que tenemos para comunicar dos procesos en red.</p><p>A partir de este momento, en nuestras aplicaciones no s\xF3lo tenemos que elegir uno de ellos, sino que podemos tener varios sockets, de diferente tipo, para comunicar los clientes y los servidores.</p><p>Se trata ahora de analizar en qu\xE9 situaci\xF3n es m\xE1s conveniente un tipo que otro y usarlo. Podemos ayudarnos de la creaci\xF3n de hilos que est\xE9n &quot;especializados&quot; en el env\xEDo y/o recepci\xF3n de informaci\xF3n de un socket, permitiendo que se intercambien varios mensajes a la vez. :::</p>`,67);function E(_,A){const r=t("DownloadPDF-component"),o=t("DocumentCover-component"),a=t("router-link");return u(),m("div",null,[i(r),i(o,{titulo:"4.4 UDP Sockets"}),b,e("nav",g,[e("ul",null,[e("li",null,[i(a,{to:"#_4-4-1-client-server-communication-using-udp-sockets"},{default:n(()=>[q]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#datagramsocket"},{default:n(()=>[k]),_:1})]),e("li",null,[i(a,{to:"#datagrampacket"},{default:n(()=>[h]),_:1})]),e("li",null,[i(a,{to:"#programacion-de-aplicaciones-cliente-y-o-servidor"},{default:n(()=>[S]),_:1})])])]),e("li",null,[i(a,{to:"#_4-4-2-cliente-udp"},{default:n(()=>[P]),_:1})]),e("li",null,[i(a,{to:"#_4-4-3-servidor-udp"},{default:n(()=>[y]),_:1})]),e("li",null,[i(a,{to:"#_4-4-4-multicast-socket"},{default:n(()=>[D]),_:1})])])]),f])}const R=c(p,[["render",E],["__file","sockets-udp.html.vue"]]);export{R as default};
