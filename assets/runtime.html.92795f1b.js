import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as u,d as t,a as e,w as s,f as m,r as n,b as a}from"./app.6f7d6c20.js";const c={},p=e("h1",{id:"_2-1-running-processes-in-java-with-runtime",tabindex:"-1"},"2.1. Running processes in Java with Runtime",-1),v={class:"table-of-contents"},h=a("2.1.1. Quick process launch"),b=a("2.1.2 System properties and command shells"),g=m(`<h2 id="_2-1-1-quick-process-launch" tabindex="-1">2.1.1. Quick process launch</h2><p>There are several methods defined in the Runtime class. These methods can be invoked to get the information about the runtime environment such as number of processors available to the JVM, about of memory available, loading native library, explicitly call garbage collector, and so forth.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html" target="_blank" rel="noopener noreferrer">Specification java.lang.Runtime</a></p></blockquote><p>Every Java program has an instance of the Runtime class, which encapsulates the runtime environment of the program. This class cannot be instantiated, but we can get a reference <strong>singleton instance</strong> to the Runtime of the currently running program with the help of the static method <strong>java.lang.Runtime.getRuntime()</strong>.</p><p>::: question Design patterns: Singleton \xBFWhat are design patterns? \xBFWhat is and what is used for the singleton pattern?</p><p>Look how to implement a class with the singleton pattern.</p><p><a href="https://refactoring.guru/design-patterns/java" target="_blank" rel="noopener noreferrer">Refactoring.Guru design patterns</a> :::</p><p>The Runtime class method we are interested in, to create a new processes is</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>This is a simple, not yet customizable, way to spawn a new sub-process.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static void main(String[] args) throws IOException {
    // Launch notepad app
    Runtime.getRuntime().exec(&quot;notepad.exe&quot;);

    // This way always works
    // String separator = System.getProperty(&quot;file.separator&quot;);
    // Runtime.getRuntime()
    //    .exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);

    // This way used to work (UNIX style paths)
    // Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see the argument to <code>exec</code> method is just the program we want to run. In this example, as <em>notepad</em> is in the system PATH it&#39;s not necessary to tell the path to the program. Otherwise, the path must be specified with the program name.</p><div class="pagebreak"></div><h2 id="_2-1-2-system-properties-and-command-shells" tabindex="-1">2.1.2 System properties and command shells</h2><p>If we plan to code platform independent applications, we have to deal with many issues because of differences between OS. So sometimes we need to deal with specific OS information. A useful way to get that information is by getting System properties.</p><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#getProperties()" target="_blank" rel="noopener noreferrer">Specification System.getProperties</a></p><p>Some examples are provided here using System properties. Similar solutions can be used for other issues.</p><p>::: danger File separator For file path or directory separator, the Unix system introduced the slash character / as directory separator, and the Microsoft Windows introduced backslash character \\ as the directory separator. In a nutshell, this is / on UNIX and \\ on Windows.</p><p>Then, \xBFhow can we code OS independent applications??</p><p>In Java, we can use the following three methods to get the platform-independent file path separator.</p><ul><li>System.getProperty(&quot;file.separator&quot;)</li><li>FileSystems.getDefault().getSeparator() (Java NIO)</li><li>File.separator Java IO</li></ul><p>From now on, we are gonna use System properties in our applications for several situations using <code>System.getProperty(String propName)</code>. These properties are configured by the OS and the JVM, though we can modify them by setting the JVM running setting</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>or</p><blockquote><p>-Dfile.separator</p></blockquote><p>Nevertheless is always a good practice to use slash character <strong>/</strong> in paths as Java is able to convert them to the system it is running on. :::</p><p>If we want to run an OS command we have to do it as we usually do, by using the command shell, where once again we find the troubleshot with UNIX / Windows.</p><p>Let&#39;s take a look at the way we can use the system properties, once again, to get a list of files in the user personal folder.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// First we get the user folder path
String homeDirectory = System.getProperty(&quot;user.home&quot;);
// And then we set which OS are we running on
boolean isWindows = System.getProperty(&quot;os.name&quot;)
  .toLowerCase().startsWith(&quot;windows&quot;);

if (isWindows) {
    Runtime.getRuntime()
      .exec(String.format(&quot;cmd.exe /c dir %s&quot;, homeDirectory));
} else {
    Runtime.getRuntime()
      .exec(String.format(&quot;sh -c ls %s&quot;, homeDirectory));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info non-interactive shell mode In the previous code example, both for Windows and UNIX modifier <strong>c</strong> is used for command shells. This modifier tells the system to open a command shell, to run the companion command and close the shell after it has finished. :::</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Calling app example
public void mouseClicked(MouseEvent e) {
  // Launch Page
  try {
    // Linux version
    Runtime.getRuntime().exec(&quot;open http://localhost:8153/go&quot;);
    // Windows version
    // Runtime.getRuntime().exec(&quot;explorer http://localhost:8153/go&quot;);
  } catch (IOException e1) {
    // Don&#39;t care
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question System properties Our first applications in java is not gonna be an easy one.</p><p>Using methods from System class and Runtime class, write the code for an app that shows</p><ul><li>all the system properties configured in your OS</li><li>total memory, free memory, used memory and processors available</li></ul><p>Make a research into Runtime class methods. For System properties try to get a list or iterable data estructure to show each of the system properties and their values. :::</p><p>::: details Proposed solution to previous activiy</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>long freeMemory = Runtime.getRuntime().freeMemory();
long availableMemory = Runtime.getRuntime().totalMemory();
long usedMemory = availableMemory - freeMemory;

/*** Runtime.getRuntime() usage ***/
// Show system information
// Memory will be shown in MBytes formatted with 2-decimal places
DecimalFormat megabytes = new DecimalFormat(&quot;#.00&quot;);
System.out.println(&quot;Available memory in JVM(Mbytes): &quot; + 
        megabytes.format((double)availableMemory/(1024*1024)));
System.out.println(&quot;Free memory in JVM(Mbytes): &quot; + 
        megabytes.format((double)freeMemory/(1024*1024)));
System.out.println(&quot;Used memory in JVM(Mbytes): &quot; + 
        megabytes.format((double)usedMemory/(1024*1024)));

System.out.println (&quot;Processors in the system: &quot; 
        + Runtime.getRuntime().availableProcessors());

/*** System.getProperties() usage ***/
// Show each pair of property:value from System properties

// 1st. As a lambda expression using anonymous classes
System.getProperties().forEach((k,v) -&gt; System.out.println(k + &quot; =&gt; &quot; + v));

// 2nd. As a Map.entrySet 
for (Map.Entry&lt;Object, Object&gt; entry : System.getProperties().entrySet()) {
    Object key = entry.getKey();
    Object val = entry.getValue();
    System.out.println(&quot;&gt; &quot; + key + &quot; =&gt; &quot; + val);
}

// 3rd. As a Map.keySet
for (Object key : System.getProperties().keySet().toArray())
{
    System.out.println(&quot;&gt;&gt; &quot; + key+&quot;:&quot;+System.getProperty(key.toString()));
}

// Other methods found by students, based on a Properties object methods.
Properties prop = System.getProperties();
for (String propName: prop.stringPropertyNames()) {
  System.out.println(propName +  &quot;:&quot; + System.getProperty(propName));
}
        
// Or directly to the console using 
prop.list(System.out);
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: info Number format In any programming language we have many different ways to format the information shown to the user. As in this first applications we are using the console as the system output, let&#39;s check the two main techniques we can use in Java</p><ul><li><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html" target="_blank" rel="noopener noreferrer">NumberFormat</a></li></ul><p>Using NumberFormat class or any of its descendants we can get control on how the numbers are shown with high precision, using numeric patterns.</p><div class="language-java ext-java"><pre class="language-java"><code>DecimalFormat numberFormat = new DecimalFormat(&quot;#.00&quot;);
// Hashes can be used instead of zeros to allow .30 to be shown as 0.3
// (additional digits are optional)
System.out.println(numberFormat.format(number));
</code></pre></div><ul><li><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html" target="_blank" rel="noopener noreferrer">System.out.printf</a></li></ul><p>Similar to C&#39;s printf syntax, we can use the java.util.Formatter syntax to set how data is visualized.</p><div class="language-java ext-java"><pre class="language-java"><code>System.out.printf(&quot;\\n$%10.2f&quot;,shippingCost);
// numbers after % print preceding spaces to fill 
// and justify numbers.
System.out.printf(&quot;%n$%.2f&quot;,shippingCost);
</code></pre></div><p>:::</p>`,46);function y(f,w){const r=n("DownloadPDF-component"),o=n("DocumentCover-component"),i=n("router-link");return d(),u("div",null,[t(r),t(o,{titulo:"2.1. Running processes in Java with Runtime"}),p,e("nav",v,[e("ul",null,[e("li",null,[t(i,{to:"#_2-1-1-quick-process-launch"},{default:s(()=>[h]),_:1})]),e("li",null,[t(i,{to:"#_2-1-2-system-properties-and-command-shells"},{default:s(()=>[b]),_:1})])])]),g])}const j=l(c,[["render",y],["__file","runtime.html.vue"]]);export{j as default};
