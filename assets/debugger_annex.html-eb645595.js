import{_ as s,a as i,b as r,c as l,d as t}from"./NetbeansDebug5-6a6c582c.js";import{_ as d,r as e,o as c,c as u,d as o,f as p}from"./app-f513d7ce.js";const m={},h=p('<h1 id="_3-5-anexo-i-debugging-aplicaciones-multihilo-en-netbeans" tabindex="-1">3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans</h1><p>Los entornos de desarrollo Java proporcionan las herramientas necesarias para la depuración (debugging) de aplicaciones multihilo.</p><p>Al igual que en aplicaciones monohilo, podemos ubicar los breakpoints en el punto en el que nos interese detener la ejecución del programa, para de esta forma poder inspeccionar el estado de los objetos, los valores de las propiedades, etc.</p><p>Para poder monitorizar los hilos de un programa, debemos activar la ventana de Debugging desde el menu <em>Window &gt; Debugging &gt; Debugging (Alt+Shift +9)</em></p><p><img src="'+s+'" alt="Activar thread debug"></p><p>A partir de ese momento podremos ver la parte derecha las opciones de depuración de hilos junto con toda la información de los hilos que se están ejecutando en nuestra aplicación.</p><p>Veamos el significado de lo que Netbeans nos muestra en esta caja de diálogo</p><p><img src="'+i+'" alt="Diálogo depuración threads"></p><ul><li>Con una franja de color verde a la izquierda y resaltado también en color verde vemos lo que Netbeans denomina el <em>current thread</em>, es decir, el hilo que estamos depurando y sobre el que se aplicarán las acciones de depuración como Step Into, StepOver, Pause, Continue, etc. Además, podremos inspeccionar el valor de las variables para ese hilo en concreto.</li><li>Con una franja de color amarillo en la parte izquierda, y relacionado con el aviso de la parte inferior, vemos los hilos que están parados en algún breakpoint marcado por nosotros. Este color y los avisos están para que atendamos al hilo y podamos visualizar su estado o continuar con su ejecución.</li><li>En la parte derecha de cada hilo tenemos un acceso rápido a la función de Reanudar o Pausar cada uno de los threads activos.</li></ul><p><img src="'+r+'" alt="Cambio de hilo"></p><p>Pulsando con el botón derecho sobre cualquiera de los hilos podemos convertirlo en el <em>current thread</em>. Así pasamos a controlar la ejecución e inspección de ese hilo mientras los demás siguen pausados o bien continuan su ejecución.</p><p><img src="'+l+'" alt="Estado de los hilos"></p><p>Además, la rueda dentada que está al lado del identificador de cada hilo nos dá información del estado del hilo.</p><ul><li>Cuando la rueda está de color naranja indica que el hilo está suspendido en espera de nuestra atención.</li><li>Cuando la rueda está verde, indica que el hilo está en ejecución. Si ponemos el ratón encima podemos obtener información de su estado. Como se puede observar en la imagen, el hilo 2 está en ejecución aunque se encuentra en estado de espera. Es un hilo que está bloqueado en un join.</li></ul><p><img src="'+t+'" alt="Estado de los hilos"></p><p>Por último, la depuración de hilos también nos ayuda a detectar cómo los hilos están sincronizándose con el uso de monitores. Podemos ver si un hilo tiene un monitor (bloqueo) bajo su control, y qué hilos están esperando a que se libere un bloqueo para poder continuar.</p><p>Como herramienta adicional, Netbeans nos proporciona una utilidad (<em>Debug &gt; Check for deadlocks</em>) que comprueba si hay hilos que estén en un interbloqueo, informándonos de los monitores que tienen bajo su control y de los monitores para los que están realizando alguna espera.</p>',17);function g(b,_){const a=e("DownloadPDF-component"),n=e("DocumentCover-component");return c(),u("div",null,[o(a),o(n,{titulo:"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans"}),h])}const f=d(m,[["render",g],["__file","debugger_annex.html.vue"]]);export{f as default};
