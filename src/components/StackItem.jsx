import React from 'react';
import { X } from 'lucide-react';

const StackItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-all group">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center flex-shrink-0">
          <img
            src={item.icon}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-slate-900 truncate">
            {item.name}
          </h4>
          <p className="text-xs text-slate-400 capitalize truncate">
            {item.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-colors ml-2 flex-shrink-0"
        aria-label={`Remove ${item.name} from stack`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default StackItem;
