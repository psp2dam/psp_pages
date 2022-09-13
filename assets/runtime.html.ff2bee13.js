import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,d as a,a as e,w as i,f as u,r as s,b as o}from"./app.b80cbaa0.js";const m={},p=e("h1",{id:"_2-1-creacion-rapida-de-procesos-con-java-con-runtime",tabindex:"-1"},"2.1. Creaci\xF3n r\xE1pida de procesos con Java con Runtime",-1),v={class:"table-of-contents"},b=o("2.1.1. Creaci\xF3n r\xE1pida de procesos"),g=o("2.1.2 Propiedades del sistema y comandos del sistema"),y=u(`<h2 id="_2-1-1-creacion-rapida-de-procesos" tabindex="-1">2.1.1. Creaci\xF3n r\xE1pida de procesos</h2><p>La clase java.lang.Runtime se usa principalmente para interactuar con el JRE de Java. Esta clase proporciona m\xE9todos para lanzar procesos, llamar al recolector de basura (Garbage Collector), saber la cantidad de memoria disponible y libre, etc.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html" target="_blank" rel="noopener noreferrer">Especificaci\xF3n java.lang.Runtime</a></p></blockquote><p>Cada aplicaci\xF3n en Java tiene acceso a una \xFAnica instancia de <em>java.lang.Runtime</em> a trav\xE9s del m\xE9todo <code>Runtime.getRuntime()</code> que devuelve la instancia <strong>singleton</strong> de la clase Runtime.</p><p>::: question Patrones de dise\xF1o: Singleton \xBFQu\xE9 son los patrones de dise\xF1o? \xBFQu\xE9 es y para qu\xE9 se usa el patr\xF3n de dise\xF1o singleton?</p><p>Investiga c\xF3mo realizar una clase que siga el patr\xF3n de dise\xF1o singleton.</p><p><a href="https://refactoring.guru/es/design-patterns/java" target="_blank" rel="noopener noreferrer">Refactoring.Guru Patrones de dise\xF1o</a> :::</p><p>El m\xE9todo que nos interesa a nosotros para la creaci\xF3n de procesos es</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>Veamos un ejemplo sencillo de uso de este m\xE9todo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static void main(String[] args) throws IOException {
    // Launch notepad app
    Runtime.getRuntime().exec(&quot;notepad.exe&quot;);

    // This way always works
    // String separator = System.getProperty(&quot;file.separator&quot;);
    // Runtime.getRuntime()
    //    .exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);

    // This way used to work (UNIX style paths)
    // Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se puede observar que en el par\xE1metro que pasamos al m\xE9todo <code>exec</code> indicamos el programa que queremos ejecutar. En este caso, como el <em>notepad</em> se encuentra en el PATH del sistema, no es necesario indicar la ruta donde se encuentra el programa. En otro caso, s\xED tendr\xEDamos que hacerlo.</p><div class="pagebreak"></div><h2 id="_2-1-2-propiedades-del-sistema-y-comandos-del-sistema" tabindex="-1">2.1.2 Propiedades del sistema y comandos del sistema</h2><p>Si tenemos pensado desarrollar aplicaciones que funcionen en diferentes SO tendremos que enfrentarnos a la problem\xE1tica del funcionamiento diferente de los distintos SO.</p><p>Vamos a ver algunos ejemplos que pueden servir como gu\xEDa para otros problemas similares a los expuestos.</p><p>::: danger File separator Para indicar las rutas en un sistema los sistemas UNIX emplean el caracter <strong>/</strong> como separador mientras que los sistemas Windows usan el caracter <strong>\\</strong> . En resumen, / en *X y \\ en Windows.</p><p>\xBFC\xF3mo podemos hacer entonces que nuestras aplicaciones sean independientes del SO en el que se ejecutan?</p><p>Para este tipo de cuestiones vamos a utilizar de forma recurrente las propiedades del sistema mediante <code>System.getProperty(String propName)</code>. Estas propiedades se configuran con el propio sistema operativo, aunque las podemos modificar usando los par\xE1metros de ejecuci\xF3n de la m\xE1quina virtual</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>o</p><blockquote><p>-Dfile.separator</p></blockquote><p>Aunque siempre es una buena pr\xE1ctica usar el caracter <strong>/</strong> en las rutas ya que Java es capaz de convertirlas al sistema en el que se ejecuta. :::</p><p>Si lo que queremos es ejecutar un comando del SO, tenemos que hacerlo, al igual que si lo hacemos manualmente, a trav\xE9s del shell del sistema, donde volvemos a encontrar la dicotom\xEDa entre sistemas UNIX y sistemas Windows.</p><p>Vamos a ver el c\xF3digo que, a trav\xE9s de las propiedades del sistema, nos permite obtener un listado de los archivos existentes en la carpeta personal del usuario.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Primero obtenemos la carpeta del usuario
String homeDirectory = System.getProperty(&quot;user.home&quot;);
boolean isWindows = System.getProperty(&quot;os.name&quot;)
  .toLowerCase().startsWith(&quot;windows&quot;);

if (isWindows) {
    Runtime.getRuntime()
      .exec(String.format(&quot;cmd.exe /c dir %s&quot;, homeDirectory));
} else {
    Runtime.getRuntime()
      .exec(String.format(&quot;sh -c ls %s&quot;, homeDirectory));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Modo shell no interactivo Como se puede observar, tanto para Windows como UNIX se ha usado el modificador <strong>c</strong> del comando. Este modificador indica que se abra un shell, se ejecute el comando recibido y se cierre el proceso del shell. :::</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Calling app example
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question System properties Vamos a crear nuestro primer programa en Java, que no va a ser tan sencillo como pueda parecer</p><p>Usando m\xE9todos de las clases System y Runtime hacer un programa que muestre</p><ul><li>todas las propiedades establecidas en el sistema operativo y sus valores.</li><li>memoria total, memoria libre, memoria en uso y los procesadores disponibles</li></ul><p>Mira los m\xE9todos que proporcionan las clases Runtime y system. Intenta obtener una lista u otra estructura de datos que te permita recorrer las propiedades para ir mostrando sus nombres y valores. :::</p><p>::: details Soluci\xF3n propuesta para la actividad anterior</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>long freeMemory = Runtime.getRuntime().freeMemory();
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: info Formato num\xE9rico Todos los lenguajes de programaci\xF3n tienen varias formas de mostrar la informaci\xF3n al usuario. Cuando se trata de mostrar informaci\xF3n a a trav\xE9s de la consola, tenemos un par de alternativas para formatear la informaci\xF3n num\xE9rica.</p><ul><li><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html" target="_blank" rel="noopener noreferrer">NumberFormat</a></li></ul><p>Si usamos la clase NumberFormat o cualquiera de sus descendientespodemos controlar con bastante precisi\xF3n c\xF3mo se ver\xE1n los n\xFAmeros, usando patrones.</p><div class="language-java ext-java"><pre class="language-java"><code>DecimalFormat numberFormat = new DecimalFormat(&quot;#.00&quot;);
// Si usamos hashes en vez de ceros permitimos que .30 se vea como 0.3
// (los d\xEDgitos adicionales son opcionales)
System.out.println(numberFormat.format(number));
</code></pre></div><ul><li><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html" target="_blank" rel="noopener noreferrer">System.out.printf</a></li></ul><p>Heredado de la sintaxis de la funci\xF3n printf de C, podemos utilizar la sintaxis de java.util.Formatter para configurar c\xF3mo ser\xE1 visualizada la informaci\xF3n.</p><div class="language-java ext-java"><pre class="language-java"><code>System.out.printf(&quot;\\n$%10.2f&quot;,shippingCost);
// % rellena con hasta 10 posiciones los n\xFAmeros
// para justificarlos a la derchan.
System.out.printf(&quot;%n$%.2f&quot;,shippingCost);
</code></pre></div><p>:::</p>`,43);function q(h,f){const r=s("DownloadPDF-component"),t=s("DocumentCover-component"),n=s("router-link");return d(),c("div",null,[a(r),a(t,{titulo:"2.1. Creaci\xF3n de procesos con Java con Runtime"}),p,e("nav",v,[e("ul",null,[e("li",null,[a(n,{to:"#_2-1-1-creacion-rapida-de-procesos"},{default:i(()=>[b]),_:1})]),e("li",null,[a(n,{to:"#_2-1-2-propiedades-del-sistema-y-comandos-del-sistema"},{default:i(()=>[g]),_:1})])])]),y])}const _=l(m,[["render",q],["__file","runtime.html.vue"]]);export{_ as default};
