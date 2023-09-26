import{_ as i}from"./ProducerConsumer-a4b1ac79.js";import{_ as c,r as e,o as d,c as A,d as a,a as s,w as o,b as n,f as y}from"./app-a92d8ba6.js";const u={},m=s("h1",{id:"_3-3-producer-consumer-model",tabindex:"-1"},"3.3 Producer-Consumer model",-1),h={class:"table-of-contents"},v=s("h2",{id:"_3-3-1-communication-synchronization-template",tabindex:"-1"},"3.3.1. Communication & synchronization template",-1),b=s("p",null,[n("Threads synchronization means having tools to avoid "),s("code",null,"starvation"),n(" (threads lock), "),s("code",null,"deadlocks"),n(" (when a condition can never be satisfied) and to ensure shared resources are well managed by concurrent threads access.")],-1),E={href:"https://es.wikipedia.org/wiki/Problema_productor-consumidor",target:"_blank",rel:"noopener noreferrer"},D=y('<p>Without thread control mechanism we already know that problems will rise up randomly:</p><ul><li>Consumer can get elements more than once, exceeding the stock (banc account balance under 0, reader reading a book before it is finished).</li><li>Producers can be quicker than Consumer and produce more information than the system can get, making data loose.- Consumer can be quicker than the Producer and can get more than once the same value, having inconsistent systems.</li></ul><p>That&#39;s all we know as <code>race conditions</code>.</p><p>The following code template repeats over and over again for almos all activities we are going to work on. That&#39;s what we call the Producer-Consumer model.</p><p><img src="'+i+`" alt="Producer-Consumer"></p><p>This model is based on three classes, but depending on the problem we can have only producers or just consumers.</p><div class="custom-container info"><p class="custom-container-title">Model as a design pattern</p><p>It&#39;s very important to fit our code into the model schema</p><p>This is like a puzzle where we have to adjust the problem solution. Sometimes we won&#39;t have a producer, other there will be no consumer. Maybe we will use the wait condition only in one of them.</p><p>We shouldn&#39;t add or modify the way the schema is presented, all parts must fit into the given model.</p></div><h2 id="_3-3-2-main-class" tabindex="-1">3.3.2 Main class</h2><blockquote><p>Main class will always have the same estructure. Following code can be used as a a template.</p></blockquote><p>Here we instantiate the shared object to be used by producers&amp;consumers. This is the object that will hold communication, synchronization and information exchange between threads.</p><p>In this example it is an object, but we can use a Collection or any other data structure useful for thread to share information and synchronize.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">ClasePrincipal</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#90A4AE;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ObjetoCompartido</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Productor</span><span style="color:#90A4AE;"> p  </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Productor</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">objetoCompartido</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Consumidor</span><span style="color:#90A4AE;"> c  </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Consumidor</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">objetoCompartido</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// No es obligatorio, pero en ocasiones puede interesar que la ClasePrincipal</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// espere a que acaben los hilos</span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">join</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">join</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Acciones a realizar una vez hayan acabado el productor y el consumidor</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Number of producer &amp; consumer threads</p><p>In the previous code we have created and launched one of each, but it has not to be like that.</p><p>Each problem to solve will need a different number of <em>Producers</em> and <em>Consumers</em>, that will be instantiated and launched in the main method or in any other complementary method in the class in charge of thread management.</p><p>In the same way, it&#39;s on the problem if the main thread has to wait for the others to finish or not.</p></div><div class="pagebreak"></div><h2 id="_3-3-3-producer-consumer-classes" tabindex="-1">3.3.3 Producer &amp; Consumer classes</h2><blockquote><p>Both <strong>Producer</strong> and <strong>Consumer</strong> classes will call methods in the shared object.</p></blockquote><p>In both classes, the application logic will be developed inside <strong>run</strong> method. This will be done basically accessing the shared object, calling its synchronized methods, modifying its properties and updating the object state to control its functionality.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Consumidor</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">extends</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Thread</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">Consumidor</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">objetoCompartido</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">@</span><span style="color:#9C3EDA;">Override</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">run</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// La ejecución del método run estará normalmente gestionada por un bucle</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// que controlará el ciclo de vida del hilo y se adaptará al problema.</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el caso de simulaciones se harán esperas proporcionales.</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Código que hace el hilo consumidor</span></span>
<span class="line"><span style="color:#90A4AE;">            objetoCompartido</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">accionDeConsumir</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// La espera es opcional</span></span>
<span class="line"><span style="color:#90A4AE;">            Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">long</span><span style="color:#39ADB5;">)(</span><span style="color:#90A4AE;">Math</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">random</span><span style="color:#39ADB5;">()*</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">+</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">         </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">    </span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Productor</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">extends</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Thread</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">Productor</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">objetoCompartido</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">@</span><span style="color:#9C3EDA;">Override</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">run</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// La ejecución del método run estará normalmente gestionada por un bucle</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// que controlará el ciclo de vida del hilo y se adaptará al problema.</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el caso de simulaciones se harán esperas proporcionales.</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Código que hace el hilo productor</span></span>
<span class="line"><span style="color:#90A4AE;">            objetoCompartido</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">accionDeProducir</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// La espera es opcional</span></span>
<span class="line"><span style="color:#90A4AE;">            Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">long</span><span style="color:#39ADB5;">)(</span><span style="color:#90A4AE;">Math</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">random</span><span style="color:#39ADB5;">()*</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">+</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">         </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_3-3-4-shared-class-threads-synchronization" tabindex="-1">3.3.4 Shared class. Threads synchronization</h2><p>This model is completed with the shared object class. Here we provide methods to be used by both Producers and Consumers. Furthermore, this class must be thread-safe to avoid <code>race conditions</code>.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">ClaseCompartida</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se inicializa el valor</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">valorAccedidoSimultaneamente </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">synchronized</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">accionDeConsumir</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Si no se cumple la condición para poder consumir, el consumidor debe esperar</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#6182B8;">valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">==</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Consumidor espera...</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#6182B8;">wait</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">                </span><span style="color:#90A4AE;font-style:italic;">// Si es necesario se realizará la gestión de la Interrupción</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">                </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Cuando se ha cumplido la condición para consumir, el consumidor consume</span></span>
<span class="line"><span style="color:#90A4AE;">        valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">--;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Se ha consumido: %d.</span><span style="color:#90A4AE;">\\n</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se activa a otros hilos que puedan estar en espera</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">notifyAll</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">synchronized</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">accionDeProducir</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Si no se cumple la condición para poder producir, el productor debe esperar</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#6182B8;">valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">10</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Productor espera...</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#6182B8;">wait</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">                </span><span style="color:#90A4AE;font-style:italic;">// Si es necesario se realizará la gestión de la Interrupción                </span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Cuando se ha cumplido la condición para producir, el productor produce</span></span>
<span class="line"><span style="color:#90A4AE;">        valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Se ha producido: %d.</span><span style="color:#90A4AE;">\\n</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se activa a otros hilos que puedan estar en espera</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">notifyAll</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What&#39;s interesting from above code is the pair <code>wait / notifyAll</code> together with the <code>synchronized</code> modifier.</p><ul><li>A call to a <strong>synchronized</strong> method makes it be run if and only if there is no other thread running another <strong>synchronized</strong> method <code>for the same object instance</code>. If that happens the thread trying to access the synchronized block will be locked until another thread leaves the synchronized block. Then one random thread is chosen from the threads waiting for the monitor and then it owns the monitor and runs the synchronized block.</li><li>Simply put, calling <strong>wait()</strong> forces the current thread to wait until some other thread invokes <strong>notify()</strong> or <strong>notifyAll()</strong> on the same object. For this, the current thread must own the object&#39;s monitor, because the monitor will be released after the wait call.</li><li>We use the <strong>notify/notifyAll</strong> methods for waking up threads that have previously made a wait() call for this monitos. All awaken threads are automatically sent onto the monitor queue together with all threads already waiting to own the monitor. All threads, once the monitor is owned by them, will start running the synchronized code o will continue running the next sentence after the wait call.</li></ul><blockquote><p>With <strong>wait</strong>, <strong>notifyAll</strong> methods and <strong>synchronized</strong> code blocks we can avoid concurrent threads to modify a shared variable. <em>(lines 21 and 40 from previous code)</em>.</p></blockquote><div class="custom-container info"><p class="custom-container-title">Producer-Consumer model summary</p><p>Original Producer-Consumer works with a buffer where the Producer puts information and the Consumer gets it from the buffer. The buffer can never be overflown and it cannot be read if it is empty.</p><p>Our example has been simplified by using a int variable that has to be always in the range [0.10]</p><p>This variables can be of any type and the class code will be different depending on it. It must be valid for the problem and the data type control.</p><p>Finally, conditions or states added for waiting and updates will be what us, as programmers, must code in order to make it work as specified by problems requirements.</p></div>`,27);function B(g,f){const p=e("DownloadPDF-component"),t=e("DocumentCover-component"),l=e("router-link"),r=e("ExternalLinkIcon");return d(),A("div",null,[a(p),a(t,{titulo:"3.3 Producer-Consumer model"}),m,s("nav",h,[s("ul",null,[s("li",null,[a(l,{to:"#_3-3-1-communication-synchronization-template"},{default:o(()=>[n("3.3.1. Communication & synchronization template")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-2-main-class"},{default:o(()=>[n("3.3.2 Main class")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-3-producer-consumer-classes"},{default:o(()=>[n("3.3.3 Producer & Consumer classes")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-4-shared-class-threads-synchronization"},{default:o(()=>[n("3.3.4 Shared class. Threads synchronization")]),_:1})])])]),v,b,s("p",null,[n("The Producer-Consumer problem is a classic example of a multi-threaded synchronization problem. Let's go into the usage of the shared resources by using this famous algorithm. "),s("a",E,[n("Wikipedia"),a(r)]),n(".")]),D])}const _=c(u,[["render",B],["__file","producer-consumer.html.vue"]]);export{_ as default};
