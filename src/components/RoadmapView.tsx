
import React from 'react';
import { RoadmapNode } from '../types';

interface RoadmapViewProps {
  nodes: RoadmapNode[];
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ nodes }) => {
  if (nodes.length === 0) {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
        <p className="text-slate-500">Roadmap content is being curated for this path. Stay tuned!</p>
      </div>
    );
  }

  return (
    <div className="relative py-10 flex flex-col items-center">
      {nodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <div className={`
            relative w-full max-w-md p-6 rounded-xl border-2 transition-all duration-300
            ${node.type === 'core' ? 'bg-indigo-50 border-indigo-200' : 
              node.type === 'specialization' ? 'bg-purple-50 border-purple-200' : 
              'bg-slate-50 border-slate-200'}
            shadow-sm hover:shadow-md cursor-default
          `}>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center text-[10px] font-bold">
              {index + 1}
            </div>
            <h4 className={`font-bold mb-1 ${node.type === 'core' ? 'text-indigo-900' : 'text-slate-800'}`}>
              {node.title}
            </h4>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              {node.type}
            </span>
          </div>
          
          {index < nodes.length - 1 && (
            <div className="w-1 h-12 bg-indigo-100 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
