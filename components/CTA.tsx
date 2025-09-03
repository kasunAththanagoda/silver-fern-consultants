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
        className="relative bg-gradient-to-br from-green-50 via-blue-50 to-brand-50 p-8 md:p-12 text-center rounded-3xl border-2 border-green-200 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎓
        </motion.div>
        
        <motion.div
          className="absolute top-4 left-4 text-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ✨
        </motion.div>

        {/* FREE badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          🎉 100% FREE CONSULTATION
        </motion.div>

        <motion.h3 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
        >
          Start your New Zealand journey today
        </motion.h3>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto"
        >
          Get expert guidance from our Colombo-based consultants. No hidden fees, no obligations - just honest advice to help you succeed.
        </motion.p>

        {/* Value propositions */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-4 mt-6 mb-8"
        >
          {[
            { icon: "⚡", text: "Quick Response" },
            { icon: "💯", text: "Expert Advice" },
            { icon: "🤝", text: "Personalized Plan" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              href="/contact" 
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                className="text-xl"
              >
                📞
              </motion.span>
              Book Your FREE Consultation Now
              <motion.div
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                FREE!
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-sm text-gray-500 mt-4"
        >
          💬 Available Mon-Fri 9AM-5PM | Same-day response guaranteed
        </motion.p>
      </motion.div>
    </section>
  );
}
