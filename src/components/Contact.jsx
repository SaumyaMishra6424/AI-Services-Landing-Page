import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xbdyvaze", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Error connecting to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="Contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0f111a] border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
            >
              <div className="text-center mb-10">
                <span className="text-violet-500 font-bold text-xs uppercase tracking-widest">Connect With Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Let's Build Your AI Future</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-slate-500 ml-2 uppercase font-bold">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all placeholder:text-slate-700"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-slate-500 ml-2 uppercase font-bold">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all placeholder:text-slate-700"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-slate-500 ml-2 uppercase font-bold">Message</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your AI needs..." 
                    rows="5" 
                    required
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-900/20 active:scale-[0.98]"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Send size={18} /> 
                      <span>Send Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0f111a] border border-violet-500/30 p-16 rounded-[3rem] text-center shadow-2xl"
            >
              <motion.div 
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={40} className="text-violet-500" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-4">Query Dispatched</h2>
              <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                Formspree has received your message. Our team will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full text-sm transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}