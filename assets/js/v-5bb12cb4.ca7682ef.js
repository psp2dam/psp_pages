"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[408],{8082:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-5bb12cb4",path:"/en/unit3/alternatives.html",title:"3.4 Alternative synchronization techniques",lang:"en-US",frontmatter:{title:"3.4 Alternative synchronization techniques"},excerpt:"",headers:[{level:2,title:"3.4.1. Semaphores",slug:"_3-4-1-semaphores",children:[]},{level:2,title:"3.4.2. High level synchronization techniques",slug:"_3-4-2-high-level-synchronization-techniques",children:[{level:3,title:"Concurrent Queues",slug:"concurrent-queues",children:[]},{level:3,title:"Concurrent Collections",slug:"concurrent-collections",children:[]},{level:3,title:"Atomic variables",slug:"atomic-variables",children:[]}]},{level:2,title:"3.4.3 Executors, Callables & Future",slug:"_3-4-3-executors-callables-future",children:[]}],filePathRelative:"en/unit3/alternatives.md",git:{updatedTime:1635867742e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:1}]}}},1770:(s,n,a)=>{a.r(n),a.d(n,{default:()=>x});var e=a(6252);const l=(0,e._)("h1",{id:"_3-4-alternative-synchronization-techniques",tabindex:"-1"},"3.4 Alternative synchronization techniques",-1),o={class:"table-of-contents"},p=(0,e.Uk)("3.4.1. Semaphores"),t=(0,e.Uk)("3.4.2. High level synchronization techniques"),r=(0,e.Uk)("Concurrent Queues"),c=(0,e.Uk)("Concurrent Collections"),i=(0,e.Uk)("Atomic variables"),A=(0,e.Uk)("3.4.3 Executors, Callables & Future"),y=(0,e._)("h2",{id:"_3-4-1-semaphores",tabindex:"-1"},"3.4.1. Semaphores",-1),u=(0,e._)("p",null,[(0,e.Uk)("There are many other ways to synchronize threads, one of the low-level ones ar "),(0,e._)("code",null,"semaphores"),(0,e.Uk)(". A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, then access is allowed. If it is zero, then access is denied. What the counter is counting are permits that allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore.")],-1),h={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Semaphore.html",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("java.util.concurrent.Semaphore"),d=(0,e.Uk)(" specification."),b=(0,e.uE)('<p>Semaphores control access to <code>critical sections</code> where shared resources or variables are handled in a special way. Depending on thi initial value of the semaphore, a number of concurrent threads can access simultaneously to a shared resource.</p><p>Semaphores can be manages with two methods and their initial value <code>permits</code>:</p><ul><li>release(): When thread no longer needs access to a shared resource, it releases the permit, incrementing the semaphore count. By default the semaphore counter <code>permits</code> is incremented by 1, though it can get a value and increment the count in that value.</li><li>acquire(): If a thread needs to access a shared resource or critical section, then it must get control over the semaphore. If semaphore count &gt; 0, the thread acquires a permit, decrementing the semaphore’s count. Else, the thread is blocked until a permit can be acquired. Other value than 1 can be used to get the semaphore, having <code>permits</code> to be bigger than that value in order to get semaphore&#39;s control</li><li>permits: The value of a counting semaphore at any point indicates the maximum number of processes that can enter the critical section at the exact same time. Each thread asks for a permit. if value is bigger than 0 that means free resources are available, so the thread will enter the semaphore and reduce the permit count When the semaphore&#39;s permit count reaches to 0 that means no more shared resources are available and threads will be locked waiting for another thread to perform a release action on the semaphore.</li></ul><div class="custom-container info"><p class="custom-container-title">Mutex</p><p>Binary semaphore: A binary semaphore only takes only 0 and 1 as values and is used to implement mutual exclusion as well as synchronize concurrent processes.</p><p>The work similar to synchronized, providing <strong>mut</strong>ual <strong>ex</strong>clusion.</p></div><p>Let&#39;s take a look at this example</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Almacen</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">final</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> MAX_LIMITE </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">20</span><span style="color:#39ADB5;">;</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> productor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">MAX_LIMITE</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> consumidor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> mutex </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">producir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreProductor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando almacenar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// up to 20 producers can enter at the same time</span></span>\n<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// But only 1 (consumer/producer) at a time can update</span></span>\n<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">++;</span></span>\n<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> almacena un producto. </span><span style="color:#39ADB5;">&quot;</span></span>\n<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almacén con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Producers allow (notify) consumers to access</span></span>\n<span class="line"><span style="color:#90A4AE;">      consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">consumir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreConsumidor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando retirar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// A producer must be run first, before any consumer</span></span>\n<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// But only 1 (consumer/producer) at a time can update</span></span>\n<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">--;</span></span>\n<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> retira un producto. </span><span style="color:#39ADB5;">&quot;</span></span>\n<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almacén con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Consumers allow (notify) producers to add more products</span></span>\n<span class="line"><span style="color:#90A4AE;">      productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="_3-4-2-high-level-synchronization-techniques" tabindex="-1">3.4.2. High level synchronization techniques</h2><p>The <code>java.util.concurrent</code> package provides tools for creating concurrent applications. There are some <code>thread-safe</code> classes que to use Collections and basic data types without worrying about concurrent access.</p><p>Using these classes in our code we can reduce out apps complexity.</p><h3 id="concurrent-queues" tabindex="-1">Concurrent Queues</h3><p>The <strong>BlockingQueue</strong> interface defines a <code>FIFO</code> queue that locks threads trying to get elementos from an empty queue until there will be elements in the queue. it can set a maximum number of elements in the queue so that thread are blocked if they try to add elements over that number, having to wait until elements are extracted form the queue.</p><p>Classes LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue and DelayQueue implement interface BlockingQueue.</p><h3 id="concurrent-collections" tabindex="-1">Concurrent Collections</h3><p>Besides Queues, this package supplies Collection implementations designed for use in multithreaded contexts: ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArrayList, and CopyOnWriteArraySet. When many threads are expected to access a given collection, a ConcurrentHashMap is normally preferable to a synchronized HashMap, and a ConcurrentSkipListMap is normally preferable to a synchronized TreeMap. A CopyOnWriteArrayList is preferable to a synchronized ArrayList when the expected number of reads and traversals greatly outnumber the number of updates to a list.</p><p><strong>ConcurrentMap</strong> is a subinterface of <code>java.util.Map</code> con with atomic operations to add / replace existing key,value pairs or to add non existing key,value pairs. ConcurrentHashMap is the thread-safe version for HashMap.</p><h3 id="atomic-variables" tabindex="-1">Atomic variables</h3><p>Package <code>java.util.concurrent.atomic</code> contains a small toolkit of classes that support lock-free thread-safe programming on single variables. Instances of Atomic classes maintain values that are accessed and updated using methods otherwise available for fields using associated atomic VarHandle operations.</p><p>Instances of classes AtomicBoolean, AtomicInteger, AtomicLong, and AtomicReference each provide access and updates to a single variable of the corresponding type. Each class also provides appropriate utility methods for that type. For example, classes AtomicLong and AtomicInteger provide atomic increment methods.</p><h2 id="_3-4-3-executors-callables-future" tabindex="-1">3.4.3 Executors, Callables &amp; Future</h2><p>Executors is an interface to manage thread pools. Thread pools manage a pool of worker threads. The thread pools contain a work queue which holds tasks waiting to get executed.</p><p>A thread pool can be described as a collection of Runnable/Callable objects (work queue) and a connection of running threads.</p><p>These threads are constantly running and are checking the work query for new work. If there is new work to be done they execute this Runnable/Callable.</p><p>Here you can check an illustrative example on how to use Executors</p>',23),B={href:"https://jarroba.com/multitarea-e-hilos-en-java-con-ejemplos-ii-runnable-executors/",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Uk)("Executors: Ejemplo supermercado"),E=(0,e._)("p",null,"We have used a Runnable object to define the tasks that are executed inside a thread. While defining tasks using Runnable is very convenient, it is limited by the fact that the tasks can not return a result.",-1),g=(0,e._)("p",null,"What if you want to return a result from your tasks?",-1),f=(0,e._)("p",null,[(0,e.Uk)("Well, Java provides a "),(0,e._)("code",null,"Callable"),(0,e.Uk)(" interface to define tasks that return a result. A Callable is similar to Runnable except that it can return a result and throw a checked exception.")],-1),v=(0,e._)("p",null,"Callable interface has a single method call() which is meant to contain the code that is executed by a thread.",-1),k=(0,e._)("p",null,[(0,e._)("code",null,"Future"),(0,e.Uk)(" interface has methods to obtain the result generated by a Callable object and manage its state. It represents the result of an asynchronous computation.")],-1),C=(0,e._)("p",null,"The result can only be retrieved using method get() when the computation has completed, blocking if necessary until it is ready.",-1),x={render:function(s,n){const a=(0,e.up)("DownloadPDF-component"),x=(0,e.up)("DocumentCover-component"),q=(0,e.up)("RouterLink"),w=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(a),(0,e.Wm)(x,{titulo:"3.4 Alternative synchronization techniques"}),l,(0,e._)("nav",o,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(q,{to:"#_3-4-1-semaphores"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#_3-4-2-high-level-synchronization-techniques"},{default:(0,e.w5)((()=>[t])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(q,{to:"#concurrent-queues"},{default:(0,e.w5)((()=>[r])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#concurrent-collections"},{default:(0,e.w5)((()=>[c])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#atomic-variables"},{default:(0,e.w5)((()=>[i])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#_3-4-3-executors-callables-future"},{default:(0,e.w5)((()=>[A])),_:1})])])]),y,u,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("a",h,[m,(0,e.Wm)(w)]),d])]),b,(0,e._)("p",null,[(0,e._)("a",B,[D,(0,e.Wm)(w)])]),E,g,f,v,k,C],64)}}}}]);