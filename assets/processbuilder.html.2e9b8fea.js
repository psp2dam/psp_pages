import{_ as l,a as t}from"./comandotree.fa02cb62.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as m,d as n,a as e,w as i,f as v,r as o,b as s}from"./app.b80cbaa0.js";const p={},b=e("h1",{id:"_2-2-gestion-de-procesos-en-java-processbuilder-y-process",tabindex:"-1"},"2.2 Gesti\xF3n de procesos en Java - ProcessBuilder y Process",-1),g={class:"table-of-contents"},q=s("2.2.1 Preparaci\xF3n y configuraci\xF3n de un proceso"),h=s("Modificar el comando en tiempo de ejecuci\xF3n"),f=s("Configuraciones adicionales de un proceso"),y=s("2.2.2 Acceso al proceso una vez en ejecuci\xF3n"),j=s("Lanzar una clase Java como proceso desde otra clase java en el mismo proyecto"),S=v(`<h2 id="_2-2-1-preparacion-y-configuracion-de-un-proceso" tabindex="-1">2.2.1 Preparaci\xF3n y configuraci\xF3n de un proceso</h2><p>En el paquete <code>java.lang</code> tenemos dos clases para la gesti\xF3n de procesos.</p><ul><li><code>java.lang.ProcessBuilder</code> <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/ProcessBuilder.html" target="_blank" rel="noopener noreferrer">Referencia API Java</a></li><li><code>java.lang.Process</code> <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html" target="_blank" rel="noopener noreferrer">Referencia API Java</a></li></ul><p>Las instancias de <strong>ProcessBuilder</strong> gestionan los atributos de los procesos, mientras que las instancias de <strong>Process</strong> controlan la ejecuci\xF3n de esos mismos procesos cuando se ejecutan.</p><p>Antes de ejecutar un nuevo proceso, podemos configurar los par\xE1metros de ejecuci\xF3n del mismo usando la clase <code>ProcessBuilder</code>.</p><p>ProcessBuilder es una clase auxiliar de la clase Process, que veremos m\xE1s adelante, y se utiliza para controlar algunos par\xE1metros de ejecuci\xF3n que afectar\xE1n al proceso. A trav\xE9s de la llamada al m\xE9todo <code>start</code> se crea un nuevo proceso en el sistema con los atributos definidos en la instancia de ProcessBuilder.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    ProcessBuilder pb = new ProcessBuilder(&quot;CMD&quot;, &quot;/C&quot;, &quot;DIR&quot;);
    Process p = pb.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Si llamamos varias veces al m\xE9todo start, se crear\xE1n tantos nuevos procesos como llamadas hagamos, todos ellos con los mismos atributos.</p><p>La clase ProcessBuilder define un par de constructores:</p><div class="language-java ext-java"><pre class="language-java"><code>ProcessBuilder(List&lt;String&gt; command)
ProcessBuilder(String... command)
</code></pre></div><p>El funcionamiento de ambos es el mismo. En el primer constructor el comando se pasa el comando a ejecutar y la lista de argumentos como una lista de cadenas. Por contra, en el segundo constructor, el comando y sus argumentos se pasan a trav\xE9s de un n\xFAmero variable de cadenas (String ... es lo que en Java se llama varargs). La versi\xF3n que utilicemos depende del formato en que tengamos los datos.</p><p>:: danger Argumentos y par\xE1metros Si queremos lanzar un programa con par\xE1metros (modificadores que hacen que cambie la forma de funcionar un programa como -h /s ...)el comando no puede ser pasado al constructor directamente como un \xFAnico string, debe ser preprocesado para convertirlo en una lista y que funcione.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Formas diferentes de pasar el comando a los constructores de ProcessBuilder
// 1\xAA forma: usando una cadena. Falla con par\xE1metros
// S\xF3lo funciona con programas que tengan argumentos
String command1 = &quot;notepad.exe prueba1.txt&quot;
ProcessBuilder pb = new ProcessBuilder(command1);

