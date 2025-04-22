import React, { FC, PropsWithChildren } from "react";

export const Ul: FC<PropsWithChildren> = ({ children }) => (
	<ul className='list-none px-10'>
		{React.Children.map(children, (child) => child)}
	</ul>
)