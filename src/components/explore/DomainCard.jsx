import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default function DomainCard({ path, onClick, index }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-200 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {path.title}
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-1">{path.subdomain || path.domain}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
      </div>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
        {path.description}
      </p>
      {path.avg_salary_range && (
        <div className="mb-4">
          <Badge variant="outline" className="text-xs bg-slate-50 text-slate-600 border-slate-200">
            {path.avg_salary_range}
          </Badge>
        </div>
      )}
      {path.skills_required?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {path.skills_required.slice(0, 3).map((skill) => (
            <span key={skill} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-medium">
              {skill}
            </span>
          ))}
          {path.skills_required.length > 3 && (
            <span className="text-xs text-slate-400">+{path.skills_required.length - 3} more</span>
          )}
        </div>
      )}
    </motion.div>
  );
}
