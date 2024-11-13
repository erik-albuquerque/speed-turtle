import {
  Arrow as TooltipArrow,
  type TooltipProps,
  type TooltipContentProps,
  type TooltipTriggerProps,
} from '@radix-ui/react-tooltip'

import { cn } from '::/lib/utils'

import {
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip'

const TooltipCustomRoot = ({
  children,
  ...props
}: TooltipProps & {
  children: React.ReactNode
}) => {
  return (
    <TooltipPrimitive delayDuration={250} {...props}>
      {children}
    </TooltipPrimitive>
  )
}

const TooltipCustomContent = ({
  children,
  className = undefined,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipContent className={cn('bg-neutral-900', className)} {...props}>
      {children}
      <TooltipArrow
        className="fill-neutral-900 dark:fill-white"
        width={11}
        height={5}
      />
    </TooltipContent>
  )
}

const TooltipCustomTrigger = ({ children, ...props }: TooltipTriggerProps) => {
  return (
    <TooltipTrigger asChild {...props}>
      {children}
    </TooltipTrigger>
  )
}

const Tooltip = {
  Root: TooltipCustomRoot,
  Content: TooltipCustomContent,
  Trigger: TooltipCustomTrigger,
}

export { Tooltip }
