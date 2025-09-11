'use client';
import { motion } from 'framer-motion';

export function UniGrid({ className = '' }:{ className?: string }){
  const unis = [
    'University of Auckland', 'University of Otago', 'Victoria University of Wellington',
    'University of Canterbury', 'Massey University', 'Auckland University of Technology',
    'Lincoln University', 'Waikato Institute of Technology', 'Ara Institute of Canterbury'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const uniVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
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
      className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-4 " + className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {unis.map((u,i)=> (
        <motion.div 
          key={i} 
          variants={uniVariants}
          className="card p-5 text-gray-200 font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
          whileHover={{ 
            y: -3,
            scale: 1.02,
            backgroundColor: "#0a0a0a",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              color: "#d4af37",
              transition: { duration: 0.2 }
            }}
          >
            {u}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
}
