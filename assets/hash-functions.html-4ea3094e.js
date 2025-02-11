import{_ as c,r as l,o as i,c as r,d as n,a as s,w as e,b as o,f as A}from"./app-f513d7ce.js";const y={},d=s("h1",{id:"_6-2-hash-functions",tabindex:"-1"},"6.2 Hash functions",-1),m={class:"table-of-contents"},u=A(`<h2 id="_6-2-1-hash-functions" tabindex="-1">6.2.1. Hash functions</h2><p>A <strong>message digest</strong>, better known as <strong>hash functions</strong>, is a digital mark of a block of data. There are a large number of algorithms designed to process these summaries, the two best known are SHA-1 and MD5.</p><p>From a digest we can highlight the following characteristics:</p><ul><li>For the same algorithm, the digest always has the same size, regardless of the size of the data used to generate it.</li><li>It is impossible to recover the original information from a digest.</li><li>The digest should not reveal anything about the data used to generate it.</li><li>It is computationally unfeasible to find two messages that have the same digest value. Mathematically it is highly unlikely, but not impossible.</li><li>A small change in the summarized data generates a completely different digest.</li></ul><p>Digests are used to generate unique and reliable identifiers. Sometimes they are called <em>checksum</em>, since they are used to check if a download has been done correctly, generating its summary and comparing it with the one generated by the original file.</p><div class="custom-container warning"><p class="custom-container-title">A hash is not used to encrypt</p><p>It is important to note that, because it is impossible to obtain the data that generated a digest from the digest itself, the digest cannot be used to encrypt information.</p><p>On the other side, it is a mechanism that is used to compare. Its most widespread use is with passwords, since in the databases a summary is saved instead of the password in clear. In this way, when a password is received, its digest is generated and compared with the stored value.</p></div><h2 id="_6-2-2-messagedigest" tabindex="-1">6.2.2. MessageDigest</h2><p>The <em>MessageDigest</em> class allows applications to implement cryptographically secure summary algorithms such as SHA-256 or SHA-512</p><p>To generate a hash with JCA, proceed as follows:</p><ol><li>An object of the <em>MesageDigest</em> class is created with the static method <em>getInstance()</em> of the same class, specifying the name of the algorithm. Optionally, the name of the provider can be specified.</li><li>Data is added with the <em>update()</em> method. A byte or byte array can be added. This method can be invoked several times to add new data.</li><li>The hash value is obtained with the <em>digest()</em> method.</li><li>If you wanted to calculate a new hash, the <em>reset()</em> method would be invoked to start the process again.</li></ol><p>Next we can see an example</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">U6S2_MessageDigest</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> plaintext </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Esto es un texto plano.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Obtenemos un ENGINE que implementa el algoritmo especificado</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Se puede indicar cualquier algoritmo disponible en el sistema</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// SHA-224, SHA-512, SHA-256, SHA3-224, ...</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> m </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">SHA-256</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Opcional - Reinicia el objeto para un nuevo uso </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Por si queremos poner este código en un bucle y procesar más</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// de un mensaje</span></span>
<span class="line"><span style="color:#90A4AE;">            m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">reset</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Realiza el resumen de los datos pasados por parámetro</span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Si queremos procesar la información poco a poco, </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// debemos ir llamando al método update para cada bloque de datos</span></span>
<span class="line"><span style="color:#90A4AE;">            m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">update</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">plaintext</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getBytes</span><span style="color:#39ADB5;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Completa el cálculo del valor del hash y devuelve el resumen</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">byte</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> digest </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">digest</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Mensaje de resumen</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Resumen (raw data): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">String</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">digest</span><span style="color:#39ADB5;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Mensaje en formato hexadecimal</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Resumen (hex data): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">toHexadecimal</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">digest</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">            </span></span>
<span class="line"><span style="color:#90A4AE;">            </span></span>
<span class="line"><span style="color:#39ADB5;">            </span><span style="color:#90A4AE;font-style:italic;">// Información del proceso</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">=&gt; Algoritmo: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getAlgorithm</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">, Provider: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProvider</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> m</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProvider</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getVersionStr</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">NoSuchAlgorithmException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">err</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">No se ha encontrado la implementación del algoritmo MD5 en ningún Provider</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">toHexadecimal</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">byte</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">hash</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and this would be the output provided</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">Resumen</span><span style="color:#90A4AE;"> (raw </span><span style="color:#91B859;">data</span><span style="color:#90A4AE;">): �Y�</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">�3\x1B��</span><span style="color:#39ADB5;">\`</span><span style="color:#E2931D;">b����bs?</span><span style="color:#39ADB5;">;</span><span style="color:#E2931D;">������~E</span></span>
<span class="line"><span style="color:#E2931D;">Resumen</span><span style="color:#91B859;"> (hex data): FB59D31122913314111B92CD60628ED7E7DE62733F3B10DEDAF303AAABE57E45</span></span>
<span class="line"><span style="color:#91B859;">=&gt; Algoritmo: SHA-256, Provider: SUN </span><span style="color:#F76D47;">11</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-3-messagedigest-with-gnupg" tabindex="-1">6.2.3. MessageDigest with GnuPG</h2><p>With the GnuPG suite we can generate summaries of files using the algorithms provided by the suite.</p><div class="custom-container info"><p class="custom-container-title">Algorithms available for GnuPG</p><p>To see the list of available algorithms we have to show the help of the command</p><blockquote><p>gpg --help</p></blockquote><p>and at the top we see the information of the algorithms available for each type of service. Specifically, of summaries, in my installed version:</p><p>Summary: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224</p></div><p>To generate a summary of a file, we run the command as follows</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">gpg</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">--print-md</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">SHA256</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">filename.ext</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function D(h,B){const p=l("DownloadPDF-component"),t=l("DocumentCover-component"),a=l("router-link");return i(),r("div",null,[n(p),n(t,{titulo:"6.2 Hash functions"}),d,s("nav",m,[s("ul",null,[s("li",null,[n(a,{to:"#_6-2-1-hash-functions"},{default:e(()=>[o("6.2.1. Hash functions")]),_:1})]),s("li",null,[n(a,{to:"#_6-2-2-messagedigest"},{default:e(()=>[o("6.2.2. MessageDigest")]),_:1})]),s("li",null,[n(a,{to:"#_6-2-3-messagedigest-with-gnupg"},{default:e(()=>[o("6.2.3. MessageDigest with GnuPG")]),_:1})])])]),u])}const E=c(y,[["render",D],["__file","hash-functions.html.vue"]]);export{E as default};
