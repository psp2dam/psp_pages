"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[451],{5342:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-1daecb0f",path:"/en/unit2/runtime.html",title:"2.1 Running processes in Java with Runtime",lang:"en-US",frontmatter:{title:"2.1 Running processes in Java with Runtime"},excerpt:"",headers:[{level:2,title:"2.1.1. Quick process launch",slug:"_2-1-1-quick-process-launch",children:[]},{level:2,title:"2.1.2 System properties and command shells",slug:"_2-1-2-system-properties-and-command-shells",children:[]}],filePathRelative:"en/unit2/runtime.md",git:{updatedTime:1632391777e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:2}]}}},9474:(s,n,a)=>{a.r(n),a.d(n,{default:()=>x});var l=a(6252);const e=(0,l._)("h1",{id:"_2-1-running-processes-in-java-with-runtime",tabindex:"-1"},"2.1. Running processes in Java with Runtime",-1),p={class:"table-of-contents"},o=(0,l.Uk)("2.1.1. Quick process launch"),t=(0,l.Uk)("2.1.2 System properties and command shells"),r=(0,l._)("h2",{id:"_2-1-1-quick-process-launch",tabindex:"-1"},"2.1.1. Quick process launch",-1),c=(0,l._)("p",null,"There are several methods defined in the Runtime class. These methods can be invoked to get the information about the runtime environment such as number of processors available to the JVM, about of memory available, loading native library, explicitly call garbage collector, and so forth.",-1),i={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("Specification java.lang.Runtime"),A=(0,l._)("p",null,[(0,l.Uk)("Every Java program has an instance of the Runtime class, which encapsulates the runtime environment of the program. This class cannot be instantiated, but we can get a reference "),(0,l._)("strong",null,"singleton instance"),(0,l.Uk)(" to the Runtime of the currently running program with the help of the static method "),(0,l._)("strong",null,"java.lang.Runtime.getRuntime()"),(0,l.Uk)(".")],-1),u={class:"custom-container question"},m=(0,l._)("p",{class:"custom-container-title"},"Design patterns: Singleton",-1),B=(0,l._)("p",null,"¿What are design patterns? ¿What is and what is used for the singleton pattern?",-1),D=(0,l._)("p",null,"Look how to implement a class with the singleton pattern.",-1),b={href:"https://refactoring.guru/design-patterns/java",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("Refactoring.Guru design patterns"),h=(0,l.uE)('<p>The Runtime class method we are interested in, to create a new processes is</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>This is a simple, not yet customizable, way to spawn a new sub-process.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> throws IOException </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Launch notepad app</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">notepad.exe</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way always works</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// String separator = System.getProperty(&quot;file.separator&quot;);</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way used to work (UNIX style paths)</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>As you can see the argument to <code>exec</code> method is just the program we want to run. In this example, as <em>notepad</em> is in the system PATH it&#39;s not necessary to tell the path to the program. Otherwise, the path must be specified with the program name.</p><div class="pagebreak"></div><h2 id="_2-1-2-system-properties-and-command-shells" tabindex="-1">2.1.2 System properties and command shells</h2><p>If we plan to code platform independent applications, we have to deal with many issues because of differences between OS. So sometimes we need to deal with specific OS information. A useful way to get that information is by getting System properties.</p>',8),E={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#getProperties()",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("Specification System.getProperties"),f=(0,l.uE)('<p>Some examples are provided here using System properties. Similar solutions can be used for other issues.</p><div class="custom-container danger"><p class="custom-container-title">File separator</p><p>For file path or directory separator, the Unix system introduced the slash character / as directory separator, and the Microsoft Windows introduced backslash character \\ as the directory separator. In a nutshell, this is / on UNIX and \\ on Windows.</p><p>Then, ¿how can we code OS independent applications??</p><p>In Java, we can use the following three methods to get the platform-independent file path separator.</p><ul><li>System.getProperty(&quot;file.separator&quot;)</li><li>FileSystems.getDefault().getSeparator() (Java NIO)</li><li>File.separator Java IO</li></ul><p>From now on, we are gonna use System properties in our applications for several situations using <code>System.getProperty(String propName)</code>. These properties are configured by the OS and the JVM, though we can modify them by setting the JVM running setting</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>or</p><blockquote><p>-Dfile.separator</p></blockquote><p>Nevertheless is always a good practice to use slash character <strong>/</strong> in paths as Java is able to convert them to the system it is running on.</p></div><p>If we want to run an OS command we have to do it as we usually do, by using the command shell, where once again we find the troubleshot with UNIX / Windows.</p><p>Let&#39;s take a look at the way we can use the system properties, once again, to get a list of files in the user personal folder.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// First we get the user folder path</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> homeDirectory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">user.home</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// And then we set which OS are we running on</span></span>\n<span class="line"><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> isWindows </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">os.name</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">)</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toLowerCase</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">startsWith</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">windows</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">isWindows</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">cmd.exe /c dir %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">else</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">sh -c ls %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container info"><p class="custom-container-title">non-interactive shell mode</p><p>In the previous code example, both for Windows and UNIX modifier <strong>c</strong> is used for command shells. This modifier tells the system to open a command shell, to run the companion command and close the shell after it has finished.</p></div><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Calling app example</span></span>\n<span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">mouseClicked</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">MouseEvent</span><span style="color:#90A4AE;"> e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">  </span><span style="color:#90A4AE;font-style:italic;">// Launch Page</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Linux version</span></span>\n<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">open http://localhost:8153/go</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Windows version</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;explorer http://localhost:8153/go&quot;);</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">IOException</span><span style="color:#90A4AE;"> e1</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Don&#39;t care</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container question"><p class="custom-container-title">System properties</p><p>Our first applications in java is not gonna be an easy one.</p><p>Using methods from System class and Runtime class, write the code for an app that shows</p><ul><li>all the system properties configured in your OS</li><li>total memory, free memory, used memory and processors available</li></ul><p>Make a research into Runtime class methods. For System properties try to get a list or iterable data estructure to show each of the system properties and their values.</p></div><p>::: detail Solution to previous activity</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> freeMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">freeMemory</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">totalMemory</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> usedMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> freeMemory</span><span style="color:#39ADB5;">;</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">    /*** Runtime.getRuntime() usage ***/</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Show system information</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Memory will be shown in MBytes formatted with 2-decimal places</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> megabytes </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Available memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">            megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">availableMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Free memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">            megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">freeMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Used memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">            megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">usedMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Processors in the system: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span></span>\n<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">availableProcessors</span><span style="color:#39ADB5;">());</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">    /*** System.getProperties() usage ***/</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Show each pair of property:value from System properties</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// 1st. As a lambda expression using anonymous classes</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">forEach</span><span style="color:#39ADB5;">((</span><span style="color:#90A4AE;">k</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">v</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">-&gt;</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">k </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> v</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// 2nd. As a Map.entrySet </span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Map</span><span style="color:#39ADB5;">.</span><span style="color:#9C3EDA;">Entry</span><span style="color:#39ADB5;">&lt;</span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> entry </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">entrySet</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getKey</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> val </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getValue</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> val</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// 3rd. As a Map.keySet</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">keySet</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">toArray</span><span style="color:#39ADB5;">())</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt;&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key</span><span style="color:#39ADB5;">+</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">key</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toString</span><span style="color:#39ADB5;">()));</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Other methods found by students, based on a Properties object methods.</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">Properties</span><span style="color:#90A4AE;"> prop </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> propertyName</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">stringPropertyNames</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">      System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propertyName </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propertyName</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#90A4AE;">            </span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Or directly to the console using </span></span>\n<span class="line"><span style="color:#90A4AE;">    prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">list</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>:::</p>',11),v={class:"custom-container info"},w=(0,l._)("p",{class:"custom-container-title"},"Number format",-1),S=(0,l._)("p",null,"In any programming language we have many different ways to format the information shown to the user. As in this first applications we are using the console as the system output, let's check the two main techniques we can use in Java",-1),q={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("NumberFormat"),_=(0,l.uE)('<p>Using NumberFormat class or any of its descendants we can get control on how the numbers are shown with high precision, using numeric patterns.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> numberFormat </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Hashes can be used instead of zeros to allow .30 to be shown as 0.3 (additional digits are optional)</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">numberFormat</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">number</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),F={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"},R=(0,l.Uk)("System.out.printf"),j=(0,l.uE)('<p>Similar to C&#39;s printf syntax, we can use the java.util.Formatter syntax to set how data is visualized.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;">\\n</span><span style="color:#91B859;">$%10.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// numbers after % print preceding spaces to fill and justify numbers.</span></span>\n<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">%n$%.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),x={render:function(s,n){const a=(0,l.up)("DownloadPDF-component"),x=(0,l.up)("DocumentCover-component"),C=(0,l.up)("RouterLink"),M=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(a),(0,l.Wm)(x,{titulo:"2.1. Running processes in Java with Runtime"}),e,(0,l._)("nav",p,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(C,{to:"#_2-1-1-quick-process-launch"},{default:(0,l.w5)((()=>[o])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(C,{to:"#_2-1-2-system-properties-and-command-shells"},{default:(0,l.w5)((()=>[t])),_:1})])])]),r,c,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",i,[y,(0,l.Wm)(M)])])]),A,(0,l._)("div",u,[m,B,D,(0,l._)("p",null,[(0,l._)("a",b,[d,(0,l.Wm)(M)])])]),h,(0,l._)("p",null,[(0,l._)("a",E,[g,(0,l.Wm)(M)])]),f,(0,l._)("div",v,[w,S,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",q,[k,(0,l.Wm)(M)])])]),_,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",F,[R,(0,l.Wm)(M)])])]),j])],64)}}}}]);