import React, { FC } from "react";
import cn from "classnames";

interface Props {
	className?: string;
}

export const Divider: FC<Props> = ({ className }) => {
	return (
		<div className={cn('h-[1px] w-full bg-gray-200', className)}/>
	)
}