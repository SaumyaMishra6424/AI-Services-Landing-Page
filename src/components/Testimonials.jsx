import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      text: "MatrixAI transformed our workflow. We've seen a 40% increase in productivity within the first month of implementation.",
      image: "https://i.pravatar.cc/150?u=alex",
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Director",
      text: "The AI Image generator is leagues ahead of the competition. It understands context in a way that feels like magic.",
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      text: "Integration was seamless. The API documentation is stellar, and the AI code generation is remarkably clean.",
      image: "https://i.pravatar.cc/150?u=david",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-500 font-semibold text-sm tracking-[0.3em] uppercase"
          >
            Wall of Love
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Trusted by the <span className="text-violet-500">Best in Industry</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-[#0f111a] border border-slate-800 hover:border-violet-500/50 transition-all group"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-violet-500" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-violet-500 text-violet-500" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-violet-500/30 p-0.5">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}