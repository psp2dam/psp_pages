import{_ as c,a as t}from"./Monitor_queues.a0c5134f.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as v,c as m,d as i,a as e,w as a,e as b,f as r,r as s,b as o}from"./app.6f7d6c20.js";const p={},h=e("h1",{id:"_3-2-sincronizacion-y-comunicacion-de-hilos",tabindex:"-1"},"3.2 Sincronizaci\xF3n y comunicaci\xF3n de hilos",-1),g={class:"table-of-contents"},q=o("3.2.1. Memoria compartida"),j=o("3.2.2. Sincronizaci\xF3n"),y=o("Monitores y bloqueos"),f=o("Secciones cr\xEDticas"),z=o("Sincronizaci\xF3n y actualizaci\xF3n de la informaci\xF3n"),S=o("3.2.3 Sincronizaci\xF3n entre hilos"),k=r('<p>::: info Vocabulario</p><ul><li><strong>Condici\xF3n de carrera</strong>: Situaci\xF3n en que el correcto funcionamiento de un programa depende del orden en que se intercale la ejecuci\xF3n de las instrucciones de sus diferente hilos. Esto ocurre cuando uno o m\xE1s hilos acceden a informaci\xF3n compartida de forma concurrente e intentan modificarla a la vez.</li><li><strong>Deadlock</strong>: Situaci\xF3n en que dos o m\xE1s hilos est\xE1n bloqueados mutuamente, todos ellos esperando para conseguir el bloqueo sobre objetos bloqueados por otros hilos, de manera que ninguno de ellos podr\xE1 continuar nunca.</li><li><strong>Secci\xF3n cr\xEDtica</strong>: Fragmento de un programa que no puede ejecutar de manera simult\xE1nea (concurrentemente) m\xE1s de un hilo del programa, es decir, que distintos hilos deben ejecutar en exclusi\xF3n mutua</li><li><strong>Thread-safe</strong>: Se dice de una clase cuyos m\xE9todos implementan los mecanismos de sincronizaci\xF3n necesarios para el uso concurrente de sus objetos por parte de distintos hilos, de manera que <strong>no es necesario ning\xFAn mecanismo de sincronizaci\xF3n externo</strong> a la propia clase.</li></ul><p>:::</p><h2 id="_3-2-1-memoria-compartida" tabindex="-1">3.2.1. Memoria compartida</h2><p>A menudo los hilos necesitan comunicarse unos con otros. La forma que tienen de hacerlo consiste en compartir un objeto.</p><p>Vamos a desarrollar un ejemplo en el que dos hilos comparten un objeto de la clase Contador.</p><p><img src="'+c+'" alt="alt_text"></p>',7),C=r(`<p>Para probar el objeto compartido, en una cuarta clase que contiene el main se crea un objeto Contador que se inicializa a 100 y se crean y lanzan dos threads, uno de tipo Sumador y otro de tipo Restador. En la clase Sumador se usa el m\xE9todo del objeto Contador que incrementa en uno su valor mientras que en la clase Restador se usa el m\xE9todo que decrementa en uno su valor. Cada una va a realizar la acci\xF3n 300 veces, esperando entre cada acci\xF3n un tiempo aleatorio entre 50ms y 150ms. Es muy importante asegurarse que pasamos el mismo objeto Contador como par\xE1metro al constructor de Sumador y de Restador, para que ambos trabajen con la misma instancia.</p><p>::: question Comportamiento esperado Crea las cuatro clases en funci\xF3n del diagrama de clases proporcionado. Aseg\xFArate que Sumador hereda de Thread y Restador implementa la interfaz Runnable para comprobar las diferencias de uso y creaci\xF3n de threads a partir de cada tipo de clase.</p><p>\xBFQu\xE9 deber\xEDa ocurrir tras ejecutar el c\xF3digo?</p><p>Comprueba lo que pasa realmente. Intenta ejecutar el programa varias veces para ver si puedes obtener resultados diferentes. :::</p><p>:::details C\xF3digo del ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U3S3_SharedMemory {
  public static void main(String[] args) throws InterruptedException {
    // Inicializar el objeto Contador
    Contador c = new Contador(100);
    
    // Crear y lanzar 2 hilos (Sumador + Restador)
    Sumador s1 = new Sumador(&quot;Sumador1&quot;, c);
    Restador r1 = new Restador(&quot;Restador1&quot;, c);
    Thread h1 = new Thread(r1);
    
    s1.start();
    h1.start();
    
    // El hilo principal espera a que los hilos s1 y r1 terminen
    s1.join();
    h1.join();
    
    System.out.println(&quot;El valor final de c es &quot; + c.valor());
    
  }
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Contador {
  private int c = 0;
  
  public Contador(int c) {
    this.c = c;
  }
  
  public void incrementa() {
    c++;
  }
  public void decrementa() {
    c--;
  }
  
  public int valor() {
    return c;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Sumador extends Thread {
  private Contador c;
  public Sumador(String name, Contador c) {
    // To set the thread name we can access the Thread class constructor
    super(name);
    this.c = c;    
  }
  
  @Override
  public void run() {
    // Ejecutar 300 veces con espera entre 50ms y 150ms
    for (int i = 0; i &lt; 300; i++) {      
      try {
        c.incrementa();
        System.out.println(Thread.currentThread().getName() + &quot; &quot; + c.valor());
        Thread.sleep((long) (Math.random() * 100 + 50));
      } catch (InterruptedException ex) {
        // Nothing
      }
    }
  }
}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Restador implements Runnable {
  private Contador c;
  private String name;
  public Restador(String name, Contador c) {
    // Restador doesn&#39;t extend Thread, so it cannot call the Thread constructor
    // super(name);
    this.name = name;
    this.c = c;    
  }
  
  @Override
  public void run() {
    Thread.currentThread().setName(this.name);
    // Ejecutar 300 veces con espera entre 50ms y 150ms
    for (int i = 0; i &lt; 300; i++) {      
      try {
        c.decrementa();
        System.out.println(Thread.currentThread().getName() + &quot; &quot; + c.valor());              
        Thread.sleep((long) (Math.random() * 100 + 50));
      } catch (InterruptedException ex) {
        // Nothing
      }      
    }    
  }
}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si ejecutamos el programa, la mayor\xEDa de veces obtendremos el resultado esperado, 100. Sin embargo, hay ocasiones en que podemos encontrar otros valores tales como 99, 101 o cualquier otro.</p><p>Para evitar problemas de sincronizaci\xF3n (son problemas como hemos visto aleatorios y muy dif\xEDciles de detectar), necesitamos que los hilos est\xE9n sincronizados entre s\xED. :::</p><p>Si analizamos el problema anterior, veremos que se est\xE1 intentando ejecutar el siguiente c\xF3digo en paralelo desde diferentes hilos, en <strong>la misma instancia (memoria compartida)</strong>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  public void incrementa() {
    c++;
  }
  public void decrementa() {
    c--;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si aplic\xE1semos las condiciones de Bernstein a esos dos m\xE9todos, ver\xEDamos que no se cumple ninguna de las tres, por lo que ese c\xF3digo no puede ser ejecutado concurrentemente, al menos no sin tener problemas de concurrencia.</p><p>As\xED, para evitar que varios hilos ejecuten esos m\xE9todos de forma concurrente, necesitamos estructuras de programaci\xF3n que nos ayuden a conseguirlo.</p><h2 id="_3-2-2-sincronizacion" tabindex="-1">3.2.2. Sincronizaci\xF3n</h2><p>El c\xF3digo anterior no funciona porque las operaciones que se realizan en los m\xE9todos incrementa y decrementa no son at\xF3micas, sino que se descomponen en operaciones m\xE1s simples que se ejecutan una tras otra.</p><p>Cuando estas operaciones se ejecutan en un hilo, la ejecuci\xF3n del hilo se puede interrumpir y se pueden intercalar entre ellas operaciones de otros hilos. Seg\xFAn c\xF3mo se intercalen las operaciones y los datos a los que accedan, se pueden obtener resultados no esperados. Esto es lo que se conoce como una <code>condici\xF3n de carrera</code>.</p><p>Como vimos en la primera parte del tema, la comunicaci\xF3n entre threads se produce principalmente mediante el acceso compartido a objetos y sus propiedades. Este mecanismo de comunicaci\xF3n es muy eficiente pero presenta dos tipos de errores:</p><ul><li>Interferencia entre threads</li><li>Errores de consistencia de la informaci\xF3n en memoria.</li></ul><p>La herramienta de programaci\xF3n que utilizamos para prevenir este tipo de errores es la <em>sincronizaci\xF3n</em>.</p><p>La mayor parte del tiempo, los threads no tienen en cuenta la resto de hilos que se ejecutan en el programa ni les importa lo que \xE9stos hagan. Pero si necesitan algo de otro thead, entonces necesitan la sincronizaci\xF3n.</p><h3 id="monitores-y-bloqueos" tabindex="-1">Monitores y bloqueos</h3><p>La sincronizaci\xF3n en Java se realiza usando <code>monitores</code>. Es una propiedad que proporciona la clase Object, por lo tanto todas nuestras clases Java, directa o indirectamente, heredan esta propiedad de Object. Este mecanismo permite a un \xFAnico thread a la vez ejecutar la secci\xF3n de c\xF3digo protegida por el monitor.</p><p>Un monitor no es m\xE1s que un bloqueo sobre un objeto. <strong>Cada objeto tiene un y s\xF3lo un bloqueo (candado) interno asociado</strong>. El bloqueo de un objeto solamente puede ser adquirido por un thread en cada momento.</p><p>La sincronizaci\xF3n implica muchos conceptos. El m\xE1s utilizado es la <code>exclusi\xF3n mutua</code> (<strong>s\xF3lo un hilo puede disponer de un monitor a la vez)</strong>. Por lo tanto, la sincronizaci\xF3n utilizando monitores significa que cuando un hilo accede a una secci\xF3n protegida por un monitor, ning\xFAn otro hilo puede acceder a esa o a cualquier otra secci\xF3n protegida por ese mismo monitor, hasta que el hilo salga de la secci\xF3n protegida</p><p>Pero la sincronizaci\xF3n tambi\xE9n asegura que las escrituras en memoria realizadas por un thread dentro de un bloque protegido por un monitor son accesibles al resto de threads que accedan a los bloques protegidos por ese mismo monitor.</p><p>::: danger Un objeto, un monitor He recalcado en varias ocasiones que los bloques de c\xF3digo a los que se accede en exclusi\xF3n mutua son aquellos que est\xE1n protegidos por el mismo monitor. Esto es lo mismo que decir a aquellos que se realizan sobre el mismo objeto. Cada objeto tiene asociado un monitor y la exclusi\xF3n mutua y la sincronizaci\xF3n de memoria tiene sentido si varios threads usan el mismo monitor para su sincronizaci\xF3n. :::</p><p>Cada objeto gestiona una cola de hilos que quieren conseguir el bloqueo del mismo. Como suele ser habitual, la elecci\xF3n del proceso de la cola que conseguir\xE1 el bloqueo es totalmente indeterminista, depende de m\xFAltiples factores y no sigue ning\xFAn orden preestablecido.</p><h3 id="secciones-criticas" tabindex="-1">Secciones cr\xEDticas</h3><p>En Java la palabra reservada <code>synchronized</code> sirve para hacer que un bloque de c\xF3digo o un m\xE9todo sea protegido por el cerrojo del objeto. Para ejecutar un bloque o un m\xE9todo sincronizado, los hilos deben conseguir previamente el bloqueo (candado) del objeto, debiendo esperar a que quede libre (el hilo que lo tiene lo libere) si el monitor ya ha sido adquirido por otra hilo.</p><p>Esto ocurre s\xF3lo si se est\xE1 intentando acceder al monitor del mismo objeto que otro hilo ya tenga en propiedad.</p><p>La palabra reservada synchronized puede aplicarse en distintos tipos de bloques de c\xF3digo y, en cada caso, se utilizar\xE1 un objeto de bloqueo distinto.</p><ul><li>M\xE9todos no est\xE1ticos</li><li>Static methods</li><li>Code blocks inside methods</li></ul><p>Para m\xE9todos no est\xE1ticos se a\xF1ade la palabra reservada synchronized a la definici\xF3n del m\xE9todo.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Counter {
 private int count = 0;
 public synchronized void add(int value){
   this.count += value;
 }
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El bloqueo se aplica sobre el objeto sobre le que se ejecuta el m\xE9todo (this). En este caso dos hilos no podr\xEDan ejecutar a la vez dos m\xE9todos del mismo objeto marcados como synchronized.</p><p>Cada objeto que instanciemos de la clase tendr\xE1 su propio monitor asociado que no interferir\xE1 con los bloqueos que se hayan hecho sobre otros objetos de la misma clase.</p><p>Como ya hemos dicho, este comportamiento s\xF3lo es v\xE1lido si todos los m\xE9todos sincronizados a los que se quiere acceder pertenecen a la misma instancia. De este modo el monitor es el mismo y se aplica la exclusi\xF3n mutua en la ejecuci\xF3n de los bloques de c\xF3digo protegidos por el monitor.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Counter {
 private int count = 0;
 public synchronized void add(int value){
   this.count += value;
 }
 public synchronized void sub(int value){
   this.count -= value;
 }
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Sincronizaci\xF3n con m\xE9todos est\xE1ticos En este caso el bloqueo se realiza sobre la clase a la que pertenece el m\xE9todo. Como <strong>s\xF3lo hay una instancia de cada objeto clase en la JVM</strong>, s\xF3lo un hilo a la vez podr\xE1 adquirir el monitor y ejecutar el c\xF3digo protegido de una clase est\xE1tica.. :::</p><p>LA sincronizaci\xF3n no tiene porqu\xE9 realizarse sobre todo un m\xE9todo. A veces es preferible sincronizar s\xF3lo una parte de un m\xE9todo. Otras no es posible sincronizar el m\xE9todo completo. Para sincronizar un bloque de c\xF3digo usamos la palabra reservada synchronized seguida, entre par\xE9ntesis, del objeto del que usaremos el monitor. El c\xF3digo protegido se ubicar\xE1 entre un par de llaves.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public void add(int value){
  synchronized(this){
    this.count += value;  
  }
 }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo se ha utilizado \u201Cthis\u201D como objeto para el monitor. Decimos que el codigo est\xE1 sincronizado con el monitor del objeto que pongamos entre par\xE9ntesis.<strong>Un m\xE9todo sincronizado usa el objeto al que pertenece como monitor, es decir, tambi\xE9n usa this</strong>.</p><p>S\xF3lo puede haber un thread ejecutando un bloque sincronizado para el mismo monitor. Los dem\xE1s se quedan esperando.</p><p>El siguiente c\xF3digo define dos bloques protegidos por la instancia a la que pertenecen. <strong>En t\xE9rminos de sincronizaci\xF3n, ambos bloque son totalmente equivalentes.</strong>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MyClass { 
  public synchronized void log1(String msg1, String msg2){
    log.writeln(msg1);
    log.writeln(msg2);
  }
 
  public void log2(String msg1, String msg2){
    synchronized(this){
     log.writeln(msg1);
     log.writeln(msg2);
    }
  }
 }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Por lo tanto, s\xF3lo un thread podr\xEDa ejecutar uno de los dos bloques anteriores al mismo tiempo. Si otro hilo intentase ejecutar el mismo bloque, o el otro, se quedar\xEDa en la bloqueado en la cola de espera del monitor hasta que el monitor quede libre.</p><p>::: warning \xBFQu\xE9 objetos se pueden usar como monitores Oracle dice que se puede usar cualquier objeto como monitor de sincronizaci\xF3n, sin embargo <strong>recomiendan que no se sincronice sobre String, o cualquier objeto envoltorio (wrapper) de los tipos de datos primitivos</strong> (Integer, Double, Boolean, ...).</p><p>Para estar seguros, lo mejor es sincronizar sobre **this&quot;&quot;, sobre una instancia de un objet o, en su defecto sobre un nuevo objeto de tipo object, aunque sea un objeto vac\xEDo sin propiedades ni funcionalidad. :::</p><h3 id="sincronizacion-y-actualizacion-de-la-informacion" tabindex="-1">Sincronizaci\xF3n y actualizaci\xF3n de la informaci\xF3n</h3><p>Sin el uso de la palabra reservada synchronized (o el modificador <code>volatile</code> ) no tenemos ninguna garant\xEDa de que cuando un hilo cambie el valor de una variable compartida con otros threads (por ejemplo a trav\xE9s de un objeto compartido entre todos los threads), los otros hilos puedan ver el valor modificado. No hay ninguna garant\xEDa de que cuando una variable se guarda en un registro de la CPU, el valor de \xE9sta se vuelque a la memoria principal.</p><p>Esto, en programaci\xF3n secuencial no supone ning\xFAn problema ya que el \xFAnico hilo existente no necesita de estas actualizaciones &quot;instant\xE1neas&quot;. Si fuese necesario se usar\xEDa la palabra <code>volatile</code> para las variables a las que se quiera forzar ese comportamiento.</p><p>En la programaci\xF3n multihilo, y dentro de la sincronizaci\xF3n, un bloque protegido por un monitor nos garantiza que:</p><ul><li>Cuando un hilo entra en un bloque synchronized se actualizar\xE1 el valor de todas las variables visibles para el hilo.</li><li>Cuando un hilo salga de un bloque synchronized todos los cambios realizados por el hilo se actualizar\xE1n en la memoria principal.</li></ul><p>El comportamiento descrito es similar al que provoca el uso de la palabra reservado volatile, evitando el uso de caches y la desincronizaci\xF3n de la informaci\xF3n entre la CPU y la memoria principal.</p><p>El siguiente ejemplo muestra un monitor que implementa un contador:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class Contador { 
  // monitor contador
  private int actual; 
  public Contador(int inicial) 
  { 
    actual = inicial;    
  } 
  public synchronized void inc() { actual++; } 
  public synchronized void dec() { actual--; } 
  public synchronized int valor() { return actual;} 
} 
 
class Usuario extends Thread { 
  // clase hilo usuario
  private Contador cnt; 
  public Usuario(String nombre, Contador cnt) { 
    super(nombre); this.cnt = cnt;    
  } 
  public void run() { 
    for (int i = 0; i &lt; 1000; i++) { 
      cnt.inc();          
      System.out.println(&quot;Hola, soy &quot; + this.getName() + &quot;, mi contador vale &quot; + cnt.valor()); 
    }    
  }  
}

class EjemploContador { 
  // principal
  final static int nHebras = 20; 
  public static void main(String[] args) {
    // metodo principal      
    final Contador cont1 = new Contador(10);       
    Usuario hebra[] = new Usuario[nHebras]; 
    for (int i = 0; i &lt; nHebras; i++) {          
      //crea hebras
      hebra[i] = new Usuario(&quot;la hebra-&quot; + i, cont1); 
      // lanza hebras      
      hebra[i].start(); }    
    } 
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Es importante hacer notar, aunque suene a pesado, que todos los hilos acceden al c\xF3digo protegido del objeto cont1 que se crea en el m\xE9todo main. As\xED, no puede haber dos hilos ejecutando a la vez ninguna de los tres m\xE9todos de la instancia cont1 de la clase Contador.</p><p>::: danger Usar final con objetos de tipo monitor Un objeto usado como monitor, o como memoria compartida entre hilos, deber\xEDa ser de tipo <strong>final</strong>, porque si se le asigna un nuevo valor quedan si efecto todos los bloqueos que existan sobre dicho objeto. Un objeto de tipo final una vz que se ha creado y se le ha asignado un valor no se le puede asignar un nuevo valor. :::</p><h2 id="_3-2-3-sincronizacion-entre-hilos" tabindex="-1">3.2.3 Sincronizaci\xF3n entre hilos</h2><p>Ya hemos visto un tipo de problema en el que varios hilos comparten recursos y se sincroniza el acceso a estos recursos mediante el uso de monitores. Hasta ahora, una vez que un hilo obtiene el bloqueo de un monitor, puede hacer uso del mismo de forma indiscriminada, sin tener en cuenta ninguna otra condici\xF3n.</p><p>Ahora vamos a ver c\xF3mo, en funci\xF3n del estado de los recursos, cada uno de los hilos podr\xE1 realizar determinadas acciones o no, permitiendo que los hilos se queden a la espera de un cambio de estado que podr\xE1 ser notificado por otros hilos.</p><p>Para ello, adem\xE1s de un mecanismo de bloque sobre los recursos compartidos, ser\xE1 necesario un mecanismo de espera para que, en el caso de que el estado de los recursos compartidos no permita a un hilo realizar una acci\xF3n, la ejecuci\xF3n del hilo quede en suspenso a la espera de que esa condici\xF3n se cumpla.</p><p>El mecanismo es de <strong>espera no activa</strong>, es decir, no se debe consumir tiempo del procesador ni recursos del sistema para comprobar si es posible continuar con la ejecuci\xF3n, mientras no se reciba una notificaci\xF3n de que el estado ha cambiado y podr\xEDa permitir que el hilo contin\xFAe su ejecuci\xF3n.</p><p>Esto tambi\xE9n nos permitir\xE1, colateralmente, controlar el orden de ejecuci\xF3n de los hilos en funci\xF3n de la relaci\xF3n que se establezca entre ellos.</p><p>Para resolver este tipo de situaciones volvemos a utilizar m\xE9todos de la clase Object, accesibles para cualquier objeto.</p><ul><li><strong>wait()</strong>: interrumpe la ejecuci\xF3n del hilo actual. La ejecuci\xF3n del hilo queda bloqueada mientras otro hilo no ejecute el m\xE9todo notify(9 o notifyAll() sobre el objeto. Este m\xE9todo, por tanto, proporciona un mecanismo de espera no activa.</li><li><strong>notify()</strong>: desbloquea uno de los hilos que est\xE1n esperando sobre un objeto tras haber ejecutado el m\xE9todo wait()., de manera que pueda continuar su ejecuci\xF3n. Este m\xE9todo proporciona un mecanismo de notificaci\xF3n para terminar con la espera no activa de los hilos que est\xE1n a la espera de un objeto de bloqueo. <strong>El orden en que se desbloquean los hilos en un objeto de bloqueo vuelve a ser indeterminista</strong> y no tiene porqu\xE9 coincidir con el orden en que se bloquearon.</li><li><strong>notifyAll()</strong>: desbloquea todos los hilos que est\xE1n esperando sobre un objeto de bloqueo tras haber ejecutado el m\xE9todo wait(), de manera que puedan continuar su ejecuci\xF3n.</li></ul><p>wait , notify and notifyAll se utilizan para permitir a los hilos comunicarse entre ellos mediante un mecanismo de <em>signal&amp;continue</em>.</p><p>::: danger Contexto de ejecuci\xF3n de los m\xE9todos de sincronizaci\xF3n <strong>These methods need to be called from synchronized context</strong>, otherwise it will throw java.lang.IllegalMonitorStateException. :::</p><p>Cuando se llama al m\xE9todo <strong>wait()</strong>, el hilo estar\xE1 dentro de un bloque sincronizado, por lo tanto tendr\xE1 el bloqueo del monitor. En ese momento el hilo libera el bloqueo de <em>ese monitor</em> y se queda en una <strong>cola (perteneciente al objeto) de hilos en espera de ser notificados</strong>, diferente a la de los hilos que est\xE1n esperando por el bloqueo.</p><p>Cuando se desbloquea un hilo porque otro ha llamado a <strong>notify()/notifyAll()</strong>, el hilo vuelve al punto donde hizo el wait(), por lo tanto sigue dentro de un bloque sincronizado. Para poder continuar con la ejecuci\xF3n tendr\xE1 que pasar a la <strong>cola de hilos esperando por el bloqueo</strong> y esperar a ser seleccionado para seguir ejecut\xE1ndose.</p><p><img src="`+t+`" alt="Colas de un monitor"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>synchronized(objBloqueo)
{
  while(!condici\xF3nParaPoderSeguir) {
    try {
      // Espera que la condici\xF3n cambie y otro hilo avise
      objBloqueo.wait()
    } catch (InterruptedException e) {}
  }

  // Si el hilo ha llegado hasta aqu\xED, significa que o bien al principio
  // o bien tras haber realizado una o m\xE1s esperas y haber sido notificado
  // de cambios por parte de otros hilos, la condici\xF3n se ha cumplido

  // Adem\xE1s ha conseguido el bloqueo del monitor para poder continuar 
  // dentro del bloque synchronized
  realizar_operaci\xF3n;

  // Esta parte es opcional. La puede realizar este mismo hilo, en este 
  // mismo m\xE9todo, o bien la puede realizar otro hilo en otro m\xE9todo
  if(condici\xF3nParaQueOtrosSigan) {
    objetoBloqueo.notify(); // o notifyAll()
  }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo anterior, las condiciones suelen estar basadas en propiedades del propio objBloqueo, ya que de esta forma se mantiene un estado compartido por todos los hilos.</p><p>Veamos ahora otro ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// It is the common java class on which thread will act and call wait and notify method.
public class Book {
  String title;
  boolean isCompleted;

  public Book(String title) {
    super();
    this.title = title;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public boolean isCompleted() {
    return isCompleted;
  }
  public void setCompleted(boolean isCompleted) {
    this.isCompleted = isCompleted;
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// It will first take a lock on book object 
// Then, the thread will wait until other thread call notify method, then after it will complete its processing. 
// So in this example, it will wait for BookWriter to complete the book.
public class BookReader implements Runnable{
  Book book;

  public BookReader(Book book) {
    super();
    this.book = book;
  }

  @Override
  public void run() {
    synchronized (book) {
      System.out.println(Thread.currentThread().getName()+&quot; is waiting for the book to be completed: &quot;+book.getTitle());
      try {
        book.wait();
      } catch (InterruptedException e) {  
        e.printStackTrace();
      }
      System.out.println(Thread.currentThread().getName()+&quot;: Book has been completed now!! you can read it&quot;);
    }
  } 
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// This class will notify thread(in case of notify) which is waiting on book object. 
// It will not give away lock as soon as notify is called, it first complete its synchronized block. 
// So in this example, BookWriter will complete the book and notify it to BookReaders. 
public class BookWriter implements Runnable{
  Book book;
 
  public BookWriter(Book book) {
    super();
    this.book = book;
  }
 
  @Override
  public void run() {
    synchronized (book) {
      System.out.println(&quot;Author is Starting book : &quot; +book.getTitle() );
      try {
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
      book.setCompleted(true);
      System.out.println(&quot;Book has been completed now&quot;);
 
      book.notify();
      System.out.println(&quot;notify one reader&quot;);
    } 
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// This is our main class which will create object of above classes and run it.
public class ThreadInterCommunicationMain {

  public static void main(String args[])
  {
    // Book object on which wait and notify method will be called
    Book book=new Book(&quot;The Alchemist&quot;);
    BookReader johnReader=new BookReader(book);
    BookReader arpitReader=new BookReader(book);

    // BookReader threads which will wait for completion of book
    Thread johnThread=new Thread(johnReader,&quot;John&quot;);
    Thread arpitThread=new Thread(arpitReader,&quot;Arpit&quot;);

    arpitThread.start();
    johnThread.start();

    // To ensure both readers started waiting for the book
    try {
      Thread.sleep(3000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    // BookWriter thread which will notify once book get completed
    BookWriter bookWriter=new BookWriter(book);
    Thread bookWriterThread=new Thread(bookWriter);
    bookWriterThread.start();
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details Comentarios y preguntas sobre el c\xF3digo anterior Si ejecutamos el c\xF3digo anterior, tenemos que hacernos varias preguntas:</p><ul><li>\xBFCu\xE1ntos wait() se hacen? \xBFY cu\xE1ntos notify()?</li></ul><p>Se est\xE1n haciendo 2 wait(), 1 por cada hilo BookReader y s\xF3lo un notify(), as\xED que algo no cuadra.</p><p>Uno de los lectores se queda sin notificar, por lo tanto un hilo se queda esperando en un wait(). Como ese hilo no termina, el proceso tampoco. Hay que recordar que un proceso no termina hasta que lo hace el \xFAltimo de sus hilos. Esto en Netbeans implica que el programa no acaba y lo tenemos que parar.</p><p><strong>Soluci\xF3n</strong>: En este caso tenemos dos alternativas. La primera pasa por usar notifyAll() en vez de notify(). De esta forma los dos BookReader se activan y se quedan a la espera de poder tomar el bloqueo del monitor. Uno lo har\xE1 primero y el otro despu\xE9s, pero los dos acabar\xE1n leyendo el libro. La otra opci\xF3n es, siguiendo con notify(), que cada lector cuando acabe de leer el libro notifique a otros posibles lectores que haya en espera para que uno se despierte y lea el libro.</p><ul><li>En el main hemos hecho que primero empiecen los BookReaders y una vez que est\xE1n esperando el BookWriter escriba el libro y avise. \xBFQu\xE9 pasa si lo hacemos al rev\xE9s o si los lanzamos todos juntos y no sabemos en qu\xE9 orden se van a ejecutar?</li></ul><p>Si lanzamos primero el BookWriter, este acaba el libro y notifica a... nadie, porque los BookReaders todav\xEDa no estar\xE1n esperando. Despu\xE9s llegar\xE1n los BookReaders y se quedar\xE1n los dos colgados, ya que ning\xFAn otro hilo les notificar\xE1.</p><p><strong>Soluci\xF3n</strong>: Los hilos ahora mismo se est\xE1n bloqueando de manera indiscriminada, pero realmente deben bloquearse s\xF3lo si el libro que quieren leer no est\xE1 acabado. Por lo tanto tenemos que controlar con una condici\xF3n el bloqueo de los BookReader. Tal y como hemos comentado las condiciones las debe tener el objeto compartido, en este caso book, que lo comparten el BookWriter y los dos BookReader. La condici\xF3n que nos sirve para discriminar si un BookReader puede continuar o no es la propiedad isCompleted que consultamos a trav\xE9s del m\xE9todo book.isCompleted(),</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>try {
  if (!book.isCompleted())
    book.wait();
} catch (InterruptedException e) { 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Con esos dos cambios la aplicaci\xF3n deber\xEDa funcionar con cualquier n\xFAmero de BookReaders y de BookWriters, sin importar el orden ni la cantidad. :::</p><p>::: info \xBFnotify() o notifyAll()? Todo depender\xE1 del sistema que estemos programando, pero por norma general, si queremos que tras modificar el estado del sistema s\xF3lo contin\xFAe un hilo, llamaremos a notify().</p><p>Sino, deber\xEDa utilizarse notifyAll(). Si todo est\xE1 bien programado el hilo comprobar\xE1 si puede seguir y, en caso contrario, volver\xE1 a hacer un wait() y seguir esperando, por eso no supone un problema que que m\xE1s de un hilo se active.</p><p>El uso de notify() supone un mayor riesgo de que se produzcan bloqueos indefinidos de hilos a la espera de notificaciones que nunca van a llegar, siendo este bloqueo diferente de un interbloqueo o deadlock. Debemos ser muy cuidadosos con la programaci\xF3n de los mecanismos de sincronizaci\xF3n.</p><p>Hay que tener en cuenta tambi\xE9n que deber\xEDa haber al menos una llamada notify() por cada wait() que se haya realizado, aunque eso tampoco asegura que alg\xFAn hilo no se quede bloqueado. :::</p><p>::: question Modifica el ejemplo Sumador-Restador has las modificaciones necesarias en las clases del proyecto U3S3_SharedMemory (gu\xE1rdalo como U3S3_SharedMemory_v2) para que:</p><ul><li>El primer hilo que haga una operaci\xF3n sobre el contador sea un Sumador</li><li>Despu\xE9s de un Sumador siempre se ejecute un Restador y despu\xE9s de un Restador siempre se ejecute un Sumador, haciendo una secuencia Sumador-Restador-Sumador-Restador-... :::</li></ul><p>::: details U3S3_SharedMemory_v2</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Contador {

    private int c = 0;
    boolean ahoraSumador = true;

    public Contador(int c) {
        this.c = c;
        ahoraSumador = true;
    }

    public synchronized void incrementa() {
        while (!ahoraSumador) {
            try {
                wait();
            } catch (InterruptedException ex) {
            }
        }

        // El hilo hace su tarea
        c++;
        System.out.println(Thread.currentThread().getName() + &quot; &quot; +  valor());
        
        // Cambia el estado y avisa al resto de hilos por si alguno puede seguir
        ahoraSumador = false;
        notifyAll();

    }

    public synchronized void decrementa() {
        while (ahoraSumador) {
            try {
                wait();
            } catch (InterruptedException ex) { }
        }

        // El hilo hace su tarea
        c--;
        System.out.println(Thread.currentThread().getName() + &quot; &quot; +  valor());
        
        // Cambia el estado y avisa al resto de hilos por si alguno puede seguir
        ahoraSumador = true;
        notifyAll();
    }

    public int valor() {
        return c;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En la clase Contador hemos incorporado un estado, que controla qu\xE9 hilo es el que puede ejecutar y cu\xE1l el que tiene que esperar.</p><p>Adem\xE1s, como se comenta m\xE1s adelante, se ha movido la salida de los hilos a los m\xE9todos de esta clase.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Restador  implements Runnable {
    private Contador c;
    private String name;
    public Restador(String name, Contador c) {
        // super(name);
        this.name = name;
        this.c = c;
        
    }
    
    @Override
    public void run() {
        Thread.currentThread().setName(this.name);
        // Ejecutar 300 veces con espera entre 50ms y 150ms
        for (int i = 0; i &lt; 300; i++) {
            try {
                c.decrementa();
                Thread.sleep((long) (Math.random() * 100 + 50));
            } catch (InterruptedException ex) {
                // Nothing
            }            
        }        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tanto Restador como Sumador siguen siendo pr\xE1cticamente id\xE9nticos.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Sumador  extends Thread {
    private Contador c;
    public Sumador(String name, Contador c) {
        super(name);
        this.c = c;
        
    }
    
    @Override
    public void run() {
        // Ejecutar 300 veces con espera entre 50ms y 150ms
        for (int i = 0; i &lt; 300; i++) {
            try {
                c.incrementa();
                Thread.sleep((long) (Math.random() * 100 + 50));
            } catch (InterruptedException ex) {
                // Nothing
            }            
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La clase principal se mantiene igual.</p><p>::: danger Salida sincronizada Como se puede observar, la salida que en el ejemplo original se realizaba en el m\xE9todo run de Sumador y Restador, ahora se ha movido a la clase Contador, en concreto a los m\xE9todos <code>synchronized</code>.</p><p>Hay que tener cuidado con la salida por pantalla. Todos los threads est\xE1n usando System.out a la vez y los resultados que se muestran por pantalla, concretamente el orden en el que se muestran, no siempre es el mismo orden en el que se han producido. Por eso es importante que las salidas de los hilos se muevan dentro de los bloques sincronizados.</p><p>Si no controlamos la forma de mostrar la salida podemos encontrarnos con problemas que est\xE1n bien resueltos pero que la salida nos dice lo contrario. :::</p>`,107);function w(x,_){const l=s("DownloadPDF-component"),d=s("DocumentCover-component"),n=s("router-link");return v(),m("div",null,[i(l),i(d,{titulo:"3.2 Sincronizaci\xF3n y comunicaci\xF3n de hilos"}),h,e("nav",g,[e("ul",null,[e("li",null,[i(n,{to:"#_3-2-1-memoria-compartida"},{default:a(()=>[q]),_:1})]),e("li",null,[i(n,{to:"#_3-2-2-sincronizacion"},{default:a(()=>[j]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#monitores-y-bloqueos"},{default:a(()=>[y]),_:1})]),e("li",null,[i(n,{to:"#secciones-criticas"},{default:a(()=>[f]),_:1})]),e("li",null,[i(n,{to:"#sincronizacion-y-actualizacion-de-la-informacion"},{default:a(()=>[z]),_:1})])])]),e("li",null,[i(n,{to:"#_3-2-3-sincronizacion-entre-hilos"},{default:a(()=>[S]),_:1})])])]),k,b(`
\`\`\`puml
class Contador {
  - int c = 0
  + Contador(int c)
  +void incrementa()
  +void decrementa()
  + int valor()
}
class Sumador extends Thread {
  - Contador c
  + Sumador(String name, Contador c)
  + void run()

}
class Restador implements Runnable{
  - Contador c
  + Restador(String name, Contador c)
  + void run()

}
Restador o-- Contador
Sumador o-- Contador
\`\`\`
`),C])}const B=u(p,[["render",w],["__file","synchronization.html.vue"]]);export{B as default};
