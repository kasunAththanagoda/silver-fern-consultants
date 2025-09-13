'use client';
import { motion } from 'framer-motion';

export function ServiceCards({ className = '' }: { className?: string }){
  const items = [
    {title:'Course & University Selection',desc:'Match your profile, budget and goals to the right NZ programs.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.5"/><path d="M5 10v5.5c0 .4.24.77.61.93L12 19l6.39-2.57c.37-.15.61-.52.61-.93V10" stroke="currentColor" strokeWidth="1.5"/></svg>
    )},
    {title:'Application & SOP Guidance',desc:'Craft a compelling story and submit complete applications on time.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5"/></svg>
    )},
    {title:'Visa File & Interview',desc:'Prepare GTE, finances and interview confidently with our checklist.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11l2 2 5-5" stroke="currentColor" strokeWidth="1.5"/></svg>
    )},
    {title:'Scholarships & Funding',desc:'Find tuition waivers, scholarships and part-time options.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 3l2.09 6.26H20l-5.17 3.76L16.91 20 12 15.97 7.09 20l2.08-6.98L4 9.26h5.91L12 3z" stroke="currentColor" strokeWidth="1.5"/></svg>
    )},
    {title:'Accommodation & Pre-departure',desc:'Housing, flights, insurance and settling-in advice.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M3 10l9-6 9 6v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" stroke="currentColor" strokeWidth="1.5"/></svg>
    )},
    {title:'Career Pathways',desc:'Understand post-study work and graduate roles by discipline.', icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 21v-7h16v7" stroke="currentColor" strokeWidth="1.5"/><path d="M9 10V3h6v7" stroke="currentColor" strokeWidth="1.5"/></svg>
    )}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 " + className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((x,i)=> (
        <motion.div 
          key={i} 
          variants={cardVariants}
          className="relative group cursor-pointer overflow-hidden"
          whileHover={{ 
            y: -8,
            scale: 1.02,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.22 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Gradient border wrapper */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-600/40 via-brand-400/10 to-transparent group-hover:from-brand-500/70 group-hover:via-brand-400/20 transition-all duration-300">
            {/* Card body */}
            <div className="relative rounded-2xl h-full w-full p-6 border border-neutral-800/70 bg-neutral-900/50 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
              {/* Decorative background glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-600/10 blur-3xl" />

              {/* Icon bubble with subtle ping */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white flex items-center justify-center shadow-lg ring-1 ring-brand-300/40 transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] group-hover:scale-105">
                <span className="pointer-events-none absolute -z-10 inline-flex h-full w-full rounded-xl bg-brand-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {x.icon}
                </div>
              </div>

              <motion.h3 
                className="text-lg font-semibold mt-4"
                whileHover={{ color: "#d4af37" }}
                transition={{ duration: 0.2 }}
              >
                {x.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mt-2 text-sm"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {x.desc}
              </motion.p>

              {/* Bottom row: Explore CTA */}
              {/* <div className="mt-5 flex items-center justify-end">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-800/40 px-3 py-1.5 text-xs font-semibold text-gray-200 transition-colors hover:bg-neutral-800">
                  Explore
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </span>
              </div> */}
            </div>
          </div>

          {/* Outer hover glow */}
          <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity bg-brand-500/40" />
        </motion.div>
      ))}
    </motion.div>
  );
}
