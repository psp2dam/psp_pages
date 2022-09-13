import{_ as l}from"./ProducerConsumer.8367c5c5.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as u,d as i,a as e,w as n,f as m,r as s,b as a}from"./app.b80cbaa0.js";const v={},p=e("h1",{id:"_3-3-modelo-productor-consumidor",tabindex:"-1"},"3.3 Modelo productor-consumidor",-1),b={class:"table-of-contents"},h=a("3.3.1. Esquema de sincronizaci\xF3n y comunicaci\xF3n de hilos"),g=a("3.3.2 Clase Principal"),q=a("3.3.3 Clase Productor y Consumidor"),C=a("3.3.4 Clase Compartida. Sincronizaci\xF3n de hilos"),y=m('<h2 id="_3-3-1-esquema-de-sincronizacion-y-comunicacion-de-hilos" tabindex="-1">3.3.1. Esquema de sincronizaci\xF3n y comunicaci\xF3n de hilos</h2><p>La sincronizaci\xF3n de threads implica disponer de mecanismos que permitan asegurar que no se producen situaciones de <code>inanici\xF3n o starvation</code> (bloqueo de hilos como consecuencia del acceso a recursos compartidos limitados), <code>interbloqueos</code> (espera por parte de los hilos cuando una condici\xF3n no puede ser satisfecha) y que, por lo tanto, se opera de forma correcta con los recursos compartidos por hilos concurrentes.</p><p>En esta secci\xF3n vamos a ejemplificar la compartici\xF3n de recursos a trav\xE9s de un objeto contenedor (objeto compartido) mediante el famoso algoritmo del Productor-Consumidor que podemos ver resumido en <a href="https://es.wikipedia.org/wiki/Problema_productor-consumidor" target="_blank" rel="noopener noreferrer">Wikipedia</a>.</p><p>Si no se implementasen medidas de control, ya hemos visto que podr\xEDan darse situacion an\xF3malas como:</p><ul><li>El consumidor puede obtener los elementos producidos m\xE1s de una vez, excediendo la producci\xF3n del mismo (poder dejar la cuenta en n\xFAmeros rojos en el ejemplo del banco, o que un lector pueda leer un libro antes de estar terminado).</li><li>El productor sea m\xE1s r\xE1pido que el Consumidor y genere m\xE1s informaci\xF3n de la que el sistema pueda almacenar, o bien parte de la informaci\xF3n que genere se pierda sin que un Consumidor la haya recuperado.</li><li>El Consumidor es m\xE1s r\xE1pidos que el Productor y puede terminar consumiendo dos o m\xE1s veces el mismo valor, generando informaci\xF3n inconsistente en el sistema.</li></ul><p>Todas estas circunstancias son las que conocemos como condiciones de carrera o <code>race conditions</code>.</p><p>El esquema de clases representado por este modelo se repite fielmente entre los diferentes ejercicios que vamos a realizar, es lo que denominamos el modelo Productor-Consumidor.</p><p><img src="'+l+`" alt="Producer-Consumer"></p><p>Este modelo se basa en tres clases, aunque dependiendo del problema, podemos encontrarnos que no tenemos <strong>productor</strong> o <strong>consumidor</strong>.</p><p>::: info Modelo como patr\xF3n de dise\xF1o Es importante que nos ajustemos al esquema presentado en el modelo.</p><p>Como ya se ha dicho, a veces no habr\xE1 productor, otras no estar\xE1 el consumidor, en otras el c\xF3digo de bloqueo estar\xE1 s\xF3lo en una de las clases, pero no debemos inventar ni a\xF1adir nada al esquema, debemos encajar el problema a solucionar dentro del c\xF3digo proporcionado. :::</p><h2 id="_3-3-2-clase-principal" tabindex="-1">3.3.2 Clase Principal</h2><blockquote><p>La clase principal siempre va a tener la misma estructura. El siguiente c\xF3digo se puede usar como plantilla</p></blockquote><p>En esta clase se declara el objeto o propiedad que van a compartir el productor y el consumidor. Este objeto es a trav\xE9s del que se realiza la comunicaci\xF3n, sincronizaci\xF3n e intercambio de informaci\xF3n entre los hilos.</p><p>Aqu\xED se representa como un objeto, aunque puede ser una Colecci\xF3n o cualquier estructura de datos que puedan compartir los hilos.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ClasePrincipal { 

    public static void main(String[] args) {    
        ClaseCompartida objetoCompartido = new ObjetoCompartido();
        Productor p  = new Productor(objetoCompartido);
        Consumidor c  = new Consumidor(objetoCompartido);
        productor.start();
        consumidor.start();

        // No es obligatorio, pero en ocasiones puede interesar que la ClasePrincipal
        // espere a que acaben los hilos
        productor.join();
        consumidor.join();

        // Acciones a realizar una vez hayan acabado el productor y el consumidor
    }
    
}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning N\xFAmero de hilos por tipo En el ejemplo se crea un hilo de cada tipo. Esto no tiene porqu\xE9 ser as\xED.</p><p>Cada problema determinar\xE1 el n\xFAmero de hilos <em>Productores</em> y <em>Consumidores</em> necesarios, por lo que ser\xE1 en este m\xE9todo main, o en alg\xFAn otro m\xE9todo de la <em>ClasePrincipal</em> donde se realice la gesti\xF3n de los hilos.</p><p>De igual forma, depender\xE1 de cada problema si el hilo principal debe esperar a que el resto finalice o no. :::</p><div class="pagebreak"></div><h2 id="_3-3-3-clase-productor-y-consumidor" tabindex="-1">3.3.3 Clase Productor y Consumidor</h2><blockquote><p>Por otro lado vamos a tener la clase del <strong>productor</strong> y del <strong>consumidor</strong> que se encargan de realizar las llamadas necesarias a los m\xE9todos del objeto compartido que reciben como par\xE1metro.</p></blockquote><p>Estas dos clases son las que van a tener, dentro del m\xE9todo <strong>run</strong>, la l\xF3gica de la aplicaci\xF3n, accediendo al objeto compartido, modificando las propiedades compartidas entre los diferentes hilos (productores y/o consumidores) y actualizando el estado del objeto compartido para que module su funcionalidad.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Consumidor extends Thread {
    private ClaseCompartida objetoCompartido;
    
    Consumidor(ClaseCompartida objetoCompartido) {
        this.objetoCompartido = objetoCompartido;
    }
    
    @Override
    public void run() {
        // La ejecuci\xF3n del m\xE9todo run estar\xE1 normalmente gestionada por un bucle
        // que controlar\xE1 el ciclo de vida del hilo y se adaptar\xE1 al problema.
        // En el caso de simulaciones se har\xE1n esperas proporcionales.
        try {
            // C\xF3digo que hace el hilo consumidor
            objetoCompartido.accionDeConsumir();
            // La espera es opcional
            Thread.sleep((long)(Math.random()*1000+1000));
        } catch (InterruptedException ex) {

        }         
    }
}    
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Productor extends Thread {
    private ClaseCompartida objetoCompartido;
    
    Productor(ClaseCompartida objetoCompartido) {
        this.objetoCompartido = objetoCompartido;
    }
    
    @Override
    public void run() {
        // La ejecuci\xF3n del m\xE9todo run estar\xE1 normalmente gestionada por un bucle
        // que controlar\xE1 el ciclo de vida del hilo y se adaptar\xE1 al problema.
        // En el caso de simulaciones se har\xE1n esperas proporcionales.
        try {
            // C\xF3digo que hace el hilo productor
            objetoCompartido.accionDeProducir();
            // La espera es opcional
            Thread.sleep((long)(Math.random()*1000+1000));
        } catch (InterruptedException ex) {

        }         
    }
} 
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_3-3-4-clase-compartida-sincronizacion-de-hilos" tabindex="-1">3.3.4 Clase Compartida. Sincronizaci\xF3n de hilos</h2><p>El modelo se completa con la clase compartida. Aqu\xED vamos a crear los m\xE9todos a los que acceden productores y consumidores y, adem\xE1s, vamos a realizar la sincronizaci\xF3n entre hilos para que no se produzcan <code>condiciones de carrera</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class ClaseCompartida {
    int valorAccedidoSimultaneamente;
    
    ClaseCompartida() {
        // Se inicializa el valor
        this.valorAccedidoSimultaneamente = 0;
    }

    public synchronized void accionDeConsumir() {
        // Si no se cumple la condici\xF3n para poder consumir, el consumidor debe esperar
        while (valorAccedidoSimultaneamente() == 0) {
            try {
                System.out.println(&quot;Consumidor espera...&quot;);
                wait();
            } catch (InterruptedException ex) {
                // Si es necesario se realizar\xE1 la gesti\xF3n de la Interrupci\xF3n
            }
        }
                
        // Cuando se ha cumplido la condici\xF3n para consumir, el consumidor consume
        valorAccedidoSimultaneamente--;
        System.out.printf(&quot;Se ha consumido: %d.\\n&quot;, valorAccedidoSimultaneamente);        

        // Se activa a otros hilos que puedan estar en espera
        notifyAll();
    }
    
    public synchronized void accionDeProducir () {
        // Si no se cumple la condici\xF3n para poder producir, el productor debe esperar
        while (valorAccedidoSimultaneamente() &gt; 10) {
            try {
                System.out.println(&quot;Productor espera...&quot;);
                wait();
            } catch (InterruptedException ex) {
                // Si es necesario se realizar\xE1 la gesti\xF3n de la Interrupci\xF3n                
            }
        }
        
        // Cuando se ha cumplido la condici\xF3n para producir, el productor produce
        valorAccedidoSimultaneamente++;
        System.out.printf(&quot;Se ha producido: %d.\\n&quot;, valorAccedidoSimultaneamente);        

        // Se activa a otros hilos que puedan estar en espera
        notifyAll();
    }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lo interesante del c\xF3digo anterior, como ya hemos visto con anterioridad, es la pareja de m\xE9todos <code>wait / notifyAll</code>, junto con el modificador <code>synchronized</code>.</p><ul><li>Cuando se llama a un m\xE9todo <strong>synchronized</strong> este m\xE9todo se ejecuta s\xED y solo s\xED no hay otro hilo ejecutando otro m\xE9todo <strong>synchronized</strong> <code>del mismo objeto</code>. Si se diese ese caso, el hilo se quedar\xE1 en espera hasta que otro hilo ejecute una llamada <strong>notifyAll</strong>. En ese momento todos los hilos que est\xE9n esperando se despiertan y s\xF3lo uno de ellos vuelve a ejecutarse.</li><li>Cuando se hace una llamada al m\xE9todo <strong>wait</strong>, un hilo se queda en espera y, adem\xE1s, libera el bloqueo de uso del m\xE9todo <strong>synchronized</strong>. El hilo se quedar\xE1 en espera hasta que otro hilo ejecute una llamada <strong>notifyAll</strong>.</li><li>Cuando se hace una llamada al m\xE9todo <strong>notifyAll</strong>, todos los hilos que est\xE1n en espera por haber hecho <strong>wait</strong> se despiertan y pasan a esperar poder tomar el control del bloqueo del <strong>synchronized</strong>. A partir de ese momento, de forma aleatoria, uno de ellos o de lo que ya estaban en la cola del bloqueo <strong>synchronized</strong> toma el control y empieza/sigue ejecut\xE1ndose.</li></ul><blockquote><p>Con los m\xE9todos <strong>wait</strong>, <strong>notifyAll</strong> y los bloques de c\xF3digo <strong>synchronized</strong> se consigue evitar que varios hilos puedan modificar a la vez una variable <em>(Ver l\xEDneas 21 y 40 del ejemplo anterior)</em>.</p></blockquote><p>::: info Resumen del modelo Productor-Consumidor El modelo Productor-Consumidor original trabaja con un buffer en el que el Productor va depositando informaci\xF3n y el Consumidor la va sacando, de forma que el buffer nunca se llene ni se pueda leer si est\xE1 vac\xEDo.</p><p>En nuestro ejemplo, lo hemos simplificado al uso de una variable que nunca puede exceder el valor de 10 ni ser inferior a 0.</p><p>Como ya hemos dicho, esa variable puede ser cualquier tipo de dato, y el c\xF3digo de las clases variar\xE1 en funci\xF3n de ello, para adaptarlo al problema y al control del tipo de dato utilizado.</p><p>Adem\xE1s, las condiciones o estados que se utilizan para las esperas y las actualizaciones ser\xE1 lo que nosotros, como programadores, tengamos que adaptar al modelo para hacerlo funcionar en situaciones diferentes. :::</p>`,36);function j(f,_){const r=s("DownloadPDF-component"),d=s("DocumentCover-component"),o=s("router-link");return t(),u("div",null,[i(r),i(d,{titulo:"3.3 Modelo productor-consumidor"}),p,e("nav",b,[e("ul",null,[e("li",null,[i(o,{to:"#_3-3-1-esquema-de-sincronizacion-y-comunicacion-de-hilos"},{default:n(()=>[h]),_:1})]),e("li",null,[i(o,{to:"#_3-3-2-clase-principal"},{default:n(()=>[g]),_:1})]),e("li",null,[i(o,{to:"#_3-3-3-clase-productor-y-consumidor"},{default:n(()=>[q]),_:1})]),e("li",null,[i(o,{to:"#_3-3-4-clase-compartida-sincronizacion-de-hilos"},{default:n(()=>[C]),_:1})])])]),y])}const x=c(v,[["render",j],["__file","producer-consumer.html.vue"]]);export{x as default};
