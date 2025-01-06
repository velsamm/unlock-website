import React, { FC } from "react";
import Image from "next/image";
import underConstructionSrc from '$assets/icons/svg/under-construction.svg';

export const UnderConstruction: FC = () => {

	return (
		<div className='m-auto'>
			<span>Страница находится в разработке</span>
			<Image width={256} src={underConstructionSrc} alt="under-construction" />
		</div>
	)
}