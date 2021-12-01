"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[9102],{677:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n={key:"v-36533f4a",path:"/es/unit3/debugger_annex.html",title:"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans",lang:"es-ES",frontmatter:{title:"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans"},excerpt:"",headers:[],filePathRelative:"es/unit3/debugger_annex.md",git:{updatedTime:1635867742e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:1}]}}},4021:(e,a,o)=>{o.r(a),o.d(a,{default:()=>N});var n=o(6252),l=o(3026),s=o(7107),i=o(9965),r=o(1645),t=o(9990);const u=(0,n._)("h1",{id:"_3-5-anexo-i-debugging-aplicaciones-multihilo-en-netbeans",tabindex:"-1"},"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans",-1),d=(0,n._)("p",null,"Los entornos de desarrollo Java proporcionan las herramientas necesarias para la depuración (debugging) de aplicaciones multihilo.",-1),c=(0,n._)("p",null,"Al igual que en aplicaciones monohilo, podemos ubicar los breakpoints en el punto en el que nos interese detener la ejecución del programa, para de esta forma poder inspeccionar el estado de los objetos, los valores de las propiedades, etc.",-1),p=(0,n._)("p",null,[(0,n.Uk)("Para poder monitorizar los hilos de un programa, debemos activar la ventana de Debugging desde el menu "),(0,n._)("em",null,"Window > Debugging > Debugging (Alt+Shift +9)")],-1),m=(0,n._)("p",null,[(0,n._)("img",{src:l,alt:"Activar thread debug"})],-1),g=(0,n._)("p",null,"A partir de ese momento podremos ver la parte derecha las opciones de depuración de hilos junto con toda la información de los hilos que se están ejecutando en nuestra aplicación.",-1),b=(0,n._)("p",null,"Veamos el significado de lo que Netbeans nos muestra en esta caja de diálogo",-1),h=(0,n._)("p",null,[(0,n._)("img",{src:s,alt:"Diálogo depuración threads"})],-1),_=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Con una franja de color verde a la izquierda y resaltado también en color verde vemos lo que Netbeans denomina el "),(0,n._)("em",null,"current thread"),(0,n.Uk)(", es decir, el hilo que estamos depurando y sobre el que se aplicarán las acciones de depuración como Step Into, StepOver, Pause, Continue, etc. Además, podremos inspeccionar el valor de las variables para ese hilo en concreto.")]),(0,n._)("li",null,"Con una franja de color amarillo en la parte izquierda, y relacionado con el aviso de la parte inferior, vemos los hilos que están parados en algún breakpoint marcado por nosotros. Este color y los avisos están para que atendamos al hilo y podamos visualizar su estado o continuar con su ejecución."),(0,n._)("li",null,"En la parte derecha de cada hilo tenemos un acceso rápido a la función de Reanudar o Pausar cada uno de los threads activos.")],-1),q=(0,n._)("p",null,[(0,n._)("img",{src:i,alt:"Cambio de hilo"})],-1),f=(0,n._)("p",null,[(0,n.Uk)("Pulsando con el botón derecho sobre cualquiera de los hilos podemos convertirlo en el "),(0,n._)("em",null,"current thread"),(0,n.Uk)(". Así pasamos a controlar la ejecución e inspección de ese hilo mientras los demás siguen pausados o bien continuan su ejecución.")],-1),v=(0,n._)("p",null,[(0,n._)("img",{src:r,alt:"Estado de los hilos"})],-1),j=(0,n._)("p",null,"Además, la rueda dentada que está al lado del identificador de cada hilo nos dá información del estado del hilo.",-1),D=(0,n._)("ul",null,[(0,n._)("li",null,"Cuando la rueda está de color naranja indica que el hilo está suspendido en espera de nuestra atención."),(0,n._)("li",null,"Cuando la rueda está verde, indica que el hilo está en ejecución. Si ponemos el ratón encima podemos obtener información de su estado. Como se puede observar en la imagen, el hilo 2 está en ejecución aunque se encuentra en estado de espera. Es un hilo que está bloqueado en un join.")],-1),k=(0,n._)("p",null,[(0,n._)("img",{src:t,alt:"Estado de los hilos"})],-1),x=(0,n._)("p",null,"Por último, la depuración de hilos también nos ayuda a detectar cómo los hilos están sincronizándose con el uso de monitores. Podemos ver si un hilo tiene un monitor (bloqueo) bajo su control, y qué hilos están esperando a que se libere un bloqueo para poder continuar.",-1),C=(0,n._)("p",null,[(0,n.Uk)("Como herramienta adicional, Netbeans nos proporciona una utilidad ("),(0,n._)("em",null,"Debug > Check for deadlocks"),(0,n.Uk)(") que comprueba si hay hilos que estén en un interbloqueo, informándonos de los monitores que tienen bajo su control y de los monitores para los que están realizando alguna espera.")],-1),N={render:function(e,a){const o=(0,n.up)("DownloadPDF-component"),l=(0,n.up)("DocumentCover-component");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o),(0,n.Wm)(l,{titulo:"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans"}),u,d,c,p,m,g,b,h,_,q,f,v,j,D,k,x,C],64)}}},3026:(e,a,o)=>{e.exports=o.p+"assets/img/NetbeansDebug1.b25c5a40.jpg"},7107:(e,a,o)=>{e.exports=o.p+"assets/img/NetbeansDebug2.cfafbf4f.jpg"},9965:(e,a,o)=>{e.exports=o.p+"assets/img/NetbeansDebug3.fcf6b844.jpg"},1645:(e,a,o)=>{e.exports=o.p+"assets/img/NetbeansDebug4.262b9676.jpg"},9990:(e,a,o)=>{e.exports=o.p+"assets/img/NetbeansDebug5.ed5de54b.jpg"}}]);