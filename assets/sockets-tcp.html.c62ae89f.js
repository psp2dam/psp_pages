import{_ as d,a as t,b as c,c as u,d as v,e as m}from"./multithread_server_sequence.7901f27a.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as b,c as h,d as i,a as e,w as n,f as g,r,b as s}from"./app.b80cbaa0.js";const S={},q=e("h1",{id:"_4-3-tcp-sockets",tabindex:"-1"},"4.3 TCP Sockets",-1),k={class:"table-of-contents"},y=s("4.3.1. Comunicaci\xF3n cliente/servidor con sockets TCP"),f=s("Programaci\xF3n de aplicaciones Cliente y/o Servidor"),_=s("4.3.2. Cliente TCP"),C=s("Streams para E/S en los sockets"),E=s("4.3.3 Servidor TCP"),j=s("4.3.4 Servidor multihilo"),w=g(`<h2 id="_4-3-1-comunicacion-cliente-servidor-con-sockets-tcp" tabindex="-1">4.3.1. Comunicaci\xF3n cliente/servidor con sockets TCP</h2><p>Oracle ha resumido el uso de los sockets en un breve tutorial. Todo lo que podemos ver en ese tutorial lo vamos a ir comentando y ampliando en este apartado del tema</p><p><a href="https://docs.oracle.com/javase/tutorial/networking/sockets/index.html" target="_blank" rel="noopener noreferrer">Tutorial de Oracle: All about sockets</a></p><p>La interfaz Java que da soporte a sockets TCP est\xE1 constituida por las clases <strong>ServerSocket</strong> y <strong>Socket</strong>.</p><ul><li><p>ServerSocket: es utilizada por un servidor para crear un socket en el puerto en el que escucha las peticiones de conexi\xF3n de los clientes. Su m\xE9todo <code>accept</code> toma una petici\xF3n de conexi\xF3n de la cola, o si la cola est\xE1 vac\xEDa, se bloquea hasta que llega una petici\xF3n.</p><p>El resultado de ejecutar accept es una instancia de Socket, a trav\xE9s del cual el servidor tiene acceso a los datos enviados por el cliente.</p></li><li><p>Socket: es utilizada tanto por el cliente como por el servidor. El cliente crea un socket especificando el nombre DNS del host y el puerto del servidor, as\xED se crea el socket local y adem\xE1s se conecta con el servicio.</p><p>Esta clase proporciona los m\xE9todos <code>getInputStream</code> y <code>getOutputStream</code> para acceder a los dos streams asociados a un socket (recordemos que son bidireccionales), y devuelve tipos de datos InputStream y OutputStream, respectivamente, a partir de los cuales podemos construir <code>BufferedReader</code> y <code>PrintWriter</code>, respectivamente, para poder procesar los datos de forma m\xE1s sencilla.</p></li></ul><h3 id="programacion-de-aplicaciones-cliente-y-o-servidor" tabindex="-1">Programaci\xF3n de aplicaciones Cliente y/o Servidor</h3><p>Al crear aplicaciones cliente y servidor puede que nos encontremos con varios escenarios, a saber:</p><ul><li>Si tenemos que programar solo el servidor <strong>deberemos definir un protocolo</strong> de comunicaci\xF3n para usar ese servidor.</li><li>Si tenemos que programar solo el cliente <strong>necesitaremos conocer el protocolo</strong> de comunicaci\xF3n para conectar con ese servidor.</li><li>Si tenemos que programar el cliente y el servidor, tendremos que empezar por <strong>definir el protocolo</strong> de comunicaci\xF3n entre ambos.</li></ul><p>::: info Herramientas para definir los protocolos Dentro de todos los diagramas que ofrece UML, el diagrama de secuencia es el que mejor se adapta para definir los protocolos de comunicaci\xF3n entre clases y las interacciones que se producen.</p><p>Para crear estos diagramas existen multitud de herramientas, tanto de escritorio como online. De todas ellas cabe destacar:</p><ul><li><a href="https://mermaid.live/" target="_blank" rel="noopener noreferrer">Mermaid Live editor</a> que usa una <a href="https://mermaid-js.github.io/mermaid/#/sequenceDiagram" target="_blank" rel="noopener noreferrer">sintaxis en modo texto</a> para definir los diagramas.</li><li><a href="https://www.websequencediagrams.com/" target="_blank" rel="noopener noreferrer">WebSequenceDiagrams</a>: M\xE1s visual y tambi\xE9n con una definici\xF3n textual de los diagramas.</li><li><a href="https://online.visual-paradigm.com/drive/#diagramlist:proj=0&amp;dashboard" target="_blank" rel="noopener noreferrer">Visual Paradigm Online</a>: Herramienta totalmente visual y con unos resultados m\xE1s espectaculares.</li></ul><p>Estas herramientas son las que ten\xE9is que usar en las actividades en las que se os pida definir un protocolo de comunicaci\xF3n cliente / servidor. :::</p><h2 id="_4-3-2-cliente-tcp" tabindex="-1">4.3.2. Cliente TCP</h2><p>Si nos centramos en la parte de comunicaciones, la forma general de implementar un cliente ser\xE1:</p><ol><li>Crear un objeto de la clase Socket, indicando host y puerto donde corre el servicio.</li><li>Obtener las referencias al stream de entrada y al de salida al socket.</li><li>Leer desde y escribir en el stream de acuerdo al protocolo del servicio. Para ello emplear alguna de las facilidades del paquete java.io.</li><li>Cerrar los streams.</li><li>Cerrar el socket.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicClient {

    public static void main(String[] args) throws IOException {
        Socket socketCliente = null;
        BufferedReader entrada = null;
        PrintWriter salida = null;

        // Creamos un socket en el lado cliente, enlazado con un
        // servidor que est\xE1 en la misma m\xE1quina que el cliente
        // y que escucha en el puerto 4444
        try {
            socketCliente = new Socket(&quot;localhost&quot;, 4444);
            // Obtenemos el canal de entrada
            entrada = new BufferedReader(
                    new InputStreamReader(socketCliente.getInputStream()));
            // Obtenemos el canal de salida
            salida = new PrintWriter(
                    new BufferedWriter(
                            new OutputStreamWriter(socketCliente.getOutputStream())), true);
        } catch (IOException e) {
            System.err.println(&quot;No puede establecer canales de E/S para la conexi\xF3n&quot;);
            System.exit(-1);
        }
        Scanner stdIn = new Scanner(System.in);

        String linea;

        // El programa cliente no analiza los mensajes enviados por el
        // usuario, simplemente los reenv\xEDa al servidor hasta que este
        // se despide con &quot;Adios&quot;
        try {
            while (true) {
                // Leo la entrada del usuario
                linea = stdIn.nextLine();
                // La envia al servidor por el OutputStream
                salida.println(linea);
                // Recibe la respuesta del servidor por el InputStream
                linea = entrada.readLine();
                // Env\xEDa a la salida est\xE1ndar la respuesta del servidor
                System.out.println(&quot;Respuesta servidor: &quot; + linea);
                // Si es &quot;Adios&quot; es que finaliza la comunicaci\xF3n
                if (linea.equals(&quot;Adios&quot;)) {
                    break;
                }
            }
        } catch (IOException e) {
            System.out.println(&quot;IOException: &quot; + e.getMessage());
        }

        // Libera recursos
        salida.close();
        entrada.close();
        stdIn.close();
        socketCliente.close();
    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Herramientas para simular clientes gen\xE9ricos Si s\xF3lo tenemos que desarrollar un servidor y no tenemos o no queremos hacer un cliente para las pruebas, tenemos varias herramientas que nos ayudan a hacer de clientes gen\xE9ricos, \xFAtiles para una gran variedad de servidores, incluso para servidores est\xE1ndar como FTP, HTTP, etc.</p><p>La primera herramienta es una aplicaci\xF3n y un protocolo de nivel de aplicaci\xF3n de TCP/IP, es la herramienta <code>Telnet</code>.</p><p>Esta herramienta suele venir instalada en los sistemas GNU/Linux y OS X. Sin embargo en los sistemas Windows viene deshabilitada por defecto.</p><p>Os dejo un enlace al art\xEDculo de Xataka <a href="https://www.xataka.com/basics/telnet-que-como-activarlo-windows-10" target="_blank" rel="noopener noreferrer">Telnet: qu\xE9 es y c\xF3mo activarlo en Windows 10</a>.</p><p>Es importante que lo activ\xE9is tanto en clase como en el aula.</p><p>La segunda herramienta es NetCat. Es una herramienta muy vers\xE1til y potente, ya que no s\xF3lo puede hacernos de cliente, sino que tambi\xE9n puede servir como servidor.</p><p>Como muchas otras herramientas, esta tambi\xE9n viene instalada de serie en GNU/Linux y OS X, pero no en Windows. Su uso en los sistemas de Microsoft es algo m\xE1s controvertido ya que el sistema la detecta como un virus y tenemos que habilitar su uso en el <em>Guardian</em> del SO.</p><p>Os dejo tambi\xE9n un enlace a este art\xEDculo de IONOS <a href="https://www.ionos.es/digitalguide/servidores/herramientas/netcat/" target="_blank" rel="noopener noreferrer">\xBFQu\xE9 es Netcat y c\xF3mo funciona?</a> :::</p><h3 id="streams-para-e-s-en-los-sockets" tabindex="-1">Streams para E/S en los sockets</h3><p>Si vemos ejemplos en Internet o en tutoriales, podemos observar que hay dos formas mayoritarias de enviar y recibir la informaci\xF3n a trav\xE9s de los streams que proporciona un socket.</p><p><img src="`+d+'" alt="Basic Stream IO"></p><p>En cualquier caso, a trav\xE9s de los streams enviamos bytes, que es la forma m\xE1s b\xE1sica de generar informaci\xF3n, bien sea a trav\xE9s de la red o entre procesos.</p><p>Como es complicado gestionar a nivel de bytes toda la informaci\xF3n que queremos enviar o recibir, usamos <code>Decorators</code> o <code>Wrappers</code> para enviar tipos de datos de un nivel de abstracci\xF3n mayor.</p><p>En los temas anteriores, cuando hemos tenido que intercambiar informaci\xF3n entre procesos, hemos estado usando BufferedReader y PrintWriter. Estas clases trabajan a nivel de Strings, y son muy \xFAtiles cuando lo que queremos intercambiar a trav\xE9s de los streams son cadenas de texto.</p><blockquote><p>En los protocolos de comunicaciones, m\xE1s del 90% de la informaci\xF3n que se intercambia, a nivel de protocolo, es en formato texto.</p></blockquote><p>Sin embargo, puede haber ocasiones en las que nos interese trabajar con tipos de datos.</p><p><code>DataInputStream</code> y <code>DataOutputStream</code> proporcionan m\xE9todos para leer y escribir Strings y todos los tipos de datos primitivos de Java, incluyendo n\xFAmeros y valores booleanos.</p><p><img src="'+t+`" alt="Basic Stream IO"></p><p>DataOutputStream codifica esos valores de forma independiente de la m\xE1quina y los env\xEDa al stream de m\xE1s bajo nivel para que los gestione como bytes. DataInputStream hace lo contrario.</p><p>As\xED, podemos trabajar con DataInputStream y DataOutputStream a partir de los streams que nos proporcionan los sockets</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// C\xF3digo en el cliente
DataInputStream dis = new DataInputStream(socket.getInputStream());
dis.readDouble();

// C\xF3digo en el servidor
DataOutputStream dos = new DataOutputStream(socket.getOutputStream());
dis.writeDouble(number);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Los m\xE9todos <code>readUTF()</code> and <code>writeUTF()</code> de DataInputStream y DataOutputStream leen y escriben un String de caracteres Unicode usando la codificaci\xF3n UTF-8.</p><p>::: warning Elige un m\xE9todo y usa siempre el mismo Es muy importante no mezclar diferentes wrappers en el mismo sistema. Aunque todos acaban utilizando el InputStream y el OutputStream, las codificaciones y la forma de enviar la informaci\xF3n no es la misma.</p><p>Por lo que, si usas DataInputStream en el cliente para leer, debes usar DataOutputStream en el servidor para enviar. Adem\xE1s de usar los m\xE9todos complementarios para la lectura y escritura, por ejemplo readInt / writeInt. :::</p><p>Informaci\xF3n extra\xEDda de <a href="https://www.oreilly.com/library/view/learning-java-4th/9781449372477/ch12s01.html" target="_blank" rel="noopener noreferrer">Learning Java, 4th Edition - O&#39;Reilly</a></p><div class="pagebreak"></div><h2 id="_4-3-3-servidor-tcp" tabindex="-1">4.3.3 Servidor TCP</h2><p>La forma de implementar un servidor ser\xE1:</p><p><img src="`+c+`" alt="Estados de un servidor monohilo"></p><ol><li>Crear un objeto de la clase ServerSocket para escuchar peticiones en el puerto asignado al servicio.</li><li>Esperar solicitudes de clientes</li><li>Cuando se produce una solicitud: <ul><li>Aceptar la conexi\xF3n obteniendo un objeto de la clase Socket</li><li>Obtener las referencias al stream de entrada y al de salida al socket anterior.</li><li>Leer datos del socket, procesarlos y enviar respuestas al cliente, escribiendo en el stream del socket.Para ello emplear alguna de las facilidades del paquete java.io.</li></ul></li><li>Cerrar los streams.</li><li>Cerrar los sockets.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class BasicServer {

    public static final int PORT = 4444;

    public static void main(String[] args) throws IOException {
        // Establece el puerto en el que escucha peticiones
        ServerSocket socketServidor = null;
        try {
            socketServidor = new ServerSocket(PORT);
        } catch (IOException e) {
            System.out.println(&quot;No puede escuchar en el puerto: &quot; + PORT);
            System.exit(-1);
        }

        Socket socketCliente = null;
        BufferedReader entrada = null;
        PrintWriter salida = null;

        System.out.println(&quot;Escuchando: &quot; + socketServidor);
        try {
            // Se bloquea hasta que recibe alguna petici\xF3n de un cliente
            // abriendo un socket para el cliente
            socketCliente = socketServidor.accept();
            System.out.println(&quot;Conexi\xF3n aceptada: &quot; + socketCliente);
            // Establece canal de entrada
            entrada = new BufferedReader(
                    new InputStreamReader(socketCliente.getInputStream()));
            // Establece canal de salida
            salida = new PrintWriter(
                    new BufferedWriter(
                            new OutputStreamWriter(socketCliente.getOutputStream())), true);

            // Hace eco de lo que le proporciona el cliente, hasta que recibe &quot;Adios&quot;
            while (true) {
                // Recibe la solicitud del cliente por el InputStream
                String str = entrada.readLine();
                // Env\xEDa a la salida est\xE1ndar el mensaje del cliente
                System.out.println(&quot;Cliente: &quot; + str);
                // Le env\xEDa la respuesta al cliente por el OutputStream                
                salida.println(str);
                // Si es &quot;Adios&quot; es que finaliza la comunicaci\xF3n
                if (str.equals(&quot;Adios&quot;)) {
                    break;
                }
            }

        } catch (IOException e) {
            System.out.println(&quot;IOException: &quot; + e.getMessage());
        }
        salida.close();
        entrada.close();
        socketCliente.close();
        socketServidor.close();
    }

}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quedando la secuencia de acciones entre el cliente y el servidor de la siguiente manera</p><p><img src="`+u+`" alt="Estados de un servidor monohilo"></p><p>El servidor monohilo se encarga de realizar las operaciones de E/S con el cliente. Hasta que no acaba no puede hacer otro <code>accept</code> y atender a otro cliente.</p><div class="pagebreak"></div><h2 id="_4-3-4-servidor-multihilo" tabindex="-1">4.3.4 Servidor multihilo</h2><p>Si queremos que un servidor pueda atender varias peticiones de forma simultanea, debemos usar hilos para dotarle de esa capacidad.</p><p>El flujo b\xE1sico ahora cambiar\xEDa para adaptarse a este formato</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>while (true) {

    Aceptar la conexi\xF3n obteniendo un objeto de la clase Socket;

    Crear un thread para que se encargue de la comunicaci\xF3n con ese cliente, es decir, 
    para que gestione el socket obtenido en el accept.;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="Estados de un servidor multihilo"></p><p>El servidor multihilo crea un nuevo hilo que se encarga de las operaciones de E/S con el cliente. Mientras tanto puede esperar la conexi\xF3n de nuevos clientes con los que volver\xE1 a hacer lo mismo.</p><p>El servidor multihilo se ayuda de una clase <code>Worker</code> que hereda de Thread, pudiendo as\xED ejecutarse concurrentemente con el hilo principal.</p><p>Esta clase <code>Worker</code> es la encargada de realizar toda la comunicaci\xF3n con el cliente y el servidor. Para poder hacerlo, en su constructor recibe el Socket que se crea cuando se recibe la conexi\xF3n de un cliente <code>ServerSocket.accept()</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static final int PORT = 4444;
public static void main(String[] args)  {
    // Establece el puerto en el que escucha peticiones
    ServerSocket socketServidor = null;
    try {
        socketServidor = new ServerSocket(PORT);
    } catch (IOException e) {
        System.out.println(&quot;No puede escuchar en el puerto: &quot; + PORT);
        System.exit(-1);
    }

    Socket socketCliente = null;

    System.out.println(&quot;Escuchando: &quot; + socketServidor);
    try {
        
        while (true) {
            // Se bloquea hasta que recibe alguna petici\xF3n de un cliente
            // abriendo un socket para el cliente
            socketCliente = socketServidor.accept();
            System.out.println(&quot;Conexi\xF3n aceptada: &quot; + socketCliente);
            // Para seguir aceptando peticiones de otros clientes
            // se crea un nuevo hilo que se encargar\xE1 de la comunicaci\xF3n con el cliente
            new Worker(socketCliente).start();
        }
                        
    ...
}    
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y esta ser\xEDa una implementaci\xF3n est\xE1ndar de un worker</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Worker extends Thread {

    private Socket socketCliente;
    private BufferedReader entrada = null;
    private PrintWriter salida = null;

    ....

    @Override
    public void run() {
        try {
            // Establece canal de entrada
            entrada = new BufferedReader(new InputStreamReader(socketCliente.getInputStream()));
            // Establece canal de salida
            salida = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socketCliente.getOutputStream())), true);

            // Realizamos la comunicaci\xF3n entre servidor y cliente
            // **** ES LO QUE CAMBIA EN CADA EJERCICIO ****

            // Hacemos una recepci\xF3n de informaci\xF3n desde el cliente
            String mensajeRecibido = entrada.readLine();
            System.out.println(&quot;&lt;-- Cliente: &quot; + mensajeRecibido);
            
            // Hacemos un env\xEDo al cliente
            String mensajeEnviado = &quot;Mensaje enviado desde el servidor al cliente&quot;;
            salida.println(mensajeEnviado);
            System.out.println(&quot;--&gt; Cliente: &quot; + mensajeEnviado);
        }
        ....
}        
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quedando ahora la secuencia de acciones entre el cliente y el servidor de la siguiente manera</p><p><img src="`+m+'" alt="Estados de un servidor monohilo"></p><div class="pagebreak"></div><p>::: info Ejecuci\xF3n de m\xFAltiples clientes desde l\xEDnea de comandos Para poder lanzar varias aplicaciones java a la vez, la forma m\xE1s correcta de hacerlo es desde una terminal de comandos. Esto nos permite poder pasarle argumentos a todas las clases, no s\xF3lo a la que est\xE1 marcada como <em>principal</em> en el proyecto.</p><p>Aqu\xED tenemos dos posibilidades, <strong>ejecutar las clases individualmente</strong>, tal y como hacemos desde el IDE o bien <strong>lanzar las clases desde un archivo JAR</strong>.</p><p>En ambos casos, necesitamos haber compilado y construido el proyecto (<em>F11 \xF3 Shift+F11 en Netbeans</em>).</p><p>Ejecuci\xF3n de clases individuales</p><ul><li><p>Lo primero, tal y como se ha indicado anteriormente, debemos tener las clases compiladas.</p></li><li><p>A continuaci\xF3n, al igual que hac\xEDamos con los procesos, debemos ubicarnos en la carpeta <code>build/classes</code> del proyecto.</p></li><li><p>Desde ah\xED, ejecutaremos</p><blockquote><p>build/classes$ java psp.actividades.U4AX_ClaseServidor 5566</p></blockquote><p>los valores que ponemos a continuaci\xF3n del nombre de la clase son los par\xE1metros que la clase recibir\xE1 en el args[] de su m\xE9todo main.</p><p>y para la clase o clases que no sean las principales</p><blockquote><p>build/classes$ java psp.actividades.U4AX_ClaseSCliente localhost 5566</p></blockquote><p>Si queremos lanzar m\xE1s de un cliente, repetiremos el comando desde otra ventana de comandos.</p></li></ul><p>Lanzar las clases desde un archivo JAR</p><ul><li><p>Lo primero, tal y como se ha indicado anteriormente, debemos tener el proyecto construido</p></li><li><p>A continuaci\xF3n, y a diferencia del caso anterior, debemos ubicarnos en el directorio donde est\xE9 el archivo JAR. Si no lo hemos movido, estar\xE1 en la carpeta <code>dist</code> del proyecto.</p></li><li><p>Desde ah\xED, ejecutaremos, <strong>para la clase principal del proyecto</strong></p><blockquote><p>dist$ java -jar U4AX_ProyectoClienteServidor.jar 5566</p></blockquote><blockquote><p>dist$ java -cp U4AX_ProyectoClienteServidor.jar psp.actividades.U4AX_ClaseServidor 5566</p></blockquote><p>los valores que ponemos a continuaci\xF3n del nombre de la clase son los par\xE1metros que la clase recibir\xE1 en el args[] de su m\xE9todo main.</p><p>y para la clase o clases que no sean las principales</p><blockquote><p>dist$ java -cp U4AX_ProyectoClienteServidor.jar psp.actividades.U4AX_ClaseCliente localhost 5566</p></blockquote><p>Si queremos lanzar m\xE1s de un cliente, repetiremos el comando desde otra ventana de comandos. :::</p></li></ul>',72);function x(O,I){const l=r("DownloadPDF-component"),o=r("DocumentCover-component"),a=r("router-link");return b(),h("div",null,[i(l),i(o,{titulo:"4.3 TCP Sockets"}),q,e("nav",k,[e("ul",null,[e("li",null,[i(a,{to:"#_4-3-1-comunicacion-cliente-servidor-con-sockets-tcp"},{default:n(()=>[y]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#programacion-de-aplicaciones-cliente-y-o-servidor"},{default:n(()=>[f]),_:1})])])]),e("li",null,[i(a,{to:"#_4-3-2-cliente-tcp"},{default:n(()=>[_]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#streams-para-e-s-en-los-sockets"},{default:n(()=>[C]),_:1})])])]),e("li",null,[i(a,{to:"#_4-3-3-servidor-tcp"},{default:n(()=>[E]),_:1})]),e("li",null,[i(a,{to:"#_4-3-4-servidor-multihilo"},{default:n(()=>[j]),_:1})])])]),w])}const T=p(S,[["render",x],["__file","sockets-tcp.html.vue"]]);export{T as default};
