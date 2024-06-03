"use client"
import React from 'react'
import { motion } from 'framer-motion'
const FAQ = () => {
  return (
    <div className='bg-white w-full'>
        <div className="max-w-screen-xl mx-auto">
            <motion.div 
            variants={{onScreen:{opacity:1, translateY:0, transformOrigin:"top",}, offScreen:{opacity:0, translateY:-20,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.5, type:"spring",}}
            className='text-lg text-[#FF5555] clash-medium py-12'>
                F A Q
                <motion.h1 
                variants={{onScreen:{opacity:1, translateX:0, transformOrigin:"right",}, offScreen:{opacity:0, translateX:-100,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className='text-5xl clash-bold text-black'>
                    Frequently Asked <br />
                    Questions
                </motion.h1>
            </motion.div>
            <div className="flex flex-wrap gap-4 items-start justify-center pb-16">
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-[#FF5555] p-8 text-3xl clash-bold rounded-lg text-white">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-white p-8 text-3xl clash-bold rounded-lg text-black">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-white p-8 text-3xl clash-bold rounded-lg text-black">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-[#FF5555] p-8 text-3xl clash-bold rounded-lg text-white">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-[#FF5555] p-8 text-3xl clash-bold rounded-lg text-white">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}}
                className="w-[48%] bg-white p-8 text-3xl clash-bold rounded-lg text-black">
                    The Best Financial Accounting <br /> App Ever!
                    <p className='text-lg mt-2'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default FAQ