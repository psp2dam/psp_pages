import{_ as d,a as l}from"./comandotree.fa02cb62.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as m,d as n,a as e,w as s,f as v,r as a,b as t}from"./app.6f7d6c20.js";const p={},h=e("h1",{id:"_2-2-process-management-in-java-processbuilder-and-process",tabindex:"-1"},"2.2 Process management in Java ProcessBuilder and Process",-1),b={class:"table-of-contents"},g=t("2.2.1 Preparation and setting of a process"),f=t("Setting the command at runtime"),w=t("Additional settings for a process"),y=t("2.2.2 Process control from parent"),q=t("Spawn a java application from a class into the same project"),S=v(`<h2 id="_2-2-1-preparation-and-setting-of-a-process" tabindex="-1">2.2.1 Preparation and setting of a process</h2><p>The class to set the running attributes for a new process, before it is being run, is the <code>ProcessBuilder</code> class.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html" target="_blank" rel="noopener noreferrer">Specification java.lang.ProcessBuilder</a></p></blockquote><p>This is an auxiliary class for the Process and is instantiated to manage a collection of process attributes. We can invoke the <code>start</code> method to create a new process with the attributes defined by the instance of the ProcessBuilder class.</p><p>Repeated calls to the start method would create a new process with the same attributes.</p><p>The ProcessBuilder class defines two constructors, such as:</p><div class="language-java ext-java"><pre class="language-java"><code>ProcessBuilder(List&lt;String&gt; command)
ProcessBuilder(String... command)
</code></pre></div><p>The meaning implied by the parameters passed to both constructors is same. In the first constructor, the command to be executed, along with command line arguments, is passed in a list of strings. And, in the second constructor, the command and the command line arguments are specified through the varargs parameter. We can use either of the constructors, depending upon the way to pass the parameter.</p><p>If we want to launch a command with parameters, the command cannot be sent to ProcessBuilder in raw mode, it must be processed and converted into a List in order to make it work.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Different modes to pass the command to ProcessBuilder constructors
// 1st mode: using a string. It fails with parameters, 
// Only works with commands having arguments
String command1 = &quot;notepad.exe prueba1.txt&quot;
ProcessBuilder pb = new ProcessBuilder(command1);

// 2nd mode: using an array of strings. It also works with parameters
String[] command2 = {&quot;cmd&quot;, &quot;/c&quot;, &quot;dir&quot;, &quot;/o&quot;};
ProcessBuilder pb = new ProcessBuilder(command2);

