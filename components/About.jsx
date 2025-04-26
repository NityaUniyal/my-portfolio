import React from 'react'
import Image from 'next/image' 
import { assets, infoList } from '../assets/assets'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo mt-20'>Introduction</motion.h4>
         
            <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>About me</motion.h2>
        
<motion.div
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1}}
transition={{ duration: 0.8}}
className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'

>
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className='w-64 sm:w-80 rounded-3lxl max-w-none'>   
       <Image src={assets.user_image} alt='user' 
       className='w-full rounded-3xl'/> 
    </motion.div>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='flex-1'>
<p className='mb-10 max-w-2xl font-Ovo'>I’m Nitya Uniyal, a passionate front-end web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.  
Currently pursuing my Master of Computer Applications (MCA), I love transforming ideas into engaging, user-friendly websites. My journey started during my BCA, and since then, I’ve been dedicated to honing my skills through real-world projects, internships, and self-learning.
When I'm not coding, I enjoy exploring UI/UX trends, solving logic problems, and experimenting with new web technologies. My goal is to create impactful digital experiences and grow as a professional web develope
Let’s connect and build something great!
</p>

<motion.ul
initial={{ opacity: 0 }}
whileInView={{ opacity: 1}}
transition={{ duration: 0.8, delay: 1 }}
className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
    {infoList.map(({icon, title, description},index)=>(
     <motion.li
     whileInView={{ scale: 1.05 }}
     className='border-[0.5px] border-gray-400
      rounded-xl p-6 cursor-pointer hover:bg-black hover:-translate-y-1 duration-500'
      key={index}>
        <Image src={icon} alt='title'/> 
        <h3 className='my-4 font-semibold text-white-700'>{title}</h3>
        <p className='text-white-600 text-sm'>{description}</p>
     </motion.li>   
    ))}
</motion.ul>
   



    </motion.div>
</motion.div>

        </motion.div>
    )
}

export default About