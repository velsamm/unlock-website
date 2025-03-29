import React, { Children, FC, PropsWithChildren } from "react";
import cn from "classnames";
import './button.css';

interface Props extends PropsWithChildren {
	className?: string;
}

export const Button: FC<Props> = ({ className, children }) => {
	return (
		<button className={cn('button', className)}>{Children.map(children, child => child)}</button>
	)
}