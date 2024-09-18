import React from 'react'
import { animate, motion } from 'framer-motion'

//varients
const stairAnimation = {
initial: {
    top: "0%",
},
animate: {
    top: "100%",
},
exit: {
    top: ["100%","0"],
},

};

//calculate the reverse index for staggred delay

const reverseIndex = (index) =>{
  const totalSteps = 6;
  return totalSteps - index - 1;
};


const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs.Each div will have the some animation defined by the stairAnimation object.The delay for each div is calculated sinamically based on it is reversed index, creating a staggered effect with  decreasing for each subsequent step */}
        
        {[...Array(6)].map((_,index)=>{
         return(
          <motion.div
              key={index}
              variants={stairAnimation}
              initial= "initial"
              animate= "animate"
              exit= "exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="w-full h-full bg-white relative"
            />
         );
        })}
        
    </>
  )
}

export default Stairs