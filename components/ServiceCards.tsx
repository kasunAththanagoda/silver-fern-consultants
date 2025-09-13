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
          className="relative group p-6 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 hover:from-neutral-900/80 hover:to-neutral-900/40 transition-all duration-300 cursor-pointer overflow-hidden"
          whileHover={{ 
            y: -6,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Accent top border */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Icon bubble */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-black flex items-center justify-center shadow-lg">
            <div className="text-black/80">
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

          {/* Glow on hover */}
          <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity bg-brand-500" />
        </motion.div>
      ))}
    </motion.div>
  );
}
