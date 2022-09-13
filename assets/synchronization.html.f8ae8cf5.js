import{_ as l,a as c}from"./Monitor_queues.a0c5134f.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as h,c as u,d as i,a as e,w as s,e as m,f as r,r as t,b as a}from"./app.b80cbaa0.js";const b={},p=e("h1",{id:"_3-2-threads-synchronization-and-communication",tabindex:"-1"},"3.2 Threads synchronization and communication",-1),g={class:"table-of-contents"},y=a("3.2.1. Shared memory"),w=a("3.2.2. Synchronization"),f=a("Monitors and locks"),k=a("Secciones cr\xEDticas"),j=a("Synchronized and Data Visibility"),z=a("3.2.3 Inter-Thread synchronization"),T=r('<p>::: info Multithread Vocabulary</p><ul><li><strong>Race condition</strong>: A race condition occurs when two or more threads can access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap between threads at any time, you don&#39;t know the order in which the threads will attempt to access the shared data. Therefore, the result of the change in data is dependent on the thread scheduling algorithm, i.e. both threads are &quot;racing&quot; to access/change the data.</li><li><strong>Deadlock</strong>: Deadlock describes a situation where two or more threads are blocked forever, waiting for each other. Deadlock occurs when multiple threads need the same locks but obtain them in different order.</li><li><strong>Critical section</strong>: A critical section is a section of code that is executed by multiple threads and where the sequence of execution for the threads makes a difference in the result of the concurrent execution of the critical section. It needs to be executed without outside interference - i.e. without another thread potentially affecting/being affected by &quot;intermediate&quot; states within the section.</li><li><strong>Thread-safe</strong>: A class (or chunk of code) is thread-safe if it behaves correctly when accessed from multiple threads, regardless of the scheduling or interleaving of the execution of those threads by the runtime environment, and <strong>with no additional synchronization or other coordination on the part of the calling code</strong>.</li></ul><p>:::</p><h2 id="_3-2-1-shared-memory" tabindex="-1">3.2.1. Shared memory</h2><p>Usually threads need to communicate with each other. The most common way of communication is sharing a common object.</p><p>Let&#39;s code an example where two threads share the same Contador instance.</p><p><img src="'+l+'" alt="alt_text"></p>',7),x=r(`<p>To test the shared object, there must be just another class - containing the main method - to create the shared object (with init value of 100) and to launch the Sumador and Restador threads. In Sumador class we call the Contador.incrementa method in order to add 1 the Contador c property, and similarly Restador calls the decrementa method to substract one on Contador c property. Each thread will repeat the same action 300 times, waiting a random time between 50ms and 150ms. It is very relevant to use the same Contador object as parameter for Sumador and Restador, to make sure they are sharing the same Contador instance.</p><p>::: question Expected behaviour Write the four classes attending to the Class diagram. Make sure to have Sumador extending Thread and Restador implementing Runnable to test differences in how a thread is obtained from each approach.</p><p>What should happen after running the code?</p><p>Check what it really happens. Try to run the program many times. :::</p><p>:::details Code for the example</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U3S3_SharedMemory {
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
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we run the code, sometimes it will end by showing a final value of 100 for c, what it should be expected. But if you run the code many times you&#39;ll find that sometimes the value can be 99, 101 or any other value.</p><p>To avoid this synchronization problems (random problems really hard to detect), we need the threads to be synchronized. :::</p><p>if we check the above problem, we&#39;ll find that we are trying to run this code in parallel, from different threads, on the same object instance (shared instance):</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  public void incrementa() {
    c++;
  }
  public void decrementa() {
    c--;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we apply Bernstein conditions, we well get that any of the three conditions is met, so this code cannot be run concurrently, at least not without having concurrency problems.</p><p>So, we have to set a special configuration in our code in order to avoid this code to be run simultaneously.</p><h2 id="_3-2-2-synchronization" tabindex="-1">3.2.2. Synchronization</h2><p>As we have previously seen, threads communicate primarily by sharing access to objects and their properties. This form of communication is extremely efficient but makes two kinds of errors possible:</p><ul><li>thread interference</li><li>memory consistency errors.</li></ul><p>The tool needed to prevent these errors is synchronization.</p><p>When one thread is able to observe the effects of other threads and may be able to detect that variable accesses become visible to other threads in a different order than executed or specified in the program, we talk about reorderings, usually happening with incorrectly synchronized multithread programs. Most of the time, one thread doesn\u2019t care what the other is doing. But when it does, that\u2019s what synchronization is for.</p><h3 id="monitors-and-locks" tabindex="-1">Monitors and locks</h3><p>To synchronize threads, Java uses <code>monitors</code>, which are a high-level mechanism for allowing only one thread at a time to execute a region of code protected by the monitor. The behavior of monitors is explained in terms of locks; <strong>there is a lock associated with each object</strong>.</p><p>Synchronization has several aspects. The most well-understood is <code>mutual exclusion</code> \u2014 <strong>only one thread can hold a monitor at once</strong>, so synchronizing on a monitor means that once one thread enters a synchronized block protected by a monitor, no other thread can enter a block protected by that monitor until the first thread exits the synchronized block.</p><p>But there is more to synchronization than mutual exclusion. Synchronization ensures that memory writes by a thread before or during a synchronized block are made visible in a predictable manner to other threads that synchronize on the same monitor.</p><p>::: info Volatile-like behaviour After we exit a synchronized block, we release the monitor, which has the effect of flushing the cache to main memory, so that writes made by this thread can be visible to other threads. Before we can enter a synchronized block, we acquire the monitor, which has the effect of invalidating the local processor cache so that variables will be reloaded from the main memory. :::</p><h3 id="secciones-criticas" tabindex="-1">Secciones cr\xEDticas</h3><p>Synchronized blocks in Java are marked with the <code>synchronized</code> keyword. A synchronized block in Java is synchronized with some objects. All synchronized blocks synchronized on the same object can only have one thread executing inside them at the same time. All other threads attempting to enter the synchronized block are blocked until the thread inside the synchronized block exits the block.</p><p>The synchronized keyword can be used to mark four different types of blocks:</p><ul><li>Instance methods</li><li>Static methods</li><li>Code blocks inside instance methods</li><li>Code blocks inside static methods</li></ul><p>Here is a synchronized instance method:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Counter {
 private int count = 0;
 public synchronized void add(int value){
   this.count += value;
 }
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the use of the synchronized keyword in the add() method declaration. This tells Java that the method is synchronized.</p><p>A synchronized instance method in Java is synchronized on the instance (object) owning the method. Thus, each instance has its synchronized methods synchronized on a different object: the owning instance.</p><p>Only one thread per instance can execute inside a synchronized instance method. If more than one instance exists, then one thread at a time can execute inside a synchronized instance method per instance. One thread per instance.</p><p>This is true across all synchronized instance methods for the same object (instance). Thus, in the following example, only one thread can execute inside either of the two synchronized methods. One thread in total per instance:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Counter {
 private int count = 0;
 public synchronized void add(int value){
   this.count += value;
 }
 public synchronized void sub(int value){
   this.count -= value;
 }
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Synchronized with static methods Synchronized static methods are synchronized on the <strong>class object</strong> of the class the synchronized static method belongs to. Since <strong>only one class object exists in the Java VM per class</strong>, only one thread can execute inside a static synchronized method in the same class. :::</p><p>You do not have to synchronize a whole method. Sometimes it is preferable to synchronize only part of a method. Java synchronized blocks inside methods make this possible. Here is a synchronized block of Java code inside an unsynchronized Java method:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public void add(int value){
  synchronized(this){
    this.count += value;  
  }
 }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example uses the Java synchronized block construct to mark a block of code as synchronized. This code will now execute as if it was a synchronized method.</p><p>Notice how the Java synchronized block construct takes an object in parentheses. In the example \u201Cthis\u201D is used, which is the instance the add method is called on. The object taken in the parentheses by the synchronized construct is called a monitor object. The code is said to be synchronized on the monitor object. <strong>A synchronized instance method uses the object it belongs to as a monitor object</strong>.</p><p>Only one thread can execute inside a Java code block synchronized on the same monitor object.</p><p>The following two examples are both synchronized on the instance they are called on. <strong>They are therefore equivalent with respect to synchronization</strong>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MyClass { 
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
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thus only a single thread can execute inside either of the two synchronized blocks in this example.</p><p>::: warning What Objects to Synchronize On The synchronized block must be synchronized on some object. You can actually choose any object to synchronize on, but <strong>it is recommended that you do not synchronize on String objects, or any primitive type wrapper objects</strong> (Integer, Double, Boolean, ...).</p><p>To be on the safe side, synchronize on this - or on a new Object() . Those are not cached or reused internally by the Java compiler, Java VM, or Java libraries. :::</p><h3 id="synchronized-and-data-visibility" tabindex="-1">Synchronized and Data Visibility</h3><p>Without the use of the synchronized keyword (or the Java <code>volatile</code> keyword) there is no guarantee that when one thread changes the value of a variable shared with other threads (e.g. via an object all threads have access to), that the other threads can see the changed value. There are no guarantees about when a variable kept in a CPU register by one thread is &quot;committed&quot; to main memory, and there is no guarantee about when other threads &quot;refresh&quot; a variable kept in a CPU register from main memory.</p><p>The synchronized keyword changes that.</p><ul><li>When a thread enters a synchronized block it will refresh the values of all variables visible to the thread.</li><li>When a thread exits a synchronized block all changes to variables visible to the thread will be committed to the main memory.</li></ul><p>This is similar to how the volatile keyword works.</p><h2 id="_3-2-3-inter-thread-synchronization" tabindex="-1">3.2.3 Inter-Thread synchronization</h2><p>We can avoid several threads run the same code at the same time by using the <code>synchronized</code> keyword in order to get <code>mutual exclusion</code> in the form of <code>critical sections</code>. Sometimes it can be enough, but others we need the threads to keep certain order in their execution, probably related to other threads previous actions or results.</p><p>To do so, we need to use three new methods from the object class, directly related to synchronized.</p><ul><li><strong>wait()</strong>: When you call wait method on the object then it tell threads to <code>give up the lock</code> and go to sleep state unless and until some other thread enters in same monitor and calls notify or notifyAll methods on it.</li><li><strong>notify()</strong>: When you call notify method on the object, it <code>wakes one of thread waiting for that object</code>. So if multiple threads are waiting for an object, it will wake of one of them. Now you must be wondering which one it will wake up. It actually depends on OS implementation.</li><li><strong>notifyAll()</strong>: notifyAll will <code>wake up all threads waiting on that object</code> unlike notify which wakes up only one of them. Which one will wake up first depends on thread priority and OS implementation.</li></ul><p>wait , notify and notifyAll method are used to allow threads to communicate to each other via accessing common object. This common object can be considered a medium for <code>inter thread communication</code>via these methods. <strong>These methods need to be called from synchronized context</strong>,otherwise it will throw java.lang.IllegalMonitorStateException.</p><p>When <strong>wait()</strong> method is called, the thread is running inside the synchronized block so it will own the monitor (lock) for the object. That monitor is released by the thread and the thread is locked into another <strong>queue (from the lock object) of threads waiting to be notified</strong>, different than the queue of threads waiting for the object monitor (lock).</p><p>When a thread is unlocked because another thread has called <strong>notify()/notifyAll()</strong> on the same object, the thread goes back to the point where the wait was made, so the thread is still into a synchronized block. To keep on running, the thread goes back to the <strong>queue of threads waiting for the object monitor (lock)</strong> and it has to wait until it gets the lock to run the sentences after the wait().</p><p><img src="`+c+`" alt="Monitor queues"></p><p>Let&#39;s learn how these methods work by looking at the following example</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// It is the common java class on which thread will act and call wait and notify method.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// It will first take a lock on book object 
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// This is our main class which will create object of above classes and run it.
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There must be a notify call for every wait to ensure we have no deadlocks in our app.</p><p>::: question Does order matter? In the previous example, the Readers will wait for the Writer, assuming that the book isn&#39;t still finished.</p><p>What will happen to the above code if we change the order for the Readers and Writer in the main method? That is, first we make sure the Book is finished and then we call the Readers.</p><p>Try to modify the Sumador-Restador example to start always running one incrementa operation and just after it a decrementa one, having all operations ordered just one after another. So we will see Sumador-Restador-Sumador-Restador-... :::</p><p>::: details U3S3_SharedMemory_v2</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Contador {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Contador class a new state variable has been added to control the threads order, which one has to wait and which one can run its code.</p><p>Furthermore, output from the threads run method has been moved into the synchronized methods in this class.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Restador  implements Runnable {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Restador and Sumador have few changes.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Sumador  extends Thread {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Main class remains equal.</p><p>::: danger Synchronized output As you can see from the previous code, the output originally in the threads&#39; run methods now is into Contador class methods, more specifically into the <code>synchronized</code> methods.</p><p>Careful with console output. All threads are in a <code>race condition</code> to use the System.out stream. The concequence is that what we see on the console doesn&#39;t match the order in which the output has been sent to the stream. That&#39;s why is so important to move the console output into the synchronized methods, when possible.</p><p>If we don&#39;t control the console output we can have well coded and solved problems but in the console we will see wrong results. :::</p>`,80);function S(_,C){const d=t("DownloadPDF-component"),o=t("DocumentCover-component"),n=t("router-link");return h(),u("div",null,[i(d),i(o,{titulo:"3.2 Threads synchronization and communication"}),p,e("nav",g,[e("ul",null,[e("li",null,[i(n,{to:"#_3-2-1-shared-memory"},{default:s(()=>[y]),_:1})]),e("li",null,[i(n,{to:"#_3-2-2-synchronization"},{default:s(()=>[w]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#monitors-and-locks"},{default:s(()=>[f]),_:1})]),e("li",null,[i(n,{to:"#secciones-criticas"},{default:s(()=>[k]),_:1})]),e("li",null,[i(n,{to:"#synchronized-and-data-visibility"},{default:s(()=>[j]),_:1})])])]),e("li",null,[i(n,{to:"#_3-2-3-inter-thread-synchronization"},{default:s(()=>[z]),_:1})])])]),T,m(`
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
`),x])}const I=v(b,[["render",S],["__file","synchronization.html.vue"]]);export{I as default};
