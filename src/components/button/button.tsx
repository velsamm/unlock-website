import React, { Children, FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import './button.css'

interface Props extends PropsWithChildren {
  className?: string
  onClick?: React.JSX.IntrinsicElements['button']['onClick']
}

export const Button: FC<Props> = ({ className, children, onClick }) => {
  return (
    <button className={cn('button', className)} onClick={onClick}>
      {Children.map(children, (child) => child)}
    </button>
  )
}
