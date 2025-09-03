'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const nav = [
  {href:'/', label:'Home'},
  {href:'/services', label:'Services'},
  {href:'/courses', label:'Courses & Careers'},
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
        duration: 0.5,
        ease: "easeOut"
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
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100"
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
              className="text-brand-700"
              whileHover={{ color: "#1e3a8a" }}
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
                className={"hover:text-brand-700 transition-colors duration-200 " + (pathname===i.href?"text-brand-700 font-semibold":"text-gray-700")}
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contact" className="btn btn-primary">Free Consultation</Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
