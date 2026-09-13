import React from 'react';
import { Star, Check } from 'lucide-react';

const badgeColors = {
  'Popular': 'bg-sky-50 text-sky-600 border-sky-200',
  'Versatile': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Fast': 'bg-orange-50 text-orange-600 border-orange-200',
  'Standard': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Top SQL': 'bg-blue-50 text-blue-600 border-blue-200',
  'Cache': 'bg-rose-50 text-rose-600 border-rose-200',
  'Ubiquitous': 'bg-amber-50 text-amber-600 border-amber-200',
  'Essential': 'bg-indigo-50 text-indigo-600 border-indigo-200',
  'Robust': 'bg-cyan-50 text-cyan-600 border-cyan-200',
  'Modern': 'bg-teal-50 text-teal-600 border-teal-200',
  'Containers': 'bg-sky-50 text-sky-600 border-sky-200',
};

const TechCard = ({ tech, isAdded, onAddToStack }) => {
  const badgeStyle = badgeColors[tech.badge] || 'bg-slate-50 text-slate-600 border-slate-200';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          {tech.badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeStyle}`}>
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {tech.name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-5 pt-3 border-t border-slate-100">
          <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="font-medium text-slate-600">
            {tech.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-800">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-[#0F172A] hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.98]'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
