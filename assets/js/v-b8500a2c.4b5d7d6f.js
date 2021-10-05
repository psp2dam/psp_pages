"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[277],{3584:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-b8500a2c",path:"/es/unit2/runtime.html",title:"2.1 Creación de procesos en Java con Runtime",lang:"es-ES",frontmatter:{title:"2.1 Creación de procesos en Java con Runtime"},excerpt:"",headers:[{level:2,title:"2.1.1. Creación rápida de procesos",slug:"_2-1-1-creacion-rapida-de-procesos",children:[]},{level:2,title:"2.1.2 Propiedades del sistema y comandos del sistema",slug:"_2-1-2-propiedades-del-sistema-y-comandos-del-sistema",children:[]}],filePathRelative:"es/unit2/runtime.md",git:{updatedTime:1633262081e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:3}]}}},8482:(s,a,n)=>{n.r(a),n.d(a,{default:()=>_});var l=n(6252);const e=(0,l._)("h1",{id:"_2-1-creacion-rapida-de-procesos-con-java-con-runtime",tabindex:"-1"},"2.1. Creación rápida de procesos con Java con Runtime",-1),o={class:"table-of-contents"},p=(0,l.Uk)("2.1.1. Creación rápida de procesos"),t=(0,l.Uk)("2.1.2 Propiedades del sistema y comandos del sistema"),r=(0,l._)("h2",{id:"_2-1-1-creacion-rapida-de-procesos",tabindex:"-1"},"2.1.1. Creación rápida de procesos",-1),c=(0,l._)("p",null,"La clase java.lang.Runtime se usa principalmente para interactuar con el JRE de Java. Esta clase proporciona métodos para lanzar procesos, llamar al recolector de basura (Garbage Collector), saber la cantidad de memoria disponible y libre, etc.",-1),i={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("Especificación java.lang.Runtime"),A=(0,l._)("p",null,[(0,l.Uk)("Cada aplicación en Java tiene acceso a una única instancia de "),(0,l._)("em",null,"java.lang.Runtime"),(0,l.Uk)(" a través del método "),(0,l._)("code",null,"Runtime.getRuntime()"),(0,l.Uk)(" que devuelve la instancia "),(0,l._)("strong",null,"singleton"),(0,l.Uk)(" de la clase Runtime.")],-1),u={class:"custom-container question"},m=(0,l._)("p",{class:"custom-container-title"},"Patrones de diseño: Singleton",-1),B=(0,l._)("p",null,"¿Qué son los patrones de diseño? ¿Qué es y para qué se usa el patrón de diseño singleton?",-1),d=(0,l._)("p",null,"Investiga cómo realizar una clase que siga el patrón de diseño singleton.",-1),D={href:"https://refactoring.guru/es/design-patterns/java",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("Refactoring.Guru Patrones de diseño"),E=(0,l.uE)('<p>El método que nos interesa a nosotros para la creación de procesos es</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>Veamos un ejemplo sencillo de uso de este método</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> throws IOException </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Launch notepad app</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">notepad.exe</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way always works</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// String separator = System.getProperty(&quot;file.separator&quot;);</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime()</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">//    .exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way used to work (UNIX style paths)</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Se puede observar que en el parámetro que pasamos al método <code>exec</code> indicamos el programa que queremos ejecutar. En este caso, como el <em>notepad</em> se encuentra en el PATH del sistema, no es necesario indicar la ruta donde se encuentra el programa. En otro caso, sí tendríamos que hacerlo.</p><div class="pagebreak"></div><h2 id="_2-1-2-propiedades-del-sistema-y-comandos-del-sistema" tabindex="-1">2.1.2 Propiedades del sistema y comandos del sistema</h2><p>Si tenemos pensado desarrollar aplicaciones que funcionen en diferentes SO tendremos que enfrentarnos a la problemática del funcionamiento diferente de los distintos SO.</p><p>Vamos a ver algunos ejemplos que pueden servir como guía para otros problemas similares a los expuestos.</p><div class="custom-container danger"><p class="custom-container-title">File separator</p><p>Para indicar las rutas en un sistema los sistemas UNIX emplean el caracter <strong>/</strong> como separador mientras que los sistemas Windows usan el caracter <strong>\\</strong> . En resumen, / en *X y \\ en Windows.</p><p>¿Cómo podemos hacer entonces que nuestras aplicaciones sean independientes del SO en el que se ejecutan?</p><p>Para este tipo de cuestiones vamos a utilizar de forma recurrente las propiedades del sistema mediante <code>System.getProperty(String propName)</code>. Estas propiedades se configuran con el propio sistema operativo, aunque las podemos modificar usando los parámetros de ejecución de la máquina virtual</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>o</p><blockquote><p>-Dfile.separator</p></blockquote><p>Aunque siempre es una buena práctica usar el caracter <strong>/</strong> en las rutas ya que Java es capaz de convertirlas al sistema en el que se ejecuta.</p></div><p>Si lo que queremos es ejecutar un comando del SO, tenemos que hacerlo, al igual que si lo hacemos manualmente, a través del shell del sistema, donde volvemos a encontrar la dicotomía entre sistemas UNIX y sistemas Windows.</p><p>Vamos a ver el código que, a través de las propiedades del sistema, nos permite obtener un listado de los archivos existentes en la carpeta personal del usuario.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Primero obtenemos la carpeta del usuario</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> homeDirectory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">user.home</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> isWindows </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">os.name</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">)</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toLowerCase</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">startsWith</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">windows</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">isWindows</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">cmd.exe /c dir %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">else</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">sh -c ls %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container info"><p class="custom-container-title">Modo shell no interactivo</p><p>Como se puede observar, tanto para Windows como UNIX se ha usado el modificador <strong>c</strong> del comando. Este modificador indica que se abra un shell, se ejecute el comando recibido y se cierre el proceso del shell.</p></div><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Calling app example</span></span>\n<span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">mouseClicked</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">MouseEvent</span><span style="color:#90A4AE;"> e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">  </span><span style="color:#90A4AE;font-style:italic;">// Launch Page</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Linux version</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">open http://localhost:8153/go</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Windows version</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;explorer http://localhost:8153/go&quot;);</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">IOException</span><span style="color:#90A4AE;"> e1</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Don&#39;t care</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container question"><p class="custom-container-title">System properties</p><p>Vamos a crear nuestro primer programa en Java, que no va a ser tan sencillo como pueda parecer</p><p>Usando métodos de las clases System y Runtime hacer un programa que muestre</p><ul><li>todas las propiedades establecidas en el sistema operativo y sus valores.</li><li>memoria total, memoria libre, memoria en uso y los procesadores disponibles</li></ul><p>Mira los métodos que proporcionan las clases Runtime y system. Intenta obtener una lista u otra estructura de datos que te permita recorrer las propiedades para ir mostrando sus nombres y valores.</p></div><details class="custom-container details"><summary>Solución propuesta para la actividad anterior</summary><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> freeMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">freeMemory</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">totalMemory</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> usedMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> freeMemory</span><span style="color:#39ADB5;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">/*** Runtime.getRuntime() usage ***/</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Show system information</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Memory will be shown in MBytes formatted with 2-decimal places</span></span>\n<span class="line"><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> megabytes </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Available memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">availableMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Free memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">freeMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Used memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">usedMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Processors in the system: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">availableProcessors</span><span style="color:#39ADB5;">());</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">/*** System.getProperties() usage ***/</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Show each pair of property:value from System properties</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 1st. As a lambda expression using anonymous classes</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">forEach</span><span style="color:#39ADB5;">((</span><span style="color:#90A4AE;">k</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">v</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">-&gt;</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">k </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> v</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 2nd. As a Map.entrySet </span></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Map</span><span style="color:#39ADB5;">.</span><span style="color:#9C3EDA;">Entry</span><span style="color:#39ADB5;">&lt;</span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> entry </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">entrySet</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getKey</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> val </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getValue</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> val</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 3rd. As a Map.keySet</span></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">keySet</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">toArray</span><span style="color:#39ADB5;">())</span></span>\n<span class="line"><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt;&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key</span><span style="color:#39ADB5;">+</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">key</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toString</span><span style="color:#39ADB5;">()));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Other methods found by students, based on a Properties object methods.</span></span>\n<span class="line"><span style="color:#9C3EDA;">Properties</span><span style="color:#90A4AE;"> prop </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> propName</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">stringPropertyNames</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">  System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propName </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propName</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#90A4AE;">        </span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Or directly to the console using </span></span>\n<span class="line"><span style="color:#90A4AE;">prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">list</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></details>',17),g={class:"custom-container info"},v=(0,l._)("p",{class:"custom-container-title"},"Formato numérico",-1),f=(0,l._)("p",null,"Todos los lenguajes de programación tienen varias formas de mostrar la información al usuario. Cuando se trata de mostrar información a a través de la consola, tenemos un par de alternativas para formatear la información numérica.",-1),q={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("NumberFormat"),S=(0,l.uE)('<p>Si usamos la clase NumberFormat o cualquiera de sus descendientespodemos controlar con bastante precisión cómo se verán los números, usando patrones.</p><div class="language-java ext-java"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> numberFormat </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Si usamos hashes en vez de ceros permitimos que .30 se vea como 0.3</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// (los dígitos adicionales son opcionales)</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">numberFormat</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">number</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"></span></code></pre></div>',2),k={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"},C=(0,l.Uk)("System.out.printf"),j=(0,l.uE)('<p>Heredado de la sintaxis de la función printf de C, podemos utilizar la sintaxis de java.util.Formatter para configurar cómo será visualizada la información.</p><div class="language-java ext-java"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;">\\n</span><span style="color:#91B859;">$%10.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// % rellena con hasta 10 posiciones los números</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// para justificarlos a la derchan.</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">%n$%.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span></code></pre></div>',2),_={render:function(s,a){const n=(0,l.up)("DownloadPDF-component"),_=(0,l.up)("DocumentCover-component"),F=(0,l.up)("RouterLink"),R=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n),(0,l.Wm)(_,{titulo:"2.1. Creación de procesos con Java con Runtime"}),e,(0,l._)("nav",o,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(F,{to:"#_2-1-1-creacion-rapida-de-procesos"},{default:(0,l.w5)((()=>[p])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(F,{to:"#_2-1-2-propiedades-del-sistema-y-comandos-del-sistema"},{default:(0,l.w5)((()=>[t])),_:1})])])]),r,c,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",i,[y,(0,l.Wm)(R)])])]),A,(0,l._)("div",u,[m,B,d,(0,l._)("p",null,[(0,l._)("a",D,[b,(0,l.Wm)(R)])])]),E,(0,l._)("div",g,[v,f,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",q,[h,(0,l.Wm)(R)])])]),S,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",k,[C,(0,l.Wm)(R)])])]),j])],64)}}}}]);