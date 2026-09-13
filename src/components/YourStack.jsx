import React from 'react';
import StackItem from './StackItem';

const YourStack = ({ stack, onRemoveItem, onRemoveAll }) => {
  const count = stack.length;

  return (
    <aside className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} Technology Selected`}
        </p>
      </div>

      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center">
          <p className="text-sm font-medium text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <StackItem
                key={item.id}
                item={item}
                onRemove={onRemoveItem}
              />
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-[#FF3B81] border border-[#FF3B81]/40 hover:bg-pink-50/60 active:scale-[0.98] transition-all"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
