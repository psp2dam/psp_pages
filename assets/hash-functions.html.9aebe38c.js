import{_ as r,r as e,o as c,c as i,d as n,a as s,w as l,b as o,f as A}from"./app.40fb9969.js";const y={},d=s("h1",{id:"_6-2-funciones-resumen",tabindex:"-1"},"6.2 Funciones resumen",-1),m={class:"table-of-contents"},u=o("6.2.1. Funciones hash"),B=o("6.2.2. MessageDigest"),D=o("6.2.3. MessageDigest con GnuPG"),v=A(`<h2 id="_6-2-1-funciones-hash" tabindex="-1">6.2.1. Funciones hash</h2><p>Un <em>Message digest</em> o resumen de mensaje, m\xE1s conocidos como <strong>funciones hash</strong>, es una marca digital de un bloque de datos. Existe un gran n\xFAmero de algoritmos dise\xF1ados para procesar esto res\xFAmenes, los dos m\xE1s conocidos son SHA-1 y MD5.</p><p>De un resumen cabe destacar las siguientes caracter\xEDsticas:</p><ul><li>Para el mismo algoritmo, el resumen siempre tiene el mismo tama\xF1o, independientemente del tama\xF1o de los datos que se haya usado para generarlo.</li><li>Es imposible recuperar la informaci\xF3n original a partir de un resumen.</li><li>El resumen no debe desvelar nada sobre los datos que se utilizaron para generarlo.</li><li>Es computacionalmente inviable encontrar dos mensajes que tengan el mismo valor de resumen. Matem\xE1ticamente es altamente improbable, pero no imposible.</li><li>Un peque\xF1o cambio en los datos resumidos genera un resumen completamente diferente.</li></ul><p>Los res\xFAmenes se usan para generar identificadores \xFAnicos y confiables. A veces se les llama <em>checksum</em>, ya que sirven para comprobar si una descarga se ha realizado correctamente, generando su resumen y compar\xE1ndolo con el que gener\xF3 el archivo original.</p><div class="custom-container warning"><p class="custom-container-title">Un hash no sirve para cifrar</p><p>Es importante destacar que, debido a que es imposible obtener los datos que generaron un resumen a partir del propio resumen, el resumen no se puede usar para cifrar informaci\xF3n.</p><p>Por el contrario, es un mecanismo que se usa para comparar. Su uso m\xE1s extendido es con las contrase\xF1as, ya que en las bases de datos se guarda un resumen en vez de la contrase\xF1a en claro. De esta forma, cuando se recibe una contrase\xF1a se genera su resumen y se compara con el valor almacenado.</p></div><h2 id="_6-2-2-messagedigest" tabindex="-1">6.2.2. MessageDigest</h2><p>La clase <em>MessageDigest</em> permite a las aplicaciones implementar algoritmos de resumen criptogr\xE1ficamente seguros como SHA-256 o SHA-512</p><p>Para generar un hash con JCA se procede de la siguiente forma:</p><ol><li>Se crea un objeto de la clase <em>MesageDigest</em> con el m\xE9todo est\xE1tico <em>getInstance()</em> de la misma clase, especificando el nombre del algoritmo. Opcionalmente, se puede especificar el nombre del proveedor.</li><li>Se a\xF1aden datos con el m\xE9todo <em>update()</em>. Se puede a\xF1adir un byte o un array de bytes. Este m\xE9todo se puede invocar varias veces para ir a\xF1adiendo nuevos datos.</li><li>Se obtiene el valor de hash con el m\xE9todo <em>digest()</em>.</li><li>Si se quisiera calcular un nuevo hash, se invocar\xEDa el m\xE9todo <em>reset()</em> para volver a empezar el proceso.</li></ol><p>A continuaci\xF3n podemos ver un ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">U6S2_MessageDigest</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> plaintext </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Esto es un texto plano.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Obtenemos un ENGINE que implementa el algoritmo especificado</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Se puede indicar cualquier algoritmo disponible en el sistema</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// SHA-224, SHA-512, SHA-256, SHA3-224, ...</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> m </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">SHA-256</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Opcional - Reinicia el objeto para un nuevo uso </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Por si queremos poner este c\xF3digo en un bucle y procesar m\xE1s</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// de un mensaje</span></span>
<span class="line"><span style="color:#90A4AE;">            m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">reset</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Realiza el resumen de los datos pasados por par\xE1metro</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Si queremos procesar la informaci\xF3n poco a poco, </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// debemos ir llamando al m\xE9todo update para cada bloque de datos</span></span>
<span class="line"><span style="color:#90A4AE;">            m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">update</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">plaintext</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getBytes</span><span style="color:#39ADB5;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Completa el c\xE1lculo del valor del hash y devuelve el resumen</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">byte</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> digest </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">digest</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Mensaje de resumen</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Resumen (raw data): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">String</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">digest</span><span style="color:#39ADB5;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Mensaje en formato hexadecimal</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Resumen (hex data): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">toHexadecimal</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">digest</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">            </span></span>
<span class="line"><span style="color:#90A4AE;">            </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Informaci\xF3n del proceso</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">=&gt; Algoritmo: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getAlgorithm</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">, Provider: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProvider</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProvider</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getVersionStr</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">NoSuchAlgorithmException</span><span style="color:#90A4AE;"> e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">err</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">No se ha encontrado la implementaci\xF3n del algoritmo MD5 en ning\xFAn Provider</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">toHexadecimal</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">byte</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> hash</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> hex </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;&quot;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">&lt;</span><span style="color:#90A4AE;"> hash</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">length</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i</span><span style="color:#39ADB5;">++)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> h </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Integer</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toHexString</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">hash</span><span style="color:#39ADB5;">[</span><span style="color:#90A4AE;">i</span><span style="color:#39ADB5;">]</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&amp;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0xFF</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">h</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">length</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">==</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                hex </span><span style="color:#39ADB5;">+=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">0</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">            hex </span><span style="color:#39ADB5;">+=</span><span style="color:#90A4AE;"> h</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">return</span><span style="color:#90A4AE;"> hex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toUpperCase</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>y esta ser\xEDa la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">Resumen </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">raw data</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">: \uFFFDY\uFFFD</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">\uFFFD3\x1B\uFFFD\uFFFD</span><span style="color:#39ADB5;">\`</span><span style="color:#91B859;">b\uFFFD\uFFFD\uFFFD\uFFFDbs</span><span style="color:#39ADB5;">?;</span><span style="color:#91B859;">\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD~E</span></span>
<span class="line"><span style="color:#91B859;">Resumen </span><span style="color:#39ADB5;">(</span><span style="color:#91B859;">hex data</span><span style="color:#39ADB5;">)</span><span style="color:#91B859;">: FB59D31122913314111B92CD60628ED7E7DE62733F3B10DEDAF303AAABE57E45</span></span>
<span class="line"><span style="color:#91B859;">=</span><span style="color:#39ADB5;">&gt;</span><span style="color:#91B859;"> Algoritmo: SHA-256, Provider: SUN 11</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-3-messagedigest-con-gnupg" tabindex="-1">6.2.3. MessageDigest con GnuPG</h2><p>Con la suite GnuPG podemos generar res\xFAmenes de archivos utilizando los algoritmos que nos proporciona la suite.</p><div class="custom-container info"><p class="custom-container-title">Algoritmos disponibles para GnuPG</p><p>Para ver la lista de algoritmos disponibles tenemos que mostrar la ayuda del comando</p><blockquote><p>gpg --help</p></blockquote><p>y en la parte superior observamos la informaci\xF3n de los algoritmos disponibles para cada tipo de servicio. En concreto, de res\xFAmenes, en mi versi\xF3n instalada:</p><p>Resumen: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224</p></div><p>Para generar un resumen de un archivo, ejecutamos el comando de la siguiente forma</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">gpg --print-md SHA256 filename.ext</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function E(g,b){const p=e("DownloadPDF-component"),t=e("DocumentCover-component"),a=e("router-link");return c(),i("div",null,[n(p),n(t,{titulo:"6.2 Funciones resumen"}),d,s("nav",m,[s("ul",null,[s("li",null,[n(a,{to:"#_6-2-1-funciones-hash"},{default:l(()=>[u]),_:1})]),s("li",null,[n(a,{to:"#_6-2-2-messagedigest"},{default:l(()=>[B]),_:1})]),s("li",null,[n(a,{to:"#_6-2-3-messagedigest-con-gnupg"},{default:l(()=>[D]),_:1})])])]),v])}const f=r(y,[["render",E],["__file","hash-functions.html.vue"]]);export{f as default};
