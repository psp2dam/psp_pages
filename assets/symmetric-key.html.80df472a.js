import{_ as o}from"./symmetric-encryption-primitive.e35e72d2.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as u,d as i,a as e,w as n,f as m,r as d,b as r}from"./app.6f7d6c20.js";const v={},p=e("h1",{id:"_6-3-encriptacion-simetrica",tabindex:"-1"},"6.3 Encriptaci\xF3n sim\xE9trica",-1),b={class:"table-of-contents"},g=r("6.3.1. Clave secreta"),S=r("6.3.2. Cipher"),f=r("Transformaciones b\xE1sicas en Java"),h=r("6.3.3. Clases stream para cifrado y descifrado sim\xE9trico"),y=r("6.3.4. Cifrado sim\xE9trico con GnuPG"),q=m('<h2 id="_6-3-1-clave-secreta" tabindex="-1">6.3.1. Clave secreta</h2><p>Ahora nos interesa no s\xF3lo verificar la integridad de la informaci\xF3n intercambiada, sino tambi\xE9n mantener su privacidad, es decir, que no sea &quot;comprensible&quot; durante la transmisi\xF3n, intercambio o almacenamiento.</p><p>Tenemos un conjunto de algoritmos denominados de <strong>clave sim\xE9trica</strong> (tambi\xE9n conocidos como de clave secreta) en los que, mediante la aplicaci\xF3n de una clave conocida tanto por el emisos como por el receptor, la informaci\xF3n se <strong>encripta o cifra</strong> de forma que s\xF3lo pueda ser <strong>desencriptada o descifrada</strong> utilizando el mismo algoritmo y la misma clave.</p><p>::: info El c\xF3digo Enigma Como ejemplo de sistema sim\xE9trico est\xE1 Enigma. Este fue un sistema empleado por Alemania durante la Segunda Guerra Mundial, en el que las claves se distribu\xEDan a diario en forma de libros de c\xF3digos.</p><p>Cada d\xEDa, un operador de radio, receptor o transmisor, consultaba su copia del libro de c\xF3digos para encontrar la clave del d\xEDa. Todo el tr\xE1fico enviado por ondas de radio durante aquel d\xEDa era cifrado y descifrado usando las claves del d\xEDa.</p><p>Inglaterra us\xF3 m\xE1quinas para descifrar las claves durante aquella guerra y aunque el citado sistema alem\xE1n, Enigma, estaba provisto de un amplio abanico de claves, los ingleses dise\xF1aron m\xE1quinas de c\xF3mputo especializado, los Bombes, para comprobar las claves de modo mec\xE1nico hasta que la clave del d\xEDa era encontrada.</p><p>Esto significaba que algunas veces encontraban la clave del d\xEDa pocas horas despu\xE9s de que \xE9sta fuera puesta en uso, pero tambi\xE9n que otros d\xEDas no pod\xEDan encontrar la clave correcta.</p><p>Los Bombes no fueron m\xE1quinas de c\xF3mputo general, sino las precursoras de los ordenadores (computadoras) actuales. :::</p><p>Entre los algoritmos de cifrado sim\xE9trico m\xE1s utilizados se encuentran</p><ul><li>DES</li><li>3DES o Tiple DES</li><li>RC5</li><li>AES</li><li>Blowfish</li><li>IDEA</li></ul><p><img src="'+o+`" alt="cifrado sim\xE9trico"></p><h2 id="_6-3-2-cipher" tabindex="-1">6.3.2. Cipher</h2><p>Para cifrar y descifrar un mensaje necesitamos una clave y escoger el tipo de cifrado que queremos. En JCA se procede de la siguiente forma:</p><ol><li>Se crea un objeto de la clase <em>SecretKey</em> a partir de un KeyGenerator obtenido con el m\xE9todo est\xE1tico <em>getInstance()</em>, especificando el nombre del algoritmo. Opcionalmente, se puede especificar el nombre del proveedor.</li><li>As\xED podemos utilizar una clave prefijada o incluso una clave aleatoria de tipo OTP (One Time Password) ya que cada vez que ejecutemos el programa la clave ser\xE1 diferente.</li><li>Se crea un objeto de tipo Cipher indicando qu\xE9 algoritmo vamos a usar. Y despu\xE9s, con el m\xE9todo <em>init()</em> se indica qu\xE9 vamos a hacer (cifrar/descifrar) y con qu\xE9 clave.</li><li>Se a\xF1aden datos con el m\xE9todo <em>update()</em>. Se puede a\xF1adir un byte o un array de bytes. Este m\xE9todo se puede invocar varias veces para ir a\xF1adiendo nuevos datos.</li><li>Se obtiene el valor cifrado con el m\xE9todo <em>doFinal()</em>.</li><li>Si se quisiera descifrar, s\xF3lo hay que volver a invocar al m\xE9todo <em>init()</em> indicando en este caso que queremos descifrar.</li></ol><p>A continuaci\xF3n podemos ver un ejemplo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class SecretKeyEncrypt {

    public static void main(String[] args) {
        SecretKey claveSecreta = null;
        
        try {

            //Generamos clave secreta
            // Podemos crear una nueva clave
            claveSecreta = getNewKey();
            // O bien usar una clave guardada en alg\xFAn almac\xE9n, fichero, etc.
            claveSecreta = getKeyFromData();

            System.out.println(&quot;Clave usada: &quot; + claveSecreta.getFormat());
            //Se define el objeto Cipher (Algoritmo/modo/relleno)
            Cipher c = Cipher.getInstance(&quot;DESede&quot;); // AES/ECB/PKCS5Padding
            // Configuramos el modo de CIFRADO
            c.init(Cipher.ENCRYPT_MODE, claveSecreta);

            // Aqu\xED leemos la informaci\xF3n que queremos cifrar
            // Puede ser una cadena o leerla de un archivo
            byte[] textoPlano = &quot;Texto que queremos cifrar para la prueba&quot;.getBytes();
            
            // Si queremos ir cifrando poco a poco, vamos haciendo llamadas
            // al m\xE9todo update
            // c.update(textoPlano);
            // Se realiza el proceso final de cifrado de la informaci\xF3n
            byte[] textoCifrado = c.doFinal(textoPlano);
            System.out.println(&quot;Texto cifrado con clave secreta (raw):\\n&quot; + new String(textoCifrado));
            System.out.println(&quot;Texto cifrado con clave secreta (hex):\\n&quot; + toHexadecimal(textoCifrado));
                        
            
            // El proceso de descifrado es equivalente
            // Cambiamos el modo de ENCRYPT a DECRYPT
            // Usamos la misma clave
            // Pasamos el texto cifrado para obtener el original
            c.init(Cipher.DECRYPT_MODE, claveSecreta);
            byte[] textoOriginal = c.doFinal(textoCifrado);
            //Leemos bloques de bytes del fichero y lo vamos escribiendo ya cifrado en el fichero de salida
            System.out.println(&quot;Texto descifrado:\\n&quot; + new String(textoOriginal));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static SecretKey getNewKey() throws InvalidKeySpecException, NoSuchAlgorithmException {
    
            KeyGenerator kg = KeyGenerator.getInstance(&quot;DESede&quot;);
            kg.init(112);
            SecretKey clave = kg.generateKey();
            
            return clave;
    }

    static SecretKey getNewRandomKey() throws InvalidKeySpecException, NoSuchAlgorithmException {
        // Clave obtenida usando un generador de n\xFAmero aleatorios seguro
        KeyGenerator genClaves = KeyGenerator.getInstance(&quot;DESede&quot;);
        // Utilizamos un algoritmo de generaci\xF3n de aleatorios        
        SecureRandom srand = SecureRandom.getInstance(&quot;SHA1PRNG&quot;);
        genClaves.init(srand);
        
        SecretKey clave = genClaves.generateKey();
        System.out.println(&quot;Formato de clave: &quot; + clave.getFormat());
        
        /*
        SecretKeyFactory keySpecFactory = SecretKeyFactory.getInstance(&quot;DESede&quot;);
        DESedeKeySpec keySpec = (DESedeKeySpec) keySpecFactory.getKeySpec(clave, DESedeKeySpec.class);
        byte[] valorClave = keySpec.getKey();
        */
        
        return clave;
    }
    
    static SecretKey getKeyFromData() throws InvalidKeySpecException, NoSuchAlgorithmException {
        // La clave se puede obtener desde un fichero o cualquier otra fuente
        byte valorClave[] = &quot;12345678123456781234567812345678&quot;.getBytes();
        SecretKeySpec keySpec = new SecretKeySpec (valorClave, &quot;DESede&quot;);
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(&quot;DESede&quot;);
        SecretKey clave = keyFactory.generateSecret(keySpec);
        
        return clave;
    }

    static Key getKeyFromData2() throws InvalidKeySpecException, NoSuchAlgorithmException {
        // La clave se puede obtener desde un fichero o cualquier otra fuente
        byte valorClave[] = &quot;12345678123456781234567812345678&quot;.getBytes();
        Key clave = new SecretKeySpec(valorClave, &quot;AES&quot;);

        return clave;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>y esta ser\xEDa la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Texto cifrado con clave secreta:
D0A61CD14B5844AD98B2C7BA795B327ACA0795B658C6F93EC6E1586A246BE71AC180B574207E8C4FFEB959B7D4642FCB
Texto descifrado:
Texto que queremos cifrar para la prueba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hay que tener en cuenta que en el ejemplo la clave se est\xE1 usando primero para cifrar y luego para descifrar. Si esto lo hacemos en programas separados, los programas que quieran comunicarse deber\xE1n tener acceso a la clave.</p><p>Lo que se suele hacer es almacenar la clave en un archivo y, cuando se necesita para cifrar o descifrar, se lee con un m\xE9todo similar al m\xE9todo <em>getKeyFromData()</em> del ejemplo anterior.</p><h3 id="transformaciones-basicas-en-java" tabindex="-1">Transformaciones b\xE1sicas en Java</h3><p>En la siguiente tabla tenemos los algoritmos, modos y tipos de relleno, junto con la longitud de clave empleada, de los algoritmos de cifrado sim\xE9trico m&#39;as comunes.</p><table><thead><tr><th>Transformaci\xF3n (algoritmo/modo/relleno)</th><th>Key Size</th></tr></thead><tbody><tr><td>AES/CBC/NoPadding</td><td>128</td></tr><tr><td>AES/CBC/PKCS5Padding</td><td>128</td></tr><tr><td>AES/ECB/NoPadding</td><td>128</td></tr><tr><td>AES/ECB/PKCS5Padding</td><td>128</td></tr><tr><td>DES/CBC/NoPadding</td><td>56</td></tr><tr><td>DES/CBC/PKCS5Padding</td><td>56</td></tr><tr><td>DES/ECB/NoPadding</td><td>56</td></tr><tr><td>DES/ECB/PKCS5Padding</td><td>56</td></tr><tr><td>DESede/CBC/NoPadding</td><td>168</td></tr><tr><td>DESede/CBC/PKCS5Padding</td><td>168</td></tr><tr><td>DESede/ECB/NoPadding</td><td>168</td></tr><tr><td>DESede/ECB/PKCS5Padding</td><td>168</td></tr><tr><td>RSA/ECB/PKCS1Padding</td><td>1024, 2048</td></tr><tr><td>RSA/ECB/OAEPWithSHA-1AndMGF1Padding</td><td>1024, 2048</td></tr><tr><td>RSA/ECB/OAEPWithSHA-256AndMGF1Padding</td><td>1024, 2048</td></tr></tbody></table><h2 id="_6-3-3-clases-stream-para-cifrado-y-descifrado-simetrico" tabindex="-1">6.3.3. Clases stream para cifrado y descifrado sim\xE9trico</h2><p>Existen dos clases stream que permiten cifrar y descifrar directamente. Pertenecen al paquete <em>java.crypto</em> pero por lo dem\xE1s funcionan exactamente igual que las clases Stream del paquete <em>java.io</em>, de las que adem\xE1s son clases descendientes y y tienen constructores que permiten crear streams encriptados sobre un InputStream y un OutputStream.</p><table><thead><tr><th>Clase</th><th>Ejemplo</th></tr></thead><tbody><tr><td>CipherInputStream</td><td>CipherInputStream (InputStream is, Cipher c)</td></tr><tr><td>CipherOutputStream</td><td>CipherOutputStream (OutputStream os, Cipher c)</td></tr></tbody></table><p>Por lo tanto, cuando tenemos que leer o escribir informaci\xF3n, podemos a\xF1adir un envoltorio m\xE1s al wrapper que utilizamos habitualmente y esto nos permite que tanto las lecturas como las escrituras se hagan cifradas, usando el algoritmo y la clave definidos para el objeto Cipher.</p><p>El uso m\xE1s com\xFAn es para leer o escribir en archivos en los que, de igual forma, cambiando el wrapper nos permite leer o escribir la informaci\xF3n de forma cifrada/descifrada.</p><p>::: warning Tama\xF1o de bloque Muchos de los algoritmos de cifrado sim\xE9trico trabajan con bloques de datos, por lo que no debemos intentar cifrar o descifrar m\xE1s informaci\xF3n de la que permite el tama\xF1o de bloque.</p><p>La clase Cipher tiene un m\xE9todo <strong>getBlockSize()</strong> que nos devuelve el tama\xF1o de bloque que permite el algoritmo configurado en su m\xE9todo <strong>init()</strong>. :::</p><p>Veamos un ejemplo de c\xF3mo quedar\xEDa el wrapper</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class StreamCrypto {

    public static void main(String[] args) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IOException {
        File file;
        String filePath = &quot;a.txt&quot;;

        file = new File(filePath);

        //Se define el objeto Cipher (Algoritmo/modo/relleno)
        Cipher c = Cipher.getInstance(&quot;AES/ECB/PKCS5Padding&quot;); //DESede
        // Configuramos el modo de CIFRADO
        byte[] valorClave = &quot;12345678123456781234567812345678&quot;.getBytes();

        // CIFRADO DEL STREAM (fichero a.txt)
        c.init(Cipher.ENCRYPT_MODE,
                new SecretKeySpec(valorClave, &quot;AES&quot;));

        try (OutputStream outputStream = new BufferedOutputStream(
                new CipherOutputStream(new FileOutputStream(file), c))) {
            for (int i = 0; i &lt; 10; i++) {
                outputStream.write(new String(&quot;Hello World\\n&quot;).getBytes());
            }

        }

        // DESCIFRADO DEL STREAM (fichero a.txt)
        c.init(Cipher.DECRYPT_MODE,
                new SecretKeySpec(valorClave, &quot;AES&quot;));

        try (InputStream inputStream = new BufferedInputStream(
                new CipherInputStream(new FileInputStream(file), c))) {

            System.out.println(&quot;Contenido del fichero (descifrado):\\n&quot; + new String(inputStream.readAllBytes()));
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-4-cifrado-simetrico-con-gnupg" tabindex="-1">6.3.4. Cifrado sim\xE9trico con GnuPG</h2><p>Con la suite GnuPG tambi\xE9n podemos cifrar el contenido de los archivos usando diferentes algoritmos</p><p>::: info Algoritmos disponibles para GnuPG Para ver la lista de algoritmos disponibles tenemos que mostrar la ayuda del comando</p><blockquote><p>gpg --help</p></blockquote><p>y en la parte superior observamos la informaci\xF3n de los algoritmos disponibles para cada tipo de servicio. En concreto, de res\xFAmenes, en mi versi\xF3n instalada:</p><p>Cifrado: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH, CAMELLIA128, CAMELLIA192, CAMELLIA256 :::</p><p>Para cifrar y descifrar un archivo, ejecutamos los siguientes comandos</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gpg --symmetric --cipher-algo 3DES filename.ext
gpg --decrypt filename.ext.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Vemos que para el cifrado nos solicita una clave y que con el par\xE1metro <em>--cipher-algo</em> indicamos qu\xE9 algoritmo de encriptaci\xF3n queremos utilizar.</p><p>El cifrado genera un archivo filename.ext.gpg.</p><p>Para el descifrado, no hace falta indicar el algoritmo, aunque se puede volver a usar el par\xE1metro <em>--cipher-algo</em> y la clave se queda en una cache de GnuPG durante un tiempo, por lo que no siempre la solicita.</p>`,43);function C(E,x){const s=d("DownloadPDF-component"),t=d("DocumentCover-component"),a=d("router-link");return c(),u("div",null,[i(s),i(t,{titulo:"6.3 Encriptaci\xF3n sim\xE9trica"}),p,e("nav",b,[e("ul",null,[e("li",null,[i(a,{to:"#_6-3-1-clave-secreta"},{default:n(()=>[g]),_:1})]),e("li",null,[i(a,{to:"#_6-3-2-cipher"},{default:n(()=>[S]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#transformaciones-basicas-en-java"},{default:n(()=>[f]),_:1})])])]),e("li",null,[i(a,{to:"#_6-3-3-clases-stream-para-cifrado-y-descifrado-simetrico"},{default:n(()=>[h]),_:1})]),e("li",null,[i(a,{to:"#_6-3-4-cifrado-simetrico-con-gnupg"},{default:n(()=>[y]),_:1})])])]),q])}const K=l(v,[["render",C],["__file","symmetric-key.html.vue"]]);export{K as default};
