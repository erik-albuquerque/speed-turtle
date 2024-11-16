import { cn } from '::/lib/utils'
import type { AnimationControls, Variants } from 'motion/react'
import { motion } from 'motion/react'

const pathVariants: Variants = {
  normal: {
    x: 0,
    rotate: 0,
  },
  animate: {
    x: [0, -1, 2, 0],
    rotate: [0, -10, 0, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.2, 0.5, 1],
      stiffness: 260,
      damping: 20,
    },
  },
}

const Play = ({ controls }: { controls: AnimationControls }) => {
  return (
    <div
      className={cn(
        'flex select-none items-center justify-center',
        'text-white dark:text-neutral-900'
      )}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Play icon</title>
        <motion.polygon
          points="6 3 20 12 6 21 6 3"
          variants={pathVariants}
          animate={controls}
        />
      </motion.svg>
    </div>
  )
}

export { Play }
