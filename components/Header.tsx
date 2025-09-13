'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const nav = [
  {href:'/', label:'Home'},
  {href:'/services', label:'Services'},
  {href:'/courses', label:'Courses & Careers'},
  {href:'/universities', label:'Universities'},
  {href:'/about', label:'About'},
  {href:'/contact', label:'Contact'},
];

export function Header(){
  const pathname = usePathname();
  
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-40 bg-black/60 backdrop-blur border-b border-neutral-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-between h-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-extrabold text-xl tracking-tight">
            <motion.span 
              className="text-brand-500"
              whileHover={{ color: "#d4af37" }}
              transition={{ duration: 0.2 }}
            >
              Silver
            </motion.span> Fern
          </Link>
        </motion.div>
        <motion.nav 
          className="hidden md:flex gap-6 text-sm"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {nav.map(i => (
            <motion.div
              key={i.href}
              variants={navItemVariants}
            >
              <Link 
                href={i.href} 
                className={"hover:text-brand-400 transition-colors duration-200 " + (pathname===i.href?"text-brand-400 font-semibold":"text-gray-300")}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {i.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link 
            href="/contact" 
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 text-black px-4 py-2 rounded-xl font-bold shadow-lg hover:from-brand-500 hover:to-brand-600 transition-all duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📞
            </motion.span>
            FREE Consultation
            <motion.div
              className="absolute -top-1 -right-1 bg-brand-400 text-black text-xs px-1 py-0.5 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              FREE
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
