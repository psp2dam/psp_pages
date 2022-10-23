import{_ as p,a as d,b as m,c as h,d as u}from"./threads_vs_process.7f2c90ed.js";import{_ as y,r as t,o as g,c as v,d as s,a as e,w as o,b as n,f as r}from"./app.4c649069.js";const A={},f=e("h1",{id:"_1-1-processes-programs-threads",tabindex:"-1"},"1.1. Processes, programs, threads",-1),b={class:"table-of-contents"},w=n("1.1.1. Processes and programs"),D=n("1.1.2. Concurrent programming"),E=n("What for?"),B=n("Process communication and synchronization"),_=n("1.1.3. Services and threads"),x=n("Sequential program (Von Newmann architecture)"),k=n("Concurrent program"),T=n("Threads vs processes"),q=r('<h2 id="_1-1-1-processes-and-programs" tabindex="-1">1.1.1. Processes and programs</h2><p>A program and a process are related terms. A <code>program</code> is a group of instructions to carry out a specified task with some input data.</p><div class="custom-container tip"><p class="custom-container-title">Black box</p><p>Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings, just by setting some input data set and checking if the output data set meets the expected one.</p></div><p>While a <code>process</code> can be described as an instance of a program running on a computer. A program becomes a process when loaded into memory and thus is an active entity While a program is considered to be a passive one.</p><p>A process has a high resource requirement, it needs resources like CPU, memory address, I/O during its lifetime. It has its own control block called Process Control Block where relevant information as program counter, registers, stack, <em>executable code</em>, state, ... and all it needs to be run by the OS is stored.</p><p><img src="'+p+'" alt="Process in memory"></p><p>Each process is an independent entity. There exist a many-to-one relationship between process and program, which means one program can be invoked multiple times getting several processes in memory running the same copy of the program.</p><h2 id="_1-1-2-concurrent-programming" tabindex="-1">1.1.2. Concurrent programming</h2><p>In computer science, concurrency is the ability of different parts or units of a program to be executed out-of-order or at the same time simultaneously.</p><p>This allows for <code>parallel</code> execution of the concurrent units, which can significantly improve overall speed of the execution in <code>multi-processor and multi-core</code> machines.</p><p>The concept of concurrent computing is frequently confused with the related but distinct concept of parallel computing, although both can be described as <em>multiple processes executing during the same period of time</em>.</p><ul><li>In parallel computing, execution occurs at the same physical instant: for example, on separate processors of a multi-processor machine, with the goal of speeding up computations.</li><li>This parallel computing is impossible on a <code>one-core single processor</code>, as only one computation can occur at any instant (during any single clock cycle). By contrast, concurrent computing consists of process lifetimes overlapping, but execution need not happen at the same instant. The goal here is to model processes in the outside world that happen concurrently using <code>multitask</code>.</li></ul><p><img src="'+d+'" alt="Concurrency vs parallelism"></p><div class="custom-container tip"><p class="custom-container-title">Concurrency</p><p>By and large, both previously described scenarios are gonna be referred to as <strong>concurrency</strong>.</p></div><h3 id="what-for" tabindex="-1">What for?</h3><p>The Real World is Massively Complex</p><ul><li>In the natural world, many complex, interrelated events are happening at the same time, yet within a temporal sequence.</li><li>Compared to serial computing, parallel computing is much better suited for modeling, simulating and understanding complex, real world phenomena.</li></ul><p>Imagine modeling these serially: climate change, rush hour traffic, weather forecast, galaxy formation, ...</p><p>Main Reasons for Using Parallel Programming</p><ul><li>Save time and money. In theory, throwing more resources at a task will shorten its time to completion, with potential cost savings. <ul><li>Parallel computers can be built from cheap, commodity components.</li></ul></li><li>Solve larger and more complex problems. Many problems are so large and/or complex that it is impractical or impossible to solve them using a serial program, especially given limited computer memory. <ul><li><em>Grand Challenge Problems</em> (en.wikipedia.org/wiki/Grand_Challenge) requiring petaflops and petabytes of computing resources.</li><li>Web search engines/databases processing millions of transactions every second</li></ul></li><li>Take advantage of non-local resources. Using compute resources on a wide area network, or even the Internet when local compute resources are scarce or insufficient. <ul><li><em>SETI@home</em> (setiathome.berkeley.edu) has over 1.7 million users in nearly every country in the world. (May, 2018).</li></ul></li><li>Make better use of underlying parallel hardware. Modern computers, even laptops, are parallel in architecture with multiple processors/cores. <ul><li>Parallel software is specifically intended for parallel hardware with multiple cores, threads, etc.</li><li>In most cases, serial programs run on modern computers &quot;waste&quot; potential computing power.</li></ul></li><li>Increase security. Each task can be isolated in a different process, so debug and check the security, even finishing it when it&#39;s not working properly, can be done without hanging the whole system.</li></ul><p>Historically, parallel computing has been considered to be &quot;the high end of computing&quot;, and has been used to model difficult problems in many areas of science and engineering. Today, commercial applications provide an equal or greater driving force in the development of faster computers. These applications require the processing of large amounts of data in sophisticated ways. For example:</p><p>New hardware environments can be classified in terms of:</p><ul><li>Microprocessor with many cores sharing system memory.</li><li>Multiprocessor systems with shared memory</li><li>Distributed systems and cloud services.</li></ul><h3 id="process-communication-and-synchronization" tabindex="-1">Process communication and synchronization</h3><p>The concurrent running of many processes may suppose the collaboration of some of them in order to complete a common task, while there can also be competing for system resources.</p><p>In both cases it is compulsory to add communication and synchronization techniques for the processes.</p><div class="custom-container info"><p class="custom-container-title">Concurrent programming</p><p>Concurrent programming and PSP is just about that, the knowledge of these <strong>communication and synchronization techniques</strong>.</p></div><p>When thinking about the way a process can communicate with each other, three are two main options:</p><ul><li>Message passing: It&#39;s commonly used when processes are running on different devices. They exchange information following a protocol previously set and agreed by the parts.</li><li>Shared resources / memory: It&#39;s only available when both processes are running on the same device and allows process synchronization based on a shared resource value or state.</li></ul><p>We can also classify the communication by the syncrhonization the processes use during the message passing process:</p><ul><li>Synchronous communication happens when messages can only be exchanged in real time. It requires that the transmitter and receiver are present in the same time and/or space. Sender is blocked until receiver gets the message. Both processes are synchronized at the reception time. <ul><li>Examples of synchronous communication are phone calls or video meetings.</li></ul></li><li>Asynchronous communication happens when information can be exchanged independent of time. It doesn\u2019t require the recipient\u2019s immediate attention, allowing them to respond to the message at their convenience. Sender continues with it processing just after delivering the message to the receiver, not being blocked. <ul><li>Examples of asynchronous communication are emails, online forums, and collaborative documents.</li></ul></li></ul><h2 id="_1-1-3-services-and-threads" tabindex="-1">1.1.3. Services and threads</h2><p>A program, as previously said, is a group of sentences (actions and checks) and a running workflow. The workflow line determines the execution order for the sentences, with dependency of the program structure and it&#39;s data.</p><p>Based on the number of workflow lines a program can have, processes are classified in terms of::</p><ul><li>Sequential: The have only one control workflow (monothread)</li><li>Concurrent: They have multiple control workflows (multithread).</li></ul><h3 id="sequential-program-von-newmann-architecture" tabindex="-1">Sequential program (Von Newmann architecture)</h3><p>The classical von Neumann model of computation4 is a familiar model of sequential behavior. According to this, when we start learning to code we learn the classical way, following Von Neummann&#39;s conceptual model.</p><p>Sequential programs have a single workflow line. instructions on these applications are strictly sorted as a lineal time sequence.</p><p>The program&#39;s behavior is a function of the kind of instructions it is made of and the order they are run (set by its input data)</p><p>In sequential programs the time every sentence takes to complete has no consequences on the final result.</p><p><img src="'+m+'" alt="Sequential flowchart example"></p><p>The way to test a sequential program (<code>verify</code> or <code>debug</code>) is so easy:</p><ul><li>Every sentence gives the right output.</li><li>The sentences are executed in the expected order.</li></ul><p>That&#39;s the basis of many basic test methods, as the &quot;white-box&quot; model.</p><h3 id="concurrent-program" tabindex="-1">Concurrent program</h3><p>In concurrent programs there are many workflow lines. The sentences are not run following the same order as in a sequential program the would do.</p><p>In concurrent programs sequential order between sentences is still relevant. Nevertheless, in concurrent programs the order is only partial while in sequential programs the order is strict.</p><p><img src="'+h+`" alt="Concurrent flowchart example"></p><p>In concurrent programs the <em>sequencing</em> for concurrent processes is called <strong>synchronization</strong>.</p><p>The partial order implies that concurrent programs does not have to be deterministic, that is, the application results with the same input data will not always be equal.</p><div class="custom-container danger"><p class="custom-container-title">Indeterminism</p><p>Having different outputs for the same inputs does not means that a concurrent program has any bug or malfunction.</p></div><p>Look at the following pseudo code example</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">TestClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> x</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> i</span><span style="color:#39ADB5;">=</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">&lt;=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i</span><span style="color:#39ADB5;">++)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            x</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> j</span><span style="color:#39ADB5;">=</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> j </span><span style="color:#39ADB5;">&lt;=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> j</span><span style="color:#39ADB5;">++)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            x</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">sequential</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">x</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">parallel</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// cobegin-coend means that both methods are run simultaneously</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// These sentences doesn&#39;t exist in Java. They are used for </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// sample purposes</span></span>
<span class="line"><span style="color:#90A4AE;">        cobegin</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        coend</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">x</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container question"><p>\xBFWhich is the value for variable x after sequential method is run?</p><p>\xBFWhich is the value for variable x after parallel method is run?</p></div><div class="custom-container info"><p class="custom-container-title">Historical review</p><p>The nature and models of interaction between processes of a concurrent program were studied and described by <strong>Dijkstra</strong> (1968), Brinch <strong>Hansen</strong> (1973) and <strong>Hoare</strong> (1974).</p><p>The academic study of concurrent algorithms started in the 1960s and they are the foundation for multiprocess operating systems in the 70&#39;s and 80&#39;s.</p></div><p>Concurrent programs inherent indeterminism makes its analysis and validation more complex. However, to test a concurrent program (<code>verify</code> or <code>debug</code>) the same techniques as for sequential ones are needed, adding these new ones:</p>`,56),C=e("li",null,"Sentences can be validated individually only if the are not engaged to shared variables.",-1),I=n("If shared variables are used there can be many interference effects for concurrent sentences and testing can also become very difficult. "),S=e("li",null,[n("Only when sequencing between tasks is made by using explicit "),e("strong",null,"synchronization"),n(" sentences, time is not relevant on the result.")],-1),P=r('<div class="custom-container warning"><p class="custom-container-title">Important</p><p>Three previous topics described above are the basis of concurrent programming.</p><p>\u{1F441}\uFE0F To know them, to understand them and to apply them in the right way is all about what we are gonna learn all this course.</p></div><h3 id="threads-vs-processes" tabindex="-1">Threads vs processes</h3><p>A thread is the unit of execution within a process. A thread is just one of the workflow lines a concurrent process can have. A process is a heavyweight running unit.</p><p>A process can have anywhere from just one thread (the main thread) to many threads. If a process has more than one thread, every thread is a lightweight running unit.</p><table><thead><tr><th style="text-align:left;">Processes</th><th style="text-align:left;">Threads</th></tr></thead><tbody><tr><td style="text-align:left;">Have more than one thread</td><td style="text-align:left;">A thread always exists within a process</td></tr><tr><td style="text-align:left;">They are independent from others</td><td style="text-align:left;">They share the process resources</td></tr><tr><td style="text-align:left;">The OS manages them</td><td style="text-align:left;">The process manages them</td></tr><tr><td style="text-align:left;">they can communicate on the OS</td><td style="text-align:left;">The process manages their communication</td></tr></tbody></table><p><img src="'+u+'" alt="Threads vs Processes"></p><p>In the above image you can see the relationship in the way a thread is created and its related process.</p><ul><li>The process resides in its memory address space. Threads share that memory area. In the process&#39;s address space every thread has its reserved area, but all of them can share the process&#39;s global memory and his open resources (files, sockets, etc.)..</li><li>We have already described a process PCD with the process information..</li><li>In a similar way, have their TCB (Thread Control Block) where the threads store their specific information (program counter, stack pointer, thread status, registers and a PCB pointer).</li></ul><div class="custom-container info"><p class="custom-container-title">Services</p><p>A service is a process commonly started during OS boot. As it does not need user interaction services are run as <strong>daemons</strong> run in <em>background mode</em>.</p><p>They are called services because once started they are waiting for a process to ask them to do a taks. As they have to manage request from several processes they usually are multithread programs.</p></div>',9);function M(F,j){const l=t("DownloadPDF-component"),i=t("DocumentCover-component"),a=t("router-link"),c=t("Badge");return g(),v("div",null,[s(l),s(i,{titulo:"1.1. Processes, programs, threads"}),f,e("nav",b,[e("ul",null,[e("li",null,[s(a,{to:"#_1-1-1-processes-and-programs"},{default:o(()=>[w]),_:1})]),e("li",null,[s(a,{to:"#_1-1-2-concurrent-programming"},{default:o(()=>[D]),_:1}),e("ul",null,[e("li",null,[s(a,{to:"#what-for"},{default:o(()=>[E]),_:1})]),e("li",null,[s(a,{to:"#process-communication-and-synchronization"},{default:o(()=>[B]),_:1})])])]),e("li",null,[s(a,{to:"#_1-1-3-services-and-threads"},{default:o(()=>[_]),_:1}),e("ul",null,[e("li",null,[s(a,{to:"#sequential-program-von-newmann-architecture"},{default:o(()=>[x]),_:1})]),e("li",null,[s(a,{to:"#concurrent-program"},{default:o(()=>[k]),_:1})]),e("li",null,[s(a,{to:"#threads-vs-processes"},{default:o(()=>[T]),_:1})])])])])]),q,e("ul",null,[C,e("li",null,[I,s(c,{type:"danger",text:"warning",vertical:"middle"})]),S]),P])}const N=y(A,[["render",M],["__file","process.html.vue"]]);export{N as default};
