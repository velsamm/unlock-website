import React, { FC, PropsWithChildren } from "react";

export const Li: FC<PropsWithChildren> = ({ children }) => (
	<li className='before:absolute before:-ml-5 before:content-["\2014"]'>
		{React.Children.map(children, (child) => child)}
	</li>
)