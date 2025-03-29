import React, { Children, FC, JSX, PropsWithChildren } from "react";

type Props = PropsWithChildren<JSX.IntrinsicElements['section']>;

export const Block: FC<Props> = ({ children, ...rest }) => {
	return (
		<section {...rest}>
			<div className='mx-auto max-w-[1150px] xl:px-0 px-2'>
				{Children.map(children, child => child)}
			</div>
		</section>
	)
}
