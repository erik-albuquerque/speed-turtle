import { motion } from 'motion/react'
import type { AnimationControls, Variants } from 'motion/react'
import { cn } from '::/lib/utils'

const variants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
}

const PackageX = ({
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
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>PackageX</title>
        <motion.path
          variants={variants}
          animate={controls}
          initial="normal"
          d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        />
        <motion.path
          variants={variants}
          animate={controls}
          initial="normal"
          d="m7.5 4.27 9 5.15"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          initial="normal"
          points="3.29 7 12 12 20.71 7"
        />
        <motion.line
          variants={variants}
          animate={controls}
          initial="normal"
          x1="12"
          x2="12"
          y1="22"
          y2="12"
        />
        <motion.path
          variants={variants}
          animate={controls}
          initial="normal"
          d="m17 13 5 5m-5 0 5-5"
        />
      </svg>
    </div>
  )
}

export { PackageX }
