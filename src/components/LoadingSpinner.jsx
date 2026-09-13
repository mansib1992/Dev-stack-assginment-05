import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF3B81] border-r-[#9B51E0] animate-spin"></div>
      </div>
      <p className="text-slate-500 font-medium text-sm animate-pulse">
        Loading technologies...
      </p>
    </div>
  );
};

export default LoadingSpinner;
