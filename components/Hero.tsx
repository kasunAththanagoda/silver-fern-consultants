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
    <section className="bg-gradient-to-b from-brand-50 to-white border-b border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 text-8xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🎉
            </motion.span>
            FREE CONSULTATION AVAILABLE
          </motion.div>

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
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link 
                href="/contact" 
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  📞
                </motion.span>
                Book FREE Consultation
                <motion.div
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  FREE!
                </motion.div>
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
        <motion.div 
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
            className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            100% FREE
          </motion.div>

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
                  className="text-green-600 mr-3 text-lg"
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
            className="mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4"
          >
            💯 100% transparent & ethical consultancy based in Colombo.
            <br />
            📞 Get your FREE consultation today!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
