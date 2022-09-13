import{_ as d}from"./ProducerConsumer.8367c5c5.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as u,d as i,a as e,w as a,f as m,r,b as s}from"./app.6f7d6c20.js";const v={},h=e("h1",{id:"_3-3-producer-consumer-model",tabindex:"-1"},"3.3 Producer-Consumer model",-1),b={class:"table-of-contents"},p=s("3.3.1. Communication & synchronization template"),g=s("3.3.2 Main class"),f=s("3.3.3 Producer & Consumer classes"),w=s("3.3.4 Shared class. Threads synchronization"),y=m('<h2 id="_3-3-1-communication-synchronization-template" tabindex="-1">3.3.1. Communication &amp; synchronization template</h2><p>Threads synchronization means having tools to avoid <code>starvation</code> (threads lock), <code>deadlocks</code> (when a condition can never be satisfied) and to ensure shared resources are well managed by concurrent threads access.</p><p>The Producer-Consumer problem is a classic example of a multi-threaded synchronization problem. Let&#39;s go into the usage of the shared resources by using this famous algorithm. <a href="https://es.wikipedia.org/wiki/Problema_productor-consumidor" target="_blank" rel="noopener noreferrer">Wikipedia</a>.</p><p>Without thread control mechanism we already know that problems will rise up randomly:</p><ul><li>Consumer can get elements more than once, exceeding the stock (banc account balance under 0, reader reading a book before it is finished).</li><li>Producers can be quicker than Consumer and produce more information than the system can get, making data loose.- Consumer can be quicker than the Producer and can get more than once the same value, having inconsistent systems.</li></ul><p>That&#39;s all we know as <code>race conditions</code>.</p><p>The following code template repeats over and over again for almos all activities we are going to work on. That&#39;s what we call the Producer-Consumer model.</p><p><img src="'+d+`" alt="Producer-Consumer"></p><p>This model is based on three classes, but depending on the problem we can have only producers or just consumers.</p><p>::: info Model as a design pattern It&#39;s very important to fit our code into the model schema</p><p>This is like a puzzle where we have to adjust the problem solution. Sometimes we won&#39;t have a producer, other there will be no consumer. Maybe we will use the wait condition only in one of them.</p><p>We shouldn&#39;t add or modify the way the schema is presented, all parts must fit into the given model. :::</p><h2 id="_3-3-2-main-class" tabindex="-1">3.3.2 Main class</h2><blockquote><p>Main class will always have the same estructure. Following code can be used asa a template.</p></blockquote><p>Here we instantiate the shared object to be used by producers&amp;consumers. This is the object that will hold communication, synchronization and information exchange between threads.</p><p>In this example it is an object, but we can use a Collection or any other data structure useful for thread to share information and synchronize.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ClasePrincipal { 

    public static void main(String[] args) {    
        ClaseCompartida objetoCompartido = new ObjetoCompartido();
        Productor p  = new Productor(objetoCompartido);
        Consumidor c  = new Consumidor(objetoCompartido);
        productor.start();
        consumidor.start();

        // No es obligatorio, pero en ocasiones puede interesar que la ClasePrincipal
        // espere a que acaben los hilos
        productor.join();
        consumidor.join();

        // Acciones a realizar una vez hayan acabado el productor y el consumidor
    }
    
}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning Number of producer &amp; consumer threads In the previous code we have created and launched one of each, but it has not to be like that.</p><p>Each problem to solve will need a different number of <em>Productores</em> and <em>Consumidores</em>, that will be instantiated and launched in the main method or in any other complementary method in the class in charge of thread management.</p><p>In the same way it&#39;s on the problem if the main thread has to wait for the others to finish or not. :::</p><div class="pagebreak"></div><h2 id="_3-3-3-producer-consumer-classes" tabindex="-1">3.3.3 Producer &amp; Consumer classes</h2><blockquote><p>Both <strong>Producer</strong> and <strong>Consumer</strong> classes will call methods in the shared object.</p></blockquote><p>In both classes, the application logic will be developed inside <strong>run</strong> method. This will be done basically accessing the shared object, calling its synchronized methods, modifying its properties and updating the object state to control its functionality.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Consumidor extends Thread {
    private ClaseCompartida objetoCompartido;
    
    Consumidor(ClaseCompartida objetoCompartido) {
        this.objetoCompartido = objetoCompartido;
    }
    
    @Override
    public void run() {
        // La ejecuci\xF3n del m\xE9todo run estar\xE1 normalmente gestionada por un bucle
        // que controlar\xE1 el ciclo de vida del hilo y se adaptar\xE1 al problema.
        // En el caso de simulaciones se har\xE1n esperas proporcionales.
        try {
            // C\xF3digo que hace el hilo consumidor
            objetoCompartido.accionDeConsumir();
            // La espera es opcional
            Thread.sleep((long)(Math.random()*1000+1000));
        } catch (InterruptedException ex) {

        }         
    }
}    
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Productor extends Thread {
    private ClaseCompartida objetoCompartido;
    
    Productor(ClaseCompartida objetoCompartido) {
        this.objetoCompartido = objetoCompartido;
    }
    
    @Override
    public void run() {
        // La ejecuci\xF3n del m\xE9todo run estar\xE1 normalmente gestionada por un bucle
        // que controlar\xE1 el ciclo de vida del hilo y se adaptar\xE1 al problema.
        // En el caso de simulaciones se har\xE1n esperas proporcionales.
        try {
            // C\xF3digo que hace el hilo productor
            objetoCompartido.accionDeProducir();
            // La espera es opcional
            Thread.sleep((long)(Math.random()*1000+1000));
        } catch (InterruptedException ex) {

        }         
    }
} 
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_3-3-4-shared-class-threads-synchronization" tabindex="-1">3.3.4 Shared class. Threads synchronization</h2><p>This model is completed with the shared object class. Here we provide methods to be used by both Producers and Consumers. Furthermore, this class must be thread-safe to avoid <code>race conditions</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class ClaseCompartida {
    int valorAccedidoSimultaneamente;
    
    ClaseCompartida() {
        // Se inicializa el valor
        this.valorAccedidoSimultaneamente = 0;
    }

    public synchronized void accionDeConsumir() {
        // Si no se cumple la condici\xF3n para poder consumir, el consumidor debe esperar
        while (valorAccedidoSimultaneamente() == 0) {
            try {
                System.out.println(&quot;Consumidor espera...&quot;);
                wait();
            } catch (InterruptedException ex) {
                // Si es necesario se realizar\xE1 la gesti\xF3n de la Interrupci\xF3n
            }
        }
                
        // Cuando se ha cumplido la condici\xF3n para consumir, el consumidor consume
        valorAccedidoSimultaneamente--;
        System.out.printf(&quot;Se ha consumido: %d.\\n&quot;, valorAccedidoSimultaneamente);        

        // Se activa a otros hilos que puedan estar en espera
        notifyAll();
    }
    
    public synchronized void accionDeProducir () {
        // Si no se cumple la condici\xF3n para poder producir, el productor debe esperar
        while (valorAccedidoSimultaneamente() &gt; 10) {
            try {
                System.out.println(&quot;Productor espera...&quot;);
                wait();
            } catch (InterruptedException ex) {
                // Si es necesario se realizar\xE1 la gesti\xF3n de la Interrupci\xF3n                
            }
        }
        
        // Cuando se ha cumplido la condici\xF3n para producir, el productor produce
        valorAccedidoSimultaneamente++;
        System.out.printf(&quot;Se ha producido: %d.\\n&quot;, valorAccedidoSimultaneamente);        

        // Se activa a otros hilos que puedan estar en espera
        notifyAll();
    }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What&#39;s interesting from above code is the pair <code>wait / notifyAll</code> together with the <code>synchronized</code> modifier.</p><ul><li>A call to a <strong>synchronized</strong> method makes it be run if and only if there in no other thread running another <strong>synchronized</strong> method <code>for the same object instance</code>. If that happens the thread trying to accesss the synchronized block will be locked until another thread calls <strong>notifyAll</strong> or leaves the synchronized block. Then all threads waiting for the monitor are awaken but only one of them can own the monitor an run the synchronized block.</li><li>Simply put, calling <strong>wait()</strong> forces the current thread to wait until some other thread invokes notify() or notifyAll() on the same object.For this, the current thread must own the object&#39;s monitor, because the monitor is released.</li><li>We use the notify/notifyAll method for waking up threads that are waiting for an access to this object&#39;s monitor. All awaken threads are automatically sent onto the monitor queue together with all threads already waiting to own the monitor. All threads, once the monitor is owned by them, will start running the synchronized code o will continue running the next sentence after the wait call.</li></ul><blockquote><p>With <strong>wait</strong>, <strong>notifyAll</strong> methods and <strong>synchronized</strong> code blocks we can avoid concurrent threads to modify a shared variable. <em>(lines 21 and 40 from previous code)</em>.</p></blockquote><p>::: info Producer-Consumer model summary Original Producer-Consumer works with a buffer where the Producer puts information and the Consumer gets it from the buffer. The buffer can never be overflown and it cannot be read if it is empty.</p><p>Our example has been simplified by using a int variable that has to be always in the range [0.10]</p><p>This variables can be of any type and the class code will be different depending on it. It must be valid for the problem and the data type control.</p><p>Finally, conditions or states added for waiting and updates will be what us, as programmers, must code in order to make it work as specified by problems requirements. :::</p>`,37);function C(_,j){const o=r("DownloadPDF-component"),l=r("DocumentCover-component"),n=r("router-link");return c(),u("div",null,[i(o),i(l,{titulo:"3.3 Producer-Consumer model"}),h,e("nav",b,[e("ul",null,[e("li",null,[i(n,{to:"#_3-3-1-communication-synchronization-template"},{default:a(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#_3-3-2-main-class"},{default:a(()=>[g]),_:1})]),e("li",null,[i(n,{to:"#_3-3-3-producer-consumer-classes"},{default:a(()=>[f]),_:1})]),e("li",null,[i(n,{to:"#_3-3-4-shared-class-threads-synchronization"},{default:a(()=>[w]),_:1})])])]),y])}const P=t(v,[["render",C],["__file","producer-consumer.html.vue"]]);export{P as default};
