import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center sparkle-gradient rounded-3xl p-12 sm:p-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative z-10">
          <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to find your spark?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-lg mx-auto">
            Take the career quiz now and discover which IT path aligns perfectly with who you are.
          </p>
          <Link to={createPageUrl("CareerQuiz")}>
            <Button size="lg" className="mt-8 bg-white text-indigo-600 hover:bg-white/90 shadow-2xl px-8 py-6 text-base font-semibold rounded-xl group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
