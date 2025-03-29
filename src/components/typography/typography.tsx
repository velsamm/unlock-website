import React, { Children, FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import type { TypographyAppearance } from '$components/typography/types'
import './typography.css'

interface Props extends PropsWithChildren {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  appearance?: TypographyAppearance
  className?: string
}

export const Typography: FC<Props> = ({
  as = 'span',
  appearance = 'regular',
  className,
  children,
}) => {
  const Component = as

  return (
    <Component className={cn(`typography-${appearance}`, className)}>
      {Children.map(children, (child) => child)}
    </Component>
  )
}
