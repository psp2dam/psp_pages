import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,d as t,a as e,w as i,f as u,r,b as s}from"./app.6f7d6c20.js";const v={},m=e("h1",{id:"_4-2-auxiliary-classes-for-networking",tabindex:"-1"},"4.2 Auxiliary classes for networking",-1),h={class:"table-of-contents"},b=s("4.2.1. java.net.NetworkInterface"),p=s("4.2.2 java.net.InterfaceAddress"),f=s("4.2.3. java.net.InetAddress"),g=s("4.2.4 java.net.URL"),I=s("4.2.5 java.net.URLConnection"),w=u(`<h2 id="_4-2-1-java-net-networkinterface" tabindex="-1">4.2.1. java.net.NetworkInterface</h2><p>This class represents network interface, both software as well as hardware, its name, list of IP addresses assigned to it and all related information. It can be used in cases when we want to specifically use a particular interface for transmitting our packet on a system with multiple NICs.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/NetworkInterface.html" target="_blank" rel="noopener noreferrer">java.net.InetAddress specification</a></p></blockquote><p>::: info What is a Network Interface? A network interface can be thought of as a point at which your computer connects to the network. It is not necessarily a piece of hardware but can also be implemented in a software. For example a loopback interface which is used for testing purposes. :::</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public static Enumeration getNetworkInterfaces()</td><td>Returns all the network interfaces on the system.</td></tr><tr><td>public List getInterfaceAddresses()</td><td>Returns a list of all interface addresses on this interface.</td></tr><tr><td>public Enumeration getInetAddresses()</td><td>Returns an enumeration of all InetAddresses bound to this network interface, if security manager allows it.</td></tr><tr><td>public String getName()</td><td>Returns the name of this network interface.</td></tr><tr><td>public int getIndex()</td><td>Returns the index assigned to this network interface by the system. Indexes can be used in place of long names to refer to any interface on the device.</td></tr><tr><td>public String getDisplayName()</td><td>This method returns the name of network interface in a readable string format.</td></tr><tr><td>public static NetworkInterface getByName(String name)</td><td>Finds and returns the network interface with the specified name, or null if none exists.</td></tr><tr><td>public static NetworkInterface getByIndex(int index)</td><td>Performs similar function as the previous function with index used as search parameter instead of name.</td></tr><tr><td>public static NetworkInterface getByInetAddress(InetAddress addr)</td><td>This method is widely used as it returns the network interface the specified inetaddress is bound to. If an InetAddress is bound to multiple interfaces, any one of the interfaces may be returned.</td></tr><tr><td>public boolean isUp()</td><td>Returns a boolean value indicating if this network interface is up and running.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Java program to illustrate various java.net.NetworkInterface class methods.

public class NetworkInterfaceExample
{
    public static void main(String[] args) throws SocketException,
                                                UnknownHostException
    {

        // getNetworkInterfaces() returns a list of all interfaces
        // present in the system.
        ArrayList&lt;NetworkInterface&gt; interfaces = Collections.list(
                                            NetworkInterface.getNetworkInterfaces());

        System.out.println(&quot;Information about present Network Interfaces...\\n&quot;);
        for (NetworkInterface iface : interfaces)
        {
            // isUp() method used for checking whether the interface in process
            // is up and running or not.
            if (iface.isUp())
            {
                // getName() method
                System.out.println(&quot;Interface Name: &quot; + iface.getName());

                // getDisplayName() method
                System.out.println(&quot;Interface display name: &quot; + iface.getDisplayName());

                // getHardwareAddress() method
                System.out.println(&quot;Hardware Address: &quot; +
                                Arrays.toString(iface.getHardwareAddress()));

                // getParent() method
                System.out.println(&quot;Parent: &quot; + iface.getParent());

                // getIndex() method
                System.out.println(&quot;Index: &quot; + iface.getIndex());
                // Interface addresses of the network interface
                System.out.println(&quot;\\tInterface addresses: &quot;);

                // getInterfaceAddresses() method
                for (InterfaceAddress addr : iface.getInterfaceAddresses())
                {
                    System.out.println(&quot;\\t\\t&quot; + addr.getAddress().toString());
                }
                // Interface addresses of the network interface
                System.out.println(&quot;\\tInetAddresses associated with this interface: &quot;);

                // getInetAddresses() method returns list of all
                // addresses currently bound to this interface
                Enumeration&lt;InetAddress&gt; en = iface.getInetAddresses();
                while (en.hasMoreElements())
                {
                    System.out.println(&quot;\\t\\t&quot; + en.nextElement().toString());
                }

                // getMTU() method
                System.out.println(&quot;\\tMTU: &quot; + iface.getMTU());

                // getSubInterfaces() method
                System.out.println(&quot;\\tSubinterfaces: &quot; +
                                Collections.list(iface.getSubInterfaces()));

                // isLoopback() method
                System.out.println(&quot;\\tis loopback: &quot; + iface.isLoopback());

                // isVirtual() method
                System.out.println(&quot;\\tis virtual: &quot; + iface.isVirtual());

                // isPointToPoint() method
                System.out.println(&quot;\\tis point to point: &quot; + iface.isPointToPoint());

                // supportsMulticast() method
                System.out.println(&quot;Supports Multicast: &quot; + iface.supportsMulticast());

            }
        }

        // getByIndex() method returns network interface
        // with the specified index
        NetworkInterface nif = NetworkInterface.getByIndex(1);

        // toString() method is used to display textual
        // information about this network interface
        System.out.println(&quot;Network interface 1: &quot; + nif.toString());

        // getByName() method returns network interface
        // with the specified name
        NetworkInterface nif2 = NetworkInterface.getByName(&quot;eth0&quot;);
        InetAddress ip = InetAddress.getByName(&quot;localhost&quot;);

        // getbyInetAddress() method
        NetworkInterface nif3 = NetworkInterface.getByInetAddress(ip);
        System.out.println(&quot;\\nlocalhost associated with: &quot; + nif3);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-2-java-net-interfaceaddress" tabindex="-1">4.2.2 java.net.InterfaceAddress</h2><p>This class represents a network interface address. Every device that has an IP address has an IP address on the network interface.</p><p>In short it&#39;s an IP address, a subnet mask and a broadcast address when the address is an IPv4 one. An IP address and a network prefix length in the case of IPv6 address.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InterfaceAddress.html" target="_blank" rel="noopener noreferrer">java.net.InterfaceAddress specification</a></p></blockquote><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public InetAddress getAddress()</td><td>Returns an InetAddress for this address.</td></tr><tr><td>public InetAddress getBroadcast()</td><td>Returns the InetAddress for the broadcast address for this interface address. As only IPv4 addresses have broadcast addresses, null would be returned on using an IPv6 address.</td></tr><tr><td>public short getNetworkPrefixLength()</td><td>Returns the prefix length for this interface address, i.e. subnet mask for this address.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Java program to illustrate methods of java.net.InterfaceAddress class

public class InterfaceaddressExample
{
    public static void main(String[] args) throws SocketException
    {
        // Modify according to your system
        NetworkInterface nif = NetworkInterface.getByIndex(1);
        List&lt;InterfaceAddress&gt; list = nif.getInterfaceAddresses();

        for (InterfaceAddress iaddr : list)
        {
            // getAddress() method
            System.out.println(&quot;getAddress() : &quot; + iaddr.getAddress());

            // getBroadcast() method
            System.out.println(&quot;getBroadcast() : &quot; + iaddr.getBroadcast());

            // getNetworkPrefixLength() method
            System.out.println(&quot;PrefixLength : &quot; + iaddr.getNetworkPrefixLength());

            // hashCode() method
            System.out.println(&quot;Hashcode : &quot; + iaddr.hashCode());

            // toString() method
            System.out.println(&quot;toString() : &quot; + iaddr.toString());
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-3-java-net-inetaddress" tabindex="-1">4.2.3. java.net.InetAddress</h2><p>Java InetAddress class represents an IP address. The java.net.InetAddress class provides methods to get the IP of any host name for example www.google.com, www.facebook.com, etc.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetAddress.html" target="_blank" rel="noopener noreferrer">java.net.InetAddress specification</a></p></blockquote><p>An instance of InetAddress represents the IP address with its corresponding host name. There are two types of addresses: Unicast and Multicast. The Unicast is an identifier for a single interface whereas Multicast is an identifier for a set of interfaces.</p><p>::: warning Local Name Resolver (hosts file) You should know that DNS translates domain names like into IP addresses. But did you know that there\u2019s a file on your system that can override that? It\u2019s called your hosts file and lets you map specific domain names to an IP address of your choosing. Your HOSTS file only affects your computer, so you can use it to create custom URLs for IP addresses on your network, or you can use it to redirect certain websites.</p><p>As you can imagine, editing the HOSTS file can easily break your internet if it\u2019s modified incorrectly or maliciously. So, it\u2019s not particularly easy for a normal user to edit. This is a good thing.</p><ul><li>Windows</li></ul><p>The HOSTS file is normally stored in a plain text file in the Windows System folder.</p><p>Hit the start menu or press the Windows key and start typing Notepad.</p><p>Right-click Notepad and choose Run as administrator.</p><p>In Notepad, click File then Open\u2026 In the File name field, paste the following path in:</p><p>c:\\Windows\\System32\\Drivers\\etc\\hosts</p><p>Now you\u2019ll be able to edit and save changes to your HOSTS file.</p><p>To map a domain, add a line based on the examples in the HOSTS file.</p><ul><li>OS X &amp; GNU/Linux</li></ul><p>The file is in /etc/hosts and you should edit it with administrator privileges. :::</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public static InetAddress getByName(String host) throws UnknownHostException</td><td>It returns the instance of InetAddress containing LocalHost IP and name.</td></tr><tr><td>public static InetAddress getLocalHost() throws UnknownHostException</td><td>It returns the instance of InetAdddress containing local host name and address.</td></tr><tr><td>public String getHostName()</td><td>It returns the host name of the IP address.</td></tr><tr><td>public String getHostAddress()</td><td>It returns the IP address in string format.</td></tr><tr><td>public boolean isReachable(int timeout)</td><td>This method tests whether that address is reachable.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
class InetAddressExample {
    public static void main(String[] args)
        throws UnknownHostException
    {
        // To get and print InetAddress of Local Host
        InetAddress address1 = InetAddress.getLocalHost();
        System.out.println(&quot;InetAddress of Local Host : &quot;
                        + address1);

        // To get and print InetAddress of Named Host
        InetAddress address2
            = InetAddress.getByName(&quot;45.22.30.39&quot;);
        System.out.println(&quot;InetAddress of Named Host : &quot;
                        + address2);

        // To get and print ALL InetAddresses of Named Host
        InetAddress address3[]
            = InetAddress.getAllByName(&quot;172.19.25.29&quot;);
        for (int i = 0; i &lt; address3.length; i++) {
            System.out.println(
                &quot;ALL InetAddresses of Named Host : &quot;
                + address3[i]);
        }

        // To get and print InetAddresses of
        // Host with specified IP Address
        byte IPAddress[] = { 125, 0, 0, 1 };
        InetAddress address4
            = InetAddress.getByAddress(IPAddress);
        System.out.println(
            &quot;InetAddresses of Host with specified IP Address : &quot;
            + address4);

        // To get and print InetAddresses of Host
        // with specified IP Address and hostname
        byte[] IPAddress2
            = { 105, 22, (byte)223, (byte)186 };
        InetAddress address5 = InetAddress.getByAddress(
            &quot;gfg.com&quot;, IPAddress2);
        System.out.println(
            &quot;InetAddresses of Host with specified IP Address and hostname : &quot;
            + address5);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Host seeker (U4S4_HostSeeker) Your computer is connected to a LAN (Local Area Network) and probably it is using private IP addresses.</p><p>Addresses can be one of class C (192.168.X.Y), class B (172.17.X.Y) or class A (10.X.Y.Z). That depends on the network mask or network prefix used for the network interface configuration.</p><p>You can also check it using Linux <strong>ifconfig</strong> command or Windows <strong>ipconfig</strong> command.</p><p>Write a program to know which hosts are up and running in your network, that is, which hosts are reachable from you computer by using one of the interfaces.</p><p>First, you can write specific code to test your network. Once your app is working, try to make it generic and reusable by making it work in any network, detecting the network prefix and checking all the possible IPs in a network.</p><p>The app will get a Network interface card name as argument and will check only the IPv4 addresses attached to that interface. We can know if an IP is IPv4 or IPv6 using the operator <code>\xECnstanceof</code> with Inet4Address and Inet6Address subclasses of InetAddress :::</p><p>::: details Code for the example</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    // Code not visible yet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><h2 id="_4-2-4-java-net-url" tabindex="-1">4.2.4 java.net.URL</h2><p>The Java URL class represents an URL. URL is an acronym for Uniform Resource Locator.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/URL.html" target="_blank" rel="noopener noreferrer">java.net.URL specification</a></p></blockquote><p>It points to a resource on the World Wide Web. For example:</p><blockquote><p>http://psp2dam.github.io/psp_pages/</p></blockquote><p>A URL contains many information:</p><ul><li><strong>Protocol</strong>: In this case, <code>http</code> is the protocol.</li><li><strong>Server name or IP Address</strong>: In this case, <code>psp2dam.github.io</code> is the server name.</li><li><strong>Port Number</strong>: It is an optional attribute. Many times it is derived from the protocol, by chosing its standard default port. In the example the port is missing but it is set to <code>80</code>.</li><li><strong>File Name or directory name</strong>: In this case, only the path (directory) is specified in the URL. Depending on the server configuration the file name can take a default value. In the example <code>index.html</code> is the file name.</li></ul><table><thead><tr><th>Constructor</th><th>Description</th></tr></thead><tbody><tr><td>URL(String spec)</td><td>Creates an instance of a URL from the String representation.</td></tr><tr><td>URL(String protocol, String host, int port, String file)</td><td>Creates an instance of a URL from the given protocol, host, port number, and file.</td></tr><tr><td>URL(String protocol, String host, int port, String file, URLStreamHandler handler)</td><td>Creates an instance of a URL from the given protocol, host, port number, file, and handler.</td></tr><tr><td>URL(String protocol, String host, String file)</td><td>Creates an instance of a URL from the given protocol name, host name, and file name.</td></tr><tr><td>URL(URL context, String spec)</td><td>Creates an instance of a URL by parsing the given spec within a specified context.</td></tr><tr><td>URL(URL context, String spec, URLStreamHandler handler)</td><td>Creates an instance of a URL by parsing the given spec with the specified handler within a given context.</td></tr></tbody></table><p>The java.net.URL class provides many methods. The important methods of URL class are given below.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>public String getProtocol()</td><td>it returns the protocol of the URL.</td></tr><tr><td>public String getHost()</td><td>it returns the host name of the URL.</td></tr><tr><td>public String getPort()</td><td>it returns the Port Number of the URL.</td></tr><tr><td>public String getFile()</td><td>it returns the file name of the URL.</td></tr><tr><td>public String getAuthority()</td><td>it returns the authority of the URL.</td></tr><tr><td>public String toString()</td><td>it returns the string representation of the URL.</td></tr><tr><td>public String getQuery()</td><td>it returns the query string of the URL.</td></tr><tr><td>public String getDefaultPort()</td><td>it returns the default port of the URL.</td></tr><tr><td>public URLConnection openConnection()</td><td>it returns the instance of URLConnection i.e. associated with this URL.</td></tr><tr><td>public InputStream openStream()</td><td>it opens a connection to this URL and returns an InputStream for reading from that connection.</td></tr><tr><td>public boolean equals(Object obj)</td><td>it compares the URL with the given object.</td></tr><tr><td>public Object getContent()</td><td>it returns the content of the URL.</td></tr><tr><td>public String getRef()</td><td>it returns the anchor or reference of the URL.</td></tr><tr><td>public URI toURI()</td><td>it returns a URI of the URL.</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>//URLDemo.java  
public static void main(String[] args) throws MalformedURLException{  

    URL url=new URL(&quot;http://psp2dam.github.io/psp_pages&quot;);  
  
    System.out.println(&quot;Protocol: &quot;+url.getProtocol());  
    System.out.println(&quot;Host Name: &quot;+url.getHost());  
    System.out.println(&quot;Port Number: &quot;+url.getPort());  
    System.out.println(&quot;File Name: &quot;+url.getFile());  
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let us see another example URL class in Java.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>//URLDemo.java  
public static void main(String[] args){    
    URL url=new URL(&quot;https://www.google.com/search?q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8&quot;);    
        
    System.out.println(&quot;Protocol: &quot;+url.getProtocol());    
    System.out.println(&quot;Host Name: &quot;+url.getHost());    
    System.out.println(&quot;Port Number: &quot;+url.getPort());    
    System.out.println(&quot;Default Port Number: &quot;+url.getDefaultPort());    
    System.out.println(&quot;Query String: &quot;+url.getQuery());    
    System.out.println(&quot;Path: &quot;+url.getPath());    
    System.out.println(&quot;File: &quot;+url.getFile());      
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh"><pre class="language-bash"><code>Protocol: https
Host Name: www.google.com
Port Number: -1
Default Port Number: 443
Query String: q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8
Path: /search
File: /search?q=javatpoint&amp;oq=javatpoint&amp;sourceid=chrome&amp;ie=UTF-8
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div><h2 id="_4-2-5-java-net-urlconnection" tabindex="-1">4.2.5 java.net.URLConnection</h2><p>The Java URLConnection class represents a communication link between the URL and the application. It can be used to read and write data to the specified resource referred by the URL.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/URLConnection.html" target="_blank" rel="noopener noreferrer">java.net.URLConnection specification</a></p></blockquote><p>URLConnection is an abstract class. The two subclasses <code>HttpURLConnection</code> and <code>JarURLConnection</code> makes the connection between the client Java program and URL resource on the internet.</p><p>With the help of URLConnection class, a user can read and write to and from any resource referenced by an URL object. Once a connection is established and the Java program has an URLConnection object, we can use it to read or write or get further information like content length, etc.</p><p>The URLConnection class provides many methods. We can display all the data of a webpage by using the getInputStream() method. It returns all the data of the specified URL in the stream that can be read and displayed.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>void connect()</td><td>It opens a communications link to the resource referenced by this URL, if such a connection has not already been established.</td></tr><tr><td>Object getContent()</td><td>It retrieves the contents of the URL connection.</td></tr><tr><td>String getContentEncoding()</td><td>It returns the value of the content-encoding header field.</td></tr><tr><td>int getContentLength()</td><td>It returns the value of the content-length header field.</td></tr><tr><td>long getContentLengthLong()</td><td>It returns the value of the content-length header field as long.</td></tr><tr><td>String getContentType()</td><td>It returns the value of the date header field.</td></tr><tr><td>long getDate()</td><td>It returns the value of the date header field.</td></tr><tr><td>boolean getDoInput()</td><td>It returns the value of the URLConnection&#39;s doInput flag.</td></tr><tr><td>boolean getDoInput()</td><td>It returns the value of the URLConnection&#39;s doOutput flag.</td></tr><tr><td>String getHeaderField(int n)</td><td>It returns the value of nth header field</td></tr><tr><td>String getHeaderField(String name)</td><td>It returns the value of the named header field.</td></tr><tr><td>String getHeaderFieldKey(int n)</td><td>It returns the key for the nth header field.</td></tr><tr><td>Map&lt;String, List&lt;String&gt;&gt; getHeaderFields()</td><td>It returns the unmodifiable Map of the header field.</td></tr><tr><td>long getIfModifiedSince()</td><td>It returns the value of the object&#39;s ifModifiedSince field.</td></tr><tr><td>InputStream getInputStream()</td><td>It returns an input stream that reads from the open condition.</td></tr><tr><td>long getLastModified()</td><td>It returns the value of the last-modified header field.</td></tr><tr><td>OutputStream getOutputStream()</td><td>It returns an output stream that writes to the connection.</td></tr><tr><td>URL getURL()</td><td>It returns the value of the URLConnection&#39;s URL field.</td></tr><tr><td>void setDoInput(boolean doinput)</td><td>It sets the value of the doInput field for this URLConnection to the specified value.</td></tr><tr><td>void setDoOutput(boolean dooutput)</td><td>It sets the value of the doOutput field for the URLConnection to the specified value.</td></tr></tbody></table><p>::: info How to get the object of URLConnection Class The openConnection() method of the URL class returns the object of URLConnection class. :::</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// URLConnectionExample
public static void main(String[] args) throws MalformedURLException, IOException{

    // Creating an object of URL class

    // Custom input URL is passed as an argument
    URL u = new URL(&quot;www.google.com&quot;);

    // Creating an object of URLConnection class to
    // communicate between application and URL
    URLConnection urlconnect = u.openConnection();

    // Creating an object of InputStream class
    // for our application streams to be read
    InputStream stream
        = urlconnect.getInputStream();

    BufferedReader in =  
        new BufferedReader(
            new InputStreamReader(stream));
    // Till the time URL is being read
    String line;
    while ((line = in.readLine()) != null) {

        // Continue printing the stream
        System.out.println(line);
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question Images downloader (U4S7_ImagesDownloader) Create an application to download images from a URL. The image URL must be given as an application argument and the image has to be saved in a images folder on the root of your project. :::</p><p>::: details Code for the example</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    // Code not visible yet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>`,66);function y(S,k){const d=r("DownloadPDF-component"),a=r("DocumentCover-component"),n=r("router-link");return l(),c("div",null,[t(d),t(a,{titulo:"4.2 Auxiliary classes for networking"}),m,e("nav",h,[e("ul",null,[e("li",null,[t(n,{to:"#_4-2-1-java-net-networkinterface"},{default:i(()=>[b]),_:1})]),e("li",null,[t(n,{to:"#_4-2-2-java-net-interfaceaddress"},{default:i(()=>[p]),_:1})]),e("li",null,[t(n,{to:"#_4-2-3-java-net-inetaddress"},{default:i(()=>[f]),_:1})]),e("li",null,[t(n,{to:"#_4-2-4-java-net-url"},{default:i(()=>[g]),_:1})]),e("li",null,[t(n,{to:"#_4-2-5-java-net-urlconnection"},{default:i(()=>[I]),_:1})])])]),w])}const U=o(v,[["render",y],["__file","urls.html.vue"]]);export{U as default};
