import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, BarChart3 } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "AI-first architecture",
      desc: "Built from the ground up to integrate seamlessly with modern LLMs.",
      icon: Layers,
    },
    {
      title: "Business-driven solutions",
      desc: "Focusing on ROI and strategic growth rather than just technology.",
      icon: BarChart3,
    },
    {
      title: "Rapid MVP delivery",
      desc: "Go from concept to a live AI-powered prototype in record time.",
      icon: Zap,
    },
    {
      title: "Secure & scalable systems",
      desc: "Enterprise-grade security ensuring your data remains private and safe.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#02040a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-500 font-semibold text-sm tracking-[0.2em] uppercase"
          >
            Efficiency
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Why Choose Our <span className="text-violet-500">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              className="group bg-[#0f111a] border border-slate-800 p-8 rounded-[2.5rem] flex items-start gap-6 transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-violet-600/10 rounded-2xl flex items-center justify-center group-hover:bg-violet-600/20 transition-colors">
                <item.icon className="text-violet-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}