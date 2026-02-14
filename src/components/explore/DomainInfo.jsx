import React from "react";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DomainInfo({ domain }) {
  if (!domain) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 mb-8"
    >
      {/* About */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-indigo-500" />
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">What is {domain.name}?</h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{domain.about}</p>
      </div>

      {/* Problems Solved */}
      {domain.problems?.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-emerald-500" />
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Problems Solved</h3>
          </div>
          <ul className="space-y-2">
            {domain.problems.map((problem, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sectors */}
      {domain.sectors?.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-amber-500" />
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Key Sectors</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {domain.sectors.map((sector, i) => (
              <Badge key={i} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                {sector}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
