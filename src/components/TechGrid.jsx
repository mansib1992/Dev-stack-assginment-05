import React from 'react';
import TechCard from './TechCard';
import LoadingSpinner from './LoadingSpinner';

const TechGrid = ({ technologies, isLoading, stack, onAddToStack }) => {
  return (
    <section id="technologies" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={isAdded}
                onAddToStack={onAddToStack}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TechGrid;
