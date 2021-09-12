"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[906],{631:(e,s,n)=>{n.r(s),n.d(s,{data:()=>o});const o={key:"v-75292dd8",path:"/es/unit1/process.html",title:"1.1 Procesos, programas, hilos",lang:"es-ES",frontmatter:{title:"1.1 Procesos, programas, hilos"},excerpt:"",headers:[{level:2,title:"1.1.1. Procesos y programas",slug:"_1-1-1-procesos-y-programas",children:[]},{level:2,title:"1.1.2. Programación concurrente",slug:"_1-1-2-programacion-concurrente",children:[{level:3,title:"¿Para qué?",slug:"¿para-que",children:[]},{level:3,title:"Comunicación y sincronización entre procesos",slug:"comunicacion-y-sincronizacion-entre-procesos",children:[]}]},{level:2,title:"1.1.3. Servicios e hilos",slug:"_1-1-3-servicios-e-hilos",children:[{level:3,title:"Programa secuencial (Arquitectura Von Newmann)",slug:"programa-secuencial-arquitectura-von-newmann",children:[]},{level:3,title:"Programa concurrente",slug:"programa-concurrente",children:[]},{level:3,title:"Hilos vs procesos",slug:"hilos-vs-procesos",children:[]}]}],filePathRelative:"es/unit1/process.md",git:{updatedTime:1629986222e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:1}]}}},3140:(e,s,n)=>{n.r(s),n.d(s,{default:()=>Be});var o=n(6252),l=n(5100),a=n(852),r=n(9544),c=n(6338),i=n(8984);const t=(0,o._)("h1",{id:"_1-1-procesos-programas-hilos",tabindex:"-1"},"1.1. Procesos, Programas, hilos",-1),u={class:"table-of-contents"},p=(0,o.Uk)("1.1.1. Procesos y programas"),d=(0,o.Uk)("1.1.2. Programación concurrente"),_=(0,o.Uk)("¿Para qué?"),m=(0,o.Uk)("Comunicación y sincronización entre procesos"),y=(0,o.Uk)("1.1.3. Servicios e hilos"),A=(0,o.Uk)("Programa secuencial (Arquitectura Von Newmann)"),b=(0,o.Uk)("Programa concurrente"),g=(0,o.Uk)("Hilos vs procesos"),h=(0,o._)("h2",{id:"_1-1-1-procesos-y-programas",tabindex:"-1"},"1.1.1. Procesos y programas",-1),v=(0,o._)("p",null,[(0,o.Uk)("Un "),(0,o._)("code",null,"programa"),(0,o.Uk)(" no es más que un conjunto de instrucciones u órdenes que le indican a un dispositivo qué acciones debe realizar con los datos recibidos.")],-1),E=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"Caja negra"),(0,o._)("p",null,"Según la visión de un sistema como caja negra, un programa le indica al sistema cómo obtener unos datos de salida a partir de unos datos de entrada.")],-1),f=(0,o._)("p",null,[(0,o.Uk)("Sin embargo, un "),(0,o._)("code",null,"proceso"),(0,o.Uk)(" es un programa en ejecución. Esto es, un proceso es una entidad activa y un programa es una entidad pasiva.")],-1),k=(0,o._)("p",null,[(0,o.Uk)("El proceso, por tanto, está representado por el contador del programa, el valor de los registros, la pila, el "),(0,o._)("em",null,"código ejecutable"),(0,o.Uk)(", su estado, ... todo lo necesario para la ejecución del programa por parte del SO.")],-1),D=(0,o._)("p",null,[(0,o._)("img",{src:l,alt:"Proceso en memoria"})],-1),U=(0,o._)("p",null,"Cada proceso es una entidad independiente. Cuando un programa se ejecuta, el sistema operativo crea un proceso. Si ese mismo programa se vuelve a ejecutar, se crearía un proceso distinto, teniendo en memoria dos instancias del mismo programa. Pero es importante recalcar que los dos procesos son independientes.",-1),q=(0,o._)("h2",{id:"_1-1-2-programacion-concurrente",tabindex:"-1"},"1.1.2. Programación concurrente",-1),B=(0,o._)("p",null,"Podemos decir que dos procesos son concurrentes cuando la primera instrucción de uno de los procesos se ejecuta después de la primera y antes de la última de otro proceso.",-1),j=(0,o._)("p",null,[(0,o.Uk)("La planificación alternando los instantes de ejecución, "),(0,o._)("code",null,"multitarea"),(0,o.Uk)(", hace que los procesos se ejecuten de forma concurrente. También la disponibilidad de varias unidades de proceso, "),(0,o._)("code",null,"multiproceso"),(0,o.Uk)(", permite la ejecución simultánea o paralela de procesos en el sistema.")],-1),x=(0,o._)("p",null,[(0,o._)("img",{src:a,alt:"Concurrencia vs paralelismo"})],-1),C=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"Concurrencia"),(0,o._)("p",null,[(0,o.Uk)("A los dos escenarios descritos anteriormente es a lo que vamos a denominar, de forma general, "),(0,o._)("strong",null,"concurrencia"),(0,o.Uk)(".")])],-1),P=(0,o._)("h3",{id:"¿para-que",tabindex:"-1"},"¿Para qué?",-1),S=(0,o._)("p",null,"Las principales razones por las que se utiliza una estructura concurrente son:",-1),w=(0,o._)("ul",null,[(0,o._)("li",null,"Optimizar la utilización de los recursos: Podremos simultanear las operaciones de E/S en los procesos. La CPU estará menos tiempo ociosa."),(0,o._)("li",null,"Proporcionar interactividad a los usuarios (y animación gráfica)."),(0,o._)("li",null,"Mejorar la disponibilidad: Servidor que no realice tareas de forma concurrente, no podrá atender peticiones de clientes simultáneamente."),(0,o._)("li",null,"Conseguir un diseño conceptualmente más comprensible y mantenible: El diseño concurrente de un programa nos llevará a una mayor modularidad y claridad."),(0,o._)("li",null,"Aumentar la protección: Tener cada tarea aislada en un proceso permitirá depurar la seguridad de cada proceso y poder finalizarlo en caso de mal funcionamiento sin que suponga la caída del sistema.")],-1),z=(0,o._)("p",null,"Además, los actuales avances tecnológicos hacen necesario tener en cuenta la concurrencia en el diseño de las aplicaciones para aprovechar su potencial. Los nuevos entornos hardware son:",-1),L=(0,o._)("ul",null,[(0,o._)("li",null,"Microprocesadores con múltiples núcleos que comparten la memoria principal del sistema."),(0,o._)("li",null,"Entornos multiprocesador con memoria compartida."),(0,o._)("li",null,"Entornos distribuidos y servicios cloud.")],-1),W=(0,o._)("h3",{id:"comunicacion-y-sincronizacion-entre-procesos",tabindex:"-1"},"Comunicación y sincronización entre procesos",-1),F=(0,o._)("p",null,"Cuando varios procesos se ejecutan concurrentemente puede haber procesos que colaboren para un determinado fin mientras que puede haber otros que compitan por los recursos del sistema.",-1),T=(0,o._)("p",null,"En ambos casos se hace necesaria la introducción de mecanismos de comunicación y sincronización entre procesos.",-1),M=(0,o._)("div",{class:"custom-container info"},[(0,o._)("p",{class:"custom-container-title"},"Programación concurrente"),(0,o._)("p",null,[(0,o.Uk)("Precisamente del estudio de esos "),(0,o._)("strong",null,"mecanismos de sincronización y comunicación"),(0,o.Uk)(" trata la programación concurrente y este módulo de PSP.")])],-1),H=(0,o._)("p",null,"Si pensamos en la forma en la que un proceso puede comunicarse con otro, se nos plantean estas dos:",-1),N=(0,o._)("ul",null,[(0,o._)("li",null,"Intercambio de mensajes: Es la forma que se utiliza habitualmente cuando los procesos se encuentran en máquinas diferentes. Los procesos intercambian información siguiendo un protocolo previamente establecido."),(0,o._)("li",null,"Recursos (o memoria) compartidos: Sólo se puede utilizar cuando los dos procesos se encuentran en la misma máquina y permite la sincronización de los procesos en función del valor o estado de un recurso compartido.")],-1),R=(0,o._)("p",null,"También podemos ver el tipo de comunicación en función de la sincronía que mantengan los procesos durante la comunicación:",-1),V=(0,o._)("ul",null,[(0,o._)("li",null,"Síncrona: El emisor queda bloqueado hasta que el receptor recibe el mensaje. Ambos se sincronizan en el momento de la recepción del mensaje."),(0,o._)("li",null,"Asíncrona: El emisor continúa con su ejecución inmediatamente después de emitir el mensaje, sin quedar bloqueado.")],-1),O=(0,o._)("h2",{id:"_1-1-3-servicios-e-hilos",tabindex:"-1"},"1.1.3. Servicios e hilos",-1),I=(0,o._)("p",null,"Un programa, como ya hemos dicho, se compone de un conjunto de sentencias (operaciones y verificaciones) y un flujo de ejecución. La línea de flujo de control establece, de acuerdo con la estructura del propio programa y de los datos que maneja, el orden en que deben ejecutarse las sentencias.",-1),Q=(0,o._)("p",null,"Atendiendo al número de líneas de flujo de control que tiene un programa, los procesos pueden ser:",-1),J=(0,o._)("ul",null,[(0,o._)("li",null,"Secuenciales: Poseen un único flujo de control (monohilo)"),(0,o._)("li",null,"Concurrentes: Poseen varios hilos de ejecución (multihilo).")],-1),Y=(0,o._)("h3",{id:"programa-secuencial-arquitectura-von-newmann",tabindex:"-1"},"Programa secuencial (Arquitectura Von Newmann)",-1),G=(0,o._)("p",null,"Cuando empezamos a programar, usamos el estilo de programación clásico, en el que se sigue el modelo conceptual de Von Newmann",-1),K=(0,o._)("p",null,"Los programas secuenciales presentan una línea simple de control de flujo. Las operaciones de este tipo de programas están estrictamente ordenados como una secuencia temporal lineal.",-1),X=(0,o._)("p",null,"El comportamiento del programa es solo función de la naturaleza de las operaciones individuales que constituye el programa y del orden en que se ejecutan (determinado por el conjunto de entradas que recibe).",-1),Z=(0,o._)("p",null,"En los programas secuenciales, el tiempo que tarda cada operación en ejecutarse no tiene consecuencias sobre el resultado.",-1),$=(0,o._)("p",null,[(0,o._)("img",{src:r,alt:"Sequential flowchat example"})],-1),ee=(0,o._)("p",null,[(0,o.Uk)("La comprobación del correcto funcionamiento ("),(0,o._)("code",null,"verificación"),(0,o.Uk)(" o "),(0,o._)("code",null,"depuración"),(0,o.Uk)(") de un programa secuencial es sencilla:")],-1),se=(0,o._)("ul",null,[(0,o._)("li",null,"Cada sentencia produce la respuesta correcta."),(0,o._)("li",null,"Las sentencias se ejecutan en el orden esperado.")],-1),ne=(0,o._)("p",null,[(0,o.Uk)("De aquí surgen algunos de los métodos básicos de pruebas de sistemas, como el de "),(0,o._)("em",null,"caja blanca"),(0,o.Uk)(".")],-1),oe=(0,o._)("h3",{id:"programa-concurrente",tabindex:"-1"},"Programa concurrente",-1),le=(0,o._)("p",null,"En los programas concurrentes existen múltiples líneas de control de flujo. Las sentencias que constituyen el programa no se ejecutan siguiendo un órden que corresponda a una secuencia temporal lineal.",-1),ae=(0,o._)("p",null,"En los programas concurrentes el concepto de secuencialidad entre sentencias continua siendo muy importante. Sin embargo en los programas concurrentes es de orden parcial, mientras que, tal y como hemos comentado anteriormente, en los programas secuenciales era de orden estricto.",-1),re=(0,o._)("p",null,[(0,o._)("img",{src:c,alt:"Concurrent flowchat example"})],-1),ce=(0,o._)("p",null,[(0,o.Uk)("En los programas concurrentes la "),(0,o._)("em",null,"secuencialización"),(0,o.Uk)(" entre procesos concurrentes se llama "),(0,o._)("strong",null,"sincronización"),(0,o.Uk)(".")],-1),ie=(0,o._)("p",null,"Este orden parcial implica que los programas concurrentes no tienen porqué ser deterministas, es decir, que ante el mismo conjunto de datos de entrada no siempre se va a obtener el mismo resultado.",-1),te=(0,o._)("div",{class:"custom-container danger"},[(0,o._)("p",{class:"custom-container-title"},"Indeterminismo"),(0,o._)("p",null,"Que existan diferentes salidas para el mismo conjunto de datos de entrada no significa necesariamente que un programa concurrente sea incorrecto.")],-1),ue=(0,o._)("p",null,"Si observamos el siguiente ejemplo de pseudocódigo",-1),pe=(0,o._)("div",{class:"language-java ext-java line-numbers-mode"},[(0,o._)("pre",{class:"shiki",style:{"background-color":"#FAFAFA"}},[(0,o._)("code",null,[(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#9C3EDA"}},"public"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#9C3EDA"}},"class"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#E2931D"}},"TestClass"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#9C3EDA"}},"int"),(0,o._)("span",{style:{color:"#90A4AE"}}," x"),(0,o._)("span",{style:{color:"#39ADB5"}},";")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"}),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#9C3EDA"}},"public"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#9C3EDA"}},"void"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod1"),(0,o._)("span",{style:{color:"#39ADB5"}},"()"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#39ADB5","font-style":"italic"}},"for"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"("),(0,o._)("span",{style:{color:"#9C3EDA"}},"int"),(0,o._)("span",{style:{color:"#90A4AE"}}," i"),(0,o._)("span",{style:{color:"#39ADB5"}},"="),(0,o._)("span",{style:{color:"#F76D47"}},"1"),(0,o._)("span",{style:{color:"#39ADB5"}},";"),(0,o._)("span",{style:{color:"#90A4AE"}}," i "),(0,o._)("span",{style:{color:"#39ADB5"}},"<="),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#F76D47"}},"5"),(0,o._)("span",{style:{color:"#39ADB5"}},";"),(0,o._)("span",{style:{color:"#90A4AE"}}," i"),(0,o._)("span",{style:{color:"#39ADB5"}},"++)"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"            x"),(0,o._)("span",{style:{color:"#39ADB5"}},"++;")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#9C3EDA"}},"public"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#9C3EDA"}},"void"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod2"),(0,o._)("span",{style:{color:"#39ADB5"}},"()"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#39ADB5","font-style":"italic"}},"for"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"("),(0,o._)("span",{style:{color:"#9C3EDA"}},"int"),(0,o._)("span",{style:{color:"#90A4AE"}}," j"),(0,o._)("span",{style:{color:"#39ADB5"}},"="),(0,o._)("span",{style:{color:"#F76D47"}},"1"),(0,o._)("span",{style:{color:"#39ADB5"}},";"),(0,o._)("span",{style:{color:"#90A4AE"}}," j "),(0,o._)("span",{style:{color:"#39ADB5"}},"<="),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#F76D47"}},"5"),(0,o._)("span",{style:{color:"#39ADB5"}},";"),(0,o._)("span",{style:{color:"#90A4AE"}}," j"),(0,o._)("span",{style:{color:"#39ADB5"}},"++)"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"            x"),(0,o._)("span",{style:{color:"#39ADB5"}},"++;")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#9C3EDA"}},"public"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#9C3EDA"}},"void"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#6182B8"}},"sequential"),(0,o._)("span",{style:{color:"#39ADB5"}},"()"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        x "),(0,o._)("span",{style:{color:"#39ADB5"}},"="),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#F76D47"}},"0"),(0,o._)("span",{style:{color:"#39ADB5"}},";")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod1"),(0,o._)("span",{style:{color:"#39ADB5"}},"();")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod2"),(0,o._)("span",{style:{color:"#39ADB5"}},"();")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        System"),(0,o._)("span",{style:{color:"#39ADB5"}},"."),(0,o._)("span",{style:{color:"#90A4AE"}},"out"),(0,o._)("span",{style:{color:"#39ADB5"}},"."),(0,o._)("span",{style:{color:"#6182B8"}},"println"),(0,o._)("span",{style:{color:"#39ADB5"}},"("),(0,o._)("span",{style:{color:"#90A4AE"}},"x"),(0,o._)("span",{style:{color:"#39ADB5"}},");")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#9C3EDA"}},"public"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#9C3EDA"}},"void"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#6182B8"}},"parallel"),(0,o._)("span",{style:{color:"#39ADB5"}},"()"),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#39ADB5"}},"{")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        x "),(0,o._)("span",{style:{color:"#39ADB5"}},"="),(0,o._)("span",{style:{color:"#90A4AE"}}," "),(0,o._)("span",{style:{color:"#F76D47"}},"0"),(0,o._)("span",{style:{color:"#39ADB5"}},";")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#39ADB5"}},"        "),(0,o._)("span",{style:{color:"#90A4AE","font-style":"italic"}},"// cobegin-coend means that both methods are run simultaneously")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#39ADB5"}},"        "),(0,o._)("span",{style:{color:"#90A4AE","font-style":"italic"}},"// These sentences doesn't exist in Java. They are used for ")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#39ADB5"}},"        "),(0,o._)("span",{style:{color:"#90A4AE","font-style":"italic"}},"// sample purposes")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        cobegin")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"            "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod1"),(0,o._)("span",{style:{color:"#39ADB5"}},"();")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"            "),(0,o._)("span",{style:{color:"#6182B8"}},"testMethod2"),(0,o._)("span",{style:{color:"#39ADB5"}},"();")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        coend")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"        System"),(0,o._)("span",{style:{color:"#39ADB5"}},"."),(0,o._)("span",{style:{color:"#90A4AE"}},"out"),(0,o._)("span",{style:{color:"#39ADB5"}},"."),(0,o._)("span",{style:{color:"#6182B8"}},"println"),(0,o._)("span",{style:{color:"#39ADB5"}},"("),(0,o._)("span",{style:{color:"#90A4AE"}},"x"),(0,o._)("span",{style:{color:"#39ADB5"}},");")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#90A4AE"}},"    "),(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#39ADB5"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"})])]),(0,o._)("div",{class:"highlight-lines"},[(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("div",{class:"highlight-line"}," "),(0,o._)("br"),(0,o._)("br"),(0,o._)("br")]),(0,o._)("div",{class:"line-numbers"},[(0,o._)("span",{class:"line-number"},"1"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"2"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"3"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"4"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"5"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"6"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"7"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"8"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"9"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"10"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"11"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"12"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"13"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"14"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"15"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"16"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"17"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"18"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"19"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"20"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"21"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"22"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"23"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"24"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"25"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"26"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"27"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"28"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"29"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"30"),(0,o._)("br"),(0,o._)("span",{class:"line-number"},"31"),(0,o._)("br")])],-1),de=(0,o._)("div",{class:"custom-container question"},[(0,o._)("p",null,"¿Qué valor tendrá x tras ejecutar el método sequential?"),(0,o._)("p",null,"¿Qué valor tendrá x tras ejecutar el método parallel?")],-1),_e=(0,o._)("div",{class:"custom-container info"},[(0,o._)("p",{class:"custom-container-title"},"Reseña histórica"),(0,o._)("p",null,[(0,o.Uk)("La naturaleza y los modelos de interacción entre procesos de un programa concurrente fueron estudiados y descritos por "),(0,o._)("strong",null,"Dijkstra"),(0,o.Uk)(" (1968), Brinch "),(0,o._)("strong",null,"Hansen"),(0,o.Uk)(" (1973) y "),(0,o._)("strong",null,"Hoare"),(0,o.Uk)(" (1974).")]),(0,o._)("p",null,"Estos trabajos constituyeron los principios en que se basaron los sistemas operativos multiproceso de la década de los 70 y 80.")],-1),me=(0,o._)("p",null,[(0,o.Uk)("El indeterminismo inherente a los programas concurrentes hace que su análisis y validación sea más complejo. No obstante, para la comprobación del correcto funcionamiento ("),(0,o._)("code",null,"verificación"),(0,o.Uk)(" o "),(0,o._)("code",null,"depuración"),(0,o.Uk)(") de un programa concurrente se requiere comprobar los mismos aspectos que en los programas secuenciales, pero con los siguientes nuevos aspectos:")],-1),ye=(0,o._)("li",null,"Las sentencias se pueden validar individualmente solo si no están acopladas por variables compartidas.",-1),Ae=(0,o.Uk)("Cuando existen variables compartidas, los efectos de interferencia entre las sentencias concurrentes pueden ser muy variados y la validación es muy difícil. "),be=(0,o._)("li",null,[(0,o.Uk)("Siempre que la secuencialidad entre tareas se lleve a cabo por sentencias explícitas de "),(0,o._)("strong",null,"sincronización"),(0,o.Uk)(", el tiempo es un elemento que no influye sobre el resultado")],-1),ge=(0,o._)("div",{class:"custom-container warning"},[(0,o._)("p",{class:"custom-container-title"},"Importante"),(0,o._)("p",null,"Estos tres aspectos que se acaban de describir forman la base de toda la programación concurrente."),(0,o._)("p",null,"👁️ Conocerlos, entenderlos y saber aplicarlos es a lo que dedicaremos una parte importante de este curso.")],-1),he=(0,o._)("h3",{id:"hilos-vs-procesos",tabindex:"-1"},"Hilos vs procesos",-1),ve=(0,o._)("p",null,"Un hilo no es más que cada una de esas líneas de flujo que puede tener un proceso ejecutándose de forma concurrente. Un procesos es una unidad pesada de ejecución.",-1),Ee=(0,o._)("p",null,"Así, un proceso estará formado por, al menos, un hilo de ejecución, el hilo principal. Si el proceso tiene varios hilos, cada uno es una unidad de ejecución ligera.",-1),fe=(0,o._)("table",null,[(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{style:{"text-align":"left"}},"Procesos"),(0,o._)("th",{style:{"text-align":"left"}},"Hilos")])]),(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",{style:{"text-align":"left"}},"Constan de uno o más hilos"),(0,o._)("td",{style:{"text-align":"left"}},"Un hilo siempre existe dentro de un proceso")]),(0,o._)("tr",null,[(0,o._)("td",{style:{"text-align":"left"}},"Son independientes unos de otros"),(0,o._)("td",{style:{"text-align":"left"}},"Comparten los recursos del proceso de forma directa")]),(0,o._)("tr",null,[(0,o._)("td",{style:{"text-align":"left"}},"Son gestionados por el SO"),(0,o._)("td",{style:{"text-align":"left"}},"Son gestionados por el proceso")]),(0,o._)("tr",null,[(0,o._)("td",{style:{"text-align":"left"}},"Se comunican a través del SO"),(0,o._)("td",{style:{"text-align":"left"}},"La comunicación la controla el proceso")])])],-1),ke=(0,o._)("p",null,[(0,o._)("img",{src:i,alt:"Threads vs Processes"})],-1),De=(0,o._)("p",null,"En la imagen anterior se puede observar la relación existente entre la creación de un thread y la de su proceso asociado.",-1),Ue=(0,o._)("ul",null,[(0,o._)("li",null,"El proceso define un espacio de memoria en el que reside. Los hilos comparten ese espacio de memoria. Dentro de ese espacio de memoria cada hilo tiene su espacio reservado, pero todos pueden compartir la memoria global del proceso y los recursos (ficheros, sockets, etc.) que el proceso tenga abiertos."),(0,o._)("li",null,"Como ya hemos visto, cada proceso tiene su PCB con información relativa al proceso."),(0,o._)("li",null,"Los hilos, de forma similar, tienen su TCB (Thread Control Block) en el que guardan la información específica de cada hilo (Contador de programa, puntero a la pila, estado del thread, registros y un puntero al PCB).")],-1),qe=(0,o._)("div",{class:"custom-container info"},[(0,o._)("p",{class:"custom-container-title"},"Servicios"),(0,o._)("p",null,[(0,o.Uk)("Un servicio es un proceso que, normalmente, es cargado durante el arranque del sistema operativo. Al no necesitar interacción con el usuario, los servicios suelen ejecutarse en forma de *"),(0,o._)("em",null,"demonios"),(0,o.Uk)(", quedan su ejecución en "),(0,o._)("em",null,"segundo plano"),(0,o.Uk)(".")]),(0,o._)("p",null,"Recibe el nombre de servicio ya que es un proceso que queda a la espera de que otro le pida que realice una tarea. Como deben atender las solicitudes de varios procesos, los servicios suelen ser programas multihilo.")],-1),Be={render:function(e,s){const n=(0,o.up)("DownloadPDF-component"),l=(0,o.up)("DocumentCover-component"),a=(0,o.up)("RouterLink"),r=(0,o.up)("Badge");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o.Wm)(l,{titulo:"1.1. Procesos, programas, hilos"}),t,(0,o._)("nav",u,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(a,{to:"#_1-1-1-procesos-y-programas"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(a,{to:"#_1-1-2-programacion-concurrente"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(a,{to:"#¿para-que"},{default:(0,o.w5)((()=>[_])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(a,{to:"#comunicacion-y-sincronizacion-entre-procesos"},{default:(0,o.w5)((()=>[m])),_:1})])])]),(0,o._)("li",null,[(0,o.Wm)(a,{to:"#_1-1-3-servicios-e-hilos"},{default:(0,o.w5)((()=>[y])),_:1}),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(a,{to:"#programa-secuencial-arquitectura-von-newmann"},{default:(0,o.w5)((()=>[A])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(a,{to:"#programa-concurrente"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(a,{to:"#hilos-vs-procesos"},{default:(0,o.w5)((()=>[g])),_:1})])])])])]),h,v,E,f,k,D,U,q,B,j,x,C,P,S,w,z,L,W,F,T,M,H,N,R,V,O,I,Q,J,Y,G,K,X,Z,$,ee,se,ne,oe,le,ae,re,ce,ie,te,ue,pe,de,_e,me,(0,o._)("ul",null,[ye,(0,o._)("li",null,[Ae,(0,o.Wm)(r,{type:"danger",text:"cuidado",vertical:"middle"})]),be]),ge,he,ve,Ee,fe,ke,De,Ue,qe],64)}}},852:(e,s,n)=>{e.exports=n.p+"assets/img/concurrencia_vs_paralelismo.bf602db6.jpg"},6338:(e,s,n)=>{e.exports=n.p+"assets/img/concurrent_flowchart.6ef70ab4.png"},5100:(e,s,n)=>{e.exports=n.p+"assets/img/proceso_memoria.4512b06c.png"},9544:(e,s,n)=>{e.exports=n.p+"assets/img/sequential_flowchart.c0001b8c.png"},8984:(e,s,n)=>{e.exports=n.p+"assets/img/threads_vs_process.c991e111.jpg"}}]);