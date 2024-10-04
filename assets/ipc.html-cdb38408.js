import{_ as p,r as a,o as d,c,d as s,a as e,w as n,b as t,f as u}from"./app-59a2b8c9.js";const h={},m=e("h1",{id:"_2-1-interprocess-communication",tabindex:"-1"},"2.1 Interprocess communication",-1),y={class:"table-of-contents"},g=u(`<p>Interprocess communication (IPC) is one of the main features of operating systems. In this section, we will focus on the communication between processes that are on the same device.</p><h2 id="_2-1-1-communication-through-i-o" tabindex="-1">2.1.1. Communication through I/O</h2><p>Communication between processes can be done in many ways, but one of the simplest and most common is communication through standard input and output.</p><div class="custom-container info"><p class="custom-container-title">I/O in Java</p><p>In Java, communication through standard input and output is done through standard input and output streams, <code>System.in</code> and <code>System.out</code> respectively.</p></div><p>Every process has three standard input and output streams that can be used for communication with other processes. These streams are:</p><ul><li><strong>stdin</strong> (standard input): where the process receives data. By default, it corresponds to the keyboard and the file identifier associated with it is 0.</li><li><strong>stdout</strong> (standard output): where the process sends data. By default, it corresponds to the console and the file identifier associated with it is 1.</li><li><strong>stderr</strong> (standard error output): where the process sends error messages. By default, it corresponds to the console and the file identifier associated with it is 2.</li></ul><p>A relatively simple IPC mechanism is the communication of processes through the redirection of standard inputs and outputs to/from other sources.</p><div class="custom-container warning"><p class="custom-container-title">I/O redirection</p><p>The redirection of standard input and output can be done on the command line of UNIX and Windows systems. In Java, it can be done using the <code>ProcessBuilder</code> class that we will see in the next section of the unit.</p></div><h3 id="standard-input-redirection" tabindex="-1">Standard input redirection</h3><p>Standard input redirection can be done using the <code>&lt;</code> operator in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&lt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">input.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the previous example, the <code>MyClass</code> program receives standard input from the <code>input.txt</code> file instead of from the keyboard.</p><blockquote><p>When standard input is redirected, the program does not have to do anything special to read from a file instead of from the keyboard. The operating system takes care of redirecting the standard input of the program to the file that is indicated.</p></blockquote><h3 id="standard-output-redirection" tabindex="-1">Standard output redirection</h3><p>Standard output redirection can be done using the <code>&gt;</code> and <code>&gt;&gt;</code> operators in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">output.txt</span></span>
<span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">output2.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In the previous example, the standard output of the <code>MyClass</code> program is redirected to the <code>output.txt</code> file instead of to the console. If the <code>output.txt</code> file does not exist, it is created, and if the file already exists, its value is overwritten.</p><p>If the operator is <code>&gt;&gt;</code>, the output is added to the end of the file instead of overwriting it.</p><blockquote><p>When standard output is redirected, the program does not have to do anything special to write to a file instead of to the console. The operating system takes care of redirecting the standard output of the program to the file that is indicated.</p></blockquote><h3 id="standard-error-output-redirection" tabindex="-1">Standard error output redirection</h3><p>Standard error output redirection can be done using the <code>2&gt;</code> operator in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">2&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">error.txt</span></span>
<span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">2&gt;&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">error2.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In the previous example, the standard error output of the <code>MyClass</code> program is redirected to the <code>error.txt</code> file instead of to the console.</p><p>If the operator is <code>2&gt;&gt;</code>, the error output is added to the end of the file instead of overwriting it.</p><blockquote><p>When the error output is redirected, the program does not have to do anything special to write to a file instead of to the console. The operating system takes care of redirecting the error output of the program to the file that is indicated.</p></blockquote><h3 id="standard-input-redirection-1" tabindex="-1">Standard input redirection</h3><p>Standard input redirection can be done using the <code>&lt;</code> operator in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&lt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">input.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the previous example, the <code>MyClass</code> program receives standard input from the <code>input.txt</code> file instead of from the keyboard.</p><blockquote><p>When standard input is redirected, the program does not have to do anything special to read from a file instead of from the keyboard. The operating system takes care of redirecting the standard input of the program to the file that is indicated.</p><h3 id="standard-output-redirection-1" tabindex="-1">Standard output redirection</h3><p>Standard output redirection can be done using the <code>&gt;</code> and <code>&gt;&gt;</code> operators in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">output.txt</span></span>
<span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&gt;&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">output2.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>In the previous example, the standard output of the <code>MyClass</code> program is redirected to the <code>output.txt</code> file instead of to the console. If the <code>output.txt</code> file does not exist, it is created, and if the file already exists, its value is overwritten.</p><p>If the operator is <code>&gt;&gt;</code>, the output is added to the end of the file instead of overwriting it.</p><blockquote><p>When standard output is redirected, the program does not have to do anything special to write to a file instead of to the console. The operating system takes care of redirecting the standard output of the program to the file that is indicated.</p><h3 id="standard-error-output-redirection-1" tabindex="-1">Standard error output redirection</h3><p>Standard error output redirection can be done using the <code>2&gt;</code> operator in UNIX and Windows systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">2&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">error.txt</span></span>
<span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">2&gt;&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">error2.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>In the previous example, the standard error output of the <code>MyClass</code> program is redirected to the <code>error.txt</code> file instead of to the console.</p><p>If the operator is <code>2&gt;&gt;</code>, the error output is added to the end of the file instead of overwriting it.</p><blockquote><p>When the error output is redirected, the program does not have to do anything special to write to a file instead of to the console. The operating system takes care of redirecting the error output of the program to the file that is indicated.</p></blockquote><h2 id="_2-1-2-redirection-of-the-output-of-one-process-to-the-input-of-another-process" tabindex="-1">2.1.2. Redirection of the output of one process to the input of another process</h2><p>The redirection of standard output to the standard input of another process can be done using the <code>|</code> operator in UNIX and Windows systems.</p><p>Pipes allow you to connect the standard output of one process to the standard input of another, thus establishing a producer-consumer relationship.</p><p>The use of pipes follows the following syntax:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">java</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">MyClass2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the previous example, the standard output of the <code>MyClass</code> program is redirected to the standard input of the <code>MyClass2</code> program.</p><blockquote><p>When the standard output of one process is redirected to the standard input of another, the operating system takes care of connecting the output and input streams of the processes.</p></blockquote><h2 id="_2-1-3-communication-through-signals" tabindex="-1">2.1.3. Communication through signals</h2><p>Signals are a form of communication between processes that is based on interrupting the execution of a process to perform a specific action.</p><p>Signals are asynchronous events that are sent to a process to notify it of an event. Signals can be sent by the process itself, by another process, or by the operating system.</p><p>Signals can be sent to a process using the <code>kill</code> command in UNIX systems.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">kill</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">-s</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">SIGUSR1</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1234</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the previous example, the <code>SIGUSR1</code> signal is sent to the process with PID <code>1234</code>.</p><p>Signals in the Windows shell can be sent using the <code>taskkill</code> command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#E2931D;">$&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">taskkill</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">/pid</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1234</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">/f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the previous example, the forced termination signal is sent to the process with PID <code>1234</code>.</p>`,52),f={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"Signals",-1),v={href:"https://en.wikipedia.org/wiki/Signal_(IPC)",target:"_blank",rel:"noopener noreferrer"},b={href:"https://openwebinars.net/blog/gestion-de-procesos-y-servicios-desde-shell-script-en-windows/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"_2-1-4-communication-through-sockets",tabindex:"-1"},"2.1.4. Communication through sockets",-1),x=e("p",null,"Sockets can be used for communication between processes on the same device or on different devices.",-1),k=e("p",null,"Sockets will be studied in Unit 4, where we will see how they can be used for communication between processes on different devices.",-1);function _(w,B){const i=a("DownloadPDF-component"),l=a("DocumentCover-component"),o=a("router-link"),r=a("ExternalLinkIcon");return d(),c("div",null,[s(i),s(l,{titulo:"2.1 Interprocess communication"}),m,e("nav",y,[e("ul",null,[e("li",null,[s(o,{to:"#_2-1-1-communication-through-i-o"},{default:n(()=>[t("2.1.1. Communication through I/O")]),_:1}),e("ul",null,[e("li",null,[s(o,{to:"#standard-input-redirection"},{default:n(()=>[t("Standard input redirection")]),_:1})]),e("li",null,[s(o,{to:"#standard-output-redirection"},{default:n(()=>[t("Standard output redirection")]),_:1})]),e("li",null,[s(o,{to:"#standard-error-output-redirection"},{default:n(()=>[t("Standard error output redirection")]),_:1})]),e("li",null,[s(o,{to:"#standard-input-redirection-1"},{default:n(()=>[t("Standard input redirection")]),_:1})])])]),e("li",null,[s(o,{to:"#_2-1-2-redirection-of-the-output-of-one-process-to-the-input-of-another-process"},{default:n(()=>[t("2.1.2. Redirection of the output of one process to the input of another process")]),_:1})]),e("li",null,[s(o,{to:"#_2-1-3-communication-through-signals"},{default:n(()=>[t("2.1.3. Communication through signals")]),_:1})]),e("li",null,[s(o,{to:"#_2-1-4-communication-through-sockets"},{default:n(()=>[t("2.1.4. Communication through sockets")]),_:1})])])]),g,e("div",f,[A,e("p",null,[t("You can look at the "),e("a",v,[t("UNIX signal list"),s(r)]),t(" in Wikipedia.")]),e("p",null,[t("And you an read more on "),e("a",b,[t("Gestión de procesos en Windows"),s(r)]),t(".")])]),E,x,k])}const D=p(h,[["render",_],["__file","ipc.html.vue"]]);export{D as default};
