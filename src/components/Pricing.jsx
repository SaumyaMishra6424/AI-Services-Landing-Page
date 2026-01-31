import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      price: "29", 
      features: ["5,000 AI Credits", "Basic Analytics", "3 Projects", "Community Support"] 
    },
    { 
      name: "Pro", 
      price: "99", 
      features: ["Unlimited Credits", "Advanced API Access", "Custom AI Models", "Priority Support"], 
      popular: true 
    },
    { 
      name: "Enterprise", 
      price: "Custom", 
      features: ["On-premise AI", "24/7 Dedicated Support", "SLA Guarantee", "Custom Contracts"] 
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Flexible <span className="text-violet-500">Pricing</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Choose a plan that works best for your business goals and scale.
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] relative transition-all duration-500 hover:border-violet-500/50 ${
                plan.popular 
                ? 'border-violet-500/50 ring-1 ring-violet-500/50 bg-violet-600/5 lg:scale-105 z-10' 
                : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg shadow-violet-900/40">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{plan.name}</h3>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-white">
                  {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-slate-500 text-sm md:text-base">/mo</span>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                    <Check size={18} className="text-violet-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl md:rounded-2xl font-bold transition-all active:scale-95 ${
                  plan.popular 
                  ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-900/20' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>

            
          ))}
        </div>
      </div>
    </section>
  );
}