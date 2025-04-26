import React from 'react';
import { workData } from '../assets/assets'; 
import Image from 'next/image';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[10%] py-20 bg-black text-white"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-lg font-medium text-gray-400"
      >
        My Recent Work
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl md:text-5xl font-bold mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workData.map((work, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={work.bgImage}
                alt={work.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-sm text-gray-300">{work.description}</p>
           
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
