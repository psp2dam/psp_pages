import{_ as o,o as e,c as a,f as s}from"./app-ac3cd0ad.js";const i={},r=s('<h1 id="tema-3-programacion-multihilo" tabindex="-1">Tema 3. Programación multihilo</h1><p>Tras aprender los conceptos básicos de la programación concurrente y ver cómo los procesos pueden colaborar para conseguir multitarea, en este tema vamos a poner la mirada dentro de un proceso.</p><p>La ejecución de un proceso comienza con un único hilo, pero se pueden crear más sobre la marcha. Los distintos hilos de un mismo proceso comparten:</p><ul><li>El espacio de memoria asignado al proceso</li><li>La información de acceso a ficheros (incluyendo stdin, stdout y stderr).</li></ul><p>Las características anteriores son las que los diferencias de los procesos. En cambio, cada hilo tiene sus propios valores para</p><ul><li>Los registros del procesador</li><li>El estado de su pila (stack), donde entre otras cosas se almacenan las variables locales.</li></ul><p>Por lo tanto, vamos a utilizar los threads para realizar programación concurrente y/o paralela dentro de un proceso.</p><p>Aunque los hilos se ejecutan en el contexto de un procesos, cada uno tiene su TCB (Tread Control Block) que es sensiblemente más pequeños que el PCB (Process Control Block) porque entre los hilos comparten gran parte de ese PCB. Por eso veremos que a los hilos también se le llama <code>lightweight processes</code> (procesos ligeros) y por tanto los cambios de contexto en el procesador son mucho menos costosos para los hilos que para los procesos.</p><div class="custom-container warning"><p class="custom-container-title">Hilos: comunicación vs sincronización</p><p>Por todo lo comentado, el intercambio de información entre hilos es sencillo, dado que los distintos hilos de un mismo proceso comparten la memoria asignada al proceso.</p><p>Sin embargo, los hilos deben coordinarse para el acceso a los contenidos de la memoria y a los ficheros, lo cual hace que esa coordinación y sincronización sea la parte complicada de uso.</p><p>De eso va este tema.</p></div><h2 id="objetivos" tabindex="-1">Objetivos</h2><p>Objetivos de esta unidad:</p><ul><li>Conocer las técnicas básicas para desarrollar aplicaciones multihilo en Java</li><li>Crear y lanzar varios hilos que compartan información</li><li>Depurar aplicaciones multihilo</li><li>Usar los métodos de sincronización para procesos y subprocesos</li><li>Compartir información entre los hilos de un proceso</li><li>Aprender acerca de los problemas de acceso a memoria compartida</li><li>Usar diferentes técnicas de programación para sincronizar la ejecución de los threads.</li></ul>',12),c=[r];function l(n,t){return e(),a("div",null,c)}const d=o(i,[["render",l],["__file","index.html.vue"]]);export{d as default};
