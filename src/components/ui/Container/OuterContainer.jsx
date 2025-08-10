import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

export default OuterContainer


