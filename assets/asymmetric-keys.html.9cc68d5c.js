import{_ as d,a as c,b as t}from"./digital-signature-sign-verify.3b3014a7.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as v,c as m,d as a,a as e,w as n,f as p,r as l,b as r}from"./app.6f7d6c20.js";const b={},g=e("h1",{id:"_6-4-encriptacion-asimetrica",tabindex:"-1"},"6.4 Encriptaci\xF3n asim\xE9trica",-1),f={class:"table-of-contents"},h=r("6.4.1. Clave p\xFAblica y clave privada"),y=r("6.4.2. Firma digital"),q=r("Integridad"),C=r("Autenticaci\xF3n y no repudio"),E=r("6.4.3 Certificados digitales"),A=r("Claves digitales"),S=r("Infraestructura de clave p\xFAblica (PKI)"),P=r("6.4.4. Generaci\xF3n de pares de claves"),x=r("Tipos de ficheros para certificados digitales"),K=r("Generaci\xF3n de claves desde Java"),B=r("6.4.5. Cifrado y descifrado usando un par de claves"),z=r("6.2.3. Cifrado asim\xE9trico con GnuPG"),D=p('<h2 id="_6-4-1-clave-publica-y-clave-privada" tabindex="-1">6.4.1. Clave p\xFAblica y clave privada</h2><p>La criptograf\xEDa asim\xE9trica o <strong>criptograf\xEDa de clave p\xFAblica</strong> supuso una aut\xE9ntica revoluci\xF3n en su momento. Permit\xEDa el intercambio seguro de informaci\xF3n (confidencialidad, autenticaci\xF3n y no repudio) entre interlocutores que no compart\xEDan ning\xFAn secreto.</p><p>Se cre\xF3 en los a\xF1os 70 a partir del trabajo de <em>Diffie y Hellman</em> por una parte y de <em>Rivest, Shamir y Adleman</em> por otra.</p><p>Se basa en la existencia de un par de claves, una p\xFAblica y otra privada, entre las cuales existe una relaci\xF3n matem\xE1tica, de manera que es muy dif\xEDcil obtener la clave privada a partir de la p\xFAblica. Sin embargo, es muy sencillo obtener la clave p\xFAblica a partir de la privada.</p><p>::: info Algoritmo RSA En la familia de algoritmos RSA (Rivest, Shamir y Adleman) la clave p\xFAblica consiste en un n\xFAmero que es el producto de dos factores primos muy grandes (mayores que 10^100) y la clave privada se deriva de la factorizaci\xF3n de dicho n\xFAmero, es decir, los dos factores primos.</p><p>Requiere poco procesamiento multiplicar dos n\xFAmeros primos tan grandes, pero requiere una cantidad enorme de c\xE1lculos encontrar la factorizaci\xF3n del n\xFAmero. :::</p><p>A diferencia del cifrado sim\xE9trico, el el cifrado asim\xE9trico se usan funciones diferentes para cifrar y descifrar los mensajes.</p><ul><li>Para <strong>encriptaci\xF3n</strong> se usa la <strong>clave p\xFAblica</strong>. Cualquiera puede tener acceso a la clave p\xFAblica, mediante la cual, usando la funci\xF3n de cifrado, se encripta la informaci\xF3n dirigida a un destinatario concreto (el propietario de la clave privada asociada).</li><li>Para <strong>desencriptaci\xF3n</strong> se usa la <strong>clave privada</strong>, que debe mantenerse a buen recaudo ya que s\xF3lo con esa clave y la funci\xF3n de descifrado se puede desencriptar un mensaje cifrado con la clave p\xFAblica correspondiente.</li></ul><p>Entre los algoritmos de cifrado asim\xE9trico m\xE1s utilizados se encuentran</p><ul><li>Rivest Shamir Adleman (RSA). Basado en la factorizaci\xF3n de n\xFAmeros primos grandes.</li><li>Digital Signature Standard (DSS), que incorpora Digital Signature Algorithm (DSA).</li><li>Elliptical Curve Cryptography (ECC). Est\xE1 basado en las matem\xE1ticas de las curvas el\xEDpticas</li><li>the Diffie-Hellman exchange method.</li><li>TLS/SSL protocol.</li></ul><p><img src="'+d+'" alt="cifrado asim\xE9trico"></p><h2 id="_6-4-2-firma-digital" tabindex="-1">6.4.2. Firma digital</h2><p>Con la firma digital Para cifrar y descifrar un mensaje necesitamos una clave y escoger el tipo de cifrado que queremos. En JCA se procede de la siguiente forma:</p><p><img src="'+c+'" alt="cifrado asim\xE9trico"></p><p>El proceso b\xE1sico que se sigue para la firma electr\xF3nica es el siguiente:</p><ol><li>El usuario dispone de un documento electr\xF3nico (una hoja de c\xE1lculo, un pdf, una imagen, incluso un formulario en una p\xE1gina web) y de un <strong>certificado</strong> (clave p\xFAblica y clave privada) que le pertenece y le identifica.</li><li>La aplicaci\xF3n o dispositivo digital utilizados para la firma realiza un <strong>resumen del documento</strong>. El resumen de un documento de gran tama\xF1o puede llegar a ser tan solo de unas l\xEDneas. Este resumen es \xFAnico y cualquier modificaci\xF3n del documento implica tambi\xE9n una modificaci\xF3n del resumen.</li><li>La aplicaci\xF3n utiliza la clave privada para codificar el resumen.</li><li>La aplicaci\xF3n crea otro documento electr\xF3nico que contiene ese resumen codificado. Este nuevo documento es la firma electr\xF3nica.</li></ol><p>El resultado de todo este proceso es un documento electr\xF3nico obtenido a partir del documento original y de las claves del firmante. La firma electr\xF3nica, por tanto, es el mismo documento electr\xF3nico resultante.</p><p><img src="'+t+`" alt="verificaci\xF3n de firma digital"></p><h3 id="integridad" tabindex="-1">Integridad</h3><p>Como estamos comparando funciones de resumen de un documento, se puede detectar de forma muy sencilla si el documento ha sufrido alguna modificaci\xF3n respecto al momento en el que se firm\xF3, garantizando de esta forma la integridad de la informaci\xF3n firmada.</p><h3 id="autenticacion-y-no-repudio" tabindex="-1">Autenticaci\xF3n y no repudio</h3><p>Por las caracter\xEDsticas de los algoritmos de cifrado se puede determinar, a partir del resumen cifrado con la clave privada, mediante el uso de la clave p\xFAblica, que el mensaje recibido lo gener\xF3 el propietario de la clave privada.</p><p>Con esta caracter\xEDstica se puede probar y demostrar que el mensaje lo firm\xF3 el emisor y no cualquier otra persona, garantizando por un lado la autor\xEDa y por otro evitando que el emisor niegue haber generado esa informaci\xF3n.</p><h2 id="_6-4-3-certificados-digitales" tabindex="-1">6.4.3 Certificados digitales</h2><p>Un certificado digital es un documento electr\xF3nico expedido por una <strong>Autoridad de Certificaci\xF3n</strong> e identifica a una persona (f\xEDsica o jur\xEDdica) con un par de claves.Tiene como misi\xF3n validar y certificar que una firma electr\xF3nica se corresponde con una persona o entidad concreta.</p><p>Contiene la informaci\xF3n necesaria para firmar electr\xF3nicamente e identificar a su propietario con sus datos: nombre, NIF, algoritmo y claves de firma, fecha de expiraci\xF3n y organismo que lo expide.</p><p>La Autoridad de Certificaci\xF3n da fe de que la firma electr\xF3nica se corresponde con un usuario concreto. Esa es la raz\xF3n por la que los certificados est\xE1n firmados, a su vez, por la Autoridad de Certificaci\xF3n.</p><h3 id="claves-digitales" tabindex="-1">Claves digitales</h3><p>En un certificado, las claves digitales son los elementos esenciales para la firma e identificaci\xF3n del firmante. Existen dos claves, la <strong>clave privada</strong> y <strong>clave p\xFAblica</strong>, y trabajan de forma complementaria. <em>Lo que cifra o codifica una clave s\xF3lo lo puede descifrar o decodificar la otra</em>.</p><p>La diferencia entre ellas es que la clave privada est\xE1 pensada para que nunca salga del certificado y est\xE9 siempre bajo el control del firmante. En cambio, la clave p\xFAblica se puede repartir o enviar a otros usuarios.</p><p>En ocasiones, se habla de Certificado Privado para referirse al certificado que contiene la clave privada y la p\xFAblica y del Certificado P\xFAblico para referirse al certificado que s\xF3lo contiene la clave p\xFAblica.</p><p>::: info Creaci\xF3n de Certificados digitales Obtener el Certificado Digital depende de si el certificado est\xE1 contenido en una tarjeta, como el DNIe, o de si el certificado se guarda en un fichero software.</p><p>En ambos procesos hay un paso que es la identificaci\xF3n del responsable o usuario del certificado, lo cual requiere que \xE9ste <strong>se persone en las oficinas de una Autoridad de Registro</strong>. Estas oficinas corroboran la identidad. :::</p><h3 id="infraestructura-de-clave-publica-pki" tabindex="-1">Infraestructura de clave p\xFAblica (PKI)</h3><p>Una infraestructura de clave p\xFAblica (PKI) es una combinaci\xF3n de hardware, software, procedimientos de seguridad y marco legal que, en su conjunto, permite la ejecuci\xF3n con garant\xEDas de operaciones criptogr\xE1ficas, cumpliendo los requisitos de integridad, confidencialidad, autenticaci\xF3n y no repudio.</p><p>Una PKI permite establecer y gestionar asociaciones entre claves p\xFAblicas e identidades de personas y organizaciones.</p><p>La cuesti\xF3n entonces es determinar si un certificado es v\xE1lido o de confianza, ol o que es lo mismo, si representa a la persona u organizaci\xF3n que aparece como titular y propietario del certificado.</p><p>Para dar por v\xE1lido un certificado digital su firma digital debe ser v\xE1lida y su emisor debe ser un emisor de confianza. Por lo tanto, ahora queda determinar qu\xE9 emisores son de confianza.</p><p>::: warning Autenticidad de los certificados Los certificados deben estar firmados por una AC por dos motivos</p><ol><li>Garantizar su integridad, de forma que cualquier intento de modificaci\xF3n del certificado lo invalide.</li><li>Identificar al creador del certificado digital. Todo el sistema est\xE1 basado en una relaci\xF3n de confianza, en la que la AC que ha firmado el certificado es un emisor de confianza, normalmente instituciones p\xFAblicas o privadas de reconocido prestigio :::</li></ol><p>En nuestro sistema podemos ver y modificar qu\xE9 entidades de certificaci\xF3n consideramos como seguras, es decir, que los certificados que \xE9stas hayan firmado los tomaremos como v\xE1lidos.</p><p><a href="https://docs.microsoft.com/es-es/exchange/trusted-root-certification-authorities-for-federation-trusts-exchange-2013-help" target="_blank" rel="noopener noreferrer">Autoridades de confianza para apps de Azure</a></p><p>En Windows, si ejecutamos <code>certmgr.msc</code> podemos acceder a la configuraci\xF3n de certificados del sistema. En OSX lo podemos hacer con la aplicaci\xF3n <code>Llavero</code>.</p><p>Para nuestra navegaci\xF3n, la informaci\xF3n de qu\xE9 certificados considera el navegador como seguros, depende de en qu\xE9 AC confiemos (por defecto en la instalaci\xF3n vienen configurados los m\xE1s comunes)</p><p><a href="https://www.adminfacil.es/como-ver-los-certificados-instalados-en-google-chrome/" target="_blank" rel="noopener noreferrer">Ver certificados y AC en Chrome</a></p><p>::: danger Certificados autofirmados <strong>Hemos de tener en cuenta que, con herramientas como las que proporciona Java, SSH o GnuPG cualquiera puede generar un certificado digital con la informaci\xF3n que quiera</strong></p><p>Para las pruebas vamos a firmar nuestros propios certificados. Incluso dentro de una compa\xF1\xEDa podemos ejercer nosotros mismos como Autoridad de Certificaci\xF3n de Confianza, firmando nuestros certificados.</p><p>Debemos preparar la configuraci\xF3n de nuestros sistemas para que <strong>conf\xEDen</strong> en esos certificados autofirmados, asumiendo el riesgo que esto conlleva. :::</p><h2 id="_6-4-4-generacion-de-pares-de-claves" tabindex="-1">6.4.4. Generaci\xF3n de pares de claves</h2><p>La generaci\xF3n y gesti\xF3n de pares de claves implica dos aspectos fundamentales.</p><p>Por un lado, tenemos la creaci\xF3n de las claves. Las claves las podemos haber descargado, generado con alguna de las utilidades disponibles para ellos o bien, como veremos a continuaci\xF3n, se pueden generar desde una aplicaci\xF3n, igual que hacemos con las claves sim\xE9tricas.</p><p>Por otro lado, tenemos la gesti\xF3n del almacenamiento de las claves. Las claves no dejan de ser archivos, que podemos tratar como archivos especiales, pero que usualmente se almacenan en repositorios especiales, denominados <code>keyrings</code> a los que puede acceder una aplicaci\xF3n y desde los que gestionamos las relaciones de confianza.</p><p>El JCA nos proporciona clases generadoras de claves. Estas clases se apoyan en buenos algoritmos de generaci\xF3n de n\xFAmeros aleatorios para satisfacer unos requisitos m\xEDnimos de seguridad.</p><p>::: info SecureRandom La generaci\xF3n de n\xFAmeros aleatorios juega un papel fundamental en la criptograf\xEDa, siendo uno de los <strong>Engine</strong> que proporciona el JCA junto con un amplio grupo de algoritmos.</p><p>La clase <strong>SecureRandom</strong> genera n\xFAmero aleatorios empleando alguno de los algoritmos disponibles y se puede utilizar un objeto de tipo SecureRandom para que los utilicen las clases generadoras de claves, tanto sim\xE9tricas como asim\xE9tricas :::</p><h3 id="tipos-de-ficheros-para-certificados-digitales" tabindex="-1">Tipos de ficheros para certificados digitales</h3><p>Hay varios tipos de ficheros que se utilizan para guardar certificados digitales siguiendo el est\xE1ndar X.509. Generalmente uncertificado no contiene s\xF3lo la clave, sino que tiene informaci\xF3n adicional.</p><p>Esxiten dos posibles codificaciones para almacenar certificados X.509</p><ul><li>der: Es una codificaci\xF3n binaria</li><li>dem: Es una codificaci\xF3n en formato texto guardado en Base64 y tienen un encabezado y pie que delimita el contenido del certificado</li></ul><p>Veamos un ejemplo de certificado con codificaci\xF3n dem</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-----BEGIN CERTIFICATE----- 
MIIDijCCAvOgAwIBAgIJAKRvtQxONVZoMA0GCSqGSIb3DQEBBAUAMIGLMQswCQYD 
VQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTESMBAGA1UEBxMJU3Vubnl2YWxl 
MSAwHgYDVQQKExdBcnViYSBXaXJlbGVzcyBOZXR3b3JrczEMMAoGA1UECxMDVEFD 
MSMwIQYDVQQDExpteXNlcnZlci5hcnViYW5ldHdvcmtzLmNvbTAeFw0wODA0MzAy 
MzM3MDJaFw0xMDA0MzAyMzM3MDJaMIGLMQswCQYDVQQGEwJVUzETMBEGA1UECBMK 
Q2FsaWZvcm5pYTESMBAGA1UEBxMJU3Vubnl2YWxlMSAwHgYDVQQKExdBcnViYSBX 
aXJlbGVzcyBOZXR3b3JrczEMMAoGA1UECxMDVEFDMSMwIQYDVQQDExpteXNlcnZl 
ci5hcnViYW5ldHdvcmtzLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA 
zRwqc9prVXycGhHcsAjGPzC2MKU4DhXSr86Z89Jk8/cXEJBJ0C/NgdAqqDgxneUh 
nVyxGxODa7BNGAWSagdCsKLrbkchr479E3xLfgdc3UzAJITLGCXGiQ66NwQDyM5I 
G/xKYm4oqgyOE/lFTTkK0M8V0NmmJynyOCYC/AwQKjMCAwEAAaOB8zCB8DAdBgNV 
HQ4EFgQUM5btT6IlPGkLTTPvFccTVURO1p0wgcAGA1UdIwSBuDCBtYAUM5btT6Il 
PGkLTTPvFccTVURO1p2hgZGkgY4wgYsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpD 
YWxpZm9ybmlhMRIwEAYDVQQHEwlTdW5ueXZhbGUxIDAeBgNVBAoTF0FydWJhIFdp 
cmVsZXNzIE5ldHdvcmtzMQwwCgYDVQQLEwNUQUMxIzAhBgNVBAMTGm15c2VydmVy 
LmFydWJhbmV0d29ya3MuY29tggkApG+1DE41VmgwDAYDVR0TBAUwAwEB/zANBgkq 
hkiG9w0BAQQFAAOBgQBp71WeF6dKvqUSO1JFsVhBeUesbEgx9+tx6eP328uL0oSC 
fQ6EaiXZVbrQt+PMqG0F80+4wxVXug9EW5Ob9M/opaCGI+cgtpLCwSf6CjsmAcUc 
b6EjG/l4HW2BztYJfx15pk51M49TYS7okDKWYRT10y65xcyQdfUKvfDC1k5P9Q== 
-----END CERTIFICATE-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adem\xE1s de la codificaci\xF3n, tenemos formatos de fichero est\xE1ndar para guardar los certificados usando una de las codificaciones anteriores</p><ul><li>cer, crt, der: Contienen certificados X.509 est\xE1ndares codificados como <code>der</code></li><li>p12: Realmente hace referencia a toda una familia de est\xE1ndares asociados al algoritmo RSA y definen el formato de almacenamiento de distintos tipos de claves, los PKCS#n (PKCS#8, PKCS#12, etc). Pueden contener, adem\xE1s de los datos del certificado, una clave privada. Si contiene la clave privada, \xE9sta estar\xE1 protegida por una contrase\xF1a que ser\xE1 necesaria para acceder a la clave privada. <a href="https://es.wikipedia.org/wiki/PKCS" target="_blank" rel="noopener noreferrer">PKCS en Wikipedia</a></li></ul><h3 id="generacion-de-claves-desde-java" tabindex="-1">Generaci\xF3n de claves desde Java</h3><p>Usando las clases del JCA, estos son los pasos que debemos seguir para generar un par de claves desde c\xF3digo</p><ol><li>El primer paso para obtener un par de claves es obtener un objeto <em>keyPairGenerator</em> para el algoritmo que queramos utilizar.</li><li>A continuaci\xF3n se inicializa el generador del par de claves llamando a alguna de las versiones del m\xE9todo <em>initialize</em>. En nuestro caso indicaremos el tama\xF1o de clave para el algoritmo seleccionado y un generador de n\xFAmeros aleatorios.</li><li>El \xFAltimo paso es generar el par de claves y guardarlas en los objetos PrivateKey y PublicKey respectivamente.</li><li>A partir de ese momento ya se pueden usar las claves para cifrar, descifrar e incluso para firmar. Sin embargo, si queremos reutilizar estas claves, lo que tendremos que hacer ser\xE1 guardarlas en sendos archivos.</li></ol><p>A continuaci\xF3n podemos ver un ejemplo de generaci\xF3n de claves, almacenamiento de las claves en un fichero y visualizaci\xF3n de la clave obtenida.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U6S5_GenerateRsaKeyPair {

    private static final int tamanoClaveAsimetrica = 1024;
    private static final String algoritmoClaveAsimetrica = &quot;RSA&quot;;
    private static final String ficheroClavePublica = &quot;claves/clavepublica.der&quot;;
    private static final String ficheroClavePrivada = &quot;claves/claveprivada.pkcs8&quot;;

    public static void main(String[] args) {
        try {
            // Elijo un algoritmo de generaci\xF3n de n\xFAmeros aleatorios de los denominados
            // altamente seguros para generar el par de claves
            SecureRandom algoritmoSeguro = SecureRandom.getInstanceStrong();
            // Preparo el generados de claves para usar el algortimo RSA
            KeyPairGenerator genParClaves = KeyPairGenerator.getInstance(algoritmoClaveAsimetrica);
            genParClaves.initialize(tamanoClaveAsimetrica, algoritmoSeguro);

            // Creo el par de claves y lo guardo en objetos
            KeyPair parClaves = genParClaves.generateKeyPair();
            PublicKey clavePublica = parClaves.getPublic();
            PrivateKey clavePrivada = parClaves.getPrivate();

            // Guardamos la clave p\xFAblica en un archivo y la visualizamos
            // La clave se guarda con codificaci\xF3n DER y en formato X.509
            guardaClavePublicaX509(clavePublica);
            
            // Guardamos la clave privada en un archivo y la visualizamos
            // La clave se guarda con codificaci\xF3n DER y en formato PKCS#8
            guardaClavePrivadaPKCS8(clavePrivada);
            

        } catch (NoSuchAlgorithmException ex) {
            System.err.println(&quot;No se ha encontrado la implementaci\xF3n del algortimo en ning\xFAn Provider&quot;);
        }

    }

    private static void guardaClavePublicaX509(PublicKey clavePublica) {
        try (FileOutputStream publicKeyFile = new FileOutputStream(ficheroClavePublica)) {
            X509EncodedKeySpec codificacionClavePublica = new X509EncodedKeySpec(clavePublica.getEncoded(), algoritmoClaveAsimetrica);
            publicKeyFile.write(clavePublica.getEncoded());
            
            // Visualizamos la clave por consola
            MostrarClaveBase64(codificacionClavePublica.getEncoded(),
                    codificacionClavePublica.getFormat(), ficheroClavePublica);
        } catch (IOException ex) {
            System.out.println(&quot;Error almacenando la clave p\xFAblica en &quot; + ficheroClavePublica);
        }                
    }

    private static void guardaClavePrivadaPKCS8(PrivateKey clavePrivada) {
        try (FileOutputStream privateKeyFile = new FileOutputStream(ficheroClavePrivada)) {
            PKCS8EncodedKeySpec codificacionClavePrivada = new PKCS8EncodedKeySpec(clavePrivada.getEncoded(), algoritmoClaveAsimetrica);
            privateKeyFile.write(clavePrivada.getEncoded());
            
            // Visualizamos la clave por consola
            MostrarClaveBase64(codificacionClavePrivada.getEncoded(),
                    codificacionClavePrivada.getFormat(), ficheroClavePrivada);
        } catch (IOException ex) {
            System.out.println(&quot;Error almacenando la clave privada en &quot; + ficheroClavePrivada);
        }        
    }

    private static void MostrarClaveBase64(byte[] clave, String formatoClave, String ficheroClave) {
        System.out.println(&quot;Clave guardada en formato &quot; + formatoClave 
                + &quot; en fichero &quot; + ficheroClave);
        System.out.println(Base64.getEncoder().encodeToString(clave).replaceAll(&quot;(.{76})&quot;, &quot;$1\\n&quot;));
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esta ser\xEDa la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Clave guardada en formato X.509 en fichero claves/clavepublica.der
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4UFRgEIm3lFKO75QmqTPvkDs0fM6NUm2FHQcA
cQHawLx9/WKXh9xkx/xYZZcc4L2YQYcwTu4jfk889iGKGLn2Kh4ywBY+g8uZ6ljM5PT6f95dU6Zd
xATWOn1qsizBubf7kKhBL7xDnKU5do3XYzrSjme+9uIsgS7HQ7K0MbKrpQIDAQAB

Clave guardada en formato PKCS#8 en fichero claves/claveprivada.pkcs8
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALhQVGAQibeUUo7vlCapM++QOzR8
zo1SbYUdBwBxAdrAvH39YpeH3GTH/FhllxzgvZhBhzBO7iN+Tzz2IYoYufYqHjLAFj6Dy5nqWMzk
9Pp/3l1Tpl3EBNY6fWqyLMG5t/uQqEEvvEOcpTl2jddjOtKOZ7724iyBLsdDsrQxsqulAgMBAAEC
gYA97xBLL4N3YqnTSgIYc6b2Cxs56e5mYppWrohZx5996GHuXCSzEn4mh2TuN0Tt+T78WJiazQsM
djceHv7qLqDd2kWn3IR0gX207KxwjG0I/sAP2z/i9NZ7DPL+FUv8lmeYUfDj8h3wkyhmBqn+tan1
0xIOcZUrr/yRhrjZLI1SCQJBAPEc4uWSbyBLHVC6SNga7XWNmwi8Mq4PZJdhW9RJWDxg9zOlC/HV
rV60ddbfW/ldIqCH33DUge5U5YhD6Mla/XMCQQDDsahcwTksp2bJowMTRgFHT094sihtSlQ7sgdI
uAemuMvBmVTHleFBWMqz1rAN6A/76yef3WK4I+nsmeCGa+yHAkEA7BR1kYT8q+kATi/n7TkIcoZx
W28yTD2kJ5jbWhNqgswKn5WmCWdH9qfJjddrbdEke3wuaoKYqeyURgUAJE+kQwJADhEsQBanrH0Q
F3h/VRhYKS8bUFrGKy0Hpw7iFSkda6+m/fCutnYgrhja4ViSaT2AQKSjwYsheIkkXJynFiKV6wJA
PUHXqlvfgPr4w2U+Ddq7h/gp59kO0uojGrEBO0B2wt3PuuSQlZlMN97Ly9QmB6LYRtw6woCZZZOD
ePqA7rf8IA==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo anterior en lugar de utilizar clases est\xE1ndar para volcar el contenido binario de las claves a un archivo en formato raw, se utilizan clases codificadoras para generar ficheros binarios en formatos est\xE1ndares, tanto para la clave p\xFAblica como para la privada.</p><p>Esto tiene la enorme ventaja de que se pueden utilizar las claves generadas con herramientas est\xE1ndar como openssl. Adem\xE1s, facilita la tarea ya que las claves p\xFAblica y privada para criptograf\xEDa asim\xE9trica son objetos compuestos.</p><p>::: info Codificaci\xF3n Base64 Base64 es un grupo de esquemas de codificaci\xF3n de binario a texto que representa los datos binarios mediante una cadena.</p><p>Los esquemas de codificaci\xF3n Base64 son com\xFAnmente usados cuando se necesita codificar datos binarios para que sean almacenados y transferidos sobre un medio dise\xF1ado para tratar con datos textuales. Esto es para asegurar que los datos se mantienen intactos y sin modificaciones durante la transmisi\xF3n.</p><p>Los valores codificados en Base64 como texto se muestran en filas de 76 caracteres como m\xE1ximo, para mejor legibilidad, y siguiendo convenciones habituales.</p><p>Para verlos en pantalla se a\xF1ade un salto de l\xEDnea despu\xE9s de cada grupo de 76 caracteres usando <code>replaceAll(&quot;(.{76})&quot;, &quot;$1\\n&quot;)</code>. :::</p><p>Las claves que se han guardado con el programa tienen las siguientes caracter\xEDsticas:</p><ul><li>La clave p\xFAblica se guarda en un fichero <code>clavepublica.der</code>, con el formato de la estructura <em>SubjectPublicKeyInfo</em> en formato <em>ASN.1</em> definido en el est\xE1ndar <em>X.509</em>, y con codificaci\xF3n <em>DER (binaria)</em>. Para eso se ha utilizado la clase codificadora <strong>X509EncodedKeySpec</strong>.</li><li>La clave privada se guarda en un fichero <code>claveprivada.pkcs8</code>, en formato <em>PKCS#8</em>, y con codificaci\xF3n <em>DER (binaria)</em>. Para eso se ha utilizado la clase codificadora <strong>PKCS8EncodedKeySpec</strong>.</li></ul><p>::: info Codificaciones por defecto Las codificaciones usadas en el programa coinciden con las codificacione por defecto que usan las clases PrivateKey y PublicKey, como se puede ver en los valores proporcionados por los m\xE9todos getFormat() y getEncoded(). :::</p><h2 id="_6-4-5-cifrado-y-descifrado-usando-un-par-de-claves" tabindex="-1">6.4.5. Cifrado y descifrado usando un par de claves</h2><p>Aunque ya hemos visto que las claves se pueden generar desde c\xF3digo, lo normal es que una vez hayamos generado un par de claves, estas se puedan reutilizar desde las aplicaciones para cifrar y descifrar informaci\xF3n.</p><p>Si hemos guardado las claves en archivos, el primer paso que tendremos que realizar es recuperar esas claves para poder realizar las operaciones criptogr\xE1ficas con ellas.</p><p>::: question Prueba de claves online Podemos probar las claves generadas con una herramienta online.</p><p><a href="https://www.devglan.com/online-tools/rsa-encryption-decryption" target="_blank" rel="noopener noreferrer">Online RSA tool</a></p><p>Prueba a copiar el contenido (en Base64) de las claves p\xFAblica y privada para hacer un cifrado y un descifrado de la informaci\xF3n.</p><p>Tambi\xE9n puedes probar a simular una firma digital, realizando el cifrado con la clave privada y el descifrado con la clave p\xFAblica. :::</p><p>Veamos un ejemplo de c\xF3mo se hace todo este proceso en Java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class U6S6_RsaKeyPairEncrypt {

    private static final int tamanoClaveAsimetrica = 1024;
    private static final String algoritmoClaveAsimetrica = &quot;RSA&quot;;
    private static final String ficheroClavePublica = &quot;claves/clavepublica.der&quot;;
    private static final String ficheroClavePrivada = &quot;claves/claveprivada.pkcs8&quot;;

    public static void main(String[] args) {
        try {
            //////////////////////////////////////////////////
            // CIFRADO
            //////////////////////////////////////////////////
            
            // Leemos la clave p\xFAblica de un archivo
            PublicKey clavePublica = leerClavePublica(ficheroClavePublica);

            // Preparamos la informaci\xF3n que queremos cifrar
            String textoEnClaro = &quot;Quiero cifrar este mensaje de prueba&quot;;
            byte[] mensajeEnClaro = textoEnClaro.getBytes(&quot;UTF-8&quot;);
            
            // Realizamos el proceso de cifrado con clave p\xFAblica
            // Los pasos son exactamente los mismos que con el cifrado sim\xE9trico
            Cipher cifrado = Cipher.getInstance(algoritmoClaveAsimetrica);
            cifrado.init(Cipher.ENCRYPT_MODE, clavePublica);
            byte[] mensajeCifrado = cifrado.doFinal(mensajeEnClaro);
            // Visualizamos el mensaje cifrado en modo texto
            MostrarMensajeBase64(mensajeCifrado);
            
            //////////////////////////////////////////////////
            // DESCIFRADO
            //////////////////////////////////////////////////
            
            // Leemos la clave privada de un archivo
            PrivateKey clavePrivada = leerClavePrivada(ficheroClavePrivada);

            // Realizamos el proceso de descifrado con clave privada
            // Los pasos son exactamente los mismos que con el cifrado sim\xE9trico
            // Cipher cifrado = Cipher.getInstance(algoritmoClaveAsimetrica);
            cifrado.init(Cipher.DECRYPT_MODE, clavePrivada);
            byte[] mensajeDescifrado = cifrado.doFinal(mensajeCifrado);
            // Visualizamos el mensaje descifrado
            System.out.println(&quot;Texto descifrado:\\n&quot; + new String(mensajeDescifrado, &quot;UTF-8&quot;));
                        
        } catch (UnsupportedEncodingException ex) {
            System.out.println(&quot;Codificaci\xF3n de caracteres UTF-8 no soportada&quot;);
        } catch (NoSuchAlgorithmException ex) {
            System.err.println(&quot;No se ha encontrado la implementaci\xF3n del algoritmo &quot; + algoritmoClaveAsimetrica + &quot; en ning\xFAn Provider&quot;);
        } catch (NoSuchPaddingException ex) {
            System.err.println(&quot;El relleno especificado para el algoritmo no est\xE1 permitido&quot;);
        } catch (InvalidKeyException ex) {
            System.err.println(&quot;Especificaci\xF3n de clave no v\xE1lida&quot;);
        } catch (IllegalBlockSizeException ex) {
            System.err.println(&quot;Tama\xF1o de bloque no v\xE1lido&quot;);
        } catch (BadPaddingException ex) {
            System.err.println(&quot;Excepci\xF3n con el relleno usado por el algoritmo&quot;);
        }
    }

    private static PublicKey leerClavePublica(String ficheroClave) {
        byte[] clavePublicaEncoded;

        // Leemos la informaci\xF3n del archivo
        try (FileInputStream publicKeyFile = new FileInputStream(ficheroClave)) {
            clavePublicaEncoded = publicKeyFile.readAllBytes();
        } catch (FileNotFoundException ex) {
            System.out.println(&quot;No se ha encontrado el archivo &quot; + ficheroClave + &quot; con la clave p\xFAblica.&quot;);
            return null;
        } catch (IOException ex) {
            System.out.println(&quot;Se ha producido un error de E/S accediendo al archivo &quot; + ficheroClave + &quot; de la clave p\xFAblica.&quot;);
            return null;
        }

        // Generamos la clave a partir del array de bytes le\xEDdos
        KeyFactory keyFactory;
        try {
            keyFactory = KeyFactory.getInstance(algoritmoClaveAsimetrica);
            X509EncodedKeySpec codificacionClavePublica = new X509EncodedKeySpec(clavePublicaEncoded);
            PublicKey clavePublica = keyFactory.generatePublic(codificacionClavePublica);

            // Devolvemos la clave p\xFAblica generada
            return clavePublica;
        } catch (NoSuchAlgorithmException ex) {
            System.err.println(&quot;No se ha encontrado la implementaci\xF3n del algoritmo &quot; + algoritmoClaveAsimetrica + &quot; en ning\xFAn Provider&quot;);
            return null;
        } catch (InvalidKeySpecException ex) {
            Logger.getLogger(U6S6_RsaKeyPairEncrypt.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    private static PrivateKey leerClavePrivada(String ficheroClave) {
        byte[] clavePrivadaEncoded;

        // Leemos la informaci\xF3n del archivo
        try (FileInputStream privateKeyFile = new FileInputStream(ficheroClave)) {
            clavePrivadaEncoded = privateKeyFile.readAllBytes();
        } catch (FileNotFoundException ex) {
            System.out.println(&quot;No se ha encontrado el archivo &quot; + ficheroClave + &quot; con la clave privada.&quot;);
            return null;
        } catch (IOException ex) {
            System.out.println(&quot;Se ha producido un error de E/S accediendo al archivo &quot; + ficheroClave + &quot; de la clave privada.&quot;);
            return null;
        }

        // Generamos la clave a partir del array de bytes le\xEDdos
        KeyFactory keyFactory;
        try {
            keyFactory = KeyFactory.getInstance(algoritmoClaveAsimetrica);
            PKCS8EncodedKeySpec codificacionClavePrivada = new PKCS8EncodedKeySpec(clavePrivadaEncoded);
            PrivateKey clavePrivada = keyFactory.generatePrivate(codificacionClavePrivada);

            // Devolvemos la clave p\xFAblica generada
            return clavePrivada;
        } catch (NoSuchAlgorithmException ex) {
            System.err.println(&quot;No se ha encontrado la implementaci\xF3n del algoritmo &quot; + algoritmoClaveAsimetrica + &quot; en ning\xFAn Provider&quot;);
            return null;
        } catch (InvalidKeySpecException ex) {
            Logger.getLogger(U6S6_RsaKeyPairEncrypt.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    private static void MostrarMensajeBase64(byte[] mensajeCifrado) {
        System.out.println(&quot;Mensaje cifrado visualizado como texto en Base64:&quot;);                
        System.out.println(Base64.getEncoder().encodeToString(mensajeCifrado).replaceAll(&quot;(.{76})&quot;, &quot;$1\\n&quot;));
    }    
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y esta es la salida proporcionada</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Mensaje cifrado visualizado como texto en Base64:
EV+7WrEf+4CYwckys9blk6DXnLHUm4i0k+4BIp3oNmPdo2skYY8bQsAhXToBx2gi/rMIK9wiJTH0
yg99jpyaLeUgtga8PxWx1plgvxohzO/lALkf5AFRUczZh8F5QvOXCi93v2ycZCZXq7QmZTopkEQh
ARSezD/1Al2UYPc2X68=

Texto descifrado:
Quiero cifrar este mensaje de prueba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning Cifrado siempre diferente, descifrado siempre igual El resultado de cifrar un mensaje con la misma clave p\xFAblica no siempre es igual, aunque al descifrar los mensajes con la clave privada siempre se obtiene el mensaje original.</p><p>Esto es debido a que, para aumentar la variabilidad (<strong>entrop\xEDa</strong>) del mensaje cifrado al mensaje que se cifra se le a\xF1ade una parte aleatoria (<strong>salt</strong>) que se descarta cuando se descifra. :::</p><p>En el c\xF3digo podemos observar c\xF3mo los procesos para cargar la clave desde un archivo usan las mismas clases que cuando se generaron, siendo el c\xF3digo muy parecido.</p><p>En cuanto al cifrado y descifrado se realiza con el <em>Engine Cipher</em> usando la misma secuencia de llamadas que con el cifrado sim\xE9trico.</p><h2 id="_6-2-3-cifrado-asimetrico-con-gnupg" tabindex="-1">6.2.3. Cifrado asim\xE9trico con GnuPG</h2><p>Con la suite GnuPG tambi\xE9n podemos generar pares de claves y cifrar y descifrar el contenido de los archivos usando diferentes algoritmos</p><p>::: info Algoritmos disponibles para GnuPG Para ver la lista de algoritmos disponibles tenemos que mostrar la ayuda del comando</p><blockquote><p>gpg --help</p></blockquote><p>y en la parte superior observamos la informaci\xF3n de los algoritmos disponibles para cada tipo de servicio. En concreto, de res\xFAmenes, en mi versi\xF3n instalada:</p><p>Clave p\xFAblica: RSA, ELG, DSA, ECDH, ECDSA, EDDSA :::</p><p>Para generar las claves, ejecutamos los siguientes comandos</p><p>TO-DO: Completar</p><p>Para cifrar y descifrar un archivo con las claves generadas, ejecutamos los siguientes comandos</p><p>TO-DO: Completar</p>`,104);function _(w,j){const s=l("DownloadPDF-component"),o=l("DocumentCover-component"),i=l("router-link");return v(),m("div",null,[a(s),a(o,{titulo:"6.4 Encriptaci\xF3n asim\xE9trica"}),g,e("nav",f,[e("ul",null,[e("li",null,[a(i,{to:"#_6-4-1-clave-publica-y-clave-privada"},{default:n(()=>[h]),_:1})]),e("li",null,[a(i,{to:"#_6-4-2-firma-digital"},{default:n(()=>[y]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#integridad"},{default:n(()=>[q]),_:1})]),e("li",null,[a(i,{to:"#autenticacion-y-no-repudio"},{default:n(()=>[C]),_:1})])])]),e("li",null,[a(i,{to:"#_6-4-3-certificados-digitales"},{default:n(()=>[E]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#claves-digitales"},{default:n(()=>[A]),_:1})]),e("li",null,[a(i,{to:"#infraestructura-de-clave-publica-pki"},{default:n(()=>[S]),_:1})])])]),e("li",null,[a(i,{to:"#_6-4-4-generacion-de-pares-de-claves"},{default:n(()=>[P]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#tipos-de-ficheros-para-certificados-digitales"},{default:n(()=>[x]),_:1})]),e("li",null,[a(i,{to:"#generacion-de-claves-desde-java"},{default:n(()=>[K]),_:1})])])]),e("li",null,[a(i,{to:"#_6-4-5-cifrado-y-descifrado-usando-un-par-de-claves"},{default:n(()=>[B]),_:1})]),e("li",null,[a(i,{to:"#_6-2-3-cifrado-asimetrico-con-gnupg"},{default:n(()=>[z]),_:1})])])]),D])}const Q=u(b,[["render",_],["__file","asymmetric-keys.html.vue"]]);export{Q as default};
