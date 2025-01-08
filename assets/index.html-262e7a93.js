import{_ as e,o,c as a,f as r}from"./app-92b2a0d8.js";const s={},t=r('<h1 id="unit-3-multithread-programming" tabindex="-1">Unit 3. Multithread programming</h1><p>After leaning the basics of concurrent programming and learn how processes can be used to do multitasking, in this unit we are going to look into a single process.</p><p>We are gonna make use of threads and the eay they are programmed to do concurrent task into a process.</p><p>key differences between processes and threads are:</p><ul><li>Threads share process memory space</li><li>Threads share file descriptors</li><li>Threads share program code.</li></ul><p>As they run into the context of a process, the TCB (Tread Control Block) is smaller than the PCB (Process Control Block) because they share part of PCB. That&#39;s why sometimes threads are so called <code>lightweight processes</code>.</p><p>All previous features simplify threads communication, thus coordination and synchronization becomes harder to program and manage.</p><h2 id="goals" tabindex="-1">Goals</h2><p>The goals for this unit are:</p><ul><li>To know thread characteristics in Java</li><li>To Learn how to create and manage threads</li><li>To debug multithread applications</li><li>To use synchronization methods for processes and sub-processes</li><li>To share information between threads on a process</li><li>To learn about shared memory problems</li><li>To use different programming approaches to synchronize threads execution</li></ul>',10),i=[t];function n(l,c){return o(),a("div",null,i)}const d=e(s,[["render",n],["__file","index.html.vue"]]);export{d as default};
