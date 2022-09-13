import{_ as i,r as e,o as l,c as u,d as s,a as n,w as o,b as t,f as r}from"./app.108f91ed.js";const d={},m=n("h1",{id:"_6-2-funciones-resumen",tabindex:"-1"},"6.2 Funciones resumen",-1),k={class:"table-of-contents"},v=t("6.2.1. Funciones hash"),g=t("6.2.2. MessageDigest"),b=t("6.2.3. MessageDigest con GnuPG"),h=r(`<h2 id="_6-2-1-funciones-hash" tabindex="-1">6.2.1. Funciones hash</h2><p>Un <em>Message digest</em> o resumen de mensaje, m\xE1s conocidos como <strong>funciones hash</strong>, es una marca digital de un bloque de datos. Existe un gran n\xFAmero de algoritmos dise\xF1ados para procesar esto res\xFAmenes, los dos m\xE1s conocidos son SHA-1 y MD5.</p><p>De un resumen cabe destacar las siguientes caracter\xEDsticas:</p><ul><li>Para el mismo algoritmo, el resumen siempre tiene el mismo tama\xF1o, independientemente del tama\xF1o de los datos que se haya usado para generarlo.</li><li>Es imposible recuperar la informaci\xF3n original a partir de un resumen.</li><li>El resumen no debe desvelar nada sobre los datos que se utilizaron para generarlo.</li><li>Es computacionalmente inviable encontrar dos mensajes que tengan el mismo valor de resumen. Matem\xE1ticamente es altamente improbable, pero no imposible.</li><li>Un peque\xF1o cambio en los datos resumidos genera un resumen completamente diferente.</li></ul><p>Los res\xFAmenes se usan para generar identificadores \xFAnicos y confiables. A veces se les llama <em>checksum</em>, ya que sirven para comprobar si una descarga se ha realizado correctamente, generando su resumen y compar\xE1ndolo con el que gener\xF3 el archivo original.</p><div class="custom-container warning"><p class="custom-container-title">Un hash no sirve para cifrar</p><p>Es importante destacar que, debido a que es imposible obtener los datos que generaron un resumen a partir del propio resumen, el resumen no se puede usar para cifrar informaci\xF3n.</p><p>Por el contrario, es un mecanismo que se usa para comparar. Su uso m\xE1s extendido es con las contrase\xF1as, ya que en las bases de datos se guarda un resumen en vez de la contrase\xF1a en claro. De esta forma, cuando se recibe una contrase\xF1a se genera su resumen y se compara con el valor almacenado.</p></div><h2 id="_6-2-2-messagedigest" tabindex="-1">6.2.2. MessageDigest</h2><p>La clase <em>MessageDigest</em> permite a las aplicaciones implementar algoritmos de resumen criptogr\xE1ficamente seguros como SHA-256 o SHA-512</p><p>Para generar un hash con JCA se procede de la siguiente forma:</p><ol><li>Se crea un objeto de la clase <em>MesageDigest</em> con el m\xE9todo est\xE1tico <em>getInstance()</em> de la misma clase, especificando el nombre del algoritmo. Opcionalmente, se puede especificar el nombre del proveedor.</li><li>Se a\xF1aden datos con el m\xE9todo <em>update()</em>. Se puede a\xF1adir un byte o un array de bytes. Este m\xE9todo se puede invocar varias veces para ir a\xF1adiendo nuevos datos.</li><li>Se obtiene el valor de hash con el m\xE9todo <em>digest()</em>.</li><li>Si se quisiera calcular un nuevo hash, se invocar\xEDa el m\xE9todo <em>reset()</em> para volver a empezar el proceso.</li></ol><p>A continuaci\xF3n podemos ver un ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">U6S2_MessageDigest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> plaintext <span class="token operator">=</span> <span class="token string">&quot;Esto es un texto plano.&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// Obtenemos un ENGINE que implementa el algoritmo especificado</span>
            <span class="token comment">// Se puede indicar cualquier algoritmo disponible en el sistema</span>
            <span class="token comment">// SHA-224, SHA-512, SHA-256, SHA3-224, ...</span>
            <span class="token class-name">MessageDigest</span> m <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-256&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Opcional - Reinicia el objeto para un nuevo uso </span>
            <span class="token comment">// Por si queremos poner este c\xF3digo en un bucle y procesar m\xE1s</span>
            <span class="token comment">// de un mensaje</span>
            m<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Realiza el resumen de los datos pasados por par\xE1metro</span>
            <span class="token comment">// Si queremos procesar la informaci\xF3n poco a poco, </span>
            <span class="token comment">// debemos ir llamando al m\xE9todo update para cada bloque de datos</span>
            m<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>plaintext<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Completa el c\xE1lculo del valor del hash y devuelve el resumen</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> digest <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Mensaje de resumen</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Resumen (raw data): &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>digest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Mensaje en formato hexadecimal</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Resumen (hex data): &quot;</span> <span class="token operator">+</span> <span class="token function">toHexadecimal</span><span class="token punctuation">(</span>digest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            
            <span class="token comment">// Informaci\xF3n del proceso</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=&gt; Algoritmo: &quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">getAlgorithm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, Provider: &quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">getProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">getProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getVersionStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;No se ha encontrado la implementaci\xF3n del algoritmo MD5 en ning\xFAn Provider&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toHexadecimal</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> hex <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hash<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> h <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                hex <span class="token operator">+=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            hex <span class="token operator">+=</span> h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> hex<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>y esta ser\xEDa la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Resumen <span class="token punctuation">(</span>raw data<span class="token punctuation">)</span>: \uFFFDY\uFFFD&quot;\uFFFD3\x1B\uFFFD\uFFFD\`b\uFFFD\uFFFD\uFFFD\uFFFDbs?<span class="token punctuation">;</span>\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD~E
Resumen <span class="token punctuation">(</span>hex data<span class="token punctuation">)</span>: FB59D31122913314111B92CD60628ED7E7DE62733F3B10DEDAF303AAABE57E45
<span class="token operator">=</span><span class="token operator">&gt;</span> Algoritmo: SHA-256, Provider: SUN <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-3-messagedigest-con-gnupg" tabindex="-1">6.2.3. MessageDigest con GnuPG</h2><p>Con la suite GnuPG podemos generar res\xFAmenes de archivos utilizando los algoritmos que nos proporciona la suite.</p><p>::: info Algoritmos disponibles para GnuPG Para ver la lista de algoritmos disponibles tenemos que mostrar la ayuda del comando</p><blockquote><p>gpg --help</p></blockquote><p>y en la parte superior observamos la informaci\xF3n de los algoritmos disponibles para cada tipo de servicio. En concreto, de res\xFAmenes, en mi versi\xF3n instalada:</p><p>Resumen: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224 :::</p><p>Para generar un resumen de un archivo, ejecutamos el comando de la siguiente forma</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gpg --print-md SHA256 filename.ext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22);function f(_,q){const p=e("DownloadPDF-component"),c=e("DocumentCover-component"),a=e("router-link");return l(),u("div",null,[s(p),s(c,{titulo:"6.2 Funciones resumen"}),m,n("nav",k,[n("ul",null,[n("li",null,[s(a,{to:"#_6-2-1-funciones-hash"},{default:o(()=>[v]),_:1})]),n("li",null,[s(a,{to:"#_6-2-2-messagedigest"},{default:o(()=>[g]),_:1})]),n("li",null,[s(a,{to:"#_6-2-3-messagedigest-con-gnupg"},{default:o(()=>[b]),_:1})])])]),h])}const y=i(d,[["render",f],["__file","hash-functions.html.vue"]]);export{y as default};