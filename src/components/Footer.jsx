import { ChevronUp, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Services", href: "#Services" },
    { name: "Why Us", href: "#WhyUs" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Pricing", href: "#Pricing" },
  ];

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-black-600 p-1.5 rounded-lg">
                <img src="/logo.png" alt="L" className="w-6 h-6 object-contain invert" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">
                Matrix AI
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through cutting-edge AI consulting and high-speed neural development.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Back to Top Column */}
          <div className="md:col-span-1 flex flex-col items-center md:items-end justify-center">
            <button 
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group p-4 rounded-2xl bg-violet-600/10 border border-violet-500/20 hover:bg-violet-600 transition-all shadow-lg"
            >
              <ChevronUp className="text-violet-500 group-hover:text-white transition-colors" size={24} />
            </button>
            <span className="text-slate-500 text-[10px] mt-2 uppercase tracking-widest">System Reset</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Matrix AI Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}