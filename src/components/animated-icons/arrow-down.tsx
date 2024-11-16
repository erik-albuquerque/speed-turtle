import { motion } from 'motion/react'
import type { AnimationControls, Variants } from 'motion/react'
import { cn } from '::/lib/utils'

const pathVariants: Variants = {
  normal: { d: 'm12 19-7-7 7-7', translateX: 0 },
  animate: {
    d: 'm12 19-7-7 7-7',
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
}

const secondPathVariants: Variants = {
  normal: { d: 'M19 12H5' },
  animate: {
    d: ['M19 12H5', 'M19 12H10', 'M19 12H5'],
    transition: {
      duration: 0.4,
    },
  },
}

const ArrowDown = ({
  controls,
  className,
}: { controls: AnimationControls; className?: string }) => {
  return (
    <div
      className={cn(
        'flex size-4 select-none items-center justify-center',
        '-rotate-90 transition-colors duration-200',
        className
      )}
    >
      <svg
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
        <title>ArrowDown</title>
        <motion.path
          d="m12 19-7-7 7-7"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M19 12H5"
          variants={secondPathVariants}
          animate={controls}
        />
      </svg>
    </div>
  )
}

export { ArrowDown }