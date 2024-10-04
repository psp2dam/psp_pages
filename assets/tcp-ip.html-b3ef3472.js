import{_ as c,a as d,b as p,c as h,d as m,e as u}from"./5-Graphic-UDP-Vs-TCP-be6b3666.js";import{_ as f,r as a,o as b,c as g,d as o,a as e,w as s,b as t,f as w}from"./app-59a2b8c9.js";const y="/psp_pages/assets/7-TCP-vs-UDP-differences-c9c2e9d5.png",v={},P=e("h1",{id:"_4-1-tcp-ip-protocol-stack",tabindex:"-1"},"4.1 TCP IP protocol stack",-1),_={class:"table-of-contents"},k=e("h2",{id:"_4-1-1-tcp-ip-layers",tabindex:"-1"},"4.1.1. TCP/IP Layers",-1),T=e("p",null,"The TCP/IP Stack, or the internet protocol suite, is a set of communication protocols used by the Internet or similar networks.",-1),I=e("p",null,"TCP/IP is the world's most widely-used non-proprietary protocol suite because it enables computers using diverse hardware and software platforms, on different types of networks, to communicate. The protocols work equally well in both LANs and WANs.",-1),C=e("p",null,[t("TCP/IP is a collection of protocols named after its two best-known and most important protocols, the "),e("code",null,"Transmission Control Protocol (TCP)"),t(" and the "),e("code",null,"Internet Protocol (IP)"),t(". As well as these relatively low-level protocols, TCP/IP includes several higher level protocols that facilitate common applications such as electronic mail, terminal emulation, and file transfer.")],-1),D={class:"custom-container info"},x=e("p",{class:"custom-container-title"},"Protocol RFC",-1),q=e("p",null,"Each Internet protocol, together with any subsequent amendments, is described in a document known as a Request For Comments (RFC).",-1),A={href:"http://www.ietf.org/rfc.html",target:"_blank",rel:"noopener noreferrer"},S=w('<p>It is called a <strong>stack</strong> because it is typically designed as a hierarchy of layers, each supporting the one above it and using those below it. Each layer solves a specific set of problems involving the transmission of data and provides well-defined services to the layers above it.</p><p>The TCP/IP model has four layers. From lowest to highest, these are the link layer, the internet layer, the transport layer, and the application layer, as shown below.</p><p><img src="'+c+'" alt="TCP/IP real communication flow"></p><ul><li>The <strong>link layer</strong> provides the interface with the underlying network hardware and physical wired or wireless connection media.</li><li>The <strong>internetwork layer</strong> provides addressing and routing functions that ensures messages are delivered to their destination. Internet Protocol (IP) is the most important protocol in this layer and probably on the whole stack.</li><li>The <strong>transport layer</strong> oversees the end-to-end transfer of data, and can handle a number of data streams simultaneously. The main transport layer protocol is <code>Transmission Control Protocol (TCP)</code>, which provides a reliable, connection-oriented service. <code>User Datagram Protocol (UDP)</code> provides an unreliable, connectionless service.</li><li>An <strong>application layer</strong> protocol is specific to a particular type of application (e.g. file transfer, electronic mail, network management etc.) and is sometimes embodied within the application&#39;s client software, although it could also be implemented within the operating system software. The interface between an application layer protocol and a transport layer protocol is defined with reference to <code>port numbers</code> and <code>sockets</code>.</li></ul><p><img src="'+d+'" alt="TCP/IP logical communication flow"></p><h2 id="_4-1-2-addresses-and-ports-sockets" tabindex="-1">4.1.2. Addresses and ports - Sockets</h2><h3 id="ip-addresses" tabindex="-1">IP Addresses</h3><p>Each host on a TCP/IP network is assigned a unique IP address consisting of a network number and a host number. The network number identifies a specific network. The host number identifies a host on a network and is assigned by the network administrator.</p><p>Ipv4 IP address are 32-bit addresses. The IP address is grouped into four binary octets (an octet is a group of eight bits) and is represented using dotted decimal notation. The minimum value for an octet is 0, and the maximum value is 255.</p><blockquote><p>192.168.0.100</p><p>127.0.0.1</p><p>10.1.100.1</p></blockquote><p>IPv6 addresses are typically composed of a 64-bit network prefix, and a 64-bit host part. IPv6 addresses are normally written as eight groups of four hexadecimal numbers. A group consisting solely of zeros can be omitted. Leading zeros in a group can also be omitted.</p><p>So the addresses below are all valid and equivalent to each other</p><blockquote><p>2001:0db8:0000:0000:0000:0000:1428:57ab</p><p>2001:0db8:0000:0000:0000::1428:57ab</p><p>2001:0db8:0:0:0:0:1428:57ab</p><p>2001:0db8:0:0::1428:57ab</p><p>2001:0db8::1428:57ab</p><p>2001:db8::1428:57ab</p></blockquote><p><img src="'+p+'" alt="Routing"></p><h3 id="ports" tabindex="-1">Ports</h3><p>An application process running on one computer that wants to communicate with an application process running on another computer identifies itself using a 16-bit port number, which is subsequently used by the transport layer protocol (TCP or UDP) to deliver incoming messages.</p><p>Port numbers go from 0 to 65535, and they are grouped in three ranges</p><table><thead><tr><th>Port group</th><th>Port range</th><th>Description</th></tr></thead><tbody><tr><td>Well know ports or system ports</td><td>0 - 1023</td><td>Used by standard protocols and services</td></tr><tr><td>Registered ports</td><td>1024- 49151</td><td>Reserved by companies and organizations for their own services</td></tr><tr><td>Ephemeral ports</td><td>49152 - 65535</td><td>For free use by clients and servers</td></tr></tbody></table><p>Common server applications such as Telnet and FTP use one or more of the well known port numbers (these range between 1 and 1023). Most server applications only use one port, although some (like FTP) use two. The use of a specific port number by server applications allows the client process to send a request to a server without having to first find out which port is being used by the server application.</p><blockquote><p>HTTP requests, for example, are addressed by default to port 80 on the server.</p></blockquote><p>The clients themselves do not need to use a well known port, since they are initiating the communication. A client process is dynamically allocated a port number (in the range 1024 to 65535) by the client operating system. This number is subsequently included in all datagrams sent to the server.</p><h3 id="sockets" tabindex="-1">Sockets</h3><p>A <code>socket</code> is essentially an addressable end point in a communication between two processes, and consists of a <strong>unique combination of IP address, port number and transport layer protocol (usually TCP)</strong>.</p><p>When a client application wishes to communicate with a server application, the operating system creates a socket which is then used by the client application to receive incoming data from the server. The unique combination of transport protocol, IP address and port number allows the communication end point to be addressed by a process running on a remote server, and ensures that data is delivered to the process for which it is intended.</p><p>The server application will have its own socket for communicating with the client, and a connection is established between client and server using the two socket addresses. The applications exchange information by writing to, or reading from, the sockets they have created.</p><p>The connection used by a client process consists of two sockets, one at each end of the connection. The connection can thus be identified by a unique combination of four numbers - the source and destination IP addresses, together with the source and destination port numbers.</p><p>It is possible for several client applications running on different computers to connect to the same destination socket on a server. So there is no confusion as to which computer a datagram is destined for, even if the source and destination ports are the same in each case.</p><p>Using sockets, it is even possible for several client applications running on the same computer to connect to the same destination socket on a server. Datagrams sent to the client by the server contain the socket address for each client process, which includes the client process&#39;s individual port number, so there is no confusion as to which process a datagram is bound for.</p><p><img src="'+h+'" alt="TCP/IP logical communication flow"></p><p>As the real communication flow goes from one layer to the next or previous one, applications on each layer are abstracted from the underlying layers, so their communications flows to the same layer on the other side. In the TCP/IP stack different pieces of information are managed at each level as shown in the previous diagram.</p><p><img src="'+m+'" alt="TCP/IP logical communication flow"></p><p>As stated before, sockets are the bridge between application layer and transport layer. That&#39;s the point where our applications are going to be developed and run, giving service to higher level protocols.</p><h2 id="_4-1-3-tcp-vs-udp" tabindex="-1">4.1.3 TCP vs UDP</h2><p>The <code>Transmission Control Protocol (TCP)</code> is a widely used connection-oriented transport layer protocol that provides reliable transfer of data between two end points, and includes mechanisms to handle flow-control, segmentation, error recovery, and multiplexing.</p><p>The TCP transport service offers the following features:</p><ul><li>Full duplex communication: both ends of a connection can transmit simultaneously</li><li>Timing: timers are used to ensure that data is transmitted in a timely fashion</li><li>Sequencing: message blocks are given sequence numbers to enable messages to be reassembled in the correct order before being passed to the application layer protocols on the destination computer</li><li>Flow control: the flow of data is regulated using buffers and windows</li><li>Error handling: checksums are provided to enable transmission errors to be detected and dealt with</li></ul><p><img src="'+u+'" alt="TCP/IP logical communication flow"></p><p>The <code>User Datagram Protocol (UDP)</code> is an unreliable, connectionless protocol that works at the transport layer of TCP/IP, and provides a datagram delivery service to applications with a minimum of overhead. UDP provides a very simple interface between the application layer and the internetwork layer.</p><p>UDP does not provide any guarantee of delivery, nor does it provide error recovery or flow control. No connection is established, and hence no handshaking procedure is required. Packets may arrive out of order, not arrive at all, or be duplicated.</p><p>UDP is the transport protocol for a variety of application-layer protocols, including Simple Network Management Protocol (SNMP), Dynamic Host Configuration Protocol (DHCP), Routing Information Protocol (RIP), and the Domain Name System (DNS), as well as streaming media applications such as Voice over IP (VoIP).</p><p><img src="'+y+'" alt="TCP/IP logical communication flow"></p>',41);function U(F,N){const r=a("DownloadPDF-component"),i=a("DocumentCover-component"),n=a("router-link"),l=a("ExternalLinkIcon");return b(),g("div",null,[o(r),o(i,{titulo:"4.1 TCP IP protocol stack"}),P,e("nav",_,[e("ul",null,[e("li",null,[o(n,{to:"#_4-1-1-tcp-ip-layers"},{default:s(()=>[t("4.1.1. TCP/IP Layers")]),_:1})]),e("li",null,[o(n,{to:"#_4-1-2-addresses-and-ports-sockets"},{default:s(()=>[t("4.1.2. Addresses and ports - Sockets")]),_:1}),e("ul",null,[e("li",null,[o(n,{to:"#ip-addresses"},{default:s(()=>[t("IP Addresses")]),_:1})]),e("li",null,[o(n,{to:"#ports"},{default:s(()=>[t("Ports")]),_:1})]),e("li",null,[o(n,{to:"#sockets"},{default:s(()=>[t("Sockets")]),_:1})])])]),e("li",null,[o(n,{to:"#_4-1-3-tcp-vs-udp"},{default:s(()=>[t("4.1.3 TCP vs UDP")]),_:1})])])]),k,T,I,C,e("div",D,[x,q,e("p",null,[t("A list of RFCs is available at: "),e("a",A,[t("http://www.ietf.org/rfc.html"),o(l)]),t(".")])]),S])}const L=f(v,[["render",U],["__file","tcp-ip.html.vue"]]);export{L as default};
