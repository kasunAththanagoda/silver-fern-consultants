'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-brand-50 to-white border-b border-gray-100">
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Study in <motion.span 
              className="text-brand-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >New Zealand</motion.span> with trusted guidance
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-700"
          >
            From university selection to visa success — we help you every step of the way.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn btn-primary">Book Free Consultation</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="btn btn-outline">See Services</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="card p-6"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.ul 
            className="space-y-3 text-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Personalized course & university shortlist",
              "SOP review & application submission", 
              "Scholarship & funding guidance",
              "Visa documentation & interview prep"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                className="flex items-center"
              >
                <motion.span 
                  className="text-green-600 mr-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  ✓
                </motion.span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 text-sm text-gray-500"
          >
            100% transparent & ethical consultancy based in Colombo.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
