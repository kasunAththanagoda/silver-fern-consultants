'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTA(){
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="container my-16">
      <motion.div 
        className="card p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <motion.h3 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold"
        >
          Start your New Zealand journey today
        </motion.h3>
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mt-2"
        >
          Free, no-obligation counselling with our experts in Colombo.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="mt-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="btn btn-primary">Book Free Consultation</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
