import{_ as t,r as l,o as i,c as u,d as a,a as s,w as o,b as n,f as A}from"./app.423869e7.js";const d={},y=s("h1",{id:"_3-4-mecanismos-alternativos-de-sincronizacion",tabindex:"-1"},"3.4 Mecanismos alternativos de sincronizaci\xF3n",-1),m={class:"table-of-contents"},v=n("3.4.1. Sem\xE1foros"),B=n("3.4.2. Mecanismos de alto nivel"),D=n("Colas concurrentes"),E=n("Colecciones concurrentes"),b=n("Variables at\xF3micas"),f=n("3.4.3 Executors, Callables y Future"),h=s("h2",{id:"_3-4-1-semaforos",tabindex:"-1"},"3.4.1. Sem\xE1foros",-1),q=s("p",null,[n("Otro posible mecanismos para sincronizar hilos son los "),s("code",null,"sem\xE1foros"),n(". Un sem\xE1foro es un mecanismo para permitir, o restringir, el acceso a recursos compartidos en un entorno de multiprocesamiento, con varios hilos ejecut\xE1ndose de forma concurrente.")],-1),_=n("Especificaci\xF3n de "),g={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Semaphore.html",target:"_blank",rel:"noopener noreferrer"},x=n("java.util.concurrent.Semaphore"),C=A(`<p>Los sem\xE1foros se emplean para permitir el acceso a diferentes partes de programas (llamados secciones cr\xEDticas) donde se manipulan variables o recursos que deben ser accedidos de forma especial. Seg\xFAn el valor con que son inicializados se permiten a m\xE1s o menos procesos utilizar el recurso de forma simult\xE1nea.</p><p>El funcionamiento de los sem\xE1foros se basa en el uso de dos m\xE9todos, as\xED como en el valor inicial <code>permits</code> con el que se crea el sem\xE1foro:</p><ul><li>release(): Ejecutado por un hilo para liberar el sem\xE1foro cuando el hilo ha terminado de ejecutar la secci\xF3n cr\xEDtica. Por defecto se incrementa la variable <code>permits</code> en 1, aunque puede recibir un valor e incrementarla en esa cantidad.</li><li>acquire(): Ejecutado por un hilo para acceder al sem\xE1foro. Para que un hilo pueda tomar el control del sem\xE1foro y no quedarse bloqueado, la variable <code>permits</code>debe tener un valor mayor que cero. Tambi\xE9n puede recibir un valor, por lo que <code>permits</code> tendr\xE1 que ser mayor que dicho valor.</li><li>permits: Se inicializa a la cantidad de recursos existentes o hilos que queramos que puedan acceder simult\xE1neamente. As\xED, cada proceso, al ir solicitando un recurso, verificar\xE1 que el valor del sem\xE1foro sea mayor de 0; si es as\xED es que existen recursos libres, seguidamente acaparar\xE1 el recurso y restar\xE1 el valor del sem\xE1foro. Cuando el sem\xE1foro alcance el valor 0, significar\xE1 que todos los recursos est\xE1n siendo utilizados, y los procesos que quieran solicitar un recurso deber\xE1n esperar a que el sem\xE1foro sea positivo (alg\xFAn hilo haga un release).</li></ul><div class="custom-container info"><p class="custom-container-title">Mutex</p><p>Un tipo simple de sem\xE1foro es el binario, que puede tomar solamente los valores 0 y 1.</p><p>Se inicializan en 1 y son usados cuando s\xF3lo un proceso puede acceder a un recurso a la vez. Se les suele llamar mutex.</p><p>Tienen un funcionamiento similar a synchronized, funcionando en exclusi\xF3n mutua (<strong>mut</strong>ual <strong>ex</strong>clusion).</p></div><p>Veamos un ejemplo en el que varios Productores y Consumidores acceden de forma simult\xE1nea a un objeto compartido</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Almacen</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">final</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> MAX_LIMITE </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">20</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> productor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">MAX_LIMITE</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> consumidor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> mutex </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">producir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreProductor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando almacenar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el ejemplo, hasta 20 productores pueden acceder a la vez      </span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Sin embargo, s\xF3lo 1 (consumidor/productor) a la vez podr\xE1 actualizar </span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> almacena un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almac\xE9n con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">      </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// El productor permite que un consumidor pueda acceder</span></span>
<span class="line"><span style="color:#90A4AE;">      consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">consumir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreConsumidor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando retirar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el ejemplo siempre tiene que llegar un consumidor antes que un productor</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Sin embargo, s\xF3lo 1 (consumidor/productor) a la vez podr\xE1 actualizar </span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">--;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> retira un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almac\xE9n con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// El consumidor avisa para que un productor pueda volver a dejar productos.</span></span>
<span class="line"><span style="color:#90A4AE;">      productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-2-mecanismos-de-alto-nivel" tabindex="-1">3.4.2. Mecanismos de alto nivel</h2><p>Java, en su paquete <code>java.util.concurrent</code> proporciona varias clases <code>thread-safe</code> que nos permiten acceder a los elementos de colecciones y tipos de datos sin preocuparnos de la concurrencia.</p><p>Es un paquete muy amplio que contiene multitud de clases que podemos utilizar en nuestros desarrollos multihilo para simplificar la complejidad de los mismos.</p><h3 id="colas-concurrentes" tabindex="-1">Colas concurrentes</h3><p>La interfaz <strong>BlockingQueue</strong> define una cola <code>FIFO</code> que bloquea hilos que intentan extraer un elemento si la cola est\xE1 vac\xEDa, hasta que vuelva a haber elementos. Tambi\xE9n permite establecer un n\xFAmero m\xE1ximo de elementos, de marea que se bloquean los procesos cuando intentan a\xF1adir por encima de ese l\xEDmite, a la espera que se extraigan.</p><p>Las clases LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue y DelayQueue implementan la interfaz BlockingQueue.</p><h3 id="colecciones-concurrentes" tabindex="-1">Colecciones concurrentes</h3><p>El uso de colecciones simult\xE1neas es una forma recomendada de crear estructuras de datos compatibles con procesos. Dichas colecciones incluyen ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArraylist y CopyOnWriteArraySet.</p><p><strong>ConcurrentMap</strong> es una subinterfaz de <code>java.util.Map</code> con operaciones at\xF3micas para eliminar o reemplazar pares clave/valor existentes o a\xF1adir pares clave/valor no existentes. ConcurrentHashMap es la versi\xF3n thread-safe an\xE1loga a HashMap.</p><h3 id="variables-atomicas" tabindex="-1">Variables at\xF3micas</h3><p>El paquete <code>java.util.concurrent.atomic</code> incluye clases que proporcionan acciones at\xF3micas sobre tipos de datos b\xE1sicos. Tenemos AtomicBoolean, AtomicInteger, AtomicDouble, .... y proporcionan m\xE9todos para recuperar su valor, incrementar, decrementar, etc.</p><h2 id="_3-4-3-executors-callables-y-future" tabindex="-1">3.4.3 Executors, Callables y Future</h2><p>Existen muchas aproximaciones y librer\xEDas que permiten en uso y gesti\xF3n de hilos desde un programa. Una de las que nos ofrece Java como parte del JDK es la interfaz Executors.</p><p><code>Executors</code> nos va a permitir definir un pool de threads (un conjunto de hilos) que se encargar\xE1n de ejecutar las tareas, pero con un l\xEDmite en cuanto al n\xFAmero de hilos creados y gestionando el la JVM la cola de hilos que ser\xE1n ejecutados en ese pool.</p><p>Se sale del \xE1mbito de este m\xF3dulo estudiar y analizar el funcionamiento de Executors y todas sus posibilidades. Aqu\xED os dejo un enlace a un art\xEDculo que lo explica con un ejemplo muy ilustrativo.</p>`,21),S={href:"https://jarroba.com/multitarea-e-hilos-en-java-con-ejemplos-ii-runnable-executors/",target:"_blank",rel:"noopener noreferrer"},j=n("Executors: Ejemplo supermercado"),z=s("p",null,[s("code",null,"Callable"),n(" viene a poner soluci\xF3n a uno de los problemas que tenemos con la interfaz Runnable, la posibilidad de devolver un valor desde este m\xE9todo.")],-1),k=s("p",null,[n("Si se necesita que un proceso devuelva datos al finalizar, se debe crear una clase que implemente la interfaz Callable y defina un m\xE9todo "),s("code",null,"call()"),n(" que desempe\xF1e la misma funci\xF3n que run() en Runnable. En este caso se tendr\xE1n que crear los procesos de forma diferente; la clase Thread no acepta un objeto Callable como argumento. Por contra, la clase Executors ofrece diversos m\xE9todos est\xE1ticos que crean un proceso a partir de su clase Callable.")],-1),F=s("p",null,[s("code",null,"Future"),n(" es una interfaz que implementa el objeto que devuelve el resultado de la ejecuci\xF3n de un Callable. Se puede seguir ejecutando una aplicaci\xF3n hasta que necesite obtener el resultado del hilo "),s("em",null,"Callable"),n(", momento en el que se invoca el m\xE9todo get() en la instancia Future. Si el resultado ya est\xE1 disponible se recoge y en caso contrario se bloquear\xE1 en la llamada hasta que su m\xE9todo call() devuelva el resultado.")],-1);function L(M,I){const r=l("DownloadPDF-component"),c=l("DocumentCover-component"),e=l("router-link"),p=l("ExternalLinkIcon");return i(),u("div",null,[a(r),a(c,{titulo:"3.4 Mecanismos alternativos de sincronizaci\xF3n"}),y,s("nav",m,[s("ul",null,[s("li",null,[a(e,{to:"#_3-4-1-semaforos"},{default:o(()=>[v]),_:1})]),s("li",null,[a(e,{to:"#_3-4-2-mecanismos-de-alto-nivel"},{default:o(()=>[B]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#colas-concurrentes"},{default:o(()=>[D]),_:1})]),s("li",null,[a(e,{to:"#colecciones-concurrentes"},{default:o(()=>[E]),_:1})]),s("li",null,[a(e,{to:"#variables-atomicas"},{default:o(()=>[b]),_:1})])])]),s("li",null,[a(e,{to:"#_3-4-3-executors-callables-y-future"},{default:o(()=>[f]),_:1})])])]),h,q,s("blockquote",null,[s("p",null,[_,s("a",g,[x,a(p)])])]),C,s("p",null,[s("a",S,[j,a(p)])]),z,k,F])}const T=t(d,[["render",L],["__file","alternatives.html.vue"]]);export{T as default};
