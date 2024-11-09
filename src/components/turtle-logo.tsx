import * as Lucide from 'lucide-react'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Tooltip } from '::/components/tooltip'

type TurtleLogoProps = Lucide.LucideProps

const TurtleLogo = (props: TurtleLogoProps) => {
  const [isDragging, setIsDragging] = useState(false)

  const toggleDragging = useCallback(() => {
    setIsDragging(!isDragging)
  }, [isDragging])

  const animateConfig = {
    scaleX: isDragging ? 1.4 : 1,
    scaleY: isDragging ? 0.6 : 1,
  }

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <motion.div
          className="cursor-grabbing"
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={toggleDragging}
          onDragEnd={toggleDragging}
          animate={animateConfig}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Lucide.Turtle
            className="size-8 text-neutral-950 dark:text-white"
            {...props}
          />
        </motion.div>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        <p>Drag me, pls! I need a stretch!</p>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

export { TurtleLogo }
