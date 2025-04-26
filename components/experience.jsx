// components/InternshipSection.jsx
import React from 'react';
import { internshipData } from '../assets/assets';
import { motion } from 'framer-motion';

const InternshipSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience" className="py-16"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-white-800 text-center mb-10">Internship Experience</h2>

        {internshipData.map((intern, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md p-8 mb-8 transition duration-300 hover:shadow-lg"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-semibold text-gray-700">{intern.position}</h3>
              <p className="text-sm text-gray-500">{intern.company} • {intern.location}</p>
              <p className="text-sm text-gray-500 italic">{intern.duration}</p>
            </motion.div>

            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="list-disc pl-5 text-gray-700 space-y-2 text-sm"
            >
              {intern.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </motion.ul>

            {/* Download Button for Internship Letter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8"
            >
              <a
                href="/internship-letter.pdf" // The path to your PDF file
                download
                className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
              >
                📄 Download Internship Letter
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InternshipSection;
