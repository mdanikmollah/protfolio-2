"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity:1,
                transition:{delay: 2, duration: 0.4, ease:"easeIn"},
            }}
        >
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity:1,
                transition:{delay: 2.4, duration: 0.4, ease:"easeInOut"},
            }} 
             className="w-[230px] h-[230px] right-[34px] top-[12px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute xl:right-[56px] xl:top-[20px] ">
                <Image 
                    src="/assets/me6.jpg"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className='object-contain'
                />
            </motion.div>
            {/* circle */}
            <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                       
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo