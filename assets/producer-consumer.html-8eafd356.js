import{_ as i}from"./ProducerConsumer-a4b1ac79.js";import{_ as t,r as o,o as d,c as A,d as a,a as s,w as e,b as n,f as y}from"./app-a92d8ba6.js";const u={},m=s("h1",{id:"_3-3-modelo-productor-consumidor",tabindex:"-1"},"3.3 Modelo productor-consumidor",-1),v={class:"table-of-contents"},b=s("h2",{id:"_3-3-1-esquema-de-sincronizacion-y-comunicacion-de-hilos",tabindex:"-1"},"3.3.1. Esquema de sincronización y comunicación de hilos",-1),E=s("p",null,[n("La sincronización de threads implica disponer de mecanismos que permitan asegurar que no se producen situaciones de "),s("code",null,"inanición o starvation"),n(" (bloqueo de hilos como consecuencia del acceso a recursos compartidos limitados), "),s("code",null,"interbloqueos"),n(" (espera por parte de los hilos cuando una condición no puede ser satisfecha) y que, por lo tanto, se opera de forma correcta con los recursos compartidos por hilos concurrentes.")],-1),D={href:"https://es.wikipedia.org/wiki/Problema_productor-consumidor",target:"_blank",rel:"noopener noreferrer"},B=y('<p>Si no se implementasen medidas de control, ya hemos visto que podrían darse situaciones anómalas como:</p><ul><li>El consumidor puede obtener los elementos producidos más de una vez, excediendo la producción del mismo (poder dejar la cuenta en números rojos en el ejemplo del banco, o que un lector pueda leer un libro antes de estar terminado).</li><li>El productor sea más rápido que el Consumidor y genere más información de la que el sistema pueda almacenar, o bien parte de la información que genere se pierda sin que un Consumidor la haya recuperado.</li><li>El Consumidor sea más rápido que el Productor y puede terminar consumiendo dos o más veces el mismo valor, generando información inconsistente en el sistema.</li></ul><p>Todas estas circunstancias son las que conocemos como condiciones de carrera o <code>race conditions</code>.</p><p>El esquema de clases representado por este modelo se repite fielmente entre los diferentes ejercicios que vamos a realizar, es lo que denominamos el modelo Productor-Consumidor.</p><p><img src="'+i+`" alt="Producer-Consumer"></p><p>Este modelo se basa en tres clases, aunque dependiendo del problema, podemos encontrarnos que no tenemos <strong>productor</strong> o <strong>consumidor</strong>.</p><div class="custom-container info"><p class="custom-container-title">Modelo como patrón de diseño</p><p>Es importante que nos ajustemos al esquema presentado en el modelo.</p><p>Como ya se ha dicho, a veces no habrá productor, otras no estará el consumidor, en otras el código de bloqueo estará sólo en una de las clases, pero no debemos inventar ni añadir nada al esquema, debemos encajar el problema a solucionar dentro del código proporcionado.</p></div><h2 id="_3-3-2-clase-principal" tabindex="-1">3.3.2 Clase Principal</h2><blockquote><p>La clase principal siempre va a tener la misma estructura. El siguiente código se puede usar como plantilla</p></blockquote><p>En esta clase se declara el objeto o propiedad que van a compartir el productor y el consumidor. Este objeto es a través del que se realiza la comunicación, sincronización e intercambio de información entre los hilos.</p><p>Aquí se representa como un objeto, aunque puede ser una Colección o cualquier estructura de datos que puedan compartir los hilos.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">ClasePrincipal</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#90A4AE;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ObjetoCompartido</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Productor</span><span style="color:#90A4AE;"> p  </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Productor</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">objetoCompartido</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">Consumidor</span><span style="color:#90A4AE;"> c  </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Consumidor</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">objetoCompartido</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// No es obligatorio, pero en ocasiones puede interesar que la ClasePrincipal</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// espere a que acaben los hilos</span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">join</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">join</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Acciones a realizar una vez hayan acabado el productor y el consumidor</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Número de hilos por tipo</p><p>En el ejemplo se crea un hilo de cada tipo. Esto no tiene porqué ser así.</p><p>Cada problema determinará el número de hilos <em>Productores</em> y <em>Consumidores</em> necesarios, por lo que será en este método main, o en algún otro método de la <em>ClasePrincipal</em> donde se realice la gestión de los hilos.</p><p>De igual forma, dependerá de cada problema si el hilo principal debe esperar a que el resto finalice o no.</p></div><div class="pagebreak"></div><h2 id="_3-3-3-clase-productor-y-consumidor" tabindex="-1">3.3.3 Clase Productor y Consumidor</h2><blockquote><p>Por otro lado vamos a tener la clase del <strong>productor</strong> y del <strong>consumidor</strong> que se encargan de realizar las llamadas necesarias a los métodos del objeto compartido que reciben como parámetro.</p></blockquote><p>Estas dos clases son las que van a tener, dentro del método <strong>run</strong>, la lógica de la aplicación, accediendo al objeto compartido, modificando las propiedades compartidas entre los diferentes hilos (productores y/o consumidores) y actualizando el estado del objeto compartido para que module su funcionalidad.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Consumidor</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">extends</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Thread</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">Consumidor</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">objetoCompartido</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">@</span><span style="color:#9C3EDA;">Override</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">run</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// La ejecución del método run estará normalmente gestionada por un bucle</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// que controlará el ciclo de vida del hilo y se adaptará al problema.</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el caso de simulaciones se harán esperas proporcionales.</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Código que hace el hilo consumidor</span></span>
<span class="line"><span style="color:#90A4AE;">            objetoCompartido</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">accionDeConsumir</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// La espera es opcional</span></span>
<span class="line"><span style="color:#90A4AE;">            Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">long</span><span style="color:#39ADB5;">)(</span><span style="color:#90A4AE;">Math</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">random</span><span style="color:#39ADB5;">()*</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">+</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">         </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">    </span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Productor</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">extends</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Thread</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">Productor</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">objetoCompartido</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">objetoCompartido </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> objetoCompartido</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">@</span><span style="color:#9C3EDA;">Override</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">run</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// La ejecución del método run estará normalmente gestionada por un bucle</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// que controlará el ciclo de vida del hilo y se adaptará al problema.</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el caso de simulaciones se harán esperas proporcionales.</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Código que hace el hilo productor</span></span>
<span class="line"><span style="color:#90A4AE;">            objetoCompartido</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">accionDeProducir</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// La espera es opcional</span></span>
<span class="line"><span style="color:#90A4AE;">            Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">long</span><span style="color:#39ADB5;">)(</span><span style="color:#90A4AE;">Math</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">random</span><span style="color:#39ADB5;">()*</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">+</span><span style="color:#F76D47;">1000</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;">         </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="pagebreak"></div><h2 id="_3-3-4-clase-compartida-sincronizacion-de-hilos" tabindex="-1">3.3.4 Clase Compartida. Sincronización de hilos</h2><p>El modelo se completa con la clase compartida. Aquí vamos a crear los métodos a los que acceden productores y consumidores y, además, vamos a realizar la sincronización entre hilos para que no se produzcan <code>condiciones de carrera</code>.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">ClaseCompartida</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">ClaseCompartida</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se inicializa el valor</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">this.</span><span style="color:#90A4AE;">valorAccedidoSimultaneamente </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">synchronized</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">accionDeConsumir</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Si no se cumple la condición para poder consumir, el consumidor debe esperar</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#6182B8;">valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">==</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Consumidor espera...</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#6182B8;">wait</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">                </span><span style="color:#90A4AE;font-style:italic;">// Si es necesario se realizará la gestión de la Interrupción</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">                </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Cuando se ha cumplido la condición para consumir, el consumidor consume</span></span>
<span class="line"><span style="color:#90A4AE;">        valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">--;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Se ha consumido: %d.</span><span style="color:#90A4AE;">\\n</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se activa a otros hilos que puedan estar en espera</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">notifyAll</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">synchronized</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">accionDeProducir</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Si no se cumple la condición para poder producir, el productor debe esperar</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#6182B8;">valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">10</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Productor espera...</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#6182B8;">wait</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">                </span><span style="color:#90A4AE;font-style:italic;">// Si es necesario se realizará la gestión de la Interrupción                </span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Cuando se ha cumplido la condición para producir, el productor produce</span></span>
<span class="line"><span style="color:#90A4AE;">        valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Se ha producido: %d.</span><span style="color:#90A4AE;">\\n</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> valorAccedidoSimultaneamente</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Se activa a otros hilos que puedan estar en espera</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">notifyAll</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lo interesante del código anterior, como ya hemos visto con anterioridad, es la pareja de métodos <code>wait / notifyAll</code>, junto con el modificador <code>synchronized</code>.</p><ul><li>Cuando se llama a un método <strong>synchronized</strong> este método se ejecuta sí y solo sí no hay otro hilo ejecutando otro método <strong>synchronized</strong> <code>del mismo objeto</code>. Si se diese ese caso, el hilo se quedará en espera hasta que otro hilo libere el monitor. En ese momento todos los hilos que estén esperando se despiertan y sólo uno de ellos, el que consigue el monitor, puede ejecutar el código **synchronized&quot; en exclusión mutua.</li><li>Cuando se hace una llamada al método <strong>wait</strong>, un hilo se queda en espera y, además, libera el bloqueo del monitor. El hilo se quedará en espera hasta que otro hilo ejecute una llamada de señalización (<strong>notify/notifyAll</strong>).</li><li>Cuando se hace una llamada al método <strong>notify</strong> o <strong>notifyAll</strong>, uno o todos los hilos que están en espera por haber hecho <strong>wait</strong> se despiertan y pasan a esperar poder tomar el control del bloqueo del <strong>synchronized</strong>. A partir de ese momento, de forma aleatoria, uno de ellos o de los que ya estaban en la cola del bloqueo <strong>synchronized</strong> toma el control y o bien empieza o bien sigue ejecutándose por donde se quedó (en caso de que hubiese llamado a <strong>wait</strong>).</li></ul><blockquote><p>Con los métodos <strong>wait</strong>, <strong>notify/notifyAll</strong> y los bloques de código <strong>synchronized</strong> se consigue evitar que varios hilos puedan modificar a la vez una variable <em>(Ver líneas 21 y 40 del ejemplo anterior)</em>.</p></blockquote><div class="custom-container info"><p class="custom-container-title">Resumen del modelo Productor-Consumidor</p><p>El modelo Productor-Consumidor original trabaja con un buffer en el que el Productor va depositando información y el Consumidor la va sacando, de forma que el buffer nunca se llene ni se pueda leer si está vacío.</p><p>En nuestro ejemplo, lo hemos simplificado al uso de una variable que nunca puede exceder el valor de 10 ni ser inferior a 0.</p><p>Como ya hemos dicho, esa variable puede ser cualquier tipo de dato, y el código de las clases variará en función de ello, para adaptarlo al problema y al control del tipo de dato utilizado.</p><p>Además, las condiciones o estados que se utilizan para las esperas y las actualizaciones será lo que nosotros, como programadores, tengamos que adaptar al modelo para hacerlo funcionar en situaciones diferentes.</p></div>`,27);function h(g,C){const p=o("DownloadPDF-component"),r=o("DocumentCover-component"),l=o("router-link"),c=o("ExternalLinkIcon");return d(),A("div",null,[a(p),a(r,{titulo:"3.3 Modelo productor-consumidor"}),m,s("nav",v,[s("ul",null,[s("li",null,[a(l,{to:"#_3-3-1-esquema-de-sincronizacion-y-comunicacion-de-hilos"},{default:e(()=>[n("3.3.1. Esquema de sincronización y comunicación de hilos")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-2-clase-principal"},{default:e(()=>[n("3.3.2 Clase Principal")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-3-clase-productor-y-consumidor"},{default:e(()=>[n("3.3.3 Clase Productor y Consumidor")]),_:1})]),s("li",null,[a(l,{to:"#_3-3-4-clase-compartida-sincronizacion-de-hilos"},{default:e(()=>[n("3.3.4 Clase Compartida. Sincronización de hilos")]),_:1})])])]),b,E,s("p",null,[n("En esta sección vamos a ejemplificar la compartición de recursos a través de un objeto contenedor (objeto compartido) mediante el famoso algoritmo del Productor-Consumidor que podemos ver resumido en "),s("a",D,[n("Wikipedia"),a(c)]),n(".")]),B])}const j=t(u,[["render",h],["__file","producer-consumer.html.vue"]]);export{j as default};
