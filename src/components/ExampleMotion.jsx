import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ParicalSeparator } from '../utility/separator'
import { animateForSolDeMayo } from '../utility/animation'

const ExampleMotion = () => {

  const [isVisible, setIsVisible] = useState(true)

  const animate = {
    animate: {
      rotate: -360,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>

      {/* EXAMPLE 1  */}
      <motion.div
        className='w-[100px] h-[100px] bg-yellow-500 rounded-xl mb-1 flex flex-col items-center justify-center'
        animate={animate.animate}
        transition={animate.animate.transition}
      >
        <p>Hello Motion</p>
        <p>🤢 🤮</p>

      </motion.div>

      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0088",
          borderRadius: 5,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />

      <ParicalSeparator />

      {/* EXAMPLE 2 INITIAL  */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#dd00ee",
          borderRadius: "50%",
        }}
      />

      <ParicalSeparator />

      {/* EXAMPLE 3 - GESTURES */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={() => console.log('hover started!')}
        onTapStart={() => console.log('Click :$')}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#9911ff",
          borderRadius: 5,
        }}
      >
        Click me :$
      </motion.div>

      <ParicalSeparator />

      {/* EXAMPLE 4 AnimatePresence  */}
      <div className='flex flex-col items-center gap-4'>
        <button
          className='p-2 bg-gray-500 text-white rounded cursor-pointer'
          onClick={() => { setIsVisible(!isVisible) }}
        >
          Toggle
        </button>

        <AnimatePresence>
          {
            isVisible && (
              <motion.div
                className="w-32 h-32 bg-blue-500 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1 }}
              />
            )
          }
        </AnimatePresence>



      </div>

      <motion.div
        className='w-[100px] h-[100px] bg-red-500 rounded-xl mb-1 flex flex-col items-center justify-center'
        variants={animateForSolDeMayo()}
        initial='initial'
        animate={['animateEntry', 'animateFloating']}
      >
        <p>Reutilizando</p>
        <p>😎</p>

      </motion.div>




    </div>
  )
}

export default ExampleMotion