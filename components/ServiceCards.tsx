'use client';
import { motion } from 'framer-motion';

export function ServiceCards({ className = '' }: { className?: string }){
  const items = [
    {title:'Course & University Selection',desc:'Match your profile, budget and goals to the right NZ programs.'},
    {title:'Application & SOP Guidance',desc:'Craft a compelling story and submit complete applications on time.'},
    {title:'Visa File & Interview',desc:'Prepare GTE, finances and interview confidently with our checklist.'},
    {title:'Scholarships & Funding',desc:'Find tuition waivers, scholarships and part-time options.'},
    {title:'Accommodation & Pre-departure',desc:'Housing, flights, insurance and settling-in advice.'},
    {title:'Career Pathways',desc:'Understand post-study work and graduate roles by discipline.'}
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
          className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
          whileHover={{ 
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.h3 
            className="text-lg font-semibold"
            whileHover={{ color: "#d4af37" }}
            transition={{ duration: 0.2 }}
          >
            {x.title}
          </motion.h3>
          <motion.p 
            className="text-gray-400 mt-2 text-sm"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {x.desc}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
}
