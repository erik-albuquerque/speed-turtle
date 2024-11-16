import { motion } from 'motion/react'
import type { AnimationControls, Transition } from 'motion/react'
import { cn } from '::/lib/utils'

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
}

const ChevronsLeftRight = ({
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>ChevronsLeftRight</title>
        <motion.path
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '-2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m9 7-5 5 5 5"
        />
        <motion.path
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m15 7 5 5-5 5"
        />
      </svg>
    </div>
  )
}

export { ChevronsLeftRight }
