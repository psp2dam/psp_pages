import{_ as e,o,c as a,f as s}from"./app.9db055eb.js";const i={},n=s('<h1 id="tema-4-programacion-en-red" tabindex="-1">Tema 4. Programaci\xF3n en red</h1><p>Hasta ahora hemos visto como varias aplicaciones pueden colaborar entre s\xED para realizar una tarea de forma conjunta (<code>multiproceso</code>) o bien c\xF3mo un mismo programa puede dividir una tarea en partes que se ejecuten de forma concurrente y simult\xE1nea (<code>multihilo</code>). Todo esto ocurre dentro de una m\xE1quina, bien sea en <strong>monoprocesador</strong> o <strong>multiprocesador</strong>, controlados por un mismo SO y compartiendo habitualmente parte de la memoria y de la E/S.</p><p>En este tema vamos a ir un paso m\xE1s all\xE1, vamos a crear aplicaciones que funcionen en entornos distribuidos. Volvemos a tener m\xFAltiples procesos en ejecuci\xF3n, pero a diferencia de lo que vimos en el tema 2, en el que los procesos ten\xEDan una relaci\xF3n padre-hijo (lanzador-lanzado), ahora los procesos se van a ejecutar en sistemas independientes y se comunicar\xE1n a trav\xE9s de la red usando <code>protocolos de comunicaci\xF3n</code>.</p><p>Podemos encontrar b\xE1sicamente dos modelos de sistemas distribuidos:</p><ul><li><strong>Cliente / Servidor</strong>: un proceso, denominado <code>servidor</code>, ofrece servicios a uno o m\xE1s procesos, denominados <code>clientes</code>.</li><li><strong>Entre iguales (P2P)</strong>: todos los procesos colaboran de forma similar y con un mismo fin, no existiendo una especializaci\xF3n ni diferenciaci\xF3n entre ellos..</li></ul><div class="custom-container warning"><p class="custom-container-title">Procesos e Hilos</p><p>Para realizar un programa distribuido en el que se pueda realizar una conexi\xF3n y una comunicaci\xF3n a trav\xE9s de una red de ordenadores no partimos de cero.</p><p>La programaci\xF3n en red est\xE1 fuertemente ligada a la programaci\xF3n multiproceso. Principalmente en la forma de comunicaci\xF3n que ya vimos entre procesos.</p><p>Por otro lado, la especializaci\xF3n y el servicio que ofrece un servidor, de forma simult\xE1nea a varios clientes, est\xE1 basada en la divisi\xF3n del trabajo en hilos.</p><p>Por todo lo comentado, todos los conceptos y conocimientos adquiridos hasta ahora nos sirven de base para avanzar en los contenidos de este tema.</p></div><h2 id="objetivos" tabindex="-1">Objetivos</h2><p>Objetivos de esta unidad:</p><ul><li>Conocer el protocolo TCP/IP, las direcciones usadas en cada capa y y los protocolos asociados.</li><li>Conocer las clases que permiten trabajar con direcciones y nombres de servidores.</li><li>Aprender las caracter\xEDsticas b\xE1sicas de los protocolos TCP y UDP.</li><li>Desarrollar aplicaciones b\xE1sicas que se comuniquen usando el protocolo TCP.</li><li>Desarrollar aplicaciones b\xE1sicas que se comuniquen usando el protocolo UDP.</li><li>Dise\xF1ar y programar protocolos para la comunicaci\xF3n entre aplicaciones distribuidas.</li><li>Coordinar la ejecuci\xF3n de m\xFAltiples clientes en servidores multihilo.</li></ul>',9),r=[n];function c(l,t){return o(),a("div",null,r)}const m=e(i,[["render",c],["__file","index.html.vue"]]);export{m as default};