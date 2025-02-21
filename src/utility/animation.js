export   const animateForSolDeMayo = (direction = 'left') => {
  return {
    initial: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0
    },
    animateEntry: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      }
    },
    animateFloating: {
      y: [0, -20, 0, 20, 0],
      transition: {
        duration: 5,
        repeat: Infinity
      }
    }
  }
}