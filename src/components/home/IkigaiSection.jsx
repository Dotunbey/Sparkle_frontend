import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Globe, DollarSign } from "lucide-react";

const circles = [
  { label: "What you love", icon: Heart, color: "bg-rose-100 text-rose-600 border-rose-200" },
  { label: "What you're good at", icon: Star, color: "bg-amber-100 text-amber-600 border-amber-200" },
  { label: "What the world needs", icon: Globe, color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
  { label: "What you can be paid for", icon: DollarSign, color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
];

export default function IkigaiSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">Our Framework</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Powered by Ikigai
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Ikigai is the Japanese concept of finding purpose — the intersection of what you love, 
            what you're good at, what the world needs, and what you can be paid for.
          </p>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Sparkle adapts this timeless framework to IT careers, helping you find not just 
            any job — but your <span className="text-indigo-600 font-semibold">purpose</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {circles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${item.color} flex flex-col items-center text-center gap-3`}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-semibold">{item.label}</span>
              </motion.div>
            );
          })}
          <div className="col-span-2 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-center">
            <span className="text-sm font-bold sparkle-gradient-text">✨ Your Ikigai = Your Ideal IT Career</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
