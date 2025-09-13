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
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-black to-neutral-900 border-b border-neutral-800 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 text-8xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        🇳🇿
      </motion.div>

      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FREE Consultation badge */}

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Study in <motion.span 
              className="text-brand-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >New Zealand</motion.span> with trusted guidance
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-300"
          >
            From university selection to settling in — we help you every step of the way.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link 
                href="/contact" 
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-600 to-brand-700 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:from-brand-500 hover:to-brand-600 transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  📞
                </motion.span>
                Talk to Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="btn btn-outline">See Services</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="card p-6 relative"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="absolute -top-2 -right-2 bg-brand-600 text-black px-3 py-1 rounded-full text-sm font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            100% FREE
          </motion.div>

          <motion.ul 
            className="space-y-3 text-gray-300"
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
                  className="text-brand-400 mr-3 text-lg"
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
            className="mt-4 text-sm text-gray-500 border-t border-neutral-800 pt-4"
          >
            💯 100% transparent & ethical consultancy based in Colombo.
            <br />
            📞 Get your FREE consultation today!
          </motion.p>
        </motion.div> */}
      </div>
    </section>
  );
}