// 3rd mode: using a string and splitting it to convert into a List
String command3 =  &quot;c:/windows/system32/shutdown -s -t 0&quot;;  
// Regular expresion \\s means splitting the string by blank spaces
ProcessBuilder pb = new ProcessBuilder(command3.split(&quot;\\\\s&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning OS shutdown You can use shutdown -s command to shutdown system. For windows OS, you need to provide full path of shutdown command e.g. C:\\Windows\\System32\\shutdown.</p><p>Here you can use -s switch to shutdown system, -r switch to restart system, -h to put the system into hibernation, and -t switch to specify time delay.</p><p><a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown" target="_blank" rel="noopener noreferrer">Windows shutdown reference</a> :::</p><p>::: question Activity psp.activities.U2A1_Shutdowner Create a new Java application project (package psp.activities &amp; main class U2A1_Shutdowner) Using the command line, ask the user for the action he wants to do with the computer (shutdown ,restart or suspend) and how much time he needs before shutting down the system.</p><p>Find information about the shutdown command in GNU/Linux and make your app work in both systems.</p><p>Your app has to prepare the right command for the answers the user has given and for the OS it is running on.</p><p>Get the ProcessBuilder.command() result and show it on the console in a readable format. :::</p><p>:::details U2A1_Shutdowner solution</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A1_Shutdowner {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="setting-the-command-at-runtime" tabindex="-1">Setting the command at runtime</h3><p>If we want to set the command to be run at runtime, or at the time the ProcessBuilder instance is created we still don&#39;t know the command, it can be set later by using the command(String).</p><p>The same way as the constructors, we have two versions of command method</p><div class="language-java ext-java"><pre class="language-java"><code>    command(List&lt;String&gt; command)
    command(String... command)
</code></pre></div><p>and there&#39;s also another command method, without parameters, to retrieve the command and parameters already set for the ProcessBuilder instance. Once we have the parameters list, we can modify it using List methods.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Sets and modifies the command after ProcessBuilder object is created
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="additional-settings-for-a-process" tabindex="-1">Additional settings for a process</h3><p>Some of the settings that can be changed for a process are:</p><ul><li><p>Set the working directory where the process will be run We can override the default working directory of the current process by calling the directory method and passing a File object. <strong>By default, the current working directory is set to the value returned by the user.dir system property</strong>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Change working directory for the running process
pbuilder.directory(new File(System.getProperty(&quot;user.home&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Set-up a custom key-value map and modify an existing one using builder.environment()</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Retrieve and modify the process environment
Map&lt;String, String&gt; environment = pbuilder.environment();
// Get the PATH environment variable and add a new directory
String systemPath = environment.get(&quot;path&quot;) + &quot;;c:/users/public&quot;;
environment.replace(&quot;path&quot;, systemPath);
// Add a new environment variable and use it as a part of the command
environment.put(&quot;GREETING&quot;, &quot;Hola Mundo&quot;);
processBuilder.command(&quot;/bin/bash&quot;, &quot;-c&quot;, &quot;echo $GREETING&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Environment variables vs System properties With Runtime we also accessed System properties, that are different from this environment ones. :::</p></li><li><p>Redirect input and output streams to custom replacements</p></li><li><p>Inherit both of them to the streams of the current JVM process using builder.inheritIO()</p><p><em>This two settings will be covered later in this unit</em>.</p></li></ul><p>::: question Activity psp.activities.U2A2_WorkingDirectory Create a new Java application project (package psp.activities &amp; main class U2A2_WorkingDirectory ) Prepare a process to run the dir/ls command to check that the directory listing is for the directory pointed by the user.dir property. In the same application, change the value for the user.dir property. Finally, set a working directory for the process.</p><p>Print the user.dir environment value for the three scenarios after being changed. :::</p><p>::: details U2A2_WorkingDirectory solution</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A2_WorkingDirectory {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><div class="pagebreak"></div><h2 id="_2-2-2-process-control-from-parent" tabindex="-1">2.2.2 Process control from parent</h2><p>The <code>Process</code> is an abstract class defined in the java.lang package that encapsulates the runtime information of a program in execution. The <code>start</code> method invoked by the ProcessBuilder class returns a reference to this class instance. There is an another way to create an instance of this class, through the <code>exec</code> method of the Runtime instance.</p><p>The methods defined by the Process class can be used to perform input/output operations from the process, check the exit status of the process, wait for it to complete, and terminate the process. These methods, however, are not built to work on special processes of the native platform like daemon processes, shell scripts, and so on.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html" target="_blank" rel="noopener noreferrer">Specification java.lang.Process</a></p></blockquote><p>::: warning Input/ output from the child process Intriguingly, <strong>the process created by the start() method does not own a console</strong>. Instead, it redirects (stdin, stdout, stderr) to the parent process. If need be, we can access them via streams obtained using methods defined in the class, such as getInputStream(), getOutputStream() and getErrorSteam(). These are the ways we can feed input to and get results from the sub processes. :::</p><p>Some of the common methods defined in this class are:</p><table><thead><tr><th style="text-align:left;">method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">int exitValue()</td><td style="text-align:left;">Exit code returned from the process executed</td></tr><tr><td style="text-align:left;">Boolean isAlive()</td><td style="text-align:left;">Checks if the invoking process is still running.</td></tr><tr><td style="text-align:left;">int waitFor()</td><td style="text-align:left;">Parent process waits for the child process to end. The integer value returned by the method is the exit code by the process.</td></tr><tr><td style="text-align:left;">Boolean waitFor(long timeOut, TimeUnit unit)</td><td style="text-align:left;">Overloaded method of previous one. We can specify the wait time. This method returns true if the process has terminated and false if timeout has occurred.</td></tr><tr><td style="text-align:left;">void destroy()</td><td style="text-align:left;">These two methods are used to kill or terminate the process. One, the second, just does it forcibly.</td></tr><tr><td style="text-align:left;">Process destroyForcibly()</td><td style="text-align:left;"></td></tr></tbody></table><p>Let\u2019s write a simple Java program to open an application as a separate process. After it is opened, the program would wait for, say, 10 seconds and then destroy the process, which will immediately close the application.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ProcessDemo {

   public static void main(String[] args) throws Exception {

      ProcessBuilder pb = new ProcessBuilder(&quot;firefox&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Exit codes An exit code, or sometimes known as a return code, is the code returned to a parent process by an executable. The standard exit code is 0 for success and any number from 1 to 255 for anything else. :::</p><p>::: question Activity psp.activities.U2A3_ExitValue Create a new Java application project (package psp.activities &amp; main class U2A3_ExitValue) Prepare a process to run different commands (notepad, calc, shell commands) one after each other, and make your application get their exit code. Print it.</p><p>Commands can be hardcoded. As an <strong>optional</strong> improvement for this activity you can ask the user for the command and make your app interactive. There must be an option to exit the app (empty command for instance).</p><p>Try with non-existing applications or using wrong arguments/parameters for commands.</p><p>Can you force a process not to be successful?</p><p>How can you know your own process exit code? :::</p><p>::: details U2A3_ExitValue solution</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A3_ExitValue {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: danger Exceptions management Call to method <strong>waitFor</strong> implies that the parent process gets locked until child process ends, or until a signal from the system (Exception) is received.</p><p>It&#39;s better to handle exceptions than to throw them to upper levels. :::</p><h3 id="spawn-a-java-application-from-a-class-into-the-same-project" tabindex="-1">Spawn a java application from a class into the same project</h3><p>For some activities you&#39;ll be required to create the parent and the child processes as Java applications. Then, from one the classes you will need to launch the other one.</p><p>This implies that both classes are gonna have a main method. So, in the project properties we&#39;ll need to set which is the main class that will be run first, usually the <code>Launcher</code> class (parent process).</p><p><img src="`+d+'" alt="Main class"></p><p>Before one class can run the other, at least the second one (child process) must be compiled, that is, the .class file has to be generated into the build/classes directory.</p><p><img src="'+l+`" alt="Working directory"></p><p>Them and only then we can set the process environment to spawn a new process from an existing class. Here is the sample code</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Prepare the environment and the command
ProcessBuilder pb = new ProcessBuilder(&quot;java&quot;, &quot;psp.u2.actividad10.Sumador&quot;);
pb.directory(new File(&quot;build/classes&quot;));
Process p = pb.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Activity psp.activities.U2A4_Launcher Create a new Java application project (package psp.activities &amp; main class U2A4_Launcher).</p><p>Into the project create another class, U2A4_Commander with a main method that receives a program name as a unique parameter in the main. Make this application to create and run a process for the program and wait until that process has finished.</p><p>This class will return always the same value the launched program did.</p><blockquote><p>System.exit() method</p><ul><li>Zero. The zero status code should be used when the program execution went fine, i.e., the program is terminated successfully.</li><li>Non-Zero. A nonzero status code indicates abnormal termination. Java allows us to use different values for different kinds of errors.</li></ul></blockquote><p>Now, make the U2A4_Launcher class ask the user for an application name and launch the Commander class passing it the name of the application entered by the user.</p><p>Get the exitValue from Commander and show it&#39;s value, telling if the process worked fine or if it failed. :::</p><p>::: details U2A4_Launcher solution</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U2A4_Launcher {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: warning Child classes programming Every class must be coded to be run independently or just as a child process. Think that in Netbeans all classes are run as child classes from the IDE.</p><p>That&#39;s why the code, child or parent, needs to be done without thinking how they are gonna be called. The code must be <strong>independent</strong> just like processes are one from each other. :::</p>`,74);function x(j,P){const r=a("DownloadPDF-component"),o=a("DocumentCover-component"),i=a("router-link");return u(),m("div",null,[n(r),n(o,{titulo:"2.2 Process management in Java - ProcessBuilder and Process"}),h,e("nav",b,[e("ul",null,[e("li",null,[n(i,{to:"#_2-2-1-preparation-and-setting-of-a-process"},{default:s(()=>[g]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#setting-the-command-at-runtime"},{default:s(()=>[f]),_:1})]),e("li",null,[n(i,{to:"#additional-settings-for-a-process"},{default:s(()=>[w]),_:1})])])]),e("li",null,[n(i,{to:"#_2-2-2-process-control-from-parent"},{default:s(()=>[y]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#spawn-a-java-application-from-a-class-into-the-same-project"},{default:s(()=>[q]),_:1})])])])])]),S])}const T=c(p,[["render",x],["__file","processbuilder.html.vue"]]);export{T as default};
