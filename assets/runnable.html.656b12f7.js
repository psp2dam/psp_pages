import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as m,d as t,a as e,w as n,f as s,r,b as i}from"./app.b80cbaa0.js";const v={},p=e("h1",{id:"_3-1-java-classes-for-threads",tabindex:"-1"},"3.1. Java classes for threads",-1),b={class:"table-of-contents"},g=i("3.1.1. Runnable Interface"),f=i("Java Class Implements Runnable"),y=i("Anonymous Implementation of Runnable"),T=i("Java Lambda Implementation of Runnable"),x=i("Calling the run method on a Runnable class"),w=i("3.1.2 Thread subclass"),R=i("3.1.3 Starting a Thread With a Runnable"),q=i("Subclass or Runnable?"),_=i("3.1.4 Thread class methods"),j=i("Pause a thread"),I=i("Threads priority management"),S=s(`<h2 id="_3-1-1-runnable-interface" tabindex="-1">3.1.1. Runnable Interface</h2><p>A Java Thread can execute your Java code inside your Java application.</p><p>When a Java application is started its main() method is executed by the main thread - a special thread that is created by the Java VM to run your application. From inside your application you can create and start more threads which can execute parts of your application code in parallel with the main thread.</p><p>Java threads are objects like any other Java objects. Threads are instances of class java.lang.Thread, or instances of subclasses of this class. In addition to being objects, java threads can also execute code.</p><p>The first way to specify what code a thread should run is by creating a class that implements the <code>java.lang.Runnable</code> interface.</p><p>The Runnable interface is a standard Java Interface that comes with the Java platform. The Runnable interface only has a single method run().</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runnable.html" target="_blank" rel="noopener noreferrer">java.lang.Runnable specification</a></p></blockquote><p>Whatever the thread is supposed to do when it executes must be included in the implementation of the run() method. There are three ways to implement the Runnable interface:</p><ul><li>Create a Java class that implements the Runnable interface.</li><li>Create an anonymous class that implements the Runnable interface.</li><li>Create a Java Lambda that implements the Runnable interface.</li></ul><p>All three options are explained in the following sections.</p><h3 id="java-class-implements-runnable" tabindex="-1">Java Class Implements Runnable</h3><p>The first way to implement the Java Runnable interface is by creating your own Java class that implements the Runnable interface. Here is an example of a custom Java class that implements the Runnable interface:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MyRunnable implements Runnable {

  public void run(){
      System.out.println(&quot;MyRunnable running&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All this Runnable implementation does is to print out the text MyRunnable running. After printing that text, the run() method exits, and the thread running the run() method will stop.</p><h3 id="anonymous-implementation-of-runnable" tabindex="-1">Anonymous Implementation of Runnable</h3><p>You can also create an anonymous implementation of Runnable. Here is an example of an anonymous Java class that implements the Runnable interface:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Runnable myRunnable =
    new Runnable(){
        public void run(){
            System.out.println(&quot;Runnable running&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Apart from being an anonymous class, this example is quite similar to the example that used a custom class to implement the Runnable interface.</p><h3 id="java-lambda-implementation-of-runnable" tabindex="-1">Java Lambda Implementation of Runnable</h3><p>The third way to implement the Runnable interface is by creating a Java Lambda implementation of the Runnable interface. This is possible because the Runnable interface only has a single unimplemented method, and is therefore practically (although possibly unintentionally) a functional Java interface.</p><p>Here is an example of a Java lambda expression that implements the Runnable interface:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Runnable runnable =
        () -&gt; { System.out.println(&quot;Lambda Runnable running&quot;); };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="calling-the-run-method-on-a-runnable-class" tabindex="-1">Calling the run method on a Runnable class</h3><p>Look at this sample code of Runnable implementation</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class LiftOff implements Runnable {
    private int countDown = 10;
    private static int taskCount = 0;
    private final int id = taskCount;
    
    public LiftOff() {}
    
    public LiftOff(int countDown) {
        this.countDown = countDown;
    }
    
    @Override
    public void run() {
        while (countDown &gt; 0) {
            System.out.println(&quot;#&quot; + id + &quot; (&quot; + countDown + &quot;)&quot; );
            countDown--;
        }
        System.out.println(&quot;LiftOff (&quot; + id + &quot;)&quot;);
    }
    
    public static void main(String[] args) {
        LiftOff launch = new LiftOff();
        launch.run();
        System.out.println(&quot;Waiting for LiftOff!&quot;);
    }    
}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question What&#39;s wrong with previous execution Is the &quot;Waiting for LiftOff!&quot; placed in the right place?</p><p>Try to create more instances of LiftOff and run them all?</p><p>Is the application doing something different to a single threaded application? What can you notice from the program output? :::</p><h2 id="_3-1-2-thread-subclass" tabindex="-1">3.1.2 Thread subclass</h2><p>The second way to specify what code a thread is to run, is to create a subclass of <code>java.lang.Thread</code> and override the run() method. The run() method is what is executed by the thread after you call <code>start()</code>.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Thread.html" target="_blank" rel="noopener noreferrer">java.lang.Thread specification</a></p></blockquote><p>Here is an example of creating a Java Thread subclass:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MyThread extends Thread {
  public void run(){
      System.out.println(&quot;MyThread running&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To create and start the above thread you can do like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>MyThread myThread = new MyThread();
myTread.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The start() call will return as soon as the thread is started. It will not wait until the run() method is done. The run() method will execute as if executed by a different CPU. When the run() method executes it will print out the text &quot;MyThread running&quot;.</p><p>You can also create an anonymous subclass of Thread like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Thread thread = new Thread(){
  public void run(){
    System.out.println(&quot;Thread Running&quot;);
  }
}

thread.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example will print out the text &quot;Thread running&quot; once the run() method is executed by the new thread.</p><p>::: question LiftOff example Copy the original LiftOff example and now make it extends Thread class.</p><p>Is the &quot;Waiting for LiftOff!&quot; placed in the right place? Is it working as it&#39;s supposed to?</p><p>Try to create more instances of LiftOff and run them all is the application doing something different to a single threaded application? What can you notice from the program output? :::</p><h2 id="_3-1-3-starting-a-thread-with-a-runnable" tabindex="-1">3.1.3 Starting a Thread With a Runnable</h2><p>To have the run() method executed by a thread, pass an instance of a class, anonymous class or lambda expression that implements the Runnable interface to a Thread in its constructor. Here is how that is done:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Runnable runnable = new MyRunnable(); // or an anonymous class, or lambda...

Thread thread = new Thread(runnable);
thread.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the thread is started it will call the run() method of the MyRunnable instance (see previous examples) instead of executing it&#39;s own run() method. The above example would print out the text &quot;MyRunnable running&quot;.</p><p>::: info Hence, there are two ways to specify what code the thread should execute.</p><ul><li>The first is to create a subclass of Thread and override the run() method.</li><li>The second method is to pass an object that implements Runnable to the Thread constructor. :::</li></ul>`,48),k=e("div",{class:"language-java ext-java line-numbers-mode"},[e("pre",{class:"language-java"},[e("code",null,`public class EjemploThread extends Thread {
  public void run() {
    // C\xF3digo del hilo
  }

  public static void main(String[] args) {
    EjemploThread hilo = new EjemploThread();
    hilo.start();
  }
}
`)]),e("div",{class:"highlight-lines"},[e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),M=e("div",{class:"language-java ext-java line-numbers-mode"},[e("pre",{class:"language-java"},[e("code",null,`public class EjemploRunnable implements Runnable {
  public void run() {
    // C\xF3digo del hilo
  }

  public static void main(String[] args) {
    Thread hilo = new Thread(new EjemploRunnable());
    hilo.start();
  }    
}
`)]),e("div",{class:"highlight-lines"},[e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=s(`<h3 id="subclass-or-runnable" tabindex="-1">Subclass or Runnable?</h3><p>There are no rules about which of the two methods is the best. Both methods works. <strong>The preferred method is implementing Runnable</strong>, and handing an instance of the implementation to a Thread instance.</p><p>A few reasons against extending Thread</p><ul><li>When extending the Thread class, we&#39;re not overriding any of its methods. Instead, we override the method of Runnable (which Thread happens to implement). This is a clear violation of IS-A Thread principle.</li><li>Creating an implementation of Runnable and passing it to the Thread class utilizes composition and not inheritance \u2013 which is more flexible</li><li>After extending the Thread class, we can&#39;t extend any other class From Java 8 onwards, Runnables can be represented as lambda expressions</li></ul><p>::: danger Common Pitfall: Calling run() Instead of start() When creating and starting a thread a common mistake is to call the run() method of the Thread instead of start(), like this:</p><blockquote><p>Thread newThread = new Thread(MyRunnable()); newThread.run(); //should be start();</p></blockquote><p>or</p><blockquote><p>MyRunnable runnable = new MyRunnable(); runnable.run();</p></blockquote><p>At first you may not notice anything because the Runnable&#39;s run() method is executed like you expected. However, it is <strong>NOT executed by the new thread</strong> you just created. Instead the run() method is executed by the thread that created the thread. In other words, the thread that executed the above two lines of code. To have the run() method of the MyRunnable instance called by the new created thread, newThread, <strong>you MUST call the newThread.start() method</strong>. :::</p><h2 id="_3-1-4-thread-class-methods" tabindex="-1">3.1.4 Thread class methods</h2><p>If we take a look at the Thread class definition, we will find many methods. We must be careful because some of those methods like stop(), suspend(), resume() and destroy() are <code>deprecated</code>.</p><p>Next we can see the most commonly used methods of Thread class:</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">start()</td><td style="text-align:left;">Makes a thread execute the code in the run method()</td></tr><tr><td style="text-align:left;">boolean isAlive()</td><td style="text-align:left;">Checks if the thread is alive or not</td></tr><tr><td style="text-align:left;">sleep(long ms)</td><td style="text-align:left;">Changes the thread state to blocked for the ms specified</td></tr><tr><td style="text-align:left;">run()</td><td style="text-align:left;">Is the thread code to be run. It is called by the start method. It represents the lifecycle of a thread.</td></tr><tr><td style="text-align:left;">String toString()</td><td style="text-align:left;">Returns a readable representation a thread [threadName, priority, threadGroupName]</td></tr><tr><td style="text-align:left;">long getId()</td><td style="text-align:left;">Returns the thread id</td></tr><tr><td style="text-align:left;">void yield()</td><td style="text-align:left;">Makes the thread stop running at the moment going back to the queue and allowing other threads to be executed.</td></tr><tr><td style="text-align:left;">void join()</td><td style="text-align:left;">Called from another thread, waits for this thread to die</td></tr><tr><td style="text-align:left;">String getName()</td><td style="text-align:left;">Gets the thread name</td></tr><tr><td style="text-align:left;">String setName(String name)</td><td style="text-align:left;">Sets a name for the thread</td></tr><tr><td style="text-align:left;">int getPriority()</td><td style="text-align:left;">Gets the thread priority</td></tr><tr><td style="text-align:left;">setPriority(int p)</td><td style="text-align:left;">Sets the thread priority</td></tr><tr><td style="text-align:left;">void interrupt()</td><td style="text-align:left;">Interrupts the thread executions causing a InterruptedException</td></tr><tr><td style="text-align:left;">boolean interrupted()</td><td style="text-align:left;">Checks if a thread has been interrupted</td></tr><tr><td style="text-align:left;">Thread.currentThread()</td><td style="text-align:left;">STATIC method returns a reference to the thread that is running this code</td></tr><tr><td style="text-align:left;">boolean isDaemon()</td><td style="text-align:left;">Checks if thread is a daemon. A low-level process running independently from its process. A process can finish while a daemon thread is still running</td></tr><tr><td style="text-align:left;">setDaemon(boolean on)</td><td style="text-align:left;">Makes a thread turn into a daemon. By default all threads are user-threads when they are created.</td></tr><tr><td style="text-align:left;">int activeCount()</td><td style="text-align:left;">Returns the number of active threads in the thread group where the thread belongs to.</td></tr><tr><td style="text-align:left;">Thread.State getState()</td><td style="text-align:left;">Returns the thread state, one of NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING or TERMINATED.</td></tr></tbody></table><p>Thread also has up to 9 constructors, most of them getting a Runnable object as parameter along with the thread name and the tread group.</p><table><thead><tr><th style="text-align:left;">Thread constructors</th></tr></thead><tbody><tr><td style="text-align:left;">Thread()</td></tr><tr><td style="text-align:left;">Thread\u200B(Runnable target)</td></tr><tr><td style="text-align:left;">Thread\u200B(String name)</td></tr><tr><td style="text-align:left;">Thread\u200B(Runnable target, String name)</td></tr><tr><td style="text-align:left;">Thread\u200B(ThreadGroup group, Runnable target)</td></tr><tr><td style="text-align:left;">Thread\u200B(ThreadGroup group, String name)</td></tr><tr><td style="text-align:left;">Thread\u200B(ThreadGroup group, Runnable target, String name)</td></tr><tr><td style="text-align:left;">Thread\u200B(ThreadGroup group, Runnable target, String name, long stackSize)</td></tr><tr><td style="text-align:left;">Thread\u200B(ThreadGroup group, Runnable target, String name, long stackSize, boolean inheritThreadLocals)</td></tr></tbody></table><p>Here we can see an example of some of these methods in use</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ThreadMethodsExample extends Thread {
    
    ThreadMethodsExample (ThreadGroup group, String name) {
        // Call to parent class constructor with group and thread name
        super(group, name);
    }
    
    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        System.out.println(&quot;[&quot;+threadName+&quot;] &quot; + &quot;Inside the thread&quot;);
        System.out.println(&quot;[&quot;+threadName+&quot;] &quot; + &quot;Priority: &quot; 
          + Thread.currentThread().getPriority());
        Thread.yield();
        System.out.println(&quot;[&quot;+threadName+&quot;] &quot; + &quot;Id: &quot; 
          + Thread.currentThread().getId());
        System.out.println(&quot;[&quot;+threadName+&quot;] &quot; + &quot;ThreadGroup: &quot; 
          + Thread.currentThread().getThreadGroup().getName());
        System.out.println(&quot;[&quot;+threadName+&quot;] &quot; + &quot;ThreadGroup count: &quot; 
          + Thread.currentThread().getThreadGroup().activeCount());
    } 
    
    public static void main(String[] args) {
        // main thread 
        Thread.currentThread().setName(&quot;Main&quot;);
        System.out.println(Thread.currentThread().getName());
        System.out.println(Thread.currentThread().toString());
        
        ThreadGroup even = new ThreadGroup(&quot;Even threads&quot;);
        ThreadGroup odd = new ThreadGroup(&quot;Odd threads&quot;);
        
        Thread localThread = null;
        for (int i=0; i&lt;10; i++) {
            localThread = new ThreadMethodsExample((i%2==0)?even:odd, &quot;Thread&quot;+i);
            localThread.setPriority(i+1);
            localThread.start();
        }
              
        try {
            localThread.join(); // --&gt; Will wait until last thread ends 
                                // like a waitFor() for processes
        } catch (InterruptedException ex) {
            ex.printStackTrace();
            System.err.println(&quot;The main thread was interrupted while waiting for &quot; 
              + localThread.toString() + &quot;to finish&quot;);
        }
        System.out.println(&quot;Main thread ending&quot;);
    }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see in the code above, the static method Thread.currentThread() should be called in order to get the instance of the current thread running each statement, as there are many threads running the same code at the same time.</p><p>In the previous example we have used just one class for the new threads and for the main thread. And that&#39;s not the usual way to run threads. It&#39;s a better practice to split the code in separate classes.</p><p>Also note that the Thread (or Runnable) class can have it&#39;s own constructor to set its local properties or call the superclass constructors.</p><p>:::question Split the code in two classes Copy the code from the ThreadMethodsExample and split in in two classes. One containing the thread class and the other just having the main method and the calls to create and launch the processes.</p><p>Next, change the ThreadMethodsExample to implement the Runnable interface and make the appropriate changes in the other class to make it work again. :::</p><p>Pay attention to that even if the threads are started in sequence (1, 2, 3 etc.) they may not execute sequentially, meaning thread 1 may not be the first thread to write its name to System.out. This is because the threads are in principle executing in parallel and not sequentially. The JVM and/or operating system determines the order in which the threads are executed. This order does not have to be the same order in which they were started nor each time the are run.</p><h3 id="pause-a-thread" tabindex="-1">Pause a thread</h3><p>A thread can pause itself by calling the static method <strong>Thread.sleep()</strong>. The sleep() takes a number of milliseconds as parameter. The sleep() method will attempt to sleep that number of milliseconds before resuming execution. The Thread sleep() is not 100% precise, but it is pretty good still. Here is an example of pausing a Java thread for 3 seconds (3.000 milliseconds) by calling the Thread sleep() method:</p><div class="language-java ext-java"><pre class="language-java"><code>try {
    Thread.sleep(3000L);
} catch (InterruptedException e) {
    e.printStackTrace();
}
</code></pre></div><p>::: info Real systems simulation This method is going to be used in activities to simulate time lapses and speed up the real systems simulation. For instance, we can set that each <em>real</em> hour is just a second in the simulation, so one day will be reduced to 24 seconds.</p><p>Also it&#39;s interesting when we need to set random time lapses for each thread, in order to get a realistic simulation of events in the real system. :::</p><p>Random numbers within a specific range of type integer, float, double, long, and boolean can be generated in Java.</p><p>There are three methods to generate random numbers in Java.</p><h4 id="method-1-using-random-class" tabindex="-1">Method 1: Using random class</h4><p>We can use the <code>java.util.Random</code> class to generate random numbers, following the steps below:</p><ul><li>Import the class java.util.Random</li><li>Make the instance of the class Random, i.e., Random rand = new Random()</li><li>Invoke one of the following methods of rand object: <ul><li>nextInt(upperbound) generates random numbers in the range 0 to upperbound-1.</li><li>nextFloat() generates a float between 0.0 and 1.0.</li><li>nextDouble() generates a double between 0.0 and 1.0.</li></ul></li></ul><p>if we use the netxInt invocation with the bound parameter, we&#39;ll get numbers within a range</p><blockquote><p>int randomWintNextIntWithinARange = random.nextInt(max)</p></blockquote><p>This will give us a number between <em>0 (inclusive)</em> and <em>max</em> (exclusive). The bound parameter must be greater than 0. Otherwise, we&#39;ll get a java.lang.IllegalArgumentException.</p><h4 id="method-2-using-math-random" tabindex="-1">Method 2: Using Math.random</h4><p>For generating random numbers within a range using Math.random(), follow the steps below:</p><ul><li>Declare the minimum value of the range</li><li>Declare the maximum value of the range</li><li>Use the formula Math.random()*(max-min)+min to generate values with the min and the max value inclusive.</li></ul><p>The value returned by Math.random() is in the range 0 to 1 inclusive.</p><p>To generate a random value between 0 and an upper limit (50)</p><blockquote><p>Math.random()*50</p></blockquote><p>To generate a random value between 1 and an upper limit (50)</p><blockquote><p>Math.random()*49+1</p></blockquote><p>To generate a random bounded value, let&#39;s say between 200 and 500</p><blockquote><p>Math.random()*300+200</p></blockquote><h4 id="method-3-use-threadlocalrandom" tabindex="-1">Method 3: Use ThreadLocalRandom</h4><p>The <code>java.util.Random</code> class doesn&#39;t perform well in a multi-threaded environment.</p><p>In a simplified way, the reason for the poor performance of Random in a multi-threaded environment is due to contention \u2013 given that multiple threads share the same Random instance.</p><p>To address that limitation, Java introduced the <code>java.util.concurrent.ThreadLocalRandom</code> for generating random numbers in a multi-threaded environment.</p><p>We just need to call <code>ThreadLocalRandom.current()</code> method, and it will return the instance of ThreadLocalRandom for the current thread. We can then generate random values by invoking available instance methods of the class.</p><p>To generate a random int value without any bounds:</p><blockquote><p>int unboundedRandomValue = ThreadLocalRandom.current().nextInt());</p></blockquote><p>To generate a random bounded int value, meaning a value between a given lower and upper limit.</p><blockquote><p>int boundedRandomValue = ThreadLocalRandom.current().nextInt(0, 100);</p></blockquote><p>Please note, 0 is the inclusive lower limit and 100 is the exclusive upper limit.</p><p>We can generate random values for long and double by invoking <code>nextLong()</code> and <code>nextDouble()</code> methods in a similar way as shown in the examples above.</p><h3 id="threads-priority-management" tabindex="-1">Threads priority management</h3><p>In Java, a thread&#39;s priority is an integer in the range 1 to 10. <em>The larger the integer, the higher the priority</em>. The thread scheduler uses this integer from each thread to determine which one should be allowed to execute. The Thread class defines three types of priorities:</p><ul><li>Minimum priority</li><li>Normal priority</li><li>Maximum priority</li></ul><p>The Thread class defines these priority types as constants <code>MIN_PRIORITY</code>, <code>NORM_PRIORITY</code>, and <code>MAX_PRIORITY</code>, with values 1, 5, and 10, respectively. <strong>NORM_PRIORITY is the default priority for a new Thread</strong>.</p><p>Java&#39;s Thread class provides methods for checking the thread\u2019s priority and for modifying it.</p><p>The <code>getPriority()</code> instance method returns the integer that represents its priority.</p><p>The <code>setPriority()</code> instance method takes an integer between 1 and 10 for changing the thread&#39;s priority. If we pass a value outside the 1-10 range, the method will throw an error.</p><p>When we create a Thread, it inherits its default priority. When multiple threads are ready to execute, the JVM selects and executes the Runnable thread that has the highest priority. If this thread stops or becomes not runnable, the lower-priority threads will execute. In case two threads have the same priority, the JVM will execute them in FIFO order.</p><p>There are two scenarios that can cause a different thread to run:</p><ul><li>A thread with higher priority than the current thread becomes runnable</li><li>The current thread exits the runnable state or yields (temporarily pause and allow other threads)</li></ul><p>In general, at any time, the highest priority thread is running. But sometimes, the thread scheduler might choose low-priority threads for execution to avoid starvation.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class U3S3_HiloPrioridad1 extends Thread {
  private int c = 0;
  private boolean stopHilo = false;
  public int getContador () {
    return c;
  }
  public void pararHilo() {
    stopHilo = true;
  }
  public void run() {
    while (!stopHilo) c++;
  }
}

public class U3S3_EjemploHiloPrioridad1 {
  public static void main(String args[]) {
    U3S3_HiloPrioridad1 h1 = new U3S3_HiloPrioridad1();
    U3S3_HiloPrioridad1 h2 = new U3S3_HiloPrioridad1();
    U3S3_HiloPrioridad1 h3 = new U3S3_HiloPrioridad1();

    h1.setPriority(Thread.NOR_PRIORITY);
    h2.setPriority(Thread.MAX_PRIORITY);
    h3.setPriority(Thread.MIN_PRIORITY);

    h1.start();
    h2.start();
    h3.start();

    try {
      Thread.sleep(10000);
    } catch (exception e) {}

    h1.pararHilo();
    h2.pararHilo();
    h3.pararHilo();

    System.out.println(&quot;h2 (Prio. M\xE1x: &quot;+h2.getContador());
    System.out.println(&quot;h1 (Prio. Nomral: &quot;+h1.getContador());
    System.out.println(&quot;h3 (Prio. M\xEDnima: &quot;+h3.getContador());
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69);function P(J,N){const d=r("DownloadPDF-component"),o=r("DocumentCover-component"),a=r("router-link"),l=r("CodeGroupItem"),u=r("CodeGroup");return c(),m("div",null,[t(d),t(o,{titulo:"3.1. Java classes for threads"}),p,e("nav",b,[e("ul",null,[e("li",null,[t(a,{to:"#_3-1-1-runnable-interface"},{default:n(()=>[g]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#java-class-implements-runnable"},{default:n(()=>[f]),_:1})]),e("li",null,[t(a,{to:"#anonymous-implementation-of-runnable"},{default:n(()=>[y]),_:1})]),e("li",null,[t(a,{to:"#java-lambda-implementation-of-runnable"},{default:n(()=>[T]),_:1})]),e("li",null,[t(a,{to:"#calling-the-run-method-on-a-runnable-class"},{default:n(()=>[x]),_:1})])])]),e("li",null,[t(a,{to:"#_3-1-2-thread-subclass"},{default:n(()=>[w]),_:1})]),e("li",null,[t(a,{to:"#_3-1-3-starting-a-thread-with-a-runnable"},{default:n(()=>[R]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#subclass-or-runnable"},{default:n(()=>[q]),_:1})])])]),e("li",null,[t(a,{to:"#_3-1-4-thread-class-methods"},{default:n(()=>[_]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#pause-a-thread"},{default:n(()=>[j]),_:1})]),e("li",null,[t(a,{to:"#threads-priority-management"},{default:n(()=>[I]),_:1})])])])])]),S,t(u,null,{default:n(()=>[t(l,{title:"Extends Thread",active:""},{default:n(()=>[k]),_:1}),t(l,{title:"Runnable"},{default:n(()=>[M]),_:1})]),_:1}),C])}const A=h(v,[["render",P],["__file","runnable.html.vue"]]);export{A as default};