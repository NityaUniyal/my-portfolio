import React from 'react';
import { workData } from '../assets/assets'; 
import Image from 'next/image';
import { motion } from 'framer-motion'


const Project = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     transition={{ duration: 1 }}
    id="projects" className="w-full px-[12%] py-20">
      <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center text-lg font-Ovo mb-2 text-white-500">My Recent Work</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo mb-10 text-white">Projects</motion.h2>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {workData.map((work, index) => (
          <motion.div
           whileHover={{ scale: 1.05 }}
           transition={{ duration: 0.3 }}
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={work.bgImage}
              alt={work.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-sm mt-2">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Project;
