import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RoadmapView({ roadmap }) {
  if (!roadmap || roadmap.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm">
        Roadmap coming soon for this path.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {roadmap.map((phase, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative"
        >
          {/* Connector Line */}
          {i < roadmap.length - 1 && (
            <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-indigo-100" />
          )}

          {/* Phase Header */}
          <div className="flex items-start gap-4">
            <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
              <span className="text-white text-sm font-bold">{i + 1}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 text-xs mb-2">
                    {phase.phase}
                  </Badge>
                  <h4 className="text-base font-bold text-slate-900">{phase.title}</h4>
                </div>
                {phase.duration && (
                  <span className="text-xs text-slate-400 font-medium">{phase.duration}</span>
                )}
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-0">
                {phase.topics?.map((topic, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group"
                  >
                    <Circle className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600 group-hover:text-indigo-700 font-medium">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
