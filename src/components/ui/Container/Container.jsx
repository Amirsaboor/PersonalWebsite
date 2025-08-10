import { forwardRef } from 'react'
import OuterContainer from './OuterContainer'
import InnerContainer from './InnerContainer'

const Container = forwardRef(function Container({ children, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

export default Container


