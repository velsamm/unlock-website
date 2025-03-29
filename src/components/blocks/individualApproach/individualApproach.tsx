import React, { FC } from "react";
import { Block } from "$components/block/block";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import individual1Image from '$assets/icons/individual_1.jpeg';
import individual2Image from '$assets/icons/individual_2.jpeg';

export const IndividualApproach: FC = () => {
	return (
		<Block>
			<div className='grid grid-rows-2 grid-cols-2 gap-10'>
				<div className='row-span-full col-span-2'>
					<Typography appearance='header' as='p'>Наш подход к клиентам</Typography>
				</div>

				<div className='row-span-1 md:col-span-1 col-span-2'>
					<ImageWrapper src={individual1Image} />
					<Typography appearance='subheader' as='h3' className='my-5'>Индивидуальное консультирование</Typography>
					<Typography as='h4'>
						Индивидуальный подход и консультирование клиентов 24/7
					</Typography>
				</div>

				<div className='row-span-1 md:col-span-1 col-span-2'>
					<ImageWrapper src={individual2Image}/>
					<Typography appearance='subheader' as='h3' className='my-5'>Нетривиальные решения</Typography>
					<Typography as='h4'>
						Нетривиальные подходы к решению вопросов в кратчайшие сроки
					</Typography>
				</div>
			</div>
		</Block>
	)
}