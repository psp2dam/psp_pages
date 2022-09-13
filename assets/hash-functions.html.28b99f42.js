import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as m,d as n,a as e,w as a,f as u,r as i,b as o}from"./app.6f7d6c20.js";const c={},v=e("h1",{id:"_6-2-funciones-resumen",tabindex:"-1"},"6.2 Funciones resumen",-1),p={class:"table-of-contents"},g=o("6.2.1. Funciones hash"),b=o("6.2.2. MessageDigest"),h=o("6.2.3. MessageDigest con GnuPG"),_=u(`<h2 id="_6-2-1-funciones-hash" tabindex="-1">6.2.1. Funciones hash</h2><p>Un <em>Message digest</em> o resumen de mensaje, m\xE1s conocidos como <strong>funciones hash</strong>, es una marca digital de un bloque de datos. Existe un gran n\xFAmero de algoritmos dise\xF1ados para procesar esto res\xFAmenes, los dos m\xE1s conocidos son SHA-1 y MD5.</p><p>De un resumen cabe destacar las siguientes caracter\xEDsticas:</p><ul><li>Para el mismo algoritmo, el resumen siempre tiene el mismo tama\xF1o, independientemente del tama\xF1o de los datos que se haya usado para generarlo.</li><li>Es imposible recuperar la informaci\xF3n original a partir de un resumen.</li><li>El resumen no debe desvelar nada sobre los datos que se utilizaron para generarlo.</li><li>Es computacionalmente inviable encontrar dos mensajes que tengan el mismo valor de resumen. Matem\xE1ticamente es altamente improbable, pero no imposible.</li><li>Un peque\xF1o cambio en los datos resumidos genera un resumen completamente diferente.</li></ul><p>Los res\xFAmenes se usan para generar identificadores \xFAnicos y confiables. A veces se les llama <em>checksum</em>, ya que sirven para comprobar si una descarga se ha realizado correctamente, generando su resumen y compar\xE1ndolo con el que gener\xF3 el archivo original.</p><p>::: warning Un hash no sirve para cifrar Es importante destacar que, debido a que es imposible obtener los datos que generaron un resumen a partir del propio resumen, el resumen no se puede usar para cifrar informaci\xF3n.</p><p>Por el contrario, es un mecanismo que se usa para comparar. Su uso m\xE1s extendido es con las contrase\xF1as, ya que en las bases de datos se guarda un resumen en vez de la contrase\xF1a en claro. De esta forma, cuando se recibe una contrase\xF1a se genera su resumen y se compara con el valor almacenado. :::</p><h2 id="_6-2-2-messagedigest" tabindex="-1">6.2.2. MessageDigest</h2><p>La clase <em>MessageDigest</em> permite a las aplicaciones implementar algoritmos de resumen criptogr\xE1ficamente seguros como SHA-256 o SHA-512</p><p>Para generar un hash con JCA se procede de la siguiente forma:</p><ol><li>Se crea un objeto de la clase <em>MesageDigest</em> con el m\xE9todo est\xE1tico <em>getInstance()</em> de la misma clase, especificando el nombre del algoritmo. Opcionalmente, se puede especificar el nombre del proveedor.</li><li>Se a\xF1aden datos con el m\xE9todo <em>update()</em>. Se puede a\xF1adir un byte o un array de bytes. Este m\xE9todo se puede invocar varias veces para ir a\xF1adiendo nuevos datos.</li><li>Se obtiene el valor de hash con el m\xE9todo <em>digest()</em>.</li><li>Si se quisiera calcular un nuevo hash, se invocar\xEDa el m\xE9todo <em>reset()</em> para volver a empezar el proceso.</li></ol><p>A continuaci\xF3n podemos ver un ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U6S2_MessageDigest {

    public static void main(String[] args) {
        String plaintext = &quot;Esto es un texto plano.&quot;;
        try {
            // Obtenemos un ENGINE que implementa el algoritmo especificado
            // Se puede indicar cualquier algoritmo disponible en el sistema
            // SHA-224, SHA-512, SHA-256, SHA3-224, ...
            MessageDigest m = MessageDigest.getInstance(&quot;SHA-256&quot;);

            // Opcional - Reinicia el objeto para un nuevo uso 
            // Por si queremos poner este c\xF3digo en un bucle y procesar m\xE1s
            // de un mensaje
            m.reset();

            // Realiza el resumen de los datos pasados por par\xE1metro
            // Si queremos procesar la informaci\xF3n poco a poco, 
            // debemos ir llamando al m\xE9todo update para cada bloque de datos
            m.update(plaintext.getBytes());

            // Completa el c\xE1lculo del valor del hash y devuelve el resumen
            byte[] digest = m.digest();

            // Mensaje de resumen
            System.out.println(&quot;Resumen (raw data): &quot; + new String(digest));

            // Mensaje en formato hexadecimal
            System.out.println(&quot;Resumen (hex data): &quot; + toHexadecimal(digest));
            
            
            // Informaci\xF3n del proceso
            System.out.println(&quot;=&gt; Algoritmo: &quot; + m.getAlgorithm() + &quot;, Provider: &quot; + m.getProvider().getName() + &quot; &quot; + m.getProvider().getVersionStr());
        } catch (NoSuchAlgorithmException e) {
            System.err.println(&quot;No se ha encontrado la implementaci\xF3n del algoritmo MD5 en ning\xFAn Provider&quot;);
        }
    }

    static String toHexadecimal(byte[] hash) {
        String hex = &quot;&quot;;
        for (int i = 0; i &lt; hash.length; i++) {
            String h = Integer.toHexString(hash[i] &amp; 0xFF);
            if (h.length() == 1) {
                hex += &quot;0&quot;;
            }
            hex += h;
        }
        return hex.toUpperCase();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>y esta ser\xEDa la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Resumen (raw data): \uFFFDY\uFFFD&quot;\uFFFD3\x1B\uFFFD\uFFFD\`b\uFFFD\uFFFD\uFFFD\uFFFDbs?;\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD~E
Resumen (hex data): FB59D31122913314111B92CD60628ED7E7DE62733F3B10DEDAF303AAABE57E45
=&gt; Algoritmo: SHA-256, Provider: SUN 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-3-messagedigest-con-gnupg" tabindex="-1">6.2.3. MessageDigest con GnuPG</h2><p>Con la suite GnuPG podemos generar res\xFAmenes de archivos utilizando los algoritmos que nos proporciona la suite.</p><p>::: info Algoritmos disponibles para GnuPG Para ver la lista de algoritmos disponibles tenemos que mostrar la ayuda del comando</p><blockquote><p>gpg --help</p></blockquote><p>y en la parte superior observamos la informaci\xF3n de los algoritmos disponibles para cada tipo de servicio. En concreto, de res\xFAmenes, en mi versi\xF3n instalada:</p><p>Resumen: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224 :::</p><p>Para generar un resumen de un archivo, ejecutamos el comando de la siguiente forma</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gpg --print-md SHA256 filename.ext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23);function q(f,S){const r=i("DownloadPDF-component"),l=i("DocumentCover-component"),s=i("router-link");return t(),m("div",null,[n(r),n(l,{titulo:"6.2 Funciones resumen"}),v,e("nav",p,[e("ul",null,[e("li",null,[n(s,{to:"#_6-2-1-funciones-hash"},{default:a(()=>[g]),_:1})]),e("li",null,[n(s,{to:"#_6-2-2-messagedigest"},{default:a(()=>[b]),_:1})]),e("li",null,[n(s,{to:"#_6-2-3-messagedigest-con-gnupg"},{default:a(()=>[h]),_:1})])])]),_])}const D=d(c,[["render",q],["__file","hash-functions.html.vue"]]);export{D as default};
