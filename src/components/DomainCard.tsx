
import React from 'react';
import { Domain } from '../types';

interface DomainCardProps {
  domain: Domain;
  onClick: (domainId: string) => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({ domain, onClick }) => {
  return (
    <button
      onClick={() => onClick(domain.id)}
      className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 text-left flex flex-col h-full"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {domain.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {domain.name}
      </h3>
      <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
        {domain.overview}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {domain.subdomains.slice(0, 3).map(sd => (
          <span key={sd.id} className="text-[10px] uppercase tracking-wider font-bold bg-slate-50 text-slate-400 px-2 py-1 rounded">
            {sd.name}
          </span>
        ))}
        {domain.subdomains.length > 3 && (
          <span className="text-[10px] font-bold text-slate-300 px-2 py-1">
            +{domain.subdomains.length - 3} more
          </span>
        )}
      </div>
    </button>
  );
};
