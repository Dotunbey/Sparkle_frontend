import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Shield, Cloud, Brain, Palette, Database, Network, Settings, Blocks, MonitorSmartphone, Sparkles } from "lucide-react";

const domains = [
  { name: "Software Development", icon: Code2, color: "from-blue-500 to-indigo-600", desc: "Build applications and systems" },
  { name: "Data & Analytics", icon: Database, color: "from-emerald-500 to-teal-600", desc: "Turn data into insights" },
  { name: "Artificial Intelligence & Machine Learning", icon: Brain, color: "from-purple-500 to-violet-600", desc: "Teach machines to think" },
  { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-rose-600", desc: "Protect systems and data" },
  { name: "Cloud Computing & DevOps", icon: Cloud, color: "from-sky-500 to-cyan-600", desc: "Scale and automate" },
  { name: "Networking & Systems", icon: Network, color: "from-orange-500 to-amber-600", desc: "Connect and operate" },
  { name: "Web & Digital Design", icon: Palette, color: "from-pink-500 to-fuchsia-600", desc: "Tech meets creativity" },
  { name: "Hardware & Embedded Systems", icon: Settings, color: "from-slate-500 to-zinc-600", desc: "Physical tech and electronics" },
  { name: "Quality Assurance & Testing", icon: MonitorSmartphone, color: "from-indigo-500 to-blue-600", desc: "Ensure software quality" },
  { name: "IT Support & Enterprise Technology", icon: Settings, color: "from-green-500 to-emerald-600", desc: "Keep organizations running" },
  { name: "Product, Project & Tech Management", icon: Blocks, color: "from-violet-500 to-purple-600", desc: "Lead tech initiatives" },
  { name: "Emerging & Specialized Fields", icon: Sparkles, color: "from-yellow-500 to-amber-600", desc: "Future of technology" },
];

export default function DomainPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
              IT Is More Than You Think
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              10 domains, endless possibilities
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              Each domain is a universe of career paths waiting to be explored.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={createPageUrl("ExploreDomains") + `?domain=${encodeURIComponent(domain.name)}`}
                  className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group text-center"
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{domain.name}</h3>
                  <p className="text-xs text-slate-500">{domain.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl("ExploreDomains")}>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-xl group">
              Explore All Domains
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
