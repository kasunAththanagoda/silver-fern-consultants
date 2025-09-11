'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer(){
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.footer 
      className="mt-16 border-t border-neutral-800 bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <motion.div variants={sectionVariants}>
          <motion.div 
            className="font-extrabold text-xl text-brand-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Silver Fern
          </motion.div>
          <p className="text-gray-400 mt-2">Trusted guidance for Sri Lankan students to study in New Zealand.</p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <div className="font-semibold mb-2">Company</div>
          <motion.ul 
            className="space-y-1 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/courses", label: "Courses" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.li 
                key={item.href}
                variants={linkVariants}
                whileHover={{ x: 5, color: "#d4af37" }}
                transition={{ duration: 0.2 }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <div className="font-semibold mb-2">Contact</div>
          <motion.div 
            className="space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={linkVariants}
              className="text-gray-300"
              whileHover={{ x: 5, color: "#d4af37" }}
            >
              Colombo, Sri Lanka
            </motion.p>
            <motion.p 
              variants={linkVariants}
              className="text-gray-300"
              whileHover={{ x: 5, color: "#d4af37" }}
            >
              +94 XX XXX XXXX
            </motion.p>
            <motion.p 
              variants={linkVariants}
              className="text-gray-300"
              whileHover={{ x: 5, color: "#d4af37" }}
            >
              info@silverfern.lk
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <div className="font-semibold mb-2">Office Hours</div>
          <motion.div 
            className="space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={linkVariants}
              className="text-gray-300"
              whileHover={{ x: 5, color: "#d4af37" }}
            >
              Mon–Fri 9:00–17:00
            </motion.p>
            <motion.p 
              variants={linkVariants}
              className="text-gray-300"
              whileHover={{ x: 5, color: "#d4af37" }}
            >
              Sat by appointment
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="text-center text-xs text-gray-500 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        © {new Date().getFullYear()} Silver Fern Consultancy. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
