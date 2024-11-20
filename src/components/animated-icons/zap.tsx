import { motion } from 'motion/react'
import type { AnimationControls, Transition, Variants } from 'motion/react'
import { cn } from '::/lib/utils'

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
}

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.5, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
}

const Zap = ({
  controls,
  className,
}: { controls: AnimationControls; className?: string }) => {
  return (
    <div
      className={cn(
        'flex select-none items-center justify-center',
        'transition-colors duration-200',
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="6 0 15 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Zap</title>
        <motion.path
          animate={controls}
          variants={pathVariants}
          transition={defaultTransition}
          initial="normal"
          d="m18 3-4 4h6l-4 4"
        />
      </svg>
    </div>
  )
}

export { Zap }
