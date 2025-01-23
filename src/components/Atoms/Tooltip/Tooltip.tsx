import StyledTooltip from '@/components/Atoms/Tooltip/Tooltip.style'
import { ReactNode } from 'react'

const Tooltip = ({
  label,
  direction,
  children,
}: {
  label: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  children: ReactNode
}) => {
  return (
    <StyledTooltip $direction={direction}>
      <span>{label}</span>
      {children}
    </StyledTooltip>
  )
}

export default Tooltip
