import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-fuchsia-600/10 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-violet-400 uppercase border border-violet-500/30 rounded-full bg-violet-500/5">
          ✨ Next Gen AI Architecture
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
          One Tool For Doing it <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            All Together
          </span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          The all-in-one AI platform that builds, scales, and optimizes your 
          business workflows while you sleep.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#contact">
  <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-violet-900/20"
>
  Start Building Free
</motion.button>
</a>

<a href="#contact">
  <button className="glass-card text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
    Watch Demo
  </button>
</a>
        </div>
      </motion.div>
    </section>
  );
}

