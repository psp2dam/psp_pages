import{_ as c,a as u}from"./client_sample_state_protocol.1514f343.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as v,c as p,d as n,a as e,w as i,e as l,f as r,r as o,b as s}from"./app.b80cbaa0.js";const b={},g=e("h1",{id:"_4-5-protocolos-con-estado",tabindex:"-1"},"4.5 Protocolos con estado",-1),h={class:"table-of-contents"},q=s("4.5.1. Protocolos con y sin estado"),f=s("Protocolos sin estado"),E=s("Protocolos con estado"),j=s("4.5.2 Programaci\xF3n de servidores basados en estados"),S=s("Programaci\xF3n de aplicaciones Cliente y/o Servidor"),y=s("4.5.3. Ejemplo de servidor con estados"),_=s("Ejemplo del Worker que implementa el protocolo"),k=s("4.5.4. Ejemplo de cliente con estados"),C=s('Ejemplo de cliente "gen\xE9rico" que implementa el protocolo'),x=r('<h2 id="_4-5-1-protocolos-con-y-sin-estado" tabindex="-1">4.5.1. Protocolos con y sin estado</h2><p>Como ya hemos comentado anteriormente, un protocolo, aplicado al mundo de las comunicaciones inform\xE1ticas, es un conjunto de reglas que especifican la manera en la que se realiza la comunicaci\xF3n entre dos interlocutores.</p><p>Este conjunto de reglas establece el formato de los mensajes que se intercambian <code>(texto, binario, JSON, XML, CSV, ...)</code>, las acciones que cada uno de los extremos de la comunicaci\xF3n deben realizar en cada momento <code>(env\xEDo o recepci\xF3n)</code> y, lo que nos ocupa en este apartado del tema, si las acciones dependen de acciones anteriores o no.</p><h3 id="protocolos-sin-estado" tabindex="-1">Protocolos sin estado</h3><p>En inform\xE1tica, un protocolo sin estado es un protocolo de comunicaciones que trata cada petici\xF3n como una transacci\xF3n independiente que no tiene relaci\xF3n con cualquier solicitud anterior, de modo que la comunicaci\xF3n se compone de pares independientes de solicitud y respuesta. <a href="https://es.wikipedia.org/wiki/Protocolo_sin_estado" target="_blank" rel="noopener noreferrer">Wikipedia: Protocolo sin estado</a></p><p>El ejemplo m\xE1s conocido de protocolo sin estado es HTTP.1\u200B El protocolo no proporciona medio alguno de almacenamiento de datos de un usuario entre las peticiones, dejando esta tarea a niveles superiores y haciendo necesario el reenv\xEDo de informaci\xF3n de manera continua para simular un funcionamiento con estado (cookies, cabeceras, etc.).</p><h3 id="protocolos-con-estado" tabindex="-1">Protocolos con estado</h3><p>Un protocolo sin estado no requiere que el servidor retenga informaci\xF3n de la sesi\xF3n o de estado acerca de los intercambios de informaci\xF3n durante la realizaci\xF3n de m\xFAltiples peticiones. En contraste, un protocolo que requiere el mantenimiento del <strong>estado interno en el servidor</strong> se conoce como un <strong>protocolo con estado</strong>.</p><p>Por lo tanto, un estado es una configuraci\xF3n en un programa o m\xE1quina que depende de los estados anteriores y que determina el funcionamiento del sistema, en funci\xF3n de la entrada recibida y del estado actual en el que se encuentre el sistema.</p><p>Poniendo una analog\xEDa, podemos tomar una solicitud a la administraci\xF3n, donde debemos realizar varios pasos hasta resolver la solicitud.</p><ol><li>En primer lugar se rellena una instancia con los datos y se env\xEDa al departamento correspondiente.</li><li>Ese departamento comprobar\xE1 la instancia recibida y contestar\xE1 solicitando informaci\xF3n adicional o confirmando que la solicitud se ha recibido correctamente.</li><li>En un proceso posterior, se solicita un pago de tasas al usuario.</li><li>El usuario tiene que realizar el pago de tasas y enviar el justificante.</li><li>Tras cotejar toda la informaci\xF3n, se le solicita al usuario que aporte los documentos originales.</li><li>El usuario se persona para mostrar la documentaci\xF3n original</li><li>Finalmente se resuelve la solicitud informando al usuario el resultado de la misma.</li></ol><p>Esto, que puede ser un procedimiento normal, refleja claramente un proceso en el que se siguen una serie de pasos y cuyo orden no se puede cambiar.</p><p>Por ejemplo, no tendr\xEDa sentido hacer el pago de las tasas (paso 4) sin antes haber presentado la solicitud (paso 1) o sin haber recibido la confirmaci\xF3n de que la solicitud est\xE1 completa.</p><p>Esto mismo pasa con algunos protocolos de comunicaci\xF3n.</p><h2 id="_4-5-2-programacion-de-servidores-basados-en-estados" tabindex="-1">4.5.2 Programaci\xF3n de servidores basados en estados</h2><p>Hay toda una teor\xEDa matem\xE1tica, <code>la teor\xEDa de grafos</code>, desarrollada en torno a esto, junto con un modelo computacional, <code>los aut\xF3matas finitos</code>, que estudian y optimizan el desarrollo de aplicaciones basadas en estados.</p><p>La teor\xEDa de grafos es una rama de las matem\xE1ticas y las ciencias de la computaci\xF3n que estudia las propiedades de los grafos</p><p>La teor\xEDa de grafos tiene sus fundamentos en las <code>matem\xE1ticas discretas</code> y de las <code>matem\xE1ticas aplicadas</code>. Esta teor\xEDa requiere de diferentes conceptos de diversas \xE1reas como <strong>combinatoria, \xE1lgebra, probabilidad, geometr\xEDa de pol\xEDgonos, aritm\xE9tica y topolog\xEDa</strong>. Actualmente ha tenido mayor influencia en el campo de la inform\xE1tica, las ciencias de la computaci\xF3n y telecomunicaciones. Debido a la gran cantidad de aplicaciones en la optimizaci\xF3n de recorridos, procesos, flujos y algoritmos de b\xFAsquedas, entre otros</p><p>Un aut\xF3mata finito o m\xE1quina de estado finito es un modelo computacional que toma decisiones de computaci\xF3n de forma autom\xE1tica sobre una entrada para producir una salida.</p><p>Este modelo est\xE1 conformado por un alfabeto, un conjunto de estados finito, una funci\xF3n de transici\xF3n, un estado inicial y un conjunto de estados finales.</p><p>La finalidad de los aut\xF3matas finitos, entre otras, es la de reconocer lenguajes regulares, que corresponden a los lenguajes formales m\xE1s simples seg\xFAn la Jerarqu\xEDa de Chomsky.</p><h3 id="programacion-de-aplicaciones-cliente-y-o-servidor" tabindex="-1">Programaci\xF3n de aplicaciones Cliente y/o Servidor</h3><p>Como en todos los casos que hemos estudiado con anterioridad, el protocolo es la pieza com\xFAn entre los clientes y los servidores.</p><p>Nuestros clientes podr\xE1n estar bien o mal programados, de hecho muchos de nuestros clientes son interactivos, por lo que podemos alterar el orden de los comandos a nuestro antojo, no siendo esto ning\xFAn problema.</p><p>Debe ser el servidor el que tenga el control del proceso, el que asegure la integridad del sistema y de los datos, por lo tanto va a ser en la parte del servidor donde tengamos que realizar las modificaciones para adaptarlo al control y gesti\xF3n de los estados.</p><p>Esto no quita que los clientes deban seguir <code>sincronizados</code> con el servidor para evitar situaciones de interbloqueo, ya que de una forma u otra el cliente siempre debe seguir el protocolo, aunque no los estados tal y como hemos dicho.</p><h2 id="_4-5-3-ejemplo-de-servidor-con-estados" tabindex="-1">4.5.3. Ejemplo de servidor con estados</h2><p>Vamos a ver qu\xE9 pasos debemos seguir para controlar los estados en el servidor y c\xF3mo adaptar un cliente.</p><p>El ejemplo que vamos a utilizar es el de la actividad <code>U4A03_ProtocoloSaludo</code>. Primero vamos a aclarar c\xF3mo debe funcionar este protocolo.</p><p>Si el cliente est\xE1 bien programado, el intercambio de informaci\xF3n entre Cliente y Servidor se realiza en tres pasos</p><ol><li>Cliente env\xEDa &quot;Hi Server!&quot;</li><li>Servidor responde &quot;Hi Client!&quot;</li><li>Cliente responde &quot;By Server!&quot;</li></ol><p>Ante un funcionamiento normal, este protocolo es bastante f\xE1cil de implementar. Sin embargo,</p><ul><li>\xBFQu\xE9 pasa si el cliente env\xEDa &quot;By Server!&quot; como primer mensaje?</li><li>\xBFQu\xE9 debe responder el servidor si no recibe el mensaje que est\xE1 esperando?</li><li>\xBFQu\xE9 debe hacer el cliente si no recibe el mensaje que est\xE1 esperando?</li></ul><p>Estas son las circunstancias a las que debemos responder con los estados del protocolo, indicando en cada caso qu\xE9 debe hacer cada una de las partes. Todo depender\xE1 de la funcionalidad que est\xE9 implementando el protocolo.</p><p>Cada caso es diferente, por ejemplo, si es importante hacer los tres pasos en orden, ante cualquier fallo se debe volver a empezar (un borrado en una BD, una autenticaci\xF3n de tres v\xEDas). Si por el contrario, los dos primeros pasos se tienen que realizar de forma conjunta, pero el tercero es independiente, si el incumplimiento del protocolo se produce en ese momento, no es necesario que se repitan los dos primeros pasos, sino que s\xF3lo ser\xE1 necesario repetir el \xFAltimo.</p><p><img src="'+c+'" alt="Diagrama de estados U4A03_ProtocoloSaludo"></p>',36),I=r(`<h3 id="ejemplo-del-worker-que-implementa-el-protocolo" tabindex="-1">Ejemplo del Worker que implementa el protocolo</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U4A03_SaludoWorker extends Thread {

    Socket socketCliente;
    BufferedReader entrada;
    PrintWriter salida;

    private final String[] messages = {&quot;Hi Server!&quot;, &quot;Hi Client!&quot;, &quot;Bye Server!&quot;, &quot;Error. Unknown or unexpected command&quot;};

    public enum Estados {
        HI, BYE, END;
    }
    Estados estado;

    U4A03_SaludoWorker(Socket socketCliente) {
        this.socketCliente = socketCliente;
        // Inicializamos el valor del estado al estado inicial
        estado = Estados.HI;
    }

    @Override
    public void run() {
        try {
            // Establece canal de entrada
            entrada = new BufferedReader(
                    new InputStreamReader(socketCliente.getInputStream()));

            // Obtenemos el canal de salida
            salida = new PrintWriter(
                    new BufferedWriter(
                            new OutputStreamWriter(socketCliente.getOutputStream())), true);

            // Recibe lo que env\xEDa el cliente hasta que el mensaje sea
            // END OF TRANSMISSION
            while (estado != Estados.END) {
                // Recibe la solicitud del cliente por el InputStream
                String str = entrada.readLine();

                // Comprobamos si se ha cerrado el extremo cliente del socket
                // Y damos por concluida la comunicaci\xF3n.
                if (str == null) {
                    estado = Estados.END;
                } else {
                    // Mostramos la informaci\xF3n recibida por consola
                    System.out.println(&quot;CLIENTE &gt; &quot; + str);
                }

                // Controlamos la respuesta en funci\xF3n del mensaje recibido y 
                // el estado actual
                switch (estado) {
                    case HI:
                        if (messages[0].equals(str)) {
                            // Enviamos respuesta al cliente
                            salida.println(messages[1]);
                            // Cambiamos el estado del protocolo
                            estado = Estados.BYE;
                        } else {
                            // Enviamos error al cliente
                            salida.println(messages[3]);
                        }
                        break;
                    case BYE:
                        if (messages[2].equals(str)) {
                            // Cambiamos el estado del protocolo
                            estado = Estados.END;
                        } else {
                            // Enviamos error al cliente
                            salida.println(messages[3]);
                            estado = Estados.HI;
                        }
                        break;
                    case END:
                        // No ser\xEDa necesario contemplarlo en este caso
                        // Pero s\xED en otros en los que se tenga que enviar 
                        // alg\xFAn mensaje antes de salir.
                        break;
                }
            }
        } catch (IOException e) {
            System.out.println(&quot;Error de comunicaci\xF3n con el cliente&quot;);
        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
            e.printStackTrace();
        } finally {
            try {
                entrada.close();
                System.out.println(&quot;Conexi\xF3n cerrada: &quot; + socketCliente);
                socketCliente.close();
            } catch (IOException e) {
                System.out.println(&quot;Error inesperado cerrando los recursos&quot;);
            }
        }
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El c\xF3digo corresponde al worker de un servidor multihilo. Analicemos ahora el c\xF3digo por partes</p><p>Es recomendable usar propiedades para guardar los mensajes que queramos comparar y tener un ENuM para definir los estados. Los <code>enum</code> en Java permiten ser usados en los bloques switch-case.</p><p>La propiedad <strong>estado</strong> va a ser el punto central que controle el flujo de ejecuci\xF3n del servidor.</p><div class="language-java ext-java"><pre class="language-java"><code>private final String[] messages = {&quot;Hi Server!&quot;, &quot;Hi Client!&quot;, &quot;Bye Server!&quot;, &quot;Error. Unknown or unexpected command&quot;};

    public enum Estados {
        HI, BYE, END;
    }
    Estados estado;
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><p>En el constructor, adem\xE1s de todas las propiedades, inicializamos el estado, asign\xE1ndole el valor del estado inicial.</p><div class="language-java ext-java"><pre class="language-java"><code>U4A03_SaludoWorker(Socket socketCliente) {
    this.socketCliente = socketCliente;
    // Inicializamos el valor del estado al estado inicial
    estado = Estados.HI;
}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div></div><p>El servidor estar\xE1 ejecut\xE1ndose hasta que se alcance el estado final</p><div class="language-java ext-java"><pre class="language-java"><code>// Recibe lo que env\xEDa el cliente hasta que el mensaje sea
// END OF TRANSMISSION
while (estado != Estados.END) {
</code></pre></div><p>En este ejemplo, el intercambio de informaci\xF3n con el cliente se hace uno a uno, es decir se recibe un mensaje y se env\xEDa una respuesta, pero no tiene porqu\xE9 ser as\xED, se pueden recibir varios mensajes y no enviar respuesta, o cualquier combinaci\xF3n de env\xEDo respuesta que nos imaginemos.</p><p>El c\xF3digo que sigue e un control para saber si el cliente ha cerrado el socket, as\xED evitamos tener excepciones de tipo NullPointerException o dejar al servidor en un bucle infinito. Forzamos la salida cambiando el estado del protocolo.</p><div class="language-java ext-java"><pre class="language-java"><code>// Comprobamos si se ha cerrado el extremo cliente del socket
// Y damos por concluida la comunicaci\xF3n.
if (str == null) {
    estado = Estados.END;
} else {
    // Mostramos la informaci\xF3n recibida por consola
    System.out.println(&quot;CLIENTE &gt; &quot; + str);
}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div><p>Este es el c\xF3digo que implementa el diagrama de estados que he dise\xF1ado para esta actividad. Fijaos que el servidor tiene que realizar una comprobaci\xF3n para cada l\xEDnea que sale de un estado. En este caso al ser s\xF3lo dos l\xEDneas, sirve con un if-else, pero puede ser un n\xFAmero mayor de opciones.</p><p>Adem\xE1s, una de las opciones tiene un comportamiento totalmente diferente al resto, ya que <strong>cuando se recibe el mensaje final, el protocolo no dice que enviemos una respuesta al cliente</strong>.</p><p>Esto <code>debemos controlarlo en el cliente</code>, porque si lo programamos de forma que env\xEDe un mensaje y espere una respuesta, puede quedarse bloqueado en la lectura. Aprovechando que este es el \xFAltimo mensaje, m\xE1s adelante veremos c\xF3mo se ha solventado en el cliente.y las opciones que tenemos para evitar posibles bloqueos como este.</p><div class="language-java ext-java"><pre class="language-java"><code>// Controlamos la respuesta en funci\xF3n del mensaje recibido y 
// el estado actual
switch (estado) {
    case HI:
        if (messages[0].equals(str)) {
            // Enviamos respuesta al cliente
            salida.println(messages[1]);
            // Cambiamos el estado del protocolo
            estado = Estados.BYE;
        } else {
            // Enviamos error al cliente
            salida.println(messages[3]);
        }
        break;
    case BYE:
        if (messages[2].equals(str)) {
            // Cambiamos el estado del protocolo
            estado = Estados.END;
        } else {
            // Enviamos error al cliente
            salida.println(messages[3]);
            estado = Estados.HI;
        }
        break;
    case END:
        // No ser\xEDa necesario contemplarlo en este caso
        // Pero s\xED en otros en los que se tenga que enviar 
        // alg\xFAn mensaje antes de salir.
        break;
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><h2 id="_4-5-4-ejemplo-de-cliente-con-estados" tabindex="-1">4.5.4. Ejemplo de cliente con estados</h2><p>Aunque un cliente interactivo como los que usamos para las pruebas no deber\xEDan cambiar su funcionalidad, s\xED hay que hacer peque\xF1os ajustes para adaptar su funcionamiento a las posibles respuestas y errores que env\xEDa el servidor.</p><p><img src="`+u+'" alt="Diagrama de estados U4A03_ProtocoloSaludo"></p>',20),P=r(`<p>Como ya hemos dicho en el c\xF3digo del servidor, si implementamos el protocolo como un cliente de env\xEDo-respuesta, hay un caso en el que no debemos esperar una respuesta. Este es el caso de la salida, en la que se env\xEDa un mensaje pero no esperamos respuesta por parte del servidor.</p><p>Se puede pensar en poner una condici\xF3n de salida para cuando el cliente env\xEDa el \xFAltimo mensaje, pero no podemos asegurar que ese mensaje cerrar\xE1 la comunicaci\xF3n, porque depender\xE1 del estado en el que se encuentre el servidor.</p><h3 id="ejemplo-de-cliente-generico-que-implementa-el-protocolo" tabindex="-1">Ejemplo de cliente &quot;gen\xE9rico&quot; que implementa el protocolo</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U4A03_SaludoClient {

    private static final String[] messages = {&quot;Hi Server!&quot;, &quot;Hi Client!&quot;, &quot;Bye Server!&quot;, &quot;Error. Unknown or unexpected command&quot;};

    public static void main(String[] args) throws IOException {
        Socket socketCliente = null;
        BufferedReader entrada = null;
        PrintWriter salida = null;

        // Creamos un socket en el lado cliente, enlazado con un
        // servidor que est\xE1 en la misma m\xE1quina que el cliente
        // y que escucha en el puerto 4444
        try {
            socketCliente = new Socket(args[0], Integer.parseInt(args[1]));

            // Establece canal de entrada
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
        // usuario, simplemente los reenv\xEDa al servidor hasta que se env\xEDa 
        // el mensaje final del protocolo
        do {
            // Leo la entrada del usuario
            linea = stdIn.nextLine();
            // La envia al servidor por el OutputStream
            salida.println(linea);
            // Recibe la respuesta del servidor por el InputStream
            linea = entrada.readLine();
            if (linea == null) {
                // Comprobamos si se ha cerrado el extremo servidor del socket
                // Y damos por concluida la comunicaci\xF3n.
                break;
            } else {
                // Env\xEDa a la salida est\xE1ndar la respuesta del servidor
                System.out.println(&quot;SERVIDOR &gt; &quot; + linea);
            }
        } while (true);

        // Libera recursos
        salida.close();
        stdIn.close();
        socketCliente.close();
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El c\xF3digo corresponde a un cliente interactivo gen\xE9rico, que va enviando mensajes y esperando la respuesta de los mismos sin hacer ning\xFAn tipo de control sobre lo que se env\xEDa o lo que recibe.</p><p>Analicemos algunos aspectos del c\xF3digo del cliente</p><p>La parte que sigue es equivalente a la que hemos usado en el servidor. No modificamos el flujo env\xEDo-recepci\xF3n, pero s\xED que comprobamos si el lado del servidor ha cerrado el socket (ha realizado todo el protocolo correctamente) para decidir que el cliente finalice su ejecuci\xF3n.</p><div class="language-java ext-java"><pre class="language-java"><code>// Recibe la respuesta del servidor por el InputStream
linea = entrada.readLine();
if (linea == null) {
    // Comprobamos si se ha cerrado el extremo servidor del socket
    // Y damos por concluida la comunicaci\xF3n.
    break;
} else {
    // Env\xEDa a la salida est\xE1ndar la respuesta del servidor
    System.out.println(&quot;SERVIDOR &gt; &quot; + linea);
}
} while (true);
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div></div><p>::: warning Lectura con timeout Otra manera distinta de hacer lo mismo es usando lecturas con timeout.</p><p>En este ejemplo podr\xEDamos haber comprobado si el mensaje enviado es el mensaje de finalizaci\xF3n. Es ese caso, si todo ha ido bien, no deber\xEDamos esperar una respuesta por parte del server, pero si ha habido alg\xFAn error, s\xED debemos realizar una lectura del socket.</p><p>Usando este c\xF3digo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        // El programa cliente no analiza los mensajes enviados por el
        // usuario, simplemente los reenv\xEDa al servidor hasta que se env\xEDa 
        // el mensaje final del protocolo
        do {
            // Leo la entrada del usuario
            linea = stdIn.nextLine();
            // La envia al servidor por el OutputStream
            salida.println(linea);

            // Si enviamos el mensaje de salida, no hacemos una lectura indefinida
            if (linea.equals(messages[2])) {
                socketCliente.setSoTimeout(100);
            } else {
                socketCliente.setSoTimeout(0);
            }

            try { 
                // Recibe la respuesta del servidor por el InputStream
                linea = entrada.readLine();
                // Env\xEDa a la salida est\xE1ndar la respuesta del servidor
                System.out.println(&quot;SERVIDOR &gt; &quot; + linea);
            } catch (SocketTimeoutException ste) {
                // Pasado el timeout no se ha recibido una respuesta
                // Podemos suponer que el server no env\xEDa respuesta
                // Eso indica que el protocolo se ha completado
                // Damos por concluida la comunicaci\xF3n.
                break;
            }            
        } while (true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fijamos un tiempo de espera pasado el cual se producir\xE1 una <code>SocketTimeoutException</code> indicando que no se ha le\xEDdo nada del socket. Si por el contrario se lee informaci\xF3n del socket, esta se muestra por la consola.</p><p>En este caso en concreto, esta soluci\xF3n no funciona porque el servidor ya ha cerrado el socket. Esto ser\xEDa \xFAtil cuando tengamos que hacer una <code>lectura opcional</code> en mitad de un protocolo, y servir\xEDa tanto para un cliente como para un servidor. :::</p>`,14);function w(H,N){const d=o("DownloadPDF-component"),t=o("DocumentCover-component"),a=o("router-link");return v(),p("div",null,[n(d),n(t,{titulo:"4.5 Protocolos con estado"}),g,e("nav",h,[e("ul",null,[e("li",null,[n(a,{to:"#_4-5-1-protocolos-con-y-sin-estado"},{default:i(()=>[q]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#protocolos-sin-estado"},{default:i(()=>[f]),_:1})]),e("li",null,[n(a,{to:"#protocolos-con-estado"},{default:i(()=>[E]),_:1})])])]),e("li",null,[n(a,{to:"#_4-5-2-programacion-de-servidores-basados-en-estados"},{default:i(()=>[j]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#programacion-de-aplicaciones-cliente-y-o-servidor"},{default:i(()=>[S]),_:1})])])]),e("li",null,[n(a,{to:"#_4-5-3-ejemplo-de-servidor-con-estados"},{default:i(()=>[y]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#ejemplo-del-worker-que-implementa-el-protocolo"},{default:i(()=>[_]),_:1})])])]),e("li",null,[n(a,{to:"#_4-5-4-ejemplo-de-cliente-con-estados"},{default:i(()=>[k]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#ejemplo-de-cliente-generico-que-implementa-el-protocolo"},{default:i(()=>[C]),_:1})])])])])]),x,l(` 
stateDiagram-v2
    direction LR
    Hi: Estado Hi\\nEsperando al saludo
    Bye: Estado Bye\\nEsperando la despedida
    [*] -> Hi
    Hi -> Hi : Mensaje incorrecto\\nSe env\xEDa error al cliente
    Hi -> Bye : Se ha recibido el mensaje correcto\\nSe env\xEDa respuesta al cliente
    note left of Hi : Permanecemos en este estado\\nhasta que se reciba el mensaje correcto
    Bye -> Hi : Mensaje incorrecto\\nSe env\xEDa error al cliente
    Bye -> [*] : Se ha recibido el mensaje correcto\\nSe cierra la conexi\xF3n con el cliente
`),I,l(` 
stateDiagram-v2
    direction LR
    Hi: Env\xEDo mensaje
    Bye: Recibo mensaje
    [*] -> Hi
    Hi -> Bye : Se env\xEDa un mensaje\\nSe espera la respuesta del servidor
    Bye -> Hi : Se muestra la respuesta del servidor
    note left of Hi : Se env\xEDan mensajes\\nmientras el servidor mantenga\\nla conexi\xF3n abierta   
    Hi -> [*] : Se ha detectado el cierre\\nde la conexi\xF3n con el servidor
`),P])}const L=m(b,[["render",w],["__file","stateful-protocols.html.vue"]]);export{L as default};
