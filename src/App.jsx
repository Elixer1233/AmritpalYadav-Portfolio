import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Education', href: '#education' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Work', href: '#projects' },
        { name: 'Certs', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white hover:text-accent-cyan transition-colors">
                    Amrit<span className="text-accent-violet">.</span>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm tracking-wide uppercase font-medium">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="ml-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all backdrop-blur-md font-medium text-sm tracking-wide">
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            <div className="aurora-bg animate-aurora mix-blend-screen"></div>
            
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10 relative">
                <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan"></span>
                        </span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-accent-cyan">Available for Hire</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white tracking-tighter leading-[1.1] mb-6">
                        Data meets <br/>
                        <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet text-gradient">Brilliance.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
                        I'm Amritpal Yadav, a <strong className="text-white font-medium">Data Science Student</strong> with a solid foundation in Python, Machine Learning, and Analytics. I distill complex datasets into actionable narratives and build intelligent models.
                    </p>
                    
                    <div className="flex flex-wrap gap-5">
                        <a href="#projects" className="px-8 py-4 rounded-full bg-white text-dark-950 hover:bg-slate-200 font-semibold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Explore Work
                        </a>
                        <a href="/AMRIT_CV.pdf" download="Amritpal_Yadav_CV.pdf" className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all transform hover:-translate-y-1 border border-white/10 flex items-center gap-3 group">
                            Download CV
                            <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
                        </a>
                    </div>
                    
                    <div className="flex items-center gap-6 mt-14">
                        <a href="https://github.com/Elixer1233" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex flex-col items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all text-xl">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/amrit-yadav-b8180" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex flex-col items-center justify-center text-slate-400 hover:text-accent-blue hover:border-accent-blue/50 transition-all text-xl">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <div className="h-px w-16 bg-slate-800"></div>
                        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">Connect</span>
                    </div>
                </div>
                
                <div className="relative hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-violet/20 blur-3xl rounded-full"></div>
                    <div className="relative glass-card border-none rounded-[2.5rem] p-4 animate-float-slow">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Data Analytics" className="rounded-[2rem] w-full h-[600px] object-cover mix-blend-overlay opacity-80" />
                        <div className="absolute bottom-10 left-10 right-10 glass rounded-2xl p-6">
                            <div className="flex items-center gap-4 text-white">
                                <i className="fas fa-award text-3xl text-accent-fuchsia"></i>
                                <div>
                                    <h4 className="font-bold text-lg font-display tracking-tight">Karate Gold Medalist</h4>
                                    <p className="text-sm text-slate-400">National & District level (2017-2018)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="glass-card rounded-[3rem] p-10 md:p-14 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-6">Philosophy</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter leading-tight max-w-4xl mx-auto">
                        "I believe in diligent work, adaptability, and continuous learning. Driven by curiosity, I thrive in environments where data-centric problem-solving is at the core."
                    </h3>
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-32 relative z-10 bg-dark-900/40">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-4">Academic Journey</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Education Timeline</h3>
                </div>
                
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    
                    {/* Timeline Item 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-950 bg-accent-cyan absolute left-0 md:left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(0,242,254,0.5)] z-10 transition-transform group-hover:scale-125"></div>
                        <div className="w-[calc(100%-4rem)] ml-auto md:w-[calc(50%-3rem)] md:ml-0 glass-card p-8 rounded-3xl transition-transform">
                            <div className="text-accent-cyan font-bold text-sm tracking-widest uppercase mb-2">Aug '23 - Present</div>
                            <h4 className="text-2xl font-display font-bold text-white mb-2">B.Tech Computer Science</h4>
                            <p className="text-slate-300 font-medium mb-3">Lovely Professional University, Jalandhar</p>
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-slate-300">CGPA: 6.02</span>
                        </div>
                    </div>
                    
                    {/* Timeline Item 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-950 bg-accent-blue absolute left-0 md:left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(79,172,254,0.5)] z-10 transition-transform group-hover:scale-125"></div>
                        <div className="w-[calc(100%-4rem)] ml-auto md:w-[calc(50%-3rem)] md:ml-0 glass-card p-8 rounded-3xl md:text-right transition-transform">
                            <div className="text-accent-blue font-bold text-sm tracking-widest uppercase mb-2">2022 - 2023</div>
                            <h4 className="text-2xl font-display font-bold text-white mb-2">Higher Secondary</h4>
                            <p className="text-slate-300 font-medium mb-3">Army Public School, Lucknow</p>
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-slate-300">Score: 79.6%</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

const Expertise = () => {
    return (
        <section id="expertise" className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-accent-violet uppercase mb-4">Arsenal</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Technical Expertise</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Bento Box 1 */}
                    <div className="glass-card rounded-3xl p-8 md:col-span-2 group flex flex-col justify-end relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-3xl rounded-full group-hover:bg-accent-cyan/20 transition-all"></div>
                        <i className="fas fa-chart-network text-4xl text-white/50 mb-auto"></i>
                        <div>
                            <h4 className="font-display font-bold text-2xl text-white mb-3">Data Science & Analytics</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">Harnessing the power of data through manipulation, visualization, and algorithmic modeling.</p>
                            <div className="flex gap-2 flex-wrap">
                                {['Python', 'Pandas', 'NumPy', 'Seaborn', 'Scikit-Learn'].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white hover:border-accent-cyan transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Bento Box 2 */}
                    <div className="glass-card rounded-3xl p-8 group flex flex-col justify-end relative overflow-hidden">
                        <i className="fas fa-code text-4xl text-white/50 mb-auto"></i>
                        <div>
                            <h4 className="font-display font-bold text-xl text-white mb-3">Languages</h4>
                            <div className="flex gap-2 flex-wrap">
                                {['C', 'C++', 'Java', 'Python', 'JavaScript'].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white hover:border-accent-blue transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Bento Box 3 */}
                    <div className="glass-card rounded-3xl p-8 md:col-span-3 group flex flex-col justify-end relative overflow-hidden h-[250px]">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-violet/10 blur-3xl rounded-full group-hover:bg-accent-violet/20 transition-all"></div>
                        <i className="fas fa-server text-4xl text-white/50 mb-auto"></i>
                        <div>
                            <h4 className="font-display font-bold text-2xl text-white mb-3">Tools & Systems</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">Managing infrastructure, environments, and specialized platforms.</p>
                            <div className="flex gap-2 flex-wrap">
                                {['Linux', 'MySQL', 'Cisco Packet Tracer', 'HTML/CSS', 'Matplotlib'].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white hover:border-accent-violet transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Certifications = () => {
    const certs = [
        { title: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "Aug '25 - Oct '25", icon: "fas fa-shield-alt", color: "text-accent-cyan" },
        { title: "Data Structures and Algorithm using C++", issuer: "Cipher School", date: "Aug '25 - Sep '25", icon: "fas fa-code", color: "text-accent-blue" },
        { title: "Build Generative AI Apps and Solutions", issuer: "Infosys", date: "Sept '25", icon: "fas fa-brain", color: "text-accent-fuchsia" },
        { title: "Master Generative AI & Tools", issuer: "Infosys", date: "Aug '25", icon: "fas fa-robot", color: "text-accent-violet" },
        { title: "Computational Theory: Language Principle", issuer: "Infosys", date: "Aug '25", icon: "fas fa-microchip", color: "text-white" }
    ];

    return (
        <section id="certifications" className="py-32 relative z-10 bg-dark-900/40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-accent-fuchsia uppercase mb-4">Continuous Learning</h2>
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Certifications</h3>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((c, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl group flex flex-col h-full border-t-2 border-t-white/5 hover:border-t-accent-cyan transition-colors">
                            <i className={`${c.icon} ${c.color} text-3xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}></i>
                            <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">{c.title}</h4>
                            <p className="text-slate-400 font-medium mb-auto">{c.issuer}</p>
                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                                <span className="uppercase tracking-widest text-[10px]">Credential</span>
                                <span className="bg-white/5 px-2 py-1 rounded">{c.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Border Crossing Analysis",
            subtitle: "Interactive Excel Dashboard",
            date: "Apr 2025",
            desc: "Designed an interactive dashboard visualizing border crossing trends utilizing pivot tables, power query, custom slicers, and conditional formatting to highlight data anomalies in cross-border datasets.",
            tags: ["MS Excel", "Power Query", "Data Viz"],
            color: "from-accent-blue to-accent-cyan"
        },
        {
            title: "Cybersecurity Data Analysis",
            subtitle: "Python Threat Assessment",
            date: "Feb 2025 - Apr 2025",
            desc: "Conducted exploratory data analysis on a comprehensive cybersecurity dataset. Identified attack trends, generated statistical summaries, and correlated attack vectors with severity levels to inform strategy.",
            tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            color: "from-accent-fuchsia to-accent-violet"
        }
    ];

    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-4">Curated Work</h2>
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Featured Projects</h3>
                    </div>
                    <a href="https://github.com/Elixer1233" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-cyan flex items-center gap-2 font-medium transition-colors">
                        View GitHub <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-10">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="glass-card rounded-[2rem] p-2 group cursor-pointer">
                            <div className="rounded-[1.5rem] bg-dark-900 h-64 relative overflow-hidden mb-6 flex items-center justify-center border border-white/5">
                                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                <h3 className="text-4xl font-display font-bold text-white/20 group-hover:scale-110 transition-transform duration-700">{proj.subtitle}</h3>
                            </div>
                            <div className="px-8 pb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">{proj.title}</h4>
                                    <span className="text-xs font-mono text-slate-500">{proj.date}</span>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed mb-6">
                                    {proj.desc}
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-dark-800 text-white rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        setStatus('sending');

        emailjs.sendForm(
            'service_77tfzzn', 
            'template_0px47vg', 
            form.current, 
            'Q4pZrKYFJZdF4KyP2'
        )
        .then(() => {
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(''), 5000);
        }, () => {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        });
    };

    return (
        <section id="contact" className="py-32 relative z-10 bg-dark-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="glass-card rounded-[3rem] p-10 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent-cyan/20 to-transparent blur-3xl rounded-full"></div>
                    
                    <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-6xl font-display font-bold text-white tracking-tighter mb-8 leading-tight">
                                Ready to build <br/>
                                something <span className="text-gradient bg-gradient-to-r from-accent-cyan to-accent-blue">Extraordinary?</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Data analysis, software development, or just a quick chat. Drop a message.
                            </p>
                            
                            <div className="space-y-8">
                                <a href="mailto:amritpalyadav2004@gmail.com" className="flex items-center gap-6 group w-max">
                                    <div className="w-16 h-16 rounded-2xl glass flex justify-center items-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-all text-xl">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-white font-medium text-lg">amritpalyadav2004@gmail.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-6 group w-max">
                                    <div className="w-16 h-16 rounded-2xl glass flex justify-center items-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-all text-xl">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Based in</p>
                                        <p className="text-white font-medium text-lg">Jalandhar / Lucknow, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass p-10 rounded-[2rem] border-white/10 relative">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">Name</label>
                                        <input type="text" name="user_name" className="w-full bg-dark-900 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">Email</label>
                                        <input type="email" name="user_email" className="w-full bg-dark-900 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all" placeholder="john@doe.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">Message</label>
                                    <textarea name="message" rows="4" className="w-full bg-dark-900 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all resize-none" placeholder="Let's create..."></textarea>
                                </div>
                                <button disabled={status === 'sending'} className="w-full py-5 rounded-xl bg-white text-dark-950 font-bold hover:bg-slate-200 transition-colors mt-4 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {status === 'success' && (
                                    <p className="text-green-400 text-sm mt-4 text-center animate-pulse">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm mt-4 text-center animate-pulse">Failed to send message. Please fill all fields or try again later.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/5 text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Amrit.</h2>
            <div className="flex justify-center gap-6 mb-8 text-slate-500">
                <a href="https://github.com/Elixer1233" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fab fa-github text-xl"></i></a>
                <a href="https://linkedin.com/in/amrit-yadav-b8180" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
            </div>
            <p className="text-slate-600 font-mono text-sm">© {new Date().getFullYear()} Amritpal Yadav. Elevating standards.</p>
        </footer>
    );
};

export default function App() {
    return (
        <div className="relative font-sans scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Expertise />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
