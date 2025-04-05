import React, { FC } from "react";
import { Typography } from "$components/typography/typography";
import { Button } from "$components/button/button";
import { ImageWrapper } from "$components/image/image";
import CtaImage from '$assets/icons/office-table-window.jpg';
import { Block } from "$components/block/block";

export const CTA: FC = () => {
	return (
		<Block>
			<div className='grid grid-cols-2 grid-rows-5 gap-10'>
				<div className='col-span-1 row-span-1 md:block hidden' />

				<div className='md:col-span-1 row-span-5 col-span-2'>
					<ImageWrapper src={CtaImage} />
				</div>

				<div className='md:col-span-1 row-span-1 col-span-2 flex'>
					<Typography className='my-auto' appearance='header'>
						Разблокируем доступ к средствам на криптовалютных биржах и банковских счетах
					</Typography>
				</div>

				<div className='md:col-span-1 row-span-1 col-span-2 flex'>
					<Typography className='my-auto'>
						Профессиональная юридическая помощь при блокировке криптовалютных и банковских счетов
					</Typography>
				</div>

				<div className='md:col-span-1 row-span-1 col-span-2 flex'>
					<Button className='my-auto w-full md:w-auto'>
						<Typography appearance='button'>
							Получить консультацию
						</Typography>
					</Button>
				</div>

				<div className='col-span-1 row-span-1 md:block hidden' />
			</div>
		</Block>
	)
}