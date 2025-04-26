import React from 'react'
import Image from 'next/image'
import { assets, serviceData }  from '../assets/assets'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.3 }}
       className='text-center mb-2 text-lg font-Ovo'>Technologies and tools I use</h4>
            <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>My Technical Skills</motion.h2>
          
            <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Here are the technologies and tools I use to build fast, responsive, and beautiful web experiences.
        </motion.p>
        <motion.div 
        initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 my-10'>
          {serviceData.map(({title, description, link}, index)=>(
            <div key={index}
            className='border border-gray-400
             rounded-lg px-8 py-12
              hover:shadow-black 
              cursor-pointer 
              hover:bg-black hover:-translate-y-1 
              duration-500' >

<h3 className='text-lg my-4 text-white-700'>{title}</h3>
<p className='text-sm text-white-600 leading'>
    {description}
</p>
<a href={link} className='flex items-center text-white gap-2 text-sm mt-5'>
    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
</a>
            </div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default Skills 