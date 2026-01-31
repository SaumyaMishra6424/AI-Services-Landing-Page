import { motion } from "framer-motion";
import { 
  Image as ImageIcon, 
  MessageSquare, 
  Code2, 
  Video, 
  Zap, 
  Search 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Image Generator",
      desc: "Create high-fidelity visuals from text prompts using custom diffusion models.",
      icon: ImageIcon,
      color: "text-blue-400",
    },
    {
      title: "Chat With AI",
      desc: "Advanced conversational agents tailored for your business data and tone.",
      icon: MessageSquare,
      color: "text-violet-400",
    },
    {
      title: "AI Code Generator",
      desc: "Automate boilerplate and complex logic with developer-centric AI assistants.",
      icon: Code2,
      color: "text-emerald-400",
    },
    {
      title: "AI Video Editor",
      desc: "Transform scripts into viral shorts and long-form content automatically.",
      icon: Video,
      color: "text-red-400",
    },
    {
      title: "Rapid Research",
      desc: "Detailed web research and competitor analysis powered by Matrix AI.",
      icon: Search,
      color: "text-amber-400",
    },
    {
      title: "Fast Integration",
      desc: "Deploy AI solutions into your existing stack in days, not months.",
      icon: Zap,
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="Services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-500 font-semibold text-sm tracking-[0.3em] uppercase"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Powerful AI Solutions for <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(139, 92, 246, 0.3)' }}
              className="group relative bg-[#0f111a] border border-slate-800 p-8 rounded-[2.5rem] transition-all overflow-hidden"
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/5`}>
                <service.icon className={`${service.color}`} size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold text-violet-500 uppercase tracking-widest hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}