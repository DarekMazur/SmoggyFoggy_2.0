import { FC, ReactNode } from 'react'
import StyledWrapper, {
  IStyledWrapperProps,
} from '@/components/Molecules/Wrapper/Wrapper.style'

interface IWrapperProps extends IStyledWrapperProps {
  children: ReactNode
}

const Wrapper: FC<IWrapperProps> = ({ children, ...rest }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledWrapper {...rest}>{children}</StyledWrapper>
}

export default Wrapper
