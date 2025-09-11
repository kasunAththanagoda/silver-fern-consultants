'use client';
import { motion } from 'framer-motion';

export function TestimonialStrip(){
  const testimonials = [
    {q:'Got my offer from University of Auckland with scholarship!', a:'Sachini, MSc Data Science'},
    {q:'Visa approved in 3 weeks. Clear guidance on finances.', a:'Raveen, BEng (Hons)'},
    {q:'Found the perfect business program and part-time work plan.', a:'Nadeesha, MBA'}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="mt-16 bg-neutral-950 border-y border-neutral-800">
      <div className="container py-12">
        <motion.h3 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold text-brand-400"
        >
          Success Stories
        </motion.h3>
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t,i)=> (
            <motion.div 
              key={i} 
              variants={testimonialVariants}
              className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                "{t.q}"
              </motion.p>
              <motion.p 
                className="text-gray-400 mt-3 text-sm"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, color: "#d4af37" }}
                transition={{ duration: 0.2 }}
              >
                — {t.a}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
