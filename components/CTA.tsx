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
        // simplified to avoid TS easing issues
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
        duration: 0.5
      }
    }
  };

  return (
    <section className="container my-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl"
      >
        {/* Emphasis banner: full-width gradient bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 opacity-20" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative p-8 md:p-12 text-center">

          <motion.h3
            variants={itemVariants}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Start your New Zealand journey today
          </motion.h3>

          {/* Additional descriptive text as requested */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-4 max-w-3xl text-white/85 text-base md:text-lg space-y-3"
          >
            <p>
              At Silver Fern Consultancy, we go beyond guidance—we become your partners in turning the dream of studying in New Zealand into a life-changing reality. Backed by years of expertise and an in-depth understanding of global education pathways, our passionate team provides you with personalized support, clarity, and confidence at every step of your journey.
            </p>
            <p>
              Our mission is simple yet powerful: to open doors for Sri Lankan students to world-class education, cultivating not only academic excellence but also personal growth, resilience, and a brighter future filled with boundless opportunities.
            </p>
          </motion.div>


          <motion.div variants={itemVariants} className="mt-7">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="inline-block">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-3 rounded-2xl bg-black/90 px-7 py-4 text-base md:text-lg font-bold text-white shadow-xl ring-1 ring-white/15 hover:bg-black"
              >
                <motion.span
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="text-xl"
                >
                  📞
                </motion.span>
                Book Your FREE Consultation
                <motion.span
                  className="absolute -top-2 -right-2 rounded-full bg-white text-black px-2 py-0.5 text-[10px] font-extrabold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  FREE
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-5 flex flex-wrap justify-center gap-3 text-sm text-white/70"
          >
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              ⚡ Quick Response
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              💯 Expert Advice
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              🤝 Personalized Plan
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-xs text-white/60">
            💬 Mon–Fri 9AM–5PM • Same-day response guaranteed
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
