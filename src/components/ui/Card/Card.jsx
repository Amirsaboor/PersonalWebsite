import clsx from 'clsx'

export default function Card({ as: Component = 'div', className, children }) {
  return (
    <Component className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  )
}


