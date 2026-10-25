
import React, { useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id={id} className={`py-16 md:py-24 transition-colors duration-300 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full flex justify-between items-center group/title mb-0 focus:outline-none"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center text-left">
            <span className="bg-blue-600 w-8 h-1 mr-4 rounded-full group-hover/title:w-12 transition-all duration-300"></span>
            {title}
          </h2>
          <div className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-50 dark:bg-blue-900/20' : 'bg-transparent'}`}>
            <i className={`fa-solid fa-chevron-down text-sm transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}></i>
          </div>
        </button>

        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[10000px] opacity-100 mt-12 translate-y-0' : 'max-h-0 opacity-0 mt-0 -translate-y-4'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
