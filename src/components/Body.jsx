import React from 'react'
import { motion } from 'framer-motion'
import SolDeMayo from '../assets/SolDeMayo.png'
import CharlyArg from '../assets/CharlyArg.jpg'
import { animateForSolDeMayo } from '../utility/animation'

const Body = () => {

  return (
    <div className='flex justify-center'>
      <motion.div
        className='m-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={animateForSolDeMayo()}
        initial='initial'
        animate={['animateEntry', 'animateFloating']}
      >
        <img
          src={SolDeMayo}
          className='w-46'
        />
      </motion.div>

      <motion.div
        className='m-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={animateForSolDeMayo('right')}
        initial='initial'
        animate={['animateEntry', 'animateFloating']}
      >
        <img
          src={CharlyArg}
          className='w-46'
        />
      </motion.div>
    </div>
  )
}

export default Body