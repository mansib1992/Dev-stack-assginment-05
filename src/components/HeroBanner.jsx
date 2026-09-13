import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="brand-gradient hover:brand-gradient-hover text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 text-sm sm:text-base inline-block"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all text-sm sm:text-base inline-block"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative max-w-md lg:max-w-none w-full flex justify-center">
              <img
                src="/assets/banner-stack.png"
                alt="DevStack Architecture Illustration"
                className="w-full max-w-md h-auto object-contain drop-shadow-xl animate-float"
                onError={(e) => {
                  e.currentTarget.src = './assets/banner-stack.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
