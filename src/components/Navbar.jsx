import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Services", href: "#Services" },
    { name: "Why Us", href: "#WhyUs" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Pricing", href: "#pricing" }, // Matches the Pricing ID
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-[#020617]/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo and Brand Name - Properly Grouped */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
          <span className="text-xl font-bold text-white tracking-tighter">
            Matrix AI
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-violet-600 hover:bg-violet-500 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all shadow-lg shadow-violet-900/20 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Slide-out */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-slate-300 hover:text-violet-400 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="bg-violet-600 text-center text-white py-4 rounded-xl font-bold shadow-lg"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}