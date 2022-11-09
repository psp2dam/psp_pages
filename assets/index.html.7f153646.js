import{_ as o,o as e,c as a,f as s}from"./app.423869e7.js";const i={},r=s('<h1 id="tema-3-programacion-multihilo" tabindex="-1">Tema 3. Programaci\xF3n multihilo</h1><p>Tras aprender los conceptos b\xE1sicos de la programaci\xF3n concurrente y ver c\xF3mo los procesos pueden colaborar para conseguir multitarea, en este tema vamos a poner la mirada dentro de un proceso.</p><p>La ejecuci\xF3n de un proceso comienza con un \xFAnico hilo, pero se pueden crear m\xE1s sobre la marcha. Los distintos hilos de un mismo proceso comparten:</p><ul><li>El espacio de memoria asignado al proceso</li><li>La informaci\xF3n de acceso a ficheros (incluyendo stdin, stdout y stderr).</li></ul><p>Las caracter\xEDsticas anteriores son las que los diferencias de los procesos. En cambio, cada hilo tiene sus propios valores para</p><ul><li>Los registros del procesador</li><li>El estado de su pila (stack), donde entre otras cosas se almacenan las variables locales.</li></ul><p>Por lo tanto, vamos a utilizar los threads para realizar programaci\xF3n concurrente y/o paralela dentro de un proceso.</p><p>Aunque los hilos se ejecutan en el contexto de un procesos, cada uno tiene su TCB (Tread Control Block) que es sensiblemente m\xE1s peque\xF1os que el PCB (Process Control Block) porque entre los hilos comparten gran parte de ese PCB. Por eso veremos que a los hilos tambi\xE9n se le llama <code>lightweight processes</code> (procesos ligeros) y por tanto los cambios de contexto en el procesador son mucho menos costosos para los hilos que para los procesos.</p><div class="custom-container warning"><p class="custom-container-title">Hilos: comunicaci\xF3n vs sincronizaci\xF3n</p><p>Por todo lo comentado, el intercambio de informaci\xF3n entre hilos es sencillo, dado que los distintos hilos de un mismo proceso comparten la memoria asignada al proceso.</p><p>Sin embargo, los hilos deben coordinarse para el acceso a los contenidos de la memoria y a los ficheros, lo cual hace que esa coordinaci\xF3n y sincronizaci\xF3n sea la parte complicada de uso.</p><p>De eso va este tema.</p></div><h2 id="objetivos" tabindex="-1">Objetivos</h2><p>Objetivos de esta unidad:</p><ul><li>Conocer las t\xE9cnicas b\xE1sicas para desarrollar aplicaciones multihilo en Java</li><li>Crear y lanzar varios hilos que compartan informaci\xF3n</li><li>Depurar aplicaciones multihilo</li><li>Usar los m\xE9todos de sincronizaci\xF3n para procesos y subprocesos</li><li>Compartir informaci\xF3n entre los hilos de un proceso</li><li>Aprender acerca de los problemas de acceso a memoria compartida</li><li>Usar diferentes t\xE9cnicas de programaci\xF3n para sincronizar la ejecuci\xF3n de los threads.</li></ul>',12),c=[r];function l(n,t){return e(),a("div",null,c)}const d=o(i,[["render",l],["__file","index.html.vue"]]);export{d as default};