// 2\xAA forma: usando un array de cadenas. Funciona con par\xE1metros
String[] command2 = {&quot;cmd&quot;, &quot;/c&quot;, &quot;dir&quot;, &quot;/o&quot;};
ProcessBuilder pb = new ProcessBuilder(command2);

// 3\xAA forma: usando una cadena y dividi\xE9ndola para convertirla en una lista
String command3 =  &quot;c:/windows/system32/shutdown -s -t 0&quot;;  
// La expresi\xF3n regular \\s significa partir por los espacios en blanco
ProcessBuilder pb = new ProcessBuilder(command3.split(&quot;\\\\s&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning OS shutdown You can use shutdown -s command to shutdown system. For windows OS, you need to provide full path of shutdown command e.g. C:\\Windows\\System32\\shutdown.</p><p>Here you can use -s switch to shutdown system, -r switch to restart system, -h to put the system into hibernation, and -t switch to specify time delay.</p><p><a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown" target="_blank" rel="noopener noreferrer">Windows shutdown reference</a> :::</p><p>::: question Activity psp.activities.U2A1_Shutdowner Create a new Java application project (package psp.activities &amp; main class U2A1_Shutdowner) Using the command line, ask the user for the action he wants to do with the computer (shutdown ,restart or suspend) and how much time he needs before shutting down the system.</p><p>Find information about the shutdown command in GNU/Linux and make your app work in both systems.</p><p>Your app has to prepare the right command for the answers the user has given and for the OS it is running on.</p><p>Get the ProcessBuilder.command() result and show it on the console in a readable format. :::</p><p>:::details Soluci\xF3n de U2A1_Shutdowner</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A1_Shutdowner {

    public static void main(String[] args) throws IOException {
        // Ask for the required information to prepare the command
        Scanner keyboard = new Scanner(System.in);
        
        System.out.print(&quot;Select your option (s-shutdown / r-reboot / h-hibernate): &quot;);
        String shutdownOption = keyboard.nextLine();        
        
        System.out.print(&quot;How much seconds will the command wait to be run? (0 means immediately): &quot;);
        String shutdownTime = keyboard.nextLine();        
        
        // Prepare the command
        String command;
        if (System.getProperty(&quot;os.name&quot;).toLowerCase().startsWith(&quot;windows&quot;)) {
            command = &quot;C:/Windows/System32/shutdown -&quot; + shutdownOption + &quot; -t &quot; + shutdownTime;
        } else {
            command = &quot;shutdown -&quot; + shutdownOption + &quot; -t &quot; + shutdownTime;
        }
        
        // Prepare the process and launch it
        ProcessBuilder shutdowner = new ProcessBuilder(command.split(&quot;\\\\s&quot;));
        //shutdowner.start();
        
        // Show the command to be run
        System.out.print(&quot;El comando a ejecutar es:  &quot;);
        for (String commandPart: shutdowner.command()) {
            System.out.print(commandPart + &quot; &quot;);
        }
        System.out.println(&quot;&quot;);
    }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="modificar-el-comando-en-tiempo-de-ejecucion" tabindex="-1">Modificar el comando en tiempo de ejecuci\xF3n</h3><p>Puede ser que todo el comando, o parte del mismo, no lo tengamos en el momento de llamar a los constructores de ProcessBuilder. Se puede cambiar, modificar y consultar a posteriori con el m\xE9todo <code>command</code></p><p>Al igual que con los constructores, tenemos dos versiones del m\xE9todo command</p><div class="language-java ext-java"><pre class="language-java"><code>    command(List&lt;String&gt; command)
    command(String... command)
</code></pre></div><p>y la tercera forma de este m\xE9todo (sin par\xE1metros) sirve para obtener una lista del comando pasado al constructor o puesto con alguna de las formas anterior del m\xE9todo command. Lo interesante es que una vez que tenemos la lista, podemos modificarla usando los m\xE9todos de la clase List.</p><p>En el siguiente ejemplo, en el momento de definir el comando, nos falta saber la \xFAltima parte, el directorio temporal. Adem\xE1s, si queremos hacer que la ejecuci\xF3n sea multiplataforma, el shell a ejecutar tampoco lo sabemos. Dependiendo del SO se a\xF1aden dos valores al principio y un valor al final, con el m\xE9todo add de la clase List.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Sets and modifies the command after ProcessBuilder object is created
String command = &quot;java -jar install.jar -install&quot;; // tmp dir is missing
ProcessBuilder pbuilder = new ProcessBuilder(command.split(&quot;\\\\s&quot;));
if (isWindows) {
    pbuilder.command().add(0, &quot;cmd&quot;); // Sets the 1st element
    pbuilder.command().add(1, &quot;/c&quot;); // Sets the 2nd element
    pbuilder.command().add(&quot;c:/temp&quot;); // Sets the last element
    // Command to run cmd /c java -jar install.jar -install c:/temp
} else {
    pbuilder.command().add(0, &quot;sh&quot;); // Sets the 1st element
    pbuilder.command().add(1, &quot;-c&quot;); // Sets the 2nd element
    pbuilder.command().add(&quot;/tmp&quot;); // Sets the last element
    // Command to run: sh -c java -jar install.jar -install /tmp
}

// Starts the process
pbuilder.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuraciones-adicionales-de-un-proceso" tabindex="-1">Configuraciones adicionales de un proceso</h3><p>Algunos de los atributos que podemos configurar para un proceso son:</p><ul><li><p>Establecer el directorio de trabajo donde el proceso se ejecutar\xE1 Podemos cambiar el directorio de trabajo por defecto llamando al m\xE9todo <code>directory</code> y pas\xE1ndole un objeto de tipo File. <strong>Por defecto, el directorio de trabajo se establece al valor de la variable del sistema user.dir</strong>. Este directorio es el punto de partida para acceder a ficheros, im\xE1genes y todos los recursos que necesite nuestra aplicaci\xF3n.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Cambia el directorio de trabajo a la carpeta personal del usuario
pbuilder.directory(new File(System.getProperty(&quot;user.home&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Configurar o modificar variables de entorno para el proceso con el m\xE9todo <code>environment()</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Retrieve and modify the process environment
Map&lt;String, String&gt; environment = pbuilder.environment();
// Get the PATH environment variable and add a new directory
String systemPath = environment.get(&quot;path&quot;) + &quot;;c:/users/public&quot;;
environment.replace(&quot;path&quot;, systemPath);
// Add a new environment variable and use it as a part of the command
environment.put(&quot;GREETING&quot;, &quot;Hola Mundo&quot;);
processBuilder.command(&quot;/bin/bash&quot;, &quot;-c&quot;, &quot;echo $GREETING&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Indicamos el directorio donde se encuentra el ejecutable
File directorio = new File (&quot;bin&quot;);
pb.directory(directorio);

// Mostramos la informaci\xF3n de las variables de entorno
Map variablesEntorno = pb.environment();
System.out.println(variablesEntorno);

// Mostramos el nombre del proceso y sus argumentos
List command = pb.command();
Iterator iter = l.iterator();
while (iter.hasNext()) {
    System.out.println(iter.next());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Variables de entorno vs Propiedades del sistema Con la clase Runtime accedemos a las variables del sistema mientras que con ProcessBuilder lo hacemos a las propiedades del sistema, que son diferentes. :::</p></li><li><p>Redireccionar la entrada y salida est\xE1ndar</p></li><li><p>Heredar la E/S est\xE1ndar del proceso padre usando el m\xE9todo ProcessBuilder.inheritIO()</p><p><em>Estas dos configuraciones se ver\xE1n en el siguiente apartado.</em></p></li></ul><p>::: question Actividad psp.activities.U2A2_DirectorioTrabajo Crea un nuevo proyecto Java (Ant &gt; Java Application) (configura como nombre del proyecto U2A2_DirectorioTrabajo y como clase principal psp.activities.U2A2_WorkingDirectory) Escribe un programa que ejecute el comando ls o dir. Modifica el valor de la propiedad user.dir. En la misma aplicaci\xF3n, cambiar el directorio de trabajo a la carpeta c:/temp o /tmp, dependiendo del sistema operativo.</p><p>Muestra el valor devuelto por el m\xE9todo directory()</p><ul><li>Despu\xE9s de crear la instancia de ProcessBuilder</li><li>Despu\xE9s de cambiar el valor de user.dir</li><li>Despu\xE9s de cambiar el directorio de trabajo al directorio temporal del sistema.</li></ul><p><em>En este momento tu programa todav\xEDa no mostrar\xE1 ning\xFAn listado.</em> :::</p><p>::: details Soluci\xF3n de U2A2_DirectorioTrabajo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A2_WorkingDirectory {

    public static void main(String[] args) throws IOException {
        // Prepare the command
        String command;
        if (System.getProperty(&quot;os.name&quot;).toLowerCase().startsWith(&quot;windows&quot;)) {
            command = &quot;cmd /c dir&quot;;
        } else {
            command = &quot;sh -c ls&quot;;
        }
        
        // Prepare the process and launch it
        ProcessBuilder commander = new ProcessBuilder(command.split(&quot;\\\\s&quot;));
        
        //1st - Default working directory
        System.out.println(&quot;Working directory: &quot; + commander.directory());
        System.out.println(&quot;user.dir variable: &quot; + System.getProperty(&quot;user.dir&quot;));
        
        //2nd - Set the user.dir
        System.setProperty(&quot;user.dir&quot;, System.getProperty(&quot;user.home&quot;));
        System.out.println(&quot;Working directory: &quot; + commander.directory());
        System.out.println(&quot;user.dir variable: &quot; + System.getProperty(&quot;user.dir&quot;));
        
        // 3rd - Change the working directory
        commander.directory(new File(System.getProperty(&quot;user.home&quot;)));
        System.out.println(&quot;Working directory: &quot; + commander.directory().toString());
        System.out.println(&quot;user.dir variable: &quot; + System.getProperty(&quot;user.dir&quot;));
        
        commander.start();        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><div class="pagebreak"></div><h2 id="_2-2-2-acceso-al-proceso-una-vez-en-ejecucion" tabindex="-1">2.2.2 Acceso al proceso una vez en ejecuci\xF3n</h2><p>LA clase <code>Process</code> es una clase abstracta definida en el paquete java.lang y contiene la informaci\xF3n del proceso en ejecuci\xF3n. Tras invocar al m\xE9todo <code>start</code> de ProcessBuilder, \xE9ste devuelve una referencia al proceso en forma de objeto Process.</p><p>Los m\xE9todos de la clase Process pueden ser usados para realizar operaciones de E/S desde el proceso, para comprobar su estado, su valor de retorno, para esperar a que termine de ejecutarse y para forzar la terminaci\xF3n del proceso. Sin embargo estos m\xE9todos no funcionan sobre procesos especiales del SO como pueden ser servicios, shell scripts, demonios, etc.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html" target="_blank" rel="noopener noreferrer">Especificaci\xF3n java.lang.Process</a></p></blockquote><p>::: warning Entrada / Salida desde el proceso hijo Curiosamente <strong>los procesos lanzados con el m\xE9todo start() no tienen una consola asignada.</strong>. Por contra, estos procesos redireccionan los streams de E/S est\xE1ndar (stdin, stdout, stderr) al proceso padre. Si se necesita, se puede acceder a ellos a trav\xE9s de los streams obtenidos con los m\xE9todos definidos en la clase Process como getInputStream(), getOutputStream() y getErrorSteam(). Esta es la forma de enviar y recibir informaci\xF3n desde los subprocesos. :::</p><p>Some of the common methods defined in this class are:</p><table><thead><tr><th style="text-align:left;">M\xE9todo</th><th style="text-align:left;">Descripci\xF3n</th></tr></thead><tbody><tr><td style="text-align:left;">int exitValue()</td><td style="text-align:left;">C\xF3digo de finalizaci\xF3n devuelto por el proceso hijo (ver Info m\xE1s abajo)</td></tr><tr><td style="text-align:left;">Boolean isAlive()</td><td style="text-align:left;">Comprueba si el proceso todav\xEDa est\xE1 en ejecuci\xF3n</td></tr><tr><td style="text-align:left;">int waitFor()</td><td style="text-align:left;">hace que el proceso padre se quede esperando a que el proceso hijo termine. El entrono que devuelve es el c\xF3digo de finalizaci\xF3n del proceso hijo</td></tr><tr><td style="text-align:left;">Boolean waitFor(long timeOut, TimeUnit unit)</td><td style="text-align:left;">El funcionamiento es el mismo que en el caos anterior s\xF3lo que en esta ocasi\xF3n podemos especificar cu\xE1nto tiempo queremos esperar a que el proceso hijo termine. El m\xE9todo devuelve true si el proceso termina antes de que pase el tiempo indicado y false si ha pasado el tiempo y el proceso no ha terminado.</td></tr><tr><td style="text-align:left;">void destroy()</td><td style="text-align:left;">Estos dos m\xE9todos se utilizan para matar al proceso. El segundo lo hace de forma forzosa.</td></tr><tr><td style="text-align:left;">Process destroyForcibly()</td><td style="text-align:left;"></td></tr></tbody></table><p>Veamos un sencillo ejemplo. Una vez lanzado el programa espera durante 10 segundos y a continuaci\xF3n mata el proceso.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ProcessDemo {

   public static void main(String[] args) throws Exception {

      ProcessBuilder pb = new ProcessBuilder(&quot;C:\\Program Files\\Mozilla Firefox&gt;firefox.exe&quot;);
      // Effectively launch the process
      Process p = pb.start();
      // Check is process is alive or not
      boolean alive = p.isAlive();
      // Wait for the process to end for 10 seconds.
      if (p.waitFor(10, TimeUnit.SECONDS)) {
          System.out.println(&quot;Process has finished&quot;);
      } else {
          System.out.println(&quot;Timeout. Process hasn&#39;t finished&quot;);
      }
      // Force process termination.
      p.destroy();
      // Check again if process remains alive
      boolean alive = p.isAlive();
      // Get the process exit value
      int status = p.exitValue();        
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info C\xF3digos de terminaci\xF3n Un c\xF3digo de salida (exit code o a veces tambi\xE9n return code) es el valor que un proceso le devuelve a su proceso padre para indicarle c\xF3mo ha acabado. Si un proceso acaba con un valor de finalizaci\xF3n 0 es que todo ha ido bien, cualquier otro valor entre 1 to 255 indica alguna causa de error. :::</p><p>::: question Actividad psp.activities.U2A3_ExitValue Crea un nuevo proyecto Java (Ant &gt; Java Application) (configura como nombre del proyecto U2A3_ExitValue y como clase principal psp.activities.U2A3_ExitValue). Prepara un programa que ejecute varios comandos (notepad, calc, comandos shell) uno detr\xE1s de otro, de forma secuencial y haz que tu programa obtenga el c\xF3digo de finalizaci\xF3n de cada uno de ellos. Para cada programa imprime el nombre y su c\xF3digo de finalizaci\xF3n.</p><p>Prueba a poner aplicaciones que no existan o comandos con par\xE1metros incorrectos.</p><p>\xBFQu\xE9 hace Netbeans si pones System.exit(10) para acabar tu programa?. F\xEDjate en la consola. \xBFQu\xE9 hace Netbeans si pones System.exit(0) para acabar tu programa.? Cu\xE1l es entonces el valor por defecto? :::</p><p>::: details Soluci\xF3n de U2A3_ExitValue</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A3_ExitValue {

    public static void main(String[] args) {
        do {
            // C\xF3digo para pedir un programa/comando a ejecutar
            Scanner teclado = new Scanner(System.in);
            System.out.println(&quot;Introduce el programa / comando que quieres ejecutar (intro para acabar): &quot;);
            String comando = teclado.nextLine();
            
            if (comando.equals(&quot;&quot;)) System.exit(0);

            try {
                // Preparamos el entrono de ejecuci\xF3n del proceso
                // Como no sabemos el contenido del comando, forzamos su conversi\xF3n
                // a una lista para que no haya problemas con su ejecuci\xF3n
                ProcessBuilder pb = new ProcessBuilder(comando.split(&quot;\\\\s&quot;));

                // Lanzamos el proceso hijo
                Process p = pb.start();          

                // Esperamos a que acabe para recoger el valor de salida
                int exitValue = p.waitFor();

                if (exitValue == 0) {
                    System.out.println(&quot;El comando &quot; + pb.command().toString() + &quot; ha finalizado bien&quot;);
                } else {
                    System.out.println(&quot;El comando &quot; + pb.command().toString() + &quot; ha finalizado con errores. C\xF3digo (&quot; + exitValue + &quot;)&quot;);
                }

            } catch (InterruptedException | IOException ex) {
                System.err.println(ex.getLocalizedMessage());
                ex.printStackTrace();
            }                       
        } while (true);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: danger Gesti\xF3n de excepciones La llamada al m\xE9todo <strong>waitFor</strong> hace que el proceso padre se bloquee hasta que el proceso hijo termina o bien hasta que el bloqueo es interrumpido por alguna se\xF1as del sistema (Excepci\xF3n) que recibe el proceso padre.</p><p>Es mejor gestionar las excepciones lo m\xE1s cerca posible del origen en vez de pasarlas a niveles superiores. :::</p><h3 id="lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto" tabindex="-1">Lanzar una clase Java como proceso desde otra clase java en el mismo proyecto</h3><p>Para las actividades os pedir\xE9 que program\xE9is tanto el proceso padre como el proceso hijo. Para hacer eso, una de las clases tendr\xE1 que lanzar a la otra.</p><p>Para hacer esto, ambas clases deben tener un m\xE9todo main. As\xED que en las propiedades del proyecto Netbeans deberemos seleccionar cu\xE1l de las clases se ejecutar\xE1 primero, normalmente la clase <code>Lanzador o Launcher</code> (proceso padre).</p><p><img src="`+l+'" alt="Seleccionar clase principal"></p><p>BeforeAntes de que una clase pueda lanzar a otra, al menos la segunda (proceso hijo) debe estar compilada, es decir, el archivo .class debe haberse creado dentro del directorio build/classes.</p><p><img src="'+t+`" alt="Seleccionar directorio de trabajo "></p><p>Entonces y s\xF3lo entonces, previa configuraci\xF3n de los par\xE1metros de ejecuci\xF3n del proceso pueden establecerse, como en el ejemplo, para ejecutar una clase desde otra.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Prepare the environment and the command
ProcessBuilder pb = new ProcessBuilder(&quot;java&quot;, &quot;psp.u2.actividad10.Sumador&quot;);
pb.directory(new File(&quot;build/classes&quot;));
Process p = pb.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Actividad psp.activities.U2A4_Lanzador Crea un nuevo proyecto Java (Ant &gt; Java Application) (configura como nombre del proyecto U2A3_Lanzador y como clase principal psp.activities.U2A4_Lanzador).</p><p>Ahora, en el mismo proyecto y dentro del mismo paquete crea otra clase, Mandado con un m\xE9todo main que recibir\xE1 el nombre del programa que debe ejecutar como par\xE1metro del m\xE9todo main(args). Haz que esta aplicaci\xF3n cree un nuevo proceso para ejecutar el programa recibido como par\xE1metro.</p><p>La clase terminar\xE1 devolviendo como c\xF3digo de finalizaci\xF3n el que el programa lanzado le haya devuelto a ella.</p><blockquote><p>M\xE9todo System.exit()</p><ul><li>Cero. El c\xF3digo cero debe devolverse cuando la ejecuci\xF3n del proceso haya ido bien, esto es, que ha terminado su ejecuci\xF3n sin problemas.</li><li>Distinto de cero. AUn c\xF3digo distinto de cero indica una terminaci\xF3n con errores. Java nos permite usar c\xF3digos diferentes para los diferentes tipos de error.</li></ul></blockquote><p>Por \xFAltimo, podemos hacer que U2A4_Lanzador pregunte al usuario qu\xE9 aplicaci\xF3n quiere ejecutar y pas\xE1rsela a la clase U2A4_Mandado.</p><p>En Lanzador recoge el c\xF3digo de finalizaci\xF3n de Mandado y muestra un mensaje indicando si el proceso termin\xF3 bien o con errores. :::</p><p>::: details Soluci\xF3n de U2A4_Lanzador</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A4_Launcher {

    public static void main(String[] args) {

        // C\xF3digo para pedir un programa/comando a ejecutar
        Scanner teclado = new Scanner(System.in);
        System.out.println(&quot;Introduce el programa / comando que quieres ejecutar: &quot;);
        String comando = teclado.nextLine();

        try {
            // Preparamos el entrono de ejecuci\xF3n del proceso
            // Como no sabemos el contenido del comando, forzamos su conversi\xF3n
            // a una lista para que no haya problemas con su ejecuci\xF3n
            comando = &quot;java psp.activities.U2A4_Commander &quot; + comando;
            ProcessBuilder pb = new ProcessBuilder(comando.split(&quot;\\\\s&quot;));
            pb.directory(new File(&quot;build/classes&quot;));

            // Lanzamos el proceso hijo
            Process p = pb.start();          

            // Esperamos a que acabe para recoger el valor de salida
            int exitValue = p.waitFor();

            if (exitValue == 0) {
                System.out.println(&quot;El comando &quot; + pb.command().toString() + &quot; ha finalizado bien&quot;);
            } else {
                System.out.println(&quot;El comando &quot; + pb.command().toString() + &quot; ha finalizado con errores. C\xF3digo (&quot; + exitValue + &quot;)&quot;);                
            }
        } catch (InterruptedException | IOException ex) {
            System.err.println(ex.getLocalizedMessage());
            ex.printStackTrace();
        }                       
    }
}

public class U2A4_Commander {

    public static void main(String[] args) throws Exception {       
        // Lectura de informaci\xF3n desde los par\xE1metros de entrada 
        // Se supone que recibimos: args[0] args[1] args[2] ..... args[args.length-1 --&gt; comando a ejecutar
        String comando = &quot;&quot;;
        for (int i = 0; i &lt; args.length; i++) {
            comando += args[i] + &quot; &quot;;
        }
        comando.trim();
                
        ProcessBuilder pb = new ProcessBuilder(comando.split(&quot;\\\\s&quot;));            

        // Lanzamos el proceso hijo
        Process p = pb.start();          

        // Esperamos a que acabe para recoger el valor de salida
        int exitValue = p.waitFor();

        System.exit(exitValue);
    }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: warning Programaci\xF3n de clases &quot;hijas&quot; Debemos tener en cuenta que una clase se puede ejecutar de forma independiente o puede ser llamada desde otro proceso.</p><p>Por eso, el c\xF3digo de las clases, hijas o padres, se hace sin tener en cuenta c\xF3mo van a ser llamadas. Debe ser <strong>independiente</strong> tal y como lo son unos procesos de otros. :::</p>`,78);function P(w,x){const r=o("DownloadPDF-component"),d=o("DocumentCover-component"),a=o("router-link");return u(),m("div",null,[n(r),n(d,{titulo:"2.2 Gesti\xF3n de procesos en Java - ProcessBuilder y Process"}),b,e("nav",g,[e("ul",null,[e("li",null,[n(a,{to:"#_2-2-1-preparacion-y-configuracion-de-un-proceso"},{default:i(()=>[q]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#modificar-el-comando-en-tiempo-de-ejecucion"},{default:i(()=>[h]),_:1})]),e("li",null,[n(a,{to:"#configuraciones-adicionales-de-un-proceso"},{default:i(()=>[f]),_:1})])])]),e("li",null,[n(a,{to:"#_2-2-2-acceso-al-proceso-una-vez-en-ejecucion"},{default:i(()=>[y]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto"},{default:i(()=>[j]),_:1})])])])])]),S])}const B=c(p,[["render",P],["__file","processbuilder.html.vue"]]);export{B as default};
