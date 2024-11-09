import {
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip'
import {
  Arrow as TooltipArrow,
  type TooltipProps,
  type TooltipContentProps,
  type TooltipTriggerProps,
} from '@radix-ui/react-tooltip'

const TooltipCustomRoot = ({
  children,
  ...props
}: TooltipProps & {
  children: React.ReactNode
}) => {
  return <TooltipPrimitive {...props}>{children}</TooltipPrimitive>
}

const TooltipCustomContent = ({ children, ...props }: TooltipContentProps) => {
  return (
    <TooltipContent {...props}>
      {children}
      <TooltipArrow width={11} height={5} />
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
