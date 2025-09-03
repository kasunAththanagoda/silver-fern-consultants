'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Course = { id: string; area: string; level: string; title: string; duration: string; city: string };
export function CourseFilter({ courses, careers }:{ courses: Course[]; careers: { area:string; roles:string[] }[] }){
  const [q, setQ] = useState('');
  const [area, setArea] = useState('');
  const [level, setLevel] = useState('');

  const areas = useMemo(()=> Array.from(new Set(courses.map(c=>c.area))), [courses]);
  const levels = useMemo(()=> Array.from(new Set(courses.map(c=>c.level))), [courses]);

  const filtered = courses.filter(c =>
    (!q || c.title.toLowerCase().includes(q.toLowerCase())) &&
    (!area || c.area === area) &&
    (!level || c.level === level)
  );

  const selectedCareers = careers.find((x:any)=>x.area===area) ?? careers[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
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

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid lg:grid-cols-3 gap-8 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:col-span-2">
        <motion.div 
          variants={filterVariants}
          className="card p-4 mb-4 grid md:grid-cols-3 gap-3"
        >
          <motion.input 
            placeholder="Search courses" 
            value={q} 
            onChange={e=>setQ(e.target.value)} 
            className="rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.select 
            value={area} 
            onChange={e=>setArea(e.target.value)} 
            className="rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">All areas</option>
            {areas.map(a=> <option key={a}>{a}</option>)}
          </motion.select>
          <motion.select 
            value={level} 
            onChange={e=>setLevel(e.target.value)} 
            className="rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">All levels</option>
            {levels.map(l=> <option key={l}>{l}</option>)}
          </motion.select>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c, index) => (
              <motion.div 
                key={c.id} 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="card p-5 hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {c.area} • {c.level} • {c.city}
                </motion.div>
                <motion.div 
                  className="font-semibold mt-1"
                  whileHover={{ color: "#1e40af" }}
                  transition={{ duration: 0.2 }}
                >
                  {c.title}
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-600 mt-1"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Duration: {c.duration}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length===0 && (
            <motion.div 
              className="text-gray-600 col-span-2 text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No courses found.
            </motion.div>
          )}
        </motion.div>
      </div>
      <aside>
        <motion.div 
          variants={cardVariants}
          className="card p-5 sticky top-24"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.h4 
            className="font-semibold"
            whileHover={{ color: "#1e40af" }}
            transition={{ duration: 0.2 }}
          >
            Typical Careers
          </motion.h4>
          <p className="text-gray-600 text-sm">Based on the selected study area.</p>
          <motion.ul 
            className="mt-3 space-y-2 list-disc pl-5 text-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {selectedCareers.roles.map((r:string,i:number) => (
                <motion.li 
                  key={`${selectedCareers.area}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  whileHover={{ x: 5, color: "#1e40af" }}
                >
                  {r}
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      </aside>
    </motion.div>
  );
}
