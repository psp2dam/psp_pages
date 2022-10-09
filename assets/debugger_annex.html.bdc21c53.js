import{_ as i,a as o,b as s,c as r,d as h}from"./NetbeansDebug5.890d9d49.js";import{_ as d,r as e,o as c,c as g,d as t,f as p}from"./app.312fbffd.js";const l={},u=p('<h1 id="_3-5-annex-i-debugging-multithread-apps-in-netbeans" tabindex="-1">3.5 Annex I - Debugging multithread apps in Netbeans</h1><p>Modern IDE provide the user with facilities to debug multithread apps.</p><p>Just like in monothread apps, we can use breakpoints to stop a thread execution to inspect object state, properties values, etc.</p><p>If we want to use the Debugging window in NetBeans IDE to debug multi-threaded applications we have to activate it by setting it from menu <em>Window &gt; Debugging &gt; Debugging (Alt+Shift +9)</em></p><p><img src="'+i+'" alt="Activate thread debug"></p><p>The Debugging window simplifies the debugging process by integrating into one window the information about debugging sessions, application threads and thread call stacks. The Debugging window enables you to easily see the status of application threads and suspend and resume any of the threads in the session.</p><p><img src="'+o+'" alt="Debugging dialogue"></p><ul><li>The <em>current thread</em> is indicated by a green bar in the margin (it is also highlighted in green). The current thread is the one we can work on by using StepInto, StepOver, Pause, Continue actions from the debugger. We can also access the variables inspection on that thread.</li><li>Threads that invoked the notification, by hitting a breakpoint, are indicated by a yellow bar and the thread icon (orange color) indicates that the thread is suspended by a breakpoint.</li><li>In the right side we have a quick access to Resume/Pause each active thread.</li></ul><p><img src="'+s+'" alt="Thread change"></p><p>Clicking with the right mouse button over any thread we can make it the <em>current thread</em>. This way we get control over it and we can inspect this thread while other are paused or keep on running.</p><p><img src="'+r+'" alt="Estado de los hilos"></p><p>Furthermore, the cogwheel next to each thread identifier is giving us many information about a thread state.</p><ul><li>When the cogwheel is orange that means the thread is suspended and it requires our attention.</li><li>When the cogwheel is green that means the thread is running. If we move the mouse over the thread we can get a tip showing the thread state information. As you can observe in the image thread-2 is running but it is in a waiting state. Actually this thread is locked in a join (waiting for another thread to finish)</li></ul><p><img src="'+h+'" alt="Thread monitors"></p><p>Finally, thread debugging helps us with synchronization using monitors. We can know when a thread owns a monitor (lock) and we can also know which monitors (locks) a thread is waiting for.</p><p>As an additional tool Netbeans provides an utility (Debug &gt; Check for deadlocks) that checks if any deadlock has happened, telling the monitors owned by each thread and the monitors each thread is waiting for.</p>',16);function m(b,w){const n=e("DownloadPDF-component"),a=e("DocumentCover-component");return c(),g("div",null,[t(n),t(a,{titulo:"3.5 Annex I - Debugging multithread apps in Netbeans"}),u])}const k=d(l,[["render",m],["__file","debugger_annex.html.vue"]]);export{k as default};
