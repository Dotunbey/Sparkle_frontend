import React from "react";
import { motion } from "framer-motion";
import { Compass, Brain, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Explore",
    description: "Discover the full landscape of IT — from cybersecurity to AI, cloud to product design.",
    color: "bg-indigo-100 text-indigo-600",
    accent: "border-indigo-200",
  },
  {
    icon: Brain,
    title: "Reflect",
    description: "Take our Ikigai-inspired quiz to uncover what you love, what you're good at, and what fits.",
    color: "bg-purple-100 text-purple-600",
    accent: "border-purple-200",
  },
  {
    icon: Sparkles,
    title: "Discover",
    description: "Get AI-powered career recommendations tailored to your unique personality and interests.",
    color: "bg-amber-100 text-amber-600",
    accent: "border-amber-200",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Access curated resources, learning paths, and real opportunities to start your journey.",
    color: "bg-emerald-100 text-emerald-600",
    accent: "border-emerald-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">How It Works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Four steps to clarity
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            A guided journey from curiosity to confidence in your IT career choice.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl bg-white border ${step.accent} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group`}
            >
              <div className="absolute top-6 right-6 text-5xl font-bold text-slate-100 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-6`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
